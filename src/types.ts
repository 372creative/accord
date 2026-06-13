export interface Fragrance {
  id: string;
  name: string;
  brand: string;
  concentration: string;
  /** Market segment from the seed dataset, e.g. "Designer", "Niche", "Middle Eastern". */
  category: string;
  /** Raw price tier from the dataset, e.g. "€70–120". */
  priceTier: string;
  popularity: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  accordProfile: string[];
  styleTags: string[];
  sweetnessLevel: number; // 1–10
  freshnessLevel: number; // 1–10
  darknessLevel: number; // 1–10
  uniquenessLevel: number; // 1–10
  projectionLevel: number; // 1–10
  longevityLevel: number; // 1–10
  seasonTags: string[];
  occasionTags: string[];
  description: string;
  caution: string;
  bestFor: string[];
  avoidIf: string[];
  similarFragrances: string[];
  cheaperAlternatives: string[];
  /** similarFragrances / cheaperAlternatives resolved to ids within the dataset. */
  similarIds: string[];
  cheaperAlternativeIds: string[];
  recommendationLogic: { recommendIf: string; avoidIf: string };
  recommendSignals: string[];
  imageFileName?: string;
  /** Resolved image path under /public/fragrances; falls back to the SVG bottle if missing. */
  image?: string;
  /** Future retailer/wholesaler readiness — not user-facing terminology. */
  availability?: {
    marketRegions?: string[];
    retailers?: {
      name: string;
      region: string;
      country?: string;
      url?: string;
      priceFrom?: number;
      currency?: string;
      sampleAvailable?: boolean;
    }[];
    wholesalers?: {
      name: string;
      region: string;
      country?: string;
      available?: boolean;
      notes?: string;
    }[];
  };
  // ---- derived fields (computed at conversion time) ----
  /** The app's 18-direction taste taxonomy, derived from accords/styles/notes. */
  directions: string[];
  priceCategory: 'budget' | 'mid' | 'designer' | 'premium' | 'niche';
  priceLabel: string;
  /** Bottle gradient colours [light, dark] for the placeholder bottle. */
  colors: [string, string];
  /** All notes flattened, for chips. */
  notes: string[];
  /** Alias of accordProfile, used by cards. */
  accords: string[];
}

export type CollectionStatus = 'own' | 'sampled' | 'wishlist' | 'sold';

export interface CollectionItem {
  id: string;
  /** References a dataset fragrance, or a synthetic `manual-…` id for free entries. */
  fragranceId: string;
  status: CollectionStatus;
  rating?: number;
  decisionTag?: string;
  likedChips: string[];
  dislikedChips: string[];
  personalNote?: string;
  lastUpdated: string;
  /** Present only for fragrances not in the dataset (manual add). */
  manual?: { name: string; brand: string; concentration?: string };
}

export type YesMaybeNo = 'yes' | 'maybe' | 'no';

export type Gender = 'man' | 'woman';

export type FragranceOrientation =
  | 'masculine'
  | 'feminine'
  | 'unisex'
  | 'no_preference'
  | 'per_fragrance';

export type AgeRange = 'under_18' | '18_24' | '25_34' | '35_44' | '45_54' | '55_plus';

export type ClimateRegion =
  | 'cold_temperate'
  | 'mild_temperate'
  | 'mediterranean'
  | 'tropical_humid'
  | 'hot_dry'
  | 'unknown';

export type MarketRegion = 'EU' | 'UK' | 'US' | 'SEA' | 'MENA' | 'OTHER';

export interface UserLocation {
  country: string;
  city?: string;
  climateRegion?: ClimateRegion;
  currency?: string;
  marketRegion?: MarketRegion;
}

export interface PickedFragrance {
  fragranceId?: string;
  name: string;
  reasons: string[];
  /** Favourites: would the user buy it again? */
  wouldBuyAgain?: YesMaybeNo;
  /** Dislikes: should Accord avoid similar scents? */
  avoidSimilar?: YesMaybeNo;
}

export type DirectionReaction = 'avoid' | 'not_for_me' | 'depends' | 'enjoy' | 'love';

export interface DirectionPreference {
  name: string;
  reaction: DirectionReaction;
  score: number;
}

export interface ConditionalPreference {
  worksForMe: string[];
  notForMe: string[];
  maxTolerance?: number;
}

export interface OnboardingAnswers {
  gender?: Gender;
  fragranceOrientation?: FragranceOrientation;
  ageRange?: AgeRange;
  location?: UserLocation;
  experienceLevel?: string;
  collectionSize?: string;
  budgetRange?: string;
  openToClones?: string;
  favourites: PickedFragrance[];
  dislikes: PickedFragrance[];
  /** Source of truth for taste directions: 5-point reactions, only for rated directions. */
  directionPreferences: DirectionPreference[];
  /** Per-direction nuance for "Depends" reactions: what works, what doesn't. */
  conditionalPreferences: Record<string, ConditionalPreference>;
  /** Derived/legacy: directions with score >= 7. */
  likedDirections: string[];
  /** Legacy avoided list (old onboarding vocabulary); kept for stored profiles. */
  avoidedDirections: string[];
  currentGoals: string[];
  projection?: string;
}

export interface TasteProfile {
  summary: string;
  /** "Love" reactions. */
  loves: string[];
  /** "Enjoy" reactions. */
  enjoys: string[];
  /** "Depends" reactions with their boundaries spelled out. */
  dependsOn: { name: string; works: string[]; avoid: string[] }[];
  dominant: string[];
  avoids: string[];
  bestDirections: string[];
  riskZones: string[];
  strength: number;
  strengthHint: string;
  traits: { label: string; value: number }[];
}

export interface Recommendation {
  fragranceId: string;
  match: number;
  whyItFits: string;
  /** One-liner for compact cards. */
  shortWhy?: string;
  caution?: string;
  signals: string[];
}

/** Lightweight per-fragrance feedback from recommendation cards. */
export type CardFeedback = 'Not for me' | 'Too sweet' | 'Too common' | 'Already tried' | 'Own it';

export interface RecBucket {
  id: string;
  title: string;
  subtitle: string;
  layout: 'large' | 'row';
  recs: Recommendation[];
}

export interface CuratedList {
  id: string;
  title: string;
  description: string;
  curator: string;
  fragranceIds: string[];
  tags: string[];
  relatedGoals: string[];
}
