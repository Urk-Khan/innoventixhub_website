import JsonLd from "@/components/JsonLd";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Privacy Policy | Innoventix Hub",
  description: "How Innoventix Hub handles personal data on innoventixhub.tech and in our services.",
  path: "/privacy",
});

const sections = [
  ["Who we are.", `Innoventix Hub provides content creation, AI automation, AI voice agents, web development and SEO services. This policy explains how we handle personal data on innoventixhub.tech and in our services.`],
  ["What we collect.", "Contact details you give us (name, email, phone, company, message); booking details via Calendly; call audio, transcripts and phone numbers when you call our voice lines; WhatsApp messages; usage data (pages, device, approximate location) via cookies and analytics; client data we process on your behalf when we build systems for you."],
  ["How we use it and legal bases (GDPR/UK GDPR).", "Replying to enquiries and providing services (contract / pre-contract steps); running and improving the site (legitimate interests); marketing emails or calls (consent, withdrawable any time); legal and accounting duties (legal obligation)."],
  ["Voice calls and recording.", `Calls to our AI voice agent (${site.voiceAgentDisplay}) and voice agents we run are answered by AI and may be recorded and transcribed for quality, training our client's agent and record-keeping. Callers are told at the start of the call. Recordings are kept for 90 days unless needed longer for a dispute.`],
  ["Outbound calls and texts (TCPA).", "We only place automated or AI calls or texts to people who gave prior express written consent. You can opt out at any time by saying \"stop\", replying STOP, or emailing us. Consent is never a condition of purchase. Clients using our outbound agents are responsible for having valid consent for their contact lists."],
  ["Cookies.", "Essential cookies run the site. Analytics and marketing cookies only load after you accept them in the cookie banner (EU/UK). You can change your choice any time via \"Cookie settings\" in the footer."],
  ["Calendly and other processors.", "We use trusted service providers, including Calendly (booking), Google Workspace (email), our hosting provider, analytics, CRM/automation tools, voice/telephony and AI providers, and WhatsApp (Meta). Calendly's embed may set its own cookies; see Calendly's privacy policy."],
  ["International transfers.", "Data may be processed outside the UK/EEA. Where it is, we rely on safeguards such as Standard Contractual Clauses and the UK Addendum."],
  ["Retention.", "Enquiries: up to 24 months after last contact. Client records: as long as the contract runs plus legal retention periods."],
  ["Your rights (EU/UK).", "Access, correction, deletion, restriction, objection, portability, withdrawing consent, and complaining to your supervisory authority (e.g. the ICO in the UK)."],
  ["Your rights (California, CCPA/CPRA).", `Right to know, delete, correct, and opt out of the sale or sharing of personal information. We do not sell personal information and do not share it for cross-context behavioural advertising. We won't discriminate against you for using these rights. Requests: ${site.emailGeneral}.`],
  ["Security.", "Access controls, encryption in transit, and least-privilege access for our team."],
  ["Children.", "Our services are not aimed at children under 16."],
  ["Changes.", "We'll update this page and the \"Last updated\" date."],
  ["Contact.", `${site.emailGeneral} · Founder: ${site.emailFounder}`],
];

export default function PrivacyPage() {
  return (
    <main id="main" className="section">
      <JsonLd data={graph(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]))} />
      <div className="wrap grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold tracking-wide text-amber">ON THIS PAGE</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map(([title], index) => (
              <li key={title}><a href={`#p-${index}`} className="hover:text-amber">{title.replace(/\.$/, "")}</a></li>
            ))}
          </ol>
        </aside>
        <article>
          <h1 className="text-4xl font-black">Privacy Policy</h1>
          <p className="mt-3 text-sm text-mist/80">Last updated: October 16, 2026 · Controller: Innoventix Hub · Contact: {site.emailGeneral}, {site.emailFounder}</p>
          {sections.map(([title, body], index) => (
            <section key={title} id={`p-${index}`} className="mt-8 scroll-mt-28">
              <h2 className="text-xl font-bold">{index + 1}. {title}</h2>
              <p className="mt-2 text-sm leading-7 text-cream/85">{body}</p>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
