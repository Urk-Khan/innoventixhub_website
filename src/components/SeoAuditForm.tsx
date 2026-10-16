"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

export default function SeoAuditForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unconfigured" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const website = String(data.get("website") || "").trim();
    const email = String(data.get("email") || "").trim();
    const goal = String(data.get("goal") || "").trim();
    if (!website || !email || !goal) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "seo-audit",
          name: "SEO audit request",
          email,
          company: website,
          message: `Free SEO audit request for ${website}. Main goal: ${goal}.`,
          service: "SEO",
          consent: true,
        }),
      });
      if (response.status === 503) setStatus("unconfigured");
      else if (!response.ok) setStatus("error");
      else {
        setStatus("sent");
        form.reset();
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p role="status" className="text-sm">Thanks, we've got it. A real person will reply within 1 business day.</p>;
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "flex flex-col gap-2 sm:flex-row sm:items-center" : "space-y-3"}>
      <label className={compact ? "block sm:flex-1" : "block text-sm"}>
        <span className={compact ? "sr-only" : ""}>Website URL</span>
        <input name="website" required placeholder="yourwebsite.com" aria-label="Website URL" className={`${compact ? "" : "mt-1"} w-full rounded-full border border-white/15 bg-ink/50 px-4 py-3`} />
      </label>
      {compact ? null : (
        <label className="block text-sm">
          Email
          <input name="email" type="email" required className="mt-1 w-full rounded-full border border-white/15 bg-ink/50 px-4 py-3" />
        </label>
      )}
      {compact ? <input name="email" type="email" required placeholder="Work email" aria-label="Email" className="w-full rounded-full border border-white/15 bg-ink/50 px-4 py-3 sm:max-w-56" /> : null}
      {compact ? null : (
        <label className="block text-sm">
          Main goal
          <select name="goal" required className="mt-1 w-full rounded-full border border-white/15 bg-ink/50 px-4 py-3" defaultValue="more leads">
            <option>more leads</option>
            <option>more sales</option>
            <option>local customers</option>
          </select>
        </label>
      )}
      {compact ? <input type="hidden" name="goal" value="more leads" /> : null}
      <button type="submit" className="rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get My Free SEO Audit"}
      </button>
      {compact ? null : <p className="text-xs text-mist/70">We only use your details to send your audit. <Link className="underline" href="/privacy">Privacy Policy</Link>.</p>}
      {status === "unconfigured" ? <p className="text-sm">This form is not connected to an inbox yet. Email <a className="text-amber underline" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.</p> : null}
      {status === "error" ? <p className="text-sm text-amber">Something went wrong. Email {site.emailGeneral}.</p> : null}
    </form>
  );
}
