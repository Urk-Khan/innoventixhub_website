import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const deliverables = [
  {
    title: 'User Research',
    desc: "User interviews, competitive analysis, and persona development before wireframing begins. Findings are documented as a reference for every design decision that follows.",
  },
  {
    title: 'Information Architecture',
    desc: "Sitemap, navigation structure, and content hierarchy planned before any visual design. Includes navigation labels tested against user expectations and page-level content groupings.",
  },
  {
    title: 'Wireframes',
    desc: "Low-fidelity wireframes for every key page and user flow, completed and approved in Figma before colour or typography is introduced. Complex interactions include annotated behaviour notes.",
  },
  {
    title: 'UI Design',
    desc: "High-fidelity Figma designs with brand tokens applied at every breakpoint. Every interactive state documented (default, hover, focus, loading, empty, error) before development begins.",
  },
  {
    title: 'Design System',
    desc: "Component library in Figma covering buttons, forms, cards, navigation, typography, colour tokens, and spacing. Serves as the shared language between design and development.",
  },
  {
    title: 'Prototype & Testing',
    desc: "Clickable Figma prototypes tested with real users before code is written. Friction points and confusing navigation patterns are resolved in design where fixes are cheapest.",
  },
]

const principles = [
  { icon: '◈', title: 'Structure before aesthetics', desc: "Information architecture and user flows are designed before any typeface or colour choice. Every UI design engagement begins with IA and wireframes, without exception." },
  { icon: '◇', title: 'Mobile-first always', desc: "Every layout is designed for mobile first and expanded for desktop. The narrow-viewport constraint forces hierarchy decisions that produce better desktop layouts too." },
  { icon: '⬡', title: 'Performance is a design constraint', desc: "Animations, hero images, and motion are weighed against their loading and battery cost from the first wireframe. Design decisions that translate into fast experiences on real devices." },
  { icon: '⬟', title: 'Accessible by default', desc: "WCAG AA contrast ratios, visible focus states, keyboard navigation, and screen reader hierarchy are built into every design, not retrofitted after development." },
]

const engagementDeliverables = [
  {
    title: 'Discovery and research report',
    desc: "Written summary of user interviews or analytics: who the primary users are, what they are trying to accomplish, and where the current experience fails them. Anchors every subsequent design decision to evidence.",
  },
  {
    title: 'Sitemap and navigation specification',
    desc: "Documented site structure showing every page and navigation path, with label rationale and role-based access noted. Completed before any visual design work begins.",
  },
  {
    title: 'Annotated wireframes in Figma',
    desc: "Low-fidelity wireframes for every key page and user flow, shared in Figma with comment access. Approved wireframes are the sign-off gate before high-fidelity design begins.",
  },
  {
    title: 'High-fidelity UI designs with all states',
    desc: "Pixel-accurate Figma designs at every breakpoint with every interactive state documented: empty, loading, error, validation, and success. Auto-layout and design tokens throughout.",
  },
  {
    title: 'Figma component library',
    desc: "Structured component library with every reusable element: buttons, inputs, cards, modals, navigation, icons, colour tokens, and spacing. The handoff document for development and maintenance tool for future work.",
  },
]

const faqs = [
  {
    q: "Do you offer design without development, or do they always go together?",
    a: "We offer design as a standalone service. If you have a development team and need design work up to the Figma handoff stage, we can scope and deliver that as a standalone engagement. We also work on design-only projects for clients who are in an earlier stage and not yet ready to build. When design and development are in the same hands, there are efficiencies that standalone design does not have, but the design work itself is not contingent on Innoventix Hub also building the product.",
  },
  {
    q: "How does the design process work when we already have a brand guide?",
    a: "An existing brand guide is the starting point, not a constraint. We apply your brand tokens (colours, typography, spacing) to the design system and use them throughout the UI design phase. If the brand guide was designed for print or static media and needs to be adapted for interactive digital contexts, we make those adaptations and document them. If there are gaps in the brand guide that a digital product exposes (the brand has no dark mode colours, for example), we extend it and document the extensions.",
  },
  {
    q: "What tools do you use for design?",
    a: "Figma is the primary design tool for all UI design, wireframing, component libraries, and prototyping. Figma is the industry standard for web and application design and has the best developer handoff workflow available. We do not use Adobe XD, Sketch, or InVision. If you have existing design files in another tool, we can work from them as reference material, but the output of any design engagement will be in Figma.",
  },
  {
    q: "How long does a typical design engagement take?",
    a: "A focused landing page or brochure site design, from research through to high-fidelity Figma handoff, typically takes two to three weeks. A full UX and UI design engagement for a SaaS product or complex web application, including research, information architecture, wireframes, high-fidelity design for all screens and states, and a component library, typically takes six to ten weeks depending on the scope and the speed of feedback turnaround.",
  },
]

