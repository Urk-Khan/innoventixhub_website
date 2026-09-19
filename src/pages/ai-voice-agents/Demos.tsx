import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const demos = [
  {
    title: 'Taxi Booking Agent (Retell AI)',
    desc: 'Inbound call handling for a taxi company. The agent collects pickup location, destination, and passenger count, checks driver availability via live API, and confirms the booking with an SMS.',
    platform: 'Retell AI',
    duration: '~2 min call',
    href: '/ai-automation/projects/taxi-booking-retell/',
    videoId: 'dQw4w9WgXcQ',
    features: ['Multi-turn booking conversation', 'Live availability check', 'SMS confirmation', 'Human escalation on failure'],
  },
  {
    title: 'Taxi Booking Agent (Pipecat)',
    desc: 'The same taxi booking use case rebuilt on Pipecat for ultra-low-latency response. Compare the two implementations and conversation feel side-by-side.',
    platform: 'Pipecat',
    duration: '~2 min call',
    href: '/ai-automation/projects/taxi-booking-pipecat/',
    videoId: 'dQw4w9WgXcQ',
    features: ['Sub-200ms voice response', 'Open-source pipeline', 'Custom STT and TTS', 'Webhook-based dispatch'],
  },
  {
    title: 'Lead Qualification Agent',
    desc: 'Inbound lead qualification agent for a B2B service company. Asks BANT-style questions, collects contact details, and books a discovery call with the sales team.',
    platform: 'Vapi',
    duration: '~3 min call',
    href: '/ai-voice-agents/use-cases/',
    videoId: 'dQw4w9WgXcQ',
    features: ['Budget and timeline qualification', 'Calendar booking integration', 'CRM contact creation', 'Warm handoff to sales'],
  },
  {
    title: 'Appointment Booking Agent',
    desc: 'Appointment scheduling agent for a wellness clinic. Handles new bookings, rescheduling, and cancellations. Sends calendar invites and reminder SMS automatically.',
    platform: 'Retell AI',
    duration: '~2 min call',
    href: '/ai-voice-agents/use-cases/',
    videoId: 'dQw4w9WgXcQ',
    features: ['Provider availability lookup', 'Rescheduling handling', 'Calendar invite generation', 'SMS reminder trigger'],
  },
]

const platformColor: Record<string, string> = {
  'Retell AI': 'rgba(62,207,158,0.15)',
  'Pipecat': 'rgba(124,58,237,0.2)',
  'Vapi': 'rgba(245,158,11,0.15)',
}
const platformText: Record<string, string> = {
  'Retell AI': '#3ECF9E',
  'Pipecat': '#a78bfa',
  'Vapi': '#fbbf24',
}

function VideoFacade({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group bg-[#0D1F3C]"
      onClick={() => {
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
        iframe.allow = 'autoplay; encrypted-media'
        iframe.allowFullscreen = true
        iframe.className = 'w-full h-full absolute inset-0'
        const parent = iframe.parentElement
        if (parent) { parent.innerHTML = ''; parent.appendChild(iframe) }
      }}>
      <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ background: 'rgba(62,207,158,0.9)' }}>
          <svg className="w-7 h-7 text-[#050B18] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: 'rgba(5,11,24,0.8)' }}>
        Click to play
      </div>
    </div>
  )
}

export default function Demos() {
  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24 pb-16" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-voice-agents/" className="hover:text-[#3ECF9E] transition-colors">AI Voice Agents</Link>
              <span>/</span><span className="text-gray-300">Demos</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Live Demos
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95] max-w-3xl">
              Hear the agents<br />
              <span className="gradient-text">in action.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
              Real call recordings from deployed voice agents built by the Innoventix Hub team. Each demo includes a breakdown of the conversation design and integration architecture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="space-y-10">
            {demos.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 60} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`glass-card rounded-3xl overflow-hidden card-lift grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: platformColor[d.platform], color: platformText[d.platform] }}>
                        {d.platform}
                      </span>
                      <span className="text-xs text-gray-500">{d.duration}</span>
                    </div>
                    <h2 className="font-display font-black text-2xl text-white mb-4">{d.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{d.desc}</p>
                    <div className="space-y-2 mb-6">
                      {d.features.map(f => (
                        <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link to={d.href} className="self-start inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all"
                      style={{ border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                      View project details &rarr;
                    </Link>
                  </div>
                  <div className={`p-6 flex items-center ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <VideoFacade videoId={d.videoId} title={d.title} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What these demos show */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>What You Are Listening To</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What these demos<br />
                <span className="gradient-text">show.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>The demos on this page illustrate conversation design and call flow. They show how the agent greets the caller, how it collects information across multiple turns, how it handles interruptions, and how it triggers an escalation when the conversation moves outside its scope.</p>
                <p>They are not production accuracy benchmarks. Latency, transcription accuracy, and voice quality in a production deployment depend on the specific configuration used: the LLM selected, the speech recognition provider, the voice synthesis model, the telephony setup, and the network conditions during each call.</p>
                <p>What a demo call demonstrates well is conversation architecture. What it cannot predict is performance under production conditions for a different configuration.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-8 card-lift">
                <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#3ECF9E' }}>What affects production performance</div>
                <div className="space-y-3">
                  {[
                    { factor: 'LLM selection', detail: 'Response quality, reasoning capability, and cost per token vary across providers and models' },
                    { factor: 'Telephony setup', detail: 'Network conditions and SIP trunk configuration affect audio quality and latency' },
                    { factor: 'Speech recognition', detail: 'Transcription accuracy varies by provider and is affected by accents and background noise' },
                    { factor: 'Conversation design', detail: 'How well the agent handles the real distribution of caller intent in production' },
                  ].map(item => (
                    <div key={item.factor} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="text-white text-sm font-semibold mb-1">{item.factor}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How to evaluate a voice agent demo */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Evaluation Framework</span>
            <h2 className="font-display font-black text-4xl text-white">
              How to evaluate<br />
              <span className="gradient-text">a voice agent demo.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', heading: 'Does the agent handle interruptions naturally?', body: "A well-designed agent does not stop mid-sentence and lose its place when the caller speaks. Listen for how the agent recovers when interrupted and whether it continues the conversation logically." },
              { n: '02', heading: 'Does the handoff trigger work correctly?', body: 'Listen for the moment the agent decides to transfer. The trigger should be clean and contextually correct, and the handoff should include the information already collected during the call.' },
              { n: '03', heading: 'Is the conversation pacing comfortable?', body: 'Response latency and turn-taking pace affect how natural the call feels. A well-configured agent does not feel like it is making the caller wait, and does not speak over them during natural pauses.' },
              { n: '04', heading: "Does the agent stay within its defined scope?", body: "An agent that attempts to answer questions outside its configured knowledge is more likely to produce incorrect or unhelpful responses. Listen for whether it recognises the edge of its scope and handles it cleanly." },
            ].map((point, i) => (
              <ScrollReveal key={point.n} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift relative overflow-hidden h-full">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none" style={{ color: 'rgba(62,207,158,0.07)' }}>{point.n}</div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{point.n}</span>
                    <h3 className="font-display font-bold text-white mb-3 text-sm leading-snug">{point.heading}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book a demo call */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Book a Demo</span>
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Discuss a custom<br />
                  <span className="gradient-text">voice agent build.</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a call to walk through your specific call type, discuss conversation design, and understand what a production deployment for your use case would involve.</p>
                <Link to="/book/" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book a Demo Call
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
                  Want a demo for<br />
                  <span className="gradient-text">your use case?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We will design a custom demo that shows exactly how a voice agent would handle your real calls.</p>
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
