import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

// Industry hero images
const industryImages: Record<string, string> = {
  'Transportation': unsplash('photo-1587560699334-bea93391dcef', 600, 400),
  'Healthcare & Wellness': unsplash('photo-1626863905121-3b0c0ed7b94c', 600, 400),
  'Real Estate': unsplash('photo-1678977252570-58db7acbbeea', 600, 400),
  'Home Services': unsplash('photo-1766066014237-00645c74e9c6', 600, 400),
  'E-commerce & Retail': unsplash('photo-1525182008055-f88b95ff7980', 600, 400),
  'Financial Services': unsplash('photo-1678977252570-58db7acbbeea', 600, 400),
}

function VoiceWave() {
  return (
    <div className="flex items-center justify-center gap-1" style={{ height: 36 }}>
      {[0.4, 0.7, 1, 0.85, 0.6, 1, 0.75, 0.5, 0.9, 0.65, 1, 0.8, 0.45].map((h, i) => (
        <div key={i} className="w-0.5 rounded-full"
          style={{
            height: `${h * 100}%`,
            background: '#3ECF9E',
            opacity: 0.7,
            animation: `floatY ${0.6 + i * 0.1}s ease-in-out ${i * 50}ms infinite alternate`,
          }} />
      ))}
    </div>
  )
}

const usecases = [
  {
    industry: 'Transportation',
    title: 'Taxi & Ride Booking',
    desc: "Handles inbound booking calls 24/7, collecting pickup, destination, and passenger details through natural conversation. Checks driver availability via API and confirms the booking verbally. Current implementation uses a mock dispatch API; production requires integration testing against the client's actual dispatch platform.",
    tags: ['Retell AI', 'Pipecat', 'SMS'],
    details: ['Multi-turn booking conversation', 'Live availability checking via API', 'SMS confirmation dispatch', 'Driver notification via webhook', 'Escalation to human dispatcher'],
    href: '/ai-automation/projects/taxi-booking-retell/',
  },
  {
    industry: 'Healthcare & Wellness',
    title: 'Appointment Booking',
    desc: "Patients call to book, reschedule, or cancel without waiting for a receptionist. The agent checks provider availability and confirms the slot in the same conversation. Calendar invites and SMS reminders are triggered automatically. Clinical questions and urgent calls escalate to a human.",
    tags: ['Vapi', 'Calendar', 'HIPAA-aware'],
    details: ['Provider availability lookup', 'Rescheduling and cancellation handling', 'Calendar invite generation', 'Reminder sequence trigger', 'Emergency escalation protocol'],
    href: '/ai-voice-agents/demos/',
  },
  {
    industry: 'Real Estate',
    title: 'Lead Qualification',
    desc: "Qualifies inbound property enquiries against defined criteria before a human advisor is involved. Collects budget, timeline, and requirements, tags the contact, and pushes full call data to the CRM with an assigned-agent notification.",
    tags: ['Retell AI', 'CRM sync', 'Scheduling'],
    details: ['Budget and timeline qualification', 'Property preference collection', 'CRM contact creation', 'Viewing appointment booking', 'Agent assignment notification'],
    href: '/ai-voice-agents/demos/',
  },
  {
    industry: 'Home Services',
    title: 'Quote & Service Booking',
    desc: "Collects job type, location, and scope for plumbing, HVAC, electrical, and cleaning calls, then checks technician availability and confirms the appointment. Pre-job details are passed to the assigned technician before arrival.",
    tags: ['Vapi', 'Scheduling', 'Quotes'],
    details: ['Service type identification', 'Job scope data collection', 'Technician availability check', 'Appointment confirmation', 'Pre-job checklist SMS'],
    href: '/ai-voice-agents/demos/',
  },
  {
    industry: 'E-commerce & Retail',
    title: 'Order Status & Support',
    desc: "Authenticates the caller by order number, retrieves live order status, and handles return initiations. Return labels are dispatched via SMS after the call. Complex disputes and payment issues escalate to a human agent.",
    tags: ['Vapi', 'Order API', 'Returns'],
    details: ['Caller authentication via order number', 'Real-time order status lookup', 'Return initiation and label generation', 'FAQ and product information', 'Human escalation for complex cases'],
    href: '/ai-voice-agents/demos/',
  },
  {
    industry: 'Financial Services',
    title: 'Customer Reactivation',
    desc: "Outbound agent introduces a relevant offer to lapsed customers, handles common objections, and books a callback or live transfer when the caller is interested. CRM status is updated automatically after every call regardless of outcome.",
    tags: ['Retell AI', 'Outbound', 'CRM'],
    details: ['Personalised outbound script', 'Offer presentation and objection handling', 'Interest qualification', 'Callback scheduling for warm leads', 'CRM status update on every call'],
    href: '/ai-voice-agents/demos/',
  },
]

