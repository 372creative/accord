import React, { useState } from 'react';
import { Fragrance } from '../types';

/** Image files confirmed missing this session, so repeat renders skip the 404. */
const missingImages = new Set<string>();

/**
 * Real product shot from /public/fragrances when available; falls back to the
 * SVG placeholder bottle (gradient from the fragrance's colours) when the
 * image file is missing or fails to load.
 */
export function Bottle({ fragrance, size = 72 }: { fragrance: Fragrance; size?: number }) {
  const [broken, setBroken] = useState(false);
  const useImage = fragrance.image && !broken && !missingImages.has(fragrance.image);
  if (useImage) {
    return (
      <img
        src={import.meta.env.BASE_URL.replace(/\/$/, '') + fragrance.image}
        alt={fragrance.name}
        style={{ width: size, height: size * 1.3 }}
        className="object-contain"
        onError={() => {
          missingImages.add(fragrance.image!);
          setBroken(true);
        }}
      />
    );
  }
  const [light, dark] = fragrance.colors;
  const gid = `g-${fragrance.id}`;
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 80 104"
      style={{ filter: `drop-shadow(0 10px 18px rgba(0,0,0,0.55)) drop-shadow(0 0 22px ${light}26)` }}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`${gid}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a3f47" />
          <stop offset="50%" stopColor="#1a1d22" />
          <stop offset="100%" stopColor="#2e333b" />
        </linearGradient>
      </defs>
      {/* cap */}
      <rect x="29" y="2" width="22" height="17" rx="4" fill={`url(#${gid}-cap)`} />
      <rect x="33" y="2" width="3" height="17" rx="1.5" fill="rgba(255,255,255,0.18)" />
      {/* neck */}
      <rect x="33" y="18" width="14" height="6" fill="#15181d" />
      {/* body */}
      <rect x="10" y="24" width="60" height="78" rx="11" fill={`url(#${gid})`} />
      {/* glass highlight */}
      <rect x="16" y="30" width="7" height="64" rx="3.5" fill="rgba(255,255,255,0.22)" />
      <rect x="60" y="32" width="3" height="60" rx="1.5" fill="rgba(0,0,0,0.18)" />
      {/* label */}
      <rect x="22" y="54" width="36" height="22" rx="3" fill="rgba(10,12,15,0.35)" />
      <text
        x="40"
        y="64"
        textAnchor="middle"
        fontFamily="Sora, sans-serif"
        fontSize="6.5"
        fontWeight="600"
        letterSpacing="1.5"
        fill="rgba(244,241,234,0.9)"
      >
        {fragrance.brand.split(' ')[0].toUpperCase().slice(0, 9)}
      </text>
      <text
        x="40"
        y="72"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="4.6"
        letterSpacing="0.8"
        fill="rgba(244,241,234,0.6)"
      >
        {fragrance.name.toUpperCase().slice(0, 16)}
      </text>
    </svg>
  );
}
