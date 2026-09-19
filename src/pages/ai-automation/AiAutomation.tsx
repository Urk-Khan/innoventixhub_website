import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  {
    title: 'SMB Automation',
    desc: 'End-to-end workflow automation for small businesses: lead intake, CRM sync, appointment booking, invoice triggers, and team notifications. Connects existing tools, fully documented.',
    href: '/ai-automation/smb/',
    tags: ['Lead Nurturing', 'Appointments', 'Reporting'],
  },
  {
    title: 'Custom CRM',
    desc: 'Built-to-spec CRM on React and Supabase with role-based access, custom pipeline stages, and automated data sync. No per-seat fees, no vendor lock-in on your data.',
    href: '/ai-automation/custom-crm/',
    tags: ['Data Sync', 'Pipeline', 'Custom Fields'],
  },
  {
    title: 'GoHighLevel',
    desc: 'Sub-account setup, pipeline configuration, SMS and email sequences, and team training. Independent implementation service. Not a certified GHL partner or official reseller.',
    href: '/ai-automation/ghl/',
    tags: ['Sub-account', 'Pipelines', 'Automation'],
  },
  {
    title: 'n8n Workflows',
    desc: 'Complex multi-step automation on n8n: self-hosted, no per-execution pricing, full data sovereignty. Used for branching logic, large volumes, or data that should not leave your infrastructure.',
    href: '/ai-automation/n8n/',
    tags: ['API Integration', 'Logic', 'Monitoring'],
  },
]

const projects = [
  { title: 'Project Management System', href: '/ai-automation/projects/project-management/' },
  { title: 'Invoice Generator', href: '/ai-automation/projects/invoice-generator/' },
  { title: 'Finance Tracker', href: '/ai-automation/projects/finance-tracker/' },
  { title: 'Lead Management CRM', href: '/ai-automation/projects/lead-management/' },
  { title: 'AI Personal Assistant', href: '/ai-automation/projects/ai-personal-assistant/' },
  { title: 'Taxi Booking (Retell)', href: '/ai-automation/projects/taxi-booking-retell/' },
]

const replacesItems = [
  {
    heading: 'Repetitive data entry and notification tasks',
    body: 'The clearest automation wins are tasks that follow a fixed, repeatable pattern: a new form submission copies contact details into a CRM, an invoice is generated when a deal stage changes, a Slack notification fires when a support ticket goes unassigned for more than an hour. These workflows have defined inputs, defined outputs, and no judgment required. They are also the tasks most likely to introduce errors when done manually, because repetition breeds inattention and even careful people make mistakes at scale.',
  },
  {
    heading: 'Lead follow-up sequences',
    body: 'Lead follow-up is one of the highest-value areas to automate for most service businesses. A new inquiry arrives, a CRM contact is created, an initial response is sent within minutes, and a sequence of follow-up touchpoints runs over the following days. The sequence adjusts based on the prospect behavior: if they book a call, the follow-up stops; if they click a link but do not respond, a different message fires. This kind of logic is time-consuming to execute manually and easy to forget under the pressure of other work.',
  },
  {
    heading: 'What automation should not replace',
    body: 'Automation is not intended to replace the parts of your business that require human judgment, relationship-building, or creative thinking. Closing a deal requires reading a person and responding to what is not being said. Resolving a complex support issue requires interpreting context that a rule-based system cannot reliably parse. Producing original content, making pricing decisions, and handling exceptions all require a person. A well-designed automation system handles the structured, predictable work and routes the exceptions directly to the right human.',
  },
  {
    heading: 'The discovery process: finding the right first workflow',
    body: 'Identifying the right first workflow to automate is often more valuable than the automation itself. The discovery process starts with a map of your most repetitive manual tasks, ordered by how frequently they happen and how much time they consume per instance. The first build should be simple enough to complete quickly and concrete enough to demonstrate clear value to your team. Starting with a bounded workflow, such as a lead intake sequence or an invoice trigger, builds confidence in automation before tackling more complex systems.',
  },
]

