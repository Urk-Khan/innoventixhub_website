import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const formats = [
  { title: 'AI Avatar Videos', desc: 'Photorealistic AI presenters delivering your script in any language. Ideal for product explainers, onboarding, and ad creatives at scale without recurring presenter costs.' },
  { title: 'Testimonial-style UGC', desc: 'AI-generated testimonial videos that look authentically user-created. Review-style, unboxing, and first-impression formats for paid social and landing pages.' },
  { title: 'Product Demo Videos', desc: 'Clean product demonstrations with AI narration, screen recording overlays, and B-roll. Built for SaaS, e-commerce, and service brands.' },
  { title: 'Faceless YouTube Content', desc: 'Script, voiceover, stock footage, and motion graphics assembled into faceless YouTube videos. Full channel content pipelines without an on-camera presenter.' },
  { title: 'Ad Creative Variations', desc: 'Multiple creative angles and hooks from a single brief. A/B-testable AI UGC ad variants at a fraction of traditional production cost.' },
  { title: 'Multilingual Content', desc: 'AI voiceover and lip-sync translation for your existing video content. Reach international audiences without re-recording with native speakers.' },
]

const comparison = [
  { aspect: 'Production time', traditional: '3-5 days per video', ai: '24-48 hours' },
  { aspect: 'Presenter cost', traditional: 'Per-day talent rate', ai: 'One-time avatar setup' },
  { aspect: 'Language variants', traditional: 'Full re-record required', ai: 'Automated voice clone' },
  { aspect: 'Revision turnaround', traditional: '2-3 days per change', ai: 'Same day' },
  { aspect: 'Volume capacity', traditional: 'Limited by scheduling', ai: 'Unlimited concurrent' },
  { aspect: 'Brand consistency', traditional: 'Varies by talent availability', ai: 'Identical every time' },
]

