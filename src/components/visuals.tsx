"use client";

import Link from "next/link";
import { useState } from "react";

const nodes = [
  { label: "Content", detail: "UGC Ads · Short-form · Long-form", href: "/services/content-creation", color: "#e8a07a", subs: ["AI UGC Ads", "Short-form", "Long-form"] },
  { label: "Automation", detail: "n8n · GHL · CRM · Python", href: "/services/ai-automation", color: "#6ba3a0", subs: ["n8n", "GoHighLevel", "CRM", "Python"] },
  { label: "Voice", detail: "Inbound receptionist · Outbound", href: "/services/ai-voice-agents", color: "#7a9ebf", subs: ["Inbound", "Outbound"] },
  { label: "Web", detail: "Next.js · Shopify · Landing pages", href: "/services/web-development", color: "#8fae8b", subs: ["Next.js", "Shopify", "Landing pages"] },
  { label: "SEO", detail: "Technical · On-page · Off-page · Local", href: "/services/seo", color: "#d4a574", subs: ["Technical", "On-page", "Local", "AI search"] },
];

export function CommandCenter() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="orbit relative mx-auto h-[420px] w-full max-w-[640px] overflow-hidden sm:h-[560px]" aria-label="Five services around the Innoventix hub">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 sm:h-[420px] sm:w-[420px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber/25 sm:h-[280px] sm:w-[280px]" />
      <div className="absolute left-1/2 top-1/2 z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-amber/50 bg-navy text-center shadow-[0_0_40px_rgba(255,181,71,0.35)] sm:h-[120px] sm:w-[120px]">
        <span className="text-[11px] font-bold tracking-[0.16em] text-amber sm:text-xs">INNOVENTIX</span>
        <span className="text-[10px] tracking-[0.2em] text-pearl/80">HUB</span>
      </div>
      <div className="absolute inset-0 origin-center scale-[0.72] sm:scale-100">
        <div className="orbit-spin absolute inset-0">
        {nodes.map((node, index) => {
          const angle = (index / nodes.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = Math.round(Math.cos(rad) * 200);
          const y = Math.round(Math.sin(rad) * 200);
          const dim = active !== null && active !== index;
          return (
            <div key={node.label} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
              <div className="orbit-unspin">
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <button
                    type="button"
                    className="glass glass-card w-[132px] rounded-2xl px-3 py-2 text-left sm:w-[158px]"
                    style={{ opacity: dim ? 0.3 : 1, borderColor: active === index ? node.color : undefined }}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(active === index ? null : index)}
                  >
                    <span className="block text-sm font-bold" style={{ color: node.color }}>{node.label}</span>
                    <span className="mt-1 block text-[11px] leading-4 text-mist">{node.detail}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      {active !== null ? (
        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-wrap justify-center gap-2">
          {nodes[active].subs.map((sub) => (
            <Link key={sub} href={nodes[active].href} className="rounded-full border border-amber/40 bg-[rgba(255,181,71,0.12)] px-3 py-1 text-xs font-semibold text-amber-bright">
              {sub}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const flowNodes = ["Lead form", "Router", "OpenAI", "HubSpot", "GoHighLevel", "Slack"];

export function WorkflowAssembly() {
  return (
    <section data-pin className="relative h-[150vh] lg:h-[250vh]" aria-label="The Workflow Assembly">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2 className="mt-4 text-3xl text-white md:text-5xl">The Workflow Assembly</h2>
            <div className="mt-6 space-y-4">
              <p data-stage className="text-lg text-pearl/90">Your tools today: disconnected. Gmail, Shopify, Sheets, HubSpot, GHL, Slack, Stripe and OpenAI sit apart.</p>
              <p data-stage hidden className="text-lg text-pearl/90">We connect them. Nodes snap into a workflow and amber wires draw between them.</p>
              <p data-stage hidden className="text-lg text-pearl/90">And it runs on its own. Lead captured → Qualified → CRM updated → Follow-up sent. Running 24/7.</p>
            </div>
          </div>
          <div className="glass relative overflow-hidden rounded-[28px] p-6">
            <svg viewBox="0 0 520 280" className="h-auto w-full" aria-hidden="true">
              <path className="wire-dash" d="M70 70 H180 V150 H300 V70 H430" fill="none" stroke="#ffb547" strokeWidth="2" />
              <path className="wire-dash" d="M180 150 H300 V210 H430" fill="none" stroke="#ffc970" strokeWidth="2" opacity="0.7" />
            </svg>
            <div className="absolute inset-0 grid grid-cols-3 content-center gap-3 p-6 sm:grid-cols-3">
              {flowNodes.map((name, index) => (
                <div key={name} className="glass-strong rounded-2xl px-3 py-3 text-center text-xs font-bold text-white shadow-[0_0_18px_rgba(255,181,71,0.25)]" style={{ animationDelay: `${index * 0.35}s` }}>
                  <span className="mb-1 mr-1 inline-block h-1.5 w-1.5 rounded-full bg-amber" />
                  {name}
                </div>
              ))}
            </div>
            <p className="relative mt-2 text-center text-xs font-semibold tracking-wide text-amber">Lead captured → Qualified → CRM updated → Follow-up sent</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LivingCall() {
  return (
    <section data-pin className="relative h-[150vh] lg:h-[250vh]" aria-label="The Living Call">
      <div className="sticky top-0 flex min-h-[100svh] items-center py-24">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">The living call</p>
            <h2 className="mt-4 text-3xl text-white md:text-5xl">Every call answered. Every lead captured.</h2>
            <p data-stage className="mt-4 text-pearl/80">It's 2 AM. A customer calls. Incoming call · 2:14 AM.</p>
            <p data-stage hidden className="mt-4 text-pearl/80">The agent books the slot, confirms by text, and stays on the line until it's done.</p>
            <p data-stage hidden className="mt-4 text-pearl/80">Calendar booked → CRM updated → SMS sent → Summary to Slack. Answered in 1 ring · 24/7.</p>
          </div>
          <div className="glass relative mx-auto w-full max-w-md rounded-[28px] p-5">
            <div className="mb-4 flex items-center justify-between text-xs text-mist">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[#e5787b]" /> Rec</span>
              <span>Answering call…</span>
            </div>
            <div className="space-y-3 text-sm">
              <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2">Hi, do you have anything open tomorrow?</p>
              <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-amber/15 px-3 py-2 text-amber-bright">Yes, I have 10:30 or 2:00. Which works better?</p>
              <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2">2 works.</p>
              <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-amber/15 px-3 py-2 text-amber-bright">Booked. You'll get a text confirmation now.</p>
            </div>
            <div className="mt-4 flex h-10 items-end justify-center gap-1" aria-hidden="true">
              {Array.from({ length: 13 }).map((_, index) => (
                <span key={index} className="w-1.5 origin-bottom rounded-full bg-amber" style={{ height: `${8 + ((index * 17) % 24)}px`, animation: `bar-grow 1.2s ${index * 0.05}s ease-in-out infinite alternate` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaGlow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="cta-card px-6 py-16 text-center md:px-16 md:py-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const dx = Math.max(30, Math.min(70, 50 + (x - 50) * 0.2));
        const dy = Math.max(25, Math.min(70, 40 + (y - 50) * 0.2));
        event.currentTarget.style.setProperty("--gx", `${dx}%`);
        event.currentTarget.style.setProperty("--gy", `${dy}%`);
      }}
    >
      <div className="cta-glow" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}
