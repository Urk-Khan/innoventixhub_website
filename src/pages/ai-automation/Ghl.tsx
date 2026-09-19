import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  { title: 'Sub-account Setup', desc: 'Complete GHL sub-account configuration: branding, domain, email sending domain, phone numbers, and calendar setup. Done once, done correctly, with every setting documented for your team.' },
  { title: 'Pipeline Configuration', desc: 'Sales and fulfillment pipelines built to mirror your actual process. Custom stages, task automation at each stage, probability weighting for forecasting, and notification rules when deals move or stall.' },
  { title: 'Automation Sequences', desc: 'SMS, email, and voicemail drop sequences built for lead nurturing, appointment follow-up, and client onboarding. Conditional logic determines which path a contact takes based on their behavior, responses, and pipeline stage.' },
  { title: 'Funnel and Landing Pages', desc: 'High-converting funnel pages built inside GHL using your brand assets. Form integration, redirect logic, and CRM tagging all connected so every submission lands correctly in your pipeline.' },
  { title: 'Reporting and Snapshots', desc: 'Dashboard configuration for lead source attribution, conversion rates, and campaign performance. Snapshot exports for multi-location or agency rollouts that need consistent setups across sub-accounts.' },
  { title: 'Team Training', desc: 'Recorded walkthroughs and live training sessions for your team covering daily operations, pipeline management, and automation monitoring. Every workflow is documented so your team can manage the system without depending on us permanently.' },
]

const migrations = [
  'HubSpot to GoHighLevel',
  'Salesforce to GoHighLevel',
  'ActiveCampaign to GoHighLevel',
  'Keap / Infusionsoft to GoHighLevel',
  'ClickFunnels to GoHighLevel',
  'Mailchimp to GoHighLevel',
]

const canDo = [
  'Serve as an all-in-one CRM, email, SMS, and marketing platform for most small businesses',
  'Run contact-based automation sequences with conditional branching and time delays',
  'Manage appointment scheduling with automated confirmation and reminder sequences',
  'Build and host simple funnel pages, forms, and basic websites',
  'Support sub-account management for agencies handling multiple client accounts',
  'Export snapshots for consistent deployment across multiple locations or accounts',
]

const cannotDo = [
  'Handle highly complex B2B enterprise sales flows with many stakeholders and long cycles cleanly',
  'Guarantee email deliverability, which depends on your sending domain configuration and reputation',
  'Provide SMS and calling functionality in all countries and carrier networks',
  'Replace custom web development for complex, design-driven websites or web applications',
  'Connect natively to every third-party tool, which sometimes requires external automation via n8n',
  'Replace a dedicated business intelligence tool for complex data analysis and reporting',
]

const faqs = [
  {
    q: 'Is Innoventix Hub an official GoHighLevel partner or reseller?',
    a: 'No. Innoventix Hub is not a certified GoHighLevel partner or official reseller. We are an independent implementation service. We help clients who already have a GoHighLevel account configure, automate, and get more value from the platform. If you are evaluating GoHighLevel as a platform, you would obtain your account directly from GoHighLevel. Our work begins once your account is active, and we handle the setup and implementation from that point.',
  },
  {
    q: 'Do I need my own GoHighLevel account before working with you?',
    a: 'Yes. Our implementation service assumes you already have a GoHighLevel sub-account or are setting one up directly through GoHighLevel. We do not provide GoHighLevel accounts or resell access to the platform. Once your account is active, we handle everything from initial configuration through team training and documentation. We can advise on which GoHighLevel plan is appropriate for your use case before you sign up.',
  },
  {
    q: 'How long does a full GoHighLevel setup typically take?',
    a: 'A standard sub-account setup covering CRM configuration, one or two pipelines, an automation sequence, and team training typically takes two to four weeks. More complex setups involving multiple pipelines, extensive automation libraries, funnel pages, and migrations from another platform take longer. We scope the timeline and deliverables explicitly before starting, so you know what is included and what to expect before any work begins.',
  },
  {
    q: 'What if I already have a GoHighLevel account with existing contacts and automations?',
    a: 'We start with an audit of your existing setup before making any changes. That audit covers your current pipelines, automation sequences, contact tags, and any active workflows. We document what is already in place, identify what is working and what is not, and produce a clear plan before touching anything. Existing contacts and data are preserved throughout the implementation. Nothing is changed or removed without your approval.',
  },
]

