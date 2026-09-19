import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const deliverables = [
  {
    title: 'Long-form Editing',
    img: 'photo-1618329027137-a520b57c6606',
    imgAlt: 'Dark video editing workstation',
    desc: 'Podcasts, tutorials, interviews, and documentary content edited from raw footage to final export. Multi-camera sync, audio cleanup, B-roll, chapter markers, and captions handled end-to-end.',
    tags: ['Podcasts', 'Tutorials', 'Multi-camera'],
  },
  {
    title: 'Short-form Content',
    img: 'photo-1611162616475-46b635cb6868',
    imgAlt: 'Social media content creation setup',
    desc: 'YouTube Shorts, Reels, and TikToks cut from longer footage or standalone clips. Optimised for each platform with hooks, captions, safe zones, and upload-ready file specs.',
    tags: ['Reels', 'Shorts', 'TikTok'],
  },
  {
    title: 'Colour Grading',
    img: 'photo-1536240478700-b869ad10e128',
    imgAlt: 'Color grading monitor in dark studio',
    desc: 'Consistent colour treatment built to your brand palette in DaVinci Resolve or Premiere Pro. Every edit maintains the same visual identity. LUT files provided for internal use.',
    tags: ['DaVinci Resolve', 'Premiere Pro', 'LUTs'],
  },
  {
    title: 'Captions & Subtitles',
    img: 'photo-1598387993441-a364f854c3e1',
    imgAlt: 'Laptop showing video with captions',
    desc: 'AI-generated captions reviewed and corrected manually for accuracy. Burnt-in for social, SRT files for accessibility platforms. Styled to match your brand. Multilingual available on request.',
    tags: ['SRT', 'Burnt-in', 'Styled'],
  },
  {
    title: 'Thumbnail Design',
    img: 'photo-1611532736597-de2d4265fba3',
    imgAlt: 'YouTube thumbnail mockup on screen',
    desc: 'Click-through-optimised thumbnails using your brand fonts, colours, and logo. Template-based for fast turnaround. Delivered at YouTube spec and sized for desktop and mobile viewports.',
    tags: ['YouTube', 'A/B tested', 'Brand-consistent'],
  },
  {
    title: 'Talking Head Cleanup',
    img: 'photo-1590650153855-d9e808231d41',
    imgAlt: 'Professional video recording setup',
    desc: 'Colour correction, audio denoise, background removal, and optional filler-word cuts for LinkedIn, education, and brand content. Captions styled to platform. Broadcast quality from minimal equipment.',
    tags: ['Background removal', 'Denoise', 'LinkedIn'],
  },
]

const process = [
  {
    n: '01',
    t: 'Brief',
    d: 'We start by establishing exactly what the edit needs to accomplish: the target audience, the core message, the platform the video will live on, and what source material you can provide. A written brief confirms the scope, the required deliverables, and the deadline before any footage is touched, preventing misaligned output at the review stage.',
  },
  {
    n: '02',
    t: 'First Cut',
    d: 'The brief drives the first assembly cut. We work through the source footage, make structural decisions about pacing and narrative flow, apply an initial colour pass, and produce a first cut that covers all the agreed deliverables. This cut is delivered for feedback via a shared review link with frame-accurate commenting so your notes tie to specific moments.',
  },
  {
    n: '03',
    t: 'Revisions',
    d: 'Feedback from the first cut is collected in a structured format that maps comments to timecode. We work through the revision list methodically, addressing pacing notes, structural changes, and stylistic adjustments within the agreed revision scope. The revised cut is returned with a change log so you can verify each note was addressed before sign-off.',
  },
  {
    n: '04',
    t: 'Delivery',
    d: 'Final files are exported in the formats and resolutions specified in the brief: platform-native for immediate upload, archival masters for your internal library. Delivery includes any supporting assets: thumbnail source files, SRT caption files, upload metadata, and short-form clip variants. We document the production specs for consistency on every future edit.',
  },
]

