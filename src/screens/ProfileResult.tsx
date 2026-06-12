import React from 'react';
import { useApp } from '../state/app';
import { GlowCard, PrimaryButton, SectionLabel, Chip, Divider } from '../components/ui';
import { SparkleIcon } from '../components/icons';

export function ProfileResult() {
  const { profile, setStage } = useApp();
  if (!profile) return null;

  return (
    <div className="min-h-dvh flex flex-col px-6 pt-14 pb-10 relative overflow-hidden stagger">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-accent2/20 blur-[100px] pointer-events-none" />

      <div>
        <div className="flex items-center gap-2 text-sage">
          <SparkleIcon size={16} />
          <SectionLabel className="!text-sage">Profile generated</SectionLabel>
        </div>
        <h1 className="mt-3 font-display font-medium text-[30px] leading-tight text-ink">
          Your scent profile
        </h1>
      </div>

      <GlowCard glow className="mt-7">
        <div className="p-6">
          <p className="text-[14px] leading-[1.7] text-ink2">“{profile.summary}”</p>

          <Divider className="my-5" />

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

          <Divider className="my-5" />

          <div className="flex items-center justify-between">
            <div>
              <SectionLabel>Profile strength</SectionLabel>
              <p className="mt-1 text-[11px] text-mute">Grows as you rate and react</p>
            </div>
            <div className="font-display font-medium text-[23px] text-sage">
              {profile.strength}%
            </div>
          </div>
          <div className="mt-2 h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent2 to-sage"
              style={{ width: `${profile.strength}%` }}
            />
          </div>
        </div>
      </GlowCard>

      <div className="flex-1" />
      <PrimaryButton onClick={() => setStage('app')} className="w-full mt-8">
        View recommendations
      </PrimaryButton>
    </div>
  );
}
