import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

function N8nNodeGraph() {
  const nodes = [
    { x: 60, y: 100, label: 'Trigger', color: '#3ECF9E' },
    { x: 190, y: 50, label: 'Filter', color: '#a78bfa' },
    { x: 190, y: 150, label: 'Parse', color: '#a78bfa' },
    { x: 320, y: 100, label: 'API Call', color: '#fbbf24' },
    { x: 450, y: 60, label: 'CRM', color: '#3ECF9E' },
    { x: 450, y: 140, label: 'Notify', color: '#3ECF9E' },
    { x: 570, y: 100, label: 'Done', color: '#3ECF9E' },
  ]
  const edges = [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[4,6],[5,6]]
  return (
    <svg viewBox="0 0 630 200" className="w-full" style={{ maxHeight: 150 }}>
      {edges.map(([a,b],i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(62,207,158,0.25)" strokeWidth="1.5" strokeDasharray="5 4"
          style={{ animation: `shimmer ${2.5 + i * 0.3}s linear infinite` }} />
      ))}
      {nodes.map((n,i) => (
        <g key={i}>
          <rect x={n.x - 26} y={n.y - 14} width="52" height="28" rx="6"
            fill="rgba(13,31,60,0.95)" stroke={n.color} strokeWidth="1.2" strokeOpacity="0.5"
            style={{ animation: `pulseGlow ${2 + i * 0.25}s ease-in-out infinite` }} />
          <text x={n.x} y={n.y + 1} textAnchor="middle" dominantBaseline="middle"
            fill={n.color} fontSize="7.5" fontFamily="monospace" fontWeight="bold">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

const capabilities = [
  { title: 'Multi-step Workflow Design', desc: 'Complex automation flows with branching logic, loops, and conditional paths. We map the logic before building, so every edge case is handled.' },
  { title: 'API & Webhook Integration', desc: 'Connect any platform with an API. REST, GraphQL, and webhook-based integrations built with proper authentication, rate limiting, and retry logic.' },
  { title: 'Error Handling & Monitoring', desc: 'Every production workflow includes error handlers, alert notifications, and a monitoring setup so you know when something fails before your customers do.' },
  { title: 'Data Transformation', desc: 'Clean, format, map, and route data between systems. We handle the messy realities of inconsistent data formats from different tools.' },
  { title: 'Scheduled Automations', desc: 'Time-based workflows that run on schedules: daily reports, weekly syncs, monthly cleanup jobs. Cron-based scheduling with timezone awareness.' },
  { title: 'Self-hosted Deployment', desc: 'n8n deployed on your own infrastructure for data sovereignty and no per-execution pricing. Docker, VPS, or cloud deployment with SSL and backups.' },
]

const useCases = [
  'Lead data sync across CRM, email, and spreadsheet',
  'Automated invoice generation from CRM deal close',
  'Social media post scheduling from content calendar',
  'Customer support ticket routing and escalation',
  'E-commerce order fulfillment notifications',
  'Daily analytics report compilation and delivery',
  'AI-powered lead scoring and tagging',
  'Multi-channel marketing sequence coordination',
]

export default function N8n() {
  return (
    <Layout>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1767817099805-d79e31fb968c', 900, 700)} alt="n8n workflow code"
            className="w-full h-full object-cover" style={{ opacity: 0.15, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 20%, transparent 55%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.1) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-automation/" className="hover:text-[#3ECF9E] transition-colors">AI Automation</Link>
              <span>/</span><span className="text-gray-300">n8n Workflows</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              n8n Workflows
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              n8n automation for<br />
              <span className="gradient-text">connected business workflows.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
              n8n is useful when a workflow needs flexible connections among apps, APIs, databases and business rules. Atiq designs and builds workflows with an emphasis on inputs, retries, error handling and documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/n8n-vs-zapier/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                n8n vs Zapier Guide
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What our n8n builds <span className="gradient-text">include by default.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">We do not deliver bare workflows. Every n8n build comes with error handling, documentation, and monitoring configured.</p>
          </ScrollReveal>
          {/* Animated n8n node graph */}
          <ScrollReveal className="mb-10">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 grid-texture pointer-events-none opacity-40" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#3ECF9E' }}>Workflow visualizer</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-70" />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#3ECF9E', opacity: 0.7 }} />
                </div>
              </div>
              <N8nNodeGraph />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* n8n vs Zapier */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Tool Comparison
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              n8n vs Zapier:<br />
              <span className="gradient-text">when to use each.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.4)' }}>
                <div className="font-display font-black text-xl mb-5" style={{ color: '#3ECF9E' }}>n8n</div>
                <div className="space-y-3">
                  {[
                    'Complex multi-step logic with branching and conditional paths',
                    'Self-hosted on your own infrastructure for data sovereignty',
                    'No per-execution pricing, regardless of workflow volume',
                    'Sensitive business data that should not pass through third-party cloud services',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-7 h-full" style={{ borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                <div className="font-display font-black text-xl text-gray-300 mb-5">Zapier</div>
                <div className="space-y-3">
                  {[
                    'Simple trigger-and-action connections between common business tools',
                    'Fast to set up without a developer or server to manage',
                    'Broad app library covering most mainstream SaaS tools',
                    'Non-technical users who need automation running quickly',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'rgba(255,255,255,0.25)' }} />
                      <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <Link to="/resources/n8n-vs-zapier/" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: '#3ECF9E' }}>
              Read the full comparison guide <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img src={unsplash('photo-1692106979244-a2ac98253f6b', 700, 400)} alt="n8n self-hosted deployment" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,11,24,0.85))' }} />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-display font-bold text-sm">Self-hosted on your infrastructure</div>
                  <div className="text-gray-400 text-xs">Full data sovereignty. No per-execution pricing.</div>
                </div>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>What We Automate</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Common n8n<br />
                <span className="gradient-text">use cases we build.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">n8n's node-based architecture lets us connect almost any platform. These are the workflows we build most often, but the right automation depends on your specific stack and process.</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3">
                {useCases.map((u, i) => (
                  <div key={u} className="glass-card rounded-xl p-4 card-lift flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                    <span className="text-gray-300 text-sm">{u}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What good error handling looks like */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Error Handling
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              What good error handling<br />
              <span className="gradient-text">looks like.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Most n8n workflows fail silently when they break. Every build we deliver includes three layers of error handling so failures are caught and surfaced immediately.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { num: '01', title: 'Every node has a dedicated error branch', desc: 'Rather than letting a failed node stop the entire workflow silently, each node routes errors to a dedicated branch that captures the failure context and takes a defined action.' },
              { num: '02', title: 'Failed executions trigger Slack or email alerts', desc: 'When an execution fails, an alert fires immediately with the workflow name, the failed node, and the error message. Your team knows before your customers do.' },
              { num: '03', title: 'A monitoring dashboard tracks execution history', desc: 'Every workflow run is logged. You can see execution volume, success rates, and failure patterns over time, so recurring issues are visible before they become critical.' },
            ].map((card, i) => (
              <ScrollReveal key={card.num} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{card.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link to="/resources/n8n-error-handling-monitoring/" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: '#3ECF9E' }}>
              Read: n8n error handling and monitoring guide <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Have a workflow<br />
                  <span className="gradient-text">in mind?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. Describe the manual task you want to automate and we will scope the n8n build, timeline, and cost.</p>
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
