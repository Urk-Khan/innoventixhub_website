import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  {
    title: 'Custom Web Apps',
    desc: 'SaaS dashboards, client portals, booking systems, and internal tools on React and Next.js. TypeScript throughout, Supabase database layer, CI/CD pipeline, and automation-ready architecture from day one.',
    href: '/web-development/custom/',
    tags: ['React', 'Next.js', 'SaaS'],
    img: 'photo-1498050108023-c5249f4df085',
    imgAlt: 'MacBook displaying code on screen',
  },
  {
    title: 'WordPress Development',
    desc: 'Custom themes coded by hand, minimal plugins, and a measured performance baseline. WooCommerce builds, custom post types, REST endpoints, and full migration work covered.',
    href: '/web-development/wordpress/',
    tags: ['WordPress', 'WooCommerce', 'Performance'],
    img: 'photo-1547658719-da2b51169166',
    imgAlt: 'Web design workspace with mouse and keyboard',
  },
  {
    title: 'Web Design & UX',
    desc: 'Information architecture, Figma wireframes, and high-fidelity UI design before any code is written. Includes a component library for every SaaS or custom application project.',
    href: '/web-development/web-design-ux/',
    tags: ['UX Design', 'UI', 'Figma'],
    img: 'photo-1561070791-2526d30994b5',
    imgAlt: 'Design mockup on tablet and desktop screens',
  },
]

const capabilities = [
  'React 18+ and Next.js 14+',
  'TypeScript throughout',
  'REST and GraphQL APIs',
  'Supabase and PostgreSQL',
  'Stripe and payment integrations',
  'SEO and Core Web Vitals',
  'CI/CD deployment pipelines',
  'Automation layer integration',
]

const faqs = [
  {
    q: 'How long does a typical web project take?',
    a: "Project timelines depend heavily on scope. A focused landing page or brochure site can be delivered in two to three weeks. A WordPress build with WooCommerce and custom plugin work typically runs four to eight weeks. A React or Next.js custom web application with authentication, a database layer, and third-party integrations usually takes eight to sixteen weeks. We scope every project before any work begins and give you a realistic timeline with milestones, not a best-case estimate that slips.",
  },
  {
    q: 'Do you work with existing codebases?',
    a: "Yes. A significant portion of the work at Innoventix Hub involves taking over an existing project, improving its performance, extending its functionality, or refactoring the architecture to allow the product to grow. We conduct a technical audit before quoting on any takeover work so you know exactly what you are inheriting and what the path forward looks like.",
  },
  {
    q: 'Can you build both the web application and the automation workflows?',
    a: "Yes, and this is one of the core reasons clients work with Innoventix Hub rather than a conventional web agency. We build the web layer and the automation layer as a connected system. This means your web application can trigger CRM updates, pass leads into n8n workflows, connect to voice agent systems, and surface data from your operational tools, all without needing a separate integration contractor to wire things together after the fact.",
  },
  {
    q: 'What happens after the project launches?',
    a: "We offer post-launch support windows as part of every engagement. Beyond that, we provide ongoing maintenance retainers for WordPress sites and custom applications that need regular updates, security monitoring, and feature development. Every project is handed over with documentation covering the architecture, the deployment process, and the integration points, so you are never dependent on us for day-to-day operation.",
  },
]

