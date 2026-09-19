import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const projects = [
  { cat: 'SaaS Dashboard', title: 'Operations Analytics Platform', desc: 'Real-time operations dashboard for a logistics company. Role-based views, live data sync, and automated report generation.', tags: ['React', 'Supabase', 'Charts'], img: 'photo-1551288049-bebda4e38f71' },
  { cat: 'Custom Web App', title: 'Client Portal for an Agency', desc: 'Authenticated client portal with project status tracking, file delivery, invoice viewing, and a support ticketing interface.', tags: ['Next.js', 'Auth', 'Stripe'], img: 'photo-1498050108023-c5249f4df085' },
  { cat: 'WordPress', title: 'Multi-location Service Business', desc: 'WordPress build with WooCommerce for service bookings across 12 locations. Custom plugin for location-based pricing and availability.', tags: ['WordPress', 'WooCommerce', 'Custom plugin'], img: 'photo-1547658719-da2b51169166' },
  { cat: 'HTML & CSS', title: 'Professional Services Landing Page', desc: 'Pure HTML and CSS landing page for a financial services firm. Sub-1 second load time, 100/100 Lighthouse score, zero JavaScript.', tags: ['HTML5', 'CSS3', 'Performance'], img: 'photo-1461749280684-dccba630e2f6' },
  { cat: 'E-commerce', title: 'Custom Checkout Experience', desc: 'Bespoke ecommerce build with product configuration tool, custom checkout flow, and direct Stripe integration. Replaced a hosted platform for lower transaction overhead.', tags: ['React', 'Stripe', 'Custom'], img: 'photo-1556742049-0cfed4f6a45d' },
  { cat: 'Web Design & UX', title: 'SaaS Product Redesign', desc: 'Complete UX audit and redesign for a SaaS platform. User interviews, new information architecture, Figma design system, and development handoff.', tags: ['Figma', 'UX', 'Design system'], img: 'photo-1561070791-2526d30994b5' },
]

const catColor: Record<string, string> = {
  'SaaS Dashboard': 'rgba(62,207,158,0.15)',
  'Custom Web App': 'rgba(62,207,158,0.12)',
  'WordPress': 'rgba(124,58,237,0.2)',
  'HTML & CSS': 'rgba(245,158,11,0.15)',
  'E-commerce': 'rgba(62,207,158,0.1)',
  'Web Design & UX': 'rgba(124,58,237,0.15)',
}
const catText: Record<string, string> = {
  'SaaS Dashboard': '#3ECF9E',
  'Custom Web App': '#3ECF9E',
  'WordPress': '#a78bfa',
  'HTML & CSS': '#fbbf24',
  'E-commerce': '#3ECF9E',
  'Web Design & UX': '#a78bfa',
}

