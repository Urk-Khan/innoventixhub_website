import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function LegacyCrm() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link><span>/</span>
            <span className="text-gray-300">Custom CRM Project</span>
          </nav>
          <div className="flex gap-3 mb-4">
            <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30">Identity to Confirm</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Custom CRM project: <span className="text-[#3ECF9E]">identity to confirm</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              This route corresponds to a legacy sitemap entry for a custom CRM project. Its relationship to the current project inventory and to the Custom CRM development service is under review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Status note</h2>
            <p className="text-gray-600 leading-relaxed mb-4">This page preserves a route that appeared in an earlier sitemap. The specific project it was intended to document has not been confirmed against the current nine-project inventory. It is not one of the active, paused, or queued projects listed at this time.</p>
            <p className="text-gray-600 leading-relaxed mb-8">If you are looking for information about custom CRM development as a service, including what we build, how we approach requirements, and what the process involves, that content is on the service page.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-automation/custom-crm/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">Custom CRM Development Service</Link>
              <Link to="/ai-automation/projects/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">All Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-2xl mb-8">
              <h2 className="text-orange-800 font-bold text-xl mb-3">Project status note</h2>
              <p className="text-orange-800 text-sm leading-relaxed mb-3">
                This project is paused and is not currently in active development. No work is being carried out on it and no timeline for resumption has been confirmed.
              </p>
              <p className="text-orange-800 text-sm leading-relaxed mb-3">
                This page corresponds to a route from an earlier sitemap. The specific project it was intended to document has not been fully confirmed against the current project inventory, and the reason for the pause is not yet publicly documented. If you need information about what was in scope before the pause, scope documentation is available on request.
              </p>
              <p className="text-orange-800 text-sm leading-relaxed">
                If you are looking for custom CRM development as an active service, that work continues independently of this project page. See the service page for what is currently offered and how engagements work.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What was completed before pausing</h2>
            <div className="max-w-2xl">
              <p className="text-gray-600 leading-relaxed mb-6">
                The following reflects what was completed or scoped before this project was paused. Because the project identity is still being confirmed against the current inventory, this list may be incomplete.
              </p>
              <ul className="space-y-3">
                {[
                  'Initial route and page structure established in the site navigation under the project inventory',
                  'Relationship to the custom CRM development service reviewed and partially documented',
                  'Scope documentation available on request from the project team',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="text-[#3ECF9E] font-bold mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6 text-sm">
                If you have specific questions about what was scoped or built before the pause, contact the team directly and full scope documentation will be shared.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Related service</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Custom CRM development continues as an active service. If you need a CRM built around your specific sales process, data model, or integration requirements, the service page covers what is available and how engagements work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-automation/custom-crm/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">Custom CRM Development Service</Link>
              <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
