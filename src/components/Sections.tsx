import type { ReactNode } from "react";
import Link from "next/link";
import { clientLogos, site } from "@/config/site";
import { testimonials } from "@/content/testimonials";
import { CtaGlow } from "@/components/visuals";
import CaseSlider from "@/components/CaseSlider";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function BookButton({ children = "Book A Free Consultation", ghost = false }: { children?: React.ReactNode; ghost?: boolean }) {
  return (
    <a href={site.calendlyUrl} className={ghost ? "btn-secondary" : "btn-primary"}>
      {children}{ghost ? null : <span aria-hidden="true">→</span>}
    </a>
  );
}

export function VoiceButton({ children = "Talk to Inbound Agent", ghost = false }: { children?: React.ReactNode; ghost?: boolean }) {
  return (
    <a href={`tel:${site.voiceAgentTel}`} className={ghost ? "btn-secondary" : "btn-primary"}>
      {children}
    </a>
  );
}

export function WhatsAppButton({ children = "WhatsApp us" }: { children?: React.ReactNode }) {
  return (
    <a href={site.whatsappUrl} className="btn-secondary">{children}</a>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mist">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? <Link href={item.href} className="hover:text-white">{item.name}</Link> : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LogoMarquee({ label = "Brands we've worked with" }: { label?: string }) {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-navy pb-16 pt-12" aria-label={label} data-no-reveal>
      <p className="mb-6 text-center text-xs font-semibold tracking-[1.92px] text-mist uppercase">{label}</p>
      <div className="marquee w-full min-w-0 overflow-hidden">
        <ul className="marquee-track">
          {logos.map((logo, index) => {
            const dupe = index >= clientLogos.length;
            return (
              <li
                key={`${logo.slug}-${index}`}
                className="client-logo"
                style={{ width: logo.width, height: logo.height }}
                aria-hidden={dupe || undefined}
              >
                <img src={logo.src} alt={dupe ? "" : logo.name} width={logo.width} height={logo.height} />
                {logo.hoverColor ? <img className="client-logo-color" src={logo.colorSrc} alt="" width={logo.width} height={logo.height} /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials({ title = "Real words. Real results." }: { title?: string }) {
  return (
    <section className="section bg-navy-deep">
      <div className="wrap text-center">
        <p className="pill">What clients say</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">{title}</h2>
        <ul className="mt-10 grid gap-5 text-left md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="glass glass-card flex h-full flex-col rounded-[20px] p-6">
              <p className="tracking-[2px] text-amber" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-pearl">“{item.quote}”</blockquote>
              <footer className="mt-6">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-mist">{item.meta}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  copy,
  primary = "book",
  secondary = "voice",
}: {
  title: string;
  copy: string;
  primary?: "book" | "audit" | "voice";
  secondary?: "voice" | "whatsapp" | "book" | "none";
}) {
  return (
    <section className="section overflow-hidden pt-8">
      <div className="wrap min-w-0">
        <CtaGlow>
          <h2 className="text-4xl text-white md:text-[64px] md:leading-[1.05]">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mist">{copy}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primary === "book" ? <BookButton /> : null}
            {primary === "voice" ? <VoiceButton>{`Talk to Inbound Agent: ${site.voiceAgentDisplay}`}</VoiceButton> : null}
            {primary === "audit" ? <a href="#free-audit" className="inline-flex rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink">Get My Free SEO Audit</a> : null}
            {secondary === "voice" ? <VoiceButton ghost /> : null}
            {secondary === "whatsapp" ? <WhatsAppButton /> : null}
            {secondary === "book" ? <BookButton ghost /> : null}
          </div>
        </CtaGlow>
      </div>
    </section>
  );
}

export type CompareCell = "yes" | "no" | "partial" | "na" | string;

export function Comparison({
  title,
  subtitle,
  columns,
  rows,
}: {
  title: string;
  subtitle?: string;
  columns: string[];
  rows: { label: string; cells: CompareCell[] }[];
}) {
  return (
    <section className="section bg-navy-deep">
      <div className="wrap">
        <div className="text-center">
          <p className="pill">Why us</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">{title}</h2>
          {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-pearl/80">{subtitle}</p> : null}
        </div>
        <div className="mt-10 hidden overflow-hidden rounded-[24px] border border-white/10 md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-soft/80">
              <tr>
                <th className="p-4 font-bold"> </th>
                {columns.map((column, index) => (
                  <th key={column} className={`p-4 font-bold ${index === 0 ? "bg-amber/15 text-amber" : ""}`}>
                    {column}
                    {index === 0 ? <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold text-navy">Recommended</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <th className="p-4 font-medium">{row.label}</th>
                  {row.cells.map((cell, index) => (
                    <td key={`${row.label}-${index}`} className={`p-4 ${index === 0 ? "bg-amber/10" : ""}`}>
                      <Mark value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:hidden">
          {columns.map((column, columnIndex) => (
            <article key={column} className={`rounded-3xl p-5 ${columnIndex === 0 ? "glass-strong" : "glass"}`}>
              <h3 className="font-bold">{column}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-start justify-between gap-3">
                    <span>{row.label}</span>
                    <Mark value={row.cells[columnIndex]} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mark({ value }: { value: CompareCell }) {
  if (value === "yes") return <span className="font-bold text-amber" aria-label="Yes">✓</span>;
  if (value === "no") return <span className="text-mist/50" aria-label="No">✗</span>;
  if (value === "partial") return <span className="text-mist">Partial</span>;
  if (value === "na") return <span className="text-mist">n/a</span>;
  return <span>{value}</span>;
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="faq glass glass-card group rounded-[18px] px-5 py-4">
          <summary className="cursor-pointer font-bold text-white">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full border border-white/15 text-amber transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <div className="faq-body">
            <div>
              <p className="max-w-3xl pb-2 pt-3 text-[15px] leading-7 text-pearl/85">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

export function SectionIntro({ eyebrow, title, copy, align = "center" }: { eyebrow?: string; title: string; copy?: string; align?: "center" | "left" }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? <p className="pill">{eyebrow}</p> : null}
      <h2 className={`text-3xl text-white md:text-[44px] md:leading-[52px] ${eyebrow ? "mt-6" : ""}`}>{title}</h2>
      {copy ? <p className={`mt-4 max-w-2xl text-[17px] leading-7 text-pearl/80 ${center ? "mx-auto" : ""}`}>{copy}</p> : null}
    </div>
  );
}

export function CardGrid({
  eyebrow,
  title,
  copy,
  items,
  columns = 3,
  tone = "navy",
  id,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  items: { icon?: string; title: string; body: string; badge?: string; href?: string; link?: string }[];
  columns?: 2 | 3 | 6;
  tone?: "navy" | "deep";
  id?: string;
}) {
  const cols = columns === 6 ? "sm:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <section id={id} className={`section scroll-mt-28 ${tone === "deep" ? "bg-navy-deep" : ""}`}>
      <div className="wrap">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
        <ul className={`mt-12 grid gap-5 text-left ${cols}`}>
          {items.map((item) => (
            <li key={item.title} id={item.href?.startsWith("#") ? item.href.slice(1) : undefined} className="glass glass-card scroll-mt-28 rounded-[20px] p-6">
              <span className="grid size-12 place-items-center rounded-[14px] border border-amber/40 bg-amber/15 text-xl text-amber">{item.icon || "◎"}</span>
              {item.badge ? <p className="mt-4 text-xs font-bold tracking-wide text-amber">{item.badge}</p> : null}
              <h3 className="mt-4 text-[18px] font-bold text-white">{item.title}</h3>
              {item.body ? <p className="mt-2 text-[14px] leading-6 text-mist">{item.body}</p> : null}
              {item.href && item.link ? <a href={item.href} className="mt-4 inline-block text-sm font-bold text-amber">{item.link} →</a> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ToolGrid({ eyebrow, title, copy, tools }: { eyebrow: string; title: string; copy?: string; tools: string[] }) {
  return (
    <section className="section bg-navy-deep">
      <div className="wrap text-center">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <li key={tool} className="glass flex h-[88px] items-center justify-center rounded-[18px] px-3 text-center text-sm font-bold text-white">{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CaseRail({ eyebrow, title, copy, tags }: { eyebrow: string; title: string; copy?: string; tags: string[] }) {
  return (
    <section className="section overflow-hidden">
      <div className="wrap">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
      </div>
      <CaseSlider tags={tags} />
    </section>
  );
}

export function OfferGrid({
  eyebrow,
  title,
  copy,
  offers,
  note,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  offers: { name: string; blurb: string; price: string; unit: string; items: string[]; featured?: boolean }[];
  note?: ReactNode;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} />
        <ul className="mt-12 grid gap-5 text-left lg:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer.name} className={`glass glass-card rounded-[24px] p-6 ${offer.featured ? "border-amber/70 shadow-[0_0_40px_rgba(255,181,71,0.2)]" : ""}`}>
              {offer.featured ? <p className="text-xs font-bold tracking-wide text-amber">Most teams start here</p> : <span className="block h-4" />}
              <h3 className="mt-3 text-xl font-bold text-white">{offer.name}</h3>
              <p className="mt-1 text-sm text-pearl/75">{offer.blurb}</p>
              <p className="mt-5 text-4xl font-bold text-white">{offer.price}<span className="text-base font-medium text-mist">{offer.unit}</span></p>
              <ul className="mt-5 space-y-2 text-sm text-pearl/85">{offer.items.map((item) => <li key={item}>✓ {item}</li>)}</ul>
              <div className="mt-6"><BookButton /></div>
            </li>
          ))}
        </ul>
        {note}
      </div>
    </section>
  );
}

export function PromiseStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-white/[0.08] bg-navy py-7">
      <ul className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="flex items-center justify-center gap-2 text-center text-sm font-bold text-white">
            <span className="text-amber" aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StepRail({
  eyebrow = "Our process",
  title,
  note,
  steps,
}: {
  eyebrow?: string;
  title: string;
  note?: string;
  steps: { label: string; body?: string }[];
}) {
  const cols = steps.length > 4 ? "lg:grid-cols-6" : "lg:grid-cols-4";
  return (
    <section className="section">
      <div className="wrap">
        <SectionIntro eyebrow={eyebrow} title={title} />
        <ol className={`relative mt-14 grid gap-8 md:grid-cols-2 ${cols}`}>
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-white/15 lg:block" aria-hidden="true" />
          <div className="bar-fill pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px origin-left bg-amber lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.label} className="relative text-center">
              <span className="relative z-10 mx-auto grid size-10 place-items-center rounded-full border border-amber bg-navy text-sm font-bold text-amber shadow-[0_0_18px_rgba(255,181,71,0.35)]">{index + 1}</span>
              <h3 className="mt-4 text-sm font-bold text-white">{step.label}</h3>
              {step.body ? <p className="mt-2 text-xs leading-5 text-mist">{step.body}</p> : null}
            </li>
          ))}
        </ol>
        {note ? <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-mist">{note}</p> : null}
      </div>
    </section>
  );
}

export function QuoteSplit({
  eyebrow,
  title,
  copy,
  includesTitle,
  includes,
  sideEyebrow,
  sideTitle,
  sideBody,
  sideNotes,
  extra,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  includesTitle: string;
  includes: string[];
  sideEyebrow?: string;
  sideTitle: string;
  sideBody: string;
  sideNotes?: string[];
  extra?: ReactNode;
}) {
  return (
    <section className="section">
      <div className="wrap grid items-start gap-6 lg:grid-cols-2">
        <article className="glass rounded-[24px] p-7 text-left">
          <p className="pill">{eyebrow}</p>
          <h2 className="mt-6 text-3xl text-white md:text-[40px] md:leading-[48px]">{title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-pearl/80">{copy}</p>
          <h3 className="mt-6 font-bold text-white">{includesTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm text-pearl/85">{includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
          <div className="mt-6"><BookButton /></div>
        </article>
        <article className="glass-strong rounded-[24px] border-amber/30 p-7 text-left">
          {sideEyebrow ? <p className="text-xs font-bold tracking-[1.6px] text-amber uppercase">{sideEyebrow}</p> : null}
          <h3 className="mt-3 text-2xl font-bold text-white">{sideTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-pearl/85">{sideBody}</p>
          {sideNotes ? <ul className="mt-4 space-y-2 text-sm text-pearl/75">{sideNotes.map((note) => <li key={note}>· {note}</li>)}</ul> : null}
          {extra}
        </article>
      </div>
    </section>
  );
}

export function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="section bg-navy-deep">
      <div className="wrap">
        <SectionIntro eyebrow="FAQ" title="Questions, answered." />
        <div className="mx-auto mt-10 max-w-3xl text-left"><FaqList items={items} /></div>
      </div>
    </section>
  );
}
