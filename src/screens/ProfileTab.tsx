import React from 'react';
import { useApp } from '../state/app';
import {
  Chip,
  Divider,
  GhostButton,
  GlowCard,
  HeaderBackdrop,
  SectionLabel,
} from '../components/ui';
import { TraitBars } from '../components/TraitBars';
import { UserMenu } from '../components/UserMenu';

export function ProfileTab() {
  const { profile, answers, refineProfile } = useApp();
  if (!profile) return null;

  const prefRows: { label: string; value: string }[] = [
    { label: 'Budget', value: answers.budgetRange ?? '—' },
    { label: 'Clones', value: answers.openToClones ?? '—' },
    { label: 'Projection', value: answers.projection ?? '—' },
    { label: 'Experience', value: answers.experienceLevel ?? '—' },
  ];

  return (
    <div className="pb-32">
      <header className="sticky top-0 z-30 px-5 pt-5 pb-3">
        <HeaderBackdrop />
        <div className="flex items-center justify-between">
          <UserMenu />
          <h1 className="font-display font-medium text-[13px] uppercase tracking-[0.22em] text-ink">
            Profile
          </h1>
          <div className="w-[38px]" />
        </div>
      </header>

      <div className="px-5 pt-2 space-y-5 stagger">
        <div>
          <div className="font-display font-medium text-[18px] text-ink">Your taste</div>
          <div className="text-[12px] text-mute mt-0.5">
            Profile strength {profile.strength}%
          </div>
        </div>
        <div className="h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent2 to-sage"
            style={{ width: `${profile.strength}%` }}
          />
        </div>

        <GlowCard>
          <div className="p-5">
            <SectionLabel>Taste summary</SectionLabel>
            <p className="mt-3 text-[14px] leading-[1.7] text-ink2">“{profile.summary}”</p>
          </div>
        </GlowCard>

        <GlowCard>
          <div className="p-5">
            <SectionLabel>Trait map</SectionLabel>
            <div className="mt-4">
              <TraitBars traits={profile.traits} />
            </div>
          </div>
        </GlowCard>

        <GlowCard>
          <div className="p-5">
            <SectionLabel>Dominant preferences</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.dominant.map((d) => (
                <Chip key={d} small tone="sage">
                  {d}
                </Chip>
              ))}
            </div>
            <SectionLabel className="mt-5">Usually avoids</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.avoids.map((d) => (
                <Chip key={d} small tone="warn">
                  {d}
                </Chip>
              ))}
            </div>
            <SectionLabel className="mt-5">Best directions</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.bestDirections.map((d) => (
                <Chip key={d} small>
                  {d}
                </Chip>
              ))}
            </div>
            <SectionLabel className="mt-5">Risk zones</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.riskZones.map((d) => (
                <Chip key={d} small tone="warn">
                  {d}
                </Chip>
              ))}
            </div>
          </div>
        </GlowCard>

        <GlowCard>
          <div className="p-5">
            <SectionLabel>Preferences</SectionLabel>
            <div className="mt-2">
              {prefRows.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[13px] text-mute">{r.label}</span>
                    <span className="text-[13px] text-ink2 font-medium text-right max-w-[200px]">
                      {r.value}
                    </span>
                  </div>
                  <Divider />
                </div>
              ))}
              <div className="pt-3">
                <span className="text-[13px] text-mute">Current goals</span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {answers.currentGoals.length ? (
                    answers.currentGoals.map((g) => (
                      <Chip key={g} small>
                        {g}
                      </Chip>
                    ))
                  ) : (
                    <span className="text-[13px] text-ink2">—</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>

        <GhostButton onClick={refineProfile} className="w-full">
          Refine my profile
        </GhostButton>
        <p className="text-center text-[11px] text-mute pb-2">
          Re-running onboarding keeps your collection and ratings.
        </p>
      </div>
    </div>
  );
}
