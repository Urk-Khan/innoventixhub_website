import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const features = [
  { title: 'Custom Pipeline Stages', desc: 'Sales stages, statuses, and fields built around your actual process, not a generic template. Every data point you need, none you do not.' },
  { title: 'Automated Data Sync', desc: 'Two-way sync between your CRM and other tools: email, calendar, accounting, phone, and project management platforms.' },
  { title: 'Role-based Access Control', desc: 'Granular permissions so each team member sees only the records and actions relevant to their role. Full audit trail for compliance.' },
  { title: 'Activity Logging', desc: 'Automatic logging of calls, emails, meetings, and notes. Every touchpoint recorded without requiring manual data entry from your team.' },
  { title: 'Reporting and Forecasting', desc: 'Custom dashboards showing pipeline value, conversion rates, team performance, and revenue forecasts. Refreshed in real-time.' },
  { title: 'API and Integration Layer', desc: 'REST APIs that let your CRM talk to every other tool in your stack. Webhooks for real-time event-driven updates.' },
]

const comparison = [
  { aspect: 'Process fit', off: 'You adapt to the software', custom: 'Software adapts to you' },
  { aspect: 'Fields and stages', off: 'Fixed to platform defaults', custom: 'Exactly what you need' },
  { aspect: 'Monthly cost', off: 'Per-seat SaaS fees forever', custom: 'One-time build plus hosting' },
  { aspect: 'Data ownership', off: 'Vendor controls your data', custom: 'You own everything' },
  { aspect: 'Integration depth', off: 'Limited by platform APIs', custom: 'Direct database access' },
]

const whenToBuild = [
  {
    signal: 'Your sales process is non-standard',
    detail: 'Pipeline stages, handoffs, or decision points that do not map to HubSpot, GoHighLevel, or Pipedrive defaults. A custom build starts from your actual process.',
  },
  {
    signal: 'Per-seat SaaS fees are becoming significant',
    detail: 'SaaS pricing compounds with team size. A custom build has a higher initial cost but no recurring per-user fee. Total cost of ownership crosses over within a few years.',
  },
  {
    signal: 'You need integrations the platform does not support',
    detail: 'Internal tools, legacy systems, or platforms outside the CRM vendor ecosystem. A custom CRM connects directly to your database or internal APIs without middleware workarounds.',
  },
  {
    signal: 'Your data must stay on your own infrastructure',
    detail: 'Regulated industries or data residency requirements. A custom CRM deployed to your cloud account keeps all data within your control.',
  },
]

const whenToConfigure = [
  'Your process is standard and the platform templates fit it well',
  'You need to move quickly and upfront budget is constrained',
  'Your team is small and SaaS management overhead is acceptable',
  'You need a large library of pre-built integrations immediately',
  'You are early-stage and your process is still changing frequently',
]

const techStack = [
  { name: 'React', role: 'Frontend interface and dashboard components' },
  { name: 'TypeScript', role: 'Type-safe codebase for long-term maintainability' },
  { name: 'Supabase', role: 'PostgreSQL database, auth, and real-time subscriptions' },
  { name: 'Row-level security', role: 'Role-based access enforced at the database level' },
  { name: 'REST API layer', role: 'External integrations and webhook handling' },
  { name: 'Custom reporting', role: 'Dashboard views built to your specific metrics' },
]

const faqs = [
  {
    q: 'What technology stack does Innoventix Hub use for custom CRM builds?',
    a: 'We build custom CRM frontends on React with TypeScript and use Supabase as the backend for the database, authentication, and real-time subscriptions. The combination provides a fast, maintainable frontend with a managed PostgreSQL database and row-level security for role-based access control. We deploy to your cloud account so you own the infrastructure and data from day one. The stack is well-documented and can be handed to another developer if your needs change.',
  },
  {
    q: 'Do I need a developer to maintain the CRM after it is built?',
    a: 'For routine use, no. We document the system thoroughly and build administrative interfaces where possible so your team can manage common configuration changes without writing code. For structural changes, such as adding new pipeline stages, creating new integrations, or modifying the data schema, you would need a developer. We are available for ongoing support engagements, and we build in ways that make future changes accessible to any competent developer rather than locking you into us.',
  },
  {
    q: 'How long does it take to build a custom CRM?',
    a: 'A basic custom CRM covering contact management, pipeline stages, activity logging, and reporting typically takes six to ten weeks from scoping to deployment. More complex builds with multiple user roles, advanced reporting, custom integrations, and large data migrations from an existing system take longer. We provide a detailed scope and timeline before starting so you have a clear picture of the build before committing to it.',
  },
  {
    q: 'Can we migrate our existing CRM data into the custom system?',
    a: 'Yes. Data migration is included in most custom CRM projects. We export your current data, clean and map it to the new schema, run validation checks, and import in stages to minimise risk. For migrations from major platforms like HubSpot, Salesforce, or Pipedrive, the process is well-understood and typically straightforward. For older legacy systems or databases with inconsistent data, migration takes longer and requires a dedicated data preparation phase.',
  },
]

