import JsonLd from "@/components/JsonLd";
import RotatingWord from "@/components/RotatingWord";
import Tabs from "@/components/Tabs";
import { BookButton, Breadcrumbs, CardGrid, Comparison, CtaBand, FaqSection, LogoMarquee, QuoteSplit, StepRail, Testimonials } from "@/components/Sections";
import { webCases } from "@/content/work";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Web Development Agency for D2C Brands & SMBs | Innoventix Hub",
  description: "Custom Next.js, Shopify and WordPress websites, landing pages and UI/UX that load fast and turn visitors into customers. Free consultation.",
  path: "/services/web-development",
});

const faqs = [
  { q: "How long does a website take?", a: "Landing pages go live in 24–48 hours and custom websites in 5–7 days once content is ready. Large stores or web apps are scoped separately. Your written proposal confirms the timeline." },
  { q: "How much does a website cost?", a: "It depends on pages, platform, features and content. After a free call we send a fixed, written quote so you know the exact cost before we start." },
  { q: "Should I choose Next.js, Shopify or WordPress?", a: "Shopify suits most product brands, WordPress suits content-heavy sites, and Next.js suits brands that want top speed and custom features. We recommend one on the free call and explain why." },
  { q: "Do I own the website?", a: "Yes. You own the domain, content, design files and code. We can work in your accounts from day one." },
  { q: "Can you redesign my existing site without losing SEO?", a: "Yes. We map your current pages, keep what ranks, set up redirects and check everything before launch." },
  { q: "Do you write the content?", a: "We can. Copywriting is optional and quoted separately, or we place and polish your existing copy." },
  { q: "Will my site be fast and mobile-friendly?", a: "Every site is designed mobile-first and checked for speed and Core Web Vitals before launch." },
  { q: "Is SEO included?", a: "Every site is SEO-ready: speed, clean code, meta tags, schema, an XML sitemap and Google Search Console setup. We build to rank, but no one can honestly guarantee rankings; ongoing SEO is a separate service." },
  { q: "Can you connect my CRM, email tool or payments?", a: "Yes: HubSpot, Klaviyo, Stripe, booking tools and more. Integrations are scoped in your proposal, and our AI Automation team can take it further." },
  { q: "Can I edit the site myself after launch?", a: "Yes. We set up an easy CMS (Shopify, WordPress or a headless CMS) and show you how to use it." },
  { q: "Do you offer help after launch?", a: "Yes. Every site gets 14 days of free fixes after launch. After that, an optional monthly care plan is available: updates, backups, uptime monitoring and small edits." },
  { q: "Do you work with clients outside the US?", a: "Yes. We work with D2C brands and SMBs across the US, UK and EU, remotely and in your time zone where possible." },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Web Development", path: "/services/web-development" },
];

