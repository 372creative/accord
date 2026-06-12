import { OnboardingAnswers, TasteProfile } from '../types';
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

const AVOIDED_MAP: Record<string, string | null> = {
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

export interface SignalWeights {
  like: Record<string, number>;
  avoid: Record<string, number>;
}

export function computeWeights(answers: OnboardingAnswers): SignalWeights {
  const like: Record<string, number> = {};
  const avoid: Record<string, number> = {};
  const add = (map: Record<string, number>, key: string | null | undefined, w: number) => {
    if (!key) return;
    map[key] = (map[key] ?? 0) + w;
  };

  answers.likedDirections.forEach((d) => add(like, d, 3));
  answers.avoidedDirections.forEach((d) => add(avoid, AVOIDED_MAP[d] ?? null, 3));

  answers.favourites.forEach((f) => {
    findById(f.fragranceId)?.directions.forEach((d) => add(like, d, 1.5));
    f.reasons.forEach((r) => add(like, LOVE_CHIP_MAP[r] ?? null, 2));
  });
  answers.dislikes.forEach((f) => {
    findById(f.fragranceId)?.directions.forEach((d) => add(avoid, d, 0.75));
    f.reasons.forEach((r) => add(avoid, DISLIKE_CHIP_MAP[r] ?? null, 2));
  });

  return { like, avoid };
}

const w = (m: Record<string, number>, k: string) => m[k] ?? 0;

export function avoidsSweet(weights: SignalWeights): boolean {
  return w(weights.avoid, 'Sweet') + w(weights.like, '__lowsweet') + w(weights.like, '__dry') >= 2;
}

function top(m: Record<string, number>, n: number, exclude: (k: string) => boolean) {
  return Object.entries(m)
    .filter(([k]) => !exclude(k))
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k]) => k);
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

function joinNice(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

export function generateProfile(answers: OnboardingAnswers): TasteProfile {
  const weights = computeWeights(answers);
  const { like, avoid } = weights;
  const isSpecial = (k: string) => k.startsWith('__');

  const topDirections = top(like, 4, isSpecial);
  const topAvoids = top(avoid, 4, (k) => false);

  const dominant: string[] = [];
  if (w(like, '__dry') + (avoidsSweet(weights) ? 1 : 0) >= 2) dominant.push('Dry');
  topDirections.slice(0, 3).forEach((d) => dominant.push(prettyTitle(d)));
  if (avoidsSweet(weights)) dominant.push('Low sweetness');
  if (w(like, '__elegant') >= 2) dominant.push('Refined');
  if (w(like, '__unique') >= 2) dominant.push('Character-driven');

  const avoids = topAvoids.map(prettyTitle);

  const bestDirections = topDirections.map(prettyTitle);

  const riskZones: string[] = [];
  if (avoidsSweet(weights)) riskZones.push('Sweet ambers & gourmands');
  if (w(avoid, 'Vanilla') > 0) riskZones.push('Heavy vanilla bases');
  if (w(avoid, 'Powdery') > 0) riskZones.push('Powdery barbershop styles');
  if (w(avoid, '__synthetic') > 0) riskZones.push('Sharp synthetic blends');
  if (w(avoid, '__common') > 0) riskZones.push('Overhyped crowd-pleasers');
  if (w(avoid, 'Oud') > 0) riskZones.push('Medicinal oud bombs');
  if (w(avoid, 'Smoky / incense') > 0 && w(like, 'Smoky / incense') === 0)
    riskZones.push('Full-on smoke & incense');
  if (riskZones.length === 0) riskZones.push('Few hard limits detected — keep exploring');

  // Profile strength: how much signal the user has given us.
  let strength = 30;
  strength += Math.min(answers.favourites.length * 7, 21);
  strength += Math.min(answers.dislikes.length * 5, 15);
  strength += Math.min(answers.likedDirections.length * 2, 10);
  strength += Math.min(answers.avoidedDirections.length * 2, 8);
  strength += Math.min(answers.currentGoals.length * 2, 6);
  if (answers.budgetRange) strength += 3;
  if (answers.projection) strength += 3;
  if (answers.openToClones) strength += 2;
  strength = Math.min(strength, 94);

  // Narrative summary.
  const styleWords: string[] = [];
  if (avoidsSweet(weights)) styleWords.push('dry');
  if (w(like, 'Fresh / aquatic') + w(like, 'Citrus') >= 3) styleWords.push('fresh');
  if (w(like, '__masculine') >= 2) styleWords.push('masculine');
  if (w(like, '__elegant') >= 2) styleWords.push('elegant');
  if (styleWords.length === 0) styleWords.push('balanced');

  const avoidPhrase =
    topAvoids.length > 0
      ? `You are open to character, but tend to avoid ${joinNice(topAvoids.slice(0, 3).map(pretty))}.`
      : 'You have not flagged any hard dislikes yet, so Accord will explore broadly.';

  const zone =
    topDirections.length > 0
      ? joinNice(topDirections.slice(0, 3).map(pretty)) +
        (avoidsSweet(weights) ? ' with restrained sweetness' : '')
      : 'versatile, well-reviewed staples';

  const summary = `You seem to prefer ${joinNice(styleWords)} fragrances built around ${joinNice(
    topDirections.slice(0, 4).map(pretty)
  ) || 'a still-forming core'}. ${avoidPhrase} Your safest discovery zone is likely ${zone}.`;

  // Trait bars (0–10).
  const trait = (likeKeys: string[], avoidKeys: string[] = []) => {
    const l = likeKeys.reduce((s, k) => s + w(like, k), 0);
    const a = avoidKeys.reduce((s, k) => s + w(avoid, k), 0);
    return Math.max(0, Math.min(10, 1 + l * 1.4 - a * 1.6));
  };
  const projectionScore =
    {
      'Very subtle': 2,
      'Noticeable but tasteful': 5,
      'Strong projection': 7.5,
      'Beast mode': 9.5,
      'Depends on situation': 5.5,
    }[answers.projection ?? ''] ?? 5;

  const traits = [
    { label: 'Citrus', value: trait(['Citrus']) },
    { label: 'Freshness', value: trait(['Fresh / aquatic', 'Salty'], ['Fresh / aquatic']) },
    { label: 'Green', value: trait(['Green']) },
    { label: 'Woody', value: trait(['Woody']) },
    { label: 'Tobacco', value: trait(['Tobacco']) },
    {
      label: 'Sweetness',
      value: Math.max(0.5, Math.min(10, 5 + w(like, 'Sweet') * 1.5 - w(avoid, 'Sweet') * 1.4 - w(like, '__lowsweet'))),
    },
    { label: 'Smoky', value: trait(['Smoky / incense'], ['Smoky / incense']) },
    { label: 'Clean', value: trait(['Musky / clean']) },
    { label: 'Vetiver', value: trait(['Vetiver']) },
    { label: 'Projection', value: projectionScore },
  ];

  return {
    summary,
    dominant: dominant.slice(0, 5),
    avoids: avoids.length ? avoids : ['Nothing flagged yet'],
    bestDirections: bestDirections.length ? bestDirections : ['Still learning'],
    riskZones,
    strength,
    traits,
  };
}

export const EMPTY_ANSWERS: OnboardingAnswers = {
  favourites: [],
  dislikes: [],
  likedDirections: [],
  avoidedDirections: [],
  currentGoals: [],
};
