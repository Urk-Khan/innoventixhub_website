import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function AiPersonalAssistant() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link><span>/</span>
            <span className="text-gray-300">AI Personal Assistant</span>
          </nav>
          <div className="flex gap-3 mb-4">
            <span className="bg-gray-500/20 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-500/30">Queued</span>
            <span className="bg-[#1D3A6E]/40 text-gray-400 text-xs px-3 py-1 rounded-full border border-[#1D3A6E]">Unassigned</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              AI personal assistant: <span className="text-[#3ECF9E]">scope and project status</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              A planned AI assistant for email management, calendar coordination, research compilation, and drafting workflows. This project is queued and not yet assigned to a developer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Intended purpose</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">Founders and small teams spend significant time on email triage, calendar management, research, and writing tasks that follow predictable patterns. An AI personal assistant would handle the structured portions of these tasks while passing judgment-dependent decisions to the user.</p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-12">This project is in the early planning stage. The scope below represents intended functionality, not committed delivery dates or confirmed architecture. Development will begin after higher-priority projects are further along.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Email triage', d: 'Categorize incoming email by priority and type. Draft responses to routine messages for review. Flag items requiring immediate attention.' },
              { t: 'Calendar management', d: 'Identify scheduling conflicts, suggest optimal meeting times, and draft scheduling messages. Prepare agenda summaries before meetings.' },
              { t: 'Research compilation', d: 'Gather information on a defined topic from specified sources and organize it into a structured summary with source attribution.' },
              { t: 'Drafting assistance', d: 'Generate first drafts of routine communications, proposals, and documents based on structured input. All drafts reviewed before sending.' },
              { t: 'Task and note management', d: 'Convert action items from meetings and emails into structured tasks. Maintain a running note on active projects.' },
              { t: 'n8n workflow integration', d: 'Trigger email processing, calendar checks, and CRM updates through n8n workflows connected to Gmail, Google Calendar, and task management tools.' },
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
            <div className="bg-[#0B1220] rounded-2xl p-8 border border-[#1D3A6E] mt-12 max-w-3xl">
              <h3 className="text-white font-bold text-lg mb-4">What needs to be resolved before development</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['Developer assignment and capacity planning', 'Data privacy approach for email and calendar content', 'Integration scope for Gmail, Google Calendar, and task tools', 'Human review workflow for AI-drafted communications', 'Scope boundary between personal assistant and CRM automation'].map(item => (
                  <li key={item} className="flex gap-2"><span className="text-yellow-400">?</span>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">About this project</h2>
            <div className="max-w-2xl">
              <p className="text-gray-600 leading-relaxed mb-4">
                The AI Personal Assistant is queued for development and has not yet been built. Nothing described on this page has been delivered. The scope documented here represents what the project is intended to become once development begins.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The planned purpose is to give founders and small team leads an AI assistant that handles the structured, repeatable portions of daily work: sorting incoming email, managing calendar coordination, compiling research, and producing first drafts of routine documents. The intent is to reduce the time spent on predictable administrative tasks so judgment and creative work can take priority.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This project is unassigned. No developer has been allocated and no architecture decisions are final. The project page will be updated when development begins.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Planned scope</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              The following features are planned for this project. None of these are built. This list represents the intended scope based on current planning, which may change before development begins.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {[
                { t: 'Email triage and prioritisation', d: 'Categorise incoming email by priority, flag urgent items, and prepare draft responses for user review.' },
                { t: 'Calendar coordination', d: 'Identify scheduling conflicts, suggest meeting times, draft scheduling messages, and prepare agenda summaries.' },
                { t: 'Research compilation', d: 'Gather information from specified sources and organise it into a structured summary with source attribution.' },
                { t: 'Drafting assistance', d: 'Generate first drafts of communications and documents from structured input; all reviewed before sending.' },
                { t: 'Task and note management', d: 'Extract action items from meetings and emails into structured tasks; maintain notes on active projects.' },
                { t: 'Workflow integration via n8n', d: 'Trigger email, calendar, and CRM updates through n8n workflows connected to Gmail and task tools.' },
              ].map((item, i) => (
                <ScrollReveal key={item.t} delay={i * 40}>
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <h3 className="text-[#0B1220] font-semibold mb-2">{item.t}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl">
              <h3 className="text-yellow-800 font-bold text-lg mb-3">Project timeline note</h3>
              <p className="text-yellow-800 text-sm leading-relaxed mb-3">
                This project has no confirmed start date. It is queued behind higher-priority projects that are currently in active development. Development will not begin until capacity is available and a developer has been assigned.
              </p>
              <p className="text-yellow-800 text-sm leading-relaxed">
                This page will be updated when a start date is confirmed and when development begins. If you have a specific use case for an AI personal assistant and want to discuss timing and scope, the strategy call is the right place to do that.
              </p>
              <div className="mt-4">
                <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors text-sm">Book Free Strategy Call</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