const projectTypes = [
  {
    title: 'SaaS dashboards and operational tools',
    desc: "React and Next.js applications that give teams visibility into their operational data, real-time status of automated processes, and the ability to act on information without switching between multiple tools. These projects typically involve role-based access control, real-time data from Supabase subscriptions, and integration with the automation platforms running alongside the web application. The defining characteristic of a SaaS dashboard project is that the value is in what the data shows, not in the visual design: clarity and performance of data retrieval matter more than visual complexity.",
  },
  {
    title: 'Client portals with authenticated access',
    desc: "Authenticated web applications where your clients or customers can log in to see their specific data, track the status of work in progress, access deliverables, view invoices, and communicate with your team. Client portals replace the email chains and shared folder links that make project delivery feel disorganised. They are built on Next.js with server-side rendering so each user sees only their own data, with authentication handled securely and the data model designed around the relationship between your business and your clients.",
  },
  {
    title: 'WordPress sites for content-heavy businesses',
    desc: "Custom WordPress builds for businesses that publish content regularly and need their editorial team to manage updates without developer assistance. These projects are built without page builders: hand-coded custom themes with Gutenberg editor support for the content management experience, a minimal plugin footprint to maintain performance, and a performance baseline established before the site goes live. WooCommerce builds for service businesses, membership sites, and product catalogues sit in this category as well.",
  },
  {
    title: 'HTML and CSS sites for maximum performance',
    desc: "Pure HTML and CSS websites for businesses where load time and search engine performance are the primary requirements and JavaScript framework overhead is a cost without a benefit. Landing pages for paid advertising campaigns, professional services brochure sites, and portfolio sites are the typical use cases. These projects deliver fast load times, strong Lighthouse scores, and zero runtime dependencies: no npm, no framework, no security surface beyond the HTML and CSS themselves.",
  },
  {
    title: 'Custom ecommerce and checkout experiences',
    desc: "Ecommerce builds for businesses whose product or service model does not fit the standard WooCommerce or Shopify product structure. Product configuration tools, subscription billing with complex trial and upgrade logic, multi-vendor marketplaces, and checkout flows that connect directly to fulfilment or CRM systems are all projects in this category. Payment handling is built on Stripe throughout, which provides the reliability and feature coverage that custom payment gateway integrations cannot.",
  },
  {
    title: 'UX and UI design engagements',
    desc: "Design-first projects that begin with user research and information architecture before any visual design is produced. The output is a documented Figma file with wireframes, high-fidelity designs for every page and state, and a component library that the development phase works from directly. Design engagements are appropriate as standalone work for teams with their own development capability, or as the first phase of a combined design and development project with Innoventix Hub.",
  },
]

const discoverySteps = [
  {
    n: '01',
    title: 'Initial enquiry',
    desc: "Submit a project enquiry through the contact form or book a free strategy call directly. The more context you provide about the project type, the expected scope, and your timeline, the more useful the first conversation will be. There is no requirement to have a fully formed specification before the first call: the purpose of the first conversation is to understand what you are trying to build and whether Innoventix Hub is the right fit.",
  },
  {
    n: '02',
    title: 'Strategy call',
    desc: "A 30 to 45 minute call with Umer Hashmi to discuss the project in detail. This covers what you are trying to build, who the users are, what the technical requirements are, how the project connects to your existing tools and workflows, and what a successful outcome looks like. At the end of this call you will have a clear sense of whether the project is a good fit and what the next step looks like.",
  },
  {
    n: '03',
    title: 'Scope and proposal',
    desc: "A written project proposal covering the scope of work, the technology approach, the delivery timeline with milestones, and the cost. For projects with unclear requirements, we may recommend a paid discovery phase before committing to a full build proposal. The proposal is a working document: we revise it based on your feedback until it accurately reflects what you want to build.",
  },
  {
    n: '04',
    title: 'Kick-off and build',
    desc: "Once the proposal is agreed, we schedule the project into the delivery calendar and begin the requirements and design phase. You have visibility into the project throughout the build through milestone reviews, staging environment access, and a direct communication channel with Umer. The project does not disappear into a black box and resurface at handover.",
  },
]

