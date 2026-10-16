"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

const services = [
  "Content Creation (UGC)",
  "AI Automation",
  "AI Voice Agents",
  "Web Development",
  "SEO",
  "Not sure yet",
];

const budgets = ["Under $2.5k", "$2.5k–$10k", "$10k+", "Not sure"];

type Status = "idle" | "sending" | "sent" | "unconfigured" | "error";

export default function EnquiryForm({ intent = "contact" }: { intent?: "contact" | "seo-audit" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website_confirm") || "").length > 0) return;
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");
    if (!name || !email || !message || !consent) {
      setError("Add your name, work email, message, and consent to continue.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          name,
          email,
          company: String(data.get("company") || ""),
          phone,
          service: String(data.get("service") || ""),
          budget: String(data.get("budget") || ""),
          message,
          consent: true,
          tcpa: Boolean(data.get("tcpa")),
        }),
      });
      if (response.status === 503) {
        setStatus("unconfigured");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="rounded-2xl bg-amber/15 p-4 text-sm" role="status">Thanks, we've got it. A real person will reply within 1 business day.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <input name="company_website_confirm" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <Field label="Name" name="name" required />
      <Field label="Work email" name="email" type="email" required />
      <Field label="Company / website" name="company" />
      <label className="block text-sm">
        Phone <span className="text-mist/60">(optional)</span>
        <input value={phone} onChange={(event) => setPhone(event.target.value)} name="phone" type="tel" className="mt-1 w-full rounded-xl border border-white/15 bg-ink/40 px-3 py-2" />
      </label>
      <label className="block text-sm">
        Service
        <select name="service" required className="mt-1 w-full rounded-xl border border-white/15 bg-ink/40 px-3 py-2" defaultValue="Content Creation (UGC)">
          {services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>
      <label className="block text-sm">
        Message
        <textarea name="message" required rows={4} placeholder="What are you working on?" className="mt-1 w-full rounded-xl border border-white/15 bg-ink/40 px-3 py-2" />
      </label>
      <label className="block text-sm">
        Budget <span className="text-mist/60">(optional)</span>
        <select name="budget" className="mt-1 w-full rounded-xl border border-white/15 bg-ink/40 px-3 py-2" defaultValue="">
          <option value="">Select</option>
          {budgets.map((budget) => <option key={budget}>{budget}</option>)}
        </select>
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>I agree to Innoventix Hub contacting me about my enquiry. See our <Link href="/privacy" className="text-amber underline">Privacy Policy</Link>.</span>
      </label>
      {phone.trim() ? (
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="tcpa" className="mt-1" />
          <span>I agree to receive calls and texts, including automated ones, at the number I provide. Consent isn't a condition of purchase.</span>
        </label>
      ) : null}
      {error ? <p className="text-sm text-amber" role="alert">{error}</p> : null}
      {status === "unconfigured" ? (
        <p className="text-sm text-cream/80" role="status">
          This form is not connected to an inbox yet. Email <a className="text-amber underline" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a> or book a call, and a real person will reply within 1 business day.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm text-amber" role="alert">Something went wrong. Email {site.emailGeneral} instead.</p> : null}
      <button type="submit" disabled={status === "sending"} className="rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink disabled:opacity-60">
        {status === "sending" ? "Sending…" : intent === "seo-audit" ? "Get My Free SEO Audit" : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      {label}{required ? " *" : ""}
      <input name={name} type={type} required={required} className="mt-1 w-full rounded-xl border border-white/15 bg-ink/40 px-3 py-2" />
    </label>
  );
}