const faqs = [
  {
    q: 'What does the team need from us before production starts?',
    a: 'Before production begins we need your raw footage via shared drive or transfer link, your brand asset pack including logos, fonts, and colour palette, at least three style reference videos with specific notes on what to replicate, the target platform and required aspect ratios, your intended video duration or duration range, and any deadline or checkpoint dates. A complete brief at the start means fewer revision rounds and a first cut that lands closer to what you had in mind. We confirm receipt of all materials and flag any gaps before scheduling the edit into production.',
  },
  {
    q: 'Which formats, lengths and platforms should we prioritize first?',
    a: 'That depends on where your audience is most active and where the production effort returns the most value. For most businesses, the priority order is: the primary long-form format for your main platform, followed by short-form clips cut from that source material, followed by standalone short-form content for secondary platforms. We recommend starting with one format and one platform, establishing a repeatable production process for it, then expanding. The strategy call is the right place to work through this based on your specific audience, content goals, and the source material you can realistically produce.',
  },
  {
    q: 'How are revisions, brand assets and approvals handled?',
    a: 'Revision rounds are scoped in the brief before production starts. The standard engagement includes two revision rounds per deliverable, covering structural and stylistic changes. Requests that fall outside the agreed scope are quoted separately. Brand assets are stored securely on our side for the duration of the engagement and applied consistently across every deliverable. Approvals are handled via a shared review system where you can leave timestamped comments directly on the video rather than describing changes in a separate document. We confirm each revision has been addressed before sending the next version.',
  },
  {
    q: 'Can you match an existing editing style?',
    a: 'Yes. Provide three to five reference videos with specific notes on what to replicate: pacing, cut frequency, transition style, colour tone, caption treatment, and text animation approach. The more precise your references and notes, the closer the first cut will be to what you are aiming for. We match existing styles regularly for clients who have an established editing aesthetic and need higher-volume production without changing the look. If you do not have a reference style yet, we can develop one during an onboarding phase and document it as a style guide that every subsequent editor follows.',
  },
]

