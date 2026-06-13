import {
  CollectionItem,
  CuratedList,
  Fragrance,
  OnboardingAnswers,
  RecBucket,
  Recommendation,
} from '../types';
import { fragrances, findById } from '../data/fragrances';
import {
  avoidsSweet,
  computeWeights,
  SignalWeights,
  sweetIsConditional,
} from '../logic/profile';
import { currentSeason, Season } from '../data/geo';

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

const lc = (s: string) => s.toLowerCase();

/** Everything textual about a fragrance, for keyword matching. */
function tokensOf(f: Fragrance): string {
  return [
    ...f.accordProfile,
    ...f.styleTags,
    ...f.notes,
    f.popularity,
    f.description,
  ]
    .join(' | ')
    .toLowerCase();
}

// ---------------------------------------------------------------------------
// Conditional-preference chip matching (mock rules over the seed dataset)
// ---------------------------------------------------------------------------

interface ChipRule {
  any?: string[]; // at least one keyword must appear in the fragrance tokens
  dir?: string; // fragrance must carry this direction
  minSweetness?: number;
  maxSweetness?: number;
  minProjection?: number;
  maxUniqueness?: number;
}

const CHIP_RULES: Record<string, ChipRule> = {
  // Sweet
  'Restrained sweetness': { maxSweetness: 5, minSweetness: 4 },
  'Tobacco sweetness': { dir: 'Tobacco', minSweetness: 5 },
  'Amber sweetness': { dir: 'Amber', minSweetness: 5 },
  'Boozy sweetness': { any: ['rum', 'whisky', 'boozy', 'cognac', 'bourbon'] },
  'Warm spicy sweetness': { any: ['warm spicy', 'cinnamon'], minSweetness: 5 },
  'Light vanilla': { dir: 'Vanilla', maxSweetness: 5 },
  'Syrupy sweetness': { minSweetness: 7 },
  'Bubblegum / candy': { any: ['candy', 'bubblegum', 'very sweet', 'dessert'] },
  'Heavy gourmand': { any: ['gourmand', 'praline', 'toffee', 'kulfi', 'date syrup'], minSweetness: 6 },
  'Synthetic sweetness': { any: ['club', 'mass appealing'], minSweetness: 6 },
  'Fruity sweetness': { any: ['fruity', 'very fruity', 'pear', 'dark apple'], minSweetness: 6 },
  'Overly sweet club scents': { any: ['club', 'night out'], minSweetness: 6 },
  // Fresh / aquatic
  'Salty aquatic': { any: ['salty', 'sea', 'seaweed'] },
  'Mineral fresh': { any: ['mineral', 'metallic'] },
  'Citrus fresh': { dir: 'Citrus' },
  'Green fresh': { dir: 'Green' },
  'Clean musky fresh': { any: ['musk', 'clean'] },
  'Blue shower-gel freshness': { any: ['blue'], maxUniqueness: 5 },
  'Generic aquatic': { any: ['aquatic', 'marine'], maxUniqueness: 4 },
  'Synthetic ambroxan freshness': { any: ['ambroxan'], maxUniqueness: 5 },
  'Too sporty': { any: ['sporty', 'sport', 'gym'] },
  'Too soapy': { any: ['soapy'] },
  // Oud
  'Smooth oud': { dir: 'Oud', maxSweetness: 6 },
  'Woody oud': { dir: 'Oud', any: ['woody', 'wood'] },
  'Rose-oud if balanced': { dir: 'Oud', any: ['rose'] },
  'Dry oud': { dir: 'Oud', maxSweetness: 4 },
  'Incense oud': { dir: 'Oud', any: ['incense'] },
  'Barnyard oud': { dir: 'Oud', any: ['animalic', 'barnyard'] },
  'Medicinal oud': { dir: 'Oud', any: ['medicinal'] },
  'Overpowering oud': { dir: 'Oud', minProjection: 8 },
  'Sweet oud': { dir: 'Oud', minSweetness: 6 },
  'Too animalic': { any: ['animalic'] },
  // Leather
  'Smooth leather': { dir: 'Leather', maxSweetness: 6 },
  Suede: { any: ['suede'] },
  'Dry leather': { dir: 'Leather', maxSweetness: 4 },
  'Tobacco leather': { dir: 'Leather', any: ['tobacco'] },
  'Elegant leather': { dir: 'Leather', any: ['elegant', 'luxurious', 'sophisticated'] },
  'Harsh leather': { dir: 'Leather', any: ['sharp', 'harsh', 'petrol', 'gasoline'] },
  'Animalic leather': { dir: 'Leather', any: ['animalic'] },
  'Smoky leather overload': { dir: 'Leather', any: ['smoky', 'smoke'], minProjection: 7 },
  'Rubber-like leather': { any: ['rubber', 'petrol', 'gasoline'] },
  // Powdery
  'Clean powder': { dir: 'Powdery', any: ['clean', 'soapy'] },
  'Iris powder': { any: ['iris'] },
  'Soft elegant powder': { dir: 'Powdery', any: ['soft', 'elegant'] },
  'Barbershop powder': { any: ['barbershop', 'fougère'] },
  'Makeup powder': { dir: 'Powdery', any: ['violet', 'cosmetic'] },
  'Dusty powder': { dir: 'Powdery', any: ['dusty', 'dry'] },
  'Old-fashioned powder': { dir: 'Powdery', any: ['classic', 'mature'] },
  'Too dry / chalky': { dir: 'Powdery', maxSweetness: 3 },
  // Smoky / incense
  'Dry incense': { any: ['incense'], maxSweetness: 4 },
  'Churchy incense': { any: ['incense'] },
  'Resinous smoke': { any: ['resin', 'labdanum', 'amber'], dir: 'Smoky / incense' },
  'Tobacco smoke': { dir: 'Tobacco' },
  'Subtle smokiness': { dir: 'Smoky / incense', maxSweetness: 6 },
  'Campfire smoke': { any: ['fireplace', 'campfire', 'burning'] },
  'Ashtray smoke': { any: ['ashtray'] },
  'Burnt rubber': { any: ['rubber', 'petrol', 'gasoline'] },
  'Too heavy incense': { any: ['incense'], minProjection: 8 },
  // Amber
  'Dry amber': { dir: 'Amber', maxSweetness: 4 },
  'Resinous amber': { dir: 'Amber', any: ['labdanum', 'resin', 'ambergris'] },
  'Spicy amber': { dir: 'Amber', any: ['spicy', 'cinnamon', 'cardamom'] },
  'Tobacco amber': { dir: 'Amber', any: ['tobacco'] },
  'Syrupy amber': { dir: 'Amber', minSweetness: 7 },
  'Very sweet amber': { dir: 'Amber', minSweetness: 7 },
  'Heavy vanilla amber': { dir: 'Amber', any: ['vanilla'], minSweetness: 6 },
  'Sticky amber': { dir: 'Amber', minSweetness: 7 },
  // Vanilla
  'Dry vanilla': { dir: 'Vanilla', maxSweetness: 5 },
  'Spiced vanilla': { dir: 'Vanilla', any: ['spicy', 'cinnamon', 'cardamom'] },
  'Tobacco vanilla': { dir: 'Vanilla', any: ['tobacco'] },
  'Cupcake vanilla': { dir: 'Vanilla', minSweetness: 7 },
  'Heavy gourmand vanilla': { dir: 'Vanilla', any: ['gourmand', 'dessert'], minSweetness: 6 },
  'Syrupy vanilla': { dir: 'Vanilla', minSweetness: 7 },
  'Synthetic vanilla': { dir: 'Vanilla', any: ['club', 'mass appealing'] },
  // Floral
  'Fresh floral': { dir: 'Floral', any: ['fresh'] },
  'Clean neroli': { any: ['neroli'] },
  Iris: { any: ['iris'] },
  Geranium: { any: ['geranium'] },
  Lavender: { any: ['lavender'] },
  'Heavy rose': { any: ['rose'], minProjection: 7 },
  'Sweet white florals': { any: ['white floral'], minSweetness: 6 },
  'Powdery florals': { dir: 'Floral', any: ['powdery'] },
  'Too feminine / cosmetic': { any: ['white floral', 'cosmetic'], minSweetness: 6 },
};

