import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const services = [
  {
    title: 'Custom Theme Development',
    desc: "Bespoke WordPress themes hand-coded without page builders. Clean semantic HTML, PHP templates following WordPress coding standards, Gutenberg block support, mobile-first, and Core Web Vitals-tested before handover.",
  },
  {
    title: 'WooCommerce Builds',
    desc: "Full WooCommerce setup: product catalogue, Stripe and PayPal integration, shipping and tax rules, custom checkout flows, and WooCommerce extensions for variable products, subscriptions, or complex pricing logic.",
  },
  {
    title: 'Plugin Development',
    desc: "Custom plugins for functionality no existing plugin covers correctly. Custom post types, REST API endpoints, admin interfaces, and third-party integrations built to WordPress coding standards with proper sanitisation throughout.",
  },
  {
    title: 'Performance Optimisation',
    desc: "Core Web Vitals rescue for slow WordPress sites. Image optimisation, caching with Redis, CDN setup, JS and CSS deferral, database cleanup, and plugin audit starting from a Lighthouse baseline.",
  },
  {
    title: 'Migration & Redesign',
    desc: "WordPress migrations between hosts, PHP and core version upgrades, and full redesigns that preserve existing URL structure, content, and search rankings. Redirect maps and Search Console verification included.",
  },
  {
    title: 'Maintenance & Support',
    desc: "Ongoing maintenance covering core and plugin updates tested in staging, security monitoring, daily off-site backups, uptime alerting, and a support channel for your team to raise issues.",
  },
]

const perfStats = [
  { v: '90+', l: 'Lighthouse score target' },
  { v: '<2s', l: 'Time to interactive' },
  { v: 'A+', l: 'Security headers grade' },
  { v: '99.9%', l: 'Uptime SLA (managed)' },
]

const problems = [
  {
    title: 'Site loaded quickly at launch but has slowed down significantly over time',
    desc: "Plugin accumulation, an unoptimised media library, and absent caching cause most WordPress slowdowns. We audit the full plugin stack, set up proper caching and CDN delivery, and restore the original load time.",
  },
  {
    title: 'The theme was built with a page builder and the site is now impossible to maintain',
    desc: "We migrate page builder sites to hand-coded custom themes, preserving the visual design and URL structure while removing the performance overhead and maintenance dependency on the builder.",
  },
  {
    title: 'WooCommerce is not handling a business requirement that should be straightforward',
    desc: "User-specific pricing, subscription billing, product configurators, and multi-vendor setups all need custom WooCommerce plugin development. We scope and build the correct extension rather than recommending a workaround.",
  },
  {
    title: "The site was hacked or has been flagged by Google's safe browsing",
    desc: "We handle full recovery: malware removal, backdoor elimination, security hardening, and a post-incident audit. Monitoring and a maintenance retainer are set up to prevent recurrence.",
  },
  {
    title: 'The site needs to connect to a CRM or automation platform but there is no plugin for it',
    desc: "We build custom WordPress plugins with webhook and API integration that push form submissions and site events into any external CRM, n8n workflow, or data system using their APIs.",
  },
]

const faqs = [
  {
    q: "When is WordPress the right choice over a custom React application?",
    a: "WordPress is typically the right choice when the primary requirement is content management by a non-technical team, when the business needs an established plugin ecosystem for functionality like membership management or event booking, when the site is primarily editorial and the complexity is in the content rather than the application logic, or when a WooCommerce store is the central product. A custom React application is the better choice when the site has complex application logic, real-time data requirements, multi-tenant access control, or deep integration with external systems that WordPress would need significant custom development to support.",
  },
  {
    q: "Do you use page builders like Elementor or Divi?",
    a: "No. Every WordPress theme Umer builds is hand-coded without a page builder. Page builders produce bloated markup, add significant JavaScript and CSS overhead, and create long-term maintenance problems when the builder is updated or discontinued. We use the Gutenberg block editor for content management, and we can build custom Gutenberg blocks for content types your editorial team needs. This gives your team a good editing experience without the performance and maintenance costs of a page builder.",
  },
  {
    q: "How do you handle WordPress hosting and deployment?",
    a: "We do not sell hosting, but we recommend appropriate hosting for each project and configure it correctly. Most custom WordPress builds go to a managed WordPress hosting provider or a VPS with proper server configuration. For projects with performance requirements or high traffic, we configure server-level caching, CDN delivery, and database optimisation. Staging environments are set up before any production deployment so changes are tested before they affect live users. We can manage the ongoing hosting relationship on your behalf as part of a maintenance retainer.",
  },
  {
    q: "What does the handover process look like at the end of a WordPress project?",
    a: "Every WordPress project is handed over with a documentation package covering the theme structure and how to make common changes, the plugin stack and what each plugin does, the hosting and deployment configuration, the backup strategy, and the contact points for support. We run a training session with your team covering the admin interface, the content editing workflow, and the actions they should avoid. A post-launch support window is included in every project so issues that arise in the first weeks are addressed promptly.",
  },
]