export default function VideoEditing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1765539160785-e7953620488f', 900, 700)} alt="Video editing neon workspace"
            className="w-full h-full object-cover" style={{ opacity: 0.22, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 15%, transparent 50%, #050B18 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050B18 0%, transparent 10%, transparent 90%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/content-creation/" className="hover:text-[#3ECF9E] transition-colors">Content Creation</Link>
              <span>/</span>
              <span className="text-gray-300">Video Editing</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Video Editing
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              Video editing services for short and<br />
              <span className="gradient-text">long-form content.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
              Long-form editing for interviews, podcasts, and webinars, plus short-form repurposing for social. Raw footage in, platform-ready exports out, on a predictable schedule.
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
        </div>
      </section>

      {/* Stats bar */}
      <div className="py-6 relative overflow-hidden" style={{ background: 'rgba(62,207,158,0.04)', borderTop: '1px solid rgba(62,207,158,0.1)', borderBottom: '1px solid rgba(62,207,158,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['48h', 'First cut turnaround'], ['2', 'Revision rounds'], ['4K', 'Max resolution output'], ['All', 'Major platforms covered']].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-black text-2xl gradient-text-mint">{val}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated timeline visual */}
      <div className="relative overflow-hidden py-8" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="glass-card rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
            <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#3ECF9E' }}>Editing timeline</div>
            <div className="flex items-center gap-1 h-10">
              {Array.from({ length: 80 }, (_, i) => {
                const h = 20 + Math.sin(i * 0.4) * 15 + Math.sin(i * 0.15) * 12 + Math.random() * 8
                return (
                  <div key={i} className="flex-1 rounded-sm"
                    style={{
                      height: `${Math.max(8, h)}%`,
                      background: i > 20 && i < 55 ? '#3ECF9E' : 'rgba(62,207,158,0.25)',
                      animation: `floatY ${0.5 + (i % 7) * 0.1}s ease-in-out ${(i % 5) * 80}ms infinite alternate`,
                    }} />
                )
              })}
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="text-gray-500 text-xs">00:00</div>
              <div className="flex-1 h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="h-0.5 rounded-full w-[45%]" style={{ background: '#3ECF9E' }} />
              </div>
              <div className="text-gray-500 text-xs">12:34</div>
              <div className="flex items-center gap-1.5 ml-auto">
                <div className="w-2 h-2 rounded-sm" style={{ background: '#3ECF9E', opacity: 0.9 }} />
                <div className="text-xs text-gray-400">Selected range</div>
                <div className="w-2 h-2 rounded-sm ml-2" style={{ background: 'rgba(62,207,158,0.25)' }} />
                <div className="text-xs text-gray-500">Full clip</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              What We Deliver
            </span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six editing services. <span className="gradient-text">One consistent quality bar.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every format your content strategy requires, handled by experienced editors who understand platform requirements and brand consistency.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col group">
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <img src={unsplash(d.img, 600, 350)} alt={d.imgAlt} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.65 }} />
                    <div className="absolute inset-0 img-fade-bottom" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-black text-lg text-white mb-2">{d.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{d.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {d.tags.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.18)', color: '#a8f0da' }}>
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

      {/* Process */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-30" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              How every edit <span className="gradient-text">gets made.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 card-lift relative overflow-hidden">
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

      {/* What the editing process looks like in practice */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What the editing process <span className="gradient-text">looks like in practice.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-base mb-4">Starting from a complete brief</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Most video editing projects involve more back-and-forth than the client anticipated, and the reason is almost always the same: the brief was incomplete, and the first cut exposed gaps in what was agreed. At Innoventix Hub, the brief stage is treated as a production document, not a conversation. Before any footage is touched, we confirm the target platform, the required output formats, the style reference, the deadline, and the approval chain. That document becomes the reference for every editorial decision made during the edit, so there is a clear standard to check the work against rather than a vague sense of what was discussed.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-base mb-4">How the first cut works</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  The first cut is not a rough draft. It is a complete, structurally sound version of the video that addresses every item in the brief. We deliver it with a short cover note explaining the key editorial decisions, so you can give precise feedback rather than general impressions. Feedback is collected via timestamped comments tied to a specific moment in the video rather than described in paragraph form. This format makes the revision process faster and reduces the chance of a change being applied to the wrong section. The second cut addresses every note in sequence, and a change log confirms what was updated.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-base mb-4">What final delivery includes</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Final delivery is more than a video file. It includes every asset the video needs to go live: the caption file formatted for the target platform, the thumbnail at the correct resolution, the metadata draft for the upload, and any short-form clips that were part of the scope. We package and label everything clearly so the upload step can be handled by you or by a team member who was not involved in the production. A delivery note documents the file specs and production settings used so future edits can match the same standard without starting from scratch.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to provide */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
                <img src={unsplash('photo-1610716632424-4d45990bcd48', 700, 400)} alt="Video editor at workstation"
                  className="w-full h-full object-cover" style={{ opacity: 0.55 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,11,24,0.85))' }} />
                <div className="absolute bottom-3 left-4 text-white font-display font-bold text-sm">Professional editing setup</div>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Brief Checklist</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What to send us<br />
                <span className="gradient-text">before we start.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">A complete brief up front means fewer revision rounds and a first cut that hits closer to what you envisioned. The more detail you give, the better the result.</p>
              <div className="space-y-3">
                {['Raw footage files or a shared drive link', 'Target platform and required aspect ratios', 'Intended video duration or range', 'Three to five style reference videos with specific notes', 'Brand assets: logo, fonts, colours, existing templates', 'Caption requirements: burnt-in, SRT, or both', 'Deadline and any intermediate checkpoint dates', 'Who approves and how many revision rounds are included'].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: '#3ECF9E' }}>+</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Common <span className="gradient-text">questions.</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="glass-card rounded-2xl p-5 card-lift">
                    <h3 className="font-display font-bold text-white text-sm mb-2">{faq.q}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-16 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Ready to publish<br />
                  <span className="gradient-text">consistently?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call and we will outline a video editing workflow that fits your production cadence, your platform requirements, and your publishing schedule. We will review your current footage and brief and confirm whether the scope is a good fit before committing to an engagement.</p>
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