export default function AiAutomation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                AI Automation
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95]">
                AI automation for<br />
                <span className="gradient-text">business workflows.</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
                Workflow automation on n8n and GoHighLevel for businesses losing hours each week to manual tasks. Lead intake, CRM sync, follow-up sequences, booking flows, and reporting -- documented and handed over.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/ai-automation/projects/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  Browse Projects
                </Link>
              </div>
            </ScrollReveal>

            {/* 2.5D animated workflow SVG scene */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="max-w-[440px] w-full">
                <svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 'auto' }}>
                  <defs>
                    <style>{`
                      @media (prefers-reduced-motion: no-preference) {
                        .aa-node-1 { animation: aa-fadein 0.6s ease-out 0.1s both; }
                        .aa-node-2 { animation: aa-fadein 0.6s ease-out 0.35s both; }
                        .aa-node-3 { animation: aa-fadein 0.6s ease-out 0.6s both; }
                        .aa-node-4 { animation: aa-fadein 0.6s ease-out 0.85s both; }
                        .aa-node-5 { animation: aa-fadein 0.6s ease-out 1.1s both; }
                        .aa-flow-1 { animation: aa-dash 2.4s linear infinite; }
                        .aa-flow-2 { animation: aa-dash 2.4s linear infinite 0.6s; }
                        .aa-flow-3 { animation: aa-dash 2.4s linear infinite 1.2s; }
                        .aa-flow-4 { animation: aa-dash 2.4s linear infinite 1.8s; }
                        .aa-pulse { animation: aa-pulse 2s ease-in-out infinite; }
                        .aa-check { animation: aa-fadein 0.5s ease-out 1.4s both; }
                      }
                      @keyframes aa-fadein {
                        from { opacity: 0; transform: scale(0.7); }
                        to { opacity: 1; transform: scale(1); }
                      }
                      @keyframes aa-dash {
                        to { stroke-dashoffset: -24; }
                      }
                      @keyframes aa-pulse {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                      }
                    `}</style>
                    <filter id="aa-glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="aa-board-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0D1F3C" />
                      <stop offset="100%" stopColor="#0B1220" />
                    </linearGradient>
                  </defs>

                  {/* Main workflow board */}
                  <rect x="70" y="60" width="300" height="240" rx="20" fill="url(#aa-board-grad)" stroke="rgba(62,207,158,0.25)" strokeWidth="1.5" />
                  <rect x="70" y="60" width="300" height="3" rx="1.5" fill="#3ECF9E" opacity="0.6" />

                  {/* Connection lines - dashed animated */}
                  {/* Trigger -> Process A */}
                  <line x1="148" y1="122" x2="184" y2="175" stroke="#3ECF9E" strokeWidth="1.5" strokeDasharray="6 6" className="aa-flow-1" opacity="0.7" />
                  {/* Trigger -> Process B */}
                  <line x1="162" y1="122" x2="254" y2="175" stroke="#3ECF9E" strokeWidth="1.5" strokeDasharray="6 6" className="aa-flow-2" opacity="0.7" />
                  {/* Process A -> Output */}
                  <line x1="196" y1="205" x2="278" y2="248" stroke="#3ECF9E" strokeWidth="1.5" strokeDasharray="6 6" className="aa-flow-3" opacity="0.7" />
                  {/* Process B -> Output */}
                  <line x1="266" y1="205" x2="288" y2="248" stroke="#3ECF9E" strokeWidth="1.5" strokeDasharray="6 6" className="aa-flow-4" opacity="0.7" />

                  {/* Trigger node - top left */}
                  <g className="aa-node-1">
                    <circle cx="140" cy="108" r="24" fill="#0B1220" stroke="#3ECF9E" strokeWidth="2" filter="url(#aa-glow)" />
                    {/* Lightning bolt */}
                    <polygon points="137,98 132,110 139,108 136,120 145,106 138,108" fill="#3ECF9E" opacity="0.95" />
                    <text x="140" y="140" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Trigger</text>
                  </g>

                  {/* Data block attached to trigger */}
                  <g className="aa-node-1">
                    <rect x="82" y="94" width="38" height="18" rx="5" fill="#1D3A6E" stroke="rgba(62,207,158,0.3)" strokeWidth="1" />
                    <text x="101" y="107" textAnchor="middle" fill="#3ECF9E" fontSize="7" fontFamily="monospace">API</text>
                  </g>

                  {/* Process node A */}
                  <g className="aa-node-2">
                    <circle cx="196" cy="190" r="20" fill="#0D1F3C" stroke="rgba(62,207,158,0.6)" strokeWidth="1.5" />
                    <rect x="188" y="183" width="16" height="14" rx="3" fill="none" stroke="#3ECF9E" strokeWidth="1.5" />
                    <line x1="192" y1="187" x2="200" y2="187" stroke="#3ECF9E" strokeWidth="1" />
                    <line x1="192" y1="190" x2="200" y2="190" stroke="#3ECF9E" strokeWidth="1" />
                    <line x1="192" y1="193" x2="197" y2="193" stroke="#3ECF9E" strokeWidth="1" />
                    <text x="196" y="220" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">CRM Sync</text>
                  </g>

                  {/* Process node B */}
                  <g className="aa-node-3">
                    <circle cx="266" cy="190" r="20" fill="#0D1F3C" stroke="rgba(62,207,158,0.6)" strokeWidth="1.5" />
                    {/* Email icon */}
                    <rect x="257" y="184" width="18" height="12" rx="2" fill="none" stroke="#3ECF9E" strokeWidth="1.5" />
                    <polyline points="257,184 266,191 275,184" fill="none" stroke="#3ECF9E" strokeWidth="1.2" />
                    <text x="266" y="220" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Sequence</text>
                  </g>

                  {/* Data block on Process B */}
                  <g className="aa-node-3">
                    <rect x="292" y="183" width="42" height="14" rx="4" fill="#1D3A6E" stroke="rgba(62,207,158,0.3)" strokeWidth="1" />
                    <text x="313" y="193" textAnchor="middle" fill="#3ECF9E" fontSize="7" fontFamily="monospace">n8n</text>
                  </g>

                  {/* Output node - bottom right */}
                  <g className="aa-node-4">
                    <circle cx="300" cy="264" r="24" fill="#0B1220" stroke="#3ECF9E" strokeWidth="2" filter="url(#aa-glow)" />
                    <g className="aa-check">
                      <polyline points="290,264 297,271 312,256" fill="none" stroke="#3ECF9E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <text x="300" y="296" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">Output</text>
                  </g>

                  {/* Idle / waiting node */}
                  <g className="aa-node-5">
                    <circle cx="136" cy="264" r="16" fill="#0D1F3C" stroke="rgba(62,207,158,0.35)" strokeWidth="1.2" />
                    <circle cx="136" cy="264" r="6" fill="none" stroke="rgba(62,207,158,0.5)" strokeWidth="1.5" className="aa-pulse" />
                    <text x="136" y="288" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="sans-serif">Monitor</text>
                  </g>

                  {/* Side stat chips */}
                  <rect x="380" y="120" width="52" height="26" rx="7" fill="#0D1F3C" stroke="rgba(62,207,158,0.2)" strokeWidth="1" />
                  <text x="406" y="131" textAnchor="middle" fill="#3ECF9E" fontSize="8" fontFamily="monospace" fontWeight="bold">24/7</text>
                  <text x="406" y="141" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">Active</text>

                  <rect x="8" y="190" width="52" height="26" rx="7" fill="#0D1F3C" stroke="rgba(62,207,158,0.2)" strokeWidth="1" />
                  <text x="34" y="201" textAnchor="middle" fill="#3ECF9E" fontSize="8" fontFamily="monospace" fontWeight="bold">0ms</text>
                  <text x="34" y="211" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="sans-serif">Delay</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image band */}
      <section className="py-4 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden relative h-64 md:h-80">
              <img src={unsplash('photo-1551288049-bebda4e38f71', 1200, 500)}
                alt="Analytics dashboard" className="w-full h-full object-cover" style={{ opacity: 0.55 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #050B18)' }} />
              <div className="absolute bottom-6 left-8 flex gap-3 flex-wrap">
                {['n8n', 'GoHighLevel', 'Python', 'REST APIs', 'Webhooks'].map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(62,207,158,0.15)', border: '1px solid rgba(62,207,158,0.3)', color: '#a8f0da' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Four automation paths. <span className="gradient-text">One connected system.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Link to={s.href} className="block group h-full">
                  <div className="glass-card rounded-2xl p-7 card-lift h-full flex flex-col" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                    <h3 className="font-display font-black text-xl text-white mb-3 group-hover:text-[\#3ECF9E] transition-colors">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {s.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.18)', color: '#a8f0da' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-sm font-medium text-gray-500 group-hover:text-[\#3ECF9E] transition-colors flex items-center gap-1">
                      Explore <span style={{ color: '#3ECF9E' }}>&#8594;</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project highlights */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Built Projects</span>
                <h2 className="font-display font-black text-4xl text-white">Real builds. <span className="gradient-text">Real demos.</span></h2>
              </div>
              <Link to="/ai-automation/projects/" className="text-sm font-medium px-5 py-2.5 rounded-full transition-all"
                style={{ border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                View all projects &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60} direction="scale">
                <Link to={p.href} className="block group">
                  <div className="glass-card rounded-2xl p-5 card-lift flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                      <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                    </div>
                    <span className="font-display font-semibold text-gray-300 text-sm group-hover:text-white transition-colors">{p.title}</span>
                    <span className="ml-auto text-gray-600 group-hover:text-[\#3ECF9E] transition-colors text-sm">&rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What automation replaces and what it does not */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Honest Context</span>
            <h2 className="font-display font-black text-4xl text-white max-w-2xl">
              What automation actually replaces,<br />
              <span className="gradient-text">and what it does not.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mt-4 leading-relaxed">
              Automation is a specific tool for a specific kind of work. Understanding where it fits, and where it does not, leads to better outcomes than treating it as a general-purpose solution.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {replacesItems.map((item, i) => (
              <ScrollReveal key={item.heading} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <h3 className="font-display font-bold text-lg text-white mb-4">{item.heading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic automation benefits */}
      <section className="py-20 relative" style={{ background: '#F7F9FC' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Realistic Expectations
            </span>
            <h2 className="font-display font-black text-4xl text-gray-900 mt-4 mb-3">
              What automation can realistically<br />
              <span className="gradient-text">do for your business.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="rounded-2xl p-7 h-full" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderLeft: '3px solid #3ECF9E' }}>
                <div className="font-display font-black text-base mb-6" style={{ color: '#3ECF9E' }}>What automation does well</div>
                <div className="space-y-4">
                  {[
                    { title: 'Frees up manual hours', desc: 'Repetitive tasks that follow a fixed pattern run without anyone touching them. Your team focuses on work that requires judgment.' },
                    { title: 'Reduces data entry errors', desc: 'Automation copies records exactly once, from one source of truth. Manual re-entry creates discrepancies. Automation eliminates them.' },
                    { title: 'Improves follow-up speed', desc: 'A new inquiry gets an immediate response. A scheduled call gets an automatic reminder. Speed of response goes from hours to seconds.' },
                    { title: 'Keeps systems in sync', desc: 'Contact created in one tool appears in all the others within seconds. No more importing CSVs or checking which version of the data is correct.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#3ECF9E' }} />
                      <div>
                        <div className="font-display font-bold text-gray-800 text-sm mb-0.5">{item.title}</div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="rounded-2xl p-7 h-full" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderLeft: '3px solid rgba(0,0,0,0.12)' }}>
                <div className="font-display font-black text-base text-gray-500 mb-6">What automation does NOT do</div>
                <div className="space-y-4">
                  {[
                    { title: 'Replace humans in complex decisions', desc: 'Closing a deal, handling an upset client, or diagnosing an unusual problem all require a person. Automation handles the before and after, not the decision itself.' },
                    { title: 'Fix a broken sales process', desc: 'Automating a process that does not work just makes the broken thing run faster. The process needs to be right before automation accelerates it.' },
                    { title: 'Guarantee revenue lift', desc: 'Automation reduces friction and improves consistency. It does not generate demand or replace the need for a strong offer and clear positioning.' },
                    { title: 'Work without any maintenance', desc: 'APIs change. Tools update. Workflows built today need periodic review. Automation is infrastructure, not a one-time fix.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'rgba(0,0,0,0.2)' }} />
                      <div>
                        <div className="font-display font-bold text-gray-700 text-sm mb-0.5">{item.title}</div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tool fit comparison */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Tool Selection
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4 mb-3">
              Which automation tool<br />
              <span className="gradient-text">fits your situation.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The right tool depends on your technical constraints, team size, and the complexity of what you are building. Here is a straightforward breakdown.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { tool: 'n8n', best: 'Complex, technical, or data-sensitive workflows', detail: 'Best when you need branching logic, large data volumes, or must keep data on your own infrastructure. Self-hosted with no per-execution cost. Requires a developer to build and maintain.', href: '/ai-automation/n8n/' },
              { tool: 'GoHighLevel', best: 'Marketing-focused service businesses', detail: 'Best for businesses that need an all-in-one CRM, SMS, email, and funnel platform in one place. Works well for agencies, coaches, and local service providers.', href: '/ai-automation/ghl/' },
              { tool: 'Custom CRM', best: 'When off-the-shelf does not fit your process', detail: 'Best when your pipeline is non-standard, your data model is unusual, or you need deep integrations with internal tools no SaaS platform supports. Higher initial cost, no ongoing per-seat fees.', href: '/ai-automation/custom-crm/' },
              { tool: 'Zapier / Make', best: 'Simple, low-volume connectors', detail: 'Best for connecting common business tools quickly without a developer. Well-suited for small teams with straightforward triggers and simple action chains. Cost scales with execution volume.', href: null },
            ].map((item, i) => (
              <ScrollReveal key={item.tool} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="font-display font-black text-xl mb-2" style={{ color: '#3ECF9E' }}>{item.tool}</div>
                  <div className="font-display font-bold text-white text-sm mb-3">{item.best}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.detail}</p>
                  {item.href && (
                    <Link to={item.href} className="text-sm font-medium flex items-center gap-1 transition-colors" style={{ color: '#3ECF9E' }}>
                      Learn more <span>&#8594;</span>
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Related Resources
            </span>
            <h2 className="font-display font-black text-4xl text-white mt-4">
              Useful reads before<br />
              <span className="gradient-text">you start.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Small Business Automation Audit', desc: 'A structured process for identifying which workflows in your business are ready to automate and which are not.', href: '/resources/small-business-automation-audit/' },
              { title: 'n8n vs Zapier: Which Tool Fits Your Workflow', desc: 'A side-by-side comparison of n8n and Zapier covering cost, complexity, self-hosting, and when each tool makes sense.', href: '/resources/n8n-vs-zapier/' },
              { title: 'Lead Follow-Up Automation', desc: 'How to build an automated follow-up sequence that adjusts based on prospect behavior and keeps leads moving through the pipeline.', href: '/resources/lead-follow-up-automation/' },
            ].map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-6 card-lift h-full flex flex-col">
                  <h3 className="font-display font-bold text-white text-base mb-3">{article.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{article.desc}</p>
                  <Link to={article.href} className="mt-5 text-sm font-medium flex items-center gap-1 transition-colors" style={{ color: '#3ECF9E' }}>
                    Read article <span>&#8594;</span>
                  </Link>
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
            <div className="glass-card rounded-3xl px-8 py-16 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  What would you<br />
                  <span className="gradient-text">automate first?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We audit your highest-friction workflows and identify the fastest automation wins.</p>
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