export default function WordPress() {
  return (
    <Layout>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[50%] hidden lg:block pointer-events-none">
          <img src={unsplash('photo-1637502875124-eb4a9843a2fa', 900, 700)} alt="WordPress website on laptop"
            className="w-full h-full object-cover animate-float" style={{ opacity: 0.2, mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050B18 15%, transparent 50%, #050B18 100%)' }} />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/web-development/" className="hover:text-[#3ECF9E] transition-colors">Web Development</Link>
              <span>/</span><span className="text-gray-300">WordPress</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              WordPress Development
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.95] max-w-3xl">
              WordPress development around<br />
              <span className="gradient-text">your business needs.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
              Custom WordPress themes hand-coded without page builders, WooCommerce builds, plugin development, and performance rescue for existing sites. Every project is scoped clearly and handed over with documentation your team can actually use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base"
                style={{ background: '#3ECF9E', color: '#050B18' }}>
                Book Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/resources/wordpress-vs-custom-website/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                WordPress vs Custom Guide
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Six WordPress services. <span className="gradient-text">All by engineers, not page builders.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From a new custom theme build to a performance rescue of an existing site, every WordPress engagement is scoped clearly and delivered without the shortcuts that create problems six months after launch.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70} direction="scale">
                <div className="glass-card rounded-2xl p-7 card-lift h-full" style={{ borderLeft: '2px solid rgba(62,207,158,0.3)' }}>
                  <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {perfStats.map(s => (
                <div key={s.l} className="glass-card rounded-2xl p-6 text-center card-lift animate-pulse-glow">
                  <div className="font-display font-black text-3xl gradient-text-mint mb-1">{s.v}</div>
                  <div className="text-gray-500 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#3ECF9E' }}>Core Web Vitals target</div>
              <div className="space-y-3">
                {[['Performance', 97], ['Accessibility', 98], ['Best Practices', 100], ['SEO', 100]].map(([label, score]) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="text-gray-400 text-xs w-28 shrink-0">{label}</div>
                    <div className="flex-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <div className="h-2 rounded-full" style={{ width: `${score}%`, background: 'linear-gradient(to right, #3ECF9E, #a8f0da)', animation: 'lineGrow 1.5s ease-out forwards', transformOrigin: 'left' }} />
                    </div>
                    <div className="font-mono text-xs font-bold shrink-0" style={{ color: '#3ECF9E' }}>{score}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
                <img src={unsplash('photo-1511405732889-ce3d6256f366', 700, 400)} alt="WordPress performance issues" className="w-full h-full object-cover" style={{ opacity: 0.45 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,11,24,0.9))' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-display font-bold text-sm mb-1">Generic theme. 4.3s load time.</div>
                  <div className="h-1.5 rounded-full bg-red-500 opacity-70 w-3/4" />
                </div>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>The Problem</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                Why most WordPress sites<br />
                <span className="gradient-text">underperform.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>The vast majority of WordPress sites are built on generic themes using visual page builders. These create sites that are technically functional but carry enormous performance overhead: dozens of unused CSS files, excessive JavaScript bundles, and plugin conflicts that compound over time.</p>
                <p>The result is a site that loads slowly, scores poorly on Core Web Vitals, and requires constant maintenance firefighting rather than genuine improvement. Security vulnerabilities accumulate as plugins go unupdated, and the page builder dependency means that design changes require someone who knows the specific page builder tool rather than a developer who can read the code.</p>
                <p>Umer builds WordPress sites the right way: custom themes coded by hand, only the plugins that are genuinely needed, and a performance baseline established before the site launches. We also provide ongoing maintenance to keep the site fast and secure as WordPress itself evolves.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Our Standards</span>
              <h2 className="font-display font-black text-4xl text-white mb-6">
                What every WordPress build<br />
                <span className="gradient-text">includes.</span>
              </h2>
              <div className="space-y-3">
                {[
                  'Hand-coded custom theme (no page builders)',
                  'Minimal plugin footprint, audited before launch',
                  'Core Web Vitals baseline established on delivery',
                  'Image optimization and lazy loading configured',
                  'Caching and CDN setup for production',
                  'SSL, security headers, and hardening checklist',
                  'Admin training and documentation handover',
                  'Post-launch support window included',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.1)' }}>
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Common WordPress problems */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>Problem solving</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Common WordPress problems<br />
              <span className="gradient-text">we help solve.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Most WordPress engagements at Innoventix Hub are not new builds. They are rescues, performance improvements, and capability extensions for sites that have been running for some time and have hit a wall. These are the problems we see most often.
            </p>
          </ScrollReveal>
          <div className="space-y-5">
            {problems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-7 card-lift flex gap-5">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: '#3ECF9E' }}>FAQ</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              Common questions about<br />
              <span className="gradient-text">WordPress development.</span>
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

      {/* When WordPress is the right choice */}
      <section className="py-24 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Platform Fit</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              When WordPress is<br />
              <span className="gradient-text">the right choice.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal direction="left">
              <h3 className="font-display font-bold text-white text-xl mb-5">WordPress is a strong fit when:</h3>
              <div className="space-y-3">
                {[
                  "Your team needs to publish content frequently without developer help",
                  "WooCommerce covers your e-commerce requirements without significant customisation",
                  "You need a large library of vetted plugins for membership, booking, or events",
                  "Your content architecture is standard: posts, pages, categories, and tags",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(62,207,158,0.04)', border: '1px solid rgba(62,207,158,0.12)' }}>
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#3ECF9E" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <h3 className="font-display font-bold text-white text-xl mb-5">WordPress may not be the right fit when:</h3>
              <div className="space-y-3">
                {[
                  "You need complex custom data models that go well beyond posts and custom post types",
                  "Performance at scale is critical and the WordPress request cycle creates overhead you cannot absorb",
                  "You need deep real-time integrations where data must sync across systems without latency",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-gray-500 shrink-0 mt-0.5">-</span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                Not sure which fits? Book a strategy call and we will give you an honest assessment of which approach makes sense for your specific requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What the WordPress build process covers */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'rgba(10,22,40,0.8)' }}>
        <div className="absolute inset-0 scanline-anim pointer-events-none opacity-10" />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>Build Process</span>
            <h2 className="font-display font-black text-4xl text-white mb-3">
              What the WordPress build<br />
              <span className="gradient-text">process covers.</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4 max-w-3xl">
            {[
              { n: '01', t: 'Brief and architecture planning', d: "We clarify the content structure, the user journey, the plugin requirements, and the editorial workflow before any build work begins. For WooCommerce projects this includes the product model, the payment gateway, and the shipping rules." },
              { n: '02', t: 'Custom theme build (no page builders)', d: "The theme is hand-coded in PHP and CSS to your brand specification without a page builder dependency. Gutenberg block support is included so your editorial team can manage layouts without touching code." },
              { n: '03', t: 'Plugin selection and minimal footprint', d: "Each plugin in the final build is selected deliberately. We audit the plugin stack before launch and remove anything that adds overhead without solving a genuine requirement." },
              { n: '04', t: 'WooCommerce setup if applicable', d: "Product catalogue configuration, payment gateway integration, shipping rules, tax settings, and custom checkout flows are all set up and tested before handover." },
              { n: '05', t: 'Performance baseline measurement', d: "We run Lighthouse and Core Web Vitals tests before the site goes live and document the scores. This gives you a baseline to measure against and confirms the site meets the performance targets agreed at the start of the project." },
              { n: '06', t: 'Documentation and training', d: "Every WordPress project is handed over with a documentation package covering the theme structure, the plugin stack, the hosting configuration, and the backup strategy. We run a training session with your team on the admin interface and the content editing workflow." },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card rounded-2xl p-6 card-lift flex gap-5">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(62,207,158,0.1)', border: '1px solid rgba(62,207,158,0.2)' }}>
                    <span className="font-mono text-xs font-bold" style={{ color: '#3ECF9E' }}>{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1">{step.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
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
            <h2 className="font-display font-black text-3xl text-white">Further reading on WordPress.</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { label: 'WordPress vs Custom Website', href: '/resources/wordpress-vs-custom-website/' },
              { label: 'WordPress Performance Audit', href: '/resources/wordpress-performance-audit/' },
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

      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Need a WordPress site<br />
                  <span className="gradient-text">that actually performs?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We audit your current site or scope a new build with realistic costs and a delivery timeline.</p>
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
