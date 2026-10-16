import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ProcessTimeline from "@/components/ProcessTimeline";
import Tabs from "@/components/Tabs";
import { BookButton, Breadcrumbs, Comparison, CtaBand, FaqList, LogoMarquee, SectionIntro, Testimonials, VoiceButton } from "@/components/Sections";
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
    <div className="glass rounded-3xl p-6">
      <p>{line}</p>
      <ul className="mt-4 space-y-1 text-sm">{includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
      <p className="mt-4 text-sm text-amber">Timeline: {timeline}</p>
      <a href={site.calendlyUrl} className="mt-4 inline-block text-sm font-bold text-amber">Book A Free Consultation</a>
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
      <section className="bg-navy">
        <div className="wrap py-16">
          <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
          <p className="eyebrow mt-6">AI Automation · n8n · GoHighLevel · CRM · Python</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Your Business, on Autopilot. The AI Automation Agency for Growing Brands.</h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">We build n8n, GoHighLevel, CRM and custom Python automations that capture leads, follow up in seconds, sync your tools and remove hours of manual work every week, so your team can focus on growth.</p>
          <div className="mt-8 flex flex-wrap gap-3"><BookButton /><VoiceButton ghost /></div>
          <p className="mt-4 text-sm text-mist/80">Built for D2C brands and SMBs in the US, UK & EU</p>
        </div>
      </section>
      <section className="section" aria-label="The Workflow Assembly">
        <div className="wrap">
          <h2 className="text-3xl font-black">The Workflow Assembly</h2>
          <p className="mt-3 max-w-2xl text-cream/75">Your tools today: disconnected. We connect them, and it runs on its own.</p>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              ["Your tools today: disconnected.", "Gmail, Shopify, Sheets, HubSpot, GHL, Slack, Stripe and OpenAI sit apart."],
              ["We connect them.", "Nodes snap into a workflow and amber wires draw between them."],
              ["…and it runs on its own.", "Lead captured → Qualified → CRM updated → Follow-up sent. Running 24/7."],
            ].map(([title, body]) => (
              <li key={title} className="glass rounded-3xl p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm text-cream/75">{body}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <LogoMarquee label="Brands we've worked with" />
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">Sound familiar?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Leads going cold?", "Form fills sit in an inbox for hours. By the time someone replies, the buyer has moved on."],
              ["Copy-paste all day?", "Your team moves data between Shopify, sheets, email and your CRM by hand, and mistakes creep in."],
              ["Tools that don't talk?", "You pay for 10 apps, but none of them share data, so nobody sees the full picture."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <SectionIntro title="What we automate" />
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
      <section className="section bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black">What this looks like in your business</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Speed-to-lead", "New form/ad lead → AI qualifies → CRM updated → SMS + email in under a minute → call booked."],
              ["Shopify order ops", "New order → inventory sheet updated → Slack alert → review request sent 7 days later."],
              ["Abandoned-cart recovery", "Cart abandoned → GHL email + SMS sequence → discount on day 2 → stop on purchase."],
              ["Invoices & finance", "Deal won → invoice generated → payment reminder → finance tracker updated."],
              ["Content calendar", "Idea in sheet → AI drafts → approval in Slack → scheduled post."],
              ["Reporting", "Every Monday → pull data from ads, store and CRM → AI summary emailed to the team."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-5"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
          <p className="mt-6 text-sm"><Link href="/work" className="text-amber">See automation projects we've built</Link></p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">Results &gt; Promises</h2>
          <p className="mt-2 text-cream/75">Real automations we've built for real businesses.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {["n8n canvas", "GHL workflow", "dashboard"].map((shot) => (
              <li key={shot} className="rounded-3xl bg-cream p-5 text-ink">
                <p className="text-xs font-bold">SAMPLE</p>
                <h3 className="mt-3 text-2xl font-black">[Stat from client]</h3>
                <div className="mt-4 rounded-xl bg-navy/10 p-8 text-xs">{shot}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">Tool stack</h2>
          <p className="mt-2 text-sm text-cream/75">We pick the right tool for the job, not the one we're paid to sell.</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["n8n", "GoHighLevel", "HubSpot", "Pipedrive", "Zoho", "Salesforce", "Shopify", "Google Sheets", "Slack", "Stripe", "OpenAI", "Python", "Make", "Zapier"].map((tool) => <li key={tool} className="glass rounded-full px-4 py-2">{tool}</li>)}
          </ul>
        </div>
      </section>
      <Testimonials />
      <section className="section pt-0">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6">
            <p className="text-xs font-bold tracking-wide text-amber">Free audit first · fixed-price proposal in 48 hours</p>
            <h2 className="mt-3 text-3xl font-black">Custom quote after a free audit</h2>
            <p className="mt-3 text-sm text-cream/80">No packages to squeeze into. You get a fixed price for exactly what you need. Every business runs differently, so every automation is scoped to fit. Book a free automation audit. We'll map your workflows and send a fixed-price proposal within 48 hours.</p>
            <ul className="mt-4 space-y-1 text-sm">{["Free workflow audit", "Visual blueprint you approve", "Build, testing & error handling", "Documentation & team training"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <div className="mt-5"><BookButton /></div>
          </article>
          <article className="glass-strong rounded-3xl p-6">
            <h2 className="text-2xl font-black">Works-As-Agreed Guarantee</h2>
            <p className="mt-3 text-sm">If the automation doesn’t do what we agreed in the signed blueprint, we fix it free. If we still can’t make it work as specified within 30 days of launch, you get a full refund for that workflow.</p>
            <ul className="mt-4 space-y-1 text-sm text-cream/80">
              <li>Scope is the approved blueprint.</li>
              <li>Third-party app or API changes and scope changes are excluded.</li>
              <li>You provide access and credentials on time.</li>
              <li>Claims within 30 days of go-live.</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-6"><FaqList items={faqs} /></div>
        </div>
      </section>
      <CtaBand title="Stop Doing It by Hand." copy="Book a free 30-minute automation audit. We'll show you which tasks to automate first and what it will save you." />
    </main>
  );
}
