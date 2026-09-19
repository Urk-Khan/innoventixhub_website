import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const steps = [
  { n: '01', t: 'Customer Calls In', d: 'The caller dials the dispatch line. The voice agent answers instantly, introducing itself and asking for the pickup location.' },
  { n: '02', t: 'Journey Details Collected', d: 'The agent collects pickup address, destination, number of passengers, and preferred pickup time through natural conversation.' },
  { n: '03', t: 'Availability Check', d: 'A real-time API call checks driver availability in the caller\'s area for the requested time. The agent confirms or offers the nearest available slot.' },
  { n: '04', t: 'Booking Confirmed', d: 'The booking is created in the dispatch system. The agent confirms all details verbally and dispatches an SMS with booking reference and estimated arrival.' },
  { n: '05', t: 'Driver Notification', d: 'The assigned driver receives a job notification via the dispatch platform with full journey details, pickup coordinates, and passenger count.' },
  { n: '06', t: 'Human Escalation', d: 'Edge cases, complaints, or requests outside the agent\'s scope trigger an immediate warm transfer to a human dispatcher with full call context.' },
]

export default function TaxiBooking() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1549317661-bd32c8ce0db2', 800, 700)} alt="Taxi at night"
            className="w-full h-full object-cover" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 30%, transparent 70%, #050B18)' }} />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-voice-agents/" className="hover:text-[#3ECF9E] transition-colors">AI Voice Agents</Link>
              <span>/</span><span className="text-gray-300">Taxi Booking</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Voice Agent Case Study
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Taxi dispatch<br />
              <span className="gradient-text">automated by voice AI.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
              A fully functional inbound booking agent for taxi and private hire operators. Handles the complete booking flow from pickup collection to driver notification, 24 hours a day without a human dispatcher.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ai-automation/projects/taxi-booking-retell/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                See Retell AI Build
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/ai-automation/projects/taxi-booking-pipecat/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                See Pipecat Build
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              How the call <span className="gradient-text">flows.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">The complete booking journey from the moment a customer calls to the driver receiving the job notification.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 70} direction="scale">
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

      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Two Implementations</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Retell AI vs<br />
                <span className="gradient-text">Pipecat, compared.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">We built the same taxi booking use case on both Retell AI and Pipecat. The two implementations demonstrate different tradeoffs: managed reliability vs. open-source control and lower latency.</p>
              <p className="text-gray-400 leading-relaxed">Both are production-ready. Your choice depends on call volume, latency requirements, data sovereignty needs, and long-term cost profile.</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-4">
                {[
                  { cat: 'Retell AI build', items: ['Managed infrastructure', 'Built-in analytics dashboard', 'Per-minute pricing', 'Faster deployment', 'Higher reliability SLA'] },
                  { cat: 'Pipecat build', items: ['Open-source, self-hosted', 'Sub-200ms latency', 'Fixed infrastructure cost', 'Full pipeline control', 'Custom STT and TTS providers'] },
                ].map(b => (
                  <div key={b.cat} className="glass-card rounded-2xl p-6 card-lift">
                    <div className="font-display font-bold text-white mb-3">{b.cat}</div>
                    <div className="space-y-1.5">
                      {b.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3ECF9E' }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How the taxi booking agent conversation works */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Conversation Design</span>
            <h2 className="font-display font-black text-4xl text-white">
              How the taxi booking agent<br />
              <span className="gradient-text">conversation works.</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-4">
            {[
              { n: 1, step: 'Caller dials in', detail: 'The agent answers the call immediately, introduces itself as the booking assistant, and greets the caller.' },
              { n: 2, step: 'Agent asks for pickup location', detail: 'The agent asks the caller to give their pickup address. If the address is unclear or incomplete, the agent asks for clarification before moving forward.' },
              { n: 3, step: 'Agent collects destination and passenger count', detail: 'The agent asks where the caller is going and how many passengers will be travelling. Both fields are confirmed verbally before the agent proceeds.' },
              { n: 4, step: 'Agent confirms pickup time', detail: "The agent asks whether the caller wants to travel now or at a scheduled time. For scheduled bookings, the agent collects and repeats back the requested time for the caller's confirmation." },
              { n: 5, step: 'Agent passes booking details to dispatch API', detail: 'The confirmed booking details are sent to the connected dispatch API. In current builds this is a mock API endpoint. A production deployment requires a verified connection to the live dispatch system.' },
              { n: 6, step: 'Agent confirms booking reference to caller', detail: 'Once the booking is created, the agent reads back the booking reference number and any estimated arrival information returned by the dispatch system. The caller is offered an SMS confirmation before the call ends.' },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 50}>
                <div className="flex items-start gap-5 glass-card rounded-2xl p-6 card-lift">
                  <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-mono text-xs font-bold" style={{ background: 'rgba(62,207,158,0.12)', color: '#3ECF9E', border: '1px solid rgba(62,207,158,0.25)' }}>{item.n}</div>
                  <div>
                    <div className="font-display font-bold text-white mb-1 text-sm">{item.step}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical dependencies for a production deployment */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Production Requirements</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Technical dependencies for<br />
                <span className="gradient-text">a production deployment.</span>
              </h2>
              <div className="rounded-2xl p-6" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)' }}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#fbbf24" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
                  <p className="text-gray-300 text-sm leading-relaxed">Current builds use a mock dispatch API. Integrations with iCabbi, TBMS, or other dispatch platforms are not verified. Compatibility must be confirmed through integration testing before the agent handles live bookings.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3 mt-6 lg:mt-0">
                {[
                  'Real dispatch API with a working booking creation endpoint',
                  'Authentication credentials for the dispatch system (API key or OAuth)',
                  'Phone number provisioned via Telnyx or an equivalent SIP trunk provider',
                  'Defined escalation behavior for failed booking attempts (API error, no availability, timeout)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-4 card-lift">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: '#3ECF9E' }}>Related Projects</span>
            <h2 className="font-display font-black text-3xl text-white">See both builds.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            <ScrollReveal direction="left">
              <Link to="/ai-automation/projects/taxi-booking-retell/" className="glass-card rounded-2xl p-6 card-lift block group">
                <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">Taxi Booking Agent (Retell AI)</div>
                <div className="text-gray-400 text-sm mb-3">Managed platform build with built-in analytics, reliability SLA, and faster deployment path.</div>
                <div className="text-xs font-medium" style={{ color: '#3ECF9E' }}>View project &rarr;</div>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={60}>
              <Link to="/ai-automation/projects/taxi-booking-pipecat/" className="glass-card rounded-2xl p-6 card-lift block group">
                <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">Taxi Booking Agent (Pipecat)</div>
                <div className="text-gray-400 text-sm mb-3">Open-source pipeline build with sub-200ms latency, full pipeline control, and fixed infrastructure cost.</div>
                <div className="text-xs font-medium" style={{ color: '#3ECF9E' }}>View project &rarr;</div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Run a taxi or<br />
                  <span className="gradient-text">transport operation?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We will scope a voice booking agent for your specific dispatch workflow, fleet size, and coverage area.</p>
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
