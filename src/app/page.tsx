import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { HomeShorts } from "@/components/VideoGallery";
import { CommandCenter } from "@/components/visuals";
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
  { n: "04", title: "Optimize", body: "Weekly reporting, testing and iteration to compound results." },
];

const reasons = [
  { kicker: "24/7", title: "24/7 AI", body: "Agents answer calls, chats and leads around the clock, in every time zone.", visual: "clock" },
  { kicker: "Integrated", title: "Integrated services", body: "Content, voice, automation, web and SEO from one team.", visual: "nodes" },
  { kicker: "Reporting", title: "Transparent reporting", body: "Live dashboards and weekly reports. You always see the numbers.", visual: "bars" },
  { kicker: "Fast", title: "Fast delivery", body: "First ads in days, agents and automations live in weeks, not months.", visual: "progress" },
];

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={graph(websiteSchema(), professionalServiceSchema(), faqSchema(faqs))} />

      <section data-no-reveal className="hero-stage bg-navy">
        <img src="/assets/glowcopper-bad11725.svg" alt="" className="glow-copper" />
        <img src="/assets/glowgold-30af2e67.svg" alt="" className="glow-gold" />
        <img src="/assets/aiorbloopingclipplaceholder-efc30a34.svg" alt="" className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[min(320px,70%)] -translate-x-1/2 opacity-80" />
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1000px] flex-col items-center px-5 pb-20 pt-16 text-center lg:min-h-[920px] lg:justify-center lg:pt-28">
          <p className="eyebrow">AI growth agency for D2C & SMBs</p>
          <h1 data-words className="mt-7 max-w-[920px] text-[40px] leading-[1.04] text-white sm:text-5xl lg:text-[76px] lg:tracking-[-0.76px]">
            AI that sells, talks, and works for your brand 24/7.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pearl/75 lg:text-xl">
            Content, voice agents, and automation, connected to drive revenue.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <BookButton />
            <VoiceButton ghost />
          </div>
          <p className="mt-6 text-[13px] text-mist">Trusted by D2C brands & SMBs in the USA, UK and Europe</p>
        </div>
      </section>

      <LogoMarquee label="Brands we've grown" />

      <section className="section">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Command center</p>
            <h2 className="mt-5 text-3xl text-white md:text-[44px] md:leading-[52px]">One hub. Five capabilities.</h2>
            <p className="mt-4 max-w-md text-[17px] leading-7 text-pearl/80">
              Every service plugs into the same core — so your content, calls and workflows work as one system.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li><Link className="text-amber hover:text-amber-bright" href="/services/content-creation">Content — UGC ads, short-form, long-form</Link></li>
              <li><Link className="text-amber hover:text-amber-bright" href="/services/ai-automation">Automation — n8n, GHL, CRM, Python</Link></li>
              <li><Link className="text-amber hover:text-amber-bright" href="/services/ai-voice-agents">Voice — inbound receptionist, outbound</Link></li>
              <li><Link className="text-amber hover:text-amber-bright" href="/services/web-development">Web — Next.js, Shopify, landing pages</Link></li>
              <li><Link className="text-amber hover:text-amber-bright" href="/services/seo">SEO — technical, on-page, off-page, local</Link></li>
            </ul>
          </div>
          <CommandCenter />
        </div>
      </section>

      <section className="section overflow-hidden pt-0" data-hscroll>
        <div className="wrap">
          <p className="eyebrow">AI UGC ads</p>
          <h2 className="mt-5 text-3xl text-white md:text-[44px]">See the ads.</h2>
          <p className="mt-3 max-w-xl text-pearl/80">Scroll-stopping AI UGC built for TikTok, Reels and Shorts. Hover a card to play.</p>
        </div>
        <div className="wrap mt-8 min-w-0">
          <HomeShorts />
          <Link href="/services/content-creation#work" className="mt-4 inline-flex text-sm font-bold text-amber">See all samples →</Link>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto h-[460px] w-full max-w-[420px]">
            <img src="/assets/amberglow-bb194374.svg" alt="" className="pointer-events-none absolute -left-8 top-0 w-[120%] max-w-none opacity-80" />
            <div className="arch absolute bottom-0 left-1/2 h-[420px] w-[280px] -translate-x-1/2 sm:w-[340px]" />
            <img
              src="/assets/ubaidcutoutbgremoved-4d5d3691.png"
              alt="Ubaid ur Rehman Khan, Founder and CEO"
              width={460}
              height={482}
              className="absolute bottom-0 left-1/2 h-[430px] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            />
            <p className="glass-strong absolute bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-bold text-white">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-amber" />
              Ubaid ur Rehman Khan · Founder & CEO
            </p>
          </div>
          <div>
            <p className="text-[15px] font-bold tracking-[2.7px] text-amber">INTRODUCING</p>
            <h2 className="mt-4 text-4xl leading-[1.15] text-white md:text-[52px] md:leading-[62px]">
              Meet <span className="text-amber">Ubaid ur Rehman Khan</span>, our Founder & CEO.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[30px] text-[#dce5ef]">
              Before founding Innoventix Hub in January 2025, Ubaid worked with international brands at Image2Work, a Danish company, and Broomstick Creative, a UAE company. Today he leads one small, accountable team that builds your growth systems end to end.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Founded Jan 2025", "Ex-Image2Work (Denmark)", "Ex-Broomstick Creative (UAE)"].map((chip) => (
                <li key={chip} className="glass-strong rounded-full px-3 py-2 text-[12px] font-bold text-white">{chip}</li>
              ))}
            </ul>
            <div className="mt-7"><BookButton /></div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <p className="eyebrow">Process</p>
          <h2 className="mt-5 text-3xl text-white md:text-[44px]">From idea to revenue in four steps.</h2>
          <p className="mt-3 text-pearl/80">Discover, Build, Launch, Optimize — a line draws itself as you scroll.</p>
          <ol className="relative mt-12 grid gap-4 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 md:block" aria-hidden="true">
              <div className="h-full origin-left bg-amber" style={{ animation: "bar-grow 1.4s ease forwards" }} />
            </div>
            {steps.map((step) => (
              <li key={step.n} className="glass glass-card relative rounded-[20px] p-5">
                <span className="mb-4 grid h-8 w-8 place-items-center rounded-full bg-amber text-xs font-bold text-navy">{step.n}</span>
                <h3 className="text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pearl/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy-deep/40 pt-0">
        <div className="wrap">
          <p className="eyebrow">Why Innoventix</p>
          <h2 className="mt-5 text-3xl text-white md:text-[44px]">Built to grow, not just to ship.</h2>
          <p className="mt-3 text-pearl/80">Four reasons D2C brands and SMBs stay with Innoventix Hub.</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <li key={item.title} className="glass rounded-[22px] p-6">
                <ReasonVisual kind={item.visual} label={item.kicker} />
                <h3 className="mt-4 text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-pearl/80">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="section pt-0">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl text-white md:text-[44px]">Questions, answered.</h2>
          <div className="mt-8"><FaqList items={faqs} /></div>
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

function ReasonVisual({ kind, label }: { kind: string; label: string }) {
  if (kind === "bars") {
    return (
      <div className="flex h-16 items-end gap-2" aria-hidden="true">
        {[40, 70, 52, 88].map((height) => (
          <span key={height} className="w-4 origin-bottom rounded-sm bg-amber/80" style={{ height, animation: "bar-grow 0.8s ease both" }} />
        ))}
      </div>
    );
  }
  if (kind === "progress") {
    return (
      <div className="h-16" aria-hidden="true">
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-4/5 origin-left rounded-full bg-amber" style={{ animation: "bar-grow 1s ease both" }} />
        </div>
        <p className="mt-2 text-xs font-bold tracking-wide text-amber">{label} · Live</p>
      </div>
    );
  }
  if (kind === "nodes") {
    return (
      <div className="flex h-16 items-center gap-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-pillar-content" />
        <span className="h-px w-8 bg-white/30" />
        <span className="h-3 w-3 rounded-full bg-pillar-voice" />
        <span className="h-px w-8 bg-white/30" />
        <span className="h-3 w-3 rounded-full bg-pillar-web" />
      </div>
    );
  }
  return (
    <div className="relative h-16 w-16" aria-hidden="true">
      <span className="absolute inset-2 rounded-full border border-amber/50" />
      <span className="absolute left-1/2 top-1/2 h-5 w-px origin-bottom -translate-x-1/2 -translate-y-full bg-amber" />
      <span className="absolute left-1/2 top-1/2 h-px w-4 bg-amber-bright" />
    </div>
  );
}
