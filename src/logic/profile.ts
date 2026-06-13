import {
  DirectionPreference,
  DirectionReaction,
  OnboardingAnswers,
  TasteProfile,
} from '../types';
import { findById } from '../data/fragrances';

// Maps free-form chips onto the shared direction taxonomy (or special flags).
const LOVE_CHIP_MAP: Record<string, string | null> = {
  Fresh: 'Fresh / aquatic',
  Dry: '__dry',
  Masculine: '__masculine',
  Elegant: '__elegant',
  Unique: '__unique',
  'Long-lasting': null,
  'Not too sweet': '__lowsweet',
  Salty: 'Salty',
  Green: 'Green',
  Woody: 'Woody',
  Tobacco: 'Tobacco',
  Complimented: null,
  'Works on my skin': null,
};

const DISLIKE_CHIP_MAP: Record<string, string | null> = {
  'Too sweet': 'Sweet',
  'Too synthetic': '__synthetic',
  'Too loud': '__loud',
  'Too weak': null,
  'Too common': '__common',
  'Too powdery': 'Powdery',
  'Too smoky': 'Smoky / incense',
  'Too aquatic': 'Fresh / aquatic',
  'Too mature': null,
  'Too young': null,
  Headache: '__synthetic',
  'Bad on my skin': null,
  Boring: '__common',
  Overhyped: '__common',
};

/** Old onboarding's avoided vocabulary, kept so stored profiles keep working. */
const LEGACY_AVOIDED_MAP: Record<string, string | null> = {
  'Very sweet fragrances': 'Sweet',
  'Heavy vanilla': 'Vanilla',
  'Bubblegum / candy': 'Sweet',
  'Strong oud': 'Oud',
  'Heavy leather': 'Leather',
  'Animalic notes': '__animalic',
  'Powdery scents': 'Powdery',
  'Barbershop style': 'Powdery',
  'Blue shower-gel freshness': '__genericblue',
  'Heavy rose': 'Floral',
  'Coconut / sunscreen': '__coconut',
  'Smoky incense': 'Smoky / incense',
  'None yet': null,
};

/** Like/avoid weight per reaction. Thresholds elsewhere rely on these bands:
 *  like >= 3.5 → love, like in [2, 3.5) → enjoy, like < 1.5 → depends-only. */
const REACTION_LIKE_WEIGHT: Record<DirectionReaction, number> = {
  love: 4,
  enjoy: 2.5,
  depends: 0.9,
  not_for_me: 0,
  avoid: 0,
};
const REACTION_AVOID_WEIGHT: Record<DirectionReaction, number> = {
  love: 0,
  enjoy: 0,
  depends: 0,
  not_for_me: 2.2,
  avoid: 4,
};

export interface SignalWeights {
  like: Record<string, number>;
  avoid: Record<string, number>;
  /** reaction per direction, for nuance-aware scoring */
  reactions: Record<string, DirectionReaction>;
}

export function computeWeights(answers: OnboardingAnswers): SignalWeights {
  const like: Record<string, number> = {};
  const avoid: Record<string, number> = {};
  const reactions: Record<string, DirectionReaction> = {};
  const add = (map: Record<string, number>, key: string | null | undefined, w: number) => {
    if (!key || w === 0) return;
    map[key] = (map[key] ?? 0) + w;
  };

  const prefs = answers.directionPreferences ?? [];
  if (prefs.length > 0) {
    for (const p of prefs) {
      reactions[p.name] = p.reaction;
      add(like, p.name, REACTION_LIKE_WEIGHT[p.reaction]);
      add(avoid, p.name, REACTION_AVOID_WEIGHT[p.reaction]);
    }
  } else {
    // Legacy stored answers: flat liked/avoided lists.
    (answers.likedDirections ?? []).forEach((d) => {
      add(like, d, 2.5);
      reactions[d] = 'enjoy';
    });
  }
  (answers.avoidedDirections ?? []).forEach((d) =>
    add(avoid, LEGACY_AVOIDED_MAP[d] !== undefined ? LEGACY_AVOIDED_MAP[d] : d, 2.5)
  );

  answers.favourites.forEach((f) => {
    const weight = f.wouldBuyAgain === 'no' ? 0.5 : 1.5;
    findById(f.fragranceId)?.directions.forEach((d) => add(like, d, weight));
    f.reasons.forEach((r) => add(like, LOVE_CHIP_MAP[r] ?? null, 2));
  });
  answers.dislikes.forEach((f) => {
    const weight = f.avoidSimilar === 'yes' ? 1.25 : 0.75;
    findById(f.fragranceId)?.directions.forEach((d) => add(avoid, d, weight));
    f.reasons.forEach((r) => add(avoid, DISLIKE_CHIP_MAP[r] ?? null, 2));
  });

  return { like, avoid, reactions };
}

