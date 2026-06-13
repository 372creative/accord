import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  CollectionItem,
  CollectionStatus,
  OnboardingAnswers,
  RecBucket,
  TasteProfile,
} from '../types';
import { EMPTY_ANSWERS, generateProfile } from '../logic/profile';
import { buildBuckets, FeedbackMap } from '../lib/recommendations';
import { VALID_IDS } from '../data/fragrances';

export type Stage = 'onboarding' | 'result' | 'app';
export type Tab = 'foryou' | 'discover' | 'collection' | 'profile';
export type Overlay = { type: 'fragrance'; id: string } | { type: 'list'; id: string };

interface AppState {
  stage: Stage;
  setStage: (s: Stage) => void;
  answers: OnboardingAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<OnboardingAnswers>>;
  profile: TasteProfile | null;
  buckets: RecBucket[];
  collection: CollectionItem[];
  tab: Tab;
  setTab: (t: Tab) => void;
  overlays: Overlay[];
  push: (o: Overlay) => void;
  pop: () => void;
  completeOnboarding: (answers: OnboardingAnswers) => void;
  refineProfile: () => void;
  itemFor: (fragranceId: string) => CollectionItem | undefined;
  setStatus: (fragranceId: string, status: CollectionStatus | null) => void;
  updateItem: (fragranceId: string, patch: Partial<CollectionItem>) => void;
  addCollectionItem: (input: NewCollectionInput) => void;
  feedback: FeedbackMap;
  giveFeedback: (fragranceId: string, value: string) => void;
}

export interface NewCollectionInput {
  /** Dataset id, or omitted for a manual entry. */
  fragranceId?: string;
  status: CollectionStatus;
  rating?: number;
  decisionTag?: string;
  personalNote?: string;
  manual?: { name: string; brand: string; concentration?: string };
}

const Ctx = createContext<AppState | null>(null);

const STORAGE_KEY = 'accord-state-v1';

interface Persisted {
  stage: Stage;
  answers: OnboardingAnswers;
  collection: CollectionItem[];
  feedback?: FeedbackMap;
}

/** Old mock-data ids → ids in the seed dataset (Cedrat Boise / Guilty Absolute
 *  have no dataset equivalent and are dropped on migration). */
const ID_MIGRATION: Record<string, string> = {
  terre: 'terre-dhermes-edt',
  givree: 'terre-dhermes-eau-givree',
  lbei: 'dandg-light-blue-eau-intense',
  'eau-sauvage': 'dior-eau-sauvage',
  encre: 'lalique-encre-noire',
  'encre-extreme': 'lalique-encre-noire-a-lextreme',
  bleu: 'bleu-de-chanel-edp',
  gsa: 'givenchy-gentleman-society-ambree',
  turathi: 'afnan-turathi-blue',
  fattan: 'rasasi-fattan',
  'aqva-marine': 'bvlgari-aqva-marine',
  another13: 'le-labo-another-13',
  'spicebomb-mm': 'viktor-rolf-spicebomb-extreme',
};

const migrateId = (id?: string): string | undefined => {
  if (!id) return undefined;
  const mapped = ID_MIGRATION[id] ?? id;
  return VALID_IDS.has(mapped) ? mapped : undefined;
};

function migrate(p: Persisted): Persisted {
  const picked = (xs: Persisted['answers']['favourites']) =>
    xs.map((x) => ({ ...x, fragranceId: migrateId(x.fragranceId) }));
  return {
    ...p,
    answers: {
      ...EMPTY_ANSWERS,
      ...p.answers,
      // fields introduced by the nuanced reaction model
      directionPreferences: p.answers.directionPreferences ?? [],
      conditionalPreferences: p.answers.conditionalPreferences ?? {},
      favourites: picked(p.answers.favourites ?? []),
      dislikes: picked(p.answers.dislikes ?? []),
    },
    collection: (p.collection ?? [])
      .map((c) => ({ ...c, fragranceId: migrateId(c.fragranceId) ?? '' }))
      .filter((c) => c.fragranceId),
    feedback: p.feedback ?? {},
  };
}

function load(): Persisted | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? migrate(JSON.parse(raw) as Persisted) : null;
  } catch {
    return null;
  }
}

let idCounter = 0;
const newId = () => `ci-${Date.now()}-${idCounter++}`;

