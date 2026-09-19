import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const usecases = [
  {
    title: 'Inbound Call Handling',
    desc: "Answers every inbound call, qualifies the caller, answers common questions, and routes to a human with full context. Works best with predictable call types where intent follows a consistent pattern.",
  },
  {
    title: 'Appointment Booking',
    desc: "Checks availability in real time, confirms bookings, handles rescheduling and cancellations, and sends SMS or calendar confirmations without manual follow-up. Requires a scheduling system with an accessible API.",
  },
  {
    title: 'Lead Qualification',
    desc: "Asks budget, authority, need, and timeline questions in natural conversation, records outcomes to your CRM, and transfers warm leads to a sales rep. Requires clearly defined qualification criteria before build.",
  },
  {
    title: 'Taxi Dispatch',
    desc: "Collects pickup details and passes bookings to a dispatch queue via API. Current builds use a mock dispatch API. Production deployment requires integration testing with your specific dispatch platform.",
  },
  {
    title: 'Customer Reactivation',
    desc: "Outbound calls to a segmented list, personalised introduction, and interest gauge before involving an advisor. Best for well-segmented lists with a simple, easily explained offer.",
  },
  {
    title: 'After-Hours Coverage',
    desc: "Answers calls outside business hours, collects information, resolves what can be handled without a human, and escalates urgent requests per your defined protocol. Eliminates the overnight response gap.",
  },
]

const platforms = [
  {
    name: 'Retell AI',
    desc: 'Managed conversational AI with built-in telephony, interruption handling, and call analytics. Used when reliability and a fast path to production are the priority.',
  },
  {
    name: 'Vapi',
    desc: 'Developer-first platform with flexible LLM routing and custom tool definitions. Used for complex conversation logic or multi-provider setups requiring precise control.',
  },
  {
    name: 'Pipecat',
    desc: 'Open-source voice AI pipeline giving full control over every stack component. Used when data sovereignty, self-hosting, or a fixed infrastructure cost model is required.',
  },
  {
    name: 'ElevenLabs',
    desc: 'Ultra-realistic voice cloning and synthesis for natural-sounding agent personas. Used when voice quality and brand-consistent voice output are deployment priorities.',
  },
  {
    name: 'Deepgram',
    desc: 'Low-latency speech recognition accurate in real call conditions including background noise and accented speech. Default STT provider in most custom pipeline builds.',
  },
  {
    name: 'Telnyx',
    desc: 'SIP trunking and programmable telephony for connecting agents to real phone numbers with global PSTN coverage and per-second billing.',
  },
]

const handlingPoints = [
  {
    heading: 'What voice agents do well',
    body: 'Voice agents perform well in situations where the call type is predictable and the conversation can follow a defined structure. Taking a booking, answering common questions about a service, collecting lead information against fixed criteria, and confirming appointment details are all tasks that map naturally to a structured call flow. The consistent availability is one of the clearest operational benefits: a well-configured voice agent does not require shift coverage, does not have availability gaps outside business hours, and can handle concurrent calls without additional staffing cost. For businesses with high inbound call volume and a predictable distribution of caller intent, a well-designed voice agent can handle a meaningful share of those calls without human involvement in each one.',
  },
  {
    heading: 'What voice agents do not do well',
    body: "There are call types that voice agents are not well suited to, and being clear about this before a build begins is part of responsible deployment planning. Callers in distress, calls involving complaint escalation, conversations where caller intent is genuinely unpredictable, and situations requiring multi-party negotiation or real-time judgement are cases where a voice agent is likely to underperform or make the experience worse for the caller. An agent that does not detect an emotionally charged caller and continues through a booking script is not helpful and can damage trust. Innoventix Hub does not recommend deploying a voice agent to call types where emotional complexity or highly unstructured intent are common, and that assessment is part of every scoping process.",
  },
  {
    heading: 'When to use human handoff',
    body: "Human handoff is a required component of any responsible voice agent deployment, not an edge case or a fallback of last resort. Every production build includes defined escalation triggers: a phrase the caller uses, a question the agent cannot answer from its configured information, a call type outside the agent's designed scope, or a caller who explicitly requests to speak with a person. When escalation is triggered, the call is transferred to a human team member along with a transcript or structured summary of the conversation, so the human does not have to restart from the beginning. Designing the handoff behaviour well matters as much as designing the agent conversation itself, and it is tested during the build process before any production volume is moved.",
  },
  {
    heading: 'What a realistic deployment timeline looks like',
    body: "A realistic deployment timeline for a production voice agent build depends on conversation complexity, the number of integrations required, and how quickly API access and test data can be provided on the client side. A focused single-use-case agent with one or two integrations can typically reach a test environment within a few weeks after scoping is complete. More complex builds with multiple integrations, branching conversation paths, or compliance requirements take longer. The initial build is followed by a live call testing phase on real phone numbers and a review of call recordings before any production volume moves to the agent. Innoventix Hub treats the initial build as the beginning of the optimisation process, not the end of it.",
  },
]

