"use client";

import { useEffect, useRef, useState } from "react";

export type Tab = { id: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];
  const root = useRef<HTMLDivElement>(null);

  // Deep links (#n8n, #ghl, ...) open the matching tab / accordion item and scroll to it.
  useEffect(() => {
    const open = () => {
      const id = window.location.hash.slice(1);
      if (!id || !tabs.some((tab) => tab.id === id)) return;
      setActive(id);
      window.requestAnimationFrame(() => {
        const mobile = window.matchMedia("(max-width: 767px)").matches;
        const target = mobile ? document.getElementById(id) : root.current;
        if (mobile && target instanceof HTMLDetailsElement) target.open = true;
        target?.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [tabs]);

  return (
    <div ref={root} className="scroll-mt-28">
      <div className="hidden flex-wrap gap-2 md:flex" role="tablist" aria-label={label}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={tab.id === current.id}
            aria-controls={`panel-${tab.id}`}
            className={`rounded-full px-4 py-2 text-sm font-bold ${tab.id === current.id ? "bg-amber text-ink" : "border border-white/15"}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 hidden md:block">
        {current ? (
          <div key={current.id} id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="tab-panel-in scroll-mt-28">
            <div id={current.id}>{current.content}</div>
          </div>
        ) : null}
      </div>
      <div className="space-y-3 md:hidden">
        {tabs.map((tab) => (
          <details key={tab.id} id={tab.id} className="glass rounded-3xl p-4" open={tab.id === tabs[0].id}>
            <summary className="cursor-pointer font-bold">{tab.label}</summary>
            <div className="mt-3">{tab.content}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
