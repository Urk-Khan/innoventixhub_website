import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function TaxiBookingPipecat() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link><span>/</span>
            <span className="text-gray-300">Pipecat Taxi Booking Agent</span>
          </nav>
          <div className="flex gap-3 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">In Development</span>
            <span className="bg-[#1D3A6E]/40 text-gray-400 text-xs px-3 py-1 rounded-full border border-[#1D3A6E]">Lead: Ashad</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Pipecat taxi booking agent: <span className="text-[#3ECF9E]">scope and project status</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              A custom voice pipeline for taxi booking built on Pipecat, an open-source real-time voice framework. This project explores lower-latency conversation architecture using Deepgram for speech recognition and Cartesia for synthesis. Sub-500ms latency is a design target, not a measured result at this stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

          <ScrollReveal>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 max-w-3xl">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Latency note:</strong> Sub-500ms end-to-end latency is a design target for this pipeline. It has not been measured under realistic call conditions. Actual latency will depend on network variability, LLM response time, and telephony overhead. Measurements will be published once the full pipeline is tested with real phone calls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Why a custom pipeline</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">Managed platforms like Retell AI and Vapi abstract away the individual components of a voice pipeline. This makes them fast to deploy but limits control over latency and processing logic. Pipecat is an open-source real-time voice framework that allows individual pipeline stages to be assembled and tuned directly.</p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">With Pipecat, each stage of the pipeline (speech-to-text, language model inference, text-to-speech) is a discrete component that can be swapped, optimised, or run in parallel with other stages. This gives developers control over exactly where latency accumulates and what can be done to reduce it.</p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-12">This project is developing a custom Pipecat pipeline to compare the latency and control trade-offs against the Retell implementation. Findings will inform which approach to recommend for different operator contexts. Neither implementation has been declared superior pending actual measurement data.</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Architecture</h2>
                <div className="space-y-3">
                  {[
                    { label: 'Pipeline framework', value: 'Pipecat (open-source real-time voice framework, Python)' },
                    { label: 'Speech recognition', value: 'Deepgram Nova (streaming speech-to-text)' },
                    { label: 'Language model', value: 'Orchestrated via Python within the Pipecat pipeline' },
                    { label: 'Speech synthesis', value: 'Cartesia (low-latency text-to-speech)' },
                    { label: 'Telephony', value: 'Telnyx (planned, not yet integrated)' },
                    { label: 'Dispatch API', value: 'Mock API (same format as the Retell project)' },
                    { label: 'Target latency', value: 'Sub-500ms end-to-end (design target, not measured)' },
                    { label: 'Infrastructure', value: 'Self-hosted Python service (cloud hosting approach TBD)' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                      <span className="text-[#3ECF9E] font-semibold text-sm min-w-36">{row.label}</span>
                      <span className="text-gray-600 text-sm">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="bg-[#0B1220] rounded-2xl p-8 border border-[#1D3A6E]">
                <h3 className="text-white font-bold text-lg mb-4">Current status and open questions</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex gap-2"><span className="text-blue-400">+</span> Pipeline stages assembled and tested in isolation.</li>
                  <li className="flex gap-2"><span className="text-blue-400">+</span> End-to-end booking flow being developed using mock dispatch API.</li>
                  <li className="flex gap-2"><span className="text-yellow-400">?</span> Latency measurements will be published once tested under realistic call conditions with real network variability. The sub-500ms figure is a target, not a result.</li>
                  <li className="flex gap-2"><span className="text-yellow-400">?</span> Telephony integration with Telnyx is planned but not yet complete.</li>
                  <li className="flex gap-2"><span className="text-yellow-400">?</span> Comparison with the Retell implementation will determine which approach suits different deployment contexts. The comparison requires both pipelines to be tested under the same call conditions.</li>
                  <li className="flex gap-2"><span className="text-yellow-400">?</span> Self-hosted infrastructure costs under production load have not been estimated. Pipecat requires a running Python service, which adds operational overhead compared to managed platforms.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">How a Pipecat pipeline differs from a managed platform</h2>
              <div className="grid sm:grid-cols-3 gap-4 max-w-5xl">
                {[
                  {
                    title: 'Component control',
                    body: 'With Pipecat, each pipeline stage (STT, LLM, TTS) is configured and run independently. You choose the specific model for each stage, configure streaming behaviour, and can pipeline stages to overlap. With a managed platform, the components are selected and connected for you with less room to adjust individual stage behaviour.',
                  },
                  {
                    title: 'Infrastructure ownership',
                    body: 'A Pipecat pipeline runs as a Python service that you host and operate. This means managing deployment, scaling, and uptime. A managed platform handles all of this. For teams without infrastructure experience, the managed approach is likely more practical. For teams with specific latency or data-sovereignty requirements, the custom approach offers more control.',
                  },
                  {
                    title: 'Development speed vs depth',
                    body: 'The Retell implementation was faster to get to a working conversation because the platform handles conversation state, tool calling, and telephony. The Pipecat implementation takes longer to build but gives more visibility into every stage. Both are valid approaches depending on the operator\'s priorities.',
                  },
                ].map((item) => (
                  <ScrollReveal key={item.title}>
                    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full">
                      <h3 className="text-[#0B1220] font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 max-w-3xl">
              <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">What this project demonstrates</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This project demonstrates how to build a real-time voice application from individual open-source components rather than relying on a managed platform. For teams evaluating build-versus-buy for voice AI, it provides a concrete comparison point once the latency data is available.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The architecture also illustrates the Python tooling ecosystem for real-time voice: Deepgram for streaming STT, Cartesia for low-latency TTS, and Pipecat as the glue that connects them and manages the conversation state. Understanding how these components fit together is useful regardless of whether a team ultimately chooses a managed or custom approach.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The project is also an honest documentation of work in progress. The current state is that individual pipeline stages work, but the full pipeline under real telephony conditions has not been tested. Publishing that status accurately is more useful than claiming results that have not been verified.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 max-w-3xl">
              <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'Complete the Telnyx telephony integration to handle real inbound phone calls.',
                  'Measure latency under real call conditions before publishing any latency figures.',
                  'A live dispatch API integration to replace the mock API used during development.',
                  'A defined hosting approach for the Python service with cost and scaling plan.',
                  'Load testing to confirm how the pipeline performs under concurrent calls.',
                  'Legal review of call recording and consent requirements for each operating jurisdiction.',
                  'A monitoring and alerting setup so pipeline errors and dropped calls are visible in real time.',
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
          <p className="text-gray-600 mb-6">Interested in voice agent development for your business?</p>
          <Link to="/ai-voice-agents/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors mr-4">AI Voice Agent Services</Link>
          <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What is working now</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              The following describes what has been built and tested at this stage. Sub-500ms end-to-end latency is a design target for this pipeline and has not been measured under realistic call conditions.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 max-w-3xl">
              {[
                { label: 'Verified', text: 'Individual pipeline stages assembled and tested in isolation: Deepgram Nova for streaming speech-to-text, Cartesia for text-to-speech, and LLM orchestration within the Pipecat framework' },
                { label: 'Verified', text: 'End-to-end booking conversation flow developed using the mock dispatch API, including address collection, disambiguation, and booking confirmation' },
                { label: 'Verified', text: 'Mock dispatch API integration in the same format as the Retell implementation, allowing the booking flow to be tested without a live dispatch connection' },
                { label: 'Not yet verified', text: 'Telephony integration with Telnyx is planned but not yet complete. Real inbound phone calls cannot yet be handled through the pipeline' },
                { label: 'Not yet verified', text: 'End-to-end latency under realistic call conditions. The sub-500ms target has not been measured. Actual latency will depend on network variability, LLM response time, and telephony overhead' },
                { label: 'Not yet verified', text: 'Live dispatch API integration with iCabbi, TBMS, or any production platform. The mock API is in use throughout current development' },
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
              The following steps need to be completed before this pipeline can be deployed in production. The sub-500ms latency claim cannot be made until step two has been completed and measured.
            </p>
            <ol className="space-y-4 max-w-2xl">
              {[
                'Complete the Telnyx telephony integration so the pipeline can receive real inbound phone calls.',
                'Measure end-to-end latency under real call conditions; publish the sub-500ms figure only after verified measurement.',
                'Replace the mock dispatch API with live integration to iCabbi or TBMS, including sandbox testing.',
                'Determine and implement a hosting approach for the Python service with cost and scaling plan.',
                'Load test the pipeline under concurrent calls before committing to production deployment.',
                'Legal review of call recording and consent requirements for the operating jurisdiction.',
                'Set up monitoring and alerting for pipeline errors, dropped calls, and latency spikes post-launch.',
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
              To learn more about the taxi booking voice agent service and the dispatch system integration context for both the Pipecat and Retell implementations, see the links below.
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
