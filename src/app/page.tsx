import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import HomeOrbit from "@/components/HomeOrbit";
import { HomeShorts } from "@/components/VideoGallery";
import { BookButton, CtaBand, FaqList, LogoMarquee, Testimonials, VoiceButton } from "@/components/Sections";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { faqSchema, graph, professionalServiceSchema, websiteSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Innoventix Hub: AI UGC Ads, Voice Agents & Automation",
  description: "AI UGC ads, voice agents, automation, web & SEO for D2C brands and SMBs in the US, UK & EU. Book a free consultation.",
  path: "/",
});

const faqs = [
  {
    q: "Do I need all five services?",
    a: "No. Most clients start with one pillar and add more as they grow — everything is built to connect.",
  },
  {
    q: "How long does a project take?",
    a: "Landing pages go live in 24–48 hours and custom websites in 5–7 days once content is ready. AI UGC videos usually take 5–10 business days, voice agents 2–4 weeks, and automations from 1–6 weeks depending on the tool. Your written proposal confirms the timeline.",
  },
  {
    q: "Can I start with just one service?",
    a: "Yes. Start with the service that moves the needle first. Content, voice, automation, web and SEO are built so they can connect later.",
  },
  {
    q: "How does pricing work?",
    a: "Content creation and voice agents have published starting points. Automation, web and SEO are quoted after a free consultation, with a fixed written proposal before any work starts.",
  },
];

const steps = [
  { n: "01", title: "Discover", body: "Audit your funnel, offers and ops. Find the highest-ROI AI wins." },
  { n: "02", title: "Build", body: "Ads, agents and workflows designed and shipped by one team." },
  { n: "03", title: "Launch", body: "Go live across channels with tracking from day one." },
  { n: "04", title: "Optimize", body: "Weekly reviews so the wins compound." },
];

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={graph(websiteSchema(), professionalServiceSchema(), faqSchema(faqs))} />
      <section className="relative overflow-hidden bg-navy">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="eyebrow">AI growth agency for D2C & SMBs</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">
              AI that sells, talks, and works for your brand 24/7.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cream/80">
              Content, voice agents, and automation, connected to drive revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <VoiceButton ghost />
            </div>
            <p className="mt-6 text-sm text-mist/80">Trusted by D2C brands & SMBs in the USA, UK and Europe</p>
          </div>
          <div className="glass relative mx-auto flex aspect-[4/5] w-full max-w-md flex-col justify-between overflow-hidden rounded-[2rem] p-6" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/30 blur-2xl" />
            <p className="relative text-xs font-bold tracking-[0.16em] text-amber">ONE SYSTEM</p>
            {["Answering call…", "Booking appointment…", "Following up the lead…"].map((line) => (
              <p key={line} className="glass relative rounded-2xl px-4 py-3 text-sm">{line}</p>
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee label="Trusted by D2C brands across the US, UK & EU" />

      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Command center</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">One hub. Five capabilities.</h2>
            <p className="mt-4 text-cream/75">
              Every service plugs into the same core — so your content, calls and workflows work as one system.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li><Link className="text-amber hover:underline" href="/services/content-creation">Content — UGC ads, short-form, long-form</Link></li>
              <li><Link className="text-amber hover:underline" href="/services/ai-automation">Automation — n8n, GHL, CRM, Python</Link></li>
              <li><Link className="text-amber hover:underline" href="/services/ai-voice-agents">Voice — inbound receptionist, outbound</Link></li>
              <li><Link className="text-amber hover:underline" href="/services/web-development">Web — Next.js, Shopify, landing pages</Link></li>
              <li><Link className="text-amber hover:underline" href="/services/seo">SEO — technical, on-page, off-page, local</Link></li>
            </ul>
          </div>
          <HomeOrbit />
        </div>
      </section>

      <section className="section bg-navy/40">
        <div className="wrap">
          <p className="eyebrow">AI UGC ads</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">See the ads.</h2>
          <p className="mt-3 text-cream/75">Scroll-stopping AI UGC built for TikTok, Reels and Shorts. Hover a card to play.</p>
          <HomeShorts />
          <Link href="/services/content-creation#work" className="mt-4 inline-block text-sm font-bold text-amber">See all samples</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">From idea to revenue in four steps.</h2>
          <p className="mt-3 text-cream/75">Discover, Build, Launch, Optimize — a line draws itself as you scroll.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="glass rounded-3xl p-5">
                <p className="text-sm font-bold text-amber">{step.n}</p>
                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black md:text-5xl">Built to grow, not just to ship.</h2>
          <p className="mt-3 text-cream/75">Four reasons D2C brands and SMBs stay with Innoventix Hub.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["24/7 AI", "Agents answer calls, chats and leads around the clock, in every time zone."],
              ["Integrated services", "Content, voice, automation, web and SEO from one team."],
              ["Transparent reporting", "Live dashboards and weekly reports. You always see the numbers."],
              ["Fast delivery", "First ads in days, agents and automations live in weeks, not months."],
            ].map(([title, body]) => (
              <li key={title} className="glass rounded-3xl p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-cream/75">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src="/team/ubaid-cutout.png"
            alt="Ubaid ur Rehman Khan, Founder and CEO"
            width={668}
            height={700}
            className="mx-auto h-auto w-full max-w-sm"
          />
          <div>
            <p className="eyebrow">Introducing</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Meet Ubaid ur Rehman Khan, our Founder & CEO</h2>
            <p className="mt-4 text-cream/80">
              Before founding Innoventix Hub in January 2025, Ubaid worked with international brands at Image2Work, a Danish company, and Broomstick Creative, a UAE company. Today he leads one small, accountable team that builds your growth systems end to end.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm">
              {["Founded Jan 2025", "Ex-Image2Work (Denmark)", "Ex-Broomstick Creative (UAE)"].map((chip) => (
                <li key={chip} className="rounded-full border border-white/15 px-3 py-1">{chip}</li>
              ))}
            </ul>
            <div className="mt-6">
              <BookButton />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black md:text-4xl">Questions, answered.</h2>
          <div className="mt-6"><FaqList items={faqs} /></div>
        </div>
      </section>

      <CtaBand
        title="Let's build your AI growth engine."
        copy="30-minute call. No pitch deck. A clear plan for your brand."
      />
      <p className="sr-only">Call {site.voiceAgentDisplay} or WhatsApp {site.phoneWhatsappDisplay}.</p>
    </main>
  );
}
