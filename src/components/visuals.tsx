"use client";

export { default as CommandCenter } from "./HomeOrbit";

const flowNodes = [
  { name: "Lead form", from: 0, x: "8%", y: "16%" },
  { name: "Router", from: 0.22, x: "38%", y: "16%" },
  { name: "OpenAI", from: 0.36, x: "68%", y: "16%" },
  { name: "HubSpot", from: 0.5, x: "22%", y: "58%" },
  { name: "GoHighLevel", from: 0.64, x: "52%", y: "58%" },
  { name: "Slack", from: 0.78, x: "74%", y: "40%" },
];

const flowPills = [
  { label: "Lead captured", from: 0.2 },
  { label: "Qualified", from: 0.4 },
  { label: "CRM updated", from: 0.6 },
  { label: "Follow-up sent", from: 0.8 },
];

export function WorkflowAssembly() {
  return (
    <section data-pin className="relative" aria-label="The Workflow Assembly">
      <div data-pin-target className="flex min-h-[100svh] items-center overflow-hidden py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2 className="mt-4 text-3xl text-white md:text-5xl">The Workflow Assembly</h2>
            <p className="mt-6 text-lg text-pearl/90">Your tools sit apart until the workflow connects them. Leads are captured, qualified, written to the CRM and followed up while it runs.</p>
            <p data-running className="mt-6 text-sm font-bold tracking-wide text-amber">Running 0/6</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {flowPills.map((pill) => (
                <li key={pill.label} data-from={pill.from} className="rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs font-bold text-amber">{pill.label}</li>
              ))}
            </ul>
          </div>
          <div className="glass relative h-[420px] overflow-hidden rounded-[28px]">
            <svg viewBox="0 0 640 420" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path className="wire-draw" pathLength="1" d="M90 90 H270 V250 H430" fill="none" stroke="#5df0a8" strokeWidth="2" />
              <path className="wire-draw" pathLength="1" d="M270 90 H470 V180 H560" fill="none" stroke="#8ff7c4" strokeWidth="2" />
              <circle className="wire-pulse" r="5" fill="#5df0a8">
                <animateMotion dur="4s" repeatCount="indefinite" path="M90 90 H270 V250 H430" />
              </circle>
            </svg>
            {flowNodes.map((node) => (
              <div
                key={node.name}
                data-flow-node
                data-from={node.from}
                className="absolute w-[28%] rounded-2xl border border-white/15 bg-[rgba(19,42,69,0.88)] px-3 py-3 text-center text-xs font-bold text-white"
                style={{ left: node.x, top: node.y }}
              >
                <span className="mb-1 mr-1 inline-block size-1.5 rounded-full bg-amber" />
                {node.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const bubbles = [
  { text: "Hi, do you have anything open tomorrow?", from: 0.42, mine: true },
  { text: "Yes — 10:30 or 2:00. Which works better?", from: 0.52, mine: false },
  { text: "2 works.", from: 0.64, mine: true },
  { text: "Booked. You'll get a text confirmation now.", from: 0.74, mine: false },
];

const callChips = [
  { label: "Calendar booked", from: 0.58 },
  { label: "CRM updated", from: 0.68 },
  { label: "SMS sent", from: 0.78 },
  { label: "Summary to Slack", from: 0.88 },
];

export function LivingCall() {
  return (
    <section data-pin className="relative" aria-label="The Living Call">
      <div data-pin-target className="flex min-h-[100svh] items-center overflow-hidden py-24">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">The living call</p>
            <h2 className="mt-4 text-3xl text-white md:text-5xl">Every call answered. Every lead captured.</h2>
            <p className="mt-4 text-pearl/80">It&apos;s 2 AM. A customer calls. The agent answers, books the slot, and sends the summary on.</p>
            <ul className="mt-6 space-y-2 text-sm font-bold text-amber">
              <li data-from="0" data-to="0.28">Answering call…</li>
              <li data-from="0.28" data-to="0.55">Booking appointment…</li>
              <li data-from="0.55">Calling new lead…</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div data-from="0.16" className="ripple pointer-events-none absolute left-1/2 top-8 ml-[-5rem] size-40 rounded-full border border-amber/50" />
            <div data-from="0.2" className="ripple pointer-events-none absolute left-1/2 top-8 ml-[-5rem] size-40 rounded-full border border-amber/40" style={{ animationDelay: "0.4s" }} />
            <div data-from="0.24" className="ripple pointer-events-none absolute left-1/2 top-8 ml-[-5rem] size-40 rounded-full border border-amber/30" style={{ animationDelay: "0.8s" }} />
            <div className="glass relative rounded-[28px] p-5">
              <div className="mb-4 flex items-center justify-between text-xs text-mist">
                <span data-from="0.05" className="rec-dot inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#e5787b]" /> Rec
                </span>
                <span data-from="0" data-to="0.3" className="rounded-full border border-white/15 px-3 py-1">Incoming · 2:14 AM</span>
                <button type="button" data-from="0.12" data-to="0.34" className="accept rounded-full bg-amber px-3 py-1 font-bold text-navy">Accept</button>
              </div>
              <div data-from="0.3" className="orb mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[radial-gradient(circle,#8ff7c4,#5df0a8_55%,transparent_70%)] shadow-[0_0_30px_rgba(93, 240, 168,0.55)]" />
              <div className="space-y-3 text-sm">
                {bubbles.map((bubble) => (
                  <p
                    key={bubble.text}
                    data-from={bubble.from}
                    className={`max-w-[80%] rounded-2xl px-3 py-2 ${bubble.mine ? "ml-auto rounded-br-md bg-white/10" : "rounded-bl-md bg-amber/15 text-amber-bright"}`}
                  >
                    {bubble.text}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex h-12 items-end justify-center gap-1" aria-hidden="true">
                {Array.from({ length: 13 }).map((_, index) => (
                  <span
                    key={index}
                    data-wave
                    data-from="0.34"
                    className="w-1.5 origin-bottom rounded-full bg-amber"
                    style={{ height: `${10 + ((index * 17) % 28)}px`, animationDelay: `${index * 0.05}s` }}
                  />
                ))}
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {callChips.map((chip) => (
                <li key={chip.label} data-from={chip.from} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-white">{chip.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaGlow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="cta-card flex min-h-[340px] items-center px-6 py-12 text-center md:min-h-[560px] md:px-16 md:py-28"
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
