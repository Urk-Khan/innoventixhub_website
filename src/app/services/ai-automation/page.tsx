import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ProcessTimeline from "@/components/ProcessTimeline";
import Tabs from "@/components/Tabs";
import { BookButton, Breadcrumbs, CardGrid, CaseRail, Comparison, CtaBand, FaqSection, LogoMarquee, QuoteSplit, SectionIntro, Testimonials, ToolGrid, VoiceButton } from "@/components/Sections";
import { WorkflowAssembly } from "@/components/visuals";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "AI Automation Agency for SMBs & D2C, Innoventix Hub",
  description: "n8n, GoHighLevel, CRM and custom Python automations that remove manual work, sync your tools and follow up leads 24/7.",
  path: "/services/ai-automation",
});

const faqs = [
  { q: "What can you automate?", a: "Almost any repeatable task that follows rules: lead capture and follow-up, CRM updates, order and inventory updates, invoicing, reporting, onboarding emails, content scheduling and data syncing between apps. If you do it the same way more than a few times a week, it's usually a good candidate. We'll point out the best ones on your free audit call." },
  { q: "n8n, GoHighLevel or custom Python: which do I need?", a: "GoHighLevel suits you if you want an all-in-one CRM, funnels, email and SMS. n8n is best for connecting many tools with flexible logic at a low running cost. Custom Python is for things no-code tools can't do well, like complex data processing, scraping or custom AI agents. Many clients use a mix, and we recommend the simplest option that does the job." },
  { q: "Do I need to change the tools I already use?", a: "Usually not. We connect the apps you already pay for, like Shopify, HubSpot, Sheets, Slack and Stripe. We only suggest a switch if a tool is blocking you, and we'll explain why first." },
  { q: "How long does it take?", a: "GoHighLevel setups take 1–3 weeks, n8n workflows 2–6 weeks, CRM automation 2–4 weeks and a custom CRM 4–8 weeks. Simple single workflows can go live faster. You'll get a timeline with your blueprint." },
  { q: "How much does it cost?", a: "Every automation is scoped to fit. Book a free automation audit and we'll send a fixed-price proposal within 48 hours, so you know the cost before we build. Optional ongoing care covers monitoring and improvements." },
  { q: "What happens if something breaks?", a: "Every build includes error handling and alerts, so failures get flagged instead of silently stopping. You get 30 days of post-launch support, and the care plan covers ongoing fixes when apps or APIs change." },
  { q: "Is my data safe?", a: "We use official APIs, least-privilege access and secure credential storage. n8n can be self-hosted on your own server so your data stays with you, and we sign an NDA on request." },
  { q: "Will my team be able to use it?", a: "Yes. Every project comes with documentation and a walkthrough for your team, so you're never locked in or dependent on us to understand how it works." },
  { q: "Can automation work with your AI voice agents?", a: "Yes. Our voice agents can book calls, then automations update your CRM, send confirmations and alert your team. That's one of the benefits of having content, automation, voice, web and SEO under one roof." },
];

function panel(line: string, includes: string[], timeline: string) {
  return (
    <div className="glass grid items-center gap-6 rounded-[24px] p-6 text-left lg:grid-cols-2">
      <div>
        <p className="text-pearl/85">{line}</p>
        <ul className="mt-4 space-y-1 text-sm">{includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
        <p className="mt-4 text-sm font-bold text-amber">Timeline: {timeline}</p>
        <a href={site.calendlyUrl} className="mt-4 inline-block text-sm font-bold text-amber">Book A Free Consultation →</a>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#0f2138] p-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-amber">
          {includes.slice(0, 4).map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {index > 0 ? <span className="text-white/30">→</span> : null}
              <span className="rounded-full border border-amber/30 px-2 py-1">{item.split(" ")[0]}</span>
            </span>
          ))}
        </div>
        <svg viewBox="0 0 320 70" className="mt-4 h-16 w-full" aria-hidden="true">
          <path className="wire-dash" d="M16 36 H300" fill="none" stroke="#ffb547" strokeWidth="2" />
        </svg>
        <p className="text-center text-xs font-bold text-[#5bd49a]">Running · monitored</p>
      </div>
    </div>
  );
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Automation", path: "/services/ai-automation" },
];

