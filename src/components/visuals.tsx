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

const nodeArt = [
  { icon: "/assets/nodecontent-b074dbce.svg", halo: "/assets/nodehalocontent-b683a965.svg" },
  { icon: "/assets/nodeautomation-6a606aff.svg", halo: "/assets/nodehaloautomation-e0b2c692.svg" },
  { icon: "/assets/nodevoice-b254a067.svg", halo: "/assets/nodehalovoice-000093b4.svg" },
  { icon: "/assets/nodeweb-db7784ed.svg", halo: "/assets/nodehaloweb-43d429c3.svg" },
  { icon: "/assets/nodeseo-905fb957.svg", halo: "/assets/nodehaloseo-efae0018.svg" },
];

export function CommandCenter() {
  const [active, setActive] = useState<number | null>(null);
  const radius = 268;

  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[1100px] sm:h-[620px] lg:h-[760px]" aria-label="Five services around the Innoventix hub">
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[1100px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.34] sm:scale-[0.56] lg:scale-100">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,181,71,0.28),transparent_68%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/orbitring300-4cf18727.png" alt="" className="orbit-spin h-full w-full max-w-none opacity-80" />
        </div>
        <img src="/assets/orbitring180-830ed194.png" alt="" className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 760" aria-hidden="true">
          {nodes.map((_, index) => {
            const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = 550 + Math.cos(angle) * radius;
            const y = 380 + Math.sin(angle) * radius;
            return <line key={index} x1="550" y1="380" x2={x} y2={y} stroke="rgba(255,181,71,0.45)" strokeWidth="1.5" />;
          })}
        </svg>
        <div className="absolute left-1/2 top-1/2 z-20 flex h-[148px] w-[148px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-amber/60 bg-navy text-center shadow-[0_0_80px_rgba(255,181,71,0.45)]">
          <span className="text-xs font-bold tracking-[0.22em] text-amber">INNOVENTIX</span>
          <span className="mt-1 text-lg font-bold tracking-[0.18em] text-white">HUB</span>
        </div>
        {nodes.map((node, index) => {
          const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const dim = active !== null && active !== index;
          return (
            <div key={node.label} className="absolute z-10" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
              <div className="-translate-x-1/2 -translate-y-1/2">
                <Link
                  href={node.href}
                  className="glass glass-card relative flex w-[190px] items-center gap-3 rounded-2xl px-3 py-3 text-left"
                  style={{ opacity: dim ? 0.35 : 1, borderColor: active === index ? node.color : undefined, boxShadow: `0 0 28px ${node.color}55` }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                >
                  <span className="relative grid size-12 shrink-0 place-items-center">
                    <img src={nodeArt[index].halo} alt="" className="node-glow absolute inset-0 h-full w-full" style={{ animationDelay: `${index * 0.8}s` }} />
                    <img src={nodeArt[index].icon} alt="" className="relative h-8 w-8" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold" style={{ color: node.color }}>{node.label}</span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-mist">{node.detail}</span>
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
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
      className="cta-card flex min-h-[460px] items-center px-6 py-20 text-center md:min-h-[560px] md:px-16 md:py-28"
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
      <div className="relative w-full">{children}</div>
    </div>
  );
}