export default function Ghl() {
  return (
    <Layout>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1782927510642-8bf07656edd2', 900, 700)} alt="GoHighLevel CRM interface"
            className="w-full h-full object-cover" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 20%, transparent 55%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-automation/" className="hover:text-[\#3ECF9E] transition-colors">AI Automation</Link>
              <span>/</span><span className="text-gray-300">GoHighLevel</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              GoHighLevel
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              GoHighLevel setup,<br />
              <span className="gradient-text">migration and automation.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-6">
              Most businesses that feel GoHighLevel is not working for them have simply never configured it to match their actual process. We set up, migrate, and implement GHL sub-accounts so you get the platform working as intended from day one.
            </p>
            <div className="glass-card rounded-xl px-5 py-3 mb-8 max-w-xl" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              <p className="text-gray-500 text-xs leading-relaxed">
                <span className="text-gray-300 font-medium">Important note:</span> Innoventix Hub is not a certified GoHighLevel partner or official reseller. We are an independent implementation service for clients who hold their own GoHighLevel account.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/ghl-migration-checklist/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                Migration Checklist
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six GHL services. <span className="gradient-text">One complete setup.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A complete GoHighLevel implementation covers more than flipping switches in a default account. Each component below is configured to your specific process, with documentation and team training included.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="py-6 relative overflow-hidden" style={{ background: 'rgba(62,207,158,0.04)', borderTop: '1px solid rgba(62,207,158,0.1)', borderBottom: '1px solid rgba(62,207,158,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['6', 'Services included'], ['All', 'CRM platforms supported'], ['Zero', 'Data loss migrations'], ['Live', 'Training included']].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-black text-2xl gradient-text-mint">{val}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What GHL can and cannot do */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Honest Expectations</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What GoHighLevel can<br />
              <span className="gradient-text">and cannot do.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              GoHighLevel is a strong platform for specific use cases. Understanding its actual capabilities and its limits before committing to a setup helps you plan a realistic implementation.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.4)' }}>
                <div className="font-display font-black text-base mb-6" style={{ color: '#3ECF9E' }}>GoHighLevel is well-suited for...</div>
                <div className="space-y-3">
                  {canDo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(255,255,255,0.08)' }}>
                <div className="font-display font-black text-base text-gray-300 mb-6">Limitations to understand...</div>
                <div className="space-y-3">
                  {cannotDo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'rgba(255,255,255,0.25)' }} />
                      <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Migrations */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Migrations</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Moving from<br />
                <span className="gradient-text">another platform?</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">We handle migrations from all major CRM and automation platforms to GoHighLevel. Contact data, automations, funnels, and historical records are migrated with minimal downtime and no data loss. Every migration starts with a pre-migration audit of the source account to understand what exists, what is still active, and what can be safely excluded.</p>
              <p className="text-gray-400 leading-relaxed">Every migration includes a pre-migration audit, a staged rollout plan, and a post-migration validation checklist. We do not switch you over and walk away. Your team has a documented record of what moved and where it landed in the new system.</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img src={unsplash('photo-1574073763042-9dbe6ae03853', 700, 400)} alt="CRM migration" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,11,24,0.7))' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display font-black text-white text-xl mb-1">Zero data loss</div>
                    <div className="text-gray-300 text-sm">Staged rollout with validation</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {migrations.map((m) => (
                  <div key={m} className="glass-card rounded-xl p-4 card-lift flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#3ECF9E' }} />
                    <span className="text-gray-300 text-sm font-medium">{m}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(62,207,158,0.1)', color: '#3ECF9E' }}>Available</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What GHL implementation covers */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Scope of Work
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              What GHL implementation<br />
              <span className="gradient-text">covers.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A complete GHL implementation is more than account access. Every component below is configured, documented, and tested before handover.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Sub-account setup', desc: 'Branding, domain, email sending domain, phone numbers, and calendar configured and verified.' },
              { title: 'Funnel and landing pages', desc: 'High-converting pages built inside GHL using your brand assets, with form integration and CRM tagging.' },
              { title: 'Email and SMS automation', desc: 'Nurture sequences, appointment reminders, and onboarding flows with conditional branching logic.' },
              { title: 'Pipeline configuration', desc: 'Custom stages, task automation at each stage, probability weighting, and stall notification rules.' },
              { title: 'Reporting dashboards', desc: 'Lead source attribution, conversion rates, and campaign performance configured for your specific metrics.' },
              { title: 'Team training', desc: 'Recorded walkthroughs and live sessions covering daily operations, pipeline management, and automation monitoring.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60} direction="scale">
                <div className="glass-card rounded-2xl p-6 card-lift h-full">
                  <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3ECF9E' }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to prepare before a GHL migration */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Pre-Migration
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              What to prepare before<br />
              <span className="gradient-text">a GHL migration.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Migrations go faster and cleaner when your source data and current process are documented before we start. Work through this checklist first.
            </p>
          </ScrollReveal>
          <div className="max-w-2xl space-y-3">
            {[
              'Export your existing contacts from your current platform',
              'Document your current pipeline stages and deal statuses',
              'List all your active automations and the conditions that trigger them',
              'Identify which integrations you depend on day-to-day',
              'Define your approval process for new sequences before they go live',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass-card rounded-xl p-5 card-lift flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg shrink-0 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.25)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{i + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
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
                <h3 className="font-display font-bold text-white text-base mb-1">GHL Migration Checklist</h3>
                <p className="text-gray-400 text-sm">A step-by-step checklist for preparing your data, pipelines, and automations before migrating to GoHighLevel.</p>
              </div>
              <Link to="/resources/ghl-migration-checklist/" className="shrink-0 text-sm font-medium flex items-center gap-1 transition-colors" style={{ color: '#3ECF9E' }}>
                Read article <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white">
              Common questions about <span className="gradient-text">GHL implementation.</span>
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
                  Ready to get GHL<br />
                  <span className="gradient-text">working properly?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We audit your current setup or migration source and outline a clear implementation plan.</p>
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
