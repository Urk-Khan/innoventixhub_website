import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { UgcSlider } from "@/components/VideoGallery";
import { playableIndex, playableUgc } from "@/content/videos";
import { CommandCenter } from "@/components/visuals";
import FigmaLoop from "@/components/FigmaLoop";
import { founderLoop } from "@/content/motion/home";
import { BookButton, CtaBand, FaqSection, LogoMarquee, Testimonials, VoiceButton } from "@/components/Sections";
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
  { kicker: "Reporting", title: "Transparent reporting", body: "Live dashboards and weekly reports. You always see the numbers.", visual: "bars" },
  { kicker: "Integrated", title: "Integrated services", body: "Content, voice, automation, web and SEO from one team.", visual: "nodes" },
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

      <section className="section overflow-hidden">
        <div className="wrap text-center">
          <p className="pill">Command center</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">One hub. Five capabilities.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-pearl/80">
            Every service plugs into the same core — so your content, calls and workflows work as one system.
          </p>
        </div>
        <CommandCenter />
      </section>

      <section className="section overflow-hidden pt-0">
        <div className="wrap text-center">
          <p className="pill">AI UGC ads</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px]">See the ads.</h2>
          <p className="mx-auto mt-4 max-w-xl text-pearl/80">Scroll-stopping AI UGC built for TikTok, Reels and Shorts. Hover a card to play.</p>
          <UgcSlider videos={playableUgc} label="See the ads" startIndex={playableIndex("OvS8cCPnmIs")} />
          <Link href="/services/content-creation#work" className="mt-6 inline-flex text-sm font-bold text-amber">See all samples →</Link>
        </div>
      </section>

      <FigmaLoop as="section" snippets={founderLoop} data-no-reveal className="section overflow-hidden">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-[420px]">
            <div className="relative h-[500px]">
              <img src="/assets/amberglow-bb194374.svg" alt="" className="pointer-events-none absolute -left-10 top-0 w-[130%] max-w-none opacity-90" />
              <div data-node-id="123:73" className="arch arch-static absolute inset-x-4 bottom-0 top-6" />
              <img
                src="/assets/ubaidcutoutbgremoved-4d5d3691.png"
                data-node-id="123:74"
                alt="Ubaid ur Rehman Khan, Founder and CEO"
                width={460}
                height={482}
                className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto max-w-[74%] -translate-x-1/2 object-contain object-bottom"
              />
            </div>
            <p className="relative z-10 flex items-center justify-center gap-2 bg-[#070b1a] px-4 py-3 text-[13px] font-bold text-white">
              <span className="inline-block size-1.5 rounded-full bg-amber" />
              Ubaid ur Rehman Khan · Founder & CEO
            </p>
          </div>
          <div>
            <p data-node-id="123:81" className="text-[15px] font-bold tracking-[2.7px] text-amber">INTRODUCING</p>
            <h2 data-node-id="123:82" className="mt-4 text-4xl leading-[1.15] text-white md:text-[52px] md:leading-[62px]">
              Meet <span className="text-amber">Ubaid ur Rehman Khan</span>, our Founder & CEO.
            </h2>
            <p data-node-id="123:83" className="mt-6 max-w-xl text-lg leading-[30px] text-[#dce5ef]">
              Before founding Innoventix Hub in January 2025, Ubaid worked with international brands at Image2Work, a Danish company, and Broomstick Creative, a UAE company. Today he leads one small, accountable team that builds your growth systems end to end.
            </p>
            <ul data-node-id="123:84" className="mt-6 flex flex-wrap gap-2">
              {["Founded Jan 2025", "Ex-Image2Work (Denmark)", "Ex-Broomstick Creative (UAE)"].map((chip) => (
                <li key={chip} className="glass-strong rounded-full px-3 py-2 text-[12px] font-bold text-white">{chip}</li>
              ))}
            </ul>
            <div data-node-id="123:94" className="mt-7 w-fit"><BookButton /></div>
          </div>
        </div>
      </FigmaLoop>

      <section className="section pt-0">
        <div className="wrap text-center">
          <p className="pill">Our process</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">From idea to revenue in four steps.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pearl/80">Discover, Build, Launch, Optimize — a line draws itself as you scroll.</p>
          <ol className="relative mt-10 grid gap-6 md:mt-16 md:grid-cols-4 md:gap-10">
            <svg data-line className="pointer-events-none absolute left-[12%] right-[12%] top-[11px] hidden h-[2px] w-[76%] md:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 1 H100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
              <path data-line-draw d="M0 1 H100" stroke="#5df0a8" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            {steps.map((step) => (
              <li key={step.n} className="relative flex items-start gap-4 text-left md:block md:text-center">
                <span data-step-dot className="relative z-10 grid shrink-0 md:mx-auto md:grid size-6 place-items-center rounded-full border-2 border-white/25 bg-navy">
                  <span className="size-2.5 rounded-full bg-white/40" />
                </span>
                <div>
                  <h3 className="text-xl text-white md:mt-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-pearl/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-bento className="section bg-navy-deep">
        <div className="wrap text-center">
          <p className="pill">Why Innoventix</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">Built to grow, not just to ship.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pearl/80">Four reasons D2C brands and SMBs stay with Innoventix Hub.</p>
          <ul className="mt-12 grid gap-5 text-left md:grid-cols-2">
            {reasons.map((item) => (
              <li key={item.title} data-bento-card className="glass flex flex-col justify-end rounded-2xl p-5 md:min-h-[340px] md:rounded-[28px] md:p-8">
                {/* Figma mobile shows compact title + blurb rows; the in-card visual is desktop/tablet only. */}
                <div className="hidden md:block"><ReasonVisual kind={item.visual} label={item.kicker} /></div>
                <h3 className="text-[22px] text-white md:mt-6 md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[21px] text-pearl/80 md:text-[15px] md:leading-7">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <FaqSection items={faqs} />

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
      <div className="flex h-44 items-end gap-3" aria-hidden="true">
        {[42, 68, 54, 100, 76].map((height) => (
          <span key={height} data-bento-bar className="w-8 origin-bottom rounded-t-md bg-amber/90 md:w-10" style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }
  if (kind === "progress") {
    return (
      <div aria-hidden="true">
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div data-bento-progress className="h-full w-4/5 origin-left rounded-full bg-amber" />
        </div>
        <p className="mt-3 text-xs font-bold tracking-wide text-amber">{label} · Live</p>
      </div>
    );
  }
  if (kind === "nodes") {
    return (
      <svg viewBox="0 0 260 36" className="h-16 w-full max-w-sm" aria-hidden="true">
        <path data-bento-wire d="M16 18 H244" stroke="#5df0a8" strokeWidth="2" fill="none" />
        <circle data-bento-glow r="5" cy="18" cx="16" fill="#8ff7c4" />
        {[16, 92, 168, 244].map((cx) => (
          <circle key={cx} data-bento-dot cx={cx} cy="18" r="6" fill="#8fae8b" />
        ))}
      </svg>
    );
  }
  return (
    <div className="flex items-end gap-5">
      <svg viewBox="0 0 64 64" className="clock size-16 shrink-0 text-amber md:size-20" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
        <line className="clock-hand clock-min" x1="32" y1="32" x2="32" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line className="clock-hand clock-hour" x1="32" y1="32" x2="32" y2="20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
      <p className="text-[88px] font-bold leading-none text-amber md:text-[112px]">
        <span data-count="24">24</span>
        <span className="text-[0.45em]">/7</span>
      </p>
    </div>
  );
}