function chipMatches(chip: string, f: Fragrance, tokens: string): boolean {
  const rule = CHIP_RULES[chip];
  if (!rule) {
    // Fallback: significant words from the chip label.
    const words = lc(chip)
      .split(/[\s/]+/)
      .filter((x) => x.length > 3 && !['too', 'very', 'overly'].includes(x));
    return words.some((x) => tokens.includes(x));
  }
  if (rule.dir && !f.directions.includes(rule.dir)) return false;
  if (rule.minSweetness !== undefined && f.sweetnessLevel < rule.minSweetness) return false;
  if (rule.maxSweetness !== undefined && f.sweetnessLevel > rule.maxSweetness) return false;
  if (rule.minProjection !== undefined && f.projectionLevel < rule.minProjection) return false;
  if (rule.maxUniqueness !== undefined && f.uniquenessLevel > rule.maxUniqueness) return false;
  if (rule.any && !rule.any.some((k) => tokens.includes(k))) return false;
  return true;
}

/** "Aventus-style" tags or clone/alternative popularity buckets. */
function isAlternativeLeaning(f: Fragrance): boolean {
  return f.styleTags.some((t) => /-style$/i.test(t)) || /clone|alternative/i.test(f.popularity);
}

function isMassBlue(f: Fragrance): boolean {
  return (
    f.styleTags.some((t) => /^blue|mass appealing/i.test(t)) &&
    /mainstream|popular|classic/i.test(f.popularity) &&
    f.uniquenessLevel <= 5
  );
}

