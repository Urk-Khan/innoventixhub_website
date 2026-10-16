import JsonLd from "@/components/JsonLd";
import SeoAuditForm from "@/components/SeoAuditForm";
import { BookButton, Breadcrumbs, Comparison, FaqList, LogoMarquee, Testimonials, WhatsAppButton } from "@/components/Sections";
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
      <section className="bg-navy">
        <div className="wrap grid items-center gap-8 py-16 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
            <p className="eyebrow mt-6">SEO · Technical · Local · E-commerce · AI search</p>
            <h1 className="mt-5 text-4xl font-black md:text-6xl">Get Found on Google and in AI Answers.</h1>
            <p className="mt-4 text-lg text-cream/80">White-hat SEO for D2C brands and SMBs in the US, UK & EU. We fix what's holding your site back, build real authority and report every month.</p>
            <div className="mt-6"><SeoAuditForm compact /></div>
            <p className="mt-3 text-xs text-mist/70">Reviewed by a real SEO specialist. Reply within 2 business days. No obligation.</p>
            <div className="mt-4"><BookButton ghost /></div>
          </div>
          <div className="glass rounded-3xl p-6 text-sm">
            <p className="text-xs text-mist/70">Illustrative example</p>
            <p className="mt-3 font-bold">best organic skincare uk</p>
            <p className="mt-4 rounded-xl bg-amber/15 p-3">AI answer cites yourbrand.com</p>
            <ol className="mt-4 space-y-2">
              <li>1. yourbrand.com</li>
              <li className="text-amber">2. yourbrand.com · Top 3</li>
              <li>3. competitor.com</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 py-6">
        <ul className="wrap flex flex-wrap justify-between gap-3 text-sm font-bold">
          {["Dedicated SEO specialist", "White-hat only", "No long lock-in", "Monthly report + call"].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <LogoMarquee />
      <section id="free-audit" className="section scroll-mt-28">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">What's holding your site back? Your free audit finds out.</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li><strong>Invisible on Google</strong> → technical clean-up</li>
              <li><strong>Wrong traffic</strong> → keyword and intent mapping</li>
              <li><strong>Losing to competitors and AI answers</strong> → authority + AI-search work</li>
            </ul>
          </div>
          <div>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              {["Page speed & Core Web Vitals", "Indexing & crawl errors", "Titles & meta descriptions", "Schema markup", "Internal links", "Backlink profile", "Google Business Profile", "AI-answer readiness"].map((item) => <li key={item} className="glass rounded-2xl px-3 py-2">✓ {item}</li>)}
            </ul>
            <p className="mt-3 text-xs text-mist/70">Illustrative. Report ready: top fixes in plain English.</p>
            <div className="mt-4"><SeoAuditForm /></div>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">Everything search, in one plan</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["technical-seo", "Technical SEO", "Speed, Core Web Vitals, crawl and index fixes, schema, sitemaps, migrations."],
              ["on-page", "On-page SEO", "Keyword mapping, titles, headings, internal links and content briefs. Content writing is quoted as an add-on."],
              ["link-building", "Off-page & link building", "Earned links through outreach and digital PR. No paid link schemes."],
              ["local-seo", "Local SEO", "Google Business Profile, citations, reviews and location pages."],
              ["ecommerce-seo", "E-commerce SEO", "Category and product pages, product schema, faceted navigation, Shopify/WooCommerce fixes."],
              ["ai-search", "AI search visibility (AEO/GEO)", "Structured answers, schema, entity work and brand mentions to make you a stronger candidate for AI Overviews, ChatGPT and Gemini."],
            ].map(([id, title, body]) => (
              <li key={id} id={id} className="glass scroll-mt-28 rounded-3xl p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm text-cream/75">{body}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black">How we grow your search traffic</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-4">
            {["Audit (weeks 1–2)", "Fix (month 1)", "Grow authority (months 2–3+)", "Report & refine (every month)"].map((step, index) => (
              <li key={step} className="glass rounded-2xl p-4"><span className="text-amber">{index + 1}</span><p className="mt-2 font-bold">{step}</p></li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-cream/75">Most sites see early improvements in 3–6 months. Competitive keywords take longer.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">What you'll see</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="glass rounded-3xl p-5 text-sm"><p className="text-xs text-mist/70">Illustrative</p><p className="mt-2">SERP before: page 2. After: top 3 with a rich result.</p></article>
            <article className="glass rounded-3xl p-5 text-sm"><p className="text-xs text-amber">SAMPLE DATA</p><p className="mt-2">Monthly report preview: clicks, impressions, top keywords, work done, next month.</p></article>
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {["[Client result coming soon]", "[Client result coming soon]", "[Client result coming soon]"].map((item, index) => (
              <li key={index} className="rounded-2xl border border-dashed border-white/20 p-4 text-sm">{item} <span className="text-amber">SAMPLE</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="glass flex flex-col items-start rounded-3xl p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber to-navy text-lg font-black text-ink" aria-hidden="true">SEO</div>
            <h2 className="mt-4 text-2xl font-black">Who does your SEO</h2>
            <p className="mt-2 text-sm text-cream/80">A named lead specialist is assigned to your account. Photo, years and LinkedIn are added when confirmed.</p>
          </article>
          <div className="text-sm">
            <h3 className="font-bold">How we work</h3>
            <p className="mt-2 text-cream/80">Google Search Essentials-aligned, white-hat only, every change logged, you keep all accounts and data.</p>
            <ul className="mt-4 flex flex-wrap gap-2">{["Google Search Console", "GA4", "Ahrefs", "Semrush", "Screaming Frog"].map((tool) => <li key={tool} className="glass rounded-full px-3 py-1">{tool}</li>)}</ul>
            <p className="mt-4">We work in US, UK and EU business hours.</p>
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
      <section className="section pt-0">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6">
            <h2 className="text-3xl font-black">Custom quote after a free SEO audit.</h2>
            <p className="mt-3 text-sm">We audit your site first, then send a fixed monthly proposal: exactly what we'll do each month and what it costs.</p>
            <div className="mt-4"><SeoAuditForm /></div>
            <h3 className="mt-6 font-bold">What affects the cost</h3>
            <p className="mt-2 text-sm">Site size · keyword competition · number of locations · catalog size · link-building intensity · content add-on volume.</p>
          </article>
          <article className="glass-strong rounded-3xl p-6 text-sm">
            <h3 className="font-bold">Every plan includes</h3>
            <ul className="mt-3 space-y-1">{["Dedicated specialist", "Technical monitoring", "On-page optimisation", "Monthly report + call", "Search Console & GA4 setup", "White-hat only"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <p className="mt-3">Add-on: SEO content writing (quoted separately).</p>
            <h3 className="mt-5 font-bold">Honest SEO Promise</h3>
            <ul className="mt-2 space-y-1">
              <li>No ranking promises. Nobody controls Google.</li>
              <li>White-hat only. No paid links, PBNs or tricks.</li>
              <li>No long lock-in. 3-month first term, then month-to-month, 30 days' notice.</li>
              <li>Monthly report + call. You keep all content, accounts and data.</li>
            </ul>
          </article>
        </div>
      </section>
      <Testimonials />
      <section className="section pt-0"><div className="wrap"><h2 className="text-3xl font-black">FAQ</h2><div className="mt-6"><FaqList items={faqs} /></div></div></section>
      <section className="section pt-0">
        <div className="wrap rounded-[2rem] bg-navy px-6 py-12 text-center">
          <h2 className="text-3xl font-black">Ready to get found?</h2>
          <p className="mt-3">Send us your URL. A specialist will review your site and show you what's holding it back.</p>
          <div className="mx-auto mt-6 max-w-xl text-left"><SeoAuditForm /></div>
          <div className="mt-4 flex flex-wrap justify-center gap-3"><BookButton ghost /><WhatsAppButton /></div>
        </div>
      </section>
    </main>
  );
}
