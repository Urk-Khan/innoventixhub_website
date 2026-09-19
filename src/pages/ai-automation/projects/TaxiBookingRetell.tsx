import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function TaxiBookingRetell() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link><span>/</span>
            <span className="text-gray-300">Retell Taxi Booking Agent</span>
          </nav>
          <div className="flex gap-3 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">In Development</span>
            <span className="bg-[#1D3A6E]/40 text-gray-400 text-xs px-3 py-1 rounded-full border border-[#1D3A6E]">Lead: Faseeh</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Retell taxi booking agent: <span className="text-[#3ECF9E]">scope and project status</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              An AI phone agent for taxi and private hire operators built on Retell AI and Telnyx. Currently integrated with a mock dispatch API. Live compatibility with production dispatch systems such as iCabbi or TBMS is not yet verified.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

          <ScrollReveal>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10 max-w-3xl">
              <p className="text-yellow-800 text-sm leading-relaxed">
                <strong>Important:</strong> Current development runs against a mock dispatch API that simulates the expected response format of a live dispatch system. No integration with iCabbi, TBMS, or any other production dispatch platform has been completed or verified. Live integration requires API documentation, sandbox credentials, and testing time that has not yet been scheduled.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Project overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Taxi operators receive large volumes of repetitive booking calls. Each call requires collecting the same set of information: pickup address, destination, date, time, vehicle type, and contact details. This structure makes it well-suited to an AI voice agent, provided the agent can connect reliably to a dispatch system.</p>
                <p className="text-gray-600 leading-relaxed mb-4">This project uses Retell AI as the conversation platform and Telnyx for telephony. The agent handles the booking flow end to end and attempts to confirm availability and booking reference through the dispatch API.</p>
                <p className="text-gray-600 leading-relaxed mb-4">Current development is running against a mock dispatch API that simulates the expected response format. Connecting to a live production dispatch system requires API documentation and access from the operator's chosen platform. iCabbi and TBMS have been identified as likely integration targets, but no live integration has been verified.</p>
                <p className="text-gray-600 leading-relaxed">Retell AI was chosen for this implementation because it provides a managed conversation platform with built-in telephony abstractions, voice model options, and a structured tool-calling mechanism. This reduces the infrastructure burden compared to building a custom pipeline, allowing the booking logic to be developed and tested faster. The trade-off is less control over individual pipeline latencies.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Architecture</h2>
                {[
                  { label: 'Voice platform', value: 'Retell AI (managed conversation and LLM orchestration)' },
                  { label: 'Telephony', value: 'Telnyx (inbound phone number and PSTN connectivity)' },
                  { label: 'Speech synthesis', value: 'Cartesia (via Retell AI integration)' },
                  { label: 'Dispatch API', value: 'Mock API simulating dispatch response format (live integration TBD)' },
                  { label: 'Workflow orchestration', value: 'n8n (post-call logging and CRM update)' },
                  { label: 'CRM update', value: 'GoHighLevel (planned, not yet integrated)' },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                    <span className="text-[#3ECF9E] font-semibold text-sm min-w-32">{row.label}</span>
                    <span className="text-gray-600 text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mt-16 mb-6">Planned features</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {[
              { t: 'Inbound booking flow', d: 'Collects pickup address, destination, date, time, and vehicle preference through a structured conversation. The agent confirms each detail before proceeding to the next step.' },
              { t: 'Address disambiguation', d: 'Handles unclear or incomplete addresses by asking clarifying questions before proceeding. Common issues include partial postcodes, multiple matching street names, and unclear landmark references.' },
              { t: 'Availability checking', d: 'Queries the dispatch API for vehicle availability at the requested time and location. Currently tested against the mock API only. Behaviour under real dispatch system response times has not been measured.' },
              { t: 'Booking confirmation', d: 'Confirms the booking and provides a reference number before ending the call. The reference number is pulled from the dispatch API response or generated by the mock API in testing.' },
              { t: 'Warm transfer', d: 'Escalates calls that fall outside the agent scope (complex bookings, account queries, complaints) to a human dispatcher with full context passed via Retell\'s transfer mechanism.' },
              { t: 'Post-call logging', d: 'Writes call summary, booking details, outcome, and any escalation flag to the CRM via n8n workflow triggered by the Retell post-call webhook.' },
            ].map((item, i) => (
              <ScrollReveal key={item.t} delay={i * 40}>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="text-[#0B1220] font-semibold mb-2">{item.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">What this project demonstrates</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">
              This project demonstrates how a managed voice AI platform can be applied to a structured, high-volume telephony use case. The taxi booking flow is a good candidate because it is repetitive, data-driven, and follows a predictable branch structure. The agent does not need to handle open-ended conversation; it needs to collect specific fields reliably and connect to a backend system.
            </p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
              The architecture also demonstrates the use of Retell AI's tool-calling mechanism to connect a voice conversation to an external API. The conversation logic stays in Retell while the dispatch interaction is handled through a defined tool. This separation makes it straightforward to swap the mock API for a live one when the integration is ready, without rewriting the conversation flow.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B1220] rounded-2xl p-8 border border-[#1D3A6E] mt-4">
              <h2 className="text-white font-bold text-xl mb-4">Open questions and dependencies</h2>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-yellow-400">?</span> API documentation and sandbox access for iCabbi or TBMS is required before live integration can begin. Without this, the dispatch integration cannot be verified.</li>
                <li className="flex gap-2"><span className="text-yellow-400">?</span> Latency under real call conditions with actual dispatch API response times has not been measured. The mock API responses are faster than a live system would likely be.</li>
                <li className="flex gap-2"><span className="text-yellow-400">?</span> Caller consent and recording requirements vary by jurisdiction and need legal review per deployment before the agent goes live with real callers.</li>
                <li className="flex gap-2"><span className="text-yellow-400">?</span> Concurrency requirements depend on the operator's peak call volume, which varies significantly. Telnyx capacity and Retell concurrent call limits need to be assessed per operator.</li>
                <li className="flex gap-2"><span className="text-yellow-400">?</span> Fallback behaviour when the dispatch API is unavailable or returns an error needs to be defined and tested. Currently the mock API does not simulate failure states.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 max-w-3xl">
              <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'Live dispatch API integration with iCabbi, TBMS, or the operator\'s chosen platform, with sandbox testing before go-live.',
                  'A Telnyx number provisioned in the operator\'s country, with number portability or new allocation.',
                  'Legal review of call recording and consent requirements for the operating jurisdiction.',
                  'Defined out-of-scope call types with clear rules for triggering a warm transfer to human dispatch.',
                  'Load testing under simulated peak call volumes to identify concurrency or latency issues.',
                  'A post-call monitoring process to review transcripts and improve the conversation flow over time.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="text-[#3ECF9E] font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 mb-6">Interested in a taxi booking voice agent for your operation?</p>
          <Link to="/ai-voice-agents/taxi-booking/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors mr-4">Learn about the service</Link>
          <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What is working now</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              The following describes what has been built and tested at this point in development. Items marked as verified have been tested. Items marked as not yet verified require additional work before they can be confirmed.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 max-w-3xl">
              {[
                { label: 'Verified', text: 'Inbound call handling via Telnyx with a working phone number receiving calls through the Retell AI platform' },
                { label: 'Verified', text: 'Full booking conversation flow: the agent collects pickup address, destination, date, time, vehicle preference, and caller contact details through a structured dialogue' },
                { label: 'Verified', text: 'Address disambiguation handling for incomplete or ambiguous addresses using clarifying questions within the conversation flow' },
                { label: 'Verified', text: 'Mock dispatch API integration: availability checking and booking confirmation tested against a mock API that simulates the expected response format of a live dispatch system' },
                { label: 'Verified', text: 'Warm transfer mechanism for out-of-scope calls using Retell\'s transfer function with context passed to the receiving dispatcher' },
                { label: 'Verified', text: 'Post-call webhook to n8n for logging call summary and booking details' },
                { label: 'Not yet verified', text: 'Live integration with iCabbi, TBMS, or any production dispatch platform. This requires API documentation and sandbox credentials from the operator\'s chosen system, which has not yet been obtained' },
                { label: 'Not yet verified', text: 'Call quality and latency under production conditions with real callers and real dispatch API response times. The mock API responds faster than a live system would' },
              ].map((item) => (
                <div key={item.text} className="flex gap-3 bg-[#F7F9FC] rounded-xl p-4 border border-gray-100">
                  <span className={`font-bold mt-0.5 flex-shrink-0 text-sm ${item.label === 'Verified' ? 'text-[#3ECF9E]' : 'text-yellow-500'}`}>{item.label === 'Verified' ? '+' : '?'}</span>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${item.label === 'Verified' ? 'text-[#3ECF9E]' : 'text-yellow-600'}`}>{item.label}</span>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Planned next steps</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              The following steps need to be completed before this agent can be deployed in a production environment with real callers and a live dispatch system.
            </p>
            <ol className="space-y-4 max-w-2xl">
              {[
                'Obtain API credentials for iCabbi, TBMS, or the preferred dispatch platform and test live integration in sandbox before production.',
                'Replace the mock API with the live dispatch integration and test the full booking flow end to end in sandbox.',
                'Measure latency under real call conditions with a real phone before committing to production deployment.',
                'Confirm Telnyx and Retell concurrent call capacity against the operator\'s actual peak call volume.',
                'Legal review of recording and consent requirements for the operating jurisdiction; update the call opening accordingly.',
                'Define and test fallback behaviour for dispatch API downtime and unexpected error states.',
                'Establish post-call monitoring to review transcripts and identify conversation flow improvements.',
              ].map((item, i) => (
                <li key={item} className="flex gap-4 text-gray-600 text-sm leading-relaxed">
                  <span className="text-[#3ECF9E] font-extrabold flex-shrink-0 text-base">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Related content</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              To learn more about the taxi booking voice agent service and the dispatch integration work underpinning this project, see the links below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-voice-agents/taxi-booking/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">Taxi Booking Voice Agent Service</Link>
              <Link to="/resources/taxi-voice-agent-dispatch-integration/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Dispatch Integration Guide</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
