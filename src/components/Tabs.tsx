"use client";

import { useState } from "react";

export type Tab = { id: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];
  return (
    <div>
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
          <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="scroll-mt-28">
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
