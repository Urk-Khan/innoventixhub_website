import Link from "next/link";
import { clientLogos, site } from "@/config/site";
import { testimonials } from "@/content/testimonials";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function BookButton({ children = "Book A Free Consultation", ghost = false }: { children?: React.ReactNode; ghost?: boolean }) {
  const className = ghost
    ? "inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-cream hover:border-amber hover:text-amber"
    : "inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink hover:bg-[#ffc56a]";
  return (
    <a href={site.calendlyUrl} className={className}>
      {children}
    </a>
  );
}

export function VoiceButton({ children = "Talk to Inbound Agent", ghost = false }: { children?: React.ReactNode; ghost?: boolean }) {
  const className = ghost
    ? "inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-cream hover:border-amber hover:text-amber"
    : "inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink hover:bg-[#ffc56a]";
  return (
    <a href={`tel:${site.voiceAgentTel}`} className={className}>
      {children}
    </a>
  );
}

export function WhatsAppButton({ children = "WhatsApp us" }: { children?: React.ReactNode }) {
  return (
    <a href={site.whatsappUrl} className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-cream hover:border-amber hover:text-amber">
      {children}
    </a>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mist/80">
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
    <section className="overflow-hidden border-y border-white/10 py-8" aria-label={label}>
      <p className="wrap mb-5 text-center text-xs font-bold tracking-[0.16em] text-mist/70 uppercase">{label}</p>
      <div className="marquee w-full min-w-0 overflow-hidden">
        <div className="marquee-track items-center px-8">
          {logos.map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.src}
              alt={index < clientLogos.length ? logo.name : ""}
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ title = "Real words. Real results." }: { title?: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="mt-4 text-3xl font-black md:text-4xl">{title}</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="glass flex h-full flex-col rounded-3xl p-6">
              <p className="text-amber" aria-label="5 out of 5 stars">★★★★★</p>
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-cream/90">“{item.quote}”</blockquote>
              <footer className="mt-6">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-mist/70">{item.meta}</p>
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
    <section className="section overflow-hidden pt-0">
      <div className="wrap min-w-0">
        <div className="relative w-full min-w-0 max-w-full overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-amber/20 blur-3xl" />
          <h2 className="relative text-3xl font-black md:text-5xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-cream/80">{copy}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {primary === "book" ? <BookButton /> : null}
            {primary === "voice" ? <VoiceButton>{`Talk to Inbound Agent: ${site.voiceAgentDisplay}`}</VoiceButton> : null}
            {primary === "audit" ? <a href="#free-audit" className="inline-flex rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink">Get My Free SEO Audit</a> : null}
            {secondary === "voice" ? <VoiceButton ghost /> : null}
            {secondary === "whatsapp" ? <WhatsAppButton /> : null}
            {secondary === "book" ? <BookButton ghost /> : null}
          </div>
        </div>
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
    <section className="section">
      <div className="wrap">
        <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-cream/75">{subtitle}</p> : null}
        <div className="mt-8 hidden overflow-hidden rounded-3xl border border-white/10 md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy-soft/60">
              <tr>
                <th className="p-4 font-bold"> </th>
                {columns.map((column, index) => (
                  <th key={column} className={`p-4 font-bold ${index === 0 ? "text-amber" : ""}`}>
                    {column}
                    {index === 0 ? <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold text-ink">Recommended</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <th className="p-4 font-medium">{row.label}</th>
                  {row.cells.map((cell, index) => (
                    <td key={`${row.label}-${index}`} className={`p-4 ${index === 0 ? "bg-navy/40" : ""}`}>
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
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10">
      {items.map((item) => (
        <details key={item.q} className="group p-5">
          <summary className="cursor-pointer list-none font-bold marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span aria-hidden="true" className="text-amber group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-cream/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function SectionIntro({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={`text-3xl font-black md:text-4xl ${eyebrow ? "mt-4" : ""}`}>{title}</h2>
      {copy ? <p className="mt-3 text-cream/75">{copy}</p> : null}
    </div>
  );
}
