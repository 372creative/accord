import React from 'react';
import { Tab, useApp } from '../state/app';
import { CompassIcon, HeartIcon, SearchIcon, SparkleIcon, UserIcon } from './icons';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'foryou', label: 'For You', icon: <SparkleIcon size={20} /> },
  { id: 'discover', label: 'Discover', icon: <SearchIcon size={20} /> },
  { id: 'collection', label: 'Collection', icon: <HeartIcon size={20} /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon size={20} /> },
];

export function BottomNav() {
  const { tab, setTab } = useApp();
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-40px)] max-w-[380px]">
      <div className="rounded-full p-px bg-gradient-to-b from-white/[0.14] to-white/[0.03] shadow-[0_18px_44px_-8px_rgba(0,0,0,0.85)]">
        <nav className="rounded-full bg-[#14181f]/70 backdrop-blur-xl backdrop-saturate-150 flex items-center justify-around px-2 py-3">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex flex-col items-center gap-1.5 px-2 transition ${
                  active ? 'text-sage' : 'text-mute'
                }`}
              >
                {t.icon}
                <span className="font-display text-[8px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
                  {t.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
