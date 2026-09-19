import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  {
    title: 'Video Editing',
    desc: 'Long-form edits, Shorts and Reels, talking-head cleanup, colour grading, captions, and thumbnail production. Delivered as a format-ready package in your required codec and resolution.',
    href: '/content-creation/video-editing/',
    img: 'photo-1618329027137-a520b57c6606',
    imgAlt: 'Video editing workstation with dark monitors',
    tags: ['Long-form', 'Short-form', 'Thumbnails'],
  },
  {
    title: 'YouTube Automation',
    desc: 'Full channel management: scripting, editing, SEO, scheduling, and monthly performance reporting. Consistent publishing cadence without your direct involvement in production.',
    href: '/content-creation/youtube-automation/',
    img: 'photo-1611162616475-46b635cb6868',
    imgAlt: 'YouTube analytics on screen',
    tags: ['Channel Ops', 'SEO', 'Scheduling'],
  },
  {
    title: 'AI UGC',
    desc: 'AI-generated product demos, testimonial-style ad formats, and creative variants at scale. Creative content, not verified reviews. Platform disclosure applies. Files delivered in 24 to 48 hours.',
    href: '/content-creation/ai-ugc/',
    img: 'photo-1633356122102-3fe601e05bd2',
    imgAlt: 'AI generated content visualization',
    tags: ['AI Avatars', 'Product Demos', 'Ad Creative'],
  },
]

const process = [
  {
    n: '01',
    t: 'Brief',
    d: 'We start by clarifying exactly what the content needs to do: the target audience, the core message, the platform it will live on, and the source material you can provide. This step results in a written brief that the entire production process runs from, reducing the chance of misaligned output at the review stage.',
  },
  {
    n: '02',
    t: 'Edit',
    d: 'The brief becomes a structured production plan. We identify all required formats, prioritise the work by deadline or strategic importance, and establish the review and approval points before any editing begins. This prevents scope creep and ensures you know exactly what is being delivered and when.',
  },
  {
    n: '03',
    t: 'Review',
    d: 'Production begins and the first cut is delivered for feedback. We use a focused review process that limits feedback to the agreed scope. Revision rounds are structured to avoid open-ended iteration, so the work moves to final delivery without losing time in cycles of unclear or conflicting feedback.',
  },
  {
    n: '04',
    t: 'Publish',
    d: 'Final files are exported in the required formats and delivered alongside any publishing assets: thumbnails, upload metadata, captions, and scheduled post specifications. We document what worked from this cycle and carry that learning into the planning for the next round of content.',
  },
]

