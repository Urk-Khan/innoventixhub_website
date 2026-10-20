import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import { BookButton, CtaBand, FaqSection } from "@/components/Sections";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, professionalServiceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Contact Innoventix Hub | Book a Free Consultation",
  description: "Book a free call, message us on WhatsApp, or talk to our AI voice agent. We work with D2C brands and SMBs in the US, UK and EU.",
  path: "/contact",
});

const faqs = [
  { q: "Is the consultation really free?", a: "Yes. 30 minutes, no obligation." },
  { q: "What time zones do you work in?", a: "US, UK and EU business hours." },
  { q: "Can I talk to the founder?", a: `Yes. Email ${site.emailFounder} or book a call.` },
  { q: "Who answers the Inbound Agent line?", a: "Our AI voice agent. It's a live demo of what we build for clients." },
];

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd data={graph(professionalServiceSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]), faqSchema(faqs))} />
      <section className="hero-stage bg-navy">
        <img src="/assets/glowcopper-53cf29bb.svg" alt="" className="glow-copper" />
        <div className="relative z-10 px-5 py-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <p className="eyebrow">Contact</p>
            <h1 data-words className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Let&apos;s Talk About What You&apos;re Building.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">Book a free consultation, send us a message, or call our AI agent right now. A real person replies to every enquiry within 1 business day.</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm">{["Free consultation", "Reply within 1 business day", "US, UK & EU hours"].map((item) => <li key={item} className="pill plain">{item}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap text-center">
          <p className="pill">Ways to reach us</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px] md:leading-[52px]">Pick the way that suits you</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <li className="glass glass-card rounded-[22px] p-6 text-left">
              <span className="grid size-12 place-items-center rounded-[14px] border border-amber/40 bg-amber/15 text-amber">▦</span>
              <h2 className="mt-4 font-bold text-white">Book a call</h2>
              <p className="mt-2 text-sm leading-6 text-pearl/75">Pick a time that suits you. 30 minutes, no pressure.</p>
              <a href="#booking" className="mt-4 inline-block text-sm font-bold text-amber">Book A Free Consultation →</a>
            </li>
            <li className="glass glass-card rounded-[22px] p-6 text-left">
              <span className="pulse-dot grid size-12 place-items-center rounded-full border border-amber/40 bg-amber/15 text-amber">☎</span>
              <h2 className="mt-4 font-bold text-white">Talk to our Inbound Agent</h2>
              <p className="mt-2 text-sm leading-6 text-pearl/75">Hear our AI voice agent. It answers 24/7, books calls and takes messages.</p>
              <a href={`tel:${site.voiceAgentTel}`} className="mt-4 inline-block text-sm font-bold text-amber">Talk to Inbound Agent</a>
              <p className="mt-2 text-xs text-mist">This is an AI agent. Calls may be recorded.</p>
            </li>
            <li className="glass glass-card rounded-[22px] p-6 text-left">
              <span className="grid size-12 place-items-center rounded-[14px] border border-amber/40 bg-amber/15 text-amber">💬</span>
              <h2 className="mt-4 font-bold text-white">WhatsApp or call</h2>
              <p className="mt-2 text-sm text-pearl">{site.phoneWhatsappDisplay}</p>
              <div className="mt-4 flex gap-3 text-sm font-bold">
                <a className="text-amber" href={site.whatsappUrl}>WhatsApp Us</a>
                <a className="text-amber" href={`tel:${site.phoneWhatsappTel}`}>Call</a>
              </div>
            </li>
            <li className="glass glass-card rounded-[22px] p-6 text-left">
              <span className="grid size-12 place-items-center rounded-[14px] border border-amber/40 bg-amber/15 text-amber">✉</span>
              <h2 className="mt-4 font-bold text-white">Email</h2>
              <p className="mt-2 text-sm">General: <a className="text-amber" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></p>
              <p className="mt-1 text-sm">Founder: <a className="text-amber" href={`mailto:${site.emailFounder}`}>{site.emailFounder}</a></p>
            </li>
          </ul>
        </div>
      </section>
      <section id="booking" className="section scroll-mt-28 bg-navy-deep">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div>
            <p className="pill">Calendar</p>
            <h2 className="mt-6 text-3xl text-white md:text-[40px] md:leading-[48px]">Book your free consultation</h2>
            <p className="mt-3 text-pearl/75">You&apos;ll talk to the person who&apos;ll work on your project, not a salesperson.</p>
            <iframe
              title="Book a free consultation"
              src={`${site.calendlyUrl}?hide_event_type_details=1&background_color=132a45&text_color=f5f7fa&primary_color=ffb547`}
              className="mt-6 h-[680px] w-full rounded-[24px] border border-white/10"
            />
            <p className="mt-3 text-sm"><a className="font-bold text-amber" href={site.calendlyUrl}>Open the booking page</a></p>
          </div>
          <div>
            <p className="pill">Message</p>
            <h2 className="mt-6 text-3xl text-white md:text-[40px] md:leading-[48px]">Prefer to write? Send a message.</h2>
            <div className="mt-6"><EnquiryForm /></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap text-center">
          <p className="pill">Next</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl text-white md:text-[44px]">What happens next</h2>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-3">
            <svg data-line className="pointer-events-none absolute left-[16%] right-[16%] top-5 hidden h-[2px] w-[68%] md:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 1 H100" stroke="rgba(255,181,71,0.25)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
              <path data-line-draw d="M0 1 H100" stroke="#ffb547" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            {["We read your message or join your call.", "We give honest advice and a clear next step.", "If it's a fit, you get a fixed written proposal. No obligation."].map((step, index) => (
              <li key={step} className="relative text-center">
                <span data-step-dot className="step-num relative z-10 mx-auto grid size-10 place-items-center rounded-full border border-amber bg-navy font-bold text-amber">{index + 1}</span>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-pearl/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <FaqSection items={faqs} />
      <CtaBand title="Ready when you are." copy="30-minute call. No pitch deck. A clear plan for your brand." />
      <p className="sr-only"><BookButton /></p>
    </main>
  );
}
