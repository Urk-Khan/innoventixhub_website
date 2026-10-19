import JsonLd from "@/components/JsonLd";
import ProcessTimeline from "@/components/ProcessTimeline";
import Tabs from "@/components/Tabs";
import VoicePricing from "@/components/VoicePricing";
import { BookButton, Breadcrumbs, CardGrid, CaseRail, Comparison, CtaBand, FaqSection, LogoMarquee, SectionIntro, Testimonials, ToolGrid, VoiceButton } from "@/components/Sections";
import { LivingCall } from "@/components/visuals";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "AI Voice Agent Development Agency, Innoventix Hub",
  description: "Human-sounding AI voice agents that answer, qualify and book 24/7. Call our live demo agent at +1 855 501 0702.",
  path: "/services/ai-voice-agents",
});

const faqs = [
  { q: "What is an AI voice agent?", a: "An AI voice agent is software that talks to callers on the phone in a natural, human-sounding voice. It understands what people say, answers questions, books appointments and takes actions in your systems, on inbound calls, outbound calls or both." },
  { q: "Will callers know they're talking to AI?", a: "The voices sound natural, but we recommend being transparent, for example \"I'm the virtual assistant for [brand]\". It builds trust and keeps you on the right side of disclosure rules in the US, UK and EU. Callers can ask for a human at any time." },
  { q: "What's the difference between inbound and outbound agents?", a: "Inbound agents answer calls coming to your business, like a receptionist. Outbound agents make calls for you: calling new leads back, qualifying them, booking meetings and sending reminders or follow-ups. Many clients start with one and add the other." },
  { q: "What happens if the AI can't answer something?", a: "It follows the rules we agree on: it can transfer the call to your team with a short summary, take a message, or book a callback. Nothing is left hanging, and every call comes with a transcript so you see exactly what happened." },
  { q: "Can it book appointments and update my CRM?", a: "Yes. We connect it to your calendar (Google, Calendly, Outlook) and CRM (HubSpot, Salesforce, GoHighLevel and others), so bookings, contact details and call notes are saved automatically and can trigger follow-up SMS or emails." },
  { q: "Can I keep my existing phone number?", a: "Yes. You can forward your existing number to the agent (all calls, after-hours only, or when the line is busy), or we can set up a new local or toll-free number for you." },
  { q: "How long does setup take?", a: "Most agents go live in 2–4 weeks, depending on how many call flows and integrations you need. You approve the scripts and test the agent yourself before launch." },
  { q: "Which languages and accents are supported?", a: "English with US or UK accents by default, with other languages available on request." },
  { q: "Is it compliant and are calls recorded securely?", a: "We add call-recording disclosures, respect opt-outs and do-not-call rules for outbound campaigns, and store recordings and transcripts with the access controls of the platform we deploy on. For outbound calling, you must have consent to contact the leads; we help you set this up correctly for the US (TCPA), UK and EU (GDPR). This isn't legal advice, so check your specific case." },
];