export default function ContentCreation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                Content Creation
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95]">
                Content creation services for<br />
                <span className="gradient-text">video-led brands.</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
                Video editing, YouTube channel management, and AI-generated content for brands that need consistent output without running the production themselves.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/content-creation/portfolio/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  View Portfolio
                </Link>
              </div>
            </ScrollReveal>

            {/* 2.5D animated SVG scene */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="max-w-[440px] w-full">
                <svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 'auto' }}>
                  <defs>
                    <style>{`
                      @media (prefers-reduced-motion: no-preference) {
                        .cc-float { animation: cc-float 4s ease-in-out infinite; }
                        .cc-float-slow { animation: cc-float 6s ease-in-out infinite 0.8s; }
                        .cc-float-delay { animation: cc-float 5s ease-in-out infinite 1.6s; }
                        .cc-pulse { animation: cc-pulse 3s ease-in-out infinite; }
                        .cc-upload { animation: cc-upload 2.5s ease-in-out infinite; }
                      }
                      @keyframes cc-float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                      }
                      @keyframes cc-pulse {
                        0%, 100% { opacity: 0.5; }
                        50% { opacity: 1; }
                      }
                      @keyframes cc-upload {
                        0%, 100% { transform: translateY(0px); opacity: 0.7; }
                        50% { transform: translateY(-5px); opacity: 1; }
                      }
                    `}</style>
                    <filter id="cc-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="cc-card-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0D1F3C" />
                      <stop offset="100%" stopColor="#0B1220" />
                    </linearGradient>
                  </defs>

                  {/* Background stacked cards */}
                  <g className="cc-float-slow">
                    <rect x="68" y="98" width="220" height="148" rx="14" fill="#0D1F3C" opacity="0.5" />
                  </g>
                  <g className="cc-float-delay">
                    <rect x="80" y="90" width="220" height="148" rx="14" fill="#0D1F3C" opacity="0.7" />
                  </g>

                  {/* Main video frame */}
                  <g className="cc-float">
                    <rect x="92" y="82" width="256" height="164" rx="16" fill="url(#cc-card-grad)" stroke="#3ECF9E" strokeWidth="1.5" filter="url(#cc-glow)" opacity="0.95" />
                    {/* Screen area */}
                    <rect x="106" y="96" width="228" height="124" rx="8" fill="#050B18" opacity="0.9" />
                    {/* Play button */}
                    <g className="cc-pulse">
                      <circle cx="220" cy="158" r="22" fill="rgba(62,207,158,0.15)" stroke="#3ECF9E" strokeWidth="1.5" />
                      <polygon points="213,148 213,168 233,158" fill="#3ECF9E" opacity="0.9" />
                    </g>
                    {/* Mint corner accent */}
                    <rect x="92" y="82" width="48" height="3" rx="1.5" fill="#3ECF9E" opacity="0.8" />
                    {/* Duration bar */}
                    <rect x="106" y="208" width="228" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
                    <rect x="106" y="208" width="90" height="3" rx="1.5" fill="#3ECF9E" opacity="0.7" />
                  </g>

                  {/* Upload / publish arrow icon */}
                  <g className="cc-upload">
                    <rect x="198" y="46" width="44" height="28" rx="8" fill="#0D1F3C" stroke="rgba(62,207,158,0.4)" strokeWidth="1" />
                    <line x1="220" y1="60" x2="220" y2="68" stroke="#3ECF9E" strokeWidth="1.8" strokeLinecap="round" />
                    <polyline points="215,63 220,57 225,63" fill="none" stroke="#3ECF9E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="215" y1="69" x2="225" y2="69" stroke="#3ECF9E" strokeWidth="1.5" strokeLinecap="round" />
                  </g>

                  {/* Timeline bar */}
                  <g className="cc-float-delay">
                    <rect x="78" y="268" width="284" height="48" rx="12" fill="#0D1F3C" stroke="rgba(62,207,158,0.2)" strokeWidth="1" />
                    {/* Timeline thumbnails */}
                    <rect x="92" y="278" width="52" height="28" rx="6" fill="#1D3A6E" opacity="0.8" />
                    <rect x="152" y="278" width="52" height="28" rx="6" fill="#1D3A6E" opacity="0.8" />
                    <rect x="212" y="278" width="52" height="28" rx="6" fill="#1D3A6E" opacity="0.8" />
                    <rect x="272" y="278" width="52" height="28" rx="6" fill="rgba(62,207,158,0.15)" stroke="rgba(62,207,158,0.4)" strokeWidth="1" opacity="0.9" />
                    {/* Active thumbnail indicator */}
                    <rect x="272" y="275" width="52" height="3" rx="1.5" fill="#3ECF9E" />
                    {/* Small play icons in thumbnails */}
                    <polygon points="113,289 113,299 121,294" fill="rgba(255,255,255,0.3)" />
                    <polygon points="173,289 173,299 181,294" fill="rgba(255,255,255,0.3)" />
                    <polygon points="233,289 233,299 241,294" fill="rgba(255,255,255,0.3)" />
                    <polygon points="291,289 291,299 299,294" fill="#3ECF9E" opacity="0.8" />
                  </g>

                  {/* Side stat cards */}
                  <g className="cc-float-slow">
                    <rect x="356" y="110" width="68" height="36" rx="8" fill="#0D1F3C" stroke="rgba(62,207,158,0.25)" strokeWidth="1" />
                    <text x="390" y="126" textAnchor="middle" fill="#3ECF9E" fontSize="9" fontFamily="monospace" fontWeight="bold">4K</text>
                    <text x="390" y="138" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">Export</text>
                  </g>
                  <g className="cc-float">
                    <rect x="16" y="154" width="68" height="36" rx="8" fill="#0D1F3C" stroke="rgba(62,207,158,0.25)" strokeWidth="1" />
                    <text x="50" y="170" textAnchor="middle" fill="#3ECF9E" fontSize="9" fontFamily="monospace" fontWeight="bold">CC</text>
                    <text x="50" y="182" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="sans-serif">Caption</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Three services. <span className="gradient-text">One content engine.</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80} direction="scale">
                <Link to={s.href} className="block group h-full">
                  <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={unsplash(s.img, 600, 400)} alt={s.imgAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ opacity: 0.7 }} loading="lazy" />
                      <div className="absolute inset-0 img-fade-bottom" />
                      <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                        {s.tags.map(t => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(62,207,158,0.15)', border: '1px solid rgba(62,207,158,0.3)', color: '#a8f0da' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-display font-black text-xl text-white mb-3">{s.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-[#3ECF9E] text-gray-500">
                        Learn more <span style={{ color: '#3ECF9E' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-30" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white">
              How we deliver <span className="gradient-text">every time.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 card-lift relative overflow-hidden group">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(62,207,158,0.07)' }}>{p.n}</div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{p.n}</span>
                    <h3 className="font-display font-black text-xl text-white mb-3">{p.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What a content system actually involves */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What a content system <span className="gradient-text">actually involves.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The gap between creating content and publishing it consistently is where most content strategies break down. Understanding what a real system looks like helps set expectations for what this work covers.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-lg mb-4">The distribution gap</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Creating a piece of content and distributing it consistently are two different problems. Most businesses underestimate the operational complexity of maintaining a publishing schedule: content needs to be planned, produced, reviewed, formatted for each platform, uploaded with the right metadata, and then repeated on schedule the following week. The gap between a creative idea and a published asset is filled with dozens of small tasks that, in aggregate, take more time than the creative work itself. Building a content system means solving the distribution problem, not just the production problem.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-lg mb-4">Editing connects to publishing</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Video editing does not end at the export button. A finished video file needs captions formatted for a specific platform, a thumbnail that matches the channel style, metadata prepared for SEO, and in many cases a set of short-form clips cut from the same source material. When video editing is treated as a standalone task, these downstream steps create bottlenecks. When it is built into a publishing workflow, the final upload happens without additional coordination between separate tools and teams. The editing service here is scoped to include those downstream assets as part of the deliverable.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-lg mb-4">Format adaptation: long to short</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  The same source material can and should serve multiple formats. A 30-minute interview can yield a podcast episode, a YouTube video, six short-form clips for Instagram Reels and TikTok, a blog post transcription, and a series of social media quotes. Format adaptation is not automatic: it requires editorial judgment about what works at each length and on each platform. Building format adaptation into the production process from the start is how a single recording session becomes a week of content across multiple channels, without doubling the production time or budget.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-lg mb-4">Channel management is editorial and operational</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Running a YouTube channel that grows requires two distinct competencies operating together. The editorial side covers the script, the structure of each video, the SEO research that informs topic selection, and the visual identity that makes the channel recognisable. The operational side covers the publishing calendar, the upload checklist, the analytics review, and the process of feeding performance data back into the editorial plan. Most channels that stagnate have one but not the other. Effective channel management requires both, coordinated as a single system rather than two separate workflows.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who content creation is for */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Who It Is For</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Who content creation from<br />
              <span className="gradient-text">Innoventix Hub is for.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                t: 'Founders building thought leadership',
                d: "Founders who want a consistent professional presence on video platforms but cannot afford to spend several hours a week on production. You provide the subject matter expertise and we handle the scripting, editing, and distribution so the content goes out on schedule.",
              },
              {
                n: '02',
                t: 'Growing businesses scaling video output',
                d: "Businesses that need a consistent video output across YouTube, Reels, and Shorts without hiring a full internal production team. We operate as the production layer: briefed by you, running to a defined schedule, delivering finished files ready to publish.",
              },
              {
                n: '03',
                t: 'Brands running paid social campaigns',
                d: "Brands that need AI-generated creative at volume for paid social testing. Multiple hooks, multiple formats, and multiple variants produced quickly so your media buyer has enough creative to test without a traditional production bottleneck.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.n} delay={i * 80} direction="scale">
                <div className="glass-card rounded-2xl p-8 h-full card-lift">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{card.n}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{card.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the three services connect */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>How It Connects</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                How the three services<br />
                <span className="gradient-text">work together.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  Video editing, YouTube automation, and AI UGC are designed to operate as a connected system rather than three separate services you coordinate yourself. Long-form content is edited first and functions as the source material. That source material is then repurposed into short-form clips for Reels, Shorts, and TikTok as part of the same production cycle.
                </p>
                <p>
                  When a brand needs to scale creative output beyond what traditional production allows, such as for a paid social campaign requiring multiple hooks and formats, AI UGC supplements the edited content without requiring additional recording sessions. The brief for AI UGC variants comes from the same content calendar that drives the editing and YouTube work.
                </p>
                <p>
                  The result is a single content operation that spans long-form, short-form, and AI-generated creative, all running from a shared strategy document and a defined publishing schedule.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-4">
                {[
                  { label: 'Long-form', desc: "Edited, colour-graded, captioned, and delivered as a complete upload package for YouTube." },
                  { label: 'Short-form repurposing', desc: "Source material cut into platform-specific clips for Reels, Shorts, and TikTok within the same production cycle." },
                  { label: 'AI UGC at scale', desc: "Creative variants and ad formats generated at volume from the same brief when paid campaign requirements outpace traditional production speed." },
                ].map((item, i) => (
                  <div key={item.label} className="glass-card rounded-2xl p-6 card-lift flex gap-4">
                    <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-mono font-bold" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)', color: '#3ECF9E' }}>{i + 1}</div>
                    <div>
                      <div className="font-display font-bold text-white text-sm mb-1">{item.label}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Related Resources</span>
            <h2 className="font-display font-black text-3xl text-white">Further reading on content creation.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: 'Video Editing Brief', href: '/resources/video-editing-brief/' },
              { label: 'Repurpose Long Videos Into Shorts', href: '/resources/repurpose-long-videos-into-shorts/' },
              { label: 'AI UGC vs Creator UGC', href: '/resources/ai-ugc-vs-creator-ugc/' },
            ].map((res, i) => (
              <ScrollReveal key={res.href} delay={i * 60} direction="scale">
                <Link to={res.href} className="block glass-card rounded-2xl p-6 card-lift group">
                  <div className="font-display font-bold text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">{res.label}</div>
                  <div className="text-sm flex items-center gap-1" style={{ color: '#3ECF9E' }}>Read resource <span>{"→"}</span></div>
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
                  Ready to scale<br />
                  <span className="gradient-text">your content?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call and we will map out a content system that fits your workflow, your resources, and your publishing goals. We will review your current output, identify the gaps, and scope a production plan that covers the formats and platforms your audience actually uses.</p>
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
