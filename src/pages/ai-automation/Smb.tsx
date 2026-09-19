import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

function AutomationFlowAnim() {
  const nodes = [
    { x: 60, y: 80, label: 'Lead In' },
    { x: 220, y: 40, label: 'CRM' },
    { x: 220, y: 130, label: 'Email' },
    { x: 380, y: 80, label: 'Book' },
    { x: 540, y: 80, label: 'Invoice' },
  ]
  const edges = [
    [0,1],[0,2],[1,3],[2,3],[3,4]
  ]
  return (
    <svg viewBox="0 0 600 180" className="w-full" style={{ maxHeight: 160 }}>
      {edges.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(62,207,158,0.3)" strokeWidth="1.5" strokeDasharray="6 4"
          style={{ animation: `shimmer ${2 + i * 0.4}s linear infinite` }} />
      ))}
      {nodes.map((n,i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="22" fill="rgba(13,31,60,0.9)" stroke="rgba(62,207,158,0.4)" strokeWidth="1.5"
            style={{ animation: `pulseGlow ${2.5 + i * 0.3}s ease-in-out infinite` }} />
          <circle cx={n.x} cy={n.y} r="32" fill="none" stroke="rgba(62,207,158,0.08)" strokeWidth="1"
            style={{ animation: `pulseGlow ${3 + i * 0.3}s ease-in-out infinite` }} />
          <text x={n.x} y={n.y + 1} textAnchor="middle" dominantBaseline="middle"
            fill="#3ECF9E" fontSize="8" fontFamily="monospace" fontWeight="bold">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

const workflows = [
  { title: 'Lead Capture and Follow-up', desc: 'New leads from any source, form, ad, or social, are automatically captured, scored, and enrolled in a follow-up sequence. No manual entry. No leads falling through the cracks.' },
  { title: 'Appointment Booking Automation', desc: 'Automated booking flows that qualify the lead, check availability, send confirmations, and follow up with reminders. Cancellations and reschedules handled automatically.' },
  { title: 'Invoice and Billing Workflows', desc: 'Invoice generation triggered by project milestones, payment reminders sent automatically, and payment status synced to your CRM. Reduce late payments without chasing manually.' },
  { title: 'Client Onboarding Sequences', desc: 'Welcome emails, document requests, contract delivery, and onboarding checklists triggered automatically the moment a client converts. Consistent experience every time.' },
  { title: 'Internal Notifications and Routing', desc: 'Automated alerts to the right team members when tasks need attention: new leads assigned to sales, support tickets routed to staff, project status updates delivered on schedule.' },
  { title: 'Reporting and Analytics Dashboards', desc: 'Automated weekly or monthly reports compiled and delivered to stakeholders. Data pulled from CRM, ads, and ops tools into a single formatted summary.' },
]

const platforms = ['n8n', 'GoHighLevel', 'Zapier (migration)', 'Make (Integromat)', 'Airtable', 'Notion', 'Google Workspace', 'Slack', 'Stripe', 'Twilio']

const auditSteps = [
  { n: '01', t: 'Map your manual tasks', d: 'Map the current process, its inputs, exceptions and responsible people.' },
  { n: '02', t: 'Identify the highest-friction point', d: 'Define the data, tools, permissions and handoffs required for a reliable workflow.' },
  { n: '03', t: 'Check your tool stack', d: 'Build and test the agreed logic with representative scenarios, including failures.' },
  { n: '04', t: 'Scope the first build', d: 'Document the handover, monitoring and maintenance responsibilities.' },
]

const startingPoints = [
  {
    title: 'Multi-channel lead intake',
    desc: 'New inquiries from web forms, ads, and social channels are automatically captured, entered into your CRM with source attribution, and enrolled in a follow-up sequence without manual input.',
  },
  {
    title: 'Appointment booking with CRM sync',
    desc: 'Booking confirmations trigger automatic CRM record creation, calendar invites, and a reminder sequence. Cancellations and reschedules update both systems without anyone touching a spreadsheet.',
  },
  {
    title: 'Invoice and payment follow-up',
    desc: 'Invoice generation fires when a CRM deal reaches a milestone stage. Unpaid invoices trigger a timed reminder sequence. Payment receipt updates the CRM automatically.',
  },
  {
    title: 'New client onboarding sequence',
    desc: 'Contract signing triggers the full onboarding flow: intake form delivery, follow-up if incomplete, and automatic kickoff scheduling. Every client gets the same consistent experience.',
  },
  {
    title: 'Weekly performance reporting',
    desc: 'Data from your CRM, ad platforms, and email tools is pulled on a schedule, formatted into a summary, and delivered to Slack or email without anyone compiling it manually.',
  },
]

const faqs = [
  {
    q: 'How long does it take to build and launch a basic automation workflow?',
    a: 'A straightforward workflow, such as a lead intake sequence or an appointment reminder system, typically takes one to two weeks from scoping to deployment. That includes mapping the logic, building and testing the workflow, and documenting how it works. More complex workflows involving multiple platforms, conditional logic, or custom integrations take longer. We scope the timeline explicitly before starting work, so you know what to expect before any build begins.',
  },
  {
    q: 'Do I need to replace my existing tools to use automation?',
    a: 'No. SMB automation is designed to work with your existing stack by connecting the tools you already use rather than replacing them. Whether you use Google Workspace, a booking platform, a payment processor, or a combination of platforms, the automation layer sits between them and handles the data flow. The only technical requirement is that your tools have an API or webhook capability, which most modern business software provides.',
  },
  {
    q: 'What happens if an automation fails or produces an error?',
    a: 'Every production workflow we build includes error handling and monitoring. If a step fails, an alert goes to the designated contact rather than failing silently. We document the expected behavior and common failure modes so your team knows how to respond. Most workflows also include retry logic for temporary failures, such as a momentary API timeout, so brief interruptions do not break the whole sequence.',
  },
  {
    q: 'Can we start with a single workflow before committing to a larger build?',
    a: 'Yes. Starting with a single, well-scoped workflow is typically the most sensible approach, particularly if your team has not worked with automation before. A bounded first build lets you validate the approach, get comfortable with how automated workflows behave, and identify gaps before investing in a larger system. We scope each engagement separately, so a single workflow is a complete project in itself with no obligation to extend.',
  },
]

export default function Smb() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1684369175809-f9642140a1bd', 900, 700)} alt="AI automation robots"
            className="w-full h-full object-cover" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 20%, transparent 55%, #050B18 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050B18 0%, transparent 10%, transparent 90%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-automation/" className="hover:text-[\#3ECF9E] transition-colors">AI Automation</Link>
              <span>/</span><span className="text-gray-300">SMB Automation</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              SMB Automation
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Automation services for<br />
              <span className="gradient-text">small business workflows.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
              Automation systems for small businesses that eliminate manual work: lead capture, CRM sync, appointment booking, invoice triggers, and reporting. Built on n8n and GoHighLevel, fully documented at handover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/small-business-automation-audit/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                Free Audit Checklist
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six core SMB workflows <span className="gradient-text">we automate.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              These are the highest-impact automations for businesses with 1 to 50 team members. Each one returns hours per week and reduces human error across your core operations.
            </p>
          </ScrollReveal>
          {/* Animated flow diagram */}
          <ScrollReveal className="mb-12">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 grid-texture pointer-events-none opacity-50" />
              <div className="text-xs font-medium tracking-widest uppercase mb-4 text-center" style={{ color: '#3ECF9E' }}>Live automation flow</div>
              <AutomationFlowAnim />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflows.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              How to audit your<br />
              <span className="gradient-text">automation opportunities.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Most automation projects fail not because of technical problems but because the scope is unclear at the start. A simple four-step audit identifies which workflows are ready to build.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {auditSteps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 card-lift relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(62,207,158,0.07)' }}>{s.n}</div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{s.n}</span>
                    <h3 className="font-display font-black text-lg text-white mb-3">{s.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          {/* Visual image break */}
          <ScrollReveal className="mb-14">
            <div className="relative h-52 rounded-3xl overflow-hidden">
              <img src={unsplash('photo-1574073763042-9dbe6ae03853', 1200, 400)} alt="Automation workspace" className="w-full h-full object-cover" style={{ opacity: 0.35 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,11,24,0.7), rgba(5,11,24,0.2), rgba(5,11,24,0.7))' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-white mb-2">Your stack. Connected.</div>
                  <div className="text-gray-300 text-sm">Automation built on tools you already use</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Integration Ecosystem</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                We work with<br />
                <span className="gradient-text">your existing tools.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                SMB automation does not require ripping out your current stack and replacing it. We build on top of what you already have, connecting your existing tools with automation logic that sits between them. The tools listed here represent the platforms we connect most often, but any platform with an API or webhook capability can be integrated into an automated workflow.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our builds are documented so your team understands what is running and why. No black-box systems that require us to maintain them indefinitely. We hand over clear documentation and, where it makes sense, a brief training session so your team can manage changes independently.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="flex flex-wrap gap-3">
                {platforms.map((p, i) => (
                  <div key={p} className="glass-card rounded-xl px-4 py-3 card-lift flex items-center gap-2"
                    style={{ animationDelay: `${i * 40}ms` }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#3ECF9E' }} />
                    <span className="text-gray-300 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Typical starting points */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Use Cases</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Typical starting points <span className="gradient-text">for small businesses.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              These are the specific automation scenarios we build most often for businesses in the 1 to 50 person range. Each description covers the manual process being replaced and what the automated version handles instead.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {startingPoints.map((sp, i) => (
              <ScrollReveal key={sp.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{sp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{sp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white">
              Common questions <span className="gradient-text">before starting.</span>
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
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  What is your<br />
                  <span className="gradient-text">highest-friction task?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We run a rapid audit of your manual processes and identify the automation that will save you the most time in the shortest period.</p>
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