function panel(line: string, includes: string[]) {
  return (
    <div className="glass grid items-center gap-6 rounded-[24px] p-6 text-left lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-pearl/85">{line}</p>
        <ul className="mt-4 grid gap-1 text-sm sm:grid-cols-2">{includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
        <p className="mt-4 text-sm font-bold text-amber">2–4 weeks to launch</p>
        <a href={site.calendlyUrl} className="mt-3 inline-block text-sm font-bold text-amber">Book A Free Consultation →</a>
      </div>
      <div className="rounded-[24px] border border-white/10 bg-[#0f2138] p-4">
        <div className="mb-3 flex items-center gap-2 text-xs text-mist"><span className="pulse-dot inline-flex size-2 rounded-full bg-[#5bd49a]" /> Live call</div>
        <div className="flex h-10 items-end gap-1">
          {Array.from({ length: 13 }).map((_, index) => (
            <span key={index} className="w-1.5 rounded-full bg-amber" style={{ height: `${12 + ((index * 17) % 28)}px`, animation: `floaty ${1.2 + (index % 4) * 0.15}s ease-in-out infinite` }} />
          ))}
        </div>
        <p className="mt-3 text-xs text-pearl/70">Ava · booking the next open slot</p>
      </div>
    </div>
  );
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Voice Agents", path: "/services/ai-voice-agents" },
];

export default function VoicePage() {
  return (
    <main id="main">
      <JsonLd data={graph(
        breadcrumbSchema(crumbs),
        serviceSchema({
          name: "AI voice agents",
          serviceType: "AI voice agent development",
          description: "Human-sounding AI voice agents that answer, qualify and book 24/7.",
          path: "/services/ai-voice-agents",
          catalog: [
            { name: "Inbound AI Receptionist", description: "Answers, books and routes calls 24/7." },
            { name: "Outbound AI Voice Agents", description: "Calls leads, qualifies them and books meetings." },
          ],
        }),
        faqSchema(faqs),
      )} />
      <section className="hero-stage overflow-hidden bg-navy">
        <img src="/assets/glowgold-30af2e67.svg" alt="" className="glow-gold" />
        <div className="relative z-10 px-5 pb-16 pt-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
            <p className="eyebrow mt-6">AI Voice Agents · Inbound Receptionist · Outbound Calling</p>
            <h1 data-words className="mt-7 max-w-[920px] text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Never Miss Another Call. AI Voice Agents for 24/7 Sales, Support and Bookings.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">We build human-sounding AI voice agents that answer every call, qualify leads, book appointments and follow up in seconds, then log everything to your CRM. Built for D2C brands and SMBs in the US, UK & EU.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <VoiceButton>{`Talk to Inbound Agent · ${site.voiceAgentDisplay}`}</VoiceButton>
              <BookButton ghost />
            </div>
            <p className="mt-5 text-[13px] text-mist">Live demo line, call it now. No forms, no signup.</p>
          </div>
          <div className="relative mx-auto mt-10 grid h-[280px] w-[280px] place-items-center" aria-hidden="true">
            <span className="absolute size-[220px] rounded-full border border-amber/30" />
            <span className="absolute size-[160px] rounded-full border border-amber/50" />
            <span className="grid size-[96px] place-items-center rounded-full bg-amber text-[13px] font-bold text-navy shadow-[0_0_40px_rgba(255,181,71,0.55)]">Voice</span>
          </div>
        </div>
      </section>
      <LivingCall />
      <LogoMarquee label="Brands we've worked with" />
      <CardGrid
        tone="deep"
        eyebrow="The problem"
        title="Sound familiar?"
        items={[
          { icon: "☎", title: "Calls going to voicemail?", body: "After hours, weekends, busy lunch rush: callers hang up and dial the next business." },
          { icon: "⏱", title: "Leads waiting hours for a call back?", body: "By the time someone rings a new lead, they've already spoken to a competitor." },
          { icon: "◎", title: "Staff stuck on the phone?", body: "Your team answers the same questions all day instead of serving customers and selling." },
        ]}
      />
      <section className="section">
        <div className="wrap">
          <SectionIntro eyebrow="What we build" title="Inbound receptionist and outbound agents" />
          <div className="mt-8">
            <Tabs label="Voice agent types" tabs={[
              { id: "inbound", label: "Inbound AI Receptionist", content: panel("An AI receptionist that picks up on the first ring, day or night, answers questions, books appointments and routes urgent calls to your team.", ["24/7 call answering", "FAQs trained on your business", "appointment booking & rescheduling", "call screening & routing", "warm transfer to a human", "message taking & SMS confirmations", "call recordings, transcripts & summaries"]) },
              { id: "outbound", label: "Outbound AI Voice Agents", content: panel("AI agents that call new leads within seconds, qualify them, book meetings and run follow-up, reminder and reactivation campaigns at scale.", ["speed-to-lead callbacks", "lead qualification calls", "appointment setting", "reminders & confirmations", "follow-up and win-back campaigns", "feedback & survey calls", "local time-zone scheduling", "CRM logging of every call"]) },
            ]} />
          </div>
        </div>
      </section>
      <CardGrid
        tone="deep"
        eyebrow="Use cases"
        title="Use cases by industry"
        columns={6}
        items={[
          { icon: "▣", title: "E-commerce / D2C", body: "Order status and returns questions, COD and order confirmation calls, abandoned-cart callbacks, post-purchase review requests." },
          { icon: "▣", title: "Clinics, dental & wellness", body: "Appointment booking, reminders to cut no-shows, new-patient intake questions." },
          { icon: "▣", title: "Home services & trades", body: "Emergency call capture, quote requests, job booking and dispatch notes." },
          { icon: "▣", title: "Real estate", body: "Buyer and renter enquiry qualification, viewing bookings, follow-up on portal leads." },
          { icon: "▣", title: "Restaurants & hospitality", body: "Reservations, opening hours and menu questions, booking changes." },
          { icon: "▣", title: "Agencies & B2B services", body: "Inbound lead qualification, discovery call booking, reactivation of old leads." },
        ]}
      />
      <section className="section">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <p className="pill">Live demo</p>
            <h2 className="mt-6 text-3xl text-white md:text-[44px] md:leading-[52px]">Hear the agent in action</h2>
            <p className="mt-3 text-3xl font-bold text-amber">{site.voiceAgentDisplay}</p>
            <p className="mt-4 max-w-xl text-pearl/80">Don&apos;t take our word for it. Call our inbound AI receptionist right now: ask about services, book a consultation or try to trip it up.</p>
            <div className="mt-6"><VoiceButton>Talk to Inbound Agent</VoiceButton></div>
            <p className="mt-3 text-xs text-mist">Calls may be recorded for quality.</p>
          </div>
          <div className="glass relative mx-auto w-full max-w-sm rounded-[28px] p-5">
            <div className="mb-4 flex items-center justify-between text-xs text-mist">
              <span className="pulse-dot inline-flex size-2.5 rounded-full bg-[#5bd49a]" />
              <span>Incoming · answered in 1 ring</span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="ml-8 rounded-2xl bg-white/10 px-3 py-2">Can I book a consultation this week?</p>
              <p className="mr-8 rounded-2xl bg-amber/15 px-3 py-2 text-pearl">Thursday at 10:30 works. I&apos;ll text you the confirmation.</p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-amber">
              {["Calendar booked", "CRM updated", "SMS sent"].map((chip) => <li key={chip} className="rounded-full border border-amber/30 px-2 py-1">{chip}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <CardGrid
        eyebrow="Under the hood"
        title="What powers your AI voice agent"
        columns={6}
        items={[
          { icon: "♪", title: "Human-sounding voices", body: "Natural voices, accents and pacing." },
          { icon: "▣", title: "Trained on your business", body: "Website, docs, FAQs and policies." },
          { icon: "▣", title: "Books straight into your calendar", body: "Google Calendar, Calendly, Outlook." },
          { icon: "▣", title: "Warm transfer to a human", body: "Hands off urgent or complex calls with context." },
          { icon: "▣", title: "CRM & workflow sync", body: "Every call logged, tagged and triggering follow-ups." },
          { icon: "▣", title: "Transcripts, recordings & insights", body: "Summaries, sentiment and extracted data after each call." },
        ]}
      />
      <p className="wrap -mt-8 pb-4 text-center text-sm text-pearl/80">Built responsibly: call-recording disclosure, GDPR-aware data handling, encrypted storage, opt-out and do-not-call respect, human handoff anytime.</p>
      <CaseRail eyebrow="Results" title="Results > Promises" tags={["Call dashboard", "Transcript", "Calendar bookings"]} />
      <Comparison
        title="See the difference"
        columns={["Innoventix AI Voice Agent", "Human receptionist", "Outsourced call center"]}
        rows={[
          { label: "Answers 24/7, incl. holidays", cells: ["yes", "no", "Often at extra cost"] },
          { label: "Handles many calls at once", cells: ["yes", "no", "partial"] },
          { label: "Trained on your exact business", cells: ["yes", "yes", "partial"] },
          { label: "Books into your calendar & CRM automatically", cells: ["yes", "manual", "partial"] },
          { label: "Transcripts & summary for every call", cells: ["yes", "no", "partial"] },
          { label: "Calls new leads back within seconds", cells: ["yes", "no", "no"] },
          { label: "No sick days, hiring or training turnover", cells: ["yes", "no", "partial"] },
          { label: "Hands off to a human when needed", cells: ["yes", "na", "yes"] },
        ]}
      />
      <p className="wrap -mt-8 text-sm text-mist/80">Best results: AI handles volume and after-hours, your team handles the high-value calls.</p>
      <ProcessTimeline
        title="From call audit to a live agent"
        steps={[
          { title: "Free consultation & call audit", body: "What callers ask, where calls are lost, which systems to connect." },
          { title: "Script & conversation design", body: "Call flows, FAQs, tone and handoff rules you approve." },
          { title: "Voice & AI training", body: "Choose the voice, train on your knowledge base." },
          { title: "Integrations", body: "Phone number, calendar, CRM, SMS/Slack." },
          { title: "Testing", body: "Test calls with your team, edge cases, compliance wording." },
          { title: "Go live & optimise", body: "Monitor transcripts and keep improving answers." },
        ]}
      />
      <ToolGrid eyebrow="Integrations" title="Plugs into the tools you already use" tools={["HubSpot", "Salesforce", "GoHighLevel", "Pipedrive", "Google Calendar", "Calendly", "Outlook", "Shopify", "Twilio", "Slack", "WhatsApp", "Stripe", "n8n", "Zapier", "Make"]} />
      <Testimonials />
      <section className="section">
        <div className="wrap">
          <SectionIntro eyebrow="Pricing" title="Simple plans that pay for themselves in missed calls." copy="Pick the minutes you need. Every plan includes setup, so you go live without a build fee." />
          <VoicePricing />
        </div>
      </section>
      <FaqSection items={faqs} />
      <CtaBand
        title="Your next customer is calling. Let AI pick up."
        copy="Call our live agent or book a free consultation, and we'll map exactly which calls to automate first."
        primary="voice"
        secondary="book"
      />
    </main>
  );
}
