import Link from "next/link";
import { site } from "@/config/site";
import { testimonials } from "@/content/testimonials";
import { CtaGlow } from "@/components/visuals";

const brandLogos = [
  { name: "Climb", src: "/assets/logoclimbwhitemono-c71c6c53.png", width: 113, height: 30 },
  { name: "B", src: "/assets/logobwhitemono-d6509b3c.png", width: 32, height: 48 },
  { name: "Persist Brands", src: "/assets/logopersistbrandswhitemono-467bd0e5.png", width: 141, height: 42 },
  { name: "Image2work", src: "/assets/logoimage2workwhitemono-e3743e74.png", width: 131, height: 30 },
  { name: "Pete's Builders", src: "/assets/logopetesbuilderswhitemono-ed5ef66d.png", width: 106, height: 52 },
  { name: "Broomstick", src: "/assets/logobroomstickwhitemono-065306f6.png", width: 185, height: 24 },
];

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
  const logos = [...brandLogos, ...brandLogos];
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-navy pb-16 pt-12" aria-label={label}>
      <p className="mb-6 text-center text-xs font-semibold tracking-[1.92px] text-mist uppercase">{label}</p>
      <div className="marquee w-full min-w-0 overflow-hidden">
        <div className="marquee-track px-8">
          {logos.map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.src}
              alt={index < brandLogos.length ? logo.name : ""}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto opacity-70 md:h-10"
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
        <h2 className="mt-5 text-3xl text-white md:text-[44px] md:leading-[52px]">{title}</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
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

export function SectionIntro({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={`text-3xl text-white md:text-[44px] md:leading-[52px] ${eyebrow ? "mt-5" : ""}`}>{title}</h2>
      {copy ? <p className="mt-4 max-w-2xl text-[17px] leading-7 text-pearl/80">{copy}</p> : null}
    </div>
  );
}
