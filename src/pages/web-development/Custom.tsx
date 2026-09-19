import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const buildTypes = [
  {
    title: 'React & Next.js Applications',
    desc: 'SaaS platforms, client portals, and admin dashboards built on React 18 and Next.js. TypeScript throughout, role-based auth, scalable architecture from MVP to production.',
    tags: ['React', 'Next.js', 'TypeScript'],
    img: 'photo-1498050108023-c5249f4df085',
    imgAlt: 'MacBook showing React code',
  },
  {
    title: 'HTML & CSS Websites',
    desc: 'Handcrafted semantic HTML and CSS for fast, accessible brochure sites and landing pages. No JS overhead, responsive across every viewport, easy to maintain.',
    tags: ['HTML5', 'CSS3', 'Performance'],
    img: 'photo-1461749280684-dccba630e2f6',
    imgAlt: 'Code editor with HTML CSS',
  },
  {
    title: 'SaaS Dashboards',
    desc: 'Analytics tools and portals with real-time data, role-based access, and proper edge-case handling: empty states, loading skeletons, error boundaries, and infinite scroll.',
    tags: ['SaaS', 'Dashboard', 'Auth'],
    img: 'photo-1551288049-bebda4e38f71',
    imgAlt: 'SaaS analytics dashboard on screen',
  },
  {
    title: 'REST & GraphQL APIs',
    desc: 'Backend APIs documented with OpenAPI specs before a line is coded. Versioned, rate-limited, and equipped with structured error responses from the start.',
    tags: ['REST', 'GraphQL', 'Supabase'],
    img: 'photo-1544197150-b99a580bb7a8',
    imgAlt: 'API documentation on screen',
  },
  {
    title: 'E-commerce Applications',
    desc: 'Custom ecommerce beyond Shopify: product configurators, multi-vendor marketplaces, Stripe subscriptions, and checkout flows integrated with fulfilment in real time.',
    tags: ['Stripe', 'Custom checkout', 'Inventory'],
    img: 'photo-1556742049-0cfed4f6a45d',
    imgAlt: 'E-commerce interface on laptop',
  },
  {
    title: 'Automation-integrated Web Apps',
    desc: 'Web applications built to connect with n8n, GoHighLevel, and voice agent systems from day one. Web forms trigger CRM updates, dashboard actions dispatch automation sequences.',
    tags: ['n8n', 'Webhooks', 'Real-time'],
    img: 'photo-1603302576837-37561b2e2302',
    imgAlt: 'Web app with automation integration',
  },
]

const techStack = [
  { label: 'React 18+', cat: 'Frontend' },
  { label: 'Next.js 14+', cat: 'Frontend' },
  { label: 'TypeScript', cat: 'Language' },
  { label: 'HTML5 / CSS3', cat: 'Markup' },
  { label: 'Tailwind CSS', cat: 'Styling' },
  { label: 'Supabase', cat: 'Database' },
  { label: 'PostgreSQL', cat: 'Database' },
  { label: 'Stripe', cat: 'Payments' },
  { label: 'Vercel / Cloudflare', cat: 'Deploy' },
  { label: 'GitHub Actions', cat: 'CI/CD' },
]

const process = [
  { n: '01', t: 'Requirements', d: "Understand users, goals, content, integrations and operational constraints. This stage produces a written brief that both parties sign off on before any design or code work begins. It covers what the application must do, what it must not do, how it connects to other systems, and what a successful delivery looks like." },
  { n: '02', t: 'Design & UX', d: "Design the information structure and key user journeys before detailed build work begins. Wireframes are completed in Figma and reviewed before high-fidelity designs are produced. For complex applications, interactive prototypes are used to validate flows before any code is written." },
  { n: '03', t: 'Build', d: "Build responsive pages or application features with clear review points at each milestone. Code is reviewed, tested, and deployed to a staging environment so you can test each feature as it is completed rather than seeing the application for the first time at handover." },
  { n: '04', t: 'Test & Ship', d: "Test the experience across devices and user roles, prepare handover material including architecture documentation, and plan the production deployment. Post-launch support is included in every engagement so issues that surface in the first weeks are addressed promptly." },
]

const preBuildItems = [
  {
    title: 'The primary user and their core job to be done',
    desc: "Before any design or code begins, we need a clear answer to the question: who uses this application and what do they need to accomplish? The clearer this is, the more focused the build can be. Applications that try to serve too many different user types without a clear primary persona tend to produce interfaces that work poorly for everyone. A well-defined primary user allows every design and architecture decision to be evaluated against a concrete criterion.",
  },
  {
    title: 'The data model and its sources',
    desc: "What data does the application manage, where does it come from, and what are the relationships between data types? A client portal needs to know what a project is, what a client is, and how projects relate to clients. A SaaS dashboard needs to know what data it surfaces, how often it updates, and what the source of truth is. Defining the data model before the build begins prevents the costly refactoring that comes from discovering that the database schema does not support a required feature.",
  },
  {
    title: 'The integration points with external systems',
    desc: "Most custom web applications connect to at least one external system: a CRM, a payment provider, an email service, an automation platform, or a third-party API. Each integration point needs to be identified before the build starts, including authentication method, data format, rate limits, and what happens when the external system is unavailable. Integration work consistently takes longer than expected when it is not scoped properly at the outset.",
  },
  {
    title: 'Authentication and access control requirements',
    desc: "Who can log in, what can they see, and what can they do? Role-based access control is much easier to build in from the start than to retrofit onto an application that was initially built for a single user type. We need to know whether the application has a single user role or multiple, whether permissions are per-role or per-user, and whether there are any restrictions on what data different users can view or modify.",
  },
  {
    title: 'Definition of a successful MVP',
    desc: "The hardest discipline in custom software development is scope control. Before the build starts, we define explicitly what the minimum viable product includes and, just as importantly, what it does not include. Features that are deferred to a later phase are documented so they can be built on the same architecture later. This prevents the scope expansion that is the most common cause of web application projects running over time and budget.",
  },
]