export default function AutomationPage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        breadcrumbSchema(crumbs),
        serviceSchema({
          name: "AI automation",
          serviceType: "AI automation agency",
          description: "n8n, GoHighLevel, CRM and custom Python automations.",
          path: "/services/ai-automation",
          catalog: [
            { name: "n8n Workflow Automation", description: "Custom workflows that connect tools with an API." },
            { name: "GoHighLevel Setup & Automation", description: "CRM, funnels, email and SMS, automated end to end." },
            { name: "CRM Automation", description: "Lead routing, follow-ups and clean data." },
            { name: "Custom Python & AI Automation", description: "Scripts, AI agents, scrapers and API integrations." },
          ],
        }),
        faqSchema(faqs),
      )} />
      <section className="hero-stage bg-navy">
        <img src="/assets/glowcopper-bad11725.svg" alt="" className="glow-copper" />
        <div className="relative z-10 px-5 pb-16 pt-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
            <p className="eyebrow mt-6">AI Automation · n8n · GoHighLevel · CRM · Python</p>
            <h1 data-words className="mt-7 max-w-[920px] text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Your Business, on Autopilot. The AI Automation Agency for Growing Brands.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">We build n8n, GoHighLevel, CRM and custom Python automations that capture leads, follow up in seconds, sync your tools and remove hours of manual work every week, so your team can focus on growth.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4"><BookButton /><VoiceButton ghost /></div>
            <p className="mt-5 text-[13px] text-mist">Built for D2C brands and SMBs in the US, UK & EU</p>
          </div>
          <div className="glass relative mx-auto mt-12 h-[280px] max-w-[1000px] overflow-hidden rounded-[28px] p-6" aria-hidden="true">
            <svg viewBox="0 0 360 220" className="h-full w-full">
              <path className="wire-dash" d="M40 50 H140 V120 H240 V50 H320" fill="none" stroke="#ffb547" strokeWidth="2" />
            </svg>
            <div className="absolute inset-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Lead form", "OpenAI", "HubSpot", "Slack"].map((name) => (
                <div key={name} className="glass-strong h-fit rounded-2xl px-3 py-2 text-sm font-bold">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WorkflowAssembly />
      <LogoMarquee label="Brands we've worked with" />
      <CardGrid
        tone="deep"
        eyebrow="The problem"
        title="Sound familiar?"
        items={[
          { icon: "⏱", title: "Leads going cold?", body: "Form fills sit in an inbox for hours. By the time someone replies, the buyer has moved on." },
          { icon: "⎘", title: "Copy-paste all day?", body: "Your team moves data between Shopify, sheets, email and your CRM by hand, and mistakes creep in." },
          { icon: "⧉", title: "Tools that don't talk?", body: "You pay for 10 apps, but none of them share data, so nobody sees the full picture." },
        ]}
      />
      <section className="section">
        <div className="wrap">
          <SectionIntro eyebrow="What we automate" title="n8n, GoHighLevel, CRM and custom Python" />
          <div className="mt-8">
            <Tabs
              label="Automation types"
              tabs={[
                { id: "n8n", label: "n8n", content: panel("Powerful, flexible workflows that connect any tool with an API, self-hosted or in the cloud.", ["custom workflow building", "multi-tool integration", "data transformation & mapping", "error handling & monitoring", "API creation"], "2–6 weeks depending on complexity") },
                { id: "ghl", label: "GoHighLevel", content: panel("Your all-in-one CRM, funnels, email and SMS, set up right and automated end to end.", ["CRM setup & configuration", "pipelines & automation workflows", "landing pages", "email sequences", "SMS automation", "payment processor integration", "team training"], "1–3 weeks") },
                { id: "crm", label: "CRM", content: panel("Clean data, automatic lead routing and follow-ups in the CRM you already use, or a custom one built for you.", ["lead capture & qualification", "lead routing & follow-ups", "data sync between tools", "reporting dashboards", "custom CRM database design", "user training & docs"], "2–4 weeks (custom CRM 4–8 weeks)") },
                { id: "python", label: "Python", content: panel("When no-code isn't enough: custom Python scripts, AI agents, scrapers and API integrations built for your exact workflow.", ["custom Python automations", "AI agents (LLM-powered)", "web scraping & data pipelines", "API integrations", "hosting & monitoring"], "scoped per project") },
              ]}
            />
          </div>
        </div>
      </section>
      <CardGrid
        tone="deep"
        eyebrow="Use cases"
        title="What this looks like in your business"
        columns={6}
        items={[
          { icon: "→", title: "Speed-to-lead", body: "New form/ad lead → AI qualifies → CRM updated → SMS + email in under a minute → call booked." },
          { icon: "→", title: "Shopify order ops", body: "New order → inventory sheet updated → Slack alert → review request sent 7 days later." },
          { icon: "→", title: "Abandoned-cart recovery", body: "Cart abandoned → GHL email + SMS sequence → discount on day 2 → stop on purchase." },
          { icon: "→", title: "Invoices & finance", body: "Deal won → invoice generated → payment reminder → finance tracker updated." },
          { icon: "→", title: "Content calendar", body: "Idea in sheet → AI drafts → approval in Slack → scheduled post." },
          { icon: "→", title: "Reporting", body: "Every Monday → pull data from ads, store and CRM → AI summary emailed to the team." },
        ]}
      />
      <p className="wrap -mt-10 pb-8 text-center text-sm"><Link href="/work" className="font-bold text-amber">See automation projects we&apos;ve built →</Link></p>
      <CaseRail eyebrow="Results" title="Results > Promises" copy="Real automations we've built for real businesses." tags={["n8n canvas", "GHL workflow", "dashboard"]} />
      <Comparison
        title="See the difference"
        columns={["Innoventix Hub", "Doing it manually", "Typical freelancer"]}
        rows={[
          { label: "Works 24/7 without breaks", cells: ["yes", "no", "yes"] },
          { label: "Built around your exact workflow", cells: ["yes", "yes", "partial"] },
          { label: "Error handling & monitoring included", cells: ["yes", "no", "no"] },
          { label: "Connects to voice agents, web & SEO", cells: ["yes", "no", "no"] },
          { label: "Documentation & team training", cells: ["yes", "no", "no"] },
          { label: "Scales without hiring", cells: ["yes", "no", "yes"] },
        ]}
      />
      <ProcessTimeline
        title="From audit to a workflow that runs"
        steps={[
          { title: "Free audit call", body: "We map your current workflow and find the hours you lose." },
          { title: "Design", body: "A visual workflow blueprint you approve before we build anything." },
          { title: "Build", body: "We build it in n8n, GHL, your CRM or Python." },
          { title: "Test", body: "Real-data testing with error handling and alerts." },
          { title: "Deploy & train", body: "Go live, with documentation and a team walkthrough." },
          { title: "Monitor & optimize", body: "We watch it run and improve it (optional care plan)." },
        ]}
      />
      <ToolGrid eyebrow="Tool stack" title="We pick the tool that fits" copy="We pick the right tool for the job, not the one we're paid to sell." tools={["n8n", "GoHighLevel", "HubSpot", "Pipedrive", "Zoho", "Salesforce", "Shopify", "Google Sheets", "Slack", "Stripe", "OpenAI", "Python", "Make", "Zapier"]} />
      <Testimonials />
      <QuoteSplit
        eyebrow="Pricing"
        title="Custom quote after a free audit"
        copy="No packages to squeeze into. You get a fixed price for exactly what you need. Book a free automation audit and we'll send a fixed-price proposal within 48 hours."
        includesTitle="What the quote covers"
        includes={["Free workflow audit", "Visual blueprint you approve", "Build, testing and error handling", "Documentation and team training"]}
        sideEyebrow="Works-As-Agreed"
        sideTitle="Works-As-Agreed Guarantee"
        sideBody="If the automation doesn't do what we agreed in the signed blueprint, we fix it free. If we still can't make it work as specified within 30 days of launch, you get a full refund for that workflow."
        sideNotes={["Scope is the approved blueprint.", "Third-party app or API changes and scope changes are excluded.", "You provide access and credentials on time.", "Claims within 30 days of go-live."]}
      />
      <FaqSection items={faqs} />
      <CtaBand title="Stop Doing It by Hand." copy="Book a free 30-minute automation audit. We'll show you which tasks to automate first and what it will save you." />
    </main>
  );
}
