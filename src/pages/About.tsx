import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ScrollReveal from '../components/ScrollReveal'

const team = [
  {
    name: 'Ubaid ur Rehman',
    role: 'Founder & CEO',
    initials: 'UR',
    color: 'rgba(62,207,158,0.15)',
    bio: 'Ubaid founded Innoventix Hub on the premise that the next decade of business advantage would come from combining human creativity with intelligent automation, not from choosing between them. He leads strategy and client relationships across all four practice areas and is responsible for ensuring that work delivered in one discipline connects meaningfully with work in the others.',
  },
  {
    name: 'Atiq',
    role: 'Automation Specialist',
    initials: 'AT',
    color: 'rgba(124,58,237,0.15)',
    bio: 'Atiq designs and builds the automation workflows that sit at the operational core of client systems. He specialises in n8n, GoHighLevel, and custom API integrations, approaching each build with a focus on transparency and maintainability. His workflows are documented well enough that a non-technical team member can follow what they do and why each step exists.',
  },
  {
    name: 'Haider',
    role: 'Content Production Lead',
    initials: 'HA',
    color: 'rgba(62,207,158,0.12)',
    bio: 'Haider leads content production, overseeing video editing, thumbnail design, and YouTube channel management. He approaches content output as a system rather than a series of individual deliverables: each piece is produced to a consistent format, reviewed against a brief, and prepared for the distribution workflow that follows it. Consistency at scale is the goal.',
  },
  {
    name: 'Hussain',
    role: 'UGC & Voice Specialist',
    initials: 'HU',
    color: 'rgba(124,58,237,0.12)',
    bio: 'Hussain handles AI-generated UGC production and voice agent development, two areas that share a common foundation in prompt engineering, scripting, and output quality control. He builds voice agents on Retell AI and Pipecat for defined business call flows and produces AI UGC formats that integrate cleanly into broader content strategies without overstating what synthetic media is and is not.',
  },
  {
    name: 'Umer Hashmi',
    role: 'Web Development Lead',
    initials: 'UH',
    color: 'rgba(62,207,158,0.1)',
    bio: 'Umer leads web development, responsible for custom React and Next.js applications, WordPress builds, and SaaS dashboard interfaces. He brings design sensibility and engineering rigour to the same project, which reduces the gap between what a design proposes and what development produces. Every site and tool he builds is designed from the start to integrate cleanly with the automation layer.',
  },
]

