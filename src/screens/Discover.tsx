import React from 'react';
import { useApp } from '../state/app';
import { CURATED_LISTS } from '../data/lists';
import { byId } from '../data/fragrances';
import { Bottle } from '../components/Bottle';
import { HeaderBackdrop, SectionLabel } from '../components/ui';
import { UserMenu } from '../components/UserMenu';

/** Mood palette per list — an evocative two-tone gradient used as the hero image. */
const LIST_MOODS: Record<string, [string, string]> = {
  'salty-summer': ['#3f93bf', '#10455f'],
  'tobacco-dry': ['#9a6a3a', '#3a2412'],
  'vetiver-grown': ['#5f8050', '#243520'],
  'office-safe': ['#4a6884', '#1d2c3c'],
  'dry-citrus': ['#b8a544', '#574a16'],
  'niche-value': ['#6f5b93', '#2c2440'],
  'me-gems': ['#b88f42', '#473214'],
  'fresh-not-basic': ['#4fa6a4', '#1c5250'],
  'clones-worth': ['#5f7180', '#252f38'],
  'date-night': ['#9c5750', '#3c1f1d'],
};
const DEFAULT_MOOD: [string, string] = ['#5b6b6a', '#23302f'];

function moodBackground([a, b]: [string, string]): string {
  // layered radial glows over a dark base — reads as an atmospheric image
  return `radial-gradient(120% 120% at 18% 12%, ${a}cc 0%, ${a}33 38%, transparent 68%), radial-gradient(120% 130% at 92% 96%, ${b}dd 0%, ${b}44 45%, transparent 75%), linear-gradient(135deg, ${b} 0%, #0e1117 95%)`;
}

export function Discover() {
  const { push } = useApp();

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
        <SectionLabel accent>Curated for your taste</SectionLabel>
        <p className="mt-1 text-[12px] text-mute">
          Hand-built lists, matched to how you wear fragrance.
        </p>

        <div className="mt-5 space-y-4 stagger">
          {CURATED_LISTS.map((list) => {
            const mood = LIST_MOODS[list.id] ?? DEFAULT_MOOD;
            return (
              <div
                key={list.id}
                onClick={() => push({ type: 'list', id: list.id })}
                className="rounded-[20px] p-px bg-gradient-to-b from-white/[0.1] to-transparent cursor-pointer active:scale-[0.99] transition"
              >
                <div className="rounded-[19px] bg-card overflow-hidden">
                  {/* emotional mood banner */}
                  <div
                    className="relative h-28 flex items-end px-5 pb-3"
                    style={{ background: moodBackground(mood) }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
                    <div className="relative flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {list.fragranceIds.slice(0, 3).map((fid) => (
                          <div
                            key={fid}
                            className="w-9 h-9 rounded-full bg-elev/80 border border-white/[0.14] backdrop-blur-sm flex items-center justify-center overflow-hidden"
                          >
                            <Bottle fragrance={byId(fid)} size={17} />
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-ink2 font-medium">
                        {list.fragranceIds.length} fragrances
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-4">
                    <h3 className="font-display font-medium text-[17px] text-ink leading-snug">
                      {list.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-mute leading-relaxed">
                      {list.description}
                    </p>
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
