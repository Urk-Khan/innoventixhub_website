import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import { BookButton, CtaBand, FaqList } from "@/components/Sections";
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
        <div className="wrap relative z-10 py-14 lg:pb-20 lg:pt-40">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black md:text-6xl">Let's Talk About What You're Building.</h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">Book a free consultation, send us a message, or call our AI agent right now. A real person replies to every enquiry within 1 business day.</p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm">{["Free consultation", "Reply within 1 business day", "US, UK & EU hours"].map((item) => <li key={item} className="rounded-full border border-white/15 px-3 py-1">{item}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="glass rounded-3xl p-5">
            <h2 className="font-bold">Book a call</h2>
            <p className="mt-2 text-sm text-cream/75">Pick a time that suits you. 30 minutes, no pressure.</p>
            <a href="#booking" className="mt-4 inline-block text-sm font-bold text-amber">Book A Free Consultation</a>
          </article>
          <article className="glass rounded-3xl p-5">
            <h2 className="font-bold">Talk to our Inbound Agent</h2>
            <p className="mt-2 text-sm text-cream/75">Hear our AI voice agent in action. It answers 24/7, books calls and takes messages.</p>
            <a href={`tel:${site.voiceAgentTel}`} className="mt-4 inline-block text-sm font-bold text-amber">Talk to Inbound Agent</a>
            <p className="mt-2 text-xs text-mist/70">This is an AI agent. Calls may be recorded.</p>
          </article>
          <article className="glass rounded-3xl p-5">
            <h2 className="font-bold">WhatsApp or call</h2>
            <p className="mt-2 text-sm">{site.phoneWhatsappDisplay}</p>
            <div className="mt-4 flex gap-3 text-sm font-bold">
              <a className="text-amber" href={site.whatsappUrl}>WhatsApp Us</a>
              <a className="text-amber" href={`tel:${site.phoneWhatsappTel}`}>Call</a>
            </div>
          </article>
          <article className="glass rounded-3xl p-5">
            <h2 className="font-bold">Email</h2>
            <p className="mt-2 text-sm">General: <a className="text-amber" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></p>
            <p className="mt-1 text-sm">Founder: <a className="text-amber" href={`mailto:${site.emailFounder}`}>{site.emailFounder}</a></p>
          </article>
        </div>
      </section>
      <section id="booking" className="section scroll-mt-28 pt-0">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black">Book your free consultation</h2>
            <p className="mt-2 text-sm text-cream/75">You'll talk to the person who'll work on your project, not a salesperson.</p>
            <iframe
              title="Book a free consultation"
              src={`${site.calendlyUrl}?hide_event_type_details=1&background_color=0c1117&text_color=f7f4ef&primary_color=ffb547`}
              className="mt-4 h-[680px] w-full rounded-3xl border border-white/10"
            />
            <p className="mt-3 text-sm"><a className="text-amber underline" href={site.calendlyUrl}>Open the booking page</a></p>
          </div>
          <div>
            <h2 className="text-2xl font-black">Prefer to write? Send a message.</h2>
            <div className="mt-4"><EnquiryForm /></div>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">What happens next</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-3">
            {["We read your message or join your call.", "We give honest advice and a clear next step.", "If it's a fit, you get a fixed written proposal. No obligation."].map((step, index) => (
              <li key={step} className="glass rounded-3xl p-5 text-sm"><span className="text-amber">{index + 1}</span><p className="mt-2">{step}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section pt-0"><div className="wrap"><h2 className="text-2xl font-black">FAQ</h2><div className="mt-4"><FaqList items={faqs} /></div></div></section>
      <CtaBand title="Let's build your AI growth engine." copy="30-minute call. No pitch deck. A clear plan for your brand." />
      <p className="sr-only"><BookButton /></p>
    </main>
  );
}
