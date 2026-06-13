import React from 'react';

type P = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 20,
  height: size ?? 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const SparkleIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </svg>
);

export const SearchIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const HeartIcon = ({ size, filled, ...p }: P & { filled?: boolean }) => (
  <svg {...base(size)} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M19.5 12.6L12 20l-7.5-7.4a5 5 0 1 1 7.5-6.6 5 5 0 1 1 7.5 6.6z" />
  </svg>
);

export const UserIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
  </svg>
);

export const SlidersIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 8h10M19 8h0M5 16h4M13 16h6" />
    <circle cx="17" cy="8" r="2" />
    <circle cx="11" cy="16" r="2" />
  </svg>
);

export const ChevronLeftIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRightIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const PlusIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CheckIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 13l4.5 4.5L19 7" />
  </svg>
);

export const XIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const CompassIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
);

export const GearIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.2 12c0-.5-.05-1-.15-1.45l2-1.55-2-3.46-2.35.95c-.75-.6-1.6-1.1-2.55-1.4L13.75 2h-3.5l-.4 2.49c-.95.3-1.8.8-2.55 1.4L4.95 4.94l-2 3.46 2 1.55c-.1.45-.15.95-.15 1.45s.05 1 .15 1.45l-2 1.55 2 3.46 2.35-.95c.75.6 1.6 1.1 2.55 1.4l.4 2.49h3.5l.4-2.49c.95-.3 1.8-.8 2.55-1.4l2.35.95 2-3.46-2-1.55c.1-.45.15-.95.15-1.45z" />
  </svg>
);

export const HelpIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.8-2.7 2.3-2.7 3.8M12 17.2h.01" />
  </svg>
);

export const LogoutIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M14 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M17 8l4 4-4 4M21 12H10" />
  </svg>
);

export const MarsIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="10" cy="14" r="6" />
    <path d="M14.5 9.5L20 4M20 4h-5M20 4v5" />
  </svg>
);

export const VenusIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M12 15v6M9 18h6" />
  </svg>
);

export const UnisexIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 17v5M9.5 20h5M15.5 8.5L20 4M20 4h-4M20 4v4" />
  </svg>
);

export const DotsIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);

export const InfoIcon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
