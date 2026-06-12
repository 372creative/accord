import React from 'react';

export function TraitBars({ traits }: { traits: { label: string; value: number }[] }) {
  return (
    <div className="space-y-3">
      {traits.map((t, i) => (
        <div key={t.label} className="flex items-center gap-3">
          <div className="w-[86px] shrink-0 text-[12px] text-ink2 font-medium">{t.label}</div>
          <div className="flex-1 h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent2 to-sage/80 bar-grow"
              style={{
                width: `${Math.max(4, (t.value / 10) * 100)}%`,
                animationDelay: `${0.35 + i * 0.12}s`,
              }}
            />
          </div>
          <div className="w-7 text-right text-[11px] text-mute tabular-nums">
            {t.value.toFixed(0)}
          </div>
        </div>
      ))}
    </div>
  );
}