export default function CustomCrm() {
  return (
    <Layout>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1733412505442-36cfa59a4240', 900, 700)} alt="Custom CRM dashboard"
            className="w-full h-full object-cover" style={{ opacity: 0.18, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 20%, transparent 55%, #050B18 100%)' }} />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-automation/" className="hover:text-[\#3ECF9E] transition-colors">AI Automation</Link>
              <span>/</span><span className="text-gray-300">Custom CRM</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Custom CRM
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Custom CRM development<br />
              <span className="gradient-text">around your workflow.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
              A CRM built around your actual pipeline, fields, and automations instead of forcing your process into a platform's default structure. Built on React and Supabase.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/custom-crm-vs-off-the-shelf/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                CRM Comparison Guide
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What a custom CRM <span className="gradient-text">actually includes.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A custom CRM is not just a database with a nice interface. It is a system designed around your specific process, with automation, integrations, and reporting views built to your actual requirements.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Technology Stack</span>
              <h2 className="font-display font-black text-3xl text-white mb-5">
                What Innoventix Hub<br />
                <span className="gradient-text">actually builds.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                Every custom CRM we build uses the same core stack: a React frontend with TypeScript for the interface and dashboard components, and Supabase as the backend handling the PostgreSQL database, authentication, and real-time data subscriptions. Role-based access is enforced at the database level using row-level security, which means permissions are not just a frontend concern but are validated on every query.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                The system is deployed to your cloud account (AWS, Vercel, or similar) so you own the infrastructure from day one. We do not host your data on our servers. All code is handed over with documentation covering the architecture, schema, and API endpoints so your team or another developer can maintain it independently.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3">
                {techStack.map((item, i) => (
                  <div key={item.name} className="glass-card rounded-xl p-4 card-lift flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                    <div>
                      <div className="font-display font-bold text-white text-sm mb-0.5">{item.name}</div>
                      <div className="text-gray-400 text-xs">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual split - data ownership */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-72 rounded-3xl overflow-hidden">
                <img src={unsplash('photo-1692106979244-a2ac98253f6b', 700, 500)} alt="Custom CRM development"
                  className="w-full h-full object-cover animate-float" style={{ opacity: 0.65 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(5,11,24,0.85))' }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display font-bold text-white mb-1">Full data ownership</div>
                  <div className="text-gray-300 text-sm">Your database. Your server. Your schema.</div>
                </div>
                <div className="absolute top-4 right-4 glass-card rounded-xl px-3 py-2 text-center animate-pulse-glow">
                  <div className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>100%</div>
                  <div className="text-gray-400 text-xs">data control</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Why custom</span>
              <h2 className="font-display font-black text-3xl text-white mb-5">
                Own your data.<br />
                <span className="gradient-text">Own your process.</span>
              </h2>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>SaaS CRMs lock your most valuable business asset, your customer data, inside their platform. Per-seat fees compound as your team grows. Migration away becomes expensive and painful the longer you stay.</p>
                <p>A custom CRM is built on infrastructure you own. Your data lives in your database. There are no per-user fees, no feature gating, and no vendor risk if the SaaS company changes its pricing, gets acquired, or shuts down a feature you depend on.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Custom vs <span className="gradient-text">off-the-shelf.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 px-6 py-4" style={{ background: 'rgba(62,207,158,0.08)', borderBottom: '1px solid rgba(62,207,158,0.15)' }}>
                <div className="font-display font-bold text-gray-400 text-sm">Aspect</div>
                <div className="font-display font-bold text-gray-300 text-sm">Off-the-shelf</div>
                <div className="font-display font-bold text-sm" style={{ color: '#3ECF9E' }}>Custom CRM</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.aspect} className="grid grid-cols-3 px-6 py-4"
                  style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div className="text-gray-400 text-sm font-medium">{row.aspect}</div>
                  <div className="text-gray-500 text-sm">{row.off}</div>
                  <div className="text-sm font-medium" style={{ color: '#3ECF9E' }}>{row.custom}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* When to build vs configure */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Decision Framework</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              When to build vs <span className="gradient-text">when to configure.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              A custom CRM is not always the right answer. The decision depends on your process, team size, budget, and timeline. Here is a straightforward way to think about it.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.4)' }}>
                <div className="font-display font-black text-lg mb-6" style={{ color: '#3ECF9E' }}>Build custom when...</div>
                <div className="space-y-5">
                  {whenToBuild.map((item, i) => (
                    <div key={i}>
                      <div className="font-display font-bold text-white text-sm mb-1">{item.signal}</div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(255,255,255,0.08)' }}>
                <div className="font-display font-black text-lg text-gray-300 mb-6">Configure off-the-shelf when...</div>
                <div className="space-y-4">
                  {whenToConfigure.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: 'rgba(255,255,255,0.3)' }} />
                      <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-6">
                  For businesses that fit the off-the-shelf category, we offer GoHighLevel implementation as a faster, lower-cost path to a functional CRM and automation setup.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* When custom CRM makes sense vs off-the-shelf */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Decision Guide
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              Custom CRM vs<br />
              <span className="gradient-text">off-the-shelf.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choosing the right path depends on how closely your process fits what SaaS platforms were designed for.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                <div className="font-display font-black text-base text-gray-300 mb-6">Off-the-shelf works when...</div>
                <div className="space-y-3">
                  {[
                    'Your sales pipeline is standard and maps well to platform templates',
                    'You do not need custom data fields or unusual relationship structures',
                    'Your integration requirements are covered by the platform ecosystem',
                    'Budget is tight and you need to move quickly with a known monthly cost',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'rgba(255,255,255,0.25)' }} />
                      <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.4)' }}>
                <div className="font-display font-black text-base mb-6" style={{ color: '#3ECF9E' }}>Custom CRM makes sense when...</div>
                <div className="space-y-3">
                  {[
                    'Your pipeline stages are proprietary and do not fit any standard template',
                    'You have unusual data relationships that off-the-shelf platforms cannot model',
                    'You need deep integrations with internal tools no SaaS platform supports natively',
                    'Per-seat pricing becomes a significant cost as your team scales',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What a custom CRM build involves */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Build Process
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              What a custom CRM<br />
              <span className="gradient-text">build involves.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Every custom CRM project moves through the same five phases. Each one produces a concrete deliverable before the next begins.
            </p>
          </ScrollReveal>
          <div className="space-y-4 max-w-3xl">
            {[
              { step: '01', title: 'Discovery and data mapping', desc: 'We map your existing process, data sources, and integration requirements. Every field, stage, user role, and external connection is documented before any code is written.' },
              { step: '02', title: 'Schema design', desc: 'We design the PostgreSQL schema to match your data model exactly. Relationships, constraints, and row-level security policies are defined and reviewed before the build begins.' },
              { step: '03', title: 'Front-end build (React + Supabase)', desc: 'The CRM interface is built in React with TypeScript, connected to Supabase for the database, authentication, and real-time subscriptions. Dashboard views, pipeline boards, and reporting screens are built to your requirements.' },
              { step: '04', title: 'Integration layer', desc: 'Connections to external tools are built in this phase: email, calendar, accounting platforms, phone systems, and any internal APIs. Webhooks and scheduled sync jobs are included where needed.' },
              { step: '05', title: 'Testing and documentation', desc: 'The full system is tested against your real workflows before handover. Every screen, integration, and automation is documented so your team can manage it without relying on us permanently.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 60}>
                <div className="glass-card rounded-2xl p-6 card-lift flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{item.step}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-base mb-1">{item.title}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Related Reading
            </span>
            <div className="glass-card rounded-2xl p-6 card-lift flex items-center justify-between gap-6 flex-wrap mt-4">
              <div>
                <h3 className="font-display font-bold text-white text-base mb-1">Custom CRM vs Off-the-Shelf: How to Decide</h3>
                <p className="text-gray-400 text-sm">A detailed comparison of the total cost, flexibility, and risk profile of building versus buying your CRM.</p>
              </div>
              <Link to="/resources/custom-crm-vs-off-the-shelf/" className="shrink-0 text-sm font-medium flex items-center gap-1 transition-colors" style={{ color: '#3ECF9E' }}>
                Read article <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white">
              Questions about <span className="gradient-text">custom CRM builds.</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass-card rounded-2xl p-7 card-lift">
                  <h3 className="font-display font-bold text-white text-base mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Ready to own<br />
                  <span className="gradient-text">your own data?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We map your current process and scope a custom CRM that fits it exactly.</p>
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
