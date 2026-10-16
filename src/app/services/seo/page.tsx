import JsonLd from "@/components/JsonLd";
import SeoAuditForm from "@/components/SeoAuditForm";
import { BookButton, Breadcrumbs, Comparison, FaqSection, LogoMarquee, PromiseStrip, QuoteSplit, StepRail, Testimonials, WhatsAppButton } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "SEO Agency for D2C Brands & SMBs | Free SEO Audit | Innoventix Hub",
  description: "White-hat SEO for D2C brands and SMBs in the US, UK and EU. Free SEO audit reviewed by a real specialist, fixed monthly proposal, no long contracts.",
  path: "/services/seo",
});

const faqs = [
  { q: "How long does SEO take to work?", a: "Most sites see early improvements in 3–6 months. Competitive keywords take longer. Technical fixes often help sooner, and every monthly report shows progress." },
  { q: "Do you guarantee first-page rankings?", a: "No. Nobody controls Google, and guarantees usually mean guessing or risky tactics. We guarantee the work, white-hat methods and full transparency." },
  { q: "How much does SEO cost?", a: "It depends on your site, competition and goals. After a free audit we send a fixed monthly proposal, so you know exactly what you'll pay and get." },
  { q: "What's in the free SEO audit?", a: "A specialist checks speed, indexing, meta tags, schema, internal links, backlinks, your Google Business Profile and AI-answer readiness, then sends the top fixes in plain English within 2 business days." },
  { q: "Is there a contract?", a: "The first term is 3 months, because SEO needs time to show results. After that it's month-to-month with 30 days' notice." },
  { q: "Is your link building safe?", a: "Yes. We earn links through outreach, digital PR and useful content. We never buy links or use private blog networks." },
  { q: "What is AI search optimisation (AEO/GEO)?", a: "Making your brand easy for Google AI Overviews, ChatGPT and Gemini to understand and cite, through structured answers, schema, entity work and brand mentions. We can't promise citations, but we make you a stronger candidate." },
  { q: "Do you do local SEO for multiple locations?", a: "Yes: each Google Business Profile, citations, reviews and location pages." },
  { q: "Can you do SEO for Shopify or WooCommerce?", a: "Yes. We optimise categories and products, fix duplicate content and faceted navigation, and add product schema for rich results." },
  { q: "Do you write content?", a: "Yes, as an add-on. We include content briefs in every plan; full SEO writing is quoted separately." },
  { q: "What will I see each month?", a: "A plain-English report with traffic, rankings, leads, work done and next month's plan, plus a call." },
  { q: "Do you work with businesses in the UK and EU?", a: "Yes. We work with brands in the US, UK and EU in their business hours, with GDPR-friendly handling of your data." },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "SEO", path: "/services/seo" },
];

