'use client';

// Accessible tabs. Every panel is rendered into the static HTML (inactive ones
// use the `hidden` attribute), so crawlers and AI engines can read all of them.
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

export type Tab = { id: string; label: string; panel: ReactNode };

export default function IndustryTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Industries">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[i] = el; }}
            className="tab"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} className="panel" role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== i}>
          {t.panel}
        </div>
      ))}
    </>
  );
}
