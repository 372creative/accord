import React from 'react';
import { useApp } from '../state/app';
import { CURATED_LISTS } from '../data/lists';
import { byId } from '../data/fragrances';
import { listOverlap } from '../lib/recommendations';
import { Bottle } from '../components/Bottle';
import { HeaderBackdrop, SectionLabel } from '../components/ui';
import { UserMenu } from '../components/UserMenu';

export function Discover() {
  const { answers, push } = useApp();

  return (
    <div className="pb-32">
      <header className="sticky top-0 z-30 px-5 pt-5 pb-3">
        <HeaderBackdrop />
        <div className="flex items-center justify-between">
          <UserMenu />
          <h1 className="font-display font-medium text-[13px] uppercase tracking-[0.22em] text-ink">
            Discover
          </h1>
          <div className="w-[38px]" />
        </div>
      </header>

      <div className="px-5 pt-2 stagger">
        <SectionLabel>Curated for your taste</SectionLabel>
        <p className="mt-1 text-[12px] text-mute">
          Hand-built lists, ranked by overlap with your profile.
        </p>

        <div className="mt-5 space-y-4 stagger">
          {CURATED_LISTS.map((list) => {
            const overlap = listOverlap(list, answers);
            return (
              <div
                key={list.id}
                onClick={() => push({ type: 'list', id: list.id })}
                className="rounded-[20px] p-px bg-gradient-to-b from-white/[0.1] to-transparent cursor-pointer active:scale-[0.99] transition"
              >
                <div className="rounded-[19px] bg-card p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display font-medium text-[17px] text-ink leading-snug">
                        {list.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] text-mute leading-relaxed">
                        {list.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-medium text-[16px] text-sage">{overlap}%</div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-mute">
                        overlap
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* preview bottles */}
                      <div className="flex -space-x-2">
                        {list.fragranceIds.slice(0, 3).map((fid) => (
                          <div
                            key={fid}
                            className="w-9 h-9 rounded-full bg-elev border border-white/[0.1] flex items-center justify-center overflow-hidden"
                          >
                            <Bottle fragrance={byId(fid)} size={17} />
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-mute">
                        {list.fragranceIds.length} fragrances
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent2 to-accent border border-white/15 flex items-center justify-center text-[9px] font-display font-semibold text-sage">
                        {list.curator.charAt(0)}
                      </div>
                      <span className="text-[11px] text-mute">{list.curator}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
