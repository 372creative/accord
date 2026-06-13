import React, { useState } from 'react';
import { useApp } from '../state/app';
import {
  Chip,
  ChipGroup,
  HeaderBackdrop,
  IconButton,
  PrimaryButton,
  SectionLabel,
} from '../components/ui';
import { UserMenu } from '../components/UserMenu';
import { SlidersIcon, XIcon } from '../components/icons';
import { CompactRecCard, RecommendationCard } from '../components/RecommendationCard';
import { GOALS } from '../data/options';

export function ForYou() {
  const { profile, buckets, refineProfile, answers, setAnswers } = useApp();
  const [showFilters, setShowFilters] = useState(false);

  const tasteLine =
    profile && profile.dominant.length
      ? profile.dominant.slice(0, 3).join(' · ')
      : 'Still learning your taste';

  return (
    <div className="pb-32">
      {/* header */}
      <header className="sticky top-0 z-30 px-5 pt-5 pb-3 flex items-center justify-between">
        <HeaderBackdrop />
        <UserMenu />
        <h1 className="font-display font-medium text-[13px] uppercase tracking-[0.22em] text-ink">
          For You
        </h1>
        <IconButton onClick={() => setShowFilters(true)}>
          <SlidersIcon size={18} />
        </IconButton>
      </header>

      <div className="px-5 space-y-7 pt-2 stagger">
        {/* profile summary */}
        <div className="rounded-[18px] p-px bg-gradient-to-b from-white/[0.1] to-transparent">
          <div className="rounded-[17px] bg-card px-5 py-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <SectionLabel accent>Your profile</SectionLabel>
              <p className="mt-1.5 text-[13px] text-ink2 truncate">{tasteLine}</p>
            </div>
            <button
              onClick={refineProfile}
              className="shrink-0 rounded-[12px] bg-white/[0.06] border border-white/[0.08] text-sage font-display font-medium text-[12px] px-4 py-2 active:scale-95 transition"
            >
              Refine
            </button>
          </div>
        </div>

        {/* buckets */}
        {buckets.map((bucket, bi) =>
          bucket.layout === 'large' ? (
            <section key={bucket.id}>
              <SectionLabel accent>{bucket.title}</SectionLabel>
              <p className="mt-1 text-[12px] text-mute">{bucket.subtitle}</p>
              <div className="mt-4 space-y-5 stagger">
                {bucket.recs.map((r) => (
                  <RecommendationCard key={r.fragranceId} rec={r} />
                ))}
              </div>
            </section>
          ) : (
            <section key={bucket.id}>
              <SectionLabel accent>{bucket.title}</SectionLabel>
              <p className="mt-1 text-[12px] text-mute">{bucket.subtitle}</p>
              <div className="mt-4 -mx-5 px-5 flex gap-3 overflow-x-auto no-scrollbar stagger">
                {bucket.recs.map((r) => (
                  <CompactRecCard key={`${bucket.id}-${r.fragranceId}`} rec={r} />
                ))}
              </div>
            </section>
          )
        )}

        {buckets.length === 0 && (
          <p className="text-center text-mute text-[13px] pt-10">
            Complete onboarding to unlock recommendations.
          </p>
        )}
      </div>

      {/* goals filter sheet */}
      {showFilters && (
        <div className="fixed inset-0 z-50 mx-auto max-w-[430px] flex items-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          />
          <div className="relative w-full rounded-t-[28px] bg-card2 border-t border-white/[0.1] p-6 pb-9 sheet-up">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-medium text-[18px] text-ink">Tune your feed</h3>
              <button onClick={() => setShowFilters(false)} className="text-mute p-1">
                <XIcon size={18} />
              </button>
            </div>
            <p className="mt-2 text-[13px] text-mute">
              Your current goals shape which sections appear.
            </p>
            <div className="mt-5 max-h-[300px] overflow-y-auto no-scrollbar">
              <ChipGroup
                options={GOALS}
                selected={answers.currentGoals}
                onToggle={(g) =>
                  setAnswers((a) => ({
                    ...a,
                    currentGoals: a.currentGoals.includes(g)
                      ? a.currentGoals.filter((x) => x !== g)
                      : [...a.currentGoals, g],
                  }))
                }
              />
            </div>
            <PrimaryButton onClick={() => setShowFilters(false)} className="w-full mt-6">
              Apply
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
