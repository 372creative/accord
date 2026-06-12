import {
  CollectionItem,
  CuratedList,
  Fragrance,
  OnboardingAnswers,
  RecBucket,
  Recommendation,
} from '../types';
import { fragrances, findById } from '../data/fragrances';
import { avoidsSweet, computeWeights, SignalWeights } from '../logic/profile';

const BUDGET_ORDER: Record<string, number> = {
  'Under €30': 0,
  '€30–70': 1,
  '€70–120': 2,
  '€120–200': 3,
  '€200+': 4,
};
const PRICE_TIER: Record<Fragrance['priceCategory'], number> = {
  budget: 0,
  mid: 1,
  designer: 2,
  premium: 3,
  niche: 4,
};

function joinNice(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

/** "Aventus-style" tags or clone/alternative popularity buckets. */
function isAlternativeLeaning(f: Fragrance): boolean {
  return (
    f.styleTags.some((t) => /-style$/i.test(t)) || /clone|alternative/i.test(f.popularity)
  );
}

/** Reverse map: fragrance id → dataset originals that list it as a cheaper alternative. */
const ALTERNATIVE_FOR = new Map<string, Fragrance[]>();
for (const f of fragrances) {
  for (const altId of f.cheaperAlternativeIds) {
    ALTERNATIVE_FOR.set(altId, [...(ALTERNATIVE_FOR.get(altId) ?? []), f]);
  }
}

interface ScoreContext {
  answers: OnboardingAnswers;
  weights: SignalWeights;
  collection: CollectionItem[];
  sweetAverse: boolean;
  cloneAverse: boolean;
  /** Positive anchors: onboarding favourites + high-rated keepers. */
  anchors: Fragrance[];
  /** Fragrances that explicitly did not work. */
  antiAnchors: { fragrance: Fragrance; reasons: string[] }[];
  /** Lower-cased preference words for matching the dataset's recommendSignals. */
  prefWords: Set<string>;
}

export function buildScoreContext(
  answers: OnboardingAnswers,
  collection: CollectionItem[]
): ScoreContext {
  const weights = computeWeights(answers);

  const anchorIds = new Set<string>();
  answers.favourites.forEach((f) => f.fragranceId && anchorIds.add(f.fragranceId));
  collection.forEach((c) => {
    const positive =
      (c.rating !== undefined && c.rating >= 8) ||
      ['Keeper', 'Would buy again', 'Want full bottle'].includes(c.decisionTag ?? '');
    if (positive && c.status !== 'sold') anchorIds.add(c.fragranceId);
  });

  const antiAnchors: ScoreContext['antiAnchors'] = [];
  answers.dislikes.forEach((d) => {
    const f = findById(d.fragranceId);
    if (f) antiAnchors.push({ fragrance: f, reasons: d.reasons });
  });
  collection.forEach((c) => {
    const negative = ['Would not buy again', 'Not for me', 'Overhyped'].includes(
      c.decisionTag ?? ''
    );
    const f = findById(c.fragranceId);
    if (negative && f && !antiAnchors.some((a) => a.fragrance.id === f.id)) {
      antiAnchors.push({ fragrance: f, reasons: c.dislikedChips });
    }
  });

  let sweetAverse = avoidsSweet(weights);
  if (
    antiAnchors.some((a) => a.reasons.includes('Too sweet')) ||
    collection.some(
      (c) => c.dislikedChips.includes('Too sweet') && c.decisionTag === 'Would not buy again'
    )
  ) {
    sweetAverse = true;
  }

  const prefWords = new Set<string>();
  answers.likedDirections.forEach((d) =>
    d.split('/').forEach((p) => prefWords.add(p.trim().toLowerCase()))
  );
  answers.favourites.forEach((f) => f.reasons.forEach((r) => prefWords.add(r.toLowerCase())));
  if (answers.currentGoals.includes('Daily signature scent')) prefWords.add('daily');
  if (answers.currentGoals.includes('Office scent')) prefWords.add('office');

  return {
    answers,
    weights,
    collection,
    sweetAverse,
    cloneAverse: answers.openToClones === 'No clones',
    anchors: [...anchorIds].map((id) => findById(id)).filter((f): f is Fragrance => !!f),
    antiAnchors,
    prefWords,
  };
}

function sharedDirections(a: Fragrance, b: Fragrance): string[] {
  return a.directions.filter((d) => b.directions.includes(d));
}

function linkedToAnchor(f: Fragrance, anchor: Fragrance): boolean {
  return anchor.similarIds.includes(f.id) || f.similarIds.includes(anchor.id);
}

export function scoreFragrance(f: Fragrance, ctx: ScoreContext): Recommendation {
  const { weights, answers } = ctx;
  let score = 58;
  const signals: string[] = [];
  const cautions: string[] = [];

  // Direction overlap with stated + inferred likes.
  const likedHits = f.directions.filter((d) => (weights.like[d] ?? 0) >= 1.5);
  score += Math.min(likedHits.length * 6, 18);
  if (likedHits.length) signals.push(`Liked directions: ${likedHits.join(', ')}`);

  const avoidedHits = f.directions.filter((d) => (weights.avoid[d] ?? 0) >= 2);
  score -= avoidedHits.length * 10;
  if (avoidedHits.length)
    cautions.push(
      `leans ${joinNice(avoidedHits.map((d) => d.toLowerCase()))}, which you usually avoid`
    );

  // Dataset recommend-if signals vs the user's own words.
  const signalHits = f.recommendSignals.filter((s) => ctx.prefWords.has(s.toLowerCase()));
  if (signalHits.length >= 2) {
    score += 4;
    signals.push(`Its profile signals: ${signalHits.slice(0, 3).join(', ')}`);
  }

  // Sweetness handling (dataset scale runs ~3–8).
  if (ctx.sweetAverse) {
    if (f.sweetnessLevel > 6) {
      score -= (f.sweetnessLevel - 5) * 5;
      cautions.push('noticeably sweeter than your comfort zone — sample before committing');
    } else if (f.sweetnessLevel >= 5) {
      score -= 4;
      cautions.push('has a mild sweet streak');
    } else {
      score += 5;
      signals.push('Low sweetness fits your profile');
    }
  }

  // Similarity to anchors (favourites / would-buy-agains).
  let bestAnchor: { name: string; shared: string[]; linked: boolean } | null = null;
  for (const a of ctx.anchors) {
    if (a.id === f.id) continue;
    const linked = linkedToAnchor(f, a);
    const shared = sharedDirections(a, f);
    if (
      (linked || shared.length >= 2) &&
      (!bestAnchor || (linked && !bestAnchor.linked) || shared.length > bestAnchor.shared.length)
    ) {
      bestAnchor = { name: a.name, shared, linked };
    }
  }
  if (bestAnchor) {
    score += bestAnchor.linked ? 10 : 8;
    signals.push(`Close to ${bestAnchor.name}`);
  }

  // Similarity to things that didn't work.
  for (const anti of ctx.antiAnchors) {
    const close = linkedToAnchor(f, anti.fragrance) || sharedDirections(anti.fragrance, f).length >= 3;
    if (close) {
      score -= 12;
      cautions.push(`shares a lot of DNA with ${anti.fragrance.name}, which didn't work for you`);
      if (anti.reasons.includes('Too sweet') && f.sweetnessLevel >= 6) score -= 4;
      break;
    }
  }

  // Generic-blue aversion.
  if (
    (weights.avoid['__genericblue'] ?? 0) > 0 &&
    f.styleTags.some((t) => /^blue/i.test(t)) &&
    f.uniquenessLevel <= 5
  ) {
    score -= 8;
    cautions.push('sits close to the generic "blue fresh" zone you avoid');
  }

  // Crowd-pleaser fatigue.
  if (
    (weights.avoid['__common'] ?? 0) >= 2 &&
    /mainstream|popular/i.test(f.popularity) &&
    f.uniquenessLevel <= 5
  ) {
    score -= 6;
    cautions.push('a very common scent — you tend to find these overhyped');
  }

  // Clone openness.
  if (ctx.cloneAverse && isAlternativeLeaning(f)) {
    score -= 8;
    cautions.push('an alternative-style composition — you prefer originals');
  }

  // Budget.
  const budgetTier = BUDGET_ORDER[answers.budgetRange ?? ''] ?? 2;
  const priceTier = PRICE_TIER[f.priceCategory];
  if (priceTier <= budgetTier) {
    score += 3;
  } else if (priceTier - budgetTier >= 2) {
    score -= 4;
    cautions.push('well above your usual budget — try a decant first');
  } else {
    cautions.push('slightly above your usual budget');
  }

  // Projection & longevity preferences.
  if (answers.projection === 'Very subtle' && f.projectionLevel >= 8) {
    score -= 5;
    cautions.push('projects harder than you usually like');
  }
  if (answers.projection === 'Beast mode') {
    if (f.projectionLevel <= 4) cautions.push('wears close to the skin — quieter than your preference');
    else if (f.projectionLevel >= 7) score += 2;
  }
  const wantsLongevity = answers.favourites.some((x) => x.reasons.includes('Long-lasting'));
  if (wantsLongevity && f.longevityLevel >= 7) score += 3;

  // Goals.
  if (answers.currentGoals.includes('Something unique') && f.uniquenessLevel >= 7) {
    score += 4;
    signals.push('Your goal: something unique');
  }
  if (
    answers.currentGoals.includes('Cheap hidden gems') &&
    (f.priceCategory === 'budget' || /middle eastern|affordable/i.test(f.category))
  ) {
    score += 4;
    signals.push('Your goal: cheap hidden gems');
  }
  if (answers.currentGoals.includes('Cold weather scent') && f.darknessLevel >= 5) score += 2;

  const match = Math.round(Math.max(56, Math.min(97, score)));

  // Why it fits — built from the strongest concrete signals.
  let why: string;
  if (likedHits.length >= 2) {
    why = `You lean ${joinNice(likedHits.slice(0, 3).map((d) => d.toLowerCase()))}${
      ctx.sweetAverse && f.sweetnessLevel <= 4 ? ' and keep sweetness low' : ''
    } — this delivers exactly that register. ${f.description}`;
  } else if (bestAnchor) {
    why = bestAnchor.linked
      ? `The dataset flags it as a close relative of ${bestAnchor.name}, which you rated highly. ${f.description}`
      : `It shares its ${joinNice(bestAnchor.shared.map((d) => d.toLowerCase()))} core with ${
          bestAnchor.name
        }, which you rated highly. ${f.description}`;
  } else if (likedHits.length === 1) {
    why = `A strong expression of the ${likedHits[0].toLowerCase()} direction you enjoy. ${f.description}`;
  } else {
    why = `${f.description} ${f.bestFor[0] ?? 'A well-regarded pick while Accord learns your taste.'}${f.bestFor[0] ? '.' : ''}`;
  }

  // Rule-driven cautions first; fall back to the dataset's own caution.
  const caution = cautions.length
    ? `It ${cautions[0]}${cautions.length > 1 ? `; also ${cautions[1]}` : ''}.`
    : f.caution || undefined;

  return { fragranceId: f.id, match, whyItFits: why, caution, signals: signals.slice(0, 3) };
}

/** Owned, sampled or sold fragrances are excluded from recommendations. */
function excludedIds(collection: CollectionItem[]): Set<string> {
  return new Set(collection.filter((c) => c.status !== 'wishlist').map((c) => c.fragranceId));
}

function scoredPool(answers: OnboardingAnswers, collection: CollectionItem[]) {
  const ctx = buildScoreContext(answers, collection);
  const excluded = excludedIds(collection);
  return {
    ctx,
    scored: fragrances
      .filter((f) => !excluded.has(f.id))
      .map((f) => ({ f, rec: scoreFragrance(f, ctx) }))
      .sort((a, b) => b.rec.match - a.rec.match),
  };
}

// ---------------------------------------------------------------------------
// Public, rule-based API
// ---------------------------------------------------------------------------

export function calculateMatchScore(
  fragrance: Fragrance,
  answers: OnboardingAnswers,
  collection: CollectionItem[]
): number {
  return scoreFragrance(fragrance, buildScoreContext(answers, collection)).match;
}

export function getRecommendationsForUser(
  answers: OnboardingAnswers,
  collection: CollectionItem[]
): Recommendation[] {
  return scoredPool(answers, collection).scored.map((s) => s.rec);
}

export function getRecommendationReason(fragrance: Fragrance, answers: OnboardingAnswers): string {
  return scoreFragrance(fragrance, buildScoreContext(answers, [])).whyItFits;
}

export function getRecommendationCaution(
  fragrance: Fragrance,
  answers: OnboardingAnswers
): string | undefined {
  return scoreFragrance(fragrance, buildScoreContext(answers, [])).caution;
}

const GOAL_FILTERS: Record<string, (f: Fragrance) => boolean> = {
  'Summer freshie': (f) => f.seasonTags.includes('Summer') && f.freshnessLevel >= 6,
  'Holiday / beach': (f) => f.occasionTags.includes('Beach') || (f.freshnessLevel >= 6 && f.sweetnessLevel <= 4),
  'Office scent': (f) => f.occasionTags.includes('Office') && f.projectionLevel <= 7,
  'Date night': (f) => f.occasionTags.includes('Date') || f.occasionTags.includes('Evening'),
  'Evening fragrance': (f) => f.occasionTags.includes('Evening'),
  'Cold weather scent': (f) => f.seasonTags.includes('Winter') || f.occasionTags.includes('Cold weather'),
  'Gym / casual': (f) => f.occasionTags.includes('Gym') || f.occasionTags.includes('Casual'),
  'Daily signature scent': (f) => f.occasionTags.includes('Daily') || f.occasionTags.includes('Signature'),
};

export function getRecommendationsByGoal(
  goal: string,
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  const filter = GOAL_FILTERS[goal];
  const { scored } = scoredPool(answers, collection);
  return (filter ? scored.filter(({ f }) => filter(f)) : scored).map((s) => s.rec);
}

export function getSimilarToFavorites(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  const { ctx, scored } = scoredPool(answers, collection);
  return scored
    .filter(({ f }) =>
      ctx.anchors.some((a) => a.id !== f.id && (linkedToAnchor(f, a) || sharedDirections(a, f).length >= 2))
    )
    .map((s) => s.rec);
}

export function getLowSweetnessPicks(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  return scoredPool(answers, collection)
    .scored.filter(({ f }) => f.sweetnessLevel <= 4)
    .map((s) => s.rec);
}

export function getUnderBudgetPicks(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  const budgetTier = BUDGET_ORDER[answers.budgetRange ?? ''] ?? 2;
  return scoredPool(answers, collection)
    .scored.filter(({ f }) => PRICE_TIER[f.priceCategory] <= budgetTier)
    .map((s) => s.rec);
}

export function getCheaperAlternatives(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  const { scored } = scoredPool(answers, collection);
  return scored
    .filter(({ f }) => isAlternativeLeaning(f) || ALTERNATIVE_FOR.has(f.id))
    .map(({ f, rec }) => {
      const original =
        ALTERNATIVE_FOR.get(f.id)?.[0] ??
        findById(f.similarIds.find((id) => PRICE_TIER[findById(id)?.priceCategory ?? 'budget'] > PRICE_TIER[f.priceCategory]));
      return original
        ? {
            ...rec,
            whyItFits: `A fraction of the price of ${original.name}, in the same ${joinNice(
              sharedDirections(f, original).slice(0, 2).map((d) => d.toLowerCase())
            ) || 'stylistic'} territory. ${f.description}`,
            signals: [...rec.signals.slice(0, 2), 'You are open to alternatives'],
          }
        : rec;
    });
}

export function getNicheDiscoveries(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = []
): Recommendation[] {
  return scoredPool(answers, collection)
    .scored.filter(({ f }) => /niche|luxury/i.test(f.category) && f.uniquenessLevel >= 6)
    .map((s) => s.rec);
}

// ---------------------------------------------------------------------------
// For You dashboard buckets
// ---------------------------------------------------------------------------

export function buildBuckets(
  answers: OnboardingAnswers,
  collection: CollectionItem[]
): RecBucket[] {
  const { ctx, scored } = scoredPool(answers, collection);

  const buckets: RecBucket[] = [];
  const used = new Set<string>();
  const take = (
    items: { f: Fragrance; rec: Recommendation }[],
    n: number,
    allowReuse = false
  ) => {
    const fresh = items.filter((x) => allowReuse || !used.has(x.f.id)).slice(0, n);
    fresh.forEach((x) => used.add(x.f.id));
    return fresh.map((x) => x.rec);
  };

  buckets.push({
    id: 'recommended',
    title: 'Recommended for you',
    subtitle: 'Your highest-confidence matches',
    layout: 'large',
    recs: take(scored, 3),
  });

  buckets.push({
    id: 'worth-sampling',
    title: 'Worth sampling',
    subtitle: 'Strong matches — try a decant first',
    layout: 'row',
    recs: take(scored, 4),
  });

  if (ctx.anchors.length > 0) {
    const similar = scored.filter(({ f }) =>
      ctx.anchors.some((a) => a.id !== f.id && (linkedToAnchor(f, a) || sharedDirections(a, f).length >= 2))
    );
    const recs = take(similar, 4);
    if (recs.length)
      buckets.push({
        id: 'similar',
        title: 'Similar to your favourites',
        subtitle: 'Built on what you already love',
        layout: 'row',
        recs,
      });
  }

  const buyAgainNames = collection
    .filter((c) => ['Would buy again', 'Keeper'].includes(c.decisionTag ?? ''))
    .map((c) => findById(c.fragranceId)?.name)
    .filter(Boolean) as string[];
  if (buyAgainNames.length) {
    const candidates = scored.filter(({ f }) =>
      ctx.anchors.some((a) => a.id !== f.id && (linkedToAnchor(f, a) || sharedDirections(a, f).length >= 1))
    );
    const recs = take(candidates, 4, true);
    if (recs.length)
      buckets.push({
        id: 'buy-again',
        title: 'Because you would buy again',
        subtitle: joinNice(buyAgainNames.slice(0, 2)),
        layout: 'row',
        recs,
      });
  }

  if (ctx.sweetAverse) {
    const recs = take(scored.filter(({ f }) => f.sweetnessLevel <= 4), 4, true);
    if (recs.length)
      buckets.push({
        id: 'low-sweet',
        title: 'Low-sweetness picks',
        subtitle: 'Dry by design — zero syrup',
        layout: 'row',
        recs,
      });
  }

  const budgetTier = BUDGET_ORDER[answers.budgetRange ?? ''] ?? 2;
  const within = take(
    scored.filter(({ f }) => PRICE_TIER[f.priceCategory] <= budgetTier),
    4,
    true
  );
  if (within.length)
    buckets.push({
      id: 'budget',
      title: 'Under your budget',
      subtitle: `Full bottles within ${answers.budgetRange ?? 'reach'}`,
      layout: 'row',
      recs: within,
    });

  if (answers.openToClones && answers.openToClones !== 'No clones') {
    const altRecs = getCheaperAlternatives(answers, collection)
      .filter((r) => !excludedIds(collection).has(r.fragranceId))
      .slice(0, 4);
    if (altRecs.length)
      buckets.push({
        id: 'clones',
        title: 'Cheaper alternatives',
        subtitle: 'Because you are open to smart dupes',
        layout: 'row',
        recs: altRecs,
      });
  }

  if (answers.currentGoals.includes('Niche discovery')) {
    const recs = take(
      scored.filter(({ f }) => /niche|luxury/i.test(f.category) && f.uniquenessLevel >= 6),
      4,
      true
    );
    if (recs.length)
      buckets.push({
        id: 'niche',
        title: 'Niche discoveries',
        subtitle: 'For your niche discovery goal',
        layout: 'row',
        recs,
      });
  }

  const GOAL_TITLES: Record<string, string> = {
    'Summer freshie': 'For your summer freshie goal',
    'Holiday / beach': 'Holiday & beach ready',
    'Office scent': 'Office-safe with character',
    'Date night': 'For date night',
    'Evening fragrance': 'Evening rotation',
    'Cold weather scent': 'For cold weather',
    'Gym / casual': 'Gym & casual easy wins',
  };
  for (const [goal, title] of Object.entries(GOAL_TITLES)) {
    if (!answers.currentGoals.includes(goal)) continue;
    const filter = GOAL_FILTERS[goal];
    const recs = take(scored.filter(({ f }) => filter(f)), 4, true);
    if (recs.length)
      buckets.push({
        id: `goal-${goal}`,
        title,
        subtitle: 'Matched to a goal you selected',
        layout: 'row',
        recs,
      });
  }

  return buckets.filter((b) => b.recs.length > 0);
}

// ---------------------------------------------------------------------------
// Detail / list helpers
// ---------------------------------------------------------------------------

export function matchFor(
  fragranceId: string,
  answers: OnboardingAnswers,
  collection: CollectionItem[]
): Recommendation {
  const f = findById(fragranceId);
  if (!f) return { fragranceId, match: 56, whyItFits: '', signals: [] };
  return scoreFragrance(f, buildScoreContext(answers, collection));
}

export function similarFragrances(fragranceId: string, n = 3): Fragrance[] {
  const f = findById(fragranceId);
  if (!f) return [];
  const linked = f.similarIds
    .map((id) => findById(id))
    .filter((x): x is Fragrance => !!x);
  const byOverlap = fragrances
    .filter((x) => x.id !== fragranceId && !linked.some((l) => l.id === x.id))
    .map((x) => ({ x, shared: sharedDirections(f, x).length }))
    .filter((e) => e.shared >= 2)
    .sort((a, b) => b.shared - a.shared)
    .map((e) => e.x);
  return [...linked, ...byOverlap].slice(0, n);
}

export function listOverlap(listDef: CuratedList, answers: OnboardingAnswers): number {
  const weights = computeWeights(answers);
  const likeKeys = Object.keys(weights.like).filter((k) => !k.startsWith('__'));
  if (likeKeys.length === 0) return 55;
  const hits = listDef.tags.filter((t) => (weights.like[t] ?? 0) >= 1.5).length;
  const misses = listDef.tags.filter((t) => (weights.avoid[t] ?? 0) >= 2).length;
  return Math.max(30, Math.min(94, 45 + hits * 13 - misses * 15));
}

export function listsForFragrance(fragranceId: string, lists: CuratedList[]): CuratedList[] {
  return lists.filter((l) => l.fragranceIds.includes(fragranceId));
}
