import JsonLd from "@/components/JsonLd";
import ProcessTimeline from "@/components/ProcessTimeline";
import Tabs from "@/components/Tabs";
import VoicePricing from "@/components/VoicePricing";
import { BookButton, Breadcrumbs, Comparison, CtaBand, FaqList, LogoMarquee, SectionIntro, Testimonials, VoiceButton } from "@/components/Sections";
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
    <div className="glass rounded-3xl p-6">
      <p>{line}</p>
      <ul className="mt-4 grid gap-1 text-sm sm:grid-cols-2">{includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
      <p className="mt-4 text-sm text-amber">2–4 weeks to launch</p>
      <a href={site.calendlyUrl} className="mt-3 inline-block text-sm font-bold text-amber">Book A Free Consultation</a>
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
      <section className="bg-navy">
        <div className="wrap py-16">
          <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.path }))} />
          <p className="eyebrow mt-6">AI Voice Agents · Inbound Receptionist · Outbound Calling</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Never Miss Another Call. AI Voice Agents for 24/7 Sales, Support and Bookings.</h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">We build human-sounding AI voice agents that answer every call, qualify leads, book appointments and follow up in seconds, then log everything to your CRM. Built for D2C brands and SMBs in the US, UK & EU.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <VoiceButton>{`Talk to Inbound Agent · ${site.voiceAgentDisplay}`}</VoiceButton>
            <BookButton ghost />
          </div>
          <p className="mt-4 text-sm text-mist/80">Live demo line, call it now. No forms, no signup.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-6 lg:grid-cols-3">
          <article className="glass rounded-3xl p-5"><h2 className="font-bold">It's 2 AM. A customer calls.</h2><p className="mt-2 text-sm text-cream/75">Incoming call · 2:14 AM</p></article>
          <article className="glass-strong rounded-3xl p-5 text-sm">
            <p>Caller: “Hi, do you have anything open tomorrow?”</p>
            <p className="mt-2">AI: “Yes, I have 10:30 or 2:00. Which works better?”</p>
            <p className="mt-2">Caller: “2 works.”</p>
            <p className="mt-2">AI: “Booked. You'll get a text confirmation now.”</p>
          </article>
          <article className="glass rounded-3xl p-5"><h2 className="font-bold">Every call answered. Every lead captured.</h2><p className="mt-2 text-sm">Calendar booked → CRM updated → SMS sent → Summary to Slack</p><p className="mt-3 text-amber">Answered in 1 ring · 24/7</p></article>
        </div>
      </section>
      <LogoMarquee label="Brands we've worked with" />
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">Sound familiar?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Calls going to voicemail?", "After hours, weekends, busy lunch rush: callers hang up and dial the next business."],
              ["Leads waiting hours for a call back?", "By the time someone rings a new lead, they've already spoken to a competitor."],
              ["Staff stuck on the phone?", "Your team answers the same questions all day instead of serving customers and selling."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <SectionIntro title="What we build" />
          <div className="mt-8">
            <Tabs label="Voice agent types" tabs={[
              { id: "inbound", label: "Inbound AI Receptionist", content: panel("An AI receptionist that picks up on the first ring, day or night, answers questions, books appointments and routes urgent calls to your team.", ["24/7 call answering", "FAQs trained on your business", "appointment booking & rescheduling", "call screening & routing", "warm transfer to a human", "message taking & SMS confirmations", "call recordings, transcripts & summaries"]) },
              { id: "outbound", label: "Outbound AI Voice Agents", content: panel("AI agents that call new leads within seconds, qualify them, book meetings and run follow-up, reminder and reactivation campaigns at scale.", ["speed-to-lead callbacks", "lead qualification calls", "appointment setting", "reminders & confirmations", "follow-up and win-back campaigns", "feedback & survey calls", "local time-zone scheduling", "CRM logging of every call"]) },
            ]} />
          </div>
        </div>
      </section>
      <section className="section bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black">Use cases by industry</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["E-commerce / D2C", "Order status and returns questions, COD and order confirmation calls, abandoned-cart callbacks, post-purchase review requests."],
              ["Clinics, dental & wellness", "Appointment booking, reminders to cut no-shows, new-patient intake questions."],
              ["Home services & trades", "Emergency call capture, quote requests, job booking and dispatch notes."],
              ["Real estate", "Buyer and renter enquiry qualification, viewing bookings, follow-up on portal leads."],
              ["Restaurants & hospitality", "Reservations, opening hours and menu questions, booking changes."],
              ["Agencies & B2B services", "Inbound lead qualification, discovery call booking, reactivation of old leads."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-5"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="glass-strong rounded-[2rem] p-8 text-center">
            <h2 className="text-3xl font-black">Hear the agent in action</h2>
            <p className="mt-2 text-4xl font-black text-amber">{site.voiceAgentDisplay}</p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/80">Don't take our word for it. Call our inbound AI receptionist right now: ask about services, book a consultation or try to trip it up.</p>
            <div className="mt-6"><VoiceButton>Talk to Inbound Agent</VoiceButton></div>
            <p className="mt-3 text-xs text-mist/70">Calls may be recorded for quality.</p>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">What powers your AI voice agent</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Human-sounding voices", "Natural voices, accents and pacing."],
              ["Trained on your business", "Website, docs, FAQs and policies."],
              ["Books straight into your calendar", "Google Calendar, Calendly, Outlook."],
              ["Warm transfer to a human", "Hands off urgent or complex calls with context."],
              ["CRM & workflow sync", "Every call logged, tagged and triggering follow-ups."],
              ["Transcripts, recordings & insights", "Summaries, sentiment and extracted data after each call."],
            ].map(([t, b]) => <li key={t} className="glass rounded-3xl p-5"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-cream/75">{b}</p></li>)}
          </ul>
          <p className="mt-6 text-sm text-cream/80">Built responsibly: call-recording disclosure, GDPR-aware data handling, encrypted storage, opt-out and do-not-call respect, human handoff anytime.</p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">Results &gt; Promises</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {["Call dashboard", "Transcript", "Calendar bookings"].map((item) => (
              <li key={item} className="rounded-3xl bg-cream p-5 text-ink"><p className="text-xs font-bold">SAMPLE</p><h3 className="mt-2 text-xl font-black">[Stat from client]</h3><p className="mt-4 text-xs">{item}</p></li>
            ))}
          </ul>
        </div>
      </section>
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
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">Integrations</h2>
          <p className="mt-2 text-sm text-cream/75">Plugs into the tools you already use.</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["HubSpot", "Salesforce", "GoHighLevel", "Pipedrive", "Google Calendar", "Calendly", "Outlook", "Shopify", "Twilio", "Slack", "WhatsApp", "Stripe", "n8n", "Zapier", "Make"].map((tool) => <li key={tool} className="glass rounded-full px-4 py-2">{tool}</li>)}
          </ul>
        </div>
      </section>
      <Testimonials />
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black md:text-5xl">Simple plans that pay for themselves in missed calls.</h2>
          <p className="mt-3 text-cream/75">Pick the minutes you need. Every plan includes setup, so you go live without a build fee.</p>
          <VoicePricing />
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-6"><FaqList items={faqs} /></div>
        </div>
      </section>
      <CtaBand
        title="Your next customer is calling. Let AI pick up."
        copy="Call our live agent or book a free consultation, and we'll map exactly which calls to automate first."
        primary="voice"
        secondary="book"
      />
    </main>
  );
}
