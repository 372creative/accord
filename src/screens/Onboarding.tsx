import React, { useMemo, useState } from 'react';
import { useApp } from '../state/app';
import {
  ConditionalPreference,
  DirectionPreference,
  DirectionReaction,
  OnboardingAnswers,
  PickedFragrance,
  YesMaybeNo,
} from '../types';
import {
  BUDGET_RANGES,
  CLONE_OPENNESS,
  COLLECTION_SIZES,
  CONDITIONAL_OPTIONS,
  DIRECTIONS,
  DISLIKE_CHIPS,
  EXPERIENCE_LEVELS,
  GOALS,
  LOVE_CHIPS,
  POLARISING_DIRECTIONS,
  PROJECTION_LEVELS,
  REACTIONS,
} from '../data/options';
import { findById, FRAGRANCES } from '../data/fragrances';
import { Bottle } from '../components/Bottle';
import { Chip, ChipGroup, HeaderBackdrop, PrimaryButton, SectionLabel } from '../components/ui';
import { ChevronLeftIcon, PlusIcon, SearchIcon, SparkleIcon, XIcon } from '../components/icons';

const TOTAL_STEPS = 10;
const BOUNDARIES_STEP = 7;

export function Onboarding() {
  const { answers, completeOnboarding } = useApp();
  const [step, setStep] = useState(0); // 0 = welcome
  const [draft, setDraft] = useState<OnboardingAnswers>(answers);

  const set = <K extends keyof OnboardingAnswers>(key: K, value: OnboardingAnswers[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const dependsPolarising = (draft.directionPreferences ?? [])
    .filter((p) => p.reaction === 'depends' && POLARISING_DIRECTIONS.includes(p.name))
    .map((p) => p.name);

  const finish = () => {
    const prefs = draft.directionPreferences ?? [];
    completeOnboarding({
      ...draft,
      // derived legacy fields, for display and stored-profile compatibility
      likedDirections: prefs.filter((p) => p.score >= 7).map((p) => p.name),
      avoidedDirections: prefs.filter((p) => p.score <= -5).map((p) => p.name),
    });
  };

  const next = () => {
    if (step >= TOTAL_STEPS) return finish();
    // boundaries step only exists when something polarising was marked "Depends"
    if (step === BOUNDARIES_STEP - 1 && dependsPolarising.length === 0)
      return setStep(BOUNDARIES_STEP + 1);
    setStep(step + 1);
  };
  const back = () => {
    if (step === BOUNDARIES_STEP + 1 && dependsPolarising.length === 0)
      return setStep(BOUNDARIES_STEP - 1);
    setStep(Math.max(0, step - 1));
  };

  if (step === 0) return <Welcome onStart={() => setStep(1)} />;

  const canContinue = (() => {
    switch (step) {
      case 1:
        return !!draft.experienceLevel;
      case 2:
        return !!draft.collectionSize;
      case 3:
        return !!draft.budgetRange && !!draft.openToClones;
      case 4:
        return draft.favourites.length > 0;
      case 5:
        return draft.dislikes.length > 0;
      case 8:
        return draft.currentGoals.length > 0;
      case 9:
        return !!draft.projection;
      default:
        return true;
    }
  })();

  const skippable = step === 4 || step === 5;

  return (
    <div className="min-h-dvh flex flex-col px-6 pb-8">
      {/* progress */}
      <div className="sticky top-0 z-30 -mx-6 px-6 pt-5 pb-3 flex items-center gap-4">
        <HeaderBackdrop />
        <button
          onClick={back}
          className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-ink2 shrink-0"
        >
          <ChevronLeftIcon size={18} />
        </button>
        <div className="flex-1 flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-[3px] flex-1 rounded-full transition-colors ${
                i < step ? 'bg-sage/70' : 'bg-white/[0.08]'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] text-mute tabular-nums shrink-0">
          {step} / {TOTAL_STEPS}
        </span>
      </div>

      <div key={step} className="flex-1 flex flex-col pt-9">
        {step === 1 && (
          <SingleSelect
            title="How deep are you into fragrances?"
            helper="This helps Accord decide how specific or beginner-friendly your recommendations should be."
            options={EXPERIENCE_LEVELS}
            value={draft.experienceLevel}
            onChange={(v) => set('experienceLevel', v)}
          />
        )}
        {step === 2 && (
          <SingleSelect
            title="How many fragrances do you currently own?"
            helper="We'll use this to understand whether you're building a starter wardrobe or refining a collection."
            options={COLLECTION_SIZES}
            value={draft.collectionSize}
            onChange={(v) => set('collectionSize', v)}
          />
        )}
        {step === 3 && (
          <div className="space-y-9 stagger">
            <SingleSelect
              title="What is your usual full-bottle budget?"
              helper="Accord will use this to avoid recommending fragrances outside your comfort zone."
              options={BUDGET_RANGES}
              value={draft.budgetRange}
              onChange={(v) => set('budgetRange', v)}
              compact
            />
            <SingleSelect
              title="Are you open to cheaper alternatives or clones?"
              options={CLONE_OPENNESS}
              value={draft.openToClones}
              onChange={(v) => set('openToClones', v)}
              compact
            />
          </div>
        )}
        {step === 4 && (
          <FragrancePicker
            title="Add fragrances you love"
            helper="Adding at least one fragrance will make your first recommendations much better."
            chipTitle="What do you love about it?"
            chips={LOVE_CHIPS}
            picked={draft.favourites}
            onChange={(v) => set('favourites', v)}
            segLabel="Would buy again?"
            segKey="wouldBuyAgain"
          />
        )}
        {step === 5 && (
          <FragrancePicker
            title="Add fragrances that were not for you"
            helper="Even one bad fit helps Accord avoid poor recommendations."
            chipTitle="What didn't work?"
            chips={DISLIKE_CHIPS}
            picked={draft.dislikes}
            onChange={(v) => set('dislikes', v)}
            segLabel="Would avoid similar scents?"
            segKey="avoidSimilar"
          />
        )}
        {step === 6 && (
          <ReactionStep
            prefs={draft.directionPreferences ?? []}
            onChange={(v) => set('directionPreferences', v)}
          />
        )}
        {step === 7 && (
          <BoundariesStep
            directions={dependsPolarising}
            value={draft.conditionalPreferences ?? {}}
            onChange={(v) => set('conditionalPreferences', v)}
          />
        )}
        {step === 8 && (
          <MultiSelect
            title="What are you looking for right now?"
            helper="Choose as many as apply. You might be looking for several types of scents."
            options={GOALS}
            selected={draft.currentGoals}
            onChange={(v) => set('currentGoals', v)}
          />
        )}
        {step === 9 && (
          <SingleSelect
            title="How loud do you like your fragrance?"
            helper="This helps Accord balance subtle, tasteful scents against stronger performers."
            options={PROJECTION_LEVELS}
            value={draft.projection}
            onChange={(v) => set('projection', v)}
          />
        )}
        {step === 10 && <Building />}
      </div>

      <PrimaryButton onClick={next} disabled={!canContinue} className="w-full mt-8">
        {step === TOTAL_STEPS ? 'Reveal my profile' : 'Continue'}
      </PrimaryButton>
      {skippable && (
        <button onClick={() => setStep(step + 1)} className="mt-3 text-center text-[13px] text-mute py-1">
          Skip for now
        </button>
      )}
    </div>
  );
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-dvh flex flex-col px-7 pb-12 pt-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-accent2/25 blur-[110px] pointer-events-none" />
      <div className="flex-1 flex flex-col justify-center stagger">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-accent2 to-accent border border-white/15 flex items-center justify-center text-sage shadow-[0_10px_30px_-6px_rgba(63,91,89,0.6)]">
          <SparkleIcon size={26} />
        </div>
        <div className="mt-8 font-display text-[12px] font-semibold uppercase tracking-[0.3em] text-mute">
          Accord
        </div>
        <h1 className="mt-3 font-display font-medium text-[34px] leading-[1.15] text-ink">
          Build your scent profile
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink2 max-w-[300px]">
          Accord learns what you love, what you avoid, and what you should sample next.
        </p>
      </div>
      <PrimaryButton onClick={onStart} className="w-full">
        Start
      </PrimaryButton>
      <p className="mt-4 text-center text-[11px] text-mute">
        Understand what you love. Discover what's next.
      </p>
    </div>
  );
}