const w = (m: Record<string, number>, k: string) => m[k] ?? 0;

/** Hard sweetness aversion: Sweet rated avoid / not-for-me, or strong dislike signals. */
export function avoidsSweet(weights: SignalWeights): boolean {
  if (weights.reactions['Sweet'] === 'avoid' || weights.reactions['Sweet'] === 'not_for_me')
    return true;
  if (weights.reactions['Sweet'] === 'enjoy' || weights.reactions['Sweet'] === 'love') return false;
  return w(weights.avoid, 'Sweet') + w(weights.like, '__lowsweet') + w(weights.like, '__dry') >= 2;
}

/** Soft stance: Sweet = "Depends" — fine in the right style, cautious otherwise. */
export function sweetIsConditional(answers: OnboardingAnswers): boolean {
  return (answers.directionPreferences ?? []).some(
    (p) => p.name === 'Sweet' && p.reaction === 'depends'
  );
}

function joinNice(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

const PRETTY: Record<string, string> = {
  'Fresh / aquatic': 'fresh aquatics',
  'Smoky / incense': 'smoke & incense',
  'Musky / clean': 'clean musks',
  __dry: 'dry compositions',
  __lowsweet: 'low sweetness',
  __masculine: 'masculine styles',
  __elegant: 'elegant styles',
  __unique: 'distinctive scents',
  __synthetic: 'synthetic-smelling blends',
  __common: 'overexposed crowd-pleasers',
  __genericblue: 'generic "blue" freshness',
  __animalic: 'animalic notes',
  __coconut: 'coconut / sunscreen vibes',
  __loud: 'overpowering projection',
};
const pretty = (k: string) => PRETTY[k] ?? k.toLowerCase();
const prettyTitle = (k: string) => {
  const p = PRETTY[k] ?? k;
  return p.charAt(0).toUpperCase() + p.slice(1);
};

/** What Accord will hunt for, per loved/enjoyed direction. */
const PRIORITY_PHRASES: Record<string, string> = {
  Citrus: 'dry citrus',
  'Fresh / aquatic': 'character-driven freshness',
  Green: 'aromatic greens',
  Woody: 'dry woods',
  Tobacco: 'restrained tobacco',
  Vetiver: 'rooty vetiver',
  Spicy: 'peppery spice',
  Leather: 'refined leather',
  Salty: 'salty aquatics',
  Mineral: 'mineral freshness',
  'Smoky / incense': 'measured smoke',
  'Musky / clean': 'clean musks',
  Oud: 'polished oud',
  Amber: 'structured amber',
  Vanilla: 'restrained vanilla',
  Sweet: 'well-judged sweetness',
  Floral: 'fresh florals',
  Powdery: 'soft powder',
};

export function generateProfile(answers: OnboardingAnswers): TasteProfile {
  const weights = computeWeights(answers);
  const { like, avoid, reactions } = weights;
  const prefs = answers.directionPreferences ?? [];
  const conditional = answers.conditionalPreferences ?? {};
  const isSpecial = (k: string) => k.startsWith('__');

  const byReaction = (r: DirectionReaction) => prefs.filter((p) => p.reaction === r).map((p) => p.name);
  const loves = byReaction('love');
  const enjoys = byReaction('enjoy');
  const dependsDirs = byReaction('depends');
  const hardAvoids = byReaction('avoid');
  const softAvoids = byReaction('not_for_me');

  const dependsOn = dependsDirs.map((name) => ({
    name,
    works: conditional[name]?.worksForMe ?? [],
    avoid: conditional[name]?.notForMe ?? [],
  }));

  const topLiked = Object.entries(like)
    .filter(([k]) => !isSpecial(k))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([k]) => k);

  // "Usually avoids": hard reactions first, then conditional notForMe styles, then chip-driven.
  const avoids: string[] = [
    ...hardAvoids.map(prettyTitle),
    ...softAvoids.map(prettyTitle),
    ...dependsOn.flatMap((d) => d.avoid.slice(0, 2)),
    ...Object.entries(avoid)
      .filter(([k, v]) => isSpecial(k) && v >= 2)
      .map(([k]) => prettyTitle(k)),
  ];

  const dominant = [
    ...(avoidsSweet(weights) ? ['Low sweetness'] : []),
    ...loves.slice(0, 3).map(prettyTitle),
    ...enjoys.slice(0, 3 - Math.min(loves.length, 3)).map(prettyTitle),
  ];
  if (dominant.length === 0) dominant.push(...topLiked.slice(0, 3).map(prettyTitle));
  if (w(like, '__dry') >= 2 && !dominant.includes('Low sweetness')) dominant.unshift('Dry');

  const bestDirections = (loves.length + enjoys.length > 0 ? [...loves, ...enjoys] : topLiked)
    .slice(0, 4)
    .map(prettyTitle);

  const riskZones: string[] = [];
  const sweetCond = conditional['Sweet'];
  if (avoidsSweet(weights)) riskZones.push('Sweet ambers & gourmands');
  else if (sweetCond?.notForMe.length)
    riskZones.push(joinNice(sweetCond.notForMe.slice(0, 2).map((x) => x.toLowerCase())));
  if (reactions['Vanilla'] === 'avoid' || w(avoid, 'Vanilla') >= 2.5)
    riskZones.push('Heavy vanilla bases');
  if (reactions['Powdery'] === 'avoid') riskZones.push('Powdery barbershop styles');
  if (reactions['Oud'] === 'avoid' || reactions['Oud'] === 'not_for_me')
    riskZones.push('Medicinal oud bombs');
  if (conditional['Oud']?.notForMe.length)
    riskZones.push(`Oud that turns ${conditional['Oud'].notForMe[0].toLowerCase().replace('too ', '')}`);
  if (w(avoid, '__synthetic') > 0) riskZones.push('Sharp synthetic blends');
  if (w(avoid, '__common') > 0) riskZones.push('Overhyped crowd-pleasers');
  if (conditional['Fresh / aquatic']?.notForMe.some((x) => /shower-gel|generic/i.test(x)))
    riskZones.push('Generic "blue" freshness');
  if (riskZones.length === 0) riskZones.push('Few hard limits detected — keep exploring');

  // Profile strength.
  let strength = 26;
  strength += Math.min(answers.favourites.length * 7, 21);
  strength += Math.min(answers.dislikes.length * 5, 15);
  strength += Math.min(prefs.length * 1.5, 14);
  strength += Math.min(Object.keys(conditional).length * 3, 9);
  strength += Math.min(answers.currentGoals.length * 2, 6);
  if (answers.budgetRange) strength += 3;
  if (answers.projection) strength += 3;
  if (answers.openToClones) strength += 2;
  if (answers.location?.country) strength += 3;
  if (answers.ageRange) strength += 2;
  if (answers.fragranceOrientation) strength += 2;
  strength = Math.round(Math.min(strength, 94));

  // ---- Narrative summary -----------------------------------------------
  const positives = [...loves, ...enjoys];
  const sentence1 =
    positives.length > 0
      ? `You lean toward ${joinNice(positives.slice(0, 4).map(pretty))}${
          avoidsSweet(weights)
            ? ', and prefer them structured rather than sweet'
            : sweetIsConditional(answers)
              ? ', with sweetness only on your terms'
              : ''
        }.`
      : topLiked.length > 0
        ? `Your favourites point toward ${joinNice(topLiked.slice(0, 3).map(pretty))}.`
        : 'Accord is still mapping your taste — every rating sharpens it.';

  const priorities = positives.slice(0, 3).map((d) => PRIORITY_PHRASES[d] ?? pretty(d));
  const carefulWith = avoids.slice(0, 3).map((a) => a.toLowerCase());
  const sentence2 =
    priorities.length > 0
      ? `Accord will prioritise ${joinNice(priorities)}${
          carefulWith.length ? `, and be careful with ${joinNice(carefulWith)}` : ''
        }.`
      : '';

  let sentence3 = '';
  if (sweetIsConditional(answers)) {
    const works = sweetCond?.worksForMe.slice(0, 3).map((x) => x.toLowerCase());
    const not = sweetCond?.notForMe.slice(0, 3).map((x) => x.toLowerCase());
    sentence3 = `You don't reject sweetness completely${
      works?.length ? ` — ${joinNice(works)} may work for you` : ''
    }${not?.length ? `, while ${joinNice(not)} should be avoided` : ''}.`;
  }
  const freshCond = conditional['Fresh / aquatic'];
  let sentence4 = '';
  if (reactions['Fresh / aquatic'] === 'depends' && freshCond) {
    const fw = freshCond.worksForMe.slice(0, 2).map((x) => x.toLowerCase());
    const fn = freshCond.notForMe.slice(0, 2).map((x) => x.toLowerCase());
    sentence4 = `Freshness works for you when it's ${joinNice(fw) || 'distinctive'}${
      fn.length ? `, not ${joinNice(fn)}` : ''
    }.`;
  }

  // location / climate context
  const loc = answers.location;
  let sentence5 = '';
  if (loc?.country) {
    switch (loc.climateRegion) {
      case 'cold_temperate':
      case 'mild_temperate':
        sentence5 = `You're based in ${loc.country}, so Accord will balance fresh daily scents with colder-weather options like tobacco, woods and amber${
          avoidsSweet(weights) ? ' — as long as they stay within your sweetness tolerance' : ''
        }.`;
        break;
      case 'tropical_humid':
        sentence5 = `You're in a hot, humid climate, so Accord will prioritise fresh, citrus, green, musky and lightweight woody scents, and warn you when something may feel too dense.`;
        break;
      case 'mediterranean':
        sentence5 = `Your Mediterranean climate favours citrus, greens and structured freshness, with room for heavier scents on cooler evenings.`;
        break;
      case 'hot_dry':
        sentence5 = `In dry heat, Accord will lean on fresh-spicy, citrus and dry woods, and flag syrupy sweetness for daytime wear.`;
        break;
    }
  }

  // soft framing mention — only when the user chose a leaning
  const sentence6 =
    answers.fragranceOrientation === 'masculine'
      ? 'Your recommendations are framed masculine-leaning, but Accord will still include unisex options when they match your taste.'
      : answers.fragranceOrientation === 'feminine'
        ? 'Your recommendations are framed feminine-leaning, with unisex options included when they match your taste.'
        : answers.fragranceOrientation === 'unisex'
          ? 'Accord will favour unisex and balanced profiles in your recommendations.'
          : '';

  const summary = [sentence1, sentence2, sentence3, sentence4, sentence5, sentence6]
    .filter(Boolean)
    .join(' ');

  // ---- Trait values (0–10), driven directly by reactions ----------------
  const REACTION_TRAIT: Record<DirectionReaction, number> = {
    love: 9.5,
    enjoy: 7.5,
    depends: 5,
    not_for_me: 2.5,
    avoid: 1,
  };
  const reactionVal = (dir: string): number | undefined =>
    reactions[dir] !== undefined ? REACTION_TRAIT[reactions[dir]] : undefined;
  const weightVal = (dir: string): number =>
    Math.max(0.5, Math.min(10, 1.5 + w(like, dir) * 1.6 - w(avoid, dir) * 1.8));
  const clamp10 = (v: number) => Math.max(0.5, Math.min(10, v));
  const trait = (dir: string, crossBonus = 0) =>
    clamp10((reactionVal(dir) ?? weightVal(dir)) + crossBonus);

  const citrusPositive = reactions['Citrus'] === 'love' || reactions['Citrus'] === 'enjoy';
  const saltyPositive = reactions['Salty'] === 'love' || reactions['Salty'] === 'enjoy';
  const vetiverPositive = reactions['Vetiver'] === 'love' || reactions['Vetiver'] === 'enjoy';

  const sweetness = (() => {
    const r = reactions['Sweet'];
    if (r === 'avoid') return 1.5;
    if (r === 'not_for_me') return 3;
    if (r === 'depends') return 5;
    if (r === 'enjoy') return 7;
    if (r === 'love') return 9;
    return clamp10(5 + w(like, 'Sweet') * 1.2 - w(avoid, 'Sweet') * 1.4 - w(like, '__lowsweet'));
  })();

  const projectionScore =
    {
      'Very subtle': 2,
      'Noticeable but tasteful': 5,
      'Strong projection': 7,
      'Beast mode': 10,
      'Depends on situation': 5,
    }[answers.projection ?? ''] ?? 5;

  const traits = [
    { label: 'Citrus', value: trait('Citrus') },
    { label: 'Freshness', value: trait('Fresh / aquatic', (citrusPositive ? 0.8 : 0) + (saltyPositive ? 0.8 : 0)) },
    { label: 'Green', value: trait('Green') },
    { label: 'Woody', value: trait('Woody', vetiverPositive ? 0.7 : 0) },
    { label: 'Tobacco', value: trait('Tobacco') },
    { label: 'Sweetness', value: sweetness },
    { label: 'Smoky', value: trait('Smoky / incense') },
    { label: 'Clean', value: trait('Musky / clean') },
    { label: 'Vetiver', value: trait('Vetiver') },
    { label: 'Projection', value: projectionScore },
  ];

  return {
    summary,
    loves: loves.map(prettyTitle),
    enjoys: enjoys.map(prettyTitle),
    dependsOn,
    dominant: dominant.slice(0, 5),
    avoids: avoids.length ? [...new Set(avoids)].slice(0, 6) : ['Nothing flagged yet'],
    bestDirections: bestDirections.length ? bestDirections : ['Still learning'],
    riskZones: [...new Set(riskZones)].slice(0, 5),
    strength,
    strengthHint: 'Add ratings, dislikes and would-buy-again decisions to sharpen this.',
    traits,
  };
}

export const EMPTY_ANSWERS: OnboardingAnswers = {
  favourites: [],
  dislikes: [],
  directionPreferences: [],
  conditionalPreferences: {},
  likedDirections: [],
  avoidedDirections: [],
  currentGoals: [],
};
