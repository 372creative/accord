import {
  Availability,
  Fragrance,
  FullBottleLink,
  OnboardingAnswers,
  RetailerRegion,
  SampleLink,
} from '../types';
import { availabilityFor } from '../data/retailers';

// Availability, retailer links and affiliate status must not increase match score.
// Match scores are based on taste, profile, climate, budget and collection signals only.

const CURRENCY_SYMBOL: Record<string, string> = {
  EUR: '€',
  GBP: '£',
  USD: '$',
  SGD: 'S$',
  THB: '฿',
  AED: 'AED ',
  SAR: 'SAR ',
};

export function formatPrice(price?: number, currency?: string): string {
  if (price === undefined) return '';
  const sym = currency ? CURRENCY_SYMBOL[currency] ?? `${currency} ` : '';
  const amount = Number.isInteger(price) ? price.toFixed(2) : price.toFixed(2);
  // symbols that read as prefixes vs. code-style prefixes
  return `${sym}${amount}`;
}

/** "Estonia / EU", or "EU", or undefined when location is unknown. */
export function getRegionLabel(answers: OnboardingAnswers): string | undefined {
  const loc = answers.location;
  if (!loc?.marketRegion) return undefined;
  return loc.country ? `${loc.country} / ${loc.marketRegion}` : loc.marketRegion;
}

function raw(fragrance: Fragrance): Availability | undefined {
  return availabilityFor(fragrance.id) ?? fragrance.availability;
}

/** Region-first ordering: matching region, then in-stock, then price. Sponsored
 *  is preserved (and labelled in the UI) but never floated above relevance. */
function order<T extends SampleLink | FullBottleLink>(
  links: T[],
  marketRegion?: RetailerRegion
): T[] {
  return [...links].sort((a, b) => {
    const ar = marketRegion && a.region === marketRegion ? 0 : 1;
    const br = marketRegion && b.region === marketRegion ? 0 : 1;
    if (ar !== br) return ar - br;
    const as = a.inStock === false ? 1 : 0;
    const bs = b.inStock === false ? 1 : 0;
    if (as !== bs) return as - bs;
    return (a.price ?? Infinity) - (b.price ?? Infinity);
  });
}

export function getAvailabilityForRegion(
  fragrance: Fragrance,
  marketRegion?: RetailerRegion
): { samples: SampleLink[]; fullBottles: FullBottleLink[] } {
  return {
    samples: getSampleLinks(fragrance, marketRegion),
    fullBottles: getFullBottleLinks(fragrance, marketRegion),
  };
}

export function getSampleLinks(fragrance: Fragrance, marketRegion?: RetailerRegion): SampleLink[] {
  const links = raw(fragrance)?.sampleLinks ?? [];
  const regional = marketRegion ? links.filter((l) => l.region === marketRegion) : [];
  // region-specific links come first; fall back to all if none in region
  return order(regional.length ? regional : links, marketRegion);
}

export function getFullBottleLinks(
  fragrance: Fragrance,
  marketRegion?: RetailerRegion
): FullBottleLink[] {
  const links = raw(fragrance)?.fullBottleLinks ?? [];
  const regional = marketRegion ? links.filter((l) => l.region === marketRegion) : [];
  return order(regional.length ? regional : links, marketRegion);
}

export function hasSampleAvailable(fragrance: Fragrance, marketRegion?: RetailerRegion): boolean {
  return getSampleLinks(fragrance, marketRegion).some((l) => l.inStock !== false);
}

export function hasFullBottleAvailable(
  fragrance: Fragrance,
  marketRegion?: RetailerRegion
): boolean {
  return getFullBottleLinks(fragrance, marketRegion).some((l) => l.inStock !== false);
}

export function hasAnyAvailability(fragrance: Fragrance, marketRegion?: RetailerRegion): boolean {
  const a = raw(fragrance);
  if (!a) return false;
  return (
    getSampleLinks(fragrance, marketRegion).length > 0 ||
    getFullBottleLinks(fragrance, marketRegion).length > 0
  );
}

export interface AffiliateClickEvent {
  fragranceId: string;
  fragranceName: string;
  retailerName: string;
  linkType: string;
  region: string;
  marketRegion?: string;
  sponsored?: boolean;
  timestamp: string;
}

/** Placeholder analytics — wire to a real endpoint later. */
export function trackAffiliateClick(event: Omit<AffiliateClickEvent, 'timestamp'>): void {
  const payload: AffiliateClickEvent = { ...event, timestamp: new Date().toISOString() };
  // eslint-disable-next-line no-console
  console.log('[accord:affiliate-click]', payload);
}
