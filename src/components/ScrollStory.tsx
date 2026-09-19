import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const panels = [
  {
    num: '01',
    label: 'Content Creation',
    headline: 'Stories that stop the scroll.',
    sub: 'Video editing, YouTube automation, and AI UGC that publish consistently and look professional at every format.',
    img: 'photo-1618329027137-a520b57c6606',
    imgAlt: 'Dark video editing workstation with multiple monitors',
    href: '/content-creation/',
    accent: '#3ECF9E',
    tags: ['Video Editing', 'YouTube Automation', 'AI UGC'],
  },
  {
    num: '02',
    label: 'AI Automation',
    headline: 'Work that runs without you.',
    sub: 'Lead capture, invoicing, CRM pipelines, and multi-step workflows built on n8n and GoHighLevel so your team focuses on what matters.',
    img: 'photo-1551288049-bebda4e38f71',
    imgAlt: 'Analytics dashboard showing performance metrics',
    href: '/ai-automation/',
    accent: '#7c3aed',
    tags: ['n8n', 'GoHighLevel', 'Custom CRM'],
  },
  {
    num: '03',
    label: 'AI Voice Agents',
    headline: 'Every call answered, every time.',
    sub: 'Inbound call handling, lead qualification, and appointment booking deployed on Retell AI, Vapi, and Pipecat.',
    img: 'photo-1724185773486-0b39642e607e',
    imgAlt: 'Sound wave visualization on dark background',
    href: '/ai-voice-agents/',
    accent: '#3ECF9E',
    tags: ['Retell AI', 'Vapi', 'Pipecat'],
  },
  {
    num: '04',
    label: 'Web Development',
    headline: 'Sites built for performance.',
    sub: 'React, Next.js, HTML/CSS, and WordPress projects engineered by Umer Hashmi to load fast, integrate deeply, and scale cleanly.',
    img: 'photo-1498050108023-c5249f4df085',
    imgAlt: 'MacBook showing code in a modern workspace',
    href: '/web-development/',
    accent: '#7c3aed',
    tags: ['React', 'Next.js', 'WordPress'],
  },
]

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0) // 0-1 within current panel
  const [globalProgress, setGlobalProgress] = useState(0) // 0-1 total

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const clamped = Math.max(0, Math.min(total, scrolled))
      const gp = total > 0 ? clamped / total : 0
      setGlobalProgress(gp)
      const panelFloat = gp * panels.length
      const floored = Math.floor(panelFloat)
      const idx = isNaN(floored) ? 0 : Math.min(floored, panels.length - 1)
      const panelProgress = panelFloat - Math.floor(panelFloat)
      setActiveIndex(idx)
      setProgress(panelProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const panel = panels[activeIndex] ?? panels[0]
  const nextPanel = panels[Math.min(activeIndex + 1, panels.length - 1)] ?? panels[panels.length - 1]

  // fade out current at end of panel, except for last
  const opacity = activeIndex < panels.length - 1 && progress > 0.8
    ? 1 - ((progress - 0.8) / 0.2)
    : 1
  const nextOpacity = activeIndex < panels.length - 1 && progress > 0.8
    ? (progress - 0.8) / 0.2
    : 0

  return (
    <div ref={containerRef} style={{ height: `${panels.length * 100}vh` }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: '#050B18' }}>

        {/* Background images - crossfade */}
        {panels.map((p, i) => {
          const isActive = i === activeIndex
          const isNext = i === activeIndex + 1
          const imgOpacity = isActive ? opacity : isNext ? nextOpacity : 0
          return (
            <div key={p.num} className="absolute inset-0 transition-none" style={{ opacity: imgOpacity }}>
              <img
                src={unsplash(p.img, 1800, 1000)}
                alt={p.imgAlt}
                className="w-full h-full object-cover"
                style={{ opacity: 0.18, transform: `scale(${1 + globalProgress * 0.04})`, transition: 'none' }}
              />
            </div>
          )
        })}

        {/* Radial overlays */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(5,11,24,0) 0%, rgba(5,11,24,0.7) 100%)' }} />
        <div className="absolute inset-0 grid-texture pointer-events-none" />

        {/* Accent glow shifts per panel */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 50% 40% at ${activeIndex % 2 === 0 ? '30%' : '70%'} 50%, ${panel.accent}14 0%, transparent 60%)`,
          }} />

        {/* Main content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text content */}
              <div>
                {/* Panel number + label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono font-black text-4xl leading-none select-none"
                    style={{ color: `${panel.accent}20` }}>
                    {panel.num}
                  </span>
                  <span className="h-px w-8 opacity-50" style={{ background: panel.accent }} />
                  <span className="text-xs font-medium tracking-widest uppercase"
                    style={{ color: panel.accent }}>
                    {panel.label}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display font-black leading-[0.95] text-white mb-5"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
                  {panel.headline}
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                  {panel.sub}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {panel.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: `${panel.accent}12`, border: `1px solid ${panel.accent}30`, color: panel.accent }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link to={panel.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-sm transition-all hover:gap-3"
                  style={{ background: panel.accent, color: '#050B18' }}>
                  Explore {panel.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: image card */}
              <div className="hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glass-card">
                  {panels.map((p, i) => {
                    const isActive = i === activeIndex
                    const isNext = i === activeIndex + 1
                    const imgOp = isActive ? opacity : isNext ? nextOpacity : 0
                    return (
                      <div key={p.num} className="absolute inset-0" style={{ opacity: imgOp }}>
                        <img src={unsplash(p.img, 900, 700)} alt={p.imgAlt}
                          className="w-full h-full object-cover" style={{ opacity: 0.75 }} />
                        <div className="absolute inset-0"
                          style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(5,11,24,0.5))` }} />
                      </div>
                    )
                  })}

                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                      style={{ border: `1px solid ${panel.accent}25` }}>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: panel.accent }} />
                      <span className="text-white text-sm font-medium">
                        {['Video, UGC & YouTube ops', 'n8n, GHL & custom workflows', 'Retell, Vapi & Pipecat agents', 'React, Next.js, HTML/CSS, WordPress'][activeIndex]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots + bar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
          {panels.map((p, i) => (
            <div key={p.num} className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                style={{
                  background: i === activeIndex ? p.accent : 'rgba(255,255,255,0.2)',
                  transform: i === activeIndex ? 'scale(1.8)' : 'scale(1)',
                }} />
              {i === activeIndex && (
                <div className="absolute w-5 h-5 rounded-full border animate-ping"
                  style={{ borderColor: `${p.accent}50` }} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="h-full transition-none"
            style={{
              width: `${globalProgress * 100}%`,
              background: `linear-gradient(to right, #3ECF9E, #7c3aed)`,
              boxShadow: '0 0 12px rgba(62,207,158,0.5)',
            }} />
        </div>

        {/* Panel counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <span className="font-display font-bold text-sm" style={{ color: panel.accent }}>{panel.num}</span>
          <span className="text-gray-600 text-xs">of {panels.length.toString().padStart(2, '0')}</span>
        </div>

        {/* Scroll hint (only visible at top) */}
        {globalProgress < 0.04 && (
          <div className="absolute bottom-10 right-20 flex flex-col items-center gap-2 animate-bounce opacity-60">
            <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
