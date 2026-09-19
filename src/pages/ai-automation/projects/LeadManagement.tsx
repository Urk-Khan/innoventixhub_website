import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function LeadManagement() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/ai-automation/" className="hover:text-[#3ECF9E]">AI Automation</Link>
            <span className="mx-2">/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Lead Management</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Lead Management System</h1>
            <span className="flex-shrink-0 mt-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-[#3ECF9E]/20 text-[#3ECF9E] border-[#3ECF9E]/40">Live</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            A multi-channel lead capture and routing system with automated scoring, assignment, and follow-up sequence triggers. Built to ensure no lead goes cold due to slow manual response.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">System overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Leads arrive through web forms, social ad landing pages, and direct messages. The system captures each lead, enriches the contact record with publicly available data, scores the lead based on defined criteria, and routes it to the appropriate team member with a notification.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              An immediate follow-up sequence begins automatically: a personalised confirmation email to the lead, then a sequence of value-delivery emails over the following days. The sequence pauses if the lead books a call or replies to any message.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              All lead activity is logged in a CRM with full history. Managers can see the complete pipeline at a glance including conversion rates by source, stage velocity, and assigned rep performance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The scoring model is rule-based and configurable. Each scoring criterion (industry match, stated budget, engagement signals, form completeness) is assigned a weight. The resulting score determines both the routing priority and the follow-up sequence variant used. High-scoring leads receive a faster escalation path and a more direct sequence than exploratory enquiries.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Technical stack</h2>
            <div className="space-y-3">
              {[
                { label: 'Lead capture', value: 'Typeform, native web forms, and Facebook Lead Ads integrated via webhook' },
                { label: 'Enrichment', value: 'Clearbit or Hunter.io for company data, employee count, and contact verification' },
                { label: 'Scoring', value: 'Rule-based scoring model in n8n evaluated against industry, stated budget, and form engagement' },
                { label: 'CRM', value: 'Airtable or GoHighLevel depending on client stack and existing tool investment' },
                { label: 'Follow-up sequences', value: 'SendGrid or GHL email and SMS automations with sequence variants by score tier' },
                { label: 'Notifications', value: 'Slack direct message to assigned rep on new lead with score and routing reason' },
                { label: 'Deduplication', value: 'Email-based deduplication check before creating new CRM records' },
                { label: 'Suppression logic', value: 'Sequence pauses on call booking, email reply, or manual suppression flag in the CRM' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-[#1D3A6E] font-semibold text-xs uppercase tracking-wide">{item.label}</span>
                  <p className="text-gray-600 text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">The lead lifecycle in detail</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Capture and enrichment',
                  body: 'When a form is submitted, a webhook fires immediately to n8n. The workflow validates the submission, checks for existing records with the same email, and if no duplicate is found, creates a new CRM record. Enrichment data is pulled from Clearbit or Hunter.io within seconds. The combined record (form data plus enrichment) is what the scoring model evaluates.',
                },
                {
                  title: 'Scoring and routing',
                  body: 'Each lead is scored against a weighted criteria table configured for the business. Common criteria include: industry alignment, company size, stated budget range, source channel, and time of enquiry. The score determines which rep receives the lead and which follow-up sequence variant is triggered. Routing rules can distribute by territory, specialisation, or round-robin depending on team structure.',
                },
                {
                  title: 'Sequence management',
                  body: 'The follow-up sequence runs through the email and SMS platform. Each step in the sequence is conditional: if the lead has booked a call or replied to a previous message, the sequence pauses automatically. Sequence steps are triggered by n8n on a time-delay basis. Manual overrides by the assigned rep are logged and respected by the automation without requiring workflow changes.',
                },
              ].map((item) => (
                <ScrollReveal key={item.title}>
                  <div className="bg-[#F7F9FC] rounded-xl p-6 border border-gray-100 h-full">
                    <h3 className="text-[#0B1220] font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What this project demonstrates</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The lead management system demonstrates how a small sales team can operate with the speed and consistency of a much larger one. The critical insight is that most lead response failures are caused by process gaps, not people gaps. When the process is automated, every lead receives the same fast, consistent response regardless of how many enquiries arrive simultaneously or what else the sales team is handling.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The scoring model shows that lead qualification does not require machine learning. A well-designed rule table with clear criteria and weights will outperform informal judgment for most businesses because it applies the same standard every time. The model can be tuned as the business learns which criteria actually predict conversion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The suppression logic is the most practically important pattern here. Automated sequences that ignore replies or bookings damage relationships. This system treats any engagement signal as a reason to hand control back to the human rep. The automation exists to fill the gap before engagement, not to override it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'A completed scoring criteria document specifying which attributes to score and how much weight each carries',
                  'Routing rules defined in advance: who receives which lead types and what happens if a rep is unavailable',
                  'Email and SMS sequence copy written and approved before the system goes live',
                  'CRM fields mapped and agreed so the automation knows exactly where to write each data point',
                  'A Clearbit or Hunter.io account with API access configured, or an alternative enrichment source',
                  'Suppression conditions documented clearly: what constitutes an engagement event that pauses the sequence',
                  'A reporting view configured in the CRM to track source, score distribution, stage velocity, and conversion rate from the first week of operation',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="text-[#3ECF9E] font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-2">Who this system is for</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Small Sales Teams With Multi-Channel Leads', desc: 'Sales teams relying on manual follow-up who suffer inconsistent response times and cold leads.' },
              { title: 'Service Businesses Running Paid Ads', desc: 'Businesses with campaign-driven lead spikes that the team cannot respond to consistently at speed.' },
              { title: 'Sales Ops With a Defined Ideal Customer', desc: 'Teams needing a systematic way to prioritise higher-fit enquiries without manual judgment on every lead.' },
            ].map(card => (
              <ScrollReveal key={card.title}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="w-7 h-7 rounded-full mb-4 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(62,207,158,0.1)' }}>
                    <span style={{ color: '#3ECF9E', fontWeight: 'bold', fontSize: '14px' }}>+</span>
                  </div>
                  <h3 className="font-bold text-[#0B1220] mb-2 text-base">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Dependencies and requirements</h2>
            <div className="grid lg:grid-cols-2 gap-4 max-w-3xl">
              {[
                'A completed scoring criteria document with attribute weights agreed before the model is built.',
                'Routing rules defined in advance covering which rep receives which lead types.',
                'Email and SMS sequence copy written and approved before the system goes live.',
                'CRM fields mapped and agreed so automation writes each data point consistently.',
                'A Clearbit or Hunter.io account with API access, or a decision to skip enrichment.',
                'Suppression conditions documented: what engagement events should pause the sequence.',
              ].map((item) => (
                <div key={item} className="flex gap-3 bg-[#F7F9FC] rounded-xl p-4 border border-gray-100">
                  <span className="text-[#3ECF9E] font-bold mt-0.5 flex-shrink-0">+</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Related service</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              This project is part of our small business automation service, which covers lead capture, CRM integration, and multi-channel follow-up workflows for sales teams. If you want a lead management system built around your pipeline and scoring criteria, the strategy call is the right starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-automation/smb/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">Small Business Automation</Link>
              <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#3ECF9E] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Stop losing leads to slow response times</h2>
          <p className="text-[#0B1220]/80 text-lg mb-8 max-w-lg mx-auto">Book a strategy call to design a lead management system for your pipeline.</p>
          <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
