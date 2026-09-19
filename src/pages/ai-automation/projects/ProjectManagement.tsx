import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function ProjectManagement() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/ai-automation/" className="hover:text-[#3ECF9E]">AI Automation</Link>
            <span className="mx-2">/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Project Management</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Project Management Dashboard</h1>
            <span className="flex-shrink-0 mt-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-[#3ECF9E]/20 text-[#3ECF9E] border-[#3ECF9E]/40">Live</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            A centralised project management system built on Airtable and n8n that gives teams real-time visibility into task status, deadlines, and workload distribution, without requiring expensive project management software.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What it does</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The project management dashboard provides a structured view of all active work across a team. Projects are broken into tasks and sub-tasks, each with an owner, a due date, a status, and a priority level. The system aggregates this data into a master dashboard that updates in real time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Automated notifications are triggered when tasks move to a new status, when a deadline is approaching, or when a task has been sitting in the same state for longer than a defined threshold. Managers receive a daily digest of team progress without needing to log into the system to find out where things stand.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The system integrates with Slack for real-time notifications, email for digest reports, and Google Calendar for deadline visibility. All data lives in Airtable, which means team members can update task status directly from a familiar interface without learning new tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The configuration layer is designed to be adjusted per team without touching automation logic. Status labels, notification thresholds, escalation paths, and reporting cadences are all stored as settings rather than hard-coded values. A team with different sprint cadences or different definitions of "overdue" can adapt the system without developer involvement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Technical architecture</h2>
            <div className="space-y-3">
              {[
                { label: 'Database', value: 'Airtable (relational base with linked records across projects, tasks, and team members)' },
                { label: 'Automation engine', value: 'n8n for scheduled triggers, status-change webhooks, and event-based workflows' },
                { label: 'Notifications', value: 'Slack webhooks for real-time alerts and SendGrid for email digests' },
                { label: 'Reporting', value: 'Automated weekly PDF report generated from Airtable data and emailed to managers' },
                { label: 'Access control', value: 'Role-based views in Airtable separating manager visibility from team member views' },
                { label: 'Integration', value: 'Google Calendar sync so task deadlines appear alongside personal calendar events' },
                { label: 'Stale task detection', value: 'n8n scheduled workflow checks for tasks unchanged beyond a configurable threshold and flags them' },
                { label: 'Workload view', value: 'Airtable grouped view showing open task count per team member for capacity visibility' },
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
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">How the automation workflows operate</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Status change triggers',
                  body: 'When a task status changes in Airtable, a webhook fires to n8n. The workflow evaluates the new status, determines whether a notification is warranted, identifies the relevant recipients, and sends the appropriate Slack message or email. All notifications include a direct link back to the task record.',
                },
                {
                  title: 'Deadline proximity alerts',
                  body: 'A scheduled n8n workflow runs each morning and queries Airtable for tasks with due dates within a configurable window. Tasks within two days trigger a direct Slack message to the task owner. Tasks that are already past due trigger an escalation alert to the assigned manager.',
                },
                {
                  title: 'Daily digest generation',
                  body: 'At a scheduled time each morning, n8n pulls a summary of all open tasks across projects, groups them by project and status, and formats a digest report. The report is sent by email to each manager showing the state of their team\'s work without requiring a login.',
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
                This system demonstrates how a combination of a spreadsheet-adjacent database tool and a visual automation engine can replace purpose-built project management software for many small and medium teams. The core insight is that most project management needs can be covered by structured data plus triggered notifications, neither of which requires a dedicated SaaS subscription.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                It also shows how to separate configuration from logic in automation workflows. By treating notification thresholds, escalation paths, and digest schedules as data rather than hard-coded values, the same automation framework can serve different team structures without rebuilding workflows.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For teams evaluating whether to buy a project management tool or build one, this project illustrates the trade-offs. Built systems offer higher control and lower ongoing cost at the expense of setup time and maintenance responsibility. The pattern shown here is a practical middle ground.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'An Airtable base configured to the team\'s specific project types, task categories, and status vocabulary',
                  'A self-hosted or cloud-hosted n8n instance with credentials configured for Slack, email, and Google Calendar',
                  'A documented escalation policy so the system knows who receives alerts at each stage',
                  'An onboarding session with the team to establish check-in habits around task status updates',
                  'A review of Airtable record limits and row counts relative to the team\'s expected project volume over time',
                  'A decision on whether Google Calendar sync is bidirectional or one-way, which affects complexity significantly',
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
              { title: 'Teams Running Multiple Projects', desc: 'Teams managing parallel work who need shared task visibility without adopting dedicated PM software.' },
              { title: 'Small Agencies Managing Client Delivery', desc: 'Agencies that need project health at a glance and early deadline alerts without chasing status manually.' },
              { title: 'Ops Teams Moving Off Spreadsheets', desc: 'Internal teams tracking progress in spreadsheets who want structured visibility without a SaaS subscription.' },
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
                'Airtable Team or Business plan with API access enabled.',
                'n8n instance with credentials for Slack, email, and Google Calendar configured.',
                'Team roster in Airtable with each person\'s role and Slack ID or email.',
                'Agreed project taxonomy covering status labels, priority levels, and task categories.',
                'Documented escalation policy specifying alert recipients at each notification stage.',
                'Team commitment to keeping task status current throughout the project lifecycle.',
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
              This project is part of our n8n automation service, which covers workflow design, Airtable base architecture, and ongoing automation support for small and medium teams. If you want a system like this built for your team, the strategy call is the right starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-automation/n8n/" className="inline-block bg-[#0B1220] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1D3A6E] transition-colors">n8n Automation Service</Link>
              <Link to="/book/" className="inline-block border border-[#0B1220] text-[#0B1220] font-semibold px-8 py-3 rounded-full hover:bg-[#0B1220] hover:text-white transition-colors">Book Free Strategy Call</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#3ECF9E] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Need a similar system?</h2>
          <p className="text-[#0B1220]/80 text-lg mb-8 max-w-lg mx-auto">We can build a version of this tailored to your team structure and workflow in 2 to 3 weeks.</p>
          <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