const faqs = [
  {
    q: 'How do I know if my call type is suitable for a voice agent?',
    a: "The clearest indicator is whether your calls follow a predictable structure. If most inbound calls in a given category ask similar questions, collect similar information, or follow a similar resolution path, a voice agent is likely a good fit. If your calls vary significantly in what the caller needs, or regularly require real-time judgement based on context that cannot be retrieved from a database, they are less suited to automation. A scoping call with Innoventix Hub will give you a clear read on suitability before any investment in development is made.",
  },
  {
    q: 'Can a voice agent handle complaints or upset callers?',
    a: "Designed call flows for complaint intake are possible, but voice agents are not well suited to emotionally complex calls where the caller is distressed or where resolution requires empathy, negotiation, or access to information that cannot be retrieved from a structured system. A well-designed voice agent deployed in a complaint context should detect escalation signals early and transfer the caller to a human agent promptly, rather than attempting to resolve the complaint through an automated flow. Innoventix Hub does not recommend deploying a voice agent as the primary handler for complaint-type calls without a robust escalation design in place.",
  },
  {
    q: 'What happens when the agent cannot answer a question?',
    a: "Every production voice agent built by Innoventix Hub includes a defined escalation protocol. When the agent encounters a question it cannot answer from its configured information, a caller who requests a human, or a conversation that moves outside its designed scope, it triggers a warm transfer to a human team member with the call transcript and captured data passed along. The human team member does not have to re-ask information the agent already collected during the call. The escalation trigger conditions are agreed and tested during the build scoping process.",
  },
  {
    q: 'How long does it take to deploy a voice agent for one of these use cases?',
    a: "A focused single-use-case build with one or two integrations can move from scoping to a test environment within a few weeks, depending on how quickly API access and test data can be provided on the client side. More complex builds with multiple integrations, branching conversation logic, or compliance requirements take longer. The initial build is followed by a testing phase on real phone numbers before any production volume is moved to the agent. A realistic timeline that suits your operational requirements is agreed at the start of the engagement.",
  },
]

