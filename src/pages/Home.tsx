import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import ScrollReveal from '../components/ScrollReveal'
import ScrollStory from '../components/ScrollStory'
import FloatingOrbs from '../components/FloatingOrbs'
import SystemCore from '../components/SystemCore'
import FluidCanvas from '../components/FluidCanvas'
import ServiceShelf from '../components/ServiceShelf'

const IMGS = {
  hero:       'photo-1660165458059-57cfb6cc87e5',
  automation: 'photo-1551288049-bebda4e38f71',
  voice:      'photo-1724185773486-0b39642e607e',
  web:        'photo-1498050108023-c5249f4df085',
}

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const TECH = ['Retell AI','n8n','GoHighLevel','Pipecat','Deepgram','ElevenLabs','Vapi','Supabase','React','Next.js','Cartesia','Telnyx','Python','Bland AI','WordPress']

const stats = [
  { value: '4', label: 'Integrated disciplines' },
  { value: '5', label: 'Dedicated specialists' },
  { value: '23+', label: 'Video projects delivered' },
  { value: '9+', label: 'Automation builds' },
]

const team = [
  { initials: 'UR', name: 'Ubaid ur Rehman', role: 'Founder & CEO', focus: 'Strategy, automation vision' },
  { initials: 'AQ', name: 'Atiq', role: 'Automation Specialist', focus: 'n8n, Python, integrations' },
  { initials: 'HD', name: 'Haider', role: 'Content Lead', focus: 'Video direction and editing' },
  { initials: 'HS', name: 'Hussain', role: 'UGC & Voice', focus: 'AI UGC and voice systems' },
  { initials: 'UH', name: 'Umer Hashmi', role: 'Web Dev Lead', focus: 'Custom websites, UX, performance' },
]

const process = [
  { n: '01', title: 'Discover', desc: 'Start with the business problem, not the technology. We map the workflow, identify where friction sits, and understand the people who will use what we build. This stage surfaces the real constraint, which is usually not what it appeared to be in the initial brief.' },
  { n: '02', title: 'Plan', desc: 'Choose the right mix of disciplines for the problem at hand. Not every engagement needs all four pillars. We design a scope that addresses the actual need, identifies the connections between deliverables, and sets clear milestones so progress is visible at every stage.' },
  { n: '03', title: 'Build', desc: 'Execute against a plan that has been agreed on clearly. Each deliverable is built to a defined standard, reviewed at logical checkpoints, and connected to the next piece of the system. Documentation is part of the build, not an afterthought that happens once everything is shipped.' },
  { n: '04', title: 'Refine', desc: 'Use what we learn from real use to improve the system. The first version of a workflow, an agent, or a content pipeline reveals things a brief cannot predict. We treat post-launch feedback as a structured input rather than an informal list of things to eventually address.' },
]

// ── Animated counter ──
function StatCard({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState('0')
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current) return
    ref.current = true
    const num = parseInt(value.replace(/\D/g, ''))
    const suffix = value.replace(/[0-9]/g, '')
    if (isNaN(num)) { setCount(value); return }
    let cur = 0
    const duration = 1600
    const step = Math.ceil(duration / num)
    const timer = setInterval(() => {
      cur = Math.min(cur + Math.ceil(num / (duration / step)), num)
      setCount(cur + suffix)
      if (cur >= num) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [value])
  return (
    <div className="glass-card rounded-2xl p-6 text-center card-lift">
      <div className="font-display font-black text-4xl gradient-text-mint mb-1">{count}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

// ── Typewriter ──
function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const word = words[index]
    const delay = deleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex((index + 1) % words.length)
        }
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span className="gradient-text inline-block min-w-[2ch]">
      {displayed}
      <span className="animate-pulse" style={{ color: '#3ECF9E' }}>|</span>
    </span>
  )
}

