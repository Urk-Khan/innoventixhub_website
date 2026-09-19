import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  {
    title: 'Channel Strategy',
    desc: 'Niche positioning, content pillars, publishing cadence, and keyword targets documented in a strategy brief. Reviewed and updated each month based on performance data.',
    icon: '◈',
  },
  {
    title: 'Script Development',
    desc: 'SEO-researched scripts written to your voice and search intent. Multiple hook variations tested per topic. Body structure built for retention with pattern interrupts.',
    icon: '◇',
  },
  {
    title: 'Editing & Post-production',
    desc: 'Full editing with captions, thumbnails, end screens, B-roll, and colour grade delivered as a complete upload package. Works from script so pacing stays faithful.',
    icon: '⬡',
  },
  {
    title: 'Upload & SEO',
    desc: 'Optimised titles, descriptions, tags, and chapter markers on every upload. Scheduled at peak audience activity times. You keep full channel access throughout.',
    icon: '⬟',
  },
  {
    title: 'Performance Reporting',
    desc: 'Monthly analytics review covering views, CTR, watch time, and retention curves, with specific adjustments to the content plan for the following cycle.',
    icon: '◆',
  },
  {
    title: 'Community Management',
    desc: 'Comment responses, community post drafts, and comment moderation as an optional add-on once channel activity exceeds what you can manage personally.',
    icon: '▲',
  },
]

const tiers = [
  {
    name: 'Starter',
    output: '4 videos/month',
    features: ['Script development', 'Full video editing', 'Thumbnails', 'SEO optimisation', 'Monthly report'],
  },
  {
    name: 'Growth',
    output: '8 videos/month',
    features: ['Everything in Starter', 'Short-form clips from long-form', 'A/B thumbnail testing', 'Community posts', 'Bi-weekly strategy call'],
    highlight: true,
  },
  {
    name: 'Authority',
    output: '12+ videos/month',
    features: ['Everything in Growth', 'Podcast or interview format', 'Cross-platform repurposing', 'Analytics deep-dive', 'Dedicated channel manager'],
  },
]