export default function AiUgc() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        {/* Hero image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1750365919971-7dd273e7b317', 900, 700)} alt="AI content generation"
            className="w-full h-full object-cover animate-float" style={{ opacity: 0.22, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 20%, transparent 55%, #050B18 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050B18 0%, transparent 15%, transparent 85%, #050B18 100%)' }} />
        </div>
        {/* Animated orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(62,207,158,0.06) 50%, transparent 70%)', filter: 'blur(60px)', animation: 'orbitPulse 10s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/content-creation/" className="hover:text-[#3ECF9E] transition-colors">Content Creation</Link>
              <span>/</span><span className="text-gray-300">AI UGC</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              AI UGC
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              AI UGC creative for your<br />
              <span className="gradient-text">brand and campaigns.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
              AI-generated video content that looks authentic and performs. Product demos, testimonials, ad creatives, and faceless YouTube content, produced at a speed and volume traditional production cannot match.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <div className="py-6 relative overflow-hidden" style={{ background: 'rgba(62,207,158,0.04)', borderTop: '1px solid rgba(62,207,158,0.1)', borderBottom: '1px solid rgba(62,207,158,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['24–48h', 'Production turnaround'], ['∞', 'Concurrent variants'], ['20+', 'Languages supported'], ['0', 'Recurring presenter cost']].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-black text-2xl gradient-text-mint">{val}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formats */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six AI content formats. <span className="gradient-text">All production-ready.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Hussain and the Innoventix Hub team have built AI UGC pipelines for brands across e-commerce, SaaS, and service industries.</p>
          </ScrollReveal>

          {/* Visual showcase strip */}
          <ScrollReveal className="mb-10">
            <div className="grid grid-cols-3 gap-3 rounded-3xl overflow-hidden h-52">
              <div className="relative overflow-hidden">
                <img src={unsplash('photo-1676287571987-2f98ced3e6c4', 400, 300)} alt="AI social content" className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,11,24,0.8), transparent)' }} />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold font-display">Social UGC</div>
              </div>
              <div className="relative overflow-hidden">
                <img src={unsplash('photo-1750365919971-7dd273e7b317', 400, 300)} alt="AI product video" className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,11,24,0.8), transparent)' }} />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold font-display">AI Avatar</div>
              </div>
              <div className="relative overflow-hidden">
                <img src={unsplash('photo-1564756296543-d61bebcd226a', 400, 300)} alt="Mobile ad creative" className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,11,24,0.8), transparent)' }} />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold font-display">Ad Creatives</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formats.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              AI UGC vs <span className="gradient-text">traditional production.</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">The economics and logistics of AI-generated content compared to hiring talent and booking production time.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 px-6 py-4" style={{ background: 'rgba(62,207,158,0.08)', borderBottom: '1px solid rgba(62,207,158,0.15)' }}>
                <div className="font-display font-bold text-gray-400 text-sm">Aspect</div>
                <div className="font-display font-bold text-gray-300 text-sm">Traditional</div>
                <div className="font-display font-bold text-sm" style={{ color: '#3ECF9E' }}>AI UGC</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.aspect} className={`grid grid-cols-3 px-6 py-4 ${i < comparison.length - 1 ? '' : ''}`}
                  style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div className="text-gray-400 text-sm font-medium">{row.aspect}</div>
                  <div className="text-gray-500 text-sm">{row.traditional}</div>
                  <div className="text-sm font-medium" style={{ color: '#3ECF9E' }}>{row.ai}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What AI UGC is and is not */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          {/* Animated production speed visual */}
          <ScrollReveal className="mb-14">
            <div className="relative rounded-3xl overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(62,207,158,0.12)' }}>
              <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
              <div className="p-8 grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <img src={unsplash('photo-1578910347624-202a5174601a', 300, 200)} alt="Traditional production" className="w-full h-32 object-cover rounded-xl mb-3" style={{ opacity: 0.5, filter: 'grayscale(0.6)' }} />
                  <div className="text-gray-500 text-sm font-medium">Traditional production</div>
                  <div className="text-gray-400 text-xs mt-1">3–5 days per video</div>
                </div>
                <div className="text-center">
                  {/* Animated arrow */}
                  <div className="flex items-center justify-center gap-2">
                    {[0,1,2,3,4].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full" style={{ background: '#3ECF9E', opacity: 0.3 + i * 0.15, animation: `pulseGlow ${1 + i * 0.2}s ease-in-out infinite` }} />
                    ))}
                    <svg className="w-6 h-6" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="mt-3 text-sm font-bold" style={{ color: '#3ECF9E' }}>10× faster</div>
                </div>
                <div className="text-center">
                  <img src={unsplash('photo-1750365919971-7dd273e7b317', 300, 200)} alt="AI production" className="w-full h-32 object-cover rounded-xl mb-3 glow-mint" style={{ opacity: 0.8 }} />
                  <div className="text-white text-sm font-medium">AI UGC pipeline</div>
                  <div className="text-gray-400 text-xs mt-1" style={{ color: '#3ECF9E' }}>24–48 hours</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal direction="left">
              <h2 className="font-display font-black text-3xl text-white mb-6">
                What AI UGC <span className="gradient-text">is good for.</span>
              </h2>
              <div className="space-y-3">
                {['High-volume ad creative testing across multiple hooks', 'Product explainers that need frequent updates', 'Scaling content to new markets and languages', 'Faceless channels where brand voice matters more than a face', 'Testimonial-style social proof at scale', 'Internal training and onboarding videos'].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.12)' }}>
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <h2 className="font-display font-black text-3xl text-white mb-6">
                When traditional<br />
                <span className="gradient-text">still makes sense.</span>
              </h2>
              <div className="space-y-3">
                {['Brand films requiring genuine human emotion and nuance', 'Event documentation and live coverage', 'C-suite thought leadership where real identity matters', 'High-production-value hero content for major campaigns', 'Interviews requiring real expert credibility on-camera'].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-gray-500 shrink-0 mt-0.5">-</span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What AI UGC is and what it is not */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Clarity</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What AI UGC is and<br />
              <span className="gradient-text">what it is not.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <h3 className="font-display font-black text-xl text-white mb-5" style={{ color: '#3ECF9E' }}>What it is</h3>
                <div className="space-y-3">
                  {[
                    "AI-generated video content for creative advertising and paid social campaigns",
                    "Product demonstration videos produced at a speed and volume traditional production cannot match",
                    "Social content at scale: multiple hooks, formats, and language variants from a single brief",
                    "Faceless channel content where brand voice and visual consistency matter more than an on-camera presenter",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <h3 className="font-display font-black text-xl text-white mb-5">What it is not</h3>
                <div className="space-y-3">
                  {[
                    "Real customer testimonials or verified reviews from genuine purchasers",
                    "Factual endorsements that can be represented as the opinion of an actual person",
                    "Content that bypasses platform disclosure requirements when used in advertising",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-gray-500 shrink-0 mt-0.5">-</span>
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-6 leading-relaxed p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  Platform disclosure requirements apply when AI-generated content is used in paid advertising. We document this clearly at the brief stage and do not produce content intended to mislead viewers about its origin.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use cases for AI UGC */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Use Cases</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Four use cases for<br />
              <span className="gradient-text">AI UGC.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                n: '01',
                t: 'Paid social ad creative variations',
                d: "Multiple hooks, angles, and formats produced from a single brief for Meta and TikTok testing. AI UGC removes the production bottleneck that limits how many creatives a media buyer can test in a given month.",
              },
              {
                n: '02',
                t: 'Faceless YouTube channel content',
                d: "Script, voiceover, and visual assembly for channels where the content and the brand voice matter more than an on-camera presenter. Useful for educational, finance, and review-format channels at publishing cadences traditional production cannot sustain.",
              },
              {
                n: '03',
                t: 'Product demonstration videos',
                d: "Clean product walkthrough videos with AI narration for e-commerce product pages, onboarding flows, and SaaS feature documentation. Produced quickly and updated easily when the product changes.",
              },
              {
                n: '04',
                t: 'Email marketing video personalisation',
                d: "Short personalised video assets for email campaigns where visual content improves open-to-click rates. AI generation makes it practical to produce video at the volume email campaigns require.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.n} delay={i * 70} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift h-full flex gap-5">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{card.n}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-white mb-2">{card.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Further reading on AI UGC.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { label: 'AI UGC vs Creator UGC', href: '/resources/ai-ugc-vs-creator-ugc/' },
              { label: 'AI Product Video Brief', href: '/resources/ai-product-video-brief/' },
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
      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Ready to scale<br />
                  <span className="gradient-text">your video output?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We identify your best AI UGC use case and outline a production workflow.</p>
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
