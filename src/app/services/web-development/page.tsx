import JsonLd from "@/components/JsonLd";
import RotatingWord from "@/components/RotatingWord";
import Tabs from "@/components/Tabs";
import { BookButton, Breadcrumbs, Comparison, CtaBand, FaqList, LogoMarquee, SectionIntro, Testimonials, WhatsAppButton } from "@/components/Sections";
import { webCases } from "@/content/work";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";
import Link from "next/link";
import { site } from "@/config/site";

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
      <section className="bg-navy">
        <div className="wrap py-16">
          <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
          <p className="eyebrow mt-6">Web development · Next.js · Shopify · WordPress · UI/UX</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Websites That Sell for <RotatingWord words={["D2C Brands", "Shopify Stores", "Growing SMBs", "Service Businesses"]} /></h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">We design and build fast, SEO-ready websites, stores and landing pages built to rank and to turn visitors into customers, then hand you a site you fully own. Built for D2C brands and SMBs in the US, UK & EU.</p>
          <div className="mt-8 flex flex-wrap gap-3"><BookButton /><Link href="/work" className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold">See Our Work</Link></div>
          <ul className="mt-6 space-y-1 text-sm text-cream/80">
            <li>SEO-ready: speed, clean code, meta tags, schema, sitemap, Search Console</li>
            <li>Custom builds, no templates</li>
            <li>You own the code and content</li>
          </ul>
        </div>
      </section>
      <LogoMarquee />
      <section className="section">
        <div className="wrap grid gap-4 md:grid-cols-3">
          {[["24–48 hours", "landing page launch"], ["5–7 days", "custom website launch"], ["100% custom", "no templates"]].map(([stat, label]) => (
            <article key={stat} className="glass rounded-3xl p-6"><p className="text-3xl font-black text-amber">{stat}</p><p className="mt-2">{label}</p></article>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">SEO-ready from day one</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">{["Speed", "Clean code", "Meta tags", "Schema", "XML sitemap", "Google Search Console setup"].map((item) => <li key={item} className="rounded-full border border-white/15 px-3 py-1">{item}</li>)}</ul>
          <p className="mt-3 text-sm text-mist/70">We build every site to be found. We don't promise rankings; nobody honest can.</p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">3 reasons most websites don't sell</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Slow pages, lost buyers", "Built lean on Next.js or tuned Shopify/WordPress, Core Web Vitals checked before launch."],
              ["Looks like every other template", "Custom UI/UX designed around your brand and your buyer."],
              ["Traffic but no leads or sales", "Clear funnels, fast checkout, tracked forms and CRM hooks from day one."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section bg-[#091018]">
        <div className="wrap">
          <SectionIntro title="One team for your whole website" />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["01", "nextjs", "Custom Next.js websites", "Fast, SEO-ready marketing sites and web apps on Next.js, React and a headless CMS your team can edit.", "Design system, CMS, SEO setup, analytics, Vercel deploy."],
              ["02", "shopify-wordpress", "Shopify & WordPress", "Stores and sites on the platform that fits your business: custom Shopify themes, WooCommerce and WordPress builds.", "Custom theme, apps and integrations, migration, speed tuning."],
              ["03", "landing-pages", "Landing pages", "High-converting pages for ads, launches and offers, built to test fast.", "Copy-ready layout, A/B-ready variants, form + pixel tracking."],
              ["04", "ui-ux", "UI/UX design", "Research-led wireframes, prototypes and design systems in Figma, before a line of code.", "User flows, wireframes, clickable prototype, handoff."],
            ].map(([n, id, title, body, deliver]) => (
              <li key={id} id={id} className="glass scroll-mt-28 rounded-3xl p-6">
                <p className="text-sm text-amber">{n}</p>
                <h3 className="mt-1 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm text-cream/80">{body}</p>
                <p className="mt-3 text-sm text-mist/80">{deliver}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">Platforms</h2>
          <p className="mt-2 text-sm text-cream/75">Not sure which platform? We'll recommend one on the free call, with reasons.</p>
          <div className="mt-6">
            <Tabs label="Platforms" tabs={[
              { id: "platform-next", label: "Next.js", content: <p>Best for brands that want maximum speed, custom features and full control. Custom features, animation and a CMS your team can edit.</p> },
              { id: "platform-shopify", label: "Shopify", content: <p>Best for D2C brands selling products online who want an easy-to-run store. Custom themes, apps and checkout that stays fast.</p> },
              { id: "platform-wp", label: "WordPress", content: <p>Best for content-heavy sites and teams that already know WordPress. Custom builds and WooCommerce when you sell from the same site.</p> },
            ]} />
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">Sites we've shipped</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {webCases.map((item) => (
              <li key={item.slug} className="glass overflow-hidden rounded-3xl">
                {item.image ? <img src={item.image} alt={item.imageAlt || ""} width={1440} height={900} className="h-40 w-full object-cover" /> : null}
                <div className="p-5">
                  <h3 className="font-bold"><Link href={`/work/${item.slug}`} className="hover:text-amber">{item.title}</Link></h3>
                  <p className="mt-2 text-sm text-cream/75">{item.summary}</p>
                  <p className="mt-3 text-xs text-amber">{item.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">Tech stack</h2>
          <p className="mt-2 text-sm text-cream/75">We pick the right tool for the job, not the one we're paid to sell.</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">{["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Shopify", "WordPress", "WooCommerce", "Figma", "JavaScript", "Laravel"].map((tool) => <li key={tool} className="glass rounded-full px-4 py-2">{tool}</li>)}</ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">From first call to live site in 5–7 days</h2>
          <ol className="mt-6 space-y-3">
            {[
              ["Discovery call (Day 0, 30 min)", "Goals, audience, sitemap; written proposal within 24h, one free revision round."],
              ["UX & wireframes (Day 1)", "User flows, wireframes, content plan."],
              ["UI design (Days 2–3)", "Brand-led design, prototype, your sign-off."],
              ["Development (Days 3–5)", "Build, CMS, integrations, staging preview."],
              ["SEO & QA (Day 6)", "Speed, meta tags, schema, sitemap, Search Console, devices."],
              ["Launch & 14 days of free fixes (Day 7)", "Go live; optional monthly care plan after."],
            ].map(([t, b]) => <li key={t} className="glass rounded-2xl p-4"><h3 className="font-bold">{t}</h3><p className="text-sm text-cream/75">{b}</p></li>)}
          </ol>
          <p className="mt-4 text-sm text-mist/70">Landing pages ship in 24–48 hours; large stores and web apps are scoped separately.</p>
        </div>
      </section>
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
      <section className="section pt-0">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6">
            <h2 className="text-3xl font-black">Pricing that fits your project</h2>
            <h3 className="mt-4 text-xl font-bold">Custom quote after a free call.</h3>
            <p className="mt-2 text-sm text-cream/80">Every website is different, so we quote after a free consultation. You get a fixed, written proposal with scope, timeline and cost before any work starts. No surprises.</p>
            <div className="mt-4"><BookButton /></div>
            <h3 className="mt-6 font-bold">What affects the cost</h3>
            <ul className="mt-2 space-y-1 text-sm">{["Number of pages and unique layouts", "Platform (Next.js, Shopify, WordPress)", "Custom features and integrations (booking, CRM, payments, memberships)", "E-commerce catalog size and checkout needs", "Copywriting and content", "Migration from an existing site", "Multilingual needs"].map((item) => <li key={item}>· {item}</li>)}</ul>
          </article>
          <article className="glass-strong rounded-3xl p-6 text-sm">
            <h3 className="font-bold">What every website includes</h3>
            <ul className="mt-3 space-y-1">{["Custom mobile-first design", "SEO-ready build: speed, clean code, meta tags, schema, XML sitemap and Google Search Console setup", "Forms and analytics tracking set up", "Speed and Core Web Vitals checks before launch", "Cross-browser and device QA", "You own the domain, content and code"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <h3 className="mt-6 font-bold">Built-As-Agreed Guarantee</h3>
            <p className="mt-2">If the finished site doesn't match the design and features in your signed proposal, we fix it free until it does. Plus one free revision round on the proposal before we build.</p>
            <p className="mt-2 text-mist/80">Scope is the signed proposal. Scope changes quoted separately. Content and feedback on time. Third-party changes excluded. No refund.</p>
            <p className="mt-4">After launch: 14 days of free fixes. Optional monthly care plan available (updates, backups, uptime monitoring, small edits).</p>
          </article>
        </div>
      </section>
      <Testimonials />
      <section className="section pt-0">
        <div className="wrap"><h2 className="text-3xl font-black">FAQ</h2><div className="mt-6"><FaqList items={faqs} /></div></div>
      </section>
      <CtaBand title="Ready for a website that actually sells?" copy="Book a free consultation. We'll review your current site or idea and send a fixed, written proposal." secondary="whatsapp" />
      <p className="sr-only">{site.name}</p>
    </main>
  );
}
