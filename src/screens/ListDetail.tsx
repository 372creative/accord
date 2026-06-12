import React from 'react';
import { useApp } from '../state/app';
import { listById } from '../data/lists';
import { listOverlap, matchFor, overlapLabel } from '../lib/recommendations';
import { RecommendationCard } from '../components/RecommendationCard';
import { Chip, SectionLabel } from '../components/ui';
import { ChevronLeftIcon } from '../components/icons';

export function ListDetail({ id }: { id: string }) {
  const { pop, answers, collection } = useApp();
  const list = listById(id);
  if (!list) return null;
  const overlap = listOverlap(list, answers);

  return (
    <div className="fixed inset-0 z-40 mx-auto max-w-[430px] bg-bg overflow-y-auto no-scrollbar">
      {/* direct child of the scroller so it stays pinned for the whole page */}
      <header className="sticky top-0 z-30 px-5 pt-5">
        <button
          onClick={pop}
          className="w-10 h-10 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-ink2"
        >
          <ChevronLeftIcon size={18} />
        </button>
      </header>
      <div className="relative overflow-hidden -mt-[60px]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] h-[300px] rounded-full bg-accent2/25 blur-[90px] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-bg pointer-events-none" />
        <div className="px-6 pt-[84px] pb-7 relative">
          <SectionLabel>Curated list · {list.curator}</SectionLabel>
          <h1 className="mt-2 font-display font-medium text-[27px] leading-tight text-ink">
            {list.title}
          </h1>
          <p className="mt-2.5 text-[14px] text-mute leading-relaxed">{list.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <Chip small tone="sage">
              {overlap}% overlap · {overlapLabel(overlap)}
            </Chip>
            <span className="text-[12px] text-mute">{list.fragranceIds.length} fragrances</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-24 space-y-5 stagger">
        {list.fragranceIds.map((fid) => (
          <RecommendationCard key={fid} rec={matchFor(fid, answers, collection)} />
        ))}
      </div>
    </div>
  );
}
