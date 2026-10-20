import JsonLd from "@/components/JsonLd";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Terms of Service | Innoventix Hub",
  description: "Terms covering use of innoventixhub.tech and Innoventix Hub services.",
  path: "/terms",
});

const sections = [
  ["About these terms.", "These terms cover use of innoventixhub.tech and our services. Each project is also covered by a written proposal or agreement; if they conflict, the signed proposal wins."],
  ["Services.", "Content creation (AI UGC, video), AI automation, AI voice agents, web development and SEO, as described in your proposal."],
  ["Proposals and payment.", "Scope, timeline and price are agreed in writing before work starts. Invoices are due within 7 days. Late payment may pause work."],
  ["Your responsibilities.", "Give accurate information, timely feedback and access to accounts we need. You confirm you have rights to any material you send us."],
  ["AI voice agents and outbound calling.", "You are responsible for complying with laws that apply to your calls and texts, including the TCPA, state telemarketing and call-recording laws, Do-Not-Call rules, UK PECR and EU rules. You must have prior express written consent before we run automated outbound calls or texts for you. Agents disclose that they are AI where required. We may pause a campaign we reasonably believe breaks these rules."],
  ["AI-generated content.", "AI UGC and other AI outputs are reviewed by our team, but you approve final content before it runs. You're responsible for ad-platform policies and claims made about your products."],
  ["Intellectual property.", "When paid in full, you own the final deliverables (content, code, accounts created for you). We keep rights to our pre-existing tools, templates and know-how, and may show the work in our portfolio unless you ask us not to."],
  ["Guarantees.", "Any guarantee (e.g. Built-As-Agreed, Works-As-Agreed, free fixes periods) applies only as written in the relevant service page and your proposal. We don't promise specific rankings, sales or ad results."],
  ["Third-party tools.", "Services may rely on third-party platforms (e.g. Shopify, WordPress, n8n, GoHighLevel, Calendly, telephony and AI providers). Their terms and outages are outside our control."],
  ["Confidentiality.", "Both sides keep the other's non-public information confidential."],
  ["Liability.", "To the extent the law allows, our total liability is limited to the fees you paid for the relevant project in the 3 months before the claim. We aren't liable for indirect or lost-profit losses. Nothing limits liability that can't legally be limited."],
  ["Termination.", "Either side may end a project with written notice per the proposal; you pay for work done to date. SEO and care plans: first term per proposal, then month to month."],
  ["Website use.", "Don't misuse the site, attempt unauthorised access, or scrape it."],
  ["Contact.", site.emailGeneral],
];

export default function TermsPage() {
  return (
    <main id="main">
      <JsonLd data={graph(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]))} />
      <section className="hero-stage px-5 pb-10 pt-28 text-center lg:pt-[200px]">
        <p className="eyebrow">Legal</p>
        <h1 data-words className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Terms of Service</h1>
        <p className="mx-auto mt-5 max-w-[680px] text-[15px] text-mist">Last updated: October 16, 2026</p>
      </section>
      <div className="wrap grid gap-10 pb-20 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold tracking-wide text-amber">ON THIS PAGE</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map(([title], index) => (
              <li key={title}><a href={`#p-${index}`} className="hover:text-amber">{title.replace(/\.$/, "")}</a></li>
            ))}
          </ol>
        </aside>
        <article>
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
