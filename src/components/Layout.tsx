import { useState, useEffect, ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ScrollProgress from './ScrollProgress'

const services = [
  {
    label: 'Content Creation',
    href: '/content-creation/',
    children: [
      { label: 'Video Editing', href: '/content-creation/video-editing/' },
      { label: 'YouTube Automation', href: '/content-creation/youtube-automation/' },
      { label: 'AI UGC', href: '/content-creation/ai-ugc/' },
      { label: 'Portfolio', href: '/content-creation/portfolio/' },
    ],
  },
  {
    label: 'AI Automation',
    href: '/ai-automation/',
    children: [
      { label: 'SMB Automation', href: '/ai-automation/smb/' },
      { label: 'Custom CRM', href: '/ai-automation/custom-crm/' },
      { label: 'GoHighLevel', href: '/ai-automation/ghl/' },
      { label: 'n8n Workflows', href: '/ai-automation/n8n/' },
      { label: 'Projects', href: '/ai-automation/projects/' },
    ],
  },
  {
    label: 'AI Voice Agents',
    href: '/ai-voice-agents/',
    children: [
      { label: 'Use Cases', href: '/ai-voice-agents/use-cases/' },
      { label: 'Integrations', href: '/ai-voice-agents/integrations/' },
      { label: 'Demos', href: '/ai-voice-agents/demos/' },
      { label: 'Taxi Booking', href: '/ai-voice-agents/taxi-booking/' },
    ],
  },
  {
    label: 'Web Development',
    href: '/web-development/',
    children: [
      { label: 'Custom Development', href: '/web-development/custom/' },
      { label: 'WordPress', href: '/web-development/wordpress/' },
      { label: 'Web Design & UX', href: '/web-development/web-design-ux/' },
      { label: 'Portfolio', href: '/web-development/portfolio/' },
    ],
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#08111F' }}>
      <ScrollProgress />

      {/* ── Floating Dock Navigation ── */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex flex-col items-center">
        {/* Dock bar */}
        <div
          className="w-full max-w-[960px] flex items-center justify-between h-[54px] px-4 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(8,17,31,0.96)' : 'rgba(8,17,31,0.78)',
            backdropFilter: 'blur(28px)',
            border: `1px solid ${scrolled ? 'rgba(255,255,255,0.11)' : 'rgba(255,255,255,0.07)'}`,
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(62,207,158,0.06)'
              : '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center relative"
              style={{ background: 'linear-gradient(135deg,#3ECF9E,#2AB584)' }}
            >
              <span className="text-[#08111F] font-display font-black text-xs">iH</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 18px rgba(62,207,158,0.75)' }}
              />
            </div>
            <span className="font-display font-bold text-white text-base tracking-tight">
              Innoventix<span style={{ color: '#3ECF9E' }}>Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Services mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-150">
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega menu dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl p-6 grid grid-cols-2 gap-5 transition-all duration-200 ${
                  megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                style={{
                  background: 'rgba(8,17,31,0.98)',
                  backdropFilter: 'blur(28px)',
                  border: '1px solid rgba(62,207,158,0.14)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.75), 0 0 40px rgba(62,207,158,0.07)',
                }}
              >
                {services.map((s) => (
                  <div key={s.href}>
                    <Link to={s.href} className="flex items-center gap-2 mb-2.5 group">
                      <span
                        className="font-display font-semibold text-sm group-hover:text-white transition-colors"
                        style={{ color: '#3ECF9E' }}
                      >
                        {s.label}
                      </span>
                    </Link>
                    <ul className="space-y-1 pl-0">
                      {s.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            to={c.href}
                            className="text-xs text-gray-500 hover:text-gray-200 block py-0.5 transition-colors hover:translate-x-0.5 transform duration-150"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-2 pt-4 mt-1 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-600">AI-native software and media house</span>
                  <Link to="/about/" className="text-xs text-gray-500 hover:text-white transition-colors">
                    About the team &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {[
              { label: 'Work & Demos', href: '/ai-automation/projects/' },
              { label: 'About', href: '/about/' },
              { label: 'Resources', href: '/resources/' },
              { label: 'Contact', href: '/contact/' },
            ].map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-[#3ECF9E] bg-[#3ECF9E]/8'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/book/"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold font-display transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#3ECF9E', color: '#08111F' }}
            >
              Book Free Call
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile burger */}
            <button
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-4 flex flex-col gap-[5px]">
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden w-full max-w-[960px] mt-2 rounded-2xl transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-[82vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: 'rgba(8,17,31,0.98)',
            backdropFilter: 'blur(28px)',
            border: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
            boxShadow: menuOpen ? '0 16px 48px rgba(0,0,0,0.6)' : 'none',
          }}
        >
          <div className="px-5 py-4 space-y-1 overflow-y-auto max-h-[78vh]">
            <button
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileExpanded === 'services' && (
              <div className="pl-4 space-y-4 py-2">
                {services.map((s) => (
                  <div key={s.href}>
                    <Link
                      to={s.href}
                      className="flex items-center gap-2 mb-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-display font-semibold text-sm" style={{ color: '#3ECF9E' }}>
                        {s.label}
                      </span>
                    </Link>
                    {s.children.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block pl-4 text-xs text-gray-500 hover:text-white py-1 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {[
              { label: 'Work & Demos', href: '/ai-automation/projects/' },
              { label: 'About', href: '/about/' },
              { label: 'Resources', href: '/resources/' },
              { label: 'Contact', href: '/contact/' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 pb-1">
              <Link
                to="/book/"
                className="block text-center py-3.5 rounded-xl text-sm font-semibold font-display transition-all hover:brightness-105"
                style={{ background: '#3ECF9E', color: '#08111F' }}
                onClick={() => setMenuOpen(false)}
              >
                Book Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page content — offset for floating dock */}
      <main className="flex-1 pt-[86px]">{children}</main>

      {/* ── Footer ── */}
      <footer style={{ background: '#05090F', borderTop: '1px solid rgba(62,207,158,0.07)' }} className="pt-16 pb-8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#3ECF9E,#2AB584)' }}>
                  <span className="text-[#08111F] font-display font-black text-sm">iH</span>
                </div>
                <span className="font-display font-bold text-white text-lg">
                  Innoventix<span style={{ color: '#3ECF9E' }}>Hub</span>
                </span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-[220px]">
                AI-native software and media house. Content, automation, voice agents and web, built to work together.
              </p>
              <div className="space-y-1.5">
                <a href="mailto:ubaid@persistbrands.com" className="flex items-center gap-2 text-gray-600 text-xs hover:text-[#3ECF9E] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ubaid@persistbrands.com
                </a>
                <a href="tel:+19177954404" className="flex items-center gap-2 text-gray-600 text-xs hover:text-[#3ECF9E] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (917) 795-4404
                </a>
              </div>
            </div>

            {[
              { title: 'Content', links: [
                { label: 'Video Editing', href: '/content-creation/video-editing/' },
                { label: 'YouTube Automation', href: '/content-creation/youtube-automation/' },
                { label: 'AI UGC', href: '/content-creation/ai-ugc/' },
                { label: 'Portfolio', href: '/content-creation/portfolio/' },
              ]},
              { title: 'Automation', links: [
                { label: 'SMB Automation', href: '/ai-automation/smb/' },
                { label: 'Custom CRM', href: '/ai-automation/custom-crm/' },
                { label: 'GoHighLevel', href: '/ai-automation/ghl/' },
                { label: 'n8n Workflows', href: '/ai-automation/n8n/' },
              ]},
              { title: 'Voice AI', links: [
                { label: 'Use Cases', href: '/ai-voice-agents/use-cases/' },
                { label: 'Integrations', href: '/ai-voice-agents/integrations/' },
                { label: 'Demos', href: '/ai-voice-agents/demos/' },
                { label: 'Taxi Booking', href: '/ai-voice-agents/taxi-booking/' },
              ]},
              { title: 'Web Dev', links: [
                { label: 'Custom Apps', href: '/web-development/custom/' },
                { label: 'WordPress', href: '/web-development/wordpress/' },
                { label: 'Design & UX', href: '/web-development/web-design-ux/' },
                { label: 'Portfolio', href: '/web-development/portfolio/' },
              ]},
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-4 opacity-60">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-gray-600 text-xs hover:text-[#3ECF9E] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p className="text-gray-700 text-xs">&copy; {new Date().getFullYear()} Innoventix Hub. All rights reserved.</p>
            <div className="flex gap-5">
              {[{l:'Privacy',h:'/privacy/'},{l:'Terms',h:'/terms/'},{l:'Cookies',h:'/cookies/'}].map(x => (
                <Link key={x.h} to={x.h} className="text-gray-700 text-xs hover:text-[#3ECF9E] transition-colors">{x.l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
