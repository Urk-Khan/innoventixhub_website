import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ServiceNetwork, StoryCarousel } from "@/components/about-visuals";
import { BookButton, CtaBand, LogoMarquee, WhatsAppButton } from "@/components/Sections";
import { serviceNav, site } from "@/config/site";
import { team } from "@/content/team";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, organizationSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "About Innoventix Hub | AI UGC, Voice Agents & Automation Studio",
  description: "Innoventix Hub is a self-funded software and media house making AI UGC ads, AI voice agents, automation, websites and SEO for D2C brands and SMBs in the US, UK and EU.",
  path: "/about",
});

const values = [
  ["◎", "Own the outcome.", "We don't hide behind deliverables. If it isn't working, we fix it."],
  ["✓", "Honest by default.", "No fake stats, no ranking promises, no lock-in contracts. We tell you what we know and what we don't."],
  ["⚙", "Build systems, not one-offs.", "Every video, workflow, agent and page should keep working for you after we ship it."],
  ["↗", "Move fast, stay careful.", "Quick launches, but tested, documented and handed over properly."],
];

const feelings = [
  ["01", "One team, one point of contact.", "You talk to the people doing the work, not a chain of account managers."],
  ["02", "Clear proposals, no surprises.", "Scope, timeline and cost in writing before we start."],
  ["03", "Your time zone.", "We work in US, UK and EU business hours."],
  ["04", "You own everything.", "Content, code, accounts and data are yours."],
  ["05", "Honest reporting.", "Real numbers, plainly explained, every time."],
];

const services = [
  { mono: "UG", label: "Content Creation (UGC)", href: "/services/content-creation", color: "#ffb547" },
  { mono: "Au", label: "AI Automation", href: "/services/ai-automation", color: "#3e63dd" },
  { mono: "Vo", label: "AI Voice Agents", href: "/services/ai-voice-agents", color: "#30a46c" },
  { mono: "We", label: "Web Development", href: "/services/web-development", color: "#8e4ec6" },
  { mono: "SE", label: "SEO", href: "/services/seo", color: "#e5484d" },
];