export default function UseCases() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-16" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image */}
        <div className="absolute right-0 top-0 bottom-0 w-[48%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1626863905121-3b0c0ed7b94c', 900, 700)} alt="AI voice agent call center"
            className="w-full h-full object-cover" style={{ opacity: 0.22, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 15%, transparent 50%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-voice-agents/" className="hover:text-[#3ECF9E] transition-colors">AI Voice Agents</Link>
              <span>/</span><span className="text-gray-300">Use Cases</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Use Cases
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95] max-w-3xl">
              Where AI voice agents<br />
              <span className="gradient-text">fit your business.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
              Real voice agent deployments across transportation, healthcare, real estate, home services, e-commerce, and financial services. Each use case includes full conversation design and integration architecture.
            </p>
            {/* Animated voice wave */}
            <div className="mt-8 max-w-xs">
              <VoiceWave />
              <div className="text-gray-500 text-xs mt-2 tracking-wider">Live conversation flow</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Evaluation intro */}
      <section className="py-16 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>How We Evaluate Use Cases</span>
              <h2 className="font-display font-black text-3xl text-white mb-5">
                Not every call type is right<br />
                <span className="gradient-text">for a voice agent.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-base">
                Choosing the right call type for a voice agent deployment requires an honest assessment of several factors before committing to a build. Call volume matters because a voice agent only makes operational sense when the number of calls being handled is high enough that the automation delivers a measurable benefit. Script complexity matters because agents that handle calls with a single predictable intent are significantly easier to build and maintain than agents dealing with branching conversation paths and variable caller intent. Integration requirements matter because every external system the agent needs to read from or write to adds scope, timeline, and a dependency on a third-party API that needs to be stable and testable before deployment. Escalation frequency matters because a use case where most calls need to be transferred to a human is a pre-screening step, not an automation, and the design needs to reflect that distinction. Innoventix Hub assesses all four factors during the scoping process before any build recommendation is made.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="space-y-6">
            {usecases.map((u, i) => (
              <ScrollReveal key={u.title} delay={i * 60} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-3xl overflow-hidden card-lift grid md:grid-cols-2 gap-0">
                  {/* Industry image */}
                  <div className={`relative h-52 md:h-auto ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                    <img src={industryImages[u.industry] || unsplash('photo-1678977252570-58db7acbbeea', 600, 400)}
                      alt={u.industry} className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(5,11,24,0.8))' }} />
                    <div className="absolute inset-0 flex items-end p-5">
                      <div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full block w-fit mb-2"
                          style={{ background: 'rgba(62,207,158,0.15)', border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                          {u.industry}
                        </span>
                        <VoiceWave />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="font-display font-black text-2xl text-white mb-4">{u.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{u.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {u.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.18)', color: '#a8f0da' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link to={u.href} className="inline-flex items-center gap-2 text-sm font-medium transition-all"
                      style={{ color: '#3ECF9E' }}>
                      View demo &rarr;
                    </Link>
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#3ECF9E' }}>Agent Capabilities</div>
                    <div className="space-y-2">
                      {u.details.map(d => (
                        <div key={d} className="flex items-start gap-3 p-3 rounded-xl"
                          style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-gray-300 text-sm">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Common Questions</span>
            <h2 className="font-display font-black text-4xl text-white">
              Use case <span className="gradient-text">suitability.</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <div className="glass-card rounded-2xl p-7 card-lift">
                  <h3 className="font-display font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Matching a use case to your business */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Evaluation Guide</span>
            <h2 className="font-display font-black text-4xl text-white mb-6">
              Matching a use case<br />
              <span className="gradient-text">to your business.</span>
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-400 leading-relaxed mb-4">
                Selecting the right use case for a voice agent requires an honest assessment of your current call environment before any build begins. Call volume determines whether automation delivers a meaningful operational benefit: a use case that handles five calls per day requires a different business case than one handling five hundred. Conversation predictability determines whether a structured call flow can realistically capture the range of things callers ask: use cases where most callers need the same information or follow the same path are well suited to automation, while use cases where each call is genuinely different are not.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Available integrations determine what the agent can actually do during a call: an appointment booking agent without a connected scheduling API cannot confirm availability in real time, and a lead qualification agent without a CRM connection cannot write the outcome anywhere useful. Human handoff availability determines whether the use case is complete: every production deployment requires a defined escalation path, and that path needs to reach a real person or a clearly communicated alternative.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Innoventix Hub assesses all four factors during the scoping process. The outcomes described on this page are based on how the use cases are designed to work, not guarantees of performance in any specific deployment context.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What each use case requires to work */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Requirements</span>
            <h2 className="font-display font-black text-4xl text-white">
              What each use case<br />
              <span className="gradient-text">requires to work.</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { usecase: 'Taxi and Ride Booking', provide: 'Pickup and destination address handling, passenger count logic, and escalation protocol for failed bookings', integration: 'Dispatch API with booking endpoint (current builds use a mock API; production requires verified dispatch integration)' },
              { usecase: 'Appointment Booking', provide: 'Appointment types, provider names, available hours, and cancellation policy', integration: 'Scheduling system API or calendar integration (Calendly, Cal.com, or custom)' },
              { usecase: 'Lead Qualification', provide: 'Qualification criteria (budget range, timeline, decision-maker indicators), CRM field mapping', integration: 'CRM or pipeline tool with API access for contact creation and lead tagging' },
              { usecase: 'Quote and Service Booking', provide: 'Service categories, geographic coverage, technician capacity rules, and job scope questions', integration: 'Technician scheduling system with availability endpoint' },
              { usecase: 'Order Status and Support', provide: 'Order lookup fields (order number, account detail), return eligibility rules, and FAQ content', integration: 'Order management system API for real-time status retrieval' },
              { usecase: 'Customer Reactivation', provide: 'Segmented outbound list with contact data, offer details, and objection handling guidance', integration: 'CRM for status updates after each call, calendar for callback scheduling' },
            ].map((row, i) => (
              <ScrollReveal key={row.usecase} delay={i * 50}>
                <div className="glass-card rounded-2xl p-6 card-lift grid md:grid-cols-3 gap-4 items-start">
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#3ECF9E' }}>Use Case</div>
                    <div className="font-display font-bold text-white text-sm">{row.usecase}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#3ECF9E' }}>What You Need to Provide</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{row.provide}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#3ECF9E' }}>Key Integration Dependency</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{row.integration}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related service links */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Related Services</span>
            <h2 className="font-display font-black text-3xl text-white">Explore further.</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-5">
            <ScrollReveal direction="left">
              <Link to="/ai-voice-agents/integrations/" className="glass-card rounded-2xl p-6 card-lift block group" style={{ minWidth: 260 }}>
                <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">Integration Ecosystem</div>
                <div className="text-gray-400 text-sm mb-3">See all platforms, telephony providers, CRMs, and automation tools used in voice agent builds.</div>
                <div className="text-xs font-medium" style={{ color: '#3ECF9E' }}>View integrations &rarr;</div>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={60}>
              <Link to="/book/" className="glass-card rounded-2xl p-6 card-lift block group" style={{ minWidth: 260 }}>
                <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">Book a Strategy Call</div>
                <div className="text-gray-400 text-sm mb-3">Discuss your call environment and identify the use case most likely to deliver a measurable result.</div>
                <div className="text-xs font-medium" style={{ color: '#3ECF9E' }}>Book now &rarr;</div>
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
                  Do not see<br />
                  <span className="gradient-text">your industry?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. If your business takes inbound calls or makes outbound calls at scale, there is almost certainly a voice agent use case worth exploring.</p>
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