const faqs = [
  {
    q: "Do I need React or Next.js, or will a simpler approach work for my project?",
    a: "That depends on what the application needs to do. A brochure site or a single landing page does not need React. A content site updated by a non-technical team is usually better served by WordPress than by a custom React application. React and Next.js are the right choice when you need dynamic user interfaces, authenticated views, real-time data, or complex state management. We will tell you if a simpler approach is the right call for your project, even if it is a smaller engagement.",
  },
  {
    q: "How do you handle projects where requirements are not fully defined?",
    a: "We run a paid discovery phase for projects where the requirements are unclear. This produces a written specification, a proposed data model, and a development roadmap before any build work begins. Discovery phases typically run one to two weeks and give both parties a much clearer picture of scope, cost, and timeline before committing to a full build.",
  },
  {
    q: "What does automation-ready mean in practice?",
    a: "It means the web application is built with the data flows in mind from the start. Form submissions send data to your CRM via webhook rather than sitting in an email inbox. Actions taken in the application can trigger workflow automation sequences. Data from your CRM or automation platform can surface in the application without manual import. This is not a feature that is added after the fact: it is an architecture decision made at the start of the project.",
  },
  {
    q: "Do you offer ongoing support after the project launches?",
    a: "Yes. Every project includes a post-launch support window. Beyond that, we offer ongoing development retainers for teams that want to continue adding features, and maintenance retainers for applications that need updates and security monitoring without active feature development. All projects are handed over with documentation so you are never dependent on us for day-to-day operation.",
  },
]