export default function WebDesignUx() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1561070791-2526d30994b5', 800, 700)} alt="Web design mockups"
            className="w-full h-full object-cover" style={{ opacity: 0.18, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 30%, transparent 70%, #050B18)' }} />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/web-development/" className="hover:text-[#3ECF9E] transition-colors">Web Development</Link>
              <span>/</span><span className="text-gray-300">Web Design &amp; UX</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Web Design &amp; UX
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Web design and UX for<br />
              <span className="gradient-text">clear user journeys.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
              UX research, information architecture, wireframes, and high-fidelity Figma designs before a single line of code is written. Design and development in the same hands means nothing is lost in the handoff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/saas-dashboard-ux-checklist/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                UX Checklist Resource
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              From research to<br />
              <span className="gradient-text">production-ready design.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">The complete UX and UI design process, from the first user interview to the final Figma handoff ready for development.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Design principles<br />
              <span className="gradient-text">we do not compromise on.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-xl font-mono"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)', color: '#3ECF9E' }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What a design engagement produces */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Deliverables</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What a design engagement<br />
              <span className="gradient-text">produces.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              A design engagement at Innoventix Hub produces specific, documented outputs that your development team or our own developers can work from directly. Here is what is included in a full UX and UI design engagement.
            </p>
          </ScrollReveal>
          <div className="space-y-5">
            {engagementDeliverables.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift flex gap-5">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Design + Development</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Design and engineering<br />
                <span className="gradient-text">in the same hands.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Most agencies separate design and development. The designer hands off Figma files to a developer who interprets them without context and makes decisions the designer never approved.</p>
                <p>Umer Hashmi is both the designer and the developer on every web project. The same person who makes UX decisions writes the code that implements them. Nothing is lost in handoff because there is no handoff.</p>
                <p>This matters particularly for interactive states, responsive behaviour, and edge cases. A designer who cannot code does not fully understand what is expensive or impossible to build. An engineer who does not design does not understand the intent behind a visual decision. Umer does both, which means the design and the implementation stay aligned from the first wireframe to the production deploy.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="relative h-72 lg:h-80 rounded-3xl overflow-hidden">
                <img src={unsplash('photo-1561070791-2526d30994b5', 700, 500)} alt="Design and development process"
                  className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(5,11,24,0.8))' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display font-bold text-white mb-1">Design and dev, unified</div>
                  <div className="text-gray-300 text-sm">Umer Hashmi, Web Development Lead</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Common questions about<br />
              <span className="gradient-text">UX and UI design.</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift">
                  <h3 className="font-display font-bold text-white text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What the UX design process involves */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Design Process</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What the UX design process<br />
              <span className="gradient-text">involves.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Four phases, each with a defined output and a review point before the next begins. The structure exists to prevent the expensive rework that comes from discovering a structural problem after visual design is complete.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                n: '01',
                t: 'Discovery',
                d: "We start by understanding the user journey and the business goals. This means mapping who uses the product or site, what they are trying to accomplish, where they encounter friction in the current experience, and what the business needs them to do next. The output is a written brief that every subsequent design decision references.",
              },
              {
                n: '02',
                t: 'Information architecture',
                d: "Before any visual design begins, we map the content structure and navigation. This covers what pages or views exist, how they relate to each other, how users move between them, and what labels the navigation uses. A clear information architecture is the foundation that prevents a site from being visually polished but structurally confusing.",
              },
              {
                n: '03',
                t: 'Wireframing',
                d: "Low-fidelity layouts are produced in Figma and reviewed before any colour, typography, or imagery is introduced. Working in wireframes at this stage means design decisions focus on structure and interaction rather than visual style. Changes at the wireframe stage take minutes; the same change in a high-fidelity design takes hours.",
              },
              {
                n: '04',
                t: 'High-fidelity UI',
                d: "Pixel-accurate Figma designs with your brand tokens applied across every key page and breakpoint. Every interactive state is documented: default, hover, focus, loading, empty, and error. The output is a Figma file a developer can work from without needing to make visual judgements that should have been made in the design phase.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift flex gap-5 h-full">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{step.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get at the end */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Deliverables</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What you get<br />
                <span className="gradient-text">at the end.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Every design engagement produces a documented set of outputs your development team can work from directly. Nothing is left to interpretation.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3">
                {[
                  "Figma source files (full ownership, all layers)",
                  "Component library with every reusable element named and documented",
                  "Style guide covering colours, typography, and spacing definitions",
                  "Annotated flows for development handoff with interaction notes",
                  "Responsive layouts for mobile and desktop, both explicitly designed",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl glass-card card-lift">
                    <span className="font-mono font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Further reading on UX design.</h2>
          </ScrollReveal>
          <div className="max-w-sm">
            <ScrollReveal direction="scale">
              <Link to="/resources/saas-dashboard-ux-checklist/" className="block glass-card rounded-2xl p-6 card-lift group">
                <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">SaaS Dashboard UX Checklist</div>
                <div className="text-sm flex items-center gap-1" style={{ color: '#3ECF9E' }}>Read resource <span>{"→"}</span></div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Ready to design<br />
                  <span className="gradient-text">something that works?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We will review your current design, identify the UX friction points, and scope a redesign or new project.</p>
                <Link to="/book/" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