const facts = ["Founded Jan 2025", "Self-funded", "US, UK & EU clients"];

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        organizationSchema(),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        { "@type": "AboutPage", name: "About Innoventix Hub", url: `${site.url}/about`, mainEntity: { "@id": `${site.url}/#organization` } },
      )} />

      <section className="hero-stage relative overflow-hidden bg-navy">
        <img src="/assets/glowcopper-92d117a3.svg" alt="" className="glow-copper" />
        <img src="/assets/glowgold-8f6d11b9.svg" alt="" className="glow-gold" />
        <div className="relative z-10 px-5 pb-16 pt-28 lg:px-0 lg:pb-20 lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
            <p className="eyebrow">About Innoventix Hub</p>
            <h1 data-words className="mt-7 max-w-[920px] text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px] lg:tracking-[-0.64px]">
              A Small, Focused Team Building <span className="text-amber">Growth Systems</span> for Ambitious Brands.
            </h1>
            <p className="mt-7 max-w-[680px] text-[18px] leading-normal text-pearl/75 sm:text-[20px]">
              We&apos;re a self-funded software and media house, started in January 2025. We make AI UGC ads, build AI voice agents and automate busywork, plus websites and SEO, for D2C brands and SMBs in the US, UK and EU.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <BookButton />
              <a href="#team" className="btn-secondary">Meet the Team</a>
            </div>
            <p className="mt-5 text-[13px] font-medium text-mist">Founded Jan 2025 · Self-funded · US, UK & EU clients</p>
          </div>
          <ServiceNetwork />
        </div>
      </section>

      <section className="bg-navy-deep py-7">
        <ul className="wrap flex flex-wrap items-center justify-center gap-3 sm:gap-7">
          {facts.map((fact) => (
            <li key={fact} className="pill">{fact}</li>
          ))}
        </ul>
      </section>

      <section className="bg-navy py-20 lg:py-[100px]">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:gap-12">
          <div>
            <p className="pill">Our story</p>
            <h2 className="mt-6 max-w-[774px] text-[34px] font-bold leading-[1.15] text-white lg:text-[44px] lg:leading-[52px]">Why we started Innoventix Hub</h2>
            <p className="mt-6 max-w-[774px] text-[18px] leading-[30px] text-[#dce5ef]">
              Before Innoventix Hub, our founder Ubaid worked with international brands at Image2Work, a Danish company, and Broomstick Creative, a UAE company. His professional journey began at the National Assembly of Pakistan, where he had the opportunity to lead a team of interns at an international IPU conference. Along the way, he saw growing brands juggling separate agencies, freelancers and tools that didn&apos;t talk to each other. In January 2025, he founded Innoventix Hub to fix that: one small, accountable team that creates AI UGC ads, automates the busywork and answers calls 24/7 with AI voice agents that sound naturally human. We&apos;re self-funded, so we answer to our clients, not investors.
            </p>
          </div>
          <StoryCarousel />
        </div>
      </section>

      <section className="bg-navy-deep py-20 lg:py-[100px]">
        <div className="wrap text-center">
          <p className="pill">Mission & values</p>
          <h2 className="mx-auto mt-6 max-w-[900px] text-[32px] font-bold leading-[1.15] text-white lg:text-[44px] lg:leading-[52px]">
            Give growing brands the content, systems and visibility of a big company, without the big-company overhead.
          </h2>
          <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 xl:grid-cols-4">
            {values.map(([icon, title, body]) => (
              <li key={title} className="glass min-h-[250px] rounded-[20px] p-5">
                <span className="grid size-12 place-items-center rounded-[14px] border border-amber/50 bg-amber/15 text-[22px] font-bold text-amber">{icon}</span>
                <h3 className="mt-5 text-[18px] font-bold text-white">{title}</h3>
                <p className="mt-3 text-[14px] leading-[21px] text-mist">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-navy py-20 lg:py-[110px]">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[540px_minmax(0,1fr)]">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="relative h-[540px]">
              <img loading="lazy" decoding="async" src="/assets/amberglow-84f416af.svg" alt="" className="pointer-events-none absolute -left-10 top-0 w-[130%] max-w-none" />
              <div className="arch absolute inset-x-2 bottom-0 top-4" />
              <img
                loading="lazy"
                decoding="async"
                src="/assets/ubaidcutoutbgremoved-4d5d3691.png"
                alt="Ubaid ur Rehman Khan"
                width={460}
                height={482}
                className="absolute bottom-0 left-1/2 z-10 h-[94%] w-auto max-w-[72%] -translate-x-1/2 object-contain object-bottom"
              />
            </div>
            <p className="relative z-10 flex items-center justify-center gap-2 bg-[#0c1c30] px-4 py-3 text-[13px] font-bold text-white">
              <span className="inline-block size-1.5 rounded-full bg-amber" />
              Ubaid ur Rehman Khan · Founder & CEO
            </p>
          </div>
          <div>
            <p className="text-[15px] font-bold tracking-[2.1px] text-amber">A NOTE FROM OUR FOUNDER</p>
            <p className="mt-4 max-w-[580px] text-[20px] leading-[32px] text-white lg:text-[22px] lg:leading-[35px]">
              “I started Innoventix Hub because I&apos;d seen, from the inside, how much time brands lose stitching together agencies and tools. I wanted one team that actually cares whether the work moves your numbers. We&apos;re still small, and that&apos;s on purpose: you work directly with the people doing the work, and I stay close to every project. If you&apos;re building something, I&apos;d love to hear about it.”
            </p>
            <p className="mt-8 text-[28px] font-bold text-amber">Ubaid ur Rehman Khan</p>
            <p className="mt-1 text-[14px] text-mist">Founder & CEO</p>
            <div className="mt-6">
              <BookButton>Book a call with Ubaid</BookButton>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-28 bg-navy-deep py-20 lg:py-[100px]">
        <div className="wrap text-center">
          <p className="pill">Our team</p>
          <h2 className="mt-6 text-[34px] font-bold leading-[1.15] text-white lg:text-[44px] lg:leading-[52px]">The people behind the work</h2>
          <p className="mt-3 text-[18px] leading-7 text-mist">A small team, working in your business hours.</p>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="glass overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="relative h-[260px] bg-[radial-gradient(circle_at_center,#2f5a8c_0%,#1e3a5f_60%,#132a45_100%)] sm:h-[300px] lg:h-[326px]">
                  {member.image ? (
                    <img loading="lazy" decoding="async" src={member.image} alt={member.imageAlt || member.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="grid h-full place-items-center">
                      <div className="grid size-[196px] place-items-center rounded-full bg-[conic-gradient(from_180deg,#ffb547,#3e63dd,#30a46c,#8e4ec6,#e5484d,#ffb547)] p-[6px]">
                        <span className="grid h-full w-full place-items-center rounded-full bg-[#1a3657] text-[64px] font-bold text-white">{member.initials}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-[18px] font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-[14px] leading-5 text-amber">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-[100px]">
        <div className="wrap text-center">
          <p className="pill">How we work</p>
          <h2 className="mt-6 text-[34px] font-bold text-white lg:text-[44px] lg:leading-[52px]">How working with us feels</h2>
          <ol className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
            {feelings.map(([n, title, body]) => (
              <li key={n} className="glass min-h-[220px] rounded-[18px] p-5">
                <p className="text-[28px] font-bold text-amber">{n}</p>
                <h3 className="mt-4 text-[16px] font-bold leading-[21px] text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-[19px] text-mist">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LogoMarquee />

      <section className="bg-navy-deep py-20 lg:py-[100px]">
        <div className="wrap text-center">
          <p className="pill">What we do</p>
          <h2 className="mt-6 text-[34px] font-bold text-white lg:text-[44px] lg:leading-[52px]">Five services, one accountable team</h2>
          <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="glass flex h-[150px] flex-col rounded-[18px] p-5">
                  <span className="grid size-11 place-items-center rounded-[12px] text-[15px] font-bold text-white" style={{ background: service.color }}>{service.mono}</span>
                  <span className="mt-4 text-[15px] font-bold text-white">{service.label}</span>
                  <span className="mt-auto text-[13px] font-bold text-amber">Explore →</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="sr-only">{serviceNav.map((item) => item.label).join(", ")}</p>
        </div>
      </section>

      <CtaBand title="Let's build something that works." copy="Tell us what you're working on. We'll reply with honest advice and a clear next step." secondary="whatsapp" />
      <p className="sr-only"><WhatsAppButton /></p>
    </main>
  );
}