export default function WebPage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        breadcrumbSchema(crumbs),
        serviceSchema({
          name: "Web development",
          serviceType: "Web development agency",
          description: "Fast, SEO-ready websites, stores and landing pages.",
          path: "/services/web-development",
          catalog: [
            { name: "Custom Next.js websites", description: "Marketing sites and web apps on Next.js and React." },
            { name: "Shopify & WordPress", description: "Stores and content sites on the platform that fits." },
            { name: "Landing pages", description: "High-converting pages for ads, launches and offers." },
            { name: "UI/UX design", description: "Wireframes, prototypes and design systems in Figma." },
          ],
        }),
        faqSchema(faqs),
      )} />
      <section className="hero-stage bg-navy">
        <img src="/assets/glowcopper-e4e0c4f3.svg" alt="" className="glow-copper" />
        <div className="relative z-10 px-5 pb-16 pt-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
            <p className="eyebrow mt-6">Web development · Next.js · Shopify · WordPress · UI/UX</p>
            <h1 className="mt-7 max-w-[920px] text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Websites That Sell for <RotatingWord words={["D2C Brands", "Shopify Stores", "Growing SMBs", "Service Businesses"]} /></h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">We design and build fast, SEO-ready websites, stores and landing pages built to rank and to turn visitors into customers, then hand you a site you fully own. Built for D2C brands and SMBs in the US, UK & EU.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4"><BookButton /><Link href="/work" className="btn-secondary">See Our Work</Link></div>
            <ul className="mt-6 space-y-1 text-sm text-pearl/80">
              <li>SEO-ready: speed, clean code, meta tags, schema, sitemap, Search Console</li>
              <li>Custom builds, no templates</li>
              <li>You own the code and content</li>
            </ul>
          </div>
          <div data-loop className="web-build glass mx-auto mt-12 max-w-[860px] overflow-hidden rounded-[24px] p-4 text-left">
            <div className="mb-3 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/30" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-amber" /></div>
            <div className="grid gap-4 rounded-xl bg-[#0f2138] p-4 md:grid-cols-[0.8fr_1.2fr]">
              <pre className="overflow-hidden font-mono text-[11px] leading-5 text-pearl/80">
                <span className="type-line" style={{ animationDelay: "0s" }}>const page = await build(brand)</span>
                <span className="type-line" style={{ animationDelay: "0.35s" }}>seo.ready = true</span>
                <span className="type-line" style={{ animationDelay: "0.7s" }}>await ship()</span>
              </pre>
              <div>
                <div className="asm asm-1 h-3 w-24 rounded-full bg-white/20" />
                <div className="asm asm-2 mt-4 h-8 w-3/4 rounded-lg bg-amber/80" />
                <div className="mt-4 grid grid-cols-3 gap-2">{[0, 1, 2].map((item) => <div key={item} className="asm h-16 rounded-lg bg-white/10" style={{ animationDelay: `${0.4 + item * 0.15}s` }} />)}</div>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="load-bar h-full origin-left bg-amber" /></div>
            <p className="live-badge mt-4 text-xs font-bold text-[#5bd49a]">Live · SEO-ready</p>
          </div>
        </div>
      </section>
      <LogoMarquee />
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="pill">Launch speed</p>
            <h2 className="mt-6 text-3xl text-white md:text-[44px] md:leading-[52px]">From first call to a live site</h2>
            <ul className="mt-8 space-y-4">
              {[["24–48 hours", "landing page launch"], ["5–7 days", "custom website launch"], ["100% custom", "no templates"]].map(([stat, label]) => (
                <li key={stat} className="glass flex items-center gap-4 rounded-[18px] px-5 py-4">
                  <span className="text-2xl font-bold text-amber">{stat}</span>
                  <span className="text-sm text-pearl/80">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <article className="glass rounded-[24px] p-7">
            <p className="text-xs font-bold tracking-[1.6px] text-amber uppercase">Built to rank</p>
            <h3 className="mt-3 text-2xl font-bold text-white">SEO-ready from day one</h3>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">{["Speed", "Clean code", "Meta tags", "Schema", "XML sitemap", "Google Search Console setup"].map((item) => <li key={item} className="rounded-full border border-white/10 px-3 py-2">✓ {item}</li>)}</ul>
            <p className="mt-4 text-sm text-mist">We build every site to be found. We don&apos;t promise rankings; nobody honest can.</p>
          </article>
        </div>
      </section>
      <CardGrid
        tone="deep"
        eyebrow="The problem"
        title="3 reasons most websites don't sell"
        items={[
          { icon: "⏱", title: "Slow pages, lost buyers", body: "Built lean on Next.js or tuned Shopify/WordPress, Core Web Vitals checked before launch." },
          { icon: "▣", title: "Looks like every other template", body: "Custom UI/UX designed around your brand and your buyer." },
          { icon: "↗", title: "Traffic but no leads or sales", body: "Clear funnels, fast checkout, tracked forms and CRM hooks from day one." },
        ]}
      />
      <CardGrid
        eyebrow="What we build"
        title="One team for your whole website"
        columns={2}
        items={[
          { icon: "01", title: "Custom Next.js websites", badge: "nextjs", body: "Fast, SEO-ready marketing sites and web apps on Next.js, React and a headless CMS your team can edit. Design system, CMS, SEO setup, analytics, Vercel deploy.", href: "#nextjs", link: "Next.js" },
          { icon: "02", title: "Shopify & WordPress", body: "Stores and sites on the platform that fits: custom Shopify themes, WooCommerce and WordPress builds. Custom theme, apps, migration, speed tuning.", href: "#shopify-wordpress", link: "Stores" },
          { icon: "03", title: "Landing pages", body: "High-converting pages for ads, launches and offers, built to test fast. Copy-ready layout, A/B-ready variants, form and pixel tracking.", href: "#landing-pages", link: "Landing pages" },
          { icon: "04", title: "UI/UX design", body: "Research-led wireframes, prototypes and design systems in Figma, before a line of code. User flows, wireframes, clickable prototype, handoff.", href: "#ui-ux", link: "UI/UX" },
        ]}
      />
      <section className="section bg-navy-deep">
        <div className="wrap text-center">
          <p className="pill">Platforms</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px] md:leading-[52px]">The right stack for the job</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pearl/80">Not sure which platform? We&apos;ll recommend one on the free call, with reasons.</p>
          <div className="mt-8">
            <Tabs label="Platforms" tabs={[
              { id: "platform-next", label: "Next.js", content: <PlatformPanel best="Best for brands that want maximum speed, custom features and full control." points={["Custom features and animation", "A CMS your team can edit", "Vercel deploy and analytics"]} label="Live · SEO-ready" /> },
              { id: "platform-shopify", label: "Shopify", content: <PlatformPanel best="Best for D2C brands selling products online who want an easy-to-run store." points={["Custom themes", "Apps and checkout that stays fast", "Catalog and payments scoped in the proposal"]} label="Store · ready to sell" /> },
              { id: "platform-wp", label: "WordPress", content: <PlatformPanel best="Best for content-heavy sites and teams that already know WordPress." points={["Custom builds", "WooCommerce when you sell from the same site", "A CMS your editors already know"]} label="Content · easy to edit" /> },
            ]} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap text-center">
          <p className="pill">Our projects</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px] md:leading-[52px]">Sites we&apos;ve shipped</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {webCases.map((item) => (
              <li key={item.slug} className="glass glass-card overflow-hidden rounded-[22px] text-left">
                {item.image ? <img src={item.image} alt={item.imageAlt || ""} width={1440} height={900} className="h-44 w-full object-cover object-top" /> : null}
                <div className="p-5">
                  <h3 className="font-bold text-white"><Link href={`/work/${item.slug}`} className="hover:text-amber">{item.title}</Link></h3>
                  <p className="mt-2 text-sm leading-6 text-pearl/75">{item.summary}</p>
                  <p className="mt-3 text-xs font-bold text-amber">{item.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-navy-deep">
        <div className="wrap text-center">
          <p className="pill">Tech stack</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">Tools we build with</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pearl/80">We pick the right tool for the job, not the one we&apos;re paid to sell.</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Shopify", "WordPress", "WooCommerce", "Figma", "JavaScript", "Laravel"].map((tool) => (
              <li key={tool} className="glass flex h-[88px] items-center justify-center rounded-[18px] text-sm font-bold text-white">{tool}</li>
            ))}
          </ul>
        </div>
      </section>
      <StepRail
        title="From first call to live site in 5–7 days"
        note="Landing pages ship in 24–48 hours. Large stores and web apps are scoped separately."
        steps={[
          { label: "Discovery · Day 0", body: "Goals, audience, sitemap. Written proposal within 24h." },
          { label: "Wireframes · Day 1", body: "User flows, wireframes, content plan." },
          { label: "UI design · Days 2–3", body: "Brand-led design, prototype, your sign-off." },
          { label: "Build · Days 3–5", body: "CMS, integrations, staging preview." },
          { label: "SEO & QA · Day 6", body: "Speed, schema, sitemap, devices." },
          { label: "Launch · Day 7", body: "Go live, plus 14 days of free fixes." },
        ]}
      />
      <Comparison
        title="See the difference"
        columns={["Innoventix Hub", "DIY template builder", "Freelancer"]}
        rows={[
          { label: "Custom design", cells: ["yes", "no", "partial"] },
          { label: "Speed tuned", cells: ["yes", "no", "partial"] },
          { label: "SEO setup", cells: ["yes", "no", "partial"] },
          { label: "Conversion tracking", cells: ["yes", "partial", "partial"] },
          { label: "You own the code", cells: ["yes", "partial", "yes"] },
          { label: "One team for design + build", cells: ["yes", "no", "no"] },
          { label: "Platform advice", cells: ["yes", "no", "partial"] },
          { label: "Help after launch", cells: ["yes", "no", "partial"] },
        ]}
      />
      <QuoteSplit
        eyebrow="Pricing"
        title="Custom quote after a free call."
        copy="Every website is different, so we quote after a free consultation. You get a fixed, written proposal with scope, timeline and cost before any work starts."
        includesTitle="What affects the cost"
        includes={["Number of pages and unique layouts", "Platform (Next.js, Shopify, WordPress)", "Custom features and integrations", "E-commerce catalog and checkout", "Copywriting and content", "Migration from an existing site", "Multilingual needs"]}
        sideEyebrow="Included"
        sideTitle="Built-As-Agreed Guarantee"
        sideBody="If the finished site doesn't match the design and features in your signed proposal, we fix it free until it does. Plus one free revision round on the proposal before we build."
        sideNotes={["Scope is the signed proposal. Changes are quoted separately.", "Content and feedback on time. Third-party changes excluded.", "14 days of free fixes after launch. Optional monthly care plan."]}
        extra={<ul className="mt-5 space-y-1 text-sm text-pearl/85">{["Custom mobile-first design", "SEO-ready build, forms and analytics", "Speed and Core Web Vitals checks", "You own the domain, content and code"].map((item) => <li key={item}>✓ {item}</li>)}</ul>}
      />
      <Testimonials />
      <FaqSection items={faqs} />
      <CtaBand title="Ready for a website that actually sells?" copy="Book a free consultation. We'll review your current site or idea and send a fixed, written proposal." secondary="whatsapp" />
    </main>
  );
}

function PlatformPanel({ best, points, label }: { best: string; points: string[]; label: string }) {
  return (
    <div className="glass grid items-center gap-8 rounded-[24px] p-6 lg:grid-cols-2">
      <div className="text-left">
        <p className="text-[15px] leading-7 text-pearl/85">{best}</p>
        <ul className="mt-4 space-y-2 text-sm text-pearl/85">{points.map((point) => <li key={point}>✓ {point}</li>)}</ul>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f2138] text-left">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2"><span className="size-2.5 rounded-full bg-white/25" /><span className="size-2.5 rounded-full bg-white/15" /><span className="size-2.5 rounded-full bg-amber" /></div>
        <div className="p-4">
          <div className="h-2.5 w-24 rounded-full bg-white/15" />
          <div className="mt-3 h-7 w-3/4 rounded-lg bg-amber/80" />
          <div className="mt-4 grid grid-cols-3 gap-2">{[0, 1, 2].map((item) => <div key={item} className="h-14 rounded-lg bg-white/10" />)}</div>
          <p className="mt-3 text-xs font-bold text-[#5bd49a]">{label}</p>
        </div>
      </div>
    </div>
  );
}
