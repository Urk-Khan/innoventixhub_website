import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const platforms = [
  { name: 'Retell AI', category: 'Voice Platform', desc: 'Production-grade conversational AI platform for high-volume inbound and outbound calls. Real-time interruption handling, function calling, and built-in telephony.' },
  { name: 'Vapi', category: 'Voice Platform', desc: 'Developer-first voice AI with flexible LLM routing, custom tool definitions, and call analytics. Strong for complex conversation logic and multi-provider setups.' },
  { name: 'Pipecat', category: 'Voice Framework', desc: 'Open-source real-time voice and multimodal AI pipeline framework. Ideal for custom low-latency voice deployments where full control over the pipeline is required.' },
  { name: 'ElevenLabs', category: 'Voice Synthesis', desc: 'Ultra-realistic voice cloning and synthesis for natural-sounding AI agent voices. Custom voice creation from a small sample of audio.' },
  { name: 'Deepgram', category: 'Speech-to-Text', desc: 'Low-latency automatic speech recognition for fast, accurate transcription at scale. Best-in-class performance for noisy call environments.' },
  { name: 'Cartesia', category: 'Voice Synthesis', desc: 'Real-time voice synthesis with extremely low latency, designed for conversational applications where response speed is critical.' },
  { name: 'Telnyx', category: 'Telephony', desc: 'SIP trunking and programmable telephony to connect voice agents to real phone numbers. Global PSTN coverage with per-second billing.' },
  { name: 'Twilio', category: 'Telephony', desc: 'Voice, SMS, and messaging infrastructure with global reach. Used for outbound campaigns, SMS confirmation dispatch, and call recording.' },
  { name: 'GoHighLevel', category: 'CRM & Automation', desc: 'Voice agent call outcomes sync to GHL pipelines, contacts, and automation triggers. Seamless handoff from agent to CRM workflow.' },
  { name: 'n8n', category: 'Automation', desc: 'Webhook-based n8n workflows triggered by voice agent call outcomes. Book appointments, update records, send notifications, and route data.' },
  { name: 'Calendly / Cal.com', category: 'Scheduling', desc: 'Real-time availability lookup and booking confirmation integrated directly into voice agent conversation flow.' },
  { name: 'Custom APIs', category: 'Custom Integration', desc: 'Any system with a REST API can be integrated into voice agent function calls. We scope and build custom integrations as part of every deployment.' },
]

const categoryColor: Record<string, string> = {
  'Voice Platform': 'rgba(62,207,158,0.15)',
  'Voice Framework': 'rgba(62,207,158,0.1)',
  'Voice Synthesis': 'rgba(124,58,237,0.2)',
  'Speech-to-Text': 'rgba(124,58,237,0.15)',
  'Telephony': 'rgba(245,158,11,0.15)',
  'CRM & Automation': 'rgba(62,207,158,0.12)',
  'Automation': 'rgba(62,207,158,0.1)',
  'Scheduling': 'rgba(124,58,237,0.12)',
  'Custom Integration': 'rgba(255,255,255,0.06)',
}
const categoryText: Record<string, string> = {
  'Voice Platform': '#3ECF9E',
  'Voice Framework': '#3ECF9E',
  'Voice Synthesis': '#a78bfa',
  'Speech-to-Text': '#a78bfa',
  'Telephony': '#fbbf24',
  'CRM & Automation': '#3ECF9E',
  'Automation': '#3ECF9E',
  'Scheduling': '#a78bfa',
  'Custom Integration': '#9ca3af',
}