export default function WebDevelopment() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                Web Development
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
                Web development for websites<br />
                <span className="gradient-text">and business applications.</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
                Custom React and Next.js applications, WordPress sites, and UX-led interface design. Umer Hashmi leads every project from initial scope to production deployment, with automation integration built in from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/web-development/portfolio/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  View Portfolio
                </Link>
              </div>
            </ScrollReveal>

            <div className="hidden lg:flex items-center justify-center">
              <svg viewBox="0 0 440 360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '440px', height: 'auto' }}>
                <defs>
                  <clipPath id="wd-browser-clip">
                    <rect x="28" y="44" width="294" height="216" rx="10" />
                  </clipPath>
                  <style>{`
                    @keyframes wd-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
                    @media(prefers-reduced-motion:no-preference){
                      .wd-badge1{animation:wd-float 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .wd-badge2{animation:wd-float 2.8s ease-in-out 1.2s infinite;transform-box:fill-box;transform-origin:50% 50%}
                      .wd-cursor{animation:wd-float 3.5s ease-in-out 0.6s infinite;transform-box:fill-box;transform-origin:50% 50%}
                    }
                  `}</style>
                </defs>
                <rect x="28" y="44" width="294" height="216" rx="10" fill="#0D1F3C" stroke="#1D3A6E" strokeWidth="1.5" />
                <rect x="28" y="44" width="294" height="34" rx="10" fill="#0B1220" />
                <rect x="28" y="66" width="294" height="12" fill="#0B1220" />
                <circle cx="50" cy="61" r="5" fill="#ff5f57" />
                <circle cx="68" cy="61" r="5" fill="#febc2e" />
                <circle cx="86" cy="61" r="5" fill="#28c840" />
                <rect x="103" y="52" width="188" height="18" rx="9" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
                <rect x="113" y="59" width="75" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
                <g clipPath="url(#wd-browser-clip)">
                  <rect x="28" y="78" width="68" height="182" fill="#050B18" />
                  <rect x="38" y="92" width="48" height="6" rx="3" fill="rgba(62,207,158,0.4)" />
                  <rect x="38" y="106" width="40" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                  <rect x="38" y="118" width="44" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                  <rect x="38" y="130" width="36" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                  <rect x="38" y="142" width="42" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                  <line x1="96" y1="78" x2="96" y2="260" stroke="#1D3A6E" strokeWidth="1" />
                  <rect x="96" y="78" width="226" height="182" fill="#050B18" />
                  <rect x="96" y="78" width="226" height="28" fill="#0D1F3C" />
                  <rect x="106" y="88" width="58" height="5" rx="2.5" fill="rgba(62,207,158,0.5)" />
                  <rect x="284" y="85" width="30" height="10" rx="5" fill="#3ECF9E" opacity="0.75" />
                  <rect x="106" y="120" width="88" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
                  <rect x="106" y="134" width="128" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
                  <rect x="106" y="144" width="108" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
                  <rect x="106" y="154" width="92" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
                  <rect x="106" y="170" width="96" height="68" rx="6" fill="#0D1F3C" stroke="rgba(62,207,158,0.15)" strokeWidth="1" />
                  <rect x="210" y="170" width="96" height="68" rx="6" fill="#0D1F3C" stroke="rgba(62,207,158,0.15)" strokeWidth="1" />
                  <rect x="114" y="182" width="52" height="4" rx="2" fill="rgba(62,207,158,0.38)" />
                  <rect x="114" y="192" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
                  <rect x="114" y="200" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
                  <rect x="218" y="182" width="52" height="4" rx="2" fill="rgba(62,207,158,0.38)" />
                  <rect x="218" y="192" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
                  <rect x="218" y="200" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
                </g>
                <rect x="255" y="214" width="152" height="116" rx="8" fill="#080F1E" stroke="#1D3A6E" strokeWidth="1.5" />
                <rect x="255" y="214" width="152" height="22" rx="8" fill="#0D1F3C" />
                <rect x="255" y="228" width="152" height="8" fill="#0D1F3C" />
                <circle cx="267" cy="225" r="3" fill="#3ECF9E" opacity="0.55" />
                <rect x="278" y="221" width="52" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
                <rect x="265" y="246" width="100" height="3" rx="1.5" fill="rgba(62,207,158,0.5)" />
                <rect x="265" y="256" width="74" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
                <rect x="265" y="266" width="120" height="3" rx="1.5" fill="rgba(255,255,255,0.14)" />
                <rect x="265" y="276" width="84" height="3" rx="1.5" fill="rgba(62,207,158,0.28)" />
                <rect x="265" y="286" width="58" height="3" rx="1.5" fill="rgba(255,255,255,0.11)" />
                <rect x="265" y="296" width="95" height="3" rx="1.5" fill="rgba(255,255,255,0.14)" />
                <g className="wd-cursor">
                  <path d="M238 194 L238 212 L242 208 L246 218 L249 217 L245 207 L251 207 Z" fill="white" opacity="0.72" />
                </g>
                <g className="wd-badge1">
                  <rect x="350" y="86" width="64" height="22" rx="11" fill="#0D1F3C" stroke="rgba(62,207,158,0.38)" strokeWidth="1" />
                  <text x="382" y="101" textAnchor="middle" fontSize="9" fill="#3ECF9E" fontFamily="monospace" fontWeight="600">React</text>
                </g>
                <g className="wd-badge2">
                  <rect x="344" y="136" width="76" height="22" rx="11" fill="#0D1F3C" stroke="rgba(62,207,158,0.38)" strokeWidth="1" />
                  <text x="382" y="151" textAnchor="middle" fontSize="9" fill="#3ECF9E" fontFamily="monospace" fontWeight="600">Next.js</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Three specialisms. <span className="gradient-text">One delivery team.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom web apps, WordPress builds, and UX design are distinct disciplines with different tools and different decision-making rhythms. At Innoventix Hub they share the same engineering lead, the same quality standards, and the same goal: a web presence that works as hard as the rest of your business.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Link to={s.href} className="block group">
                  <div className={`glass-card rounded-3xl overflow-hidden card-lift grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-52 lg:h-auto min-h-[220px] overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img src={unsplash(s.img, 600, 400)} alt={s.imgAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ opacity: 0.65 }} loading="lazy" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,11,24,0.4))' }} />
                    </div>
                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h3 className="font-display font-black text-2xl text-white mb-3 group-hover:text-[#3ECF9E] transition-colors">{s.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map(t => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)', color: '#a8f0da' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 text-sm font-medium text-gray-500 group-hover:text-[#3ECF9E] transition-colors flex items-center gap-1">
                        Explore service <span style={{ color: '#3ECF9E' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-20" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Technical Stack</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Modern stack.<br />
                <span className="gradient-text">Production standards.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Every project is built with the same engineering discipline: TypeScript throughout, CI/CD deployment, performance budgets tracked, and an integration layer ready for the automation workflows we build alongside.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                React 18 and Next.js 14 give us the rendering flexibility to build anything from a fast static marketing page to a real-time collaborative application with server-sent events. TypeScript is non-negotiable: it prevents the class of runtime errors that cost weeks of debugging and makes the codebase maintainable for every developer who touches it after launch.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Umer Hashmi leads every web project. You work with a senior developer, not a junior executing a hand-off from a designer who has never written production code.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c, i) => (
                  <div key={c} className="glass-card rounded-xl p-4 flex items-center gap-3 card-lift"
                    style={{ animationDelay: `${i * 50}ms` }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#3ECF9E' }} />
                    <span className="text-gray-300 text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How web projects connect */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Integration</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              How web projects connect to<br />
              <span className="gradient-text">the rest of the system.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0}>
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>01</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">Automation integration from day one</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Web forms, contact pages, and booking interfaces are not isolated endpoints. At Innoventix Hub, every web form is built with a webhook or API endpoint that connects directly to your CRM, your n8n workflow, or your GoHighLevel pipeline. When a lead submits a form on your website, that data flows immediately into your automation system without manual copying or CSV imports. This is not something we retrofit after launch: the integration architecture is part of the initial scope conversation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>02</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">Performance requirements for lead-generating sites</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A website that sits at the top of a lead generation funnel has different performance requirements than one that exists for brand awareness. Slow load times directly affect conversion rates and ad quality scores. Every Innoventix Hub website is built with a performance budget: we target fast load times, minimal JavaScript overhead where it is not needed, and image delivery that does not penalise mobile users. For sites running paid traffic, this is an engineering requirement, not an optional optimisation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={160}>
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>03</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">Custom portals for voice agent dashboards</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Businesses that run voice agent systems need a way for their team to monitor call activity, review transcripts, update agent configurations, and see performance metrics in one place. Innoventix Hub builds custom web portals purpose-built for this use case: authenticated interfaces that surface data from your voice AI infrastructure, display live call status, and allow configuration changes without touching the underlying system directly. These portals are React applications connected via API to your voice agent back-end, with role-based access for different team members.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={240}>
              <div className="glass-card rounded-2xl p-8 card-lift h-full">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>04</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">Deployment practices that prevent downtime</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every web project at Innoventix Hub ships with a CI/CD pipeline configured from the first commit. Changes to the codebase go through automated checks before they reach production. Deployments to Vercel or Cloudflare are previewed in a staging environment before the live site is touched. Database schema changes are handled with migrations, not manual edits. The result is a web application you can update confidently rather than one where every deployment is a risk.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Common questions about<br />
              <span className="gradient-text">web development.</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift">
                  <h3 className="font-display font-bold text-white text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing the right build approach */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Build Approach</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Choosing the right<br />
              <span className="gradient-text">build approach.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The technology choice follows the requirement. Here is how to think about which approach fits your project before the first conversation.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0} direction="scale">
              <div className="glass-card rounded-2xl p-8 h-full card-lift flex flex-col">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>01</span>
                </div>
                <h3 className="font-display font-black text-xl text-white mb-4">Custom React / Next.js</h3>
                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed flex-1">
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>SaaS products with authenticated user views and role-based access</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Client portals and internal tools that replace spreadsheet workflows</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Applications with real-time data, complex state, or deep third-party integrations</li>
                </ul>
                <Link to="/web-development/custom/" className="mt-6 text-sm font-medium flex items-center gap-1" style={{ color: '#3ECF9E' }}>
                  Custom development <span>{"→"}</span>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80} direction="scale">
              <div className="glass-card rounded-2xl p-8 h-full card-lift flex flex-col">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>02</span>
                </div>
                <h3 className="font-display font-black text-xl text-white mb-4">WordPress</h3>
                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed flex-1">
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Content sites where an editorial team publishes regularly without developer help</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>WooCommerce stores with standard product structures and payment flows</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Businesses that need a broad plugin ecosystem for membership, events, or booking</li>
                </ul>
                <Link to="/web-development/wordpress/" className="mt-6 text-sm font-medium flex items-center gap-1" style={{ color: '#3ECF9E' }}>
                  WordPress development <span>{"→"}</span>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160} direction="scale">
              <div className="glass-card rounded-2xl p-8 h-full card-lift flex flex-col">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                  <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>03</span>
                </div>
                <h3 className="font-display font-black text-xl text-white mb-4">Hybrid (Headless)</h3>
                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed flex-1">
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Brands that need WordPress or a headless CMS for editorial and React for the application layer</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Marketing sites that share a component system with a separate SaaS product</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#3ECF9E' }} className="shrink-0 mt-0.5">+</span>Businesses outgrowing a monolithic WordPress setup but not ready for a full rebuild</li>
                </ul>
                <Link to="/web-development/custom/" className="mt-6 text-sm font-medium flex items-center gap-1" style={{ color: '#3ECF9E' }}>
                  Discuss your setup <span>{"→"}</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How web development connects to the other services */}
      <section className="py-24 relative" style={{ background: '#F7F9FC' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Service Integration</span>
              <h2 className="font-display font-black text-4xl mb-4" style={{ color: '#050B18' }}>
                How web development connects to<br />
                <span className="gradient-text">the other services.</span>
              </h2>
              <p className="leading-relaxed text-base mb-6" style={{ color: '#4B5563' }}>
                A website built at Innoventix Hub is not an isolated deliverable. The architecture decisions made during the web build directly affect how easily your automation workflows, voice agents, and content distribution pipelines can connect to it. Those connections are planned in the initial scope conversation, not added as afterthoughts.
              </p>
              <p className="leading-relaxed text-sm" style={{ color: '#6B7280' }}>
                The result is a web layer that actively participates in your operational system rather than sitting passively as a brochure. Data flows in and out without manual intervention, and your team can see the activity that matters from a single interface.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-5">
                <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(62,207,158,0.15)' }}>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#050B18' }}>Webhook endpoints for automation workflows</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                    Every form, booking interface, and user action that should trigger a downstream process is built with a webhook or API endpoint from the start. When a lead submits your contact form, the data goes directly into your n8n workflow or GoHighLevel CRM without manual handling. CRM field mapping is agreed during the architecture phase so the data lands in the right place from day one.
                  </p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(62,207,158,0.15)' }}>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#050B18' }}>Surfaces for voice agent data</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                    Businesses running voice agents need a place to view call activity, transcripts, and performance data without logging into multiple separate platforms. Custom web portals built at Innoventix Hub are designed from the ground up to receive and display data from your voice agent infrastructure, with role-based access for different team members.
                  </p>
                </div>
                <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid rgba(62,207,158,0.15)' }}>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#050B18' }}>Content distribution considered during architecture</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                    If your content operation publishes video or written content regularly, the web build accounts for how that content will be displayed and distributed. Structured content types, RSS feeds, and API endpoints for headless content delivery are scoped in the initial architecture so the distribution pipeline does not require rework after the site launches.
                  </p>
                </div>
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
            <h2 className="font-display font-black text-3xl text-white">
              Further reading on web development.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: 'WordPress vs Custom Website', href: '/resources/wordpress-vs-custom-website/' },
              { label: 'Web App Development Cost Factors', href: '/resources/web-app-development-cost-factors/' },
              { label: 'SaaS Dashboard UX Checklist', href: '/resources/saas-dashboard-ux-checklist/' },
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
                  Ready to build<br />
                  <span className="gradient-text">something that lasts?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We scope your project, clarify the technical requirements, and give you a realistic timeline and cost estimate.</p>
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
