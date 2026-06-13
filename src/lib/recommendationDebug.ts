import { CollectionItem, Fragrance, OnboardingAnswers } from '../types';
import { fragrances, findById } from '../data/fragrances';
import { calculateMatchScore } from './recommendations';

/**
 * Development helper — logs a full, tunable breakdown for one fragrance.
 * Usage in a browser console:  window.debugRecommendation('dior-sauvage-edt')
 * (wired up in dev via app state, or call directly in code).
 */
export function debugRecommendation(
  fragranceId: string,
  answers: OnboardingAnswers,
  collection: CollectionItem[],
  allFragrances: Fragrance[] = fragrances
) {
  const f = findById(fragranceId);
  if (!f) {
    // eslint-disable-next-line no-console
    console.warn('[accord:debug] unknown fragrance', fragranceId);
    return undefined;
  }
  const r = calculateMatchScore(f, answers, collection, allFragrances);
  const out = {
    fragrance: `${f.name} — ${f.brand}`,
    score: r.score,
    label: r.matchLabel,
    bucket: r.bucket,
    scoreBreakdown: r.scoreBreakdown,
    totalBeforeClamp: r.debug?.totalBeforeClamp,
    appliedRules: r.debug?.appliedRules ?? [],
    capsApplied: r.debug?.capsApplied ?? [],
    positiveSignals: r.positiveSignals,
    cautionSignals: r.cautionSignals,
    negativeSignals: r.negativeSignals,
    whyItFits: r.whyItFits,
    caution: r.caution,
  };
  // eslint-disable-next-line no-console
  console.log('[accord:debug]', out);
  return out;
}