function SingleSelect({
  title,
  helper,
  options,
  value,
  onChange,
  compact,
}: {
  title: string;
  helper?: string;
  options: string[];
  value?: string;
  onChange: (v: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="stagger">
      <h2 className={`font-display font-medium text-ink leading-snug ${compact ? 'text-[19px]' : 'text-[26px]'}`}>
        {title}
      </h2>
      {helper && <p className="mt-3 text-[14px] text-mute leading-relaxed">{helper}</p>}
      <div className={`${compact ? 'mt-4' : 'mt-6'} space-y-2.5 stagger`}>
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              className={`w-full text-left rounded-[14px] px-5 border transition active:scale-[0.99] font-medium text-[15px] ${
                compact ? 'py-3.5' : 'py-4'
              } ${
                active
                  ? 'bg-accent2/70 border-white/[0.16] text-accent-ink'
                  : 'bg-card border-white/[0.07] text-ink2'
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MultiSelect({
  title,
  helper,
  options,
  selected,
  onChange,
}: {
  title: string;
  helper?: string;
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (v: string) =>
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  return (
    <div className="stagger">
      <h2 className="font-display font-medium text-[26px] leading-snug text-ink">{title}</h2>
      {helper && <p className="mt-3 text-[14px] text-mute leading-relaxed">{helper}</p>}
      <div className="mt-7">
        <ChipGroup options={options} selected={selected} onToggle={toggle} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Direction reactions (5-point scale)
// ---------------------------------------------------------------------------

function ReactionStep({
  prefs,
  onChange,
}: {
  prefs: DirectionPreference[];
  onChange: (v: DirectionPreference[]) => void;
}) {
  const reactionFor = (name: string) => prefs.find((p) => p.name === name)?.reaction;
  const setReaction = (name: string, reaction: DirectionReaction) => {
    const rest = prefs.filter((p) => p.name !== name);
    // tapping the active option again clears it back to neutral
    if (reactionFor(name) === reaction) return onChange(rest);
    const score = REACTIONS.find((r) => r.id === reaction)!.score;
    onChange([...rest, { name, reaction, score }]);
  };

  return (
    <div>
      <div className="stagger">
        <h2 className="font-display font-medium text-[26px] leading-snug text-ink">
          How do you feel about these scent directions?
        </h2>
        <p className="mt-3 text-[14px] text-mute leading-relaxed">
          Rate only the directions you have an opinion on. You can leave the rest neutral.
        </p>
      </div>
      <div className="mt-6 space-y-2.5 stagger">
        {DIRECTIONS.map((d) => {
          const current = reactionFor(d);
          return (
            <div key={d} className="rounded-[14px] bg-card border border-white/[0.07] px-4 py-3">
              <div className="flex items-center justify-between">
                <span className={`text-[14px] font-medium ${current ? 'text-ink' : 'text-ink2'}`}>
                  {d}
                </span>
                {!current && <span className="text-[10px] text-mute">Neutral</span>}
              </div>
              <div className="mt-2.5 grid grid-cols-5 gap-1">
                {REACTIONS.map((r) => {
                  const active = current === r.id;
                  const negative = r.score < 0;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setReaction(d, r.id as DirectionReaction)}
                      className={`rounded-[9px] py-2 text-[10px] font-medium border transition active:scale-95 leading-tight ${
                        active
                          ? negative
                            ? 'bg-[#4d3b34]/60 text-[#d8b9a4] border-[#d8b9a4]/20'
                            : r.id === 'depends'
                              ? 'bg-white/[0.1] text-ink border-white/[0.16]'
                              : 'bg-accent2/80 text-accent-ink border-white/[0.16]'
                          : 'bg-white/[0.03] text-mute border-white/[0.05]'
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// "Set your boundaries" — conditional follow-up for Depends directions
// ---------------------------------------------------------------------------

function BoundariesStep({
  directions,
  value,
  onChange,
}: {
  directions: string[];
  value: Record<string, ConditionalPreference>;
  onChange: (v: Record<string, ConditionalPreference>) => void;
}) {
  const [open, setOpen] = useState<string | null>(directions[0] ?? null);

  const toggle = (dir: string, group: 'worksForMe' | 'notForMe', chip: string) => {
    const cp: ConditionalPreference = value[dir] ?? { worksForMe: [], notForMe: [] };
    const list = cp[group];
    const updated = list.includes(chip) ? list.filter((x) => x !== chip) : [...list, chip];
    onChange({ ...value, [dir]: { ...cp, [group]: updated } });
  };

  return (
    <div>
      <div className="stagger">
        <h2 className="font-display font-medium text-[26px] leading-snug text-ink">
          Set your boundaries
        </h2>
        <p className="mt-3 text-[14px] text-mute leading-relaxed">
          You said some directions depend on the style. Tell Accord what works and what does not.
        </p>
      </div>
      <div className="mt-6 space-y-3 stagger">
        {directions.map((dir) => {
          const opts = CONDITIONAL_OPTIONS[dir];
          if (!opts) return null;
          const cp = value[dir] ?? { worksForMe: [], notForMe: [] };
          const isOpen = open === dir;
          const count = cp.worksForMe.length + cp.notForMe.length;
          return (
            <div key={dir} className="rounded-[16px] bg-card border border-white/[0.08]">
              <button
                onClick={() => setOpen(isOpen ? null : dir)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div>
                  <div className="text-[15px] font-medium text-ink">{dir}</div>
                  <div className="text-[11px] text-mute mt-0.5">
                    {count > 0 ? `${count} boundaries set` : opts.question}
                  </div>
                </div>
                <span className={`text-mute text-[18px] transition ${isOpen ? 'rotate-45' : ''}`}>
                  <PlusIcon size={16} />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 fade-up">
                  {opts.helper && (
                    <p className="text-[12px] text-mute leading-relaxed mb-4">{opts.helper}</p>
                  )}
                  <SectionLabel className="mb-3">Works for me</SectionLabel>
                  <ChipGroup
                    small
                    options={opts.worksForMe}
                    selected={cp.worksForMe}
                    onToggle={(c) => toggle(dir, 'worksForMe', c)}
                  />
                  <SectionLabel className="mt-5 mb-3">Not for me</SectionLabel>
                  <ChipGroup
                    small
                    options={opts.notForMe}
                    selected={cp.notForMe}
                    onToggle={(c) => toggle(dir, 'notForMe', c)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Fragrance picker with rich selected cards
// ---------------------------------------------------------------------------

const SEG_OPTIONS: { id: YesMaybeNo; label: string }[] = [
  { id: 'yes', label: 'Yes' },
  { id: 'maybe', label: 'Maybe' },
  { id: 'no', label: 'No' },
];

function FragrancePicker({
  title,
  helper,
  chipTitle,
  chips,
  picked,
  onChange,
  segLabel,
  segKey,
}: {
  title: string;
  helper: string;
  chipTitle: string;
  chips: string[];
  picked: PickedFragrance[];
  onChange: (v: PickedFragrance[]) => void;
  segLabel: string;
  segKey: 'wouldBuyAgain' | 'avoidSimilar';
}) {
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return FRAGRANCES.filter(
      (f) =>
        (f.name.toLowerCase().includes(q) || f.brand.toLowerCase().includes(q)) &&
        !picked.some((p) => p.fragranceId === f.id)
    ).slice(0, 5);
  }, [query, picked]);

  const exactMatch = FRAGRANCES.some((f) => f.name.toLowerCase() === query.trim().toLowerCase());
  const canAddManual =
    query.trim().length > 2 && !exactMatch && !picked.some((p) => p.name === query.trim());

  const add = (p: PickedFragrance) => {
    onChange([...picked, p]);
    setEditing(p.name);
    setQuery('');
  };
  const remove = (name: string) => onChange(picked.filter((p) => p.name !== name));
  const patch = (name: string, patchVal: Partial<PickedFragrance>) =>
    onChange(picked.map((p) => (p.name === name ? { ...p, ...patchVal } : p)));
  const toggleReason = (name: string, reason: string) => {
    const p = picked.find((x) => x.name === name);
    if (!p) return;
    patch(name, {
      reasons: p.reasons.includes(reason)
        ? p.reasons.filter((r) => r !== reason)
        : [...p.reasons, reason],
    });
  };

  return (
    <div>
      <div className="stagger">
        <h2 className="font-display font-medium text-[26px] leading-snug text-ink">{title}</h2>
        <p className="mt-3 text-[14px] text-mute leading-relaxed">{helper}</p>
      </div>

      <div className="mt-6 relative">
        <SearchIcon size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-mute" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fragrances…"
          className="w-full rounded-[14px] bg-card border border-white/[0.08] pl-11 pr-4 py-3.5 text-[15px] text-ink placeholder:text-mute outline-none focus:border-accent2/60"
        />
      </div>

      {(results.length > 0 || canAddManual) && (
        <div className="mt-2 rounded-[14px] bg-card2 border border-white/[0.08] overflow-hidden">
          {results.map((f) => (
            <button
              key={f.id}
              onClick={() => add({ fragranceId: f.id, name: f.name, reasons: [] })}
              className="w-full flex items-center gap-3 px-4 py-3 text-left border-b border-line last:border-0 active:bg-white/[0.04]"
            >
              <Bottle fragrance={f} size={26} />
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-medium text-ink truncate">{f.name}</div>
                <div className="text-[11px] text-mute">
                  {f.brand} · {f.concentration}
                </div>
              </div>
              <PlusIcon size={16} className="text-sage shrink-0" />
            </button>
          ))}
          {canAddManual && (
            <button
              onClick={() => add({ name: query.trim(), reasons: [] })}
              className="w-full flex items-center gap-3 px-4 py-3 text-left active:bg-white/[0.04]"
            >
              <PlusIcon size={16} className="text-sage" />
              <span className="text-[14px] text-ink2">
                Add “<span className="text-ink">{query.trim()}</span>” manually
              </span>
            </button>
          )}
        </div>
      )}

      <div className="mt-5 space-y-3">
        {picked.map((p) => {
          const isOpen = editing === p.name;
          const f = findById(p.fragranceId);
          return (
            <div key={p.name} className="rounded-[16px] bg-card border border-white/[0.08] p-4">
              <div className="flex items-center gap-3.5">
                {f ? (
                  <Bottle fragrance={f} size={30} />
                ) : (
                  <div className="w-[30px] h-[39px] rounded-md bg-elev border border-white/[0.08] shrink-0" />
                )}
                <button onClick={() => setEditing(isOpen ? null : p.name)} className="min-w-0 text-left flex-1">
                  <div className="text-[15px] font-medium text-ink truncate">{p.name}</div>
                  <div className="text-[11px] text-mute mt-0.5 truncate">
                    {f ? `${f.brand} · ${f.concentration}` : 'Added manually'}
                    {!isOpen && p.reasons.length > 0 && ` · ${p.reasons.slice(0, 3).join(', ')}`}
                  </div>
                </button>
                <button onClick={() => remove(p.name)} className="text-mute p-1 shrink-0">
                  <XIcon size={15} />
                </button>
              </div>
              {isOpen && (
                <div className="mt-4 fade-up">
                  <SectionLabel className="mb-3">{chipTitle}</SectionLabel>
                  <ChipGroup
                    small
                    options={chips}
                    selected={p.reasons}
                    onToggle={(r) => toggleReason(p.name, r)}
                  />
                  <SectionLabel className="mt-5 mb-2.5">{segLabel}</SectionLabel>
                  <div className="rounded-[12px] bg-bg2 border border-white/[0.07] p-1 flex">
                    {SEG_OPTIONS.map((o) => {
                      const active = p[segKey] === o.id;
                      return (
                        <button
                          key={o.id}
                          onClick={() => patch(p.name, { [segKey]: active ? undefined : o.id })}
                          className={`flex-1 rounded-[9px] py-2 text-[12px] font-medium transition ${
                            active ? 'bg-accent2/80 text-accent-ink' : 'text-mute'
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              {!isOpen && p.reasons.length === 0 && (
                <button
                  onClick={() => setEditing(p.name)}
                  className="mt-2 text-[12px] text-sage font-medium"
                >
                  Add details
                </button>
              )}
            </div>
          );
        })}
        {picked.length === 0 && (
          <p className="text-[12px] text-mute text-center pt-2">
            Nothing added yet — search above to add one.
          </p>
        )}
      </div>
    </div>
  );
}

function Building() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 stagger">
      <div className="w-16 h-16 rounded-full bg-accent2/20 border border-accent2/30 flex items-center justify-center text-sage animate-pulse">
        <SparkleIcon size={28} />
      </div>
      <h2 className="mt-7 font-display font-medium text-[24px] text-ink">Everything's in place</h2>
      <p className="mt-3 text-[14px] text-mute leading-relaxed max-w-[280px]">
        Accord will weigh your favourites, dislikes, reactions and boundaries into a taste profile —
        and keep refining it as you rate fragrances.
      </p>
    </div>
  );
}