export default function Home() {
  return (
    <Layout>
      {/* ══════════════════════════════════════
          CINEMATIC HERO — Signal Field
      ══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ background: '#08111F' }}
      >
        {/* Fluid field canvas — slow ambient color drift (ref: fluid-field, warp-field) */}
        <FluidCanvas className="absolute inset-0 pointer-events-none" />

        {/* Atmospheric canvas orbs */}
        <FloatingOrbs count={5} />

        {/* Subtle grid depth */}
        <div className="absolute inset-0 grid-texture pointer-events-none" style={{ opacity: 0.5 }} />

        {/* ── Innoventix System Core — full-viewport centered ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {/* Ambient radial glow behind the core */}
          <div
            className="absolute ambient-breath"
            style={{
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(62,207,158,0.07) 0%, rgba(62,207,158,0.02) 50%, transparent 72%)',
              pointerEvents: 'none',
            }}
          />
          <SystemCore className="w-[660px] max-w-[96vw] lg:max-w-[64vw] xl:max-w-[58vw]" />
        </div>

        {/* ── Dark fade top (behind dock) ── */}
        <div
          className="absolute top-0 inset-x-0 h-36 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #08111F 0%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* ── Foreground text — bottom-left editorial ── */}
        <div
          className="relative w-full pb-16 sm:pb-20 lg:pb-24 pt-[50vh]"
          style={{ zIndex: 3 }}
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              {/* Chapter label */}
              <div className="chapter-label warp-in">AI-Native Software &amp; Media House</div>

              {/* Display heading with rise animation */}
              <h1 className="display-xl mb-7" aria-label="Content, Automation, Voice AI, Web Dev — all built to work together.">
                <span className="rise-wrap">
                  <span className="rise-text">
                    <Typewriter words={['Content,', 'Automation,', 'Voice AI,', 'Web dev,']} />
                  </span>
                </span>
                <span className="rise-wrap">
                  <span className="rise-text" style={{ animationDelay: '0.1s', color: '#F7F9FC' }}>
                    all built to
                  </span>
                </span>
                <span className="rise-wrap">
                  <span className="rise-text text-glow-mint" style={{ animationDelay: '0.2s', color: '#3ECF9E' }}>
                    work together.
                  </span>
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-9 leading-relaxed" style={{ animationDelay: '0.3s' }}>
                Creative production, intelligent automation, AI voice agents, and web development from one connected team. Built to work as a single system, not four separate services.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/book/"
                  className="btn-mint inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-sm"
                  style={{ background: '#3ECF9E', color: '#08111F' }}
                >
                  Book Free Strategy Call
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/ai-automation/projects/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  Explore Work &amp; Demos
                </Link>
              </div>

              {/* Discipline tags */}
              <div className="flex flex-wrap gap-2">
                {['Content Creation', 'AI Automation', 'AI Voice Agents', 'Web Development'].map((p) => (
                  <span key={p} className="tag">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom depth fade */}
        <div className="depth-fade-bottom" style={{ zIndex: 2, height: '160px', background: 'linear-gradient(to bottom, transparent, #08111F)' }} />

        {/* Scroll indicator */}
        <div className="absolute bottom-7 right-8 hidden lg:flex flex-col items-center gap-2" style={{ zIndex: 4 }}>
          <span className="text-gray-700 text-[10px] tracking-[0.15em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <div
              className="absolute top-0 w-full"
              style={{
                height: '45%',
                background: 'linear-gradient(to bottom, transparent, #3ECF9E, transparent)',
                animation: 'scanline 2.2s linear infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE SHELF — 3D dimensional cards
          (refs: complete-shelf, bestsellers-book-showcase)
      ══════════════════════════════════════ */}
      <ServiceShelf />

      {/* ══════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════ */}
      <div className="relative py-5 overflow-hidden"
        style={{ background: 'rgba(62,207,158,0.04)', borderTop: '1px solid rgba(62,207,158,0.1)', borderBottom: '1px solid rgba(62,207,158,0.1)' }}>
        <div className="flex animate-marquee whitespace-nowrap select-none">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF9E] opacity-60" />
              <span className="text-gray-400 text-sm font-medium tracking-wide">{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          SCROLL STORY - cinematic 4-panel
      ══════════════════════════════════════ */}
      <ScrollStory />

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(62,207,158,0.06), rgba(124,58,237,0.04))' }}>
        <FloatingOrbs count={3} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} direction="scale">
                <StatCard value={s.value} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY COORDINATION MATTERS
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                How It Connects
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
                Why coordination<br />
                <span className="gradient-text editorial-accent">changes everything.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Most service providers work in silos. Your video editor does not talk to your automation consultant. Your web developer does not consider your content workflow. Your voice agent vendor has no relationship with the CRM that receives the leads it generates. You pay for four separate services and manage the gaps between them yourself.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Innoventix Hub is built differently. A website that integrates with your CRM from day one behaves differently from one that has the integration added later. A YouTube automation system that feeds into your lead nurturing sequence does more than one that just uploads videos. An AI voice agent that writes structured data directly into your booking system closes the loop that a standalone voice tool leaves open.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The four practice areas at Innoventix Hub are designed to inform each other. When you work across more than one, you get leverage that a single-discipline provider cannot offer. And when you start with just one, you build on a foundation that can connect to the others when the time is right.
              </p>
              <Link to="/about/" className="btn-mint inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Meet the team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              {/* Animated connection diagram */}
              <div className="relative">
                {['Content Creation', 'AI Automation', 'AI Voice Agents', 'Web Development'].map((label, i) => (
                  <div key={label} className="relative mb-4 last:mb-0">
                    <div className="glass-card rounded-2xl p-5 flex items-center gap-4 card-lift delay-{i*100}"
                      style={{ borderLeft: '2px solid rgba(62,207,158,0.4)', transitionDelay: `${i * 80}ms` }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(62,207,158,0.12)' }}>
                        <span className="font-mono text-sm font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white text-sm">{label}</div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {['Video, UGC, YouTube ops', 'n8n, GHL, custom CRM', 'Retell, Vapi, Pipecat', 'React, Next.js, WordPress'][i]}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-2 h-2 rounded-full bg-[#3ECF9E] animate-pulse" />
                      </div>
                    </div>
                    {i < 3 && <div className="absolute left-6 -bottom-4 w-0.5 h-4 bg-gradient-to-b from-[#3ECF9E]/40 to-transparent" />}
                  </div>
                ))}
                <div className="mt-6 glass-card rounded-2xl p-4 text-center"
                  style={{ background: 'rgba(62,207,158,0.06)', border: '1px solid rgba(62,207,158,0.25)' }}>
                  <span className="text-sm font-display font-semibold" style={{ color: '#3ECF9E' }}>
                    All four disciplines working as one system
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS - scanline section
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none" />
        <FloatingOrbs count={2} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              How We Work
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              Discover. Plan. Build. <span className="gradient-text">Refine.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden card-lift group">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity"
                    style={{ color: '#3ECF9E' }}>
                    {p.n}
                  </div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{p.n}</span>
                    <h3 className="font-display font-black text-xl text-white mb-3">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              The Team
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              Five specialists.<br />
              <span className="gradient-text">One system.</span>
            </h2>
          </ScrollReveal>

          {/* wave-card stagger: character-wave carousel entrance (ref: character-carousel/character-wave) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="wave-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="glass-card float-card rounded-2xl p-6 text-center h-full">
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-display font-black text-lg"
                    style={{
                      background: `linear-gradient(135deg, rgba(62,207,158,${0.1 + i*0.04}), rgba(124,58,237,${0.06 + i*0.03}))`,
                      border: '1px solid rgba(62,207,158,0.25)',
                      color: '#3ECF9E',
                    }}>
                    <span className="pulse-ring" style={{ animationDelay: `${i * 0.3}s` }} />
                    {m.initials}
                  </div>
                  <div className="font-display font-bold text-white text-sm mb-1">{m.name}</div>
                  <div className="text-[#3ECF9E] text-xs font-medium mb-2">{m.role}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{m.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHO IT'S FOR
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-30" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Who We Work With
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              Built for teams that<br />
              <span className="gradient-text">need systems, not add-ons.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            <ScrollReveal delay={0} direction="scale">
              <div className="glass-card float-card rounded-2xl p-6 h-full">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">Founders and operators scaling content</h3>
                <p className="text-gray-400 text-sm leading-relaxed">You have the expertise and the audience potential, but content production is inconsistent and distribution is manual. We build the production workflow, the automation layer, and the channel infrastructure that makes scaling to volume a repeatable process rather than a recurring scramble.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} direction="scale">
              <div className="glass-card float-card rounded-2xl p-6 h-full">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">Service businesses with high call volume</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Booking confirmations, follow-up calls, and intake conversations take up hours your team could spend on billable work. We deploy AI voice agents that handle defined call flows around the clock and write structured data directly into your CRM without requiring a staff member on the line.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160} direction="scale">
              <div className="glass-card float-card rounded-2xl p-6 h-full">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">Software teams building AI-powered products</h3>
                <p className="text-gray-400 text-sm leading-relaxed">You have engineering capacity but need specialist knowledge in voice agent architecture, automation tooling, or AI content pipelines. We work alongside your existing team to build and document specific components, with enough transparency that your engineers can own and extend the work after handover.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUR PILLARS WORKING TOGETHER
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: '#F7F9FC' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full warp-in"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.10)', border: '1px solid rgba(62,207,158,0.25)', animationDelay: '0.1s' }}>
              Four Disciplines
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#050B18]">
              The four pillars<br />
              <span className="gradient-text editorial-accent">working together.</span>
            </h2>
          </ScrollReveal>

          {/* 3D tilted card shelf — permanent visible perspective (refs: complete-shelf, bestsellers-book-showcase) */}
          <div
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
            style={{ perspective: '700px', perspectiveOrigin: '50% 25%' }}
          >
            {[
              {
                n: '01', title: 'Content Creation', to: '/content-creation/',
                tilt: 'rotateY(-14deg) rotateX(7deg)',
                shadow: '-10px 18px 50px rgba(0,0,0,0.16)',
                desc: 'We produce video content and manage YouTube operations as a documented system, not a series of one-off deliverables. Content Creation connects to Automation by feeding finished assets into distribution workflows that publish, track, and repurpose output without manual intervention between each step.',
                link: 'Content Creation services',
              },
              {
                n: '02', title: 'AI Automation', to: '/ai-automation/',
                tilt: 'rotateY(14deg) rotateX(7deg)',
                shadow: '10px 18px 50px rgba(0,0,0,0.16)',
                desc: 'We design and build the workflow layer that connects your tools, moves data between systems, and eliminates manual steps from your operations. Automation connects to Web Development by integrating CRM and lead data directly into the sites and dashboards we build, so data flows without requiring manual exports or third-party middleware.',
                link: 'AI Automation services',
              },
              {
                n: '03', title: 'AI Voice Agents', to: '/ai-voice-agents/',
                tilt: 'rotateY(-14deg) rotateX(-7deg)',
                shadow: '-10px 10px 50px rgba(0,0,0,0.16)',
                desc: 'We build AI voice agents on Retell AI, Vapi, and Pipecat to handle defined inbound and outbound call flows around the clock. Voice Agents extend your Web presence by operating as the first point of contact for inbound leads captured on your site, qualifying them and writing structured data into your CRM before a human is involved.',
                link: 'AI Voice Agent services',
              },
              {
                n: '04', title: 'Web Development', to: '/web-development/',
                tilt: 'rotateY(14deg) rotateX(-7deg)',
                shadow: '10px 10px 50px rgba(0,0,0,0.16)',
                desc: 'We build custom React, Next.js, and WordPress sites and SaaS dashboard interfaces designed for integration from day one. Web Development connects to Content Creation by building the infrastructure that hosts and distributes the content pipeline: optimised video pages, resource hubs, and channel landing pages built to perform under real traffic.',
                link: 'Web Development services',
              },
            ].map((p) => (
              <div
                key={p.n}
                className="rounded-2xl p-8"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(62,207,158,0.2)',
                  boxShadow: p.shadow,
                  transform: p.tilt,
                  transformOrigin: 'center center',
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(20px)'
                  el.style.boxShadow = '0 24px 56px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(62,207,158,0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = p.tilt
                  el.style.boxShadow = p.shadow
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(62,207,158,0.12)' }}>
                  <span className="font-mono text-sm font-bold" style={{ color: '#3ECF9E' }}>{p.n}</span>
                </div>
                <h3 className="font-display font-bold text-[#050B18] text-xl mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                <Link to={p.to} className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: '#3ECF9E' }}>
                  {p.link}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RESOURCES TEASER
      ══════════════════════════════════════ */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#3ECF9E' }}>Resources</span>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
                    24 practical guides.<br />
                    <span className="gradient-text">Zero fluff.</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    AI automation, voice agents, content production, and web development explained by the people who do the work. Templates, checklists, decision frameworks, and comparison guides written with enough specificity to be useful in a real project, not just as an introduction to the topic.
                  </p>
                </div>
                <div className="space-y-3">
                  {['Small Business Automation Audit Checklist', 'Retell vs Vapi: Voice Agent Evaluation', 'Video Editing Brief Template for Brands', 'WordPress vs Custom Website Guide'].map((title) => (
                    <div key={title} className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#3ECF9E' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-300 text-sm">{title}</span>
                    </div>
                  ))}
                  <Link to="/resources/" className="block text-center py-3 rounded-xl font-display font-semibold text-sm transition-all mt-2"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                    Browse all 24 guides &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMMON STARTING POINTS
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-30" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Common Starting Points
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              Recognise your<br />
              <span className="gradient-text">situation?</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <div className="glass-card rounded-2xl p-6 card-lift h-full flex flex-col">
                <h3 className="font-display font-bold text-white text-lg mb-3">Great expertise. No consistent content output.</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">You know your subject well and your audience wants to hear from you, but content production stalls after the first burst of effort. There is no production rhythm, no distribution system, and no way to turn expertise into consistent output without it becoming a personal project that competes with everything else on your plate.</p>
                <div className="text-sm" style={{ color: '#a8f0da' }}>
                  This often starts with{' '}
                  <Link to="/content-creation/" className="font-semibold underline underline-offset-2" style={{ color: '#3ECF9E' }}>Content Creation</Link>.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="glass-card rounded-2xl p-6 card-lift h-full flex flex-col">
                <h3 className="font-display font-bold text-white text-lg mb-3">Hours lost to manual booking and follow-up calls.</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">Booking confirmations, appointment reminders, and intake calls take significant time from your team every week. The calls are routine and the information is predictable, but they still require a human on the line. Every hour spent on that work is an hour that does not go into service delivery or growth.</p>
                <div className="text-sm" style={{ color: '#a8f0da' }}>
                  This often starts with{' '}
                  <Link to="/ai-voice-agents/" className="font-semibold underline underline-offset-2" style={{ color: '#3ECF9E' }}>AI Voice Agents</Link>.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="glass-card rounded-2xl p-6 card-lift h-full flex flex-col">
                <h3 className="font-display font-bold text-white text-lg mb-3">An existing site that needs a CRM and automation layer.</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">Your website exists and functions, but it does not connect to anything behind it. Leads come in and get handled manually. Data lives in disconnected spreadsheets. Forms submit to inboxes. The site works as a brochure but not as an operational tool, and every new team member adds another manual handoff to manage.</p>
                <div className="text-sm" style={{ color: '#a8f0da' }}>
                  This often starts with{' '}
                  <Link to="/ai-automation/" className="font-semibold underline underline-offset-2" style={{ color: '#3ECF9E' }}>AI Automation</Link>.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <FloatingOrbs count={5} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.1) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)', filter: 'blur(80px)' }} />
        </div>

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-16 md:py-20 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 mint-border-pulse rounded-3xl pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                  style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.25)' }}>
                  Free Strategy Call
                </div>
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                  Ready to put<br />
                  <span className="gradient-text">AI to work?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Book 30 minutes with the Innoventix Hub team. We start with your business context, identify where content production, automation, voice AI, or web development would have the highest impact, and outline a clear next step. No commitment required. Just a real conversation about what is actually possible.
                </p>
                <Link to="/book/" className="btn-mint inline-flex items-center gap-3 px-10 py-5 rounded-full font-display font-black text-lg shadow-2xl"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <p className="text-gray-600 text-sm mt-5">No commitment required. Just a real conversation.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