export default function AiVoiceAgents() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                AI Voice Agents
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
                AI voice agents<br />
                <span className="gradient-text">for business calls.</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
                AI voice agents for defined call flows: inbound booking, lead qualification, appointment scheduling, and order support. Built on Retell AI, Vapi, and Pipecat with production telephony from Telnyx or Twilio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/ai-voice-agents/demos/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  Listen to Demos
                </Link>
              </div>
            </ScrollReveal>

            <div className="hidden lg:flex items-center justify-center">
              <svg viewBox="0 0 440 360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '440px', height: 'auto' }}>
                <defs>
                  <style>{`
                    @keyframes va-wave{0%,100%{transform:scaleY(0.32)}50%{transform:scaleY(1)}}
                    @keyframes va-pulse{0%{transform:scale(1);opacity:0.45}100%{transform:scale(2.4);opacity:0}}
                    @keyframes va-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
                    @media(prefers-reduced-motion:no-preference){
                      .va-bar1{animation:va-wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bar2{animation:va-wave 1.4s ease-in-out 0.28s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bar3{animation:va-wave 1.4s ease-in-out 0.07s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bar4{animation:va-wave 1.4s ease-in-out 0.42s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bar5{animation:va-wave 1.4s ease-in-out 0.21s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-pulse1{animation:va-pulse 2.8s ease-out infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-pulse2{animation:va-pulse 2.8s ease-out 0.93s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-pulse3{animation:va-pulse 2.8s ease-out 1.86s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bub-l{animation:va-float 3.4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .va-bub-r{animation:va-float 3.4s ease-in-out 1.7s infinite;transform-box:fill-box;transform-origin:50% 50%}
                    }
                  `}</style>
                </defs>
                <circle className="va-pulse1" cx="220" cy="188" r="72" fill="none" stroke="#3ECF9E" strokeWidth="1.5" opacity="0.45" />
                <circle className="va-pulse2" cx="220" cy="188" r="72" fill="none" stroke="#3ECF9E" strokeWidth="1" opacity="0.35" />
                <circle className="va-pulse3" cx="220" cy="188" r="72" fill="none" stroke="#3ECF9E" strokeWidth="0.5" opacity="0.22" />
                <rect x="150" y="68" width="140" height="240" rx="22" fill="#0D1F3C" stroke="#1D3A6E" strokeWidth="1.5" />
                <rect x="163" y="104" width="114" height="162" rx="6" fill="#050B18" />
                <rect x="207" y="77" width="26" height="5" rx="2.5" fill="#1D3A6E" />
                <rect x="210" y="297" width="20" height="4" rx="2" fill="#1D3A6E" />
                <path d="M203 53 Q220 38 237 53" fill="none" stroke="#3ECF9E" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M194 44 Q220 23 246 44" fill="none" stroke="#3ECF9E" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
                <path d="M185 36 Q220 9 255 36" fill="none" stroke="#3ECF9E" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
                <circle cx="220" cy="57" r="3" fill="#3ECF9E" />
                <rect className="va-bar1" x="180" y="159" width="9" height="50" rx="4.5" fill="#3ECF9E" opacity="0.85" />
                <rect className="va-bar2" x="196" y="149" width="9" height="70" rx="4.5" fill="#3ECF9E" opacity="0.9" />
                <rect className="va-bar3" x="212" y="154" width="9" height="60" rx="4.5" fill="#3ECF9E" opacity="0.95" />
                <rect className="va-bar4" x="228" y="146" width="9" height="76" rx="4.5" fill="#3ECF9E" opacity="0.9" />
                <rect className="va-bar5" x="244" y="161" width="9" height="46" rx="4.5" fill="#3ECF9E" opacity="0.8" />
                <g className="va-bub-l">
                  <rect x="16" y="100" width="112" height="62" rx="10" fill="#0D1F3C" stroke="rgba(62,207,158,0.28)" strokeWidth="1" />
                  <path d="M128 124 L146 130 L128 138" fill="#0D1F3C" stroke="rgba(62,207,158,0.28)" strokeWidth="1" strokeLinejoin="round" />
                  <rect x="28" y="115" width="60" height="3" rx="1.5" fill="#3ECF9E" opacity="0.55" />
                  <rect x="28" y="125" width="82" height="3" rx="1.5" fill="rgba(255,255,255,0.16)" />
                  <rect x="28" y="135" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                </g>
                <g className="va-bub-r">
                  <rect x="312" y="100" width="112" height="62" rx="10" fill="#0D1F3C" stroke="rgba(62,207,158,0.28)" strokeWidth="1" />
                  <path d="M312 124 L294 130 L312 138" fill="#0D1F3C" stroke="rgba(62,207,158,0.28)" strokeWidth="1" strokeLinejoin="round" />
                  <rect x="324" y="115" width="70" height="3" rx="1.5" fill="#3ECF9E" opacity="0.55" />
                  <rect x="324" y="125" width="86" height="3" rx="1.5" fill="rgba(255,255,255,0.16)" />
                  <rect x="324" y="135" width="54" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Sound wave image band */}
      <section className="py-4 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden relative h-56 md:h-72">
              <img src={unsplash('photo-1724185773486-0b39642e607e', 1200, 450)}
                alt="Sound wave visualization" className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, #050B18)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-black text-5xl text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm tracking-widest uppercase">Always answering</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six use cases. <span className="gradient-text">All production-ready.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usecases.map((u, i) => (
              <ScrollReveal key={u.title} delay={i * 60} direction="scale">
                <div className="glass-card rounded-2xl p-6 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/ai-voice-agents/use-cases/" className="text-sm font-medium px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
              style={{ border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
              View all use cases &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Platforms</span>
                <h2 className="font-display font-black text-4xl text-white">Built on the <span className="gradient-text">best tools.</span></h2>
              </div>
              <Link to="/ai-voice-agents/integrations/" className="text-sm font-medium px-5 py-2.5 rounded-full transition-all"
                style={{ border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                See all integrations &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 60}>
                <div className="glass-card rounded-2xl p-6 card-lift flex gap-4 items-start" style={{ borderLeft: '2px solid rgba(62,207,158,0.25)' }}>
                  <div>
                    <div className="font-display font-bold text-white mb-1">{p.name}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What voice agents handle well and what they do not */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Honest Assessment</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What voice agents handle well<br />
              <span className="gradient-text">and what they do not.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {handlingPoints.map((pt, i) => (
              <ScrollReveal key={pt.heading} delay={i * 60} direction="scale">
                <div className="glass-card rounded-2xl p-8 card-lift h-full">
                  <h3 className="font-display font-bold text-white mb-3">{pt.heading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pt.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Is a voice agent right for your call type? */}
      <section className="py-24 relative" style={{ background: '#F7F9FC' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Decision Checklist</span>
            <h2 className="font-display font-black text-4xl text-gray-900 mb-3">
              Is a voice agent right<br />
              <span className="gradient-text">for your call type?</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="rounded-2xl p-8 h-full" style={{ background: 'rgba(62,207,158,0.06)', border: '1px solid rgba(62,207,158,0.2)' }}>
                <div className="text-sm font-bold mb-5" style={{ color: '#3ECF9E' }}>Voice agents work well when...</div>
                <div className="space-y-3">
                  {[
                    'Call intent is predictable and follows a consistent pattern',
                    'Conversations can be structured around defined questions and answers',
                    'Call volume is high enough that automation delivers a measurable benefit',
                    '24/7 availability is needed and staffing all hours is not viable',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="rounded-2xl p-8 h-full" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <div className="text-sm font-bold mb-5" style={{ color: '#ef4444' }}>Voice agents are not the right fit when...</div>
                <div className="space-y-3">
                  {[
                    'Calls involve complex complaint handling requiring empathy and judgement',
                    'Callers are frequently in an emotional or distressed state',
                    'Caller intent is highly unstructured and varies widely between calls',
                    'Conversations require real-time judgement that cannot be scripted or retrieved from a database',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#ef4444" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What a pilot deployment looks like */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Pilot Process</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What a pilot deployment<br />
              <span className="gradient-text">looks like.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', heading: 'Define the call scope and conversation design', body: 'Agree on the call type the agent will handle, the questions it asks, the information it collects, and the conditions that trigger a human escalation.' },
              { n: '02', heading: 'Build the agent and connect to a test phone number', body: 'The agent is built on the selected platform, integrated with the required APIs, and connected to a dedicated test phone number not receiving live volume.' },
              { n: '03', heading: 'Run internal test calls with representative scenarios', body: 'The Innoventix Hub team and the client team run calls covering expected scenarios, edge cases, and escalation triggers to identify gaps before any live calls are handled.' },
              { n: '04', heading: 'Review recordings and refine before any live volume', body: 'Call recordings are reviewed, conversation design is refined based on what the tests reveal, and the agent moves to production only after the relevant scenarios pass.' },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift relative overflow-hidden h-full">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none" style={{ color: 'rgba(62,207,158,0.07)' }}>{step.n}</div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{step.n}</span>
                    <h3 className="font-display font-bold text-white mb-3 text-sm leading-snug">{step.heading}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Related resources.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'AI Voice Agent Human Handoff: When and How to Transfer the Call', href: '/resources/ai-voice-agent-human-handoff/' },
              { title: 'Retell AI vs Vapi: Which Platform Is Right for Your Build?', href: '/resources/retell-vs-vapi/' },
              { title: 'AI Receptionist Pilot Checklist: What to Prepare Before You Build', href: '/resources/ai-receptionist-pilot-checklist/' },
            ].map((resource, i) => (
              <ScrollReveal key={resource.href} delay={i * 60} direction="scale">
                <Link to={resource.href} className="glass-card rounded-2xl p-6 card-lift block group">
                  <div className="text-white font-display font-semibold text-sm mb-3 group-hover:text-[#3ECF9E] transition-colors leading-snug">{resource.title}</div>
                  <div className="text-xs font-medium" style={{ color: '#3ECF9E' }}>Read article &rarr;</div>
                </Link>
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
                  Ready to deploy<br />
                  <span className="gradient-text">your first voice agent?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free call. We identify your best voice agent use case and outline a build timeline.</p>
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
