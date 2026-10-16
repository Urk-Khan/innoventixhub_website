"use client";

import { useState } from "react";
import { site } from "@/config/site";

const plans = [
  { name: "Starter", monthly: 49, minutes: "200", agents: "2 AI agents", kb: "2" },
  { name: "Pro", monthly: 98, minutes: "400", agents: "10 AI agents", kb: "10" },
  { name: "Business", monthly: 147, minutes: "600", agents: "Unlimited", kb: "100" },
  { name: "Agency", monthly: 295, minutes: "1,000", agents: "Unlimited", kb: "Unlimited" },
];

function money(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: value % 1 === 0 ? 0 : 2 });
}

export default function VoicePricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-white/15 p-1" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={!yearly} className={`rounded-full px-4 py-2 text-sm font-bold ${!yearly ? "bg-amber text-ink" : ""}`} onClick={() => setYearly(false)}>
            Monthly
          </button>
          <button type="button" aria-pressed={yearly} className={`rounded-full px-4 py-2 text-sm font-bold ${yearly ? "bg-amber text-ink" : ""}`} onClick={() => setYearly(true)}>
            Yearly · Save 20%
          </button>
        </div>
        <p className="text-sm text-mist/80">Free setup on every plan. We build your script, voice and integrations at no extra cost.</p>
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const price = yearly ? Math.round(plan.monthly * 0.8 * 100) / 100 : plan.monthly;
          const annual = Math.round(plan.monthly * 0.8 * 12 * 100) / 100;
          return (
            <li key={plan.name} className="glass flex flex-col rounded-3xl p-5">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              {yearly ? <p className="mt-3 text-sm text-mist/60 line-through">{money(plan.monthly)}/mo</p> : null}
              <p className="mt-1 text-3xl font-black">{money(price)}<span className="text-base font-medium text-mist">/mo</span></p>
              <p className="text-sm text-mist/75">{yearly ? `Billed yearly (${money(annual)}/yr)` : "Billed monthly"}</p>
              <p className="mt-4 text-sm font-bold text-amber">FREE SETUP included</p>
              <ul className="mt-3 space-y-1 text-sm text-cream/85">
                <li>Minutes / month {plan.minutes}</li>
                <li>AI agents {plan.agents}</li>
                <li>Knowledge Base Upload {plan.kb}</li>
              </ul>
              <a href={site.calendlyUrl} className="mt-6 inline-flex justify-center rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink">Get Started</a>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-mist/70">
        {yearly
          ? "Yearly prices shown per month, billed annually (monthly prices struck through). Yearly = flat 20% off. Prices in USD."
          : "Monthly prices shown. Switch to Yearly to save 20% (billed annually). Prices in USD."}
      </p>
      <article className="glass-strong mt-6 rounded-3xl p-6">
        <p className="text-xs font-bold tracking-[0.14em] text-amber">ENTERPRISE-GRADE</p>
        <h3 className="mt-2 text-2xl font-black">Custom pricing</h3>
        <p className="mt-2 max-w-2xl text-sm text-cream/80">For high-volume teams that need bulk outbound calling, their own branding and dedicated infrastructure. We scope it with you and quote to your volume.</p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          {["Bulk outbound calling", "White-label (your brand, your domain)", "Custom integrations and APIs", "Dedicated infrastructure", "SLA with uptime and response commitments", "Dedicated success manager"].map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
        <a href={site.calendlyUrl} className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-bold">Talk to us</a>
      </article>
    </div>
  );
}
