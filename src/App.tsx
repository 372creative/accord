import React, { useEffect } from 'react';
import { useApp } from './state/app';
import { BottomNav } from './components/BottomNav';
import { Onboarding } from './screens/Onboarding';
import { ProfileResult } from './screens/ProfileResult';
import { ForYou } from './screens/ForYou';
import { Discover } from './screens/Discover';
import { Collection } from './screens/Collection';
import { ProfileTab } from './screens/ProfileTab';
import { FragranceDetail } from './screens/FragranceDetail';
import { ListDetail } from './screens/ListDetail';

export default function App() {
  const { stage, tab, overlays } = useApp();

  // Onboarding/result use document scroll; reset it when the stage changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  return (
    <div className="mx-auto max-w-[430px] min-h-dvh relative bg-bg sm:my-0 sm:border-x sm:border-white/[0.06] overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-32 w-[360px] h-[360px] rounded-full bg-accent/20 blur-[120px]" />

      {stage === 'onboarding' && <Onboarding />}
      {stage === 'result' && <ProfileResult />}

      {stage === 'app' && (
        <>
          {/* keyed by tab: each tab gets a fresh viewport-height scroller, so
              switching can never inherit (and visibly clamp) the previous
              tab's scroll position */}
          <main key={tab} className="h-dvh overflow-y-auto no-scrollbar relative">
            {tab === 'foryou' && <ForYou />}
            {tab === 'discover' && <Discover />}
            {tab === 'collection' && <Collection />}
            {tab === 'profile' && <ProfileTab />}
          </main>

          {overlays.map((o, i) => (
            <React.Fragment key={i}>
              {o.type === 'fragrance' ? (
                <FragranceDetail id={o.id} />
              ) : (
                <ListDetail id={o.id} />
              )}
            </React.Fragment>
          ))}

          {overlays.length === 0 && <BottomNav />}
        </>
      )}
    </div>
  );
}
