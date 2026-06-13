import React from 'react';
import { Fragrance, FullBottleLink, RetailerRegion, SampleLink } from '../types';
import { useApp } from '../state/app';
import {
  formatPrice,
  getFullBottleLinks,
  getRegionLabel,
  getSampleLinks,
  trackAffiliateClick,
} from '../lib/availability';
import { GlowCard, SectionLabel } from './ui';

const SAMPLE_TYPE_LABEL: Record<SampleLink['type'], string> = {
  sample: 'sample',
  decant: 'decant',
  discovery_set: 'discovery set',
};

export function AvailabilitySection({ fragrance }: { fragrance: Fragrance }) {
  const { answers, refineProfile } = useApp();
  const marketRegion = answers.location?.marketRegion as RetailerRegion | undefined;
  const regionLabel = getRegionLabel(answers);

  const samples = getSampleLinks(fragrance, marketRegion);
  const fullBottles = getFullBottleLinks(fragrance, marketRegion);
  const hasAny = samples.length > 0 || fullBottles.length > 0;

  const click = (
    retailerName: string,
    linkType: string,
    region: string,
    sponsored?: boolean
  ) =>
    trackAffiliateClick({
      fragranceId: fragrance.id,
      fragranceName: fragrance.name,
      retailerName,
      linkType,
      region,
      marketRegion,
      sponsored,
    });

  return (
    <GlowCard>
      <div className="p-5">
        <SectionLabel>Where to sample or buy</SectionLabel>
        <p className="mt-2 text-[12px] leading-relaxed text-mute">
          Options shown for your region. Accord keeps match scores independent from retailer
          availability.
        </p>

        {/* region context */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[12px] text-ink2">
            {regionLabel ? (
              <>
                Showing options for: <span className="text-ink font-medium">{regionLabel}</span>
              </>
            ) : (
              'No location set'
            )}
          </span>
          <button onClick={refineProfile} className="text-[12px] font-display font-medium text-sage shrink-0">
            {regionLabel ? 'Change location' : 'Set location'}
          </button>
        </div>

        {/* no location */}
        {!marketRegion && (
          <div className="mt-4 rounded-[14px] bg-bg2 border border-white/[0.07] p-4 text-center">
            <p className="text-[13px] text-mute leading-relaxed">
              Set your location to see sample and retailer options near you.
            </p>
            <button
              onClick={refineProfile}
              className="mt-3 rounded-[13px] bg-white/[0.05] border border-white/[0.08] text-sage font-display font-medium text-[13px] px-5 py-2.5 active:scale-95 transition"
            >
              Set location
            </button>
          </div>
        )}

        {/* empty for region */}
        {marketRegion && !hasAny && (
          <p className="mt-4 text-[13px] leading-relaxed text-mute">
            {regionLabel
              ? `Sample and retailer options for ${regionLabel} are coming soon.`
              : 'Sample and retailer options are not available for your region yet.'}
          </p>
        )}

        {/* samples & decants */}
        {samples.length > 0 && (
          <div className="mt-5">
            <SectionLabel className="!text-mute">Samples & decants</SectionLabel>
            <div className="mt-3 space-y-2.5">
              {samples.map((s) => (
                <LinkRow
                  key={s.id}
                  retailer={s.retailerName}
                  meta={`${s.size ?? ''} ${SAMPLE_TYPE_LABEL[s.type]}${
                    s.price !== undefined ? ` · ${formatPrice(s.price, s.currency)}` : ''
                  }`}
                  inStock={s.inStock}
                  sponsored={s.sponsored}
                  cta="Find sample"
                  onClick={() => click(s.retailerName, s.type, s.region, s.sponsored)}
                />
              ))}
            </div>
          </div>
        )}

        {/* full bottles */}
        {fullBottles.length > 0 && (
          <div className="mt-5">
            <SectionLabel className="!text-mute">Full bottles</SectionLabel>
            <div className="mt-3 space-y-2.5">
              {fullBottles.map((b) => (
                <LinkRow
                  key={b.id}
                  retailer={b.retailerName}
                  meta={`${b.size ?? ''} bottle${
                    b.price !== undefined ? ` · ${formatPrice(b.price, b.currency)}` : ''
                  }`}
                  inStock={b.inStock}
                  sponsored={b.sponsored}
                  cta="View retailer"
                  onClick={() => click(b.retailerName, b.type, b.region, b.sponsored)}
                />
              ))}
            </div>
          </div>
        )}

        {/* affiliate disclosure — once per section */}
        {hasAny && (
          <p className="mt-5 text-[11px] leading-relaxed text-mute/80">
            Some retailer links may be affiliate links. Accord keeps fragrance match scores
            independent from retailer availability.
          </p>
        )}
      </div>
    </GlowCard>
  );
}

function LinkRow({
  retailer,
  meta,
  inStock,
  sponsored,
  cta,
  onClick,
}: {
  retailer: string;
  meta: string;
  inStock?: boolean;
  sponsored?: boolean;
  cta: string;
  onClick: () => void;
}) {
  const outOfStock = inStock === false;
  return (
    <div className="rounded-[14px] bg-bg2 border border-white/[0.07] px-4 py-3 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-medium text-ink truncate">{retailer}</span>
          {sponsored && (
            <span className="text-[9px] uppercase tracking-[0.14em] text-mute border border-white/[0.12] rounded px-1.5 py-0.5 shrink-0">
              Sponsored
            </span>
          )}
        </div>
        <div className="text-[11px] text-mute mt-0.5">
          {meta} · {outOfStock ? 'Out of stock' : 'In stock'}
        </div>
      </div>
      <button
        onClick={onClick}
        disabled={outOfStock}
        className={`shrink-0 rounded-[11px] px-3.5 py-2 text-[12px] font-display font-medium border transition active:scale-95 ${
          outOfStock
            ? 'opacity-40 pointer-events-none border-white/[0.07] text-mute'
            : 'bg-white/[0.05] border-white/[0.08] text-sage'
        }`}
      >
        {outOfStock ? 'Unavailable' : cta}
      </button>
    </div>
  );
}
