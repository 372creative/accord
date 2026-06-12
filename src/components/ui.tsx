import React, { useEffect, useRef } from 'react';

export function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-display text-[11px] font-medium uppercase tracking-[0.14em] text-[#a6ab9f] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Background for sticky headers: extends past the header's bottom edge and is
 * masked out gradually, so both the tint and the backdrop blur fade into the
 * content instead of ending in a solid line. Hidden while the page is at the
 * top — it only fades in once content actually scrolls under the header.
 */
export function HeaderBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let scroller: HTMLElement | null = el.parentElement;
    while (scroller && scroller !== document.body) {
      const overflowY = getComputedStyle(scroller).overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') break;
      scroller = scroller.parentElement;
    }
    const inElement = scroller && scroller !== document.body;
    const target: HTMLElement | Window = inElement ? scroller! : window;
    const update = () => {
      const top = inElement ? scroller!.scrollTop : window.scrollY;
      el.style.opacity = String(Math.min(1, top / 52));
    };
    update();
    target.addEventListener('scroll', update, { passive: true });
    return () => target.removeEventListener('scroll', update);
  }, []);

  const mask = 'linear-gradient(to bottom, black 55%, transparent 100%)';
  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-x-0 top-0 -bottom-12 -z-10 bg-bg/90 backdrop-blur-xl pointer-events-none"
      style={{ maskImage: mask, WebkitMaskImage: mask, opacity: 0 }}
    />
  );
}

export function GlowCard({
  children,
  className = '',
  onClick,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  glow?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-[20px] p-px bg-gradient-to-b from-white/[0.12] via-white/[0.05] to-transparent ${
        glow ? 'shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7),0_0_42px_-18px_rgba(101,140,135,0.35)]' : 'shadow-[0_14px_40px_-14px_rgba(0,0,0,0.6)]'
      } ${onClick ? 'cursor-pointer active:scale-[0.99] transition-transform' : ''} ${className}`}
    >
      <div className="rounded-[19px] bg-gradient-to-b from-card2 to-card h-full">{children}</div>
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  className = '',
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-[14px] bg-gradient-to-b from-accent2 to-accent text-accent-ink font-display font-semibold text-[15px] px-6 py-3.5 border border-white/10 shadow-[0_8px_24px_-8px_rgba(63,91,89,0.55)] active:scale-[0.98] transition disabled:opacity-35 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[14px] bg-white/[0.05] text-ink2 font-display font-medium text-[15px] px-6 py-3.5 border border-white/[0.07] active:scale-[0.98] transition ${className}`}
    >
      {children}
    </button>
  );
}

export function Chip({
  children,
  active,
  onClick,
  small,
  tone = 'neutral',
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  small?: boolean;
  tone?: 'neutral' | 'sage' | 'warn';
}) {
  // Tappable chips get finger-sized padding; purely decorative ones stay compact.
  const interactive = !!onClick;
  const pad = small
    ? interactive
      ? 'px-4 py-2.5 text-[13px]'
      : 'px-3 py-1.5 text-[12px]'
    : interactive
      ? 'px-5 py-3 text-[14px]'
      : 'px-4 py-2 text-[13px]';
  let look = 'bg-white/[0.06] text-ink2 border-white/[0.07]';
  if (active) look = 'bg-accent2/80 text-accent-ink border-white/[0.14]';
  else if (tone === 'sage') look = 'bg-sage/10 text-sage border-sage/15';
  else if (tone === 'warn') look = 'bg-[#4d3b34]/40 text-[#d8b9a4] border-[#d8b9a4]/10';
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${pad} ${look} ${
        onClick ? 'cursor-pointer active:scale-95 transition select-none' : ''
      }`}
    >
      {children}
    </span>
  );
}

export function ChipGroup({
  options,
  selected,
  onToggle,
  small,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  small?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2 stagger">
      {options.map((o) => (
        <Chip key={o} small={small} active={selected.includes(o)} onClick={() => onToggle(o)}>
          {o}
        </Chip>
      ))}
    </div>
  );
}

export function MatchBadge({ value, large }: { value: number; large?: boolean }) {
  return (
    <div className="text-right shrink-0">
      <div className={`font-display font-medium text-ink ${large ? 'text-[18px] leading-5' : 'text-[16px] leading-5'}`}>
        {value}%
      </div>
      <div className="text-[10px] leading-3 uppercase tracking-[0.22em] text-mute font-medium">match</div>
    </div>
  );
}

export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-line ${className}`} />;
}

export function Avatar({ size = 38, name = 'R' }: { size?: number; name?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-br from-accent2 via-accent to-[#22332f] border border-white/15 flex items-center justify-center font-display font-semibold text-sage shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
    >
      <span style={{ fontSize: size * 0.4 }}>{name}</span>
    </div>
  );
}

export function IconButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-ink2 active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
}
