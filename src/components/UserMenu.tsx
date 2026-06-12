import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../state/app';
import { Avatar, Divider } from './ui';
import { ChevronRightIcon, GearIcon, HelpIcon, LogoutIcon, SparkleIcon } from './icons';

const USER_NAME = 'Rasmus';

/** Header avatar button — opens the account drawer from the bottom. */
export function UserMenu() {
  const [open, setOpen] = useState(false);
  const { profile, refineProfile, setTab } = useApp();

  return (
    <>
      <button onClick={() => setOpen(true)} className="active:scale-95 transition shrink-0">
        <Avatar name={USER_NAME.charAt(0)} />
      </button>

      {/* portal: the sticky header's z-index would otherwise trap the drawer
          in a stacking context below the floating nav */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 mx-auto max-w-[430px] flex items-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full rounded-t-[28px] bg-card2 border-t border-white/[0.1] p-6 pb-10 sheet-up">
            <div className="mx-auto w-10 h-1 rounded-full bg-white/[0.12] mb-6" />

            <div className="flex items-center gap-4">
              <Avatar size={52} name={USER_NAME.charAt(0)} />
              <div>
                <div className="font-display font-medium text-[18px] text-ink">{USER_NAME}</div>
                <div className="text-[12px] text-mute mt-0.5">
                  Fragrance profile · {profile?.strength ?? 0}% complete
                </div>
              </div>
            </div>

            <div className="mt-6">
              <DrawerRow
                icon={<GearIcon size={18} />}
                title="Profile settings"
                subtitle="Manage your account and app preferences"
                onClick={() => {
                  setTab('profile');
                  setOpen(false);
                }}
              />
              <Divider />
              <DrawerRow
                icon={<SparkleIcon size={18} />}
                title="Refine scent profile"
                subtitle="Update favourites, dislikes, notes and goals"
                onClick={() => {
                  setOpen(false);
                  refineProfile();
                }}
              />
              <Divider />
              <DrawerRow
                icon={<HelpIcon size={18} />}
                title="Help & feedback"
                subtitle="Report an issue or suggest an improvement"
                onClick={() => setOpen(false)}
              />
            </div>

            <Divider className="my-4" />

            <button
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-4 text-left rounded-2xl px-4 py-3.5 active:bg-white/[0.04] transition"
            >
              <span className="w-10 h-10 rounded-full bg-[#c8a48b]/[0.08] border border-[#c8a48b]/15 flex items-center justify-center text-[#c8a48b]/80 shrink-0">
                <LogoutIcon size={17} />
              </span>
              <span className="text-[15px] font-medium text-[#c8a48b]/90">Log out</span>
            </button>
          </div>
          </div>,
          document.body
        )}
    </>
  );
}

function DrawerRow({
  icon,
  title,
  subtitle,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 text-left rounded-2xl px-4 py-3.5 active:bg-white/[0.04] transition"
    >
      <span className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-sage/80 shrink-0">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-medium text-ink">{title}</div>
        <div className="text-[12px] text-mute mt-0.5">{subtitle}</div>
      </div>
      <ChevronRightIcon size={16} className="text-mute shrink-0" />
    </button>
  );
}
