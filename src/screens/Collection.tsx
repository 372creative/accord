import React, { useState } from 'react';
import { useApp } from '../state/app';
import { CollectionStatus } from '../types';
import { findById } from '../data/fragrances';
import { Bottle } from '../components/Bottle';
import { Chip, HeaderBackdrop, SectionLabel } from '../components/ui';
import { UserMenu } from '../components/UserMenu';
import { ChevronRightIcon } from '../components/icons';

const SEGMENTS: { id: CollectionStatus; label: string }[] = [
  { id: 'own', label: 'Own' },
  { id: 'sampled', label: 'Sampled' },
  { id: 'wishlist', label: 'Try List' },
  { id: 'sold', label: 'Had / Sold' },
];

const EMPTY_STATES: Record<
  CollectionStatus,
  { copy: string; cta?: { label: string; action: 'foryou' | 'trylist' } }
> = {
  own: {
    copy: 'Your owned fragrances shape your recommendations most. Add the scents you actually wear or would buy again.',
    cta: { label: 'Browse recommendations', action: 'foryou' },
  },
  sampled: {
    copy: "Track what you've tested — even the bad ones help Accord learn.",
    cta: { label: 'View Try List', action: 'trylist' },
  },
  wishlist: {
    copy: "Fragrances you're considering sampling next.",
    cta: { label: 'Browse recommendations', action: 'foryou' },
  },
  sold: {
    copy: 'Decluttered scents still help Accord understand what not to recommend.',
  },
};

export function Collection() {
  const { collection, push, setTab } = useApp();
  const [segment, setSegment] = useState<CollectionStatus>('own');

  const items = collection.filter((i) => i.status === segment);

  return (
    <div className="pb-32">
      <header className="sticky top-0 z-30 px-5 pt-5 pb-3">
        <HeaderBackdrop />
        <div className="flex items-center justify-between">
          <UserMenu />
          <h1 className="font-display font-medium text-[13px] uppercase tracking-[0.22em] text-ink">
            Collection
          </h1>
          <div className="w-[38px]" />
        </div>
        <div className="mt-4 rounded-full bg-card border border-white/[0.07] p-1 flex">
          {SEGMENTS.map((s) => {
            const count = collection.filter((i) => i.status === s.id).length;
            const active = segment === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSegment(s.id)}
                className={`flex-1 rounded-full py-2 font-display text-[11px] font-semibold uppercase tracking-wide transition ${
                  active ? 'bg-accent2/80 text-accent-ink' : 'text-mute'
                }`}
              >
                {s.label}
                {count > 0 && <span className="ml-1 opacity-70">{count}</span>}
              </button>
            );
          })}
        </div>
      </header>

      <div className="px-5 pt-3 space-y-3 stagger">
        {items.map((item) => {
          const f = findById(item.fragranceId);
          if (!f) return null;
          return (
            <div
              key={item.id}
              onClick={() => push({ type: 'fragrance', id: f.id })}
              className="rounded-[18px] p-px bg-gradient-to-b from-white/[0.09] to-transparent cursor-pointer active:scale-[0.99] transition"
            >
              <div className="rounded-[17px] bg-card p-4 flex items-center gap-4">
                <Bottle fragrance={f} size={42} />
                <div className="min-w-0 flex-1">
                  <div className="font-display font-medium text-[15px] text-ink truncate">
                    {f.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-mute mt-0.5">
                    {f.brand} · {f.concentration}
                  </div>
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    {item.rating !== undefined && (
                      <span className="font-display font-medium text-[13px] text-sage">
                        {item.rating}
                        <span className="text-mute font-medium text-[10px]">/10</span>
                      </span>
                    )}
                    {item.decisionTag && (
                      <Chip small tone={negative(item.decisionTag) ? 'warn' : 'sage'}>
                        {item.decisionTag}
                      </Chip>
                    )}
                  </div>
                </div>
                <ChevronRightIcon size={16} className="text-mute shrink-0" />
              </div>
            </div>
          );
        })}

        {items.length === 0 && (
          <div className="text-center pt-16">
            <SectionLabel>Nothing here yet</SectionLabel>
            <p className="mt-3 text-[13px] text-mute leading-relaxed max-w-[270px] mx-auto">
              {EMPTY_STATES[segment].copy}
            </p>
            {EMPTY_STATES[segment].cta && (
              <button
                onClick={() =>
                  EMPTY_STATES[segment].cta!.action === 'foryou'
                    ? setTab('foryou')
                    : setSegment('wishlist')
                }
                className="mt-5 rounded-[13px] bg-white/[0.05] border border-white/[0.08] text-sage font-display font-medium text-[13px] px-5 py-3 active:scale-95 transition"
              >
                {EMPTY_STATES[segment].cta!.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function negative(tag: string) {
  return ['Would not buy again', 'Not for me', 'Overhyped', 'Sold / decluttered'].includes(tag);
}