function seedCollection(answers: OnboardingAnswers, existing: CollectionItem[]): CollectionItem[] {
  const items = [...existing];
  const has = (fid: string) => items.some((i) => i.fragranceId === fid);
  const now = new Date().toISOString();
  answers.favourites.forEach((f) => {
    if (f.fragranceId && !has(f.fragranceId)) {
      items.push({
        id: newId(),
        fragranceId: f.fragranceId,
        status: 'own',
        rating: f.wouldBuyAgain === 'no' ? 7 : 8.5,
        decisionTag:
          f.wouldBuyAgain === 'no'
            ? 'Good, but redundant'
            : f.wouldBuyAgain === 'maybe'
              ? 'Keeper'
              : 'Would buy again',
        likedChips: f.reasons,
        dislikedChips: [],
        lastUpdated: now,
      });
    }
  });
  answers.dislikes.forEach((f) => {
    if (f.fragranceId && !has(f.fragranceId)) {
      items.push({
        id: newId(),
        fragranceId: f.fragranceId,
        status: 'sampled',
        rating: 4,
        decisionTag: 'Not for me',
        likedChips: [],
        dislikedChips: f.reasons,
        lastUpdated: now,
      });
    }
  });
  return items;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const saved = useMemo(load, []);
  const [stage, setStage] = useState<Stage>(saved?.stage ?? 'onboarding');
  const [answers, setAnswers] = useState<OnboardingAnswers>(saved?.answers ?? EMPTY_ANSWERS);
  const [collection, setCollection] = useState<CollectionItem[]>(saved?.collection ?? []);
  const [feedback, setFeedback] = useState<FeedbackMap>(saved?.feedback ?? {});
  const [tab, setTab] = useState<Tab>('foryou');
  const [overlays, setOverlays] = useState<Overlay[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ stage, answers, collection, feedback }));
    } catch {
      /* private mode etc. */
    }
  }, [stage, answers, collection, feedback]);

  const profile = useMemo(
    () => (stage === 'onboarding' ? null : generateProfile(answers)),
    [stage, answers]
  );
  const buckets = useMemo(
    () => (stage === 'app' || stage === 'result' ? buildBuckets(answers, collection, feedback) : []),
    [stage, answers, collection, feedback]
  );

  const completeOnboarding = useCallback((a: OnboardingAnswers) => {
    setAnswers(a);
    setCollection((c) => seedCollection(a, c));
    setStage('result');
  }, []);

  const refineProfile = useCallback(() => {
    setOverlays([]);
    setStage('onboarding');
  }, []);

  const push = useCallback((o: Overlay) => setOverlays((s) => [...s, o]), []);
  const pop = useCallback(() => setOverlays((s) => s.slice(0, -1)), []);

  const itemFor = useCallback(
    (fragranceId: string) => collection.find((i) => i.fragranceId === fragranceId),
    [collection]
  );

  const setStatus = useCallback((fragranceId: string, status: CollectionStatus | null) => {
    setCollection((items) => {
      const existing = items.find((i) => i.fragranceId === fragranceId);
      if (status === null) return items.filter((i) => i.fragranceId !== fragranceId);
      if (existing) {
        return items.map((i) =>
          i.fragranceId === fragranceId
            ? { ...i, status, lastUpdated: new Date().toISOString() }
            : i
        );
      }
      return [
        ...items,
        {
          id: newId(),
          fragranceId,
          status,
          likedChips: [],
          dislikedChips: [],
          lastUpdated: new Date().toISOString(),
        },
      ];
    });
  }, []);

  const giveFeedback = useCallback(
    (fragranceId: string, value: string) => {
      if (value === 'Own it') setStatus(fragranceId, 'own');
      else if (value === 'Already tried') setStatus(fragranceId, 'sampled');
      setFeedback((m) => ({ ...m, [fragranceId]: value }));
    },
    [setStatus]
  );

  const updateItem = useCallback((fragranceId: string, patch: Partial<CollectionItem>) => {
    setCollection((items) =>
      items.map((i) =>
        i.fragranceId === fragranceId
          ? { ...i, ...patch, lastUpdated: new Date().toISOString() }
          : i
      )
    );
  }, []);

  const addCollectionItem = useCallback((input: NewCollectionInput) => {
    const fragranceId = input.fragranceId ?? `manual-${Date.now()}-${idCounter++}`;
    setCollection((items) => {
      const base: CollectionItem = {
        id: newId(),
        fragranceId,
        status: input.status,
        rating: input.rating,
        decisionTag: input.decisionTag,
        personalNote: input.personalNote,
        manual: input.manual,
        likedChips: [],
        dislikedChips: [],
        lastUpdated: new Date().toISOString(),
      };
      // adding a known fragrance that's already tracked just updates it in place
      const existing = input.fragranceId
        ? items.find((i) => i.fragranceId === input.fragranceId)
        : undefined;
      if (existing) {
        return items.map((i) =>
          i.id === existing.id
            ? {
                ...i,
                status: input.status,
                rating: input.rating ?? i.rating,
                decisionTag: input.decisionTag ?? i.decisionTag,
                personalNote: input.personalNote ?? i.personalNote,
                lastUpdated: new Date().toISOString(),
              }
            : i
        );
      }
      return [base, ...items];
    });
  }, []);

  const value: AppState = {
    stage,
    setStage,
    answers,
    setAnswers,
    profile,
    buckets,
    collection,
    tab,
    setTab,
    overlays,
    push,
    pop,
    completeOnboarding,
    refineProfile,
    itemFor,
    setStatus,
    updateItem,
    addCollectionItem,
    feedback,
    giveFeedback,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp outside AppProvider');
  return v;
}