/** Reverse map: fragrance id → dataset originals that list it as a cheaper alternative. */
const ALTERNATIVE_FOR = new Map<string, Fragrance[]>();
for (const f of fragrances) {
  for (const altId of f.cheaperAlternativeIds) {
    ALTERNATIVE_FOR.set(altId, [...(ALTERNATIVE_FOR.get(altId) ?? []), f]);
  }
}

export type FeedbackMap = Record<string, string>;

interface ScoreContext {
  answers: OnboardingAnswers;
  weights: SignalWeights;
  collection: CollectionItem[];
  feedback: FeedbackMap;
  sweetAverse: boolean;
  sweetConditional: boolean;
  cloneAverse: boolean;
  anchors: Fragrance[];
  antiAnchors: { fragrance: Fragrance; reasons: string[]; strong: boolean }[];
  prefWords: Set<string>;
  /** Does the user positively rate fresh/blue territory at all? */
  likesFresh: boolean;
  // soft context signals
  climate: string;
  country?: string;
  season: Season;
  orientation?: string;
  matureLeaning: boolean;
  youngLeaning: boolean;
}

export function buildScoreContext(
  answers: OnboardingAnswers,
  collection: CollectionItem[],
  feedback: FeedbackMap = {}
): ScoreContext {
  const weights = computeWeights(answers);

  const anchorIds = new Set<string>();
  answers.favourites.forEach((f) => {
    if (f.fragranceId && f.wouldBuyAgain !== 'no') anchorIds.add(f.fragranceId);
  });
  collection.forEach((c) => {
    const positive =
      (c.rating !== undefined && c.rating >= 8) ||
      ['Keeper', 'Would buy again', 'Want full bottle'].includes(c.decisionTag ?? '');
    if (positive && c.status !== 'sold') anchorIds.add(c.fragranceId);
  });

  const antiAnchors: ScoreContext['antiAnchors'] = [];
  answers.dislikes.forEach((d) => {
    const f = findById(d.fragranceId);
    if (f) antiAnchors.push({ fragrance: f, reasons: d.reasons, strong: d.avoidSimilar === 'yes' });
  });
  collection.forEach((c) => {
    const negative = ['Would not buy again', 'Not for me', 'Overhyped'].includes(c.decisionTag ?? '');
    const f = findById(c.fragranceId);
    if (negative && f && !antiAnchors.some((a) => a.fragrance.id === f.id)) {
      antiAnchors.push({ fragrance: f, reasons: c.dislikedChips, strong: false });
    }
  });

  let sweetAverse = avoidsSweet(weights);
  if (
    antiAnchors.some((a) => a.reasons.includes('Too sweet')) ||
    collection.some(
      (c) => c.dislikedChips.includes('Too sweet') && c.decisionTag === 'Would not buy again'
    ) ||
    Object.values(feedback).includes('Too sweet')
  ) {
    sweetAverse = sweetAverse || !sweetIsConditional(answers);
  }

  const prefWords = new Set<string>();
  (answers.directionPreferences ?? [])
    .filter((p) => p.reaction === 'love' || p.reaction === 'enjoy')
    .forEach((p) => p.name.split('/').forEach((x) => prefWords.add(lc(x.trim()))));
  answers.favourites.forEach((f) => f.reasons.forEach((r) => prefWords.add(lc(r))));
  if (answers.currentGoals.includes('Daily signature scent')) prefWords.add('daily');
  if (answers.currentGoals.includes('Office scent')) prefWords.add('office');

  const fr = weights.reactions['Fresh / aquatic'];
  const likesFresh =
    fr === 'love' || fr === 'enjoy' || (weights.like['Fresh / aquatic'] ?? 0) >= 2;

  const age = answers.ageRange;

  return {
    climate: answers.location?.climateRegion ?? 'unknown',
    country: answers.location?.country,
    season: currentSeason(answers.location?.country),
    orientation: answers.fragranceOrientation,
    matureLeaning: age === '35_44' || age === '45_54' || age === '55_plus',
    youngLeaning: age === 'under_18' || age === '18_24',
    answers,
    weights,
    collection,
    feedback,
    sweetAverse,
    sweetConditional: sweetIsConditional(answers),
    cloneAverse: answers.openToClones === 'No clones',
    anchors: [...anchorIds].map((id) => findById(id)).filter((f): f is Fragrance => !!f),
    antiAnchors,
    prefWords,
    likesFresh,
  };
}

