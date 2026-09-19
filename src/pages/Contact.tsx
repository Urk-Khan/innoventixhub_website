import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('error'), 1000)
  }

  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Tell us about your project</h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-4">Share your requirements and we will follow up within one business day. The more context you give us about the problem you are trying to solve, the more useful our initial response will be.</p>
            <p className="text-gray-400 text-base leading-relaxed">We work across content production, AI automation, AI voice agent development, and web development. If you are not sure which area fits your situation, describe the business challenge and we will help you identify where to start. If you already know what you need, include as much detail as you can about the project scope, tools you already use, and your timeline.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-5">
                  <h2 className="text-2xl font-extrabold text-[#0B1220] mb-2">Send a message</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B1220] mb-1.5" htmlFor="name">Your name <span className="text-red-400">*</span></label>
                      <input id="name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECF9E] focus:border-transparent" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1220] mb-1.5" htmlFor="email">Email address <span className="text-red-400">*</span></label>
                      <input id="email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECF9E] focus:border-transparent" placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B1220] mb-1.5" htmlFor="service">Service area</label>
                    <select id="service" value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECF9E] focus:border-transparent bg-white">
                      <option value="">Select a service area</option>
                      <option>Content Creation</option>
                      <option>AI Automation</option>
                      <option>AI Voice Agents</option>
                      <option>Web Development</option>
                      <option>Multiple services</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B1220] mb-1.5" htmlFor="message">Tell us about your project <span className="text-red-400">*</span></label>
                    <textarea id="message" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3ECF9E] focus:border-transparent resize-none" placeholder="Describe the problem you are trying to solve, the tools you currently use, and your approximate timeline." />
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                      Form submission is not yet connected to an email endpoint. Please contact us directly at <a href="mailto:ubaid@persistbrands.com" className="font-semibold underline">ubaid@persistbrands.com</a> or book a call below.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="w-full bg-[#3ECF9E] text-[#0B1220] font-bold py-4 rounded-full hover:bg-[#2AB584] transition-colors disabled:opacity-60">
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>

                  <p className="text-gray-400 text-xs text-center">Or email directly: <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E] hover:underline">ubaid@persistbrands.com</a></p>
                </form>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={80}>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-[#0B1220] font-bold mb-3">Fastest response</h3>
                    <p className="text-gray-500 text-sm mb-4">Book a free strategy call and speak with us directly. Most strategy call slots are available within a few business days.</p>
                    <Link to="/book/" className="block text-center bg-[#0B1220] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors text-sm">Book Free Strategy Call</Link>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-[#0B1220] font-bold mb-3">Direct contact</h3>
                    <div className="space-y-2">
                      <a href="mailto:ubaid@persistbrands.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3ECF9E] transition-colors">
                        <svg className="w-4 h-4 text-[#3ECF9E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        ubaid@persistbrands.com
                      </a>
                      <a href="tel:+19177954404" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#3ECF9E] transition-colors">
                        <svg className="w-4 h-4 text-[#3ECF9E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +1 (917) 795-4404
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#0B1220] rounded-2xl p-6 border border-[#1D3A6E]">
                    <h3 className="text-white font-bold mb-3">What to include</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      {['The core problem you are solving', 'Your current tools and stack', 'Approximate timeline and budget range', 'Any previous work you want to build on'].map(item => (
                        <li key={item} className="flex gap-2"><span className="text-[#3ECF9E]">+</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1220] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-3 text-center">What we work on</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">Inquiries across all four practice areas are welcome. Here is a brief summary of what each area covers so you can describe your situation with the right context.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { title: 'Content Creation', items: ['Video editing for long-form and short-form platforms', 'YouTube channel management from scripting to scheduled upload', 'AI-generated UGC for ad creative and social output', 'Thumbnail design and upload metadata optimization'] },
              { title: 'AI Automation', items: ['Lead intake and CRM update workflows using n8n', 'GoHighLevel sub-account setup and automation sequences', 'Custom CRM dashboards built on React and Supabase', 'Document processing, invoice generation, and internal reporting'] },
              { title: 'AI Voice Agents', items: ['Inbound call handling for appointment booking and FAQ routing', 'Lead qualification agents integrated with your CRM', 'Outbound reactivation campaigns to segmented contact lists', 'After-hours coverage agents for service businesses'] },
              { title: 'Web Development', items: ['Custom React and Next.js web applications and SaaS dashboards', 'WordPress builds and WooCommerce development', 'UX design and information architecture before development begins', 'Client portals with authenticated access and custom workflows'] },
            ].map(col => (
              <ScrollReveal key={col.title}>
                <div className="bg-[#0F1A2E] rounded-2xl p-6 border border-[#1D3A6E] h-full">
                  <h3 className="text-[#3ECF9E] font-bold text-sm mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map(item => (
                      <li key={item} className="text-gray-400 text-xs leading-relaxed flex gap-2">
                        <span className="text-[#3ECF9E] shrink-0">+</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Common questions before reaching out</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: 'Do you work with businesses outside a specific location?', a: 'Yes. Innoventix Hub operates as a remote team and works with clients regardless of location. There are no geographic restrictions on the projects we take on. Communication is handled over email and video call, and time zone differences are managed during the scoping phase so response and delivery expectations are set clearly from the start.' },
              { q: 'Can you handle a project that spans more than one service area?', a: 'Yes. Multi-discipline engagements are common: a web development project that also requires automation, a content operation that connects to a CRM workflow, or a voice agent deployment alongside a website build. Because all four practice areas are in-house, the integration between disciplines is designed in from the beginning rather than bolted on by a separate contractor after each specialist has shipped.' },
              { q: 'How do you handle projects at an early or undefined stage?', a: 'If you have a business problem but have not yet translated it into a defined project brief, that is fine. Start with the strategy call: describe the challenge, the current situation, and what outcome you are working toward. We help clarify the scope and identify which discipline or combination of disciplines is the right starting point. You do not need a finished brief to begin the conversation.' },
              { q: 'How long does it take to get a response?', a: 'We aim to respond to all contact form messages within one business day. Email to ubaid@persistbrands.com receives the same turnaround. If your inquiry is time-sensitive, use the strategy call booking option, which puts you directly into a scheduled time slot rather than a queue.' },
              { q: 'What information helps you prepare a useful reply?', a: 'The most useful messages include a description of the problem or task, the tools and platforms you currently use, your approximate timeline, and a sense of the outcome you are trying to reach. You do not need formal requirements documentation at this stage. A rough outline with enough context to understand the situation is sufficient for an initial response.' },
              { q: 'Is there a minimum project size?', a: 'We do not publish a minimum project size, but the discovery and scoping process has a fixed cost in time for both sides. Projects that are very small in scope or open-ended in nature are not always a good fit for the strategy call process. If your inquiry is exploratory and you are not yet at a decision stage, a brief message via the contact form is often a better starting point.' },
            ].map(faq => (
              <div key={faq.q} className="bg-[#0F1A2E] rounded-xl p-5 border border-[#1D3A6E]">
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