export default function WebPortfolio() {
  return (
    <Layout>
      <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/web-development/" className="hover:text-[#3ECF9E] transition-colors">Web Development</Link>
              <span>/</span><span className="text-gray-300">Portfolio</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Web Portfolio
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95]">
              Selected web<br />
              <span className="gradient-text">development projects.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              Custom web applications, WordPress builds, HTML and CSS sites, and UX design work from Umer Hashmi and the Innoventix Hub web team. The projects shown here cover the range of web development work we take on: from focused landing pages to multi-tenant SaaS applications with deep automation integration. Each project represents a real business requirement solved with the right technology for the job, not the most complex solution available.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What types of projects we take on */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Project types</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What types of web projects<br />
              <span className="gradient-text">Innoventix Hub takes on.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Knowing what category your project falls into helps you evaluate whether the portfolio work shown here is relevant to your needs. Here are the six project types that make up the majority of the web development work at Innoventix Hub.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectTypes.map((pt, i) => (
              <ScrollReveal key={pt.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{pt.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to evaluate portfolio work */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Evaluation</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                How to evaluate portfolio work<br />
                <span className="gradient-text">for fit with your project.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Portfolio pages show the category, the technologies used, and a description of what was built. The most useful evaluation question is not "does this look like my project?" but "does this require a similar type of thinking to my project?" A SaaS dashboard for a logistics company and a SaaS dashboard for a marketing agency share more in common technically than either shares with a WordPress brochure site, even if the industries look very different.</p>
                <p>Look at the technology tags for each project to understand what stack was used and whether it matches your requirements. A project built in React with Supabase tells you more about the technical approach than the industry the client was in.</p>
                <p>If you are unsure whether the portfolio work is relevant to your specific requirement, book a strategy call and describe what you are trying to build. We will share additional examples from previous work that are relevant to your project type and tell you honestly if we are the right fit.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Inquiry process</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                How to submit a<br />
                <span className="gradient-text">project inquiry.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>The fastest way to start is to book a free strategy call using the link on this page. The call is with Umer Hashmi directly, not a sales representative. There is no qualifying call before you reach the person doing the work.</p>
                <p>Before the call, it helps to have a sense of: what the application needs to do at a high level, who the primary users are, what your timeline looks like, and whether there are specific integration requirements with existing tools. You do not need a complete specification, but a clear problem statement makes the first conversation significantly more productive.</p>
                <p>If you prefer to make initial contact in writing, use the contact form and describe your project in as much detail as you can. We respond to every enquiry and will follow up with questions if the project scope needs clarification before a call is scheduled.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Selected projects
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A cross-section of web development work across the main project categories. Book a call to discuss work specific to your industry or project type.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img src={unsplash(p.img, 600, 380)} alt={p.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.65 }} />
                    <div className="absolute inset-0 img-fade-bottom" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: catColor[p.cat], color: catText[p.cat] }}>
                        {p.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-black text-lg text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.15)', color: '#a8f0da' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery process */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Discovery process</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What the typical discovery<br />
              <span className="gradient-text">process involves.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From the first contact to a signed proposal, here is what the engagement process looks like at Innoventix Hub.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {discoverySteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift h-full flex gap-4">
                  <span className="font-mono text-sm font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>{step.n}</span>
                  <div>
                    <div className="font-display font-bold text-white mb-2">{step.title}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About the portfolio */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>About This Portfolio</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What the case studies<br />
                <span className="gradient-text">will cover.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  This section will be populated with project case studies as they are approved for publication. Each case study will cover the brief, the approach, the technology decisions, and the measurable outcomes. Projects shown in the grid above represent the range of web development work taken on at Innoventix Hub across SaaS dashboards, client portals, WordPress builds, HTML and CSS sites, and UX design engagements.
                </p>
                <p>
                  Portfolio pages are published once a client has reviewed the case study and approved the level of detail included. If you are evaluating fit for a specific project type, book a strategy call and we will share examples directly relevant to your use case.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-8 card-lift">
                <h3 className="font-display font-bold text-white text-lg mb-4">What each published case study will include</h3>
                <div className="space-y-3">
                  {[
                    "The original brief and what the client needed to solve",
                    "The technology approach and why it was chosen over alternatives",
                    "The key architectural decisions and their rationale",
                    "How the web layer connects to automation or other services",
                    "The measurable outcomes at handover",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-mono font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Discuss a similar project */}
      <section className="py-16 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden text-center">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Have a project in mind?
                </h2>
                <p className="text-gray-400 mb-8">
                  Book a strategy call and describe what you are trying to build. We will share examples from previous work that are relevant to your project type and tell you honestly if we are the right fit.
                </p>
                <Link to="/book/" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book a Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Want to see work in<br />
                  <span className="gradient-text">your industry?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a call and we will share specific examples relevant to your project type and industry. The first conversation is free and you leave with a clear picture of whether we are the right fit.</p>
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
