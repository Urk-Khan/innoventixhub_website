import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function ContentCalendar() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link><span>/</span>
            <span className="text-gray-300">Content Calendar Tool</span>
          </nav>
          <div className="flex gap-3 mb-4">
            <span className="bg-gray-500/20 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-500/30">Queued</span>
            <span className="bg-[#1D3A6E]/40 text-gray-400 text-xs px-3 py-1 rounded-full border border-[#1D3A6E]">Maaz and Rehmat</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Content calendar tool: <span className="text-[#3ECF9E]">scope and project status</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              A planned content management tool for editorial planning, platform-specific scheduling, deadline tracking, and publication reminders. Queued behind the project management and invoice generator tools. Development has not started.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10 max-w-3xl">
              <p className="text-yellow-800 text-sm leading-relaxed">
                <strong>Status note:</strong> This project is queued and has not yet entered development. The scope below describes what is intended, not what is built. No architecture decisions are final, and no delivery timeline has been committed.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-4">Intended scope</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">
              Content teams managing multiple platforms need a central view of what is planned, what is in production, and what is scheduled. This tool is intended to provide that view alongside status tracking, deadline alerts, and platform-specific publishing metadata.
            </p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-8">
              The primary pain point this addresses is context switching. Teams using separate tools for planning, writing, review, and scheduling lose visibility into where each piece is in the workflow. A centralised content calendar with a clear status model and automated deadline reminders is intended to reduce that overhead.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {[
              { t: 'Editorial calendar view', d: 'A calendar or timeline view of all planned content pieces, filterable by platform, status, and responsible team member. The view should make upcoming gaps and deadline clusters visible at a glance.' },
              { t: 'Status workflow', d: 'Content items move through defined states: Idea, Brief, In Production, Review, Approved, Scheduled, Published. Each transition can trigger a notification or a next-step prompt to the responsible person.' },
              { t: 'Platform-specific metadata', d: 'Each piece stores platform-relevant fields such as video title, description, tags, hashtags, posting time recommendations, and format specifications. Fields differ per platform and are shown conditionally.' },
              { t: 'Deadline and reminder automation', d: 'Automated reminders when pieces approach deadlines or have been in a status too long without movement. Reminder thresholds are configurable per content type and platform cadence.' },
              { t: 'Team assignment', d: 'Pieces are assigned to team members with visibility into each person\'s current workload. The tool should make it easy to spot when someone is overloaded and redistribute before deadlines are missed.' },
              { t: 'Data connection', d: 'Planned connection to the project management tool so content production tasks flow into the broader project tracking system. This avoids maintaining two separate views of the same work.' },
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
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">Likely technical approach</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-6">
              The most likely architecture follows the same pattern as the project management dashboard: Airtable as the data layer, n8n for automation workflows, and Slack plus email for notifications. The content calendar view itself would be built as an Airtable calendar view or timeline view, with linked records for platform definitions and team member assignments.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-16">
              {[
                { label: 'Database', value: 'Airtable with linked tables for content items, platforms, and team members' },
                { label: 'Automation', value: 'n8n for deadline checks, status-change notifications, and stale-content alerts' },
                { label: 'Notifications', value: 'Slack and email via the same integration pattern as the project management tool' },
                { label: 'Calendar view', value: 'Airtable native calendar or timeline view (no separate frontend planned at this stage)' },
                { label: 'Integration', value: 'Planned connection to the project management Airtable base via linked records or API' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-[#1D3A6E] font-semibold text-xs uppercase tracking-wide">{item.label}</span>
                  <p className="text-gray-600 text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6">What this project would demonstrate</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-4">
              Once built, this project would demonstrate how a multi-platform content operation can be managed from a single structured database without purpose-built content management software. The key pattern is using linked records to maintain the relationship between a content piece, its platform requirements, its team assignment, and its project context.
            </p>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
              The deadline reminder system would show how time-based automation can be applied to editorial workflows in the same way it is applied to financial and project management tasks. The underlying n8n pattern is identical: query a table for records matching a condition, evaluate the condition, and trigger an appropriate notification.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#0B1220] rounded-2xl p-8 border border-[#1D3A6E] max-w-3xl">
              <h3 className="text-white font-bold text-lg mb-4">What needs to be resolved before development begins</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  'Capacity planning: the project is assigned to Maaz and Rehmat and is queued behind higher-priority builds',
                  'Platform scope: which publishing platforms the calendar needs to support affects the metadata schema significantly',
                  'Integration decision: whether the content calendar shares the project management Airtable base or runs in a separate base',
                  'Status workflow definition: the exact states and transition rules need to be agreed before the base is built',
                  'Approval workflow: whether content requires a formal approval step before moving to Scheduled, and who the approvers are',
                  'Retrospective analysis: whether the tool should track published content performance (views, engagement) or only production status',
                ].map(item => (
                  <li key={item} className="flex gap-2"><span className="text-yellow-400">?</span>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <Link to="/ai-automation/projects/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors mr-4">All Projects</Link>
            <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal className="mb-4">
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-2">Who this system is intended for</h2>
            <p className="text-gray-600 text-sm mb-8 max-w-2xl">The following describes the intended audience once this tool is built. Development has not started.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Multi-Platform Content Teams', desc: 'Teams managing planning, production, and scheduling in separate tools with a fragmented view of deadline risk.' },
              { title: 'Marketing Coordinators and Small Agencies', desc: 'One person coordinating content across multiple contributors who needs a single status and ownership view.' },
              { title: 'Teams Already on the Project Management Base', desc: 'Teams wanting to connect editorial planning into their existing Airtable system rather than maintaining a separate tool.' },
            ].map(card => (
              <ScrollReveal key={card.title}>
                <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100 h-full">
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

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Dependencies and requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              The following are anticipated requirements based on the planned scope. These have not been fully validated since development has not begun.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 max-w-3xl">
              {[
                'A confirmed list of publishing platforms to support, agreed before the Airtable base is built.',
                'A defined status workflow with exact states and transition rules agreed before development starts.',
                'Airtable account with API access, with a decision on shared or separate base.',
                'n8n instance with Slack and email credentials for deadline reminders and stale-content alerts.',
                'A content team roster with individual assignments and platform responsibilities established.',
                'A decision on whether to track published content performance data alongside production status.',
              ].map((item) => (
                <div key={item} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-[#3ECF9E] font-bold mt-0.5 flex-shrink-0">+</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Related service</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              When built, this tool will follow the same automation pattern as our n8n automation service, which covers workflow design, Airtable base architecture, and scheduled notification systems. If you need a content calendar system now rather than waiting for this project to be built, the strategy call is the right place to discuss scope and timing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-automation/n8n/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">n8n Automation Service</Link>
              <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