export default function Custom() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1498050108023-c5249f4df085', 800, 700)} alt="MacBook with code"
            className="w-full h-full object-cover" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 30%, transparent 70%, #050B18)' }} />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/web-development/" className="hover:text-[#3ECF9E] transition-colors">Web Development</Link>
              <span>/</span><span className="text-gray-300">Custom Development</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Custom Development
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Custom web applications,<br />
              <span className="gradient-text">dashboards and portals.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-4">
              React, Next.js, and pure HTML for everything from static marketing sites to multi-tenant SaaS dashboards with real-time data, role-based access, and CRM integration.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(62,207,158,0.06)', border: '1px solid rgba(62,207,158,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-[#3ECF9E]" />
              <span className="text-sm text-gray-400">Now offering: pure <strong className="text-white">HTML &amp; CSS</strong> websites for maximum performance</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/web-development/portfolio/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                View Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Build types */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six types of web project. <span className="gradient-text">All custom-built.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We choose the right technology for the job. A brochure site does not need React. A SaaS dashboard cannot live on a static HTML page. We scope the right solution, and we are honest when a simpler approach serves you better.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {buildTypes.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col group">
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <img src={unsplash(b.img, 600, 350)} alt={b.imgAlt} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.65 }} />
                    <div className="absolute inset-0 img-fade-bottom" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-black text-lg text-white mb-2">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{b.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {b.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.18)', color: '#a8f0da' }}>
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

      {/* HTML/CSS highlight */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'rgba(62,207,158,0.04)', borderTop: '1px solid rgba(62,207,158,0.1)', borderBottom: '1px solid rgba(62,207,158,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                Pure HTML &amp; CSS
              </div>
              <h2 className="font-display font-black text-3xl text-white mb-4">
                Sometimes less is<br />
                <span className="gradient-text">exactly right.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Not every website needs a JavaScript framework. For brochure sites, landing pages, portfolios, and informational web presences, pure HTML and CSS delivers the fastest possible load times, perfect Lighthouse scores, and zero runtime dependencies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Umer builds handcrafted HTML and CSS sites with semantic markup, responsive design, and accessibility baked in from the first line. No bloated frameworks, no unnecessary complexity, and no npm dependency tree that becomes a security liability six months after launch.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '100/100', sub: 'Lighthouse performance' },
                  { label: '<1s', sub: 'First contentful paint' },
                  { label: '0kb', sub: 'JavaScript payload' },
                  { label: 'WCAG AA', sub: 'Accessibility standard' },
                ].map(stat => (
                  <div key={stat.sub} className="glass-card rounded-2xl p-5 text-center card-lift">
                    <div className="font-display font-black text-2xl gradient-text-mint mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to define before starting */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Pre-build</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What to define before starting<br />
              <span className="gradient-text">a custom build.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              The projects that deliver on time and on budget share a common trait: they went into the build phase with clear answers to these questions. The projects that run over time almost always started without them.
            </p>
          </ScrollReveal>
          <div className="space-y-5">
            {preBuildItems.map((item, i) => (
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

      {/* Tech stack and process */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-6 block" style={{ color: '#3ECF9E' }}>Tech Stack</span>
              <h2 className="font-display font-black text-3xl text-white mb-6">What we build with.</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map(t => (
                  <div key={t.label} className="glass-card rounded-xl px-4 py-2.5 card-lift flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3ECF9E' }} />
                    <span className="text-gray-300 text-sm font-medium">{t.label}</span>
                    <span className="text-gray-600 text-xs">{t.cat}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <span className="text-xs font-medium tracking-widest uppercase mb-6 block" style={{ color: '#3ECF9E' }}>Our Process</span>
              <h2 className="font-display font-black text-3xl text-white mb-6">How every project runs.</h2>
              <div className="space-y-4">
                {process.map((p) => (
                  <div key={p.n} className="glass-card rounded-xl p-5 card-lift flex gap-4 items-start">
                    <span className="font-mono text-sm font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>{p.n}</span>
                    <div>
                      <div className="font-display font-bold text-white mb-1">{p.t}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{p.d}</div>
                    </div>
                  </div>
                ))}
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
              <span className="gradient-text">custom development.</span>
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

      {/* What a custom web app build involves */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Build Process</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What a custom web app<br />
              <span className="gradient-text">build involves.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Every custom build at Innoventix Hub follows the same five-phase process. Each phase has a defined output and a review point before the next phase begins.
            </p>
          </ScrollReveal>
          <div className="space-y-5">
            {[
              {
                n: '01',
                t: 'Discovery and architecture',
                d: "We document the user roles, the data model, the integration points with external systems, and the definition of a successful MVP before any design or code begins. The output is a written specification both parties agree on, which prevents the scope changes that cause projects to run over time and budget.",
              },
              {
                n: '02',
                t: 'UX design in Figma',
                d: "Key user journeys are wireframed and reviewed before high-fidelity design work begins. Designing in Figma at this stage allows us to validate the structure and the interaction patterns before any code is written, which is far cheaper than discovering a structural problem mid-build.",
              },
              {
                n: '03',
                t: 'Frontend build (React / Next.js + TypeScript)',
                d: "The application is built component by component with TypeScript throughout. Each milestone deploys to a staging environment so you can test functionality as it is completed rather than seeing the application for the first time at handover.",
              },
              {
                n: '04',
                t: 'Backend and API layer (Supabase / PostgreSQL)',
                d: "The database schema and API layer are built to match the data model agreed in discovery. Supabase handles authentication, real-time subscriptions, and auto-generated REST endpoints for standard queries, with custom API routes built on top for business logic that requires it.",
              },
              {
                n: '05',
                t: 'Testing, deployment, and documentation',
                d: "The application is tested across user roles and edge cases before going live. Production deployment uses a CI/CD pipeline so future updates ship without downtime. A documentation package covering the architecture, the deployment process, and the integration points is handed over alongside the codebase.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift flex gap-5">
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

      {/* Who custom web apps are for */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Who It Is For</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Who custom web apps<br />
              <span className="gradient-text">are built for.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Custom development is the right choice when an existing tool does not fit the problem. Here are the three scenarios where it makes sense.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                t: 'A SaaS product without an off-the-shelf fit',
                d: "A founding team has a product idea that requires a specific user interface, a specific data model, or a specific set of user permissions that no existing tool supports. They need a purpose-built application they own and can extend as the product grows.",
              },
              {
                n: '02',
                t: 'A service business that needs a client portal',
                d: "A service business manages clients, projects, and deliverables across email threads and shared folders. They need an authenticated portal where clients can log in to see their project status, access files, and communicate with the team, with role-based access separating what each client can see.",
              },
              {
                n: '03',
                t: 'An internal team running operations on spreadsheets',
                d: "A team manages a core operational process, such as scheduling, inventory, job tracking, or reporting, in spreadsheets that have grown too complex to maintain and too fragile to rely on. They need a purpose-built tool that replaces the spreadsheets with a proper interface and a real data layer.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.n} delay={i * 80} direction="scale">
                <div className="glass-card rounded-2xl p-8 h-full card-lift">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{card.n}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{card.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Further reading on custom development.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { label: 'Custom Portal Development Requirements', href: '/resources/custom-portal-development-requirements/' },
              { label: 'Web App Development Cost Factors', href: '/resources/web-app-development-cost-factors/' },
            ].map((res, i) => (
              <ScrollReveal key={res.href} delay={i * 60} direction="scale">
                <Link to={res.href} className="block glass-card rounded-2xl p-6 card-lift group">
                  <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">{res.label}</div>
                  <div className="text-sm flex items-center gap-1" style={{ color: '#3ECF9E' }}>Read resource <span>{"→"}</span></div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Know what you need<br />
                  <span className="gradient-text">to build?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We scope your project, choose the right technology, and give you a realistic cost and timeline estimate.</p>
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
