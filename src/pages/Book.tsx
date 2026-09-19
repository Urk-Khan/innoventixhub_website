import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ScrollReveal from '../components/ScrollReveal'

const CALENDLY_URL = 'https://calendly.com/ubaid-persistbrands/free-consultation'

export default function Book() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Book your free strategy call
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Thirty minutes with the Innoventix Hub team to map your biggest challenge in content production, AI automation, voice agents, or web development. The call is conversational: you describe what you are trying to solve, we share what we have seen work in similar situations, and together we identify the clearest path forward. There is no presentation, no pitch deck, and no commitment required on either side.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-extrabold text-[#0B1220] mb-2">What to expect</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">The call follows the same broad structure every time: context first, then analysis, then a clear recommendation. It is structured but not scripted.</p>
                <div className="space-y-4">
                  {[
                    { n: '1', t: 'You describe the situation', d: 'We start with your business context, not a generic discovery template. Share what your current workflow looks like, what is creating friction, and what outcome you are working toward. There is no expectation that you have everything mapped out before you join.' },
                    { n: '2', t: 'We identify the highest-leverage area', d: 'Based on your goals, current setup, and team capacity, we identify where content production, automation, voice AI, or web development would have the most impact. Sometimes the most valuable thing we do in this step is clarify which problem is worth solving first.' },
                    { n: '3', t: 'We outline a clear next step', d: 'You leave with a specific, actionable recommendation and a realistic sense of what building it would involve. Not a vague proposal, a long requirements questionnaire, or a follow-up slide deck to read on your own.' },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100">
                      <span className="text-[#3ECF9E] font-bold text-xl min-w-6">{s.n}</span>
                      <div>
                        <p className="font-semibold text-[#0B1220] mb-1">{s.t}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0B1220] rounded-2xl p-6 border border-[#1D3A6E] mt-8">
                  <h3 className="text-white font-bold mb-3">Prepare a short brief</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">A rough answer to each of these points is enough. You do not need formal documentation.</p>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    {[
                      'The main business problem you are trying to solve and why it matters now',
                      'Which tools, platforms, or systems are already in use (CRM, website, email, video tools)',
                      'Your approximate timeline and a rough sense of budget or scope',
                      'Any previous attempts to solve this and what limited them',
                    ].map(item => (
                      <li key={item} className="flex gap-2"><span className="text-[#3ECF9E] shrink-0">+</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal delay={80}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-extrabold text-[#0B1220] mb-2">Select a time</h2>
                  <p className="text-gray-500 text-sm mb-6">Use the calendar below to book directly, or open it in a new tab if it does not load in your browser.</p>

                  <div className="aspect-[4/5] rounded-xl overflow-hidden border border-gray-100 mb-4 bg-[#F7F9FC] flex items-center justify-center">
                    <iframe
                      src={`${CALENDLY_URL}?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Book a strategy call with Innoventix Hub"
                      className="w-full h-full"
                    />
                  </div>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#3ECF9E] text-[#0B1220] font-bold px-8 py-4 rounded-full hover:bg-[#2AB584] transition-colors"
                  >
                    Open booking calendar in new tab
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-3 text-center">Which service area fits your situation?</h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">Use the descriptions below to identify which conversation will be most relevant before booking. You do not need to know the answer: the call is where we figure it out together.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { title: 'Content Creation', icon: '▶', desc: 'You produce video content but the editing, publishing, or distribution is inconsistent or taking more time than it should. You want a predictable production pipeline that delivers polished content on a schedule without requiring your direct involvement in every step.', href: '/content-creation/' },
              { title: 'AI Automation', icon: '⚙', desc: 'You or your team spend hours on repetitive tasks: entering data, following up leads, generating invoices, or moving information between tools. The same sequence of steps happens multiple times per week and there is no good reason a person needs to do it.', href: '/ai-automation/' },
              { title: 'AI Voice Agents', icon: '◎', desc: 'You receive a high volume of inbound calls for appointment booking, lead qualification, or routine customer service. You want a phone channel that handles routine calls consistently without requiring a receptionist for every one.', href: '/ai-voice-agents/' },
              { title: 'Web Development', icon: '◻', desc: 'You need a custom web application, a WordPress site, or a client-facing portal built to a professional standard. Your existing site no longer fits the business, or you need a web tool that connects directly to your CRM or automation layer.', href: '/web-development/' },
            ].map(s => (
              <ScrollReveal key={s.title}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                  <div className="text-2xl mb-3" style={{ color: '#3ECF9E' }}>{s.icon}</div>
                  <h3 className="font-bold text-[#0B1220] mb-3 text-base">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link to={s.href} className="text-[#3ECF9E] text-xs font-semibold mt-4 hover:underline">Learn more about {s.title}</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] pb-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-xl font-extrabold text-[#0B1220] mb-6 text-center">Useful reading before the call</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: 'Small Business Automation Audit Checklist', href: '/resources/small-business-automation-audit/', cat: 'AI Automation' },
              { title: 'AI Voice Agent Human Handoff: A Planning Guide', href: '/resources/ai-voice-agent-human-handoff/', cat: 'AI Voice Agents' },
              { title: 'Video Editing Brief Template for Brands', href: '/resources/video-editing-brief/', cat: 'Content Creation' },
            ].map(r => (
              <ScrollReveal key={r.title}>
                <Link to={r.href} className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-[#3ECF9E] transition-colors">
                  <span className="text-xs font-semibold text-[#3ECF9E] block mb-2">{r.cat}</span>
                  <p className="text-[#0B1220] font-semibold text-sm leading-snug">{r.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1220] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Common questions about the call</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: 'What should I prepare before booking?', a: 'A brief description of the problem you want to solve is enough. It helps to know which business process or challenge you are working on, which tools and platforms you currently use, your approximate timeline, and a rough sense of budget. You do not need formal requirements documentation. The call itself is partly a discovery session, so arriving with questions is welcome.' },
              { q: 'Which details help the team understand my project?', a: 'Context about your current setup is most useful. That includes the platforms and tools in your workflow, whether you have an existing CRM, automation system, or content publishing process, and any previous attempts to solve the problem. A sentence on what the business does and who your customer is helps us frame the conversation around the right outcomes rather than generic suggestions.' },
              { q: 'Is the call really free with no obligation?', a: 'Yes. There is no payment required to book the strategy call, and no obligation to proceed with a project afterward. The call is a working session: we both use it to determine whether working together makes sense. If we can help, we will say so clearly. If we are not the right fit, we will tell you that too.' },
              { q: 'What happens after the call?', a: 'If there is a good fit, we prepare a specific proposal or next-step plan. If there is not, we will say so directly and, where possible, point you toward a better direction. The call is not the beginning of a sales process: it is a working conversation. You will leave with a clear view of what is realistic and what the most logical first step would be.' },
              { q: 'Can I send questions or context before the call?', a: 'Yes. Use the contact page or send an email to ubaid@persistbrands.com with any background information, briefs, or documents you want us to review before we speak. If you have already tried to solve the problem and have notes on what happened, send those too. Having that context in advance makes the call more productive for both sides.' },
              { q: 'How quickly can work begin after the call?', a: 'That depends on the project type, current team capacity, and how clearly the scope is defined by the end of the call. We discuss realistic start dates during the call before making any commitments. We do not take on projects we cannot staff properly, so these conversations are honest ones about capacity and timing.' },
              { q: 'Can I contact the team if I am not ready to book yet?', a: 'Yes. Use the contact page or send a message to ubaid@persistbrands.com with an outline of what you are working on. We respond within one business day. You can begin a conversation before you have a specific project brief: the strategy call is where the brief starts to take shape.' },
            ].map((faq) => (
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
