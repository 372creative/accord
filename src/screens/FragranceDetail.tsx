import React, { useState } from 'react';
import { useApp } from '../state/app';
import { byId } from '../data/fragrances';
import { CURATED_LISTS } from '../data/lists';
import { GOAL_FILTERS, listsForFragrance, matchFor, similarFragrances } from '../lib/recommendations';
import { DECISION_TAGS, DISLIKE_CHIPS, LOVE_CHIPS } from '../data/options';
import { Bottle } from '../components/Bottle';
import {
  Chip,
  ChipGroup,
  Divider,
  GhostButton,
  GlowCard,
  MatchBadge,
  PrimaryButton,
  SectionLabel,
} from '../components/ui';
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, HeartIcon, InfoIcon } from '../components/icons';
import { RatingControl } from '../components/RatingControl';

export function FragranceDetail({ id }: { id: string }) {
  const { pop, push, answers, collection, itemFor, setStatus, updateItem } = useApp();
  const f = byId(id);
  const item = itemFor(id);
  const owned = item && (item.status === 'own' || item.status === 'sampled' || item.status === 'sold');
  const rec = matchFor(id, answers, collection);
  const similar = similarFragrances(id);
  const relatedLists = listsForFragrance(id, CURATED_LISTS);

  const [editing, setEditing] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  const matchedGoals = answers.currentGoals.filter(
    (g) =>
      GOAL_FILTERS[g]?.(f) &&
      !rec.signals.some((s) => s.toLowerCase().includes(g.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-40 mx-auto max-w-[430px] bg-bg overflow-y-auto no-scrollbar">
      {/* direct child of the scroller so it stays pinned for the whole page */}
      <header className="sticky top-0 z-30 px-5 pt-5">
        {/* status chip lives in the hero (not here) so it can never overlap content */}
        <button
          onClick={pop}
          className="w-10 h-10 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-ink2"
        >
          <ChevronLeftIcon size={18} />
        </button>
      </header>
      <div className="relative overflow-hidden pb-6 -mt-[60px]">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full blur-[100px] opacity-30 pointer-events-none"
          style={{ background: f.colors[0] }}
        />
        {/* dissolve the clipped glow into the page background — no hard edge */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-bg pointer-events-none" />

        <div className="px-6 pt-[84px] flex items-end gap-5 relative">
          <Bottle fragrance={f} size={96} />
          <div className="pb-1 min-w-0">
            <div className="text-[11px] uppercase tracking-[0.2em] text-mute font-medium">
              {f.brand} · {f.concentration}
            </div>
            <h1 className="mt-1.5 font-display font-medium text-[26px] leading-tight text-ink">
              {f.name}
            </h1>
            <div className="mt-2 text-[12px] text-mute flex items-center gap-2 flex-wrap">
              <span>{f.priceLabel} full bottle</span>
              {item && (
                <Chip small tone="sage">
                  {item.status === 'wishlist' ? 'On try list' : statusLabel(item.status)}
                </Chip>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5 pb-16">
        {/* match + accords */}
        <GlowCard glow>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {f.accords.map((a) => (
                  <Chip key={a} small>
                    {a}
                  </Chip>
                ))}
              </div>
              <button onClick={() => setWhyOpen(true)} className="active:scale-95 transition">
                <MatchBadge value={rec.match} large />
                <div className="mt-1 text-[10px] text-sage font-medium text-right">
                  Why this match?
                </div>
              </button>
            </div>
            <Divider className="my-4" />
            <SectionLabel>Why it fits</SectionLabel>
            <p className="mt-2 text-[13px] leading-relaxed text-ink2">{rec.whyItFits}</p>
            {rec.caution && (
              <>
                <SectionLabel className="mt-4">Consider this</SectionLabel>
                <p className="mt-2 text-[13px] leading-relaxed text-[#c8a48b] flex gap-1.5">
                  <InfoIcon size={14} className="mt-0.5 shrink-0" />
                  <span>{rec.caution}</span>
                </p>
              </>
            )}
            {rec.signals.length > 0 && (
              <p className="mt-3 text-[11px] text-mute">Based on: {rec.signals.join(' · ')}</p>
            )}
          </div>
        </GlowCard>

        {/* owned: your take */}
        {owned && item && (
          <GlowCard>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <SectionLabel>Your take</SectionLabel>
                {!editing && (
                  <button
                    onClick={() => setEditing(true)}
                    className="text-[12px] font-display font-medium text-sage"
                  >
                    Edit
                  </button>
                )}
              </div>

              {!editing ? (
                <div className="mt-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-medium text-[22px] text-ink">
                      {item.rating?.toFixed(item.rating % 1 ? 1 : 0) ?? '—'}
                      <span className="text-[13px] text-mute font-medium"> / 10</span>
                    </span>
                    {item.decisionTag && <Chip small tone="sage">{item.decisionTag}</Chip>}
                  </div>
                  {item.likedChips.length > 0 && (
                    <p className="mt-3 text-[12px] text-ink2">
                      <span className="text-mute">Liked: </span>
                      {item.likedChips.join(', ')}
                    </p>
                  )}
                  {item.dislikedChips.length > 0 && (
                    <p className="mt-1.5 text-[12px] text-ink2">
                      <span className="text-mute">Didn't work: </span>
                      {item.dislikedChips.join(', ')}
                    </p>
                  )}
                  {item.personalNote && (
                    <p className="mt-3 text-[13px] italic text-ink2">“{item.personalNote}”</p>
                  )}
                  <Divider className="my-4" />
                  <p className="text-[11px] leading-relaxed text-mute">
                    {recommendationEffect(item.decisionTag, item.dislikedChips)}
                  </p>
                </div>
              ) : (
                <TakeEditor
                  rating={item.rating}
                  decisionTag={item.decisionTag}
                  likedChips={item.likedChips}
                  dislikedChips={item.dislikedChips}
                  personalNote={item.personalNote}
                  onSave={(patch) => {
                    updateItem(id, patch);
                    setEditing(false);
                  }}
                  onMoveToSold={() => {
                    updateItem(id, { decisionTag: 'Sold / decluttered' });
                    setStatus(id, 'sold');
                    setEditing(false);
                  }}
                />
              )}
            </div>
          </GlowCard>
        )}

        {/* factual notes, separate from Accord's interpretation */}
        <GlowCard>
          <div className="p-5">
            <SectionLabel>Notes</SectionLabel>
            <div className="mt-3 space-y-3">
              {(
                [
                  ['Top', f.topNotes],
                  ['Heart', f.heartNotes],
                  ['Base', f.baseNotes],
                ] as const
              ).map(
                ([label, notes]) =>
                  notes.length > 0 && (
                    <div key={label} className="flex gap-3">
                      <span className="w-11 shrink-0 text-[11px] text-mute pt-1.5">{label}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {notes.map((n) => (
                          <Chip key={n} small>
                            {n}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>

            <Divider className="my-5" />

            <SectionLabel>Accord reads it as</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...new Set([...f.styleTags.slice(0, 4), ...f.directions.slice(0, 3)])].map((s) => (
                <Chip key={s} small tone="sage">
                  {s}
                </Chip>
              ))}
              <Chip small>{f.seasonTags.slice(0, 2).join(' / ') || 'All year'}</Chip>
            </div>
          </div>
        </GlowCard>

        {/* similar */}
        {similar.length > 0 && (
          <section>
            <SectionLabel className="px-1">Similar fragrances</SectionLabel>
            <div className="mt-3 space-y-2.5">
              {similar.map((s) => (
                <div
                  key={s.id}
                  onClick={() => push({ type: 'fragrance', id: s.id })}
                  className="rounded-2xl bg-card border border-white/[0.07] p-3.5 flex items-center gap-3.5 cursor-pointer active:scale-[0.99] transition"
                >
                  <Bottle fragrance={s} size={32} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-medium text-ink truncate">{s.name}</div>
                    <div className="text-[11px] text-mute">
                      {s.brand} · {s.concentration}
                    </div>
                  </div>
                  <MatchBadge value={matchFor(s.id, answers, collection).match} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* availability — sample-first, future retailer readiness */}
        <GlowCard>
          <div className="p-5">
            <SectionLabel>Where to sample or buy</SectionLabel>
            {f.availability?.retailers?.length ? (
              <div className="mt-3 space-y-2.5">
                {f.availability.retailers.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-[14px] bg-bg2 border border-white/[0.07] px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-[14px] font-medium text-ink truncate">{r.name}</div>
                      <div className="text-[11px] text-mute mt-0.5">
                        {r.priceFrom ? `From ${r.priceFrom} ${r.currency ?? ''} · ` : ''}
                        {r.region}
                        {r.sampleAvailable ? ' · Samples available' : ''}
                      </div>
                    </div>
                    <span className="shrink-0 text-[12px] font-display font-medium text-sage">
                      View retailer
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-[13px] leading-relaxed text-mute">
                {answers.location?.country
                  ? `Sample options will appear here when available in ${
                      answers.location.country
                    }${answers.location.marketRegion ? ` / ${answers.location.marketRegion}` : ''}.`
                  : 'Retailer availability coming soon for your region.'}
              </p>
            )}
          </div>
        </GlowCard>

        {/* related lists */}
        {relatedLists.length > 0 && (
          <section>
            <SectionLabel className="px-1">Appears in</SectionLabel>
            <div className="mt-3 space-y-2.5">
              {relatedLists.map((l) => (
                <div
                  key={l.id}
                  onClick={() => push({ type: 'list', id: l.id })}
                  className="rounded-2xl bg-card border border-white/[0.07] px-4 py-3.5 flex items-center justify-between cursor-pointer active:scale-[0.99] transition"
                >
                  <span className="text-[13px] text-ink2 font-medium">{l.title}</span>
                  <ChevronRightIcon size={15} className="text-mute shrink-0" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* why this match drawer */}
      {whyOpen && (
        <div className="fixed inset-0 z-50 mx-auto max-w-[430px] flex items-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setWhyOpen(false)} />
          <div className="relative w-full rounded-t-[24px] bg-card2 border-t border-white/[0.1] p-6 pb-9 sheet-up">
            <div className="mx-auto w-10 h-1 rounded-full bg-white/[0.12] mb-5" />
            <h3 className="font-display font-medium text-[19px] text-ink">Why {rec.match}%?</h3>
            <div className="mt-4 space-y-2.5">
              {rec.signals.map((s) => (
                <p key={s} className="text-[13px] leading-relaxed text-ink2 flex gap-2">
                  <CheckIcon size={14} className="mt-0.5 shrink-0 text-sage" />
                  <span>{s}</span>
                </p>
              ))}
              {matchedGoals.map((g) => (
                <p key={g} className="text-[13px] leading-relaxed text-ink2 flex gap-2">
                  <CheckIcon size={14} className="mt-0.5 shrink-0 text-sage" />
                  <span>Fits your {g.toLowerCase()} goal</span>
                </p>
              ))}
              {rec.signals.length === 0 && matchedGoals.length === 0 && (
                <p className="text-[13px] leading-relaxed text-mute">
                  No strong taste signals yet — this score is mostly a baseline. Rating more
                  fragrances sharpens it.
                </p>
              )}
              {rec.caution && (
                <p className="text-[13px] leading-relaxed text-[#c8a48b] flex gap-2">
                  <InfoIcon size={14} className="mt-0.5 shrink-0" />
                  <span>Caution: {rec.caution}</span>
                </p>
              )}
            </div>
            <p className="mt-5 text-[11px] text-mute leading-relaxed">
              Match scores combine your reactions, boundaries, favourites, dislikes, goals, budget
              and collection signals.
            </p>
          </div>
        </div>
      )}

      {/* sticky CTAs */}
      <div className="sticky bottom-0 bg-gradient-to-t from-bg via-bg/95 to-transparent px-5 pt-8 pb-7">
        {!owned ? (
          <div className="flex gap-3">
            <PrimaryButton
              className="flex-[1.4] flex items-center justify-center gap-2"
              onClick={() => setStatus(id, item?.status === 'wishlist' ? null : 'wishlist')}
            >
              {item?.status === 'wishlist' ? (
                <>
                  <CheckIcon size={16} /> On try list
                </>
              ) : (
                <>
                  <HeartIcon size={16} /> Add to try list
                </>
              )}
            </PrimaryButton>
            <GhostButton className="flex-1" onClick={() => setStatus(id, 'own')}>
              I own this
            </GhostButton>
          </div>
        ) : (
          <PrimaryButton className="w-full" onClick={() => setEditing(true)}>
            Update my take
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}

function statusLabel(s: string) {
  return { own: 'In your collection', sampled: 'Sampled', sold: 'Had / sold' }[s] ?? s;
}

function recommendationEffect(tag?: string, dislikedChips: string[] = []): string {
  if (tag === 'Would buy again' || tag === 'Keeper')
    return 'Because you would buy this again, Accord boosts fragrances sharing its core directions across your feed.';
  if (tag === 'Would not buy again' || tag === 'Not for me')
    return dislikedChips.includes('Too sweet')
      ? 'Marked too sweet — Accord is lowering match scores for sweet fragrances across your recommendations.'
      : 'Accord reduces match scores for fragrances sharing this DNA, even though your rating still counts.';
  if (tag === 'Good, but redundant')
    return 'Accord knows you like this style but already own it — similar scents are ranked lower to push variety.';
  if (tag === 'Overhyped')
    return 'Accord will favour more distinctive picks over crowd-pleasers in this style.';
  return 'Your rating and decision feed directly into how Accord scores similar fragrances.';
}

function TakeEditor({
  rating,
  decisionTag,
  likedChips,
  dislikedChips,
  personalNote,
  onSave,
  onMoveToSold,
}: {
  rating?: number;
  decisionTag?: string;
  likedChips: string[];
  dislikedChips: string[];
  personalNote?: string;
  onSave: (patch: {
    rating: number;
    decisionTag?: string;
    likedChips: string[];
    dislikedChips: string[];
    personalNote?: string;
  }) => void;
  onMoveToSold: () => void;
}) {
  const [r, setR] = useState(rating ?? 7);
  const [tag, setTag] = useState(decisionTag);
  const [liked, setLiked] = useState(likedChips);
  const [disliked, setDisliked] = useState(dislikedChips);
  const [note, setNote] = useState(personalNote ?? '');

  const toggle = (list: string[], set: (v: string[]) => void) => (v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  return (
    <div className="mt-4 space-y-5 fade-up">
      <RatingControl value={r} onChange={setR} />

      <div>
        <SectionLabel className="mb-3">Decision</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {DECISION_TAGS.map((t) => (
            <Chip key={t} small active={tag === t} onClick={() => setTag(tag === t ? undefined : t)}>
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel className="mb-3">What you liked</SectionLabel>
        <ChipGroup small options={LOVE_CHIPS} selected={liked} onToggle={toggle(liked, setLiked)} />
      </div>

      <div>
        <SectionLabel className="mb-3">What didn't work</SectionLabel>
        <ChipGroup
          small
          options={DISLIKE_CHIPS}
          selected={disliked}
          onToggle={toggle(disliked, setDisliked)}
        />
      </div>

      <div>
        <SectionLabel className="mb-2">Personal note</SectionLabel>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder="e.g. Easy to wear but still refined."
          className="w-full rounded-2xl bg-bg2 border border-white/[0.08] px-4 py-3 text-[14px] text-ink placeholder:text-mute outline-none focus:border-accent2/60 resize-none"
        />
      </div>

      <div className="flex gap-3">
        <PrimaryButton
          className="flex-1"
          onClick={() =>
            onSave({
              rating: r,
              decisionTag: tag,
              likedChips: liked,
              dislikedChips: disliked,
              personalNote: note || undefined,
            })
          }
        >
          Save my take
        </PrimaryButton>
      </div>
      <button onClick={onMoveToSold} className="w-full text-center text-[12px] text-mute py-1">
        Move to sold / decluttered
      </button>
    </div>
  );
}
