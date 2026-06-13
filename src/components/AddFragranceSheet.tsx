import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { CollectionStatus, Fragrance } from '../types';
import { FRAGRANCES } from '../data/fragrances';
import { DECISION_TAGS } from '../data/options';
import { useApp } from '../state/app';
import { Bottle } from './Bottle';
import { Chip, PrimaryButton, SectionLabel } from './ui';
import { RatingControl } from './RatingControl';
import { CheckIcon, ChevronLeftIcon, PlusIcon, SearchIcon, XIcon } from './icons';

const STATUS_OPTIONS: { id: CollectionStatus; label: string; done: string }[] = [
  { id: 'own', label: 'Own', done: 'Added to Collection' },
  { id: 'sampled', label: 'Sampled', done: 'Added to Sampled' },
  { id: 'wishlist', label: 'Try List', done: 'Added to Try List' },
  { id: 'sold', label: 'Had / Sold', done: 'Added to Had / Sold' },
];

/** A picked fragrance is either a dataset entry or a manual draft. */
type Picked =
  | { kind: 'dataset'; fragrance: Fragrance }
  | { kind: 'manual'; name: string; brand: string; concentration?: string };

type Step = 'search' | 'manual' | 'configure' | 'done';

export function AddFragranceSheet({
  initialStatus,
  onClose,
}: {
  initialStatus?: CollectionStatus;
  onClose: () => void;
}) {
  const { addCollectionItem } = useApp();
  const [step, setStep] = useState<Step>('search');
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState<Picked | null>(null);
  const [status, setStatus] = useState<CollectionStatus>(initialStatus ?? 'own');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [decisionTag, setDecisionTag] = useState<string | undefined>(undefined);
  const [note, setNote] = useState('');
  const [doneLabel, setDoneLabel] = useState('Added to Collection');

  // manual draft fields
  const [mName, setMName] = useState('');
  const [mBrand, setMBrand] = useState('');
  const [mConc, setMConc] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return FRAGRANCES.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.brand.toLowerCase().includes(q) ||
        f.concentration.toLowerCase().includes(q) ||
        f.styleTags.some((t) => t.toLowerCase().includes(q)) ||
        f.accords.some((a) => a.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query]);

  const pickedName = picked?.kind === 'dataset' ? picked.fragrance.name : picked?.name;
  const tryListOnly = status === 'wishlist';

  const commit = () => {
    if (!picked) return;
    const chosen = STATUS_OPTIONS.find((s) => s.id === status)!;
    addCollectionItem({
      fragranceId: picked.kind === 'dataset' ? picked.fragrance.id : undefined,
      status,
      rating: tryListOnly ? undefined : rating,
      decisionTag: tryListOnly ? undefined : decisionTag,
      personalNote: note.trim() || undefined,
      manual:
        picked.kind === 'manual'
          ? { name: picked.name, brand: picked.brand, concentration: picked.concentration }
          : undefined,
    });
    setDoneLabel(chosen.done);
    setStep('done');
    setTimeout(onClose, 1100);
  };

  const back = () => {
    if (step === 'manual') setStep('search');
    else if (step === 'configure') {
      setPicked(null);
      setStep('search');
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 mx-auto max-w-[430px] flex items-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full rounded-t-[28px] bg-card2 border-t border-white/[0.1] p-6 pb-9 sheet-up max-h-[88dvh] overflow-y-auto no-scrollbar">
        <div className="mx-auto w-10 h-1 rounded-full bg-white/[0.12] mb-5" />

        {/* header */}
        <div className="flex items-center gap-3 mb-1">
          {(step === 'manual' || step === 'configure') && (
            <button onClick={back} className="text-ink2 -ml-1 p-1">
              <ChevronLeftIcon size={18} />
            </button>
          )}
          <h3 className="font-display font-medium text-[19px] text-ink flex-1">
            {step === 'manual' ? 'Add manually' : step === 'configure' ? 'Add to collection' : 'Add fragrance'}
          </h3>
          <button onClick={onClose} className="text-mute p-1">
            <XIcon size={18} />
          </button>
        </div>

        {step === 'search' && (
          <>
            <p className="text-[13px] text-mute leading-relaxed mb-4">
              Add fragrances you own, sampled, want to try, or had before.
            </p>
            <div className="relative">
              <SearchIcon size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-mute" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fragrance or brand"
                className="w-full rounded-[14px] bg-card border border-white/[0.08] pl-11 pr-4 py-3.5 text-[15px] text-ink placeholder:text-mute outline-none focus:border-accent2/60"
              />
            </div>

            <div className="mt-3 space-y-2">
              {results.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setPicked({ kind: 'dataset', fragrance: f });
                    setStep('configure');
                  }}
                  className="w-full flex items-center gap-3.5 rounded-[14px] bg-card border border-white/[0.07] p-3 text-left active:scale-[0.99] transition"
                >
                  <Bottle fragrance={f} size={34} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-medium text-ink truncate">{f.name}</div>
                    <div className="text-[11px] text-mute mt-0.5">
                      {f.brand} · {f.concentration}
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {f.accords.slice(0, 2).map((a) => (
                        <Chip key={a} small>
                          {a}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <PlusIcon size={16} className="text-sage shrink-0" />
                </button>
              ))}
            </div>

            <div className="mt-5 text-center">
              <p className="text-[12px] text-mute">Can't find it?</p>
              <button
                onClick={() => {
                  setMName(query.trim());
                  setStep('manual');
                }}
                className="mt-2 rounded-[13px] bg-white/[0.05] border border-white/[0.08] text-sage font-display font-medium text-[13px] px-5 py-3 active:scale-95 transition"
              >
                Add manually
              </button>
            </div>
          </>
        )}

        {step === 'manual' && (
          <div className="mt-4 space-y-4">
            <Field label="Fragrance name">
              <input
                autoFocus
                value={mName}
                onChange={(e) => setMName(e.target.value)}
                placeholder="e.g. Aventus"
                className="w-full rounded-[14px] bg-card border border-white/[0.08] px-4 py-3.5 text-[15px] text-ink placeholder:text-mute outline-none focus:border-accent2/60"
              />
            </Field>
            <Field label="Brand">
              <input
                value={mBrand}
                onChange={(e) => setMBrand(e.target.value)}
                placeholder="e.g. Creed"
                className="w-full rounded-[14px] bg-card border border-white/[0.08] px-4 py-3.5 text-[15px] text-ink placeholder:text-mute outline-none focus:border-accent2/60"
              />
            </Field>
            <Field label="Concentration (optional)">
              <input
                value={mConc}
                onChange={(e) => setMConc(e.target.value)}
                placeholder="e.g. EDP"
                className="w-full rounded-[14px] bg-card border border-white/[0.08] px-4 py-3.5 text-[15px] text-ink placeholder:text-mute outline-none focus:border-accent2/60"
              />
            </Field>
            <PrimaryButton
              className="w-full"
              disabled={!mName.trim() || !mBrand.trim()}
              onClick={() => {
                setPicked({
                  kind: 'manual',
                  name: mName.trim(),
                  brand: mBrand.trim(),
                  concentration: mConc.trim() || undefined,
                });
                setStep('configure');
              }}
            >
              Continue
            </PrimaryButton>
          </div>
        )}

        {step === 'configure' && picked && (
          <div className="mt-4">
            <div className="rounded-[14px] bg-card border border-white/[0.07] p-3.5 flex items-center gap-3.5">
              {picked.kind === 'dataset' ? (
                <Bottle fragrance={picked.fragrance} size={34} />
              ) : (
                <div className="w-[34px] h-[44px] rounded-md bg-elev border border-white/[0.08] shrink-0" />
              )}
              <div className="min-w-0">
                <div className="text-[14px] font-medium text-ink truncate">{pickedName}</div>
                <div className="text-[11px] text-mute mt-0.5">
                  {picked.kind === 'dataset'
                    ? `${picked.fragrance.brand} · ${picked.fragrance.concentration}`
                    : `${picked.brand}${picked.concentration ? ` · ${picked.concentration}` : ''}`}
                </div>
              </div>
            </div>

            <SectionLabel className="mt-5 mb-3">Where should we add it?</SectionLabel>
            <div className="grid grid-cols-2 gap-2">
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStatus(s.id)}
                  className={`rounded-[13px] py-3 text-[13px] font-medium border transition active:scale-[0.98] ${
                    status === s.id
                      ? 'bg-accent2/80 text-accent-ink border-white/[0.16]'
                      : 'bg-card text-ink2 border-white/[0.07]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {!tryListOnly && (
              <div className="mt-6 space-y-5 fade-up">
                <div className="rounded-[14px] bg-card border border-white/[0.07] p-4">
                  <RatingControl value={rating} onChange={setRating} />
                  {rating === undefined && (
                    <p className="mt-2 text-[11px] text-mute">Optional — drag to set a rating.</p>
                  )}
                </div>

                <div>
                  <SectionLabel className="mb-3">Decision (optional)</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {DECISION_TAGS.map((t) => (
                      <Chip
                        key={t}
                        small
                        active={decisionTag === t}
                        onClick={() => setDecisionTag(decisionTag === t ? undefined : t)}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6">
              <SectionLabel className="mb-2">Personal note (optional)</SectionLabel>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder={tryListOnly ? 'e.g. Heard great things — sample next.' : 'e.g. Easy to wear but still refined.'}
                className="w-full rounded-[14px] bg-card border border-white/[0.08] px-4 py-3 text-[14px] text-ink placeholder:text-mute outline-none focus:border-accent2/60 resize-none"
              />
            </div>

            <PrimaryButton className="w-full mt-6" onClick={commit}>
              {tryListOnly ? 'Add to Try List' : 'Add to Collection'}
            </PrimaryButton>
          </div>
        )}

        {step === 'done' && (
          <div className="py-10 flex flex-col items-center text-center fade-up">
            <div className="w-14 h-14 rounded-full bg-sage/15 border border-sage/25 flex items-center justify-center text-sage">
              <CheckIcon size={26} />
            </div>
            <p className="mt-4 font-display font-medium text-[18px] text-ink">{doneLabel}</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <SectionLabel className="mb-2">{label}</SectionLabel>
      {children}
    </div>
  );
}