function sharedDirections(a: Fragrance, b: Fragrance): string[] {
  return a.directions.filter((d) => b.directions.includes(d));
}

function linkedToAnchor(f: Fragrance, anchor: Fragrance): boolean {
  return anchor.similarIds.includes(f.id) || f.similarIds.includes(anchor.id);
}

const SHORT_PHRASES: Record<string, string> = {
  Citrus: 'bright citrus',
  'Fresh / aquatic': 'character-led freshness',
  Green: 'aromatic green',
  Woody: 'dry woods',
  Tobacco: 'restrained tobacco',
  Vetiver: 'dry vetiver',
  Spicy: 'peppery spice',
  Leather: 'refined leather',
  Salty: 'salty aquatic',
  Mineral: 'mineral fresh',
  'Smoky / incense': 'measured smoke',
  'Musky / clean': 'clean musk',
  Oud: 'polished oud',
  Amber: 'structured amber',
  Vanilla: 'soft vanilla',
  Sweet: 'judged sweetness',
  Floral: 'fresh floral',
  Powdery: 'soft powder',
};

export function scoreFragrance(f: Fragrance, ctx: ScoreContext): Recommendation {
  const { weights, answers } = ctx;
  const tokens = tokensOf(f);
  let score = 58;
  const signals: string[] = [];
  const cautions: string[] = [];

  // ---- Reaction-tiered direction matching --------------------------------
  const loveHits = f.directions.filter((d) => (weights.like[d] ?? 0) >= 3.5);
  const enjoyHits = f.directions.filter(
    (d) => (weights.like[d] ?? 0) >= 2 && (weights.like[d] ?? 0) < 3.5
  );
  const dependsHits = f.directions.filter((d) => weights.reactions[d] === 'depends');
  const avoidHits = f.directions.filter((d) => (weights.avoid[d] ?? 0) >= 3.5);
  const notForMeHits = f.directions.filter(
    (d) => (weights.avoid[d] ?? 0) >= 2 && (weights.avoid[d] ?? 0) < 3.5
  );

  score += Math.min(loveHits.length * 8, 16);
  score += Math.min(enjoyHits.length * 5, 10);
  score -= avoidHits.length * 12;
  score -= notForMeHits.length * 7;
  if (loveHits.length) signals.push(`You love: ${loveHits.join(', ')}`);
  if (enjoyHits.length) signals.push(`You enjoy: ${enjoyHits.join(', ')}`);
  if (avoidHits.length)
    cautions.push(`leans ${joinNice(avoidHits.map(lc))}, which you avoid`);
  else if (notForMeHits.length)
    cautions.push(`leans ${joinNice(notForMeHits.map(lc))}, which is usually not for you`);

  // ---- Conditional ("Depends") nuance ------------------------------------
  let dependsWorks: { dir: string; chip: string } | null = null;
  let dependsFails: { dir: string; chip: string } | null = null;
  for (const dir of dependsHits) {
    const cp = (answers.conditionalPreferences ?? {})[dir];
    if (!cp) continue;
    const notHit = cp.notForMe.find((chip) => chipMatches(chip, f, tokens));
    if (notHit) {
      score -= 8;
      if (!dependsFails) dependsFails = { dir, chip: notHit };
      continue;
    }
    const worksHit = cp.worksForMe.find((chip) => chipMatches(chip, f, tokens));
    if (worksHit) {
      score += 5;
      if (!dependsWorks) dependsWorks = { dir, chip: worksHit };
    }
  }
  if (dependsFails)
    cautions.unshift(
      `leans ${lc(dependsFails.chip).replace(/^too /, '')}, which you usually avoid — sample first`
    );
  if (dependsWorks) signals.push(`Works for you: ${dependsWorks.chip}`);

  // ---- Dataset recommend-if signals ---------------------------------------
  const signalHits = f.recommendSignals.filter((s) => ctx.prefWords.has(lc(s)));
  if (signalHits.length >= 2) score += 4;

  // ---- Sweetness ------------------------------------------------------------
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
  } else if (ctx.sweetConditional && f.sweetnessLevel > 6 && !dependsWorks) {
    score -= 5;
    cautions.push('the sweetness may be higher than your usual tolerance — sample first');
  }

  // ---- Anchors / anti-anchors ---------------------------------------------
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

  for (const anti of ctx.antiAnchors) {
    const close =
      linkedToAnchor(f, anti.fragrance) || sharedDirections(anti.fragrance, f).length >= 3;
    if (close) {
      score -= anti.strong ? 16 : 12;
      cautions.push(`shares a lot of DNA with ${anti.fragrance.name}, which didn't work for you`);
      if (anti.reasons.includes('Too sweet') && f.sweetnessLevel >= 6) score -= 4;
      break;
    }
  }

  // ---- Mass-market blue handling (ranking trust) ---------------------------
  if (isMassBlue(f) && !ctx.likesFresh) {
    score -= 7;
    cautions.push('a crowd favourite — may feel common, loud or synthetic');
  }
  if ((weights.avoid['__genericblue'] ?? 0) > 0 && f.styleTags.some((t) => /^blue/i.test(t)) && f.uniquenessLevel <= 5) {
    score -= 8;
    cautions.push('sits close to the generic "blue fresh" zone you avoid');
  }
  if (
    (weights.avoid['__common'] ?? 0) >= 2 &&
    /mainstream|popular/i.test(f.popularity) &&
    f.uniquenessLevel <= 5
  ) {
    score -= 6;
    cautions.push('a very common scent — you tend to find these overhyped');
  }

  // ---- Clones, budget, projection, goals -----------------------------------
  if (ctx.cloneAverse && isAlternativeLeaning(f)) {
    score -= 8;
    cautions.push('an alternative-style composition — you prefer originals');
  }

  const budgetTier = BUDGET_ORDER[answers.budgetRange ?? ''] ?? 2;
  const priceTier = PRICE_TIER[f.priceCategory];
  if (priceTier <= budgetTier) score += 3;
  else if (priceTier - budgetTier >= 2) {
    score -= 4;
    cautions.push('well above your usual budget — try a decant first');
  } else cautions.push('slightly above your usual budget');

  if (answers.projection === 'Very subtle' && f.projectionLevel >= 8) {
    score -= 5;
    cautions.push('projects harder than you usually like');
  }
  if (answers.projection === 'Beast mode') {
    if (f.projectionLevel <= 4) cautions.push('wears close to the skin — quieter than your preference');
    else if (f.projectionLevel >= 7) score += 2;
  }
  if (answers.favourites.some((x) => x.reasons.includes('Long-lasting')) && f.longevityLevel >= 7)
    score += 3;

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

  // ---- Soft context: orientation, age, season, climate ------------------------
  const styleHas = (re: RegExp) => f.styleTags.some((t) => re.test(t));

  if (ctx.orientation === 'masculine' && styleHas(/masculine|gentlemanly/i)) score += 1.5;
  if ((ctx.orientation === 'unisex' || ctx.orientation === 'feminine') && styleHas(/unisex/i)) {
    score += 3;
    signals.push('Unisex profile fits your framing');
  }

  const lovesSweet =
    weights.reactions['Sweet'] === 'love' || weights.reactions['Sweet'] === 'enjoy';
  if (ctx.matureLeaning) {
    if (styleHas(/classic|refined|elegant|mature|sophisticated|formal|gentlemanly/i)) score += 2;
    if (styleHas(/club|youthful|very sweet/i) && !lovesSweet) {
      score -= 3;
      cautions.push('leans young and loud — may read less refined than your usual style');
    }
  }
  if (ctx.youngLeaning && styleHas(/easy|versatile|fresh|daily/i)) score += 1.5;

  // current season vs the fragrance's season tags
  const inSeason = f.seasonTags.includes(ctx.season);
  if (inSeason) {
    score += 4;
    signals.push(
      ctx.country ? `In season in ${ctx.country} right now` : `In season right now (${ctx.season.toLowerCase()})`
    );
  } else if (
    f.seasonTags.length > 0 &&
    !answers.currentGoals.includes('Summer freshie') &&
    !answers.currentGoals.includes('Holiday / beach')
  ) {
    score -= 3;
    cautions.push(
      `better for ${f.seasonTags.slice(0, 2).join('/').toLowerCase()} than ${ctx.season.toLowerCase()}${
        ctx.country ? ` in ${ctx.country}` : ''
      }`
    );
  }

  // climate
  const heavy = f.sweetnessLevel >= 6 || f.darknessLevel >= 5 || f.directions.includes('Oud');
  const freshLight = f.freshnessLevel >= 6 && f.sweetnessLevel <= 4;
  switch (ctx.climate) {
    case 'cold_temperate':
    case 'mild_temperate':
      if ((ctx.season === 'Winter' || ctx.season === 'Autumn') && f.darknessLevel >= 4) {
        score += 3;
        signals.push(`Good fit for cooler weather${ctx.country ? ` in ${ctx.country}` : ''}`);
      }
      break;
    case 'mediterranean':
      if (
        f.directions.some((d) => ['Citrus', 'Green', 'Vetiver', 'Salty', 'Mineral'].includes(d)) &&
        f.sweetnessLevel <= 5
      ) {
        score += 3;
        signals.push('Fresh enough for Mediterranean weather, with structure');
      }
      if (heavy && ctx.season === 'Summer') score -= 3;
      break;
    case 'tropical_humid':
      if (freshLight) {
        score += 4;
        signals.push('Good fit for hot, humid weather');
      }
      if (heavy) {
        score -= 6;
        cautions.push('may feel dense or sweet in tropical humidity — sample first in heat');
      }
      break;
    case 'hot_dry':
      if (f.freshnessLevel >= 5 && f.sweetnessLevel <= 5) score += 3;
      if (f.sweetnessLevel >= 7) {
        score -= 4;
        cautions.push('syrupy sweetness can turn cloying in daytime heat');
      }
      if (f.projectionLevel >= 8) cautions.push('strong projection — use carefully in daytime heat');
      break;
  }

  // ---- Card feedback ----------------------------------------------------------
  if (ctx.feedback[f.id]) score -= 25;

  const match = Math.round(Math.max(56, Math.min(97, score)));

  // ---- Why it fits: nuanced, trust-building copy ------------------------------
  let why: string;
  if (dependsWorks && (loveHits.length || enjoyHits.length)) {
    why = `You ${loveHits.length ? 'love' : 'enjoy'} ${joinNice(
      [...loveHits, ...enjoyHits].slice(0, 2).map(lc)
    )}, and its ${lc(dependsWorks.chip)} stays on the right side of your ${lc(
      dependsWorks.dir
    )} line. ${f.description}`;
  } else if (dependsWorks) {
    why = `${lc(dependsWorks.dir).charAt(0).toUpperCase() + lc(dependsWorks.dir).slice(1)} works for you when it's ${lc(
      dependsWorks.chip
    )} — exactly what this delivers. ${f.description}`;
  } else if (loveHits.length) {
    why = `Strong fit — you love ${joinNice(loveHits.slice(0, 2).map(lc))}${
      enjoyHits.length ? ` and enjoy ${joinNice(enjoyHits.slice(0, 2).map(lc))}` : ''
    }${ctx.sweetAverse && f.sweetnessLevel <= 4 ? ', and it keeps sweetness low' : ''}. ${f.description}`;
  } else if (enjoyHits.length >= 2) {
    why = `You enjoy ${joinNice(enjoyHits.slice(0, 3).map(lc))} — this delivers exactly that register. ${f.description}`;
  } else if (bestAnchor) {
    why = bestAnchor.linked
      ? `A close relative of ${bestAnchor.name}, which you rated highly. ${f.description}`
      : `It shares its ${joinNice(bestAnchor.shared.slice(0, 2).map(lc))} core with ${bestAnchor.name}, which you rated highly. ${f.description}`;
  } else if (enjoyHits.length === 1) {
    why = `A strong expression of the ${lc(enjoyHits[0])} direction you enjoy. ${f.description}`;
  } else {
    why = `${f.description} ${f.bestFor[0] ?? 'A well-regarded pick while Accord learns your taste'}.`;
  }

  // ---- Short reason for compact cards -----------------------------------------
  const shortBits: string[] = [];
  // lead with the fragrance's own dominant matched direction, so compact
  // reasons differ between cards instead of all echoing the user's top like
  const lead =
    f.directions.find((d) => loveHits.includes(d) || enjoyHits.includes(d)) ??
    (dependsWorks ? dependsWorks.dir : f.directions[0]);
  if (lead) shortBits.push(SHORT_PHRASES[lead] ?? lc(lead));
  if ((ctx.sweetAverse || ctx.sweetConditional) && f.sweetnessLevel <= 4) shortBits.push('low sweetness');
  if (f.priceCategory === 'budget') shortBits.unshift('affordable');
  const shortRaw = shortBits.slice(0, 2).join(' · ');
  const shortWhy = shortRaw ? shortRaw.charAt(0).toUpperCase() + shortRaw.slice(1) : undefined;

  const caution = cautions.length
    ? `It ${cautions[0]}${cautions.length > 1 ? `; also ${cautions[1]}` : ''}.`
    : f.caution || undefined;

  return { fragranceId: f.id, match, whyItFits: why, shortWhy, caution, signals: signals.slice(0, 4) };
}