export default function SeoPage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        breadcrumbSchema(crumbs),
        serviceSchema({
          name: "SEO",
          serviceType: "SEO agency",
          description: "White-hat technical, on-page, off-page, local, e-commerce and AI-search SEO.",
          path: "/services/seo",
          catalog: [
            { name: "Technical SEO", description: "Speed, crawl, index, schema and migrations." },
            { name: "On-page SEO", description: "Keyword mapping, titles, headings and content briefs." },
            { name: "Off-page & link building", description: "Earned links through outreach and digital PR." },
            { name: "Local SEO", description: "Google Business Profile, citations and location pages." },
            { name: "E-commerce SEO", description: "Category, product and Shopify or WooCommerce fixes." },
            { name: "AI search visibility", description: "Structured answers so you are a stronger candidate to be cited." },
          ],
        }),
        faqSchema(faqs),
        {
          "@type": "Person",
          name: "Lead SEO specialist",
          jobTitle: "SEO specialist",
          worksFor: { "@id": "https://innoventixhub.tech/#organization" },
          description: "A named specialist is assigned to each account. Credentials are added when confirmed.",
        },
      )} />
      <section className="hero-stage bg-navy">
        <img src="/assets/glowgold-ef5c9281.svg" alt="" className="glow-gold" />
        <div className="relative z-10 px-5 pb-16 pt-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
            <p className="eyebrow mt-6">SEO · Technical · Local · E-commerce · AI search</p>
            <h1 className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Get Found on Google and in AI Answers.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">White-hat SEO for D2C brands and SMBs in the US, UK & EU. We fix what&apos;s holding your site back, build real authority and report every month.</p>
            <div className="mt-6 w-full max-w-xl"><SeoAuditForm compact /></div>
            <p className="mt-3 text-xs text-mist/70">Reviewed by a real SEO specialist. Reply within 2 business days. No obligation.</p>
            <div className="mt-4"><BookButton ghost /></div>
          </div>
          <div data-loop className="serp-list glass mx-auto mt-12 max-w-[520px] rounded-3xl p-6 text-left text-sm">
            <p className="text-xs text-mist/70">Illustrative example</p>
            <p className="mt-3 font-bold">best organic skincare uk</p>
            <p className="mt-4 rounded-xl bg-amber/15 p-3">AI answer cites yourbrand.com</p>
            <ol className="relative mt-4 h-28">
              <li className="you absolute inset-x-0 top-0 rounded-xl bg-amber/15 px-3 py-2 font-bold text-amber">yourbrand.com <span className="top3">· Top 3</span></li>
              <li className="absolute inset-x-0 top-10 text-mist">competitor.com</li>
              <li className="absolute inset-x-0 top-16 text-mist">another.com</li>
            </ol>
          </div>
        </div>
      </section>
      <PromiseStrip items={["Dedicated SEO specialist", "White-hat only", "No long lock-in", "Monthly report + call"]} />
      <LogoMarquee />
      <section id="free-audit" className="section scroll-mt-28">
        <div className="wrap grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="pill">Free audit</p>
            <h2 className="mt-6 text-3xl text-white md:text-[44px] md:leading-[52px]">What&apos;s holding your site back?</h2>
            <ul className="mt-8 space-y-4">
              {[
                ["Invisible on Google", "Technical clean-up so pages can be crawled and indexed."],
                ["Wrong traffic", "Keyword and intent mapping so the right people find you."],
                ["Losing to competitors and AI answers", "Authority plus AI-search work."],
              ].map(([title, body]) => (
                <li key={title} className="glass rounded-[18px] p-4">
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm text-pearl/75">{body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6"><SeoAuditForm /></div>
          </div>
          <article data-loop className="scan-card glass rounded-[24px] p-6">
            <p className="text-xs font-bold tracking-[1.6px] text-amber uppercase">What we check</p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {["Page speed & Core Web Vitals", "Indexing & crawl errors", "Titles & meta descriptions", "Schema markup", "Internal links", "Backlink profile", "Google Business Profile", "AI-answer readiness"].map((item) => <li key={item} className="rounded-xl border border-white/10 px-3 py-2">✓ {item}</li>)}
            </ul>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="scan-bar h-full origin-left bg-amber" /></div>
            <p className="report-ready mt-3 text-sm font-bold text-[#5bd49a]">Report ready · top fixes in plain English</p>
            <p className="mt-2 text-xs text-mist">Illustrative. A specialist replies within 2 business days.</p>
          </article>
        </div>
      </section>
      <section className="section bg-navy-deep">
        <div className="wrap text-center">
          <p className="pill">Services</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px] md:leading-[52px]">Everything search, in one plan</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["technical-seo", "Technical SEO", "Speed, Core Web Vitals, crawl and index fixes, schema, sitemaps, migrations.", "Speed · crawl · schema"],
              ["on-page", "On-page SEO", "Keyword mapping, titles, headings, internal links and content briefs. Writing is quoted as an add-on.", "Titles · headings · briefs"],
              ["link-building", "Off-page & link building", "Earned links through outreach and digital PR. No paid link schemes.", "Outreach · digital PR"],
              ["local-seo", "Local SEO", "Google Business Profile, citations, reviews and location pages.", "GBP · citations · reviews"],
              ["ecommerce-seo", "E-commerce SEO", "Category and product pages, product schema, faceted navigation, Shopify and WooCommerce fixes.", "Products · schema"],
              ["ai-search", "AI search visibility", "Structured answers, schema, entity work and brand mentions so you are a stronger candidate to be cited.", "AEO · GEO"],
            ].map(([id, title, body, chip]) => (
              <li key={id} id={id} className="glass glass-card scroll-mt-28 overflow-hidden rounded-[22px] text-left">
                <div className="grid h-28 place-items-center border-b border-white/10 bg-[#0f2138] text-xs font-bold tracking-wide text-amber">{chip}</div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-pearl/75">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <StepRail
        title="How we grow your search traffic"
        note="Most sites see early improvements in 3–6 months. Competitive keywords take longer."
        steps={[
          { label: "Audit", body: "Weeks 1–2. Technical, content and competitor review." },
          { label: "Fix", body: "Month 1. Speed, indexation, titles and internal links." },
          { label: "Grow authority", body: "Months 2–3+. Earned links and useful pages." },
          { label: "Report & refine", body: "Every month. Numbers, work done, next plan." },
        ]}
      />
      <section className="section bg-navy-deep">
        <div className="wrap text-center">
          <p className="pill">Proof</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px] md:leading-[52px]">What you&apos;ll see</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article data-loop className="serp-list glass rounded-[22px] p-6 text-left text-sm">
              <p className="text-xs font-bold tracking-wide text-mist">Illustrative SERP</p>
              <p className="mt-4 font-bold text-white">best organic skincare uk</p>
              <ol className="relative mt-4 h-24">
                <li className="you absolute inset-x-0 top-0 rounded-xl bg-amber/15 px-3 py-2 font-bold text-amber">yourbrand.com <span className="top3">· Top 3</span></li>
                <li className="absolute inset-x-0 top-12 rounded-xl bg-white/5 px-3 py-2 text-mist">competitor.com</li>
              </ol>
            </article>
            <article className="glass rounded-[22px] p-6 text-left text-sm">
              <p className="text-xs font-bold tracking-wide text-amber">SAMPLE DATA</p>
              <h3 className="mt-3 text-lg font-bold text-white">Monthly report preview</h3>
              <ul className="mt-4 space-y-3">
                {[["Clicks", "72%"], ["Impressions", "84%"], ["Top keywords", "58%"]].map(([label, width]) => (
                  <li key={label}>
                    <div className="mb-1 flex justify-between text-xs text-mist"><span>{label}</span><span>SAMPLE</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="bar-fill h-full bg-amber" style={{ width }} /></div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-pearl/75">Work done this month, and the plan for next month, on a call.</p>
            </article>
          </div>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {["Traffic", "Rankings", "Leads"].map((label) => (
              <li key={label} className="rounded-[20px] border border-dashed border-white/20 p-5 text-left text-sm text-pearl/80">
                <span className="text-xs font-bold text-amber">SAMPLE</span>
                <p className="mt-2 font-bold text-white">[Client result coming soon]</p>
                <p className="mt-1">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[280px_1fr]">
          <article className="glass rounded-[24px] p-6 text-center">
            <div className="mx-auto grid size-24 place-items-center rounded-full bg-gradient-to-br from-amber to-navy text-lg font-bold text-navy" aria-hidden="true">SEO</div>
            <h2 className="mt-4 text-2xl font-bold text-white">Who does your SEO</h2>
            <p className="mt-2 text-sm text-pearl/75">A named lead specialist is assigned to your account. Photo and LinkedIn are added when confirmed.</p>
          </article>
          <div>
            <h3 className="text-xl font-bold text-white">How we work</h3>
            <p className="mt-3 max-w-2xl text-pearl/80">Google Search Essentials-aligned, white-hat only, every change logged, and you keep all accounts and data.</p>
            <ul className="mt-5 flex flex-wrap gap-2">{["Google Search Console", "GA4", "Ahrefs", "Semrush", "Screaming Frog"].map((tool) => <li key={tool} className="glass rounded-full px-4 py-2 text-sm font-bold">{tool}</li>)}</ul>
            <p className="mt-4 text-sm text-mist">We work in US, UK and EU business hours.</p>
          </div>
        </div>
      </section>
      <Comparison
        title="See the difference"
        columns={["Innoventix Hub", "DIY SEO tool", "Cheap SEO agency"]}
        rows={[
          { label: "Dedicated specialist", cells: ["yes", "no", "partial"] },
          { label: "Technical fixes done for you", cells: ["yes", "no", "partial"] },
          { label: "White-hat links only", cells: ["yes", "na", "no"] },
          { label: "Local + e-commerce expertise", cells: ["yes", "partial", "partial"] },
          { label: "AI-search optimisation", cells: ["yes", "no", "no"] },
          { label: "Monthly report + call", cells: ["yes", "no", "partial"] },
          { label: "No long lock-in", cells: ["yes", "yes", "no"] },
          { label: "You keep all data", cells: ["yes", "partial", "partial"] },
        ]}
      />
      <QuoteSplit
        eyebrow="Pricing"
        title="Custom quote after a free SEO audit."
        copy="We audit your site first, then send a fixed monthly proposal: exactly what we'll do each month and what it costs."
        includesTitle="What affects the cost"
        includes={["Site size", "Keyword competition", "Number of locations", "Catalog size", "Link-building intensity", "Content add-on volume"]}
        sideEyebrow="Honest SEO Promise"
        sideTitle="Every plan includes"
        sideBody="A dedicated specialist, technical monitoring, on-page work, a monthly report and call, Search Console and GA4 setup, white-hat only. Content writing is quoted as an add-on."
        sideNotes={[
          "No ranking promises. Nobody controls Google.",
          "White-hat only. No paid links, PBNs or tricks.",
          "No long lock-in. 3-month first term, then month-to-month, 30 days' notice.",
          "You keep all content, accounts and data.",
        ]}
      />
      <Testimonials />
      <FaqSection items={faqs} />
      <section className="section overflow-hidden pt-8">
        <div className="wrap">
          <div className="cta-card px-6 py-14 text-center">
            <h2 className="text-4xl text-white md:text-[56px] md:leading-[1.05]">Ready to get found?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-mist">Send us your URL. A specialist will review your site and show you what&apos;s holding it back.</p>
            <div className="mx-auto mt-6 max-w-xl text-left"><SeoAuditForm /></div>
            <div className="mt-4 flex flex-wrap justify-center gap-3"><BookButton ghost /><WhatsAppButton /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
