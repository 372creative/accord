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
import { AGE_RANGES, GENDERS } from '../data/options';
import { CLIMATE_LABELS } from '../data/geo';

export function ProfileTab() {
  const { profile, answers, refineProfile } = useApp();
  if (!profile) return null;

  const loc = answers.location;
  const prefRows: { label: string; value: string }[] = [
    { label: 'Gender', value: GENDERS.find((g) => g.id === answers.gender)?.label ?? '—' },
    { label: 'Age range', value: AGE_RANGES.find((a) => a.id === answers.ageRange)?.label ?? '—' },
    {
      label: 'Location',
      value: loc?.country ? `${loc.city ? loc.city + ', ' : ''}${loc.country}` : '—',
    },
    { label: 'Climate', value: CLIMATE_LABELS[loc?.climateRegion ?? 'unknown'] },
    {
      label: 'Market',
      value: loc?.marketRegion ? `${loc.marketRegion}${loc.currency ? ` · ${loc.currency}` : ''}` : '—',
    },
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
            <SectionLabel>Taste signals</SectionLabel>
            <div className="mt-4">
              <TraitBars traits={profile.traits} />
            </div>
            {/* "Depends on situation" projection shows as flexible, not loud */}
          </div>
        </GlowCard>

        <GlowCard>
          <div className="p-5">
            {profile.loves.length > 0 && (
              <>
                <SectionLabel>You tend to love</SectionLabel>
                <div className="mt-3 mb-5 flex flex-wrap gap-2">
                  {profile.loves.map((d) => (
                    <Chip key={d} small tone="sage">
                      {d}
                    </Chip>
                  ))}
                </div>
              </>
            )}
            {profile.enjoys.length > 0 && (
              <>
                <SectionLabel>You enjoy</SectionLabel>
                <div className="mt-3 mb-5 flex flex-wrap gap-2">
                  {profile.enjoys.map((d) => (
                    <Chip key={d} small>
                      {d}
                    </Chip>
                  ))}
                </div>
              </>
            )}
            {profile.loves.length === 0 && profile.enjoys.length === 0 && (
              <>
                <SectionLabel>Dominant preferences</SectionLabel>
                <div className="mt-3 mb-5 flex flex-wrap gap-2">
                  {profile.dominant.map((d) => (
                    <Chip key={d} small tone="sage">
                      {d}
                    </Chip>
                  ))}
                </div>
              </>
            )}
            {profile.dependsOn.length > 0 && (
              <>
                <SectionLabel>Depends</SectionLabel>
                <div className="mt-3 mb-5 space-y-2">
                  {profile.dependsOn.map((d) => (
                    <p key={d.name} className="text-[12px] leading-relaxed text-ink2">
                      <span className="text-ink font-medium">{d.name}:</span>{' '}
                      {d.works.length > 0
                        ? `works when ${d.works.slice(0, 3).join(', ').toLowerCase()}`
                        : 'depends on the style'}
                      {d.avoid.length > 0 && (
                        <span className="text-[#c8a48b]">
                          {' '}
                          · avoid {d.avoid.slice(0, 2).join(', ').toLowerCase()}
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </>
            )}
            <SectionLabel>Usually avoids</SectionLabel>
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
            <div className="flex items-center justify-between">
              <SectionLabel>Context</SectionLabel>
              <button onClick={refineProfile} className="text-[12px] font-display font-medium text-sage">
                Edit context
              </button>
            </div>
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