/** Owned, sampled, sold, or feedback-dismissed fragrances leave the rec pool. */
function excludedIds(collection: CollectionItem[], feedback: FeedbackMap): Set<string> {
  return new Set([
    ...collection.filter((c) => c.status !== 'wishlist').map((c) => c.fragranceId),
    ...Object.keys(feedback),
  ]);
}

function scoredPool(
  answers: OnboardingAnswers,
  collection: CollectionItem[],
  feedback: FeedbackMap = {}
) {
  const ctx = buildScoreContext(answers, collection, feedback);
  const excluded = excludedIds(collection, feedback);
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
  collection: CollectionItem[],
  feedback: FeedbackMap = {}
): Recommendation[] {
  return scoredPool(answers, collection, feedback).scored.map((s) => s.rec);
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

export const GOAL_FILTERS: Record<string, (f: Fragrance) => boolean> = {
  'Summer freshie': (f) => f.seasonTags.includes('Summer') && f.freshnessLevel >= 6,
  'Holiday / beach': (f) => f.occasionTags.includes('Beach') || (f.freshnessLevel >= 6 && f.sweetnessLevel <= 4),
  'Office scent': (f) => f.occasionTags.includes('Office') && f.projectionLevel <= 7,
  'Date night': (f) => f.occasionTags.includes('Date') || f.occasionTags.includes('Evening'),
  'Evening fragrance': (f) => f.occasionTags.includes('Evening'),
  'Cold weather scent': (f) => f.seasonTags.includes('Winter') || f.occasionTags.includes('Cold weather'),
  'Gym / casual': (f) => f.occasionTags.includes('Gym') || f.occasionTags.includes('Casual'),
  'Daily signature scent': (f) => f.occasionTags.includes('Daily') || f.occasionTags.includes('Signature'),
  'Cheap hidden gems': (f) => f.priceCategory === 'budget' || /middle eastern|affordable/i.test(f.category),
};

export function getRecommendationsByGoal(
  goal: string,
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  const filter = GOAL_FILTERS[goal];
  const { scored } = scoredPool(answers, collection, feedback);
  return (filter ? scored.filter(({ f }) => filter(f)) : scored).map((s) => s.rec);
}

export function getSimilarToFavorites(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  const { ctx, scored } = scoredPool(answers, collection, feedback);
  return scored
    .filter(({ f }) =>
      ctx.anchors.some((a) => a.id !== f.id && (linkedToAnchor(f, a) || sharedDirections(a, f).length >= 2))
    )
    .map((s) => s.rec);
}

export function getLowSweetnessPicks(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  return scoredPool(answers, collection, feedback)
    .scored.filter(({ f }) => f.sweetnessLevel <= 4)
    .map((s) => s.rec);
}

export function getUnderBudgetPicks(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  const budgetTier = BUDGET_ORDER[answers.budgetRange ?? ''] ?? 2;
  return scoredPool(answers, collection, feedback)
    .scored.filter(({ f }) => PRICE_TIER[f.priceCategory] <= budgetTier)
    .map((s) => s.rec);
}

export function getCheaperAlternatives(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  const { scored } = scoredPool(answers, collection, feedback);
  return scored
    .filter(({ f }) => isAlternativeLeaning(f) || ALTERNATIVE_FOR.has(f.id))
    .map(({ f, rec }) => {
      const original =
        ALTERNATIVE_FOR.get(f.id)?.[0] ??
        findById(
          f.similarIds.find(
            (id) => PRICE_TIER[findById(id)?.priceCategory ?? 'budget'] > PRICE_TIER[f.priceCategory]
          )
        );
      return original
        ? {
            ...rec,
            whyItFits: `A fraction of the price of ${original.name}, in the same ${
              joinNice(sharedDirections(f, original).slice(0, 2).map(lc)) || 'stylistic'
            } territory. ${f.description}`,
            shortWhy: `Affordable take on ${original.name}`,
            signals: [...rec.signals.slice(0, 2), 'You are open to alternatives'],
          }
        : rec;
    });
}

export function getNicheDiscoveries(
  answers: OnboardingAnswers,
  collection: CollectionItem[] = [],
  feedback: FeedbackMap = {}
): Recommendation[] {
  return scoredPool(answers, collection, feedback)
    .scored.filter(({ f }) => /niche|luxury/i.test(f.category) && f.uniquenessLevel >= 6)
    .map((s) => s.rec);
}

// ---------------------------------------------------------------------------
// For You dashboard buckets
// ---------------------------------------------------------------------------

export function buildBuckets(
  answers: OnboardingAnswers,
  collection: CollectionItem[],
  feedback: FeedbackMap = {}
): RecBucket[] {
  const { ctx, scored } = scoredPool(answers, collection, feedback);

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

  if (ctx.sweetAverse || ctx.sweetConditional) {
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
    const altRecs = getCheaperAlternatives(answers, collection, feedback)
      .filter((r) => !excludedIds(collection, feedback).has(r.fragranceId))
      .slice(0, 4);
    if (altRecs.length)
      buckets.push({
        id: 'clones',
        title: 'Cheaper alternatives worth sampling',
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
    'Summer freshie': 'Summer freshies for your taste',
    'Holiday / beach': 'Holiday & beach ready',
    'Office scent': 'Office-safe with character',
    'Date night': 'For date night',
    'Evening fragrance': 'Evening rotation',
    'Cold weather scent': 'For cold weather',
    'Gym / casual': 'Gym & casual easy wins',
    'Cheap hidden gems': 'Affordable discoveries',
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

  // location-aware bucket — one, only when we know the climate
  const climateBucket = ((): { title: string; filter: (f: Fragrance) => boolean } | null => {
    switch (ctx.climate) {
      case 'cold_temperate':
      case 'mild_temperate':
        return ctx.season === 'Winter' || ctx.season === 'Autumn'
          ? {
              title: 'Cooler-weather picks',
              filter: (f) =>
                f.darknessLevel >= 4 ||
                f.seasonTags.includes('Winter') ||
                f.seasonTags.includes('Autumn'),
            }
          : {
              title: 'Fresh scents for short summers',
              filter: (f) => f.freshnessLevel >= 6 && f.seasonTags.includes('Summer'),
            };
      case 'mediterranean':
        return {
          title: 'Made for Mediterranean weather',
          filter: (f) => f.freshnessLevel >= 5 && f.sweetnessLevel <= 5,
        };
      case 'tropical_humid':
        return {
          title: 'Heat-friendly fresh scents',
          filter: (f) => f.freshnessLevel >= 6 && f.sweetnessLevel <= 4,
        };
      case 'hot_dry':
        return {
          title: 'Built for dry heat',
          filter: (f) => f.freshnessLevel >= 5 && f.sweetnessLevel <= 5,
        };
      default:
        return null;
    }
  })();
  if (climateBucket) {
    const recs = take(scored.filter(({ f }) => climateBucket.filter(f)), 4, true);
    if (recs.length)
      buckets.push({
        id: 'climate',
        title: climateBucket.title,
        subtitle: ctx.country ? `Tuned to ${ctx.country}` : 'Tuned to your climate',
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
  collection: CollectionItem[],
  feedback: FeedbackMap = {}
): Recommendation {
  const f = findById(fragranceId);
  if (!f) return { fragranceId, match: 56, whyItFits: '', signals: [] };
  return scoreFragrance(f, buildScoreContext(answers, collection, feedback));
}

export function similarFragrances(fragranceId: string, n = 3): Fragrance[] {
  const f = findById(fragranceId);
  if (!f) return [];
  const linked = f.similarIds.map((id) => findById(id)).filter((x): x is Fragrance => !!x);
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
  const hits = listDef.tags.filter((t) => (weights.like[t] ?? 0) >= 2).length;
  const misses = listDef.tags.filter((t) => (weights.avoid[t] ?? 0) >= 2).length;
  return Math.max(30, Math.min(94, 45 + hits * 13 - misses * 15));
}

/** Qualitative label for a taste-overlap percentage. */
export function overlapLabel(overlap: number): string {
  if (overlap >= 80) return 'Strong fit';
  if (overlap >= 60) return 'Good fit';
  if (overlap >= 40) return 'Good stretch';
  return 'Outside comfort zone';
}

export function listsForFragrance(fragranceId: string, lists: CuratedList[]): CuratedList[] {
  return lists.filter((l) => l.fragranceIds.includes(fragranceId));
}
