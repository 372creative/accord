import React, { useState } from 'react';
import { Recommendation } from '../types';
import { byId } from '../data/fragrances';
import { useApp } from '../state/app';
import { CARD_FEEDBACK_OPTIONS } from '../data/options';
import { Bottle } from './Bottle';
import { Chip, Divider, GlowCard, MatchBadge } from './ui';
import { CheckIcon, DotsIcon, HeartIcon, InfoIcon } from './icons';

export function RecommendationCard({ rec }: { rec: Recommendation }) {
  const f = byId(rec.fragranceId);
  const { push, itemFor, setStatus, giveFeedback } = useApp();
  const item = itemFor(f.id);
  const onList = item?.status === 'wishlist';
  const known = !!item && item.status !== 'wishlist';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GlowCard glow>
      <div className="p-5 relative">
        {/* lightweight recommendation feedback */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((o) => !o);
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-mute active:scale-95 transition z-10"
        >
          <DotsIcon size={16} />
        </button>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
            <div className="absolute top-12 right-4 z-20 rounded-[14px] bg-elev border border-white/[0.1] shadow-[0_18px_44px_-8px_rgba(0,0,0,0.8)] overflow-hidden min-w-[170px] fade-up">
              {CARD_FEEDBACK_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={(e) => {
                    e.stopPropagation();
                    giveFeedback(f.id, opt);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-[13px] text-ink2 border-b border-line last:border-0 active:bg-white/[0.05]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center gap-4 pr-8" onClick={() => push({ type: 'fragrance', id: f.id })}>
          <div className="shrink-0 -my-1">
            <Bottle fragrance={f} size={62} />
          </div>
          <div className="min-w-0">
            <h3 className="font-display font-medium text-[19px] leading-snug text-ink">
              {f.name}
            </h3>
            <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-mute font-medium">
              {f.brand} · {f.concentration}
            </div>
          </div>
        </div>

        <Divider className="my-4" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2 max-w-[230px]">
            {f.accords.slice(0, 3).map((a) => (
              <Chip key={a} small>
                {a}
              </Chip>
            ))}
          </div>
          <MatchBadge value={rec.match} large />
        </div>

        <p className="mt-4 text-[13px] leading-relaxed text-ink2">{rec.whyItFits}</p>
        {rec.caution && (
          <p className="mt-2 text-[12px] leading-relaxed text-[#c8a48b] flex gap-1.5">
            <InfoIcon size={14} className="mt-0.5 shrink-0" />
            <span>{rec.caution}</span>
          </p>
        )}
        <Divider className="my-4" />

        <div className="flex gap-3">
          <button
            onClick={() => push({ type: 'fragrance', id: f.id })}
            className="flex-1 rounded-[13px] bg-white/[0.05] border border-white/[0.07] text-ink2 font-display font-medium text-[14px] py-3 active:scale-[0.98] transition"
          >
            More info
          </button>
          {known ? (
            <div className="flex-[1.4] rounded-[13px] bg-sage/10 text-sage/80 font-display font-medium text-[14px] py-3 border border-sage/15 flex items-center justify-center gap-2">
              <CheckIcon size={16} />
              In your collection
            </div>
          ) : (
            <button
              onClick={() => setStatus(f.id, onList ? null : 'wishlist')}
              className={`flex-[1.4] rounded-[13px] font-display font-semibold text-[14px] py-3 border active:scale-[0.98] transition flex items-center justify-center gap-2 ${
                onList
                  ? 'bg-sage/15 text-sage border-sage/20'
                  : 'bg-gradient-to-b from-accent2 to-accent text-accent-ink border-white/10'
              }`}
            >
              {onList ? <CheckIcon size={16} /> : <HeartIcon size={16} />}
              {onList ? 'On try list' : 'Add to try list'}
            </button>
          )}
        </div>
      </div>
    </GlowCard>
  );
}

export function CompactRecCard({ rec }: { rec: Recommendation }) {
  const f = byId(rec.fragranceId);
  const { push } = useApp();
  return (
    <div
      onClick={() => push({ type: 'fragrance', id: f.id })}
      className="w-[240px] shrink-0 rounded-[18px] p-px bg-gradient-to-b from-white/[0.1] to-transparent cursor-pointer active:scale-[0.98] transition"
    >
      <div className="rounded-[17px] bg-card p-4 h-full">
        <div className="flex items-center justify-between">
          <Bottle fragrance={f} size={40} />
          <MatchBadge value={rec.match} />
        </div>
        <div className="mt-3 font-display font-medium text-[15px] text-ink leading-snug">
          {f.name}
        </div>
        <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-mute">
          {f.brand} · {f.concentration}
        </div>
        {rec.shortWhy && (
          <p className="mt-1.5 text-[11px] text-mute truncate">{rec.shortWhy}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {f.accords.slice(0, 2).map((a) => (
            <Chip key={a} small>
              {a}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