export default function Integrations() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-16" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block pointer-events-none">
          <img src="https://images.unsplash.com/photo-1678977252570-58db7acbbeea?w=900&h=700&fit=crop&auto=format&q=80" alt="AI voice integration stack"
            className="w-full h-full object-cover" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 15%, transparent 50%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-voice-agents/" className="hover:text-[#3ECF9E] transition-colors">AI Voice Agents</Link>
              <span>/</span><span className="text-gray-300">Integrations</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Integration Ecosystem
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95] max-w-3xl">
              Connect voice agents with<br />
              <span className="gradient-text">your business systems.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
              We are platform-agnostic. We choose the right voice AI, synthesis, telephony, and integration stack for your specific use case, latency requirements, and budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          {/* Visual stack diagram */}
          <ScrollReveal className="mb-10">
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
              <div className="text-xs font-medium tracking-widest uppercase text-center mb-4" style={{ color: '#3ECF9E' }}>Technology stack</div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { name: 'Retell AI', color: '#3ECF9E' },
                  { name: 'Vapi', color: '#fbbf24' },
                  { name: 'Pipecat', color: '#a78bfa' },
                  { name: '→', color: 'rgba(255,255,255,0.2)' },
                  { name: 'ElevenLabs', color: '#a78bfa' },
                  { name: 'Cartesia', color: '#a78bfa' },
                  { name: '→', color: 'rgba(255,255,255,0.2)' },
                  { name: 'Deepgram', color: '#a78bfa' },
                  { name: '→', color: 'rgba(255,255,255,0.2)' },
                  { name: 'Telnyx', color: '#fbbf24' },
                  { name: 'Twilio', color: '#fbbf24' },
                  { name: '→', color: 'rgba(255,255,255,0.2)' },
                  { name: 'GHL', color: '#3ECF9E' },
                  { name: 'n8n', color: '#3ECF9E' },
                ].map(({ name, color }, i) => (
                  name === '→'
                    ? <svg key={i} className="w-4 h-4 shrink-0" fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    : <div key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono"
                        style={{ background: `${color}15`, border: `1px solid ${color}40`, color, animation: `pulseGlow ${2 + i * 0.15}s ease-in-out infinite` }}>
                        {name}
                      </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 50} direction="scale">
                <div className="glass-card rounded-2xl p-6 card-lift h-full">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-display font-black text-lg text-white">{p.name}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full shrink-0"
                      style={{ background: categoryColor[p.category] || 'rgba(62,207,158,0.1)', color: categoryText[p.category] || '#3ECF9E' }}>
                      {p.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>How We Choose</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Platform selection<br />
                <span className="gradient-text">is part of the design.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Not every voice agent needs the same stack. A high-volume inbound call centre has different requirements than a low-latency real-time booking assistant or a precision outbound qualification campaign.</p>
                <p>We assess your call volume, required latency, conversation complexity, integration needs, and budget before recommending a stack. We do not default to one platform for every project.</p>
                <p>When a use case requires a custom pipeline, we build it on Pipecat. When it needs a managed platform with built-in analytics and reliability, we use Retell AI or Vapi. When it needs ultra-realistic voice, we add ElevenLabs. The tools serve the brief.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="relative h-40 rounded-2xl overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=700&h=300&fit=crop&auto=format&q=80" alt="Platform selection process" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,11,24,0.85))' }} />
                <div className="absolute bottom-3 left-3 text-white font-display font-bold text-sm">Platform-agnostic selection</div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Call volume', q: 'High volume inbound', r: 'Retell AI or Vapi with managed telephony' },
                  { label: 'Latency priority', q: 'Sub-300ms response', r: 'Pipecat with Cartesia voice synthesis' },
                  { label: 'Custom logic', q: 'Complex branching', r: 'Custom pipeline with function calling' },
                  { label: 'Budget', q: 'Minimal per-minute cost', r: 'Self-hosted Pipecat + Deepgram + open TTS' },
                ].map(row => (
                  <div key={row.label} className="glass-card rounded-xl p-5 card-lift">
                    <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#3ECF9E' }}>{row.label}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-gray-500 text-xs mb-1">If:</div>
                        <div className="text-gray-300 text-sm">{row.q}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">We choose:</div>
                        <div className="text-gray-300 text-sm">{row.r}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Integration architecture overview */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Architecture</span>
            <h2 className="font-display font-black text-4xl text-white">
              Integration architecture<br />
              <span className="gradient-text">overview.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                layer: 'Telephony Layer',
                what: 'Handles the connection between a real phone number and the voice agent pipeline. Provides PSTN access, call routing, SIP trunk configuration, and per-second billing.',
                examples: 'Telnyx, Twilio',
              },
              {
                layer: 'Voice AI Platform Layer',
                what: 'Manages the conversational logic, speech recognition, language model routing, voice synthesis, and function calling that drives the agent during a live call.',
                examples: 'Retell AI, Vapi, Pipecat',
              },
              {
                layer: 'Business System Layer',
                what: 'The downstream systems the agent reads from and writes to during and after the call. These hold the data the agent needs to complete its task.',
                examples: 'CRM (GoHighLevel), calendar (Calendly, Cal.com), order management system, dispatch API, database',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.layer} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-8 card-lift h-full" style={{ borderTop: '2px solid rgba(62,207,158,0.3)' }}>
                  <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>{card.layer}</span>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.what}</p>
                  <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: '#3ECF9E' }}>Examples</div>
                  <div className="text-gray-300 text-sm">{card.examples}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What integration testing involves */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Testing Process</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What integration testing<br />
                <span className="gradient-text">involves.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">Integration testing confirms that each external system the agent depends on behaves correctly in a live call context before any production volume is routed to the agent.</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3 mt-4">
                {[
                  'Define integration endpoints and expected request and response formats',
                  'Obtain API credentials and test keys for each connected system',
                  'Build and test all integrations in a staging environment before connecting to a live phone number',
                  'Simulate edge cases including API timeout, missing or malformed data, and system unavailability',
                  'Document error behavior and confirm that the agent handles failures gracefully without breaking the call',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-4 card-lift">
                    <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-mono text-xs font-bold" style={{ background: 'rgba(62,207,158,0.12)', color: '#3ECF9E' }}>{i + 1}</div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What is not yet verified */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="rounded-2xl p-8 max-w-3xl" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)' }}>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="#fbbf24" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
                <div>
                  <div className="font-display font-bold text-white mb-3">What is not yet verified</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    Taxi dispatch integrations with iCabbi, TBMS, and other specific dispatch platforms are not verified. Current taxi booking builds use a mock dispatch API for development and testing purposes. Compatibility with any specific dispatch software must be independently verified through integration testing before a production deployment is attempted.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Innoventix Hub does not claim verified compatibility with any dispatch platform until integration testing has been completed and confirmed against the client's actual system.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Go deeper.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { title: 'Voice Agent CRM Integration: How It Works and What to Prepare', href: '/resources/voice-agent-crm-integration/' },
              { title: 'Taxi Voice Agent Dispatch Integration: What to Verify Before Production', href: '/resources/taxi-voice-agent-dispatch-integration/' },
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

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Need a specific<br />
                  <span className="gradient-text">integration?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free call. We will assess your stack and tell you exactly what is possible and what it would take to build.</p>
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
