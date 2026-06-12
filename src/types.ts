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
  fragranceId: string;
  status: CollectionStatus;
  rating?: number;
  decisionTag?: string;
  likedChips: string[];
  dislikedChips: string[];
  personalNote?: string;
  lastUpdated: string;
}

export interface PickedFragrance {
  fragranceId?: string;
  name: string;
  reasons: string[];
}

export interface OnboardingAnswers {
  experienceLevel?: string;
  collectionSize?: string;
  budgetRange?: string;
  openToClones?: string;
  favourites: PickedFragrance[];
  dislikes: PickedFragrance[];
  likedDirections: string[];
  avoidedDirections: string[];
  currentGoals: string[];
  projection?: string;
}

export interface TasteProfile {
  summary: string;
  dominant: string[];
  avoids: string[];
  bestDirections: string[];
  riskZones: string[];
  strength: number;
  traits: { label: string; value: number }[];
}

export interface Recommendation {
  fragranceId: string;
  match: number;
  whyItFits: string;
  caution?: string;
  signals: string[];
}

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