const values = [
  { title: 'Systems first', icon: '⬡', desc: 'We design for longevity, not just delivery. Every workflow, every site, and every automation is built so your team can understand, maintain, and extend it after we hand it over. A system that only the person who built it can run is not a system: it is a dependency.' },
  { title: 'Honest communication', icon: '◈', desc: 'We tell you when something is not the right fit, when a project needs more time, or when a simpler or cheaper solution would actually serve you better. We would rather lose a piece of work by being honest than take it on and deliver something that does not hold up.' },
  { title: 'AI-native, not AI-hype', icon: '◇', desc: 'We apply AI where it genuinely improves output and reduces cost without creating fragility. We do not bolt AI onto projects as a marketing exercise or because it is in fashion. If the right answer is a simple script or a well-configured off-the-shelf tool, that is what we recommend.' },
  { title: 'Connected delivery', icon: '⬟', desc: 'Our four practice areas are designed to work together and inform each other. When you engage across more than one area, you benefit from integration that a single-service specialist cannot offer. A website built alongside an automation layer behaves differently from one built in isolation.' },
]

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              About Us
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95]">
              Meet the team behind<br />
              <span className="gradient-text">Innoventix Hub.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              A software and media house built across content production, intelligent automation, voice AI, and web development. One connected team across all four disciplines, so every engagement is built to work with the others.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#3ECF9E' }}>Our Story</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">Why we built this</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Ubaid started Innoventix Hub after watching the same pattern repeat across client engagements: companies were buying services from multiple vendors who never communicated with each other, producing systems that worked in isolation but failed as a whole.</p>
                <p>A video production agency delivered content that was never distributed consistently because there was no automation behind it. A web agency built a site with no CRM integration because that was outside their defined scope. An automation consultant set up workflows that no one had been trained to maintain. Each provider had done their job correctly. The client still had a broken system.</p>
                <p>The solution was not to build one more specialist shop. It was to assemble a team capable of covering the full operational stack of modern digital business, and to plan every engagement as a connected system from the first conversation rather than retrofitting integration after each specialist had already shipped their work.</p>
                <p>We operate as a remote team, which keeps our costs lean and gives us access to the right people for each discipline regardless of location. The businesses we work with include service providers, e-commerce brands, software companies, and early-stage startups that need professional capability without enterprise-level overhead or long retainer lock-ins.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 inline-block" style={{ color: '#3ECF9E' }}>Our Approach</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">How we think</h2>
              <div className="space-y-4">
                {values.map((v) => (
                  <div key={v.title} className="glass-card rounded-2xl p-5 flex gap-4 card-lift">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-lg"
                      style={{ background: 'rgba(62,207,158,0.08)', color: '#3ECF9E', border: '1px solid rgba(62,207,158,0.2)' }}>
                      {v.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-white mb-1">{v.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW WE APPROACH A NEW ENGAGEMENT
      ══════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Our Process
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              How we approach a<br />
              <span className="gradient-text">new engagement.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Every project starts the same way: with a clear understanding of the problem before we discuss the solution. Here is what that looks like in practice.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: '01',
                title: 'Discovery call',
                desc: 'We start by understanding the business problem and the current stack. The goal is to identify where the real friction is, which is often different from the presenting issue, and to learn enough about your existing tools and team to scope a realistic solution.',
              },
              {
                n: '02',
                title: 'Scope definition',
                desc: 'We identify which disciplines are needed and in what order. Not every engagement requires all four practice areas. The scope document names the deliverables, the sequence they will be built in, and the connection points between them so you know what to expect before work begins.',
              },
              {
                n: '03',
                title: 'Build',
                desc: 'We execute in documented phases with review checkpoints at each stage. Documentation is part of the build itself rather than a separate task at the end. Every component is built to a standard that makes it maintainable after we hand it over.',
              },
              {
                n: '04',
                title: 'Handover',
                desc: 'We deliver full documentation, walk your team through everything we built, and offer optional ongoing support for the period after launch. The goal is a handover thorough enough that your team can operate and extend the system without requiring us to remain involved.',
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 80}>
                <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden card-lift group">
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity"
                    style={{ color: '#3ECF9E' }}>
                    {step.n}
                  </div>
                  <div className="relative">
                    <span className="font-mono text-xs font-bold tracking-widest block mb-4" style={{ color: '#3ECF9E' }}>{step.n}</span>
                    <h3 className="font-display font-black text-xl text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              The Team
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              Five specialists.<br />
              <span className="gradient-text">One system.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Five specialists covering content, automation, voice AI, and web development. Small enough to move quickly and give every project real attention. Experienced enough to deliver work that holds up in production rather than just in demos.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 70} direction="scale">
                <div className="glass-card rounded-3xl p-8 h-full card-lift relative overflow-hidden group">
                  {/* Large initials watermark */}
                  <div className="absolute -top-2 -right-2 font-display font-black text-8xl leading-none select-none pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ color: '#3ECF9E' }}>
                    {m.initials}
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl mb-5"
                      style={{ background: m.color, border: '1px solid rgba(62,207,158,0.25)', color: '#3ECF9E' }}>
                      {m.initials}
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{m.name}</h3>
                    <p className="text-sm font-medium mb-4" style={{ color: '#3ECF9E' }}>{m.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WORKING WITH US LOOKS LIKE
      ══════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Working Together
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              What to expect.<br />
              <span className="gradient-text">What we need.</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-xl mb-6">What you can expect from us</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Honest timelines', text: 'We scope work based on what it actually takes, not what sounds easy to approve. If a deadline is not realistic, we say so before the project starts rather than after it slips.' },
                    { label: 'Clear documentation', text: 'Every system we build is documented well enough for your team to understand, maintain, and extend it. Nothing we ship requires us to remain involved for it to keep working.' },
                    { label: 'No vendor lock-in', text: 'We build on tools you can own or transfer. We do not engineer dependencies that require you to keep paying us to keep operating the work we delivered.' },
                    { label: 'Connected disciplines', text: 'When you engage across more than one practice area, the work is planned to integrate from the start. You get leverage that separate providers coordinating after the fact cannot offer.' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                      <span className="font-display font-black text-lg shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                      <div>
                        <span className="font-display font-bold text-white text-sm">{item.label}. </span>
                        <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="font-display font-bold text-white text-xl mb-6">What we need from you</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Access to your existing stack', text: 'We need credentials and documentation for the tools you already use. We cannot design a system that integrates with what you have if we cannot see what you have.' },
                    { label: 'A named decision-maker', text: 'Every project needs one person on your side who can approve decisions and sign off on work. Decisions made by committee with no clear owner extend timelines and reduce output quality.' },
                    { label: 'Realistic timelines', text: 'Good automation and well-built voice agents take the time they take. We work efficiently, but we do not cut corners to meet artificial deadlines that compromise the quality of what we hand over.' },
                    { label: 'A brief or problem statement', text: 'We can help you define and refine what you need, but we need a starting point. The best engagements begin with a clear description of the problem, not just a list of features someone wants to buy.' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                      <span className="font-display font-black text-lg shrink-0 mt-0.5" style={{ color: '#3ECF9E' }}>+</span>
                      <div>
                        <span className="font-display font-bold text-white text-sm">{item.label}. </span>
                        <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-16 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Start with a<br />
                  <span className="gradient-text">conversation.</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Book a free 30-minute strategy call. No pressure, no obligation, just a clear-eyed look at how we can help.
                </p>
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
