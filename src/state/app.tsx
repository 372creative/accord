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
import { buildBuckets } from '../lib/recommendations';
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
}

const Ctx = createContext<AppState | null>(null);

const STORAGE_KEY = 'accord-state-v1';

interface Persisted {
  stage: Stage;
  answers: OnboardingAnswers;
  collection: CollectionItem[];
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
      ...p.answers,
      favourites: picked(p.answers.favourites ?? []),
      dislikes: picked(p.answers.dislikes ?? []),
    },
    collection: (p.collection ?? [])
      .map((c) => ({ ...c, fragranceId: migrateId(c.fragranceId) ?? '' }))
      .filter((c) => c.fragranceId),
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
        rating: 8.5,
        decisionTag: 'Would buy again',
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
  const [tab, setTab] = useState<Tab>('foryou');
  const [overlays, setOverlays] = useState<Overlay[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ stage, answers, collection }));
    } catch {
      /* private mode etc. */
    }
  }, [stage, answers, collection]);

  const profile = useMemo(
    () => (stage === 'onboarding' ? null : generateProfile(answers)),
    [stage, answers]
  );
  const buckets = useMemo(
    () => (stage === 'app' || stage === 'result' ? buildBuckets(answers, collection) : []),
    [stage, answers, collection]
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

  const updateItem = useCallback((fragranceId: string, patch: Partial<CollectionItem>) => {
    setCollection((items) =>
      items.map((i) =>
        i.fragranceId === fragranceId
          ? { ...i, ...patch, lastUpdated: new Date().toISOString() }
          : i
      )
    );
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
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp outside AppProvider');
  return v;
}
