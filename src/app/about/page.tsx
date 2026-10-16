import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
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

const facts = [
  { title: "National Assembly of Pakistan", body: "Ubaid led a team of interns at an international IPU conference." },
  { title: "Founded January 2025", body: "Self-funded, so we answer to our clients, not investors." },
  { title: "US, UK & EU clients", body: "D2C brands and SMBs, working in their business hours." },
];

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        organizationSchema(),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        { "@type": "AboutPage", name: "About Innoventix Hub", url: `${site.url}/about`, mainEntity: { "@id": `${site.url}/#organization` } },
      )} />
      <section className="bg-navy">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About Innoventix Hub</p>
            <h1 className="mt-5 text-4xl font-black md:text-5xl">A Small, Focused Team Building Growth Systems for Ambitious Brands.</h1>
            <p className="mt-5 text-lg text-cream/80">We're a self-funded software and media house, started in January 2025. We make AI UGC ads, build AI voice agents and automate busywork, plus websites and SEO, for D2C brands and SMBs in the US, UK and EU.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <a href="#team" className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-bold">Meet the Team</a>
            </div>
          </div>
          <Image src="/team/office-group.jpg" alt="The Innoventix Hub team together in the office" width={1400} height={1400} className="h-auto w-full rounded-[2rem] object-cover" priority />
        </div>
        <ul className="wrap flex flex-wrap gap-3 pb-12 text-sm">
          {["Founded Jan 2025", "Self-funded", "US, UK & EU clients"].map((item) => <li key={item} className="rounded-full border border-white/15 px-4 py-2">{item}</li>)}
        </ul>
      </section>
      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black">Why we started Innoventix Hub</h2>
            <p className="mt-4 text-cream/85 leading-7">Before Innoventix Hub, our founder Ubaid worked with international brands at Image2Work, a Danish company, and Broomstick Creative, a UAE company. His professional journey began at the National Assembly of Pakistan, where he had the opportunity to lead a team of interns at an international IPU conference. Along the way, he saw growing brands juggling separate agencies, freelancers and tools that didn't talk to each other. In January 2025, he founded Innoventix Hub to fix that: one small, accountable team that creates AI UGC ads, automates the busywork and answers calls 24/7 with AI voice agents that sound naturally human. We're self-funded, so we answer to our clients, not investors.</p>
          </div>
          <div className="space-y-3">
            {facts.map((fact) => (
              <article key={fact.title} className="glass rounded-3xl p-5">
                <h3 className="font-bold">{fact.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{fact.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">Mission & values</h2>
          <p className="mt-3 max-w-3xl text-lg">Give growing brands the content, systems and visibility of a big company, without the big-company overhead.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Own the outcome.", "We don't hide behind deliverables. If it isn't working, we fix it."],
              ["Honest by default.", "No fake stats, no ranking promises, no lock-in contracts. We tell you what we know and what we don't."],
              ["Build systems, not one-offs.", "Every video, workflow, agent and page should keep working for you after we ship it."],
              ["Move fast, stay careful.", "Quick launches, but tested, documented and handed over properly."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <article className="glass grid items-center gap-6 rounded-[2rem] p-6 md:grid-cols-[220px_1fr]">
            <Image src="/team/ubaid-cutout.png" alt="Ubaid ur Rehman Khan" width={668} height={700} className="mx-auto h-auto w-48" />
            <div>
              <p className="text-cream/90">I started Innoventix Hub because I'd seen, from the inside, how much time brands lose stitching together agencies and tools. I wanted one team that actually cares whether the work moves your numbers. We're still small, and that's on purpose: you work directly with the people doing the work, and I stay close to every project. If you're building something, I'd love to hear about it.</p>
              <p className="mt-4 font-bold">Ubaid ur Rehman Khan, Founder & CEO</p>
              <div className="mt-4"><BookButton>Book a call with Ubaid</BookButton></div>
            </div>
          </article>
        </div>
      </section>
      <section id="team" className="section scroll-mt-28 bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black">The people behind the work</h2>
          <p className="mt-2 text-cream/75">A small team, working in your business hours.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="glass overflow-hidden rounded-3xl">
                <div className="flex aspect-square items-end justify-center bg-gradient-to-b from-navy-soft to-ink">
                  {member.image ? (
                    <Image src={member.image} alt={member.imageAlt || member.name} width={800} height={800} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber to-navy text-2xl font-black text-ink" aria-hidden="true">{member.initials}</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-mist/80">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">How working with us feels</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["One team, one point of contact.", "You talk to the people doing the work, not a chain of account managers."],
              ["Clear proposals, no surprises.", "Scope, timeline and cost in writing before we start."],
              ["Your time zone.", "We work in US, UK and EU business hours."],
              ["You own everything.", "Content, code, accounts and data are yours."],
              ["Honest reporting.", "Real numbers, plainly explained, every time."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-5"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ol>
        </div>
      </section>
      <LogoMarquee />
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">What we do</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceNav.map((service) => (
              <li key={service.href}><Link href={service.href} className="glass block h-full rounded-3xl p-4 font-bold hover:border-amber/40">{service.label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Let's build something that works." copy="Tell us what you're working on. We'll reply with honest advice and a clear next step." secondary="whatsapp" />
      <p className="sr-only"><WhatsAppButton /></p>
    </main>
  );
}
