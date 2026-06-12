import React from 'react';

export function RatingControl({
  value,
  onChange,
}: {
  value?: number;
  onChange: (v: number) => void;
}) {
  const v = value ?? 5;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[12px] text-mute">Your rating</span>
        <span className="font-display font-medium text-[20px] text-ink">
          {v.toFixed(v % 1 ? 1 : 0)}
          <span className="text-[13px] text-mute font-medium"> / 10</span>
        </span>
      </div>
      <input
        type="range"
        min={1}
        max={10}
        step={0.5}
        value={v}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="rating"
        style={{ ['--fill' as never]: `${((v - 1) / 9) * 100}%` }}
      />
    </div>
  );
}
