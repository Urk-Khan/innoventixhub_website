import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const projects = [
  { cat: 'Video Editing', title: 'Brand Podcast Series', desc: 'Full production pipeline for a 24-episode B2B podcast: recording guidance, editing, chapter markers, captions, and thumbnail set.', img: 'photo-1590650153855-d9e808231d41', tags: ['Long-form', 'Podcast', 'B2B'] },
  { cat: 'YouTube Automation', title: 'SaaS Channel Management', desc: 'End-to-end management for a SaaS YouTube channel. Eight videos per month, SEO scripting, editing, and analytics reporting.', img: 'photo-1611162616475-46b635cb6868', tags: ['YouTube', '8/month', 'SaaS'] },
  { cat: 'AI UGC', title: 'E-commerce Ad Creative', desc: '40 AI UGC ad variants for a D2C brand across three product lines. Multiple hooks, formats, and languages for Meta and TikTok.', img: 'photo-1633356122102-3fe601e05bd2', tags: ['AI UGC', 'Ads', 'E-commerce'] },
  { cat: 'Video Editing', title: 'Short-form Repurposing', desc: 'Monthly retainer converting long-form interview footage into 20 Reels and Shorts per month with captions and brand overlays.', img: 'photo-1536240478700-b869ad10e128', tags: ['Reels', 'Shorts', 'Repurposing'] },
  { cat: 'AI UGC', title: 'Multilingual Product Demos', desc: 'Product demo videos in English, Spanish, and French using AI voiceover cloning from a single English master recording.', img: 'photo-1649191684591-3e74dce94f01', tags: ['Multilingual', 'AI Voice', 'Demos'] },
  { cat: 'YouTube Automation', title: 'Faceless Finance Channel', desc: 'Full content system for a faceless finance YouTube channel. Scripts, voiceover, stock footage editing, thumbnails, and SEO.', img: 'photo-1611532736597-de2d4265fba3', tags: ['Faceless', 'Finance', 'Full pipeline'] },
]

const catColors: Record<string, string> = {
  'Video Editing': 'rgba(62,207,158,0.15)',
  'YouTube Automation': 'rgba(124,58,237,0.2)',
  'AI UGC': 'rgba(245,158,11,0.15)',
}
const catText: Record<string, string> = {
  'Video Editing': '#3ECF9E',
  'YouTube Automation': '#a78bfa',
  'AI UGC': '#fbbf24',
}

export default function ContentPortfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/content-creation/" className="hover:text-[#3ECF9E] transition-colors">Content Creation</Link>
              <span>/</span><span className="text-gray-300">Portfolio</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Portfolio
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95]">
              Selected content<br />
              <span className="gradient-text">work & projects.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
              A sample of video editing, YouTube automation, and AI UGC projects from the Innoventix Hub content team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img src={unsplash(p.img, 600, 380)} alt={p.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.65 }} />
                    <div className="absolute inset-0 img-fade-bottom" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: catColors[p.cat], color: catText[p.cat] }}>
                        {p.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-black text-lg text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.15)', color: '#a8f0da' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About this portfolio */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>About This Portfolio</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What this portfolio<br />
                <span className="gradient-text">will show.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  This section will be updated with production samples as work is approved for publication. Samples will include video editing work across long-form and short-form formats, YouTube channel content from managed channels, and AI UGC creative samples across different formats and industries.
                </p>
                <p>
                  Portfolio items are published once a client has reviewed the sample and approved it for display. If you need to evaluate fit for a specific content format or industry, book a call and we will share relevant samples directly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-8 card-lift">
                <h3 className="font-display font-bold text-white text-lg mb-5">What published samples will cover</h3>
                <div className="space-y-3">
                  {[
                    "Video editing work: long-form edits, short-form repurposing, and thumbnail sets",
                    "YouTube channel content: scripted, edited, and SEO-optimised videos from managed channels",
                    "AI UGC creative: ad variants, product demos, and faceless channel content across formats",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-mono font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Discuss a content project */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden text-center">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Discuss a content project.
                </h2>
                <p className="text-gray-400 mb-8">
                  Book a strategy call and describe your content goals. We will share relevant samples, scope a production plan, and confirm fit before any engagement begins.
                </p>
                <Link to="/book/" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book a Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Want to see work<br />
                  <span className="gradient-text">relevant to your brief?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a call and we will share specific samples that match your industry, format, and content goals.</p>
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
