import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function AttendanceTracker() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/ai-automation/" className="hover:text-[#3ECF9E]">AI Automation</Link>
            <span className="mx-2">/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Attendance Tracker</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Attendance Tracker</h1>
            <span className="flex-shrink-0 mt-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-[#3ECF9E]/20 text-[#3ECF9E] border-[#3ECF9E]/40">Live</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Automated team attendance logging with check-in reminders, absence alerts to managers, and monthly attendance summary reports delivered without manual data entry.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">How it works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Team members log their attendance via a simple form or a Slack command. The system records the check-in time, the location or remote status, and any notes. Check-in reminders are sent automatically at the start of each working day to anyone who has not yet logged.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If a team member misses a check-in and does not respond to the reminder within a defined window, the system sends an alert to their manager. Late arrivals and absences are flagged automatically without requiring the manager to monitor a spreadsheet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Monthly attendance reports are generated automatically and include individual attendance rates, late arrival patterns, total hours logged, and a comparison against the prior month. Reports are delivered to management via email.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The check-in window is configurable per team. A customer support team starting at 8am and a development team starting at 10am can both be managed by the same system with different reminder schedules and different acceptable-response windows before an absence is flagged.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Stack</h2>
            <div className="space-y-3">
              {[
                { label: 'Check-in method', value: 'Slack slash command or Google Form, with a timestamped record of each submission' },
                { label: 'Storage', value: 'Airtable attendance log with linked team member records and shift definitions' },
                { label: 'Reminders', value: 'n8n scheduled workflow fires morning reminders to unchecked team members via Slack and email' },
                { label: 'Alerts', value: 'Manager Slack DM and email on missed check-in after the defined response window closes' },
                { label: 'Reporting', value: 'Automated monthly PDF summary with per-person attendance rates and late arrival patterns' },
                { label: 'Holiday handling', value: 'Public holiday calendar integrated to suppress reminders on non-working days' },
                { label: 'Leave logging', value: 'Planned or pre-approved absences can be logged in advance to prevent false absence alerts' },
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
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Workflow detail</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Morning check-in cycle',
                  body: 'At the configured start time for each team, n8n queries the attendance log for team members who have not yet checked in today. It sends a reminder via Slack or email with a direct link to the check-in form. After a configurable waiting window (typically 30 to 60 minutes), it runs the query again and escalates any remaining unchecked members to their manager.',
                },
                {
                  title: 'Absence and late arrival handling',
                  body: 'When the escalation check fires, n8n creates an absence record in Airtable and sends the manager a notification with the team member\'s name, their scheduled start time, and the current time. The manager can acknowledge the alert and update the record directly from Airtable. This creates an audit trail without requiring the manager to maintain a manual register.',
                },
                {
                  title: 'Monthly report generation',
                  body: 'On the first working day of each month, n8n calculates the previous month\'s attendance statistics per team member: days present, days absent, days late, and average check-in time. These are compiled into a formatted PDF and emailed to the relevant manager or HR contact. The underlying data remains in Airtable for any further analysis.',
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
                The attendance tracker demonstrates how a lightweight form-plus-automation stack can replace a manual process that many teams still run on spreadsheets or memory. The system does not require biometric hardware, dedicated HR software, or any custom application development. It runs on tools most teams already have access to.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The configurable window and shift-aware design show how the same automation framework can serve teams with different working patterns. Rather than building separate workflows for each team, the system reads its configuration from a table and applies it dynamically. Adding a new team or changing a shift time is an Airtable record update, not a workflow change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The pre-approved absence feature illustrates a common requirement in HR automation: the system needs to distinguish between an unexpected absence and a planned one. Without this distinction, a planned holiday becomes a false alert that erodes trust in the system. Handling it correctly requires a pre-declaration step, which the leave logging field provides.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'A team roster in Airtable with each member\'s shift schedule, manager assignment, and Slack user ID or email address',
                  'A public holiday calendar for the relevant country or region so reminders are suppressed on non-working days',
                  'A defined escalation policy: how long after a missed check-in should the manager be notified, and what should they do with the alert',
                  'A leave request process that feeds into the Airtable leave log before the day in question, so planned absences do not trigger false alerts',
                  'Slack workspace access and a configured n8n Slack node, or an email-only fallback if Slack is not in use',
                  'A privacy review for any jurisdictions with employee monitoring regulations, particularly if the system records location data alongside check-in times',
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
              { title: 'Teams Tracking Attendance Manually', desc: 'Managers checking attendance by hand or maintaining spreadsheets nobody keeps consistently up to date.' },
              { title: 'Businesses With Mixed Shift Schedules', desc: 'Companies with different teams starting at different times that a single manual process cannot accommodate.' },
              { title: 'Ops Teams Needing Monthly Attendance Records', desc: 'Teams needing payroll or HR compliance records each month without investing in dedicated HR software.' },
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
                'Team roster in Airtable with shift schedules, manager assignments, and Slack IDs or emails.',
                'Public holiday calendar integrated to suppress reminders on non-working days.',
                'Defined escalation policy covering when managers are notified of missed check-ins.',
                'Leave request process that pre-logs planned absences to prevent false alerts.',
                'Slack workspace access and a configured n8n Slack node, or email-only as a fallback.',
                'Privacy review for jurisdictions with employee monitoring regulations before location data is collected.',
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
              This project is part of our small business automation service, which covers operations workflows, team management automation, and n8n-based systems for businesses that want to replace manual admin processes without adopting heavy HR software. If this fits what you need, the strategy call is the right next step.
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
          <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Automate team attendance tracking</h2>
          <p className="text-[#0B1220]/80 text-lg mb-8 max-w-lg mx-auto">Book a strategy call to discuss building this for your team size and structure.</p>
          <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