export default function YouTubeAutomation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1611162616475-46b635cb6868', 800, 700)} alt="YouTube content creation"
            className="w-full h-full object-cover" style={{ opacity: 0.18, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 30%, transparent 70%, #050B18)' }} />
        </div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/content-creation/" className="hover:text-[#3ECF9E] transition-colors">Content Creation</Link>
              <span>/</span>
              <span className="text-gray-300">YouTube Automation</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              YouTube Automation
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              YouTube production and<br />
              <span className="gradient-text">channel operations.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
              Full YouTube channel management from strategy to scheduled upload. You provide the subject matter — we handle scripting, editing, thumbnails, optimisation, and monthly analytics reporting.
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
            {[['4-12', 'Videos per month'], ['48h', 'First cut turnaround'], ['100%', 'Platform-optimised'], ['Monthly', 'Analytics reports']].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-black text-2xl gradient-text-mint">{val}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six channel disciplines. <span className="gradient-text">Fully managed.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We handle every part of the YouTube content operation, from the strategy document to the final scheduled upload, as a single coordinated service.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center font-mono text-xl"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)', color: '#3ECF9E' }}>
                    {s.icon}
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Three output levels. <span className="gradient-text">Pick your cadence.</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">All tiers include full end-to-end management. Pricing is scoped on a per-engagement basis after the strategy call.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 80} direction="scale">
                <div className={`rounded-3xl p-8 h-full flex flex-col ${tier.highlight ? 'relative' : 'glass-card card-lift'}`}
                  style={tier.highlight ? {
                    background: 'linear-gradient(135deg, rgba(62,207,158,0.12), rgba(124,58,237,0.08))',
                    border: '1px solid rgba(62,207,158,0.4)',
                  } : {}}>
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xs font-bold px-4 py-1 rounded-full" style={{ background: '#3ECF9E', color: '#050B18' }}>Most Popular</span>
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="font-display font-black text-2xl text-white mb-1">{tier.name}</div>
                    <div className="text-sm font-medium" style={{ color: '#3ECF9E' }}>{tier.output}</div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.15)' }}>
                          <svg className="w-2.5 h-2.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book/" className={`mt-8 block text-center py-3 rounded-full font-display font-bold text-sm transition-all ${tier.highlight ? '' : 'hover:border-[#3ECF9E] hover:text-[#3ECF9E]'}`}
                    style={tier.highlight
                      ? { background: '#3ECF9E', color: '#050B18' }
                      : { border: '1px solid rgba(62,207,158,0.3)', color: '#3ECF9E' }}>
                    Get started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why channel management matters */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Why It Matters</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                The problem with<br />
                <span className="gradient-text">doing it yourself.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Most businesses start a YouTube channel, publish six videos when they have time, then go quiet for three months when priorities shift. The algorithm punishes inconsistency, and the channel never builds momentum.</p>
                <p>The reason is not motivation. It is that the production process is genuinely time-consuming: scripting takes hours, editing takes more hours, SEO research takes more again. For a business owner, that is time not spent running the business.</p>
                <p>Our YouTube automation service removes you from the production loop. You record or supply the footage. We handle everything else from script to scheduled upload, at a publishing frequency your channel can actually sustain.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="relative h-72 lg:h-80 rounded-3xl overflow-hidden">
                <img src={unsplash('photo-1611162616475-46b635cb6868', 700, 500)} alt="YouTube content management"
                  className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(5,11,24,0.8))' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display font-bold text-white text-lg mb-1">Channel-as-a-system</div>
                  <div className="text-gray-300 text-sm">Strategy, production, and publishing operating as one coordinated pipeline</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What channel management actually involves */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What channel management <span className="gradient-text">actually involves.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The phrase gets used loosely. Here is what we mean by it and what it takes to operate a channel as a proper system.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal delay={0}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-lg mb-3">What automation actually means here</h3>
                <p className="text-gray-400 leading-relaxed">
                  The phrase "YouTube automation" is used to describe two different things. In some contexts it refers to software tools that automate parts of the publishing workflow. In how Innoventix Hub uses the term, it refers to removing the creator or business owner from the day-to-day production cycle. The channel still requires human editorial judgment, creative decisions, and performance analysis. What is removed from your plate is the execution: scripting, editing, uploading, optimising, and reporting are all handled by a managed team that operates to a defined schedule without requiring your direct involvement each week.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-lg mb-3">Why publishing cadence matters more than quality alone</h3>
                <p className="text-gray-400 leading-relaxed">
                  A YouTube channel that publishes consistently over 12 months almost always outperforms one that publishes sporadically, regardless of individual video production quality. The platform rewards publishing cadence because it creates a predictable audience return pattern. Businesses that manage their own channel often publish well for the first two months, then go quiet when a campaign, product launch, or busy quarter takes priority. The channel loses momentum and the audience it had started to build. A managed channel maintains its cadence through those periods because the production pipeline does not depend on the business owner's availability at any given week.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-lg mb-3">The operational layer most people underestimate</h3>
                <p className="text-gray-400 leading-relaxed">
                  The operational side of channel management is invisible to the viewer but it is where most self-managed channels lose time. It includes maintaining the content calendar, tracking keyword rankings, monitoring competitor channels, scheduling recording sessions, managing the review and approval cycle for each video, tracking what has been published and what is in production, and staying current with platform policy and algorithm changes. Each of these tasks is small individually but together they account for several hours per week that the business owner does not have to spare.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-lg mb-3">Channel management as a compounding asset</h3>
                <p className="text-gray-400 leading-relaxed">
                  Channel management is an investment in a compounding content asset. Unlike paid advertising, where traffic stops the moment the budget does, a YouTube channel accumulates watch time, search rankings, and subscriber relationships over time. A video published 18 months ago still drives views today if it targeted the right keyword and was optimised correctly at the time of upload. The management service is designed to build that asset systematically and sustainably, at a publishing cadence and production quality your channel can maintain month after month without burning out the people responsible for it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What full YouTube automation covers */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>What Is Covered</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What full YouTube automation<br />
              <span className="gradient-text">covers.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every component of the production cycle, managed end to end as a single coordinated service.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: '01', t: 'Scripting and brief', d: "SEO-researched scripts written to your voice and audience, each beginning from a confirmed keyword or topic with a defined traffic opportunity." },
              { n: '02', t: 'Video editing', d: "Full post-production including captions, B-roll, colour grade, audio master, end screens, and cards, delivered as a complete upload package." },
              { n: '03', t: 'SEO-optimised title and description', d: "Title options evaluated against CTR benchmarks for your niche, descriptions structured for both viewer readability and platform indexing." },
              { n: '04', t: 'Thumbnail design', d: "Thumbnails designed to work with the title as a combined click signal, using your brand colours and a visual template refined for your audience." },
              { n: '05', t: 'Upload scheduling', d: "Videos uploaded at the day and time your analytics indicate your audience is most active, with all metadata applied before the publish window opens." },
              { n: '06', t: 'Monthly performance report', d: "Views, watch time, CTR, subscriber growth, and retention curves reviewed with a written interpretation and a list of adjustments for the following cycle." },
            ].map((card, i) => (
              <ScrollReveal key={card.n} delay={i * 60} direction="scale">
                <div className="glass-card rounded-2xl p-6 card-lift h-full">
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{card.n}</span>
                  </div>
                  <h3 className="font-display font-black text-base text-white mb-2">{card.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you need to provide */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>What You Provide</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What you need<br />
                <span className="gradient-text">to provide.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                The service is designed to remove you from the production loop, but a small set of inputs from you is required to make it work. These are defined at the start of the engagement and do not change week to week.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-3">
                {[
                  "Define your content niche and the audience you are publishing for",
                  "Provide 3 to 5 reference channels with notes on what to replicate and what to avoid",
                  "Approve the first 3 scripts before production ramps to full cadence",
                  "Name one decision-maker for approvals so feedback moves without delay",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl glass-card card-lift">
                    <span className="font-mono font-bold shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-16 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-8">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Related Reading</span>
            <h2 className="font-display font-black text-3xl text-white">Further reading on YouTube production.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { label: 'YouTube Production Workflow', href: '/resources/youtube-production-workflow/' },
              { label: 'Video Editing Brief', href: '/resources/video-editing-brief/' },
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
                  Ready to publish<br />
                  <span className="gradient-text">without the grind?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call and we will audit your existing channel, identify your content opportunity, and scope a management plan that fits your publishing goals and your budget. We confirm fit before committing to an engagement.</p>
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
