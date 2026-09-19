import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function InvoiceGenerator() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/ai-automation/" className="hover:text-[#3ECF9E]">AI Automation</Link>
            <span className="mx-2">/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Invoice Generator</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Invoice Generator</h1>
            <span className="flex-shrink-0 mt-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-[#3ECF9E]/20 text-[#3ECF9E] border-[#3ECF9E]/40">Live</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            An automated invoice generation system that creates, sends, and tracks invoices without any manual intervention. Triggered by project completion events, payment milestones, or time-based schedules.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">How it works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The invoice generator watches for specific trigger events in a CRM or project management system. When a project moves to a defined completion stage, or when a payment milestone date is reached, the automation pulls the relevant billing data and generates a formatted invoice.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The invoice is created as a PDF using a branded template, then sent to the client contact via email. A copy is filed in a designated storage folder and the record is updated in the CRM with the invoice number, amount, and due date.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If payment is not received by the due date, the system triggers a reminder sequence: a polite reminder at the due date, a follow-up three days later, and an escalation notification to the account manager if the invoice is seven days overdue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Payment received events from Stripe or other payment processors automatically mark the invoice as paid in the CRM and stop the reminder sequence. This prevents reminders from continuing to be sent after payment has cleared, which is a common failure point in manual billing processes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Technical details</h2>
            <div className="space-y-3">
              {[
                { label: 'Trigger source', value: 'CRM stage change, date-based schedule, or incoming webhook from project tool' },
                { label: 'Invoice generation', value: 'HTML-to-PDF via Puppeteer or Docupilot using a branded template' },
                { label: 'Delivery', value: 'SendGrid or Gmail API with a tracked email link to the invoice PDF' },
                { label: 'Payment tracking', value: 'Stripe webhook integration marks invoices as paid and halts reminder sequences' },
                { label: 'Storage', value: 'Google Drive with structured folder naming by client and period' },
                { label: 'Automation engine', value: 'n8n with error handling, retry logic, and failed-send alerting' },
                { label: 'Reminder sequence', value: 'Multi-step n8n workflow with configurable timing and escalation thresholds' },
                { label: 'Audit trail', value: 'Each invoice state change is logged in the CRM with a timestamp and actor' },
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
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">The billing lifecycle in detail</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Generation',
                  body: 'The n8n workflow pulls client name, billing address, line items, and tax rate from the CRM or project record. These values are injected into the branded HTML template, which is then rendered to a PDF. Invoice numbers are generated sequentially with a configurable prefix. The whole process takes under a minute from trigger to delivery.',
                },
                {
                  title: 'Tracking and chasing',
                  body: 'Once sent, the invoice record in the CRM is marked as "Sent" with a timestamp. A scheduled n8n workflow checks daily for invoices past their due date. At each configured interval, it sends the appropriate follow-up message. If the invoice reaches the escalation threshold without payment, the assigned account manager receives a direct alert.',
                },
                {
                  title: 'Payment reconciliation',
                  body: 'When Stripe receives a payment, it fires a webhook to n8n. The workflow matches the payment to the open invoice by reference number or amount, updates the CRM status to "Paid", cancels any pending reminders, and files a payment confirmation in the client folder. Manual reconciliation for non-Stripe payments is supported via a simple form update.',
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
                The invoice generator shows how event-driven automation can replace a recurring manual task that most service businesses handle the same way every time. The key pattern is the state machine: an invoice moves through a defined set of states (Draft, Sent, Overdue, Paid, Escalated) and each state transition triggers a specific automated action.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                It also demonstrates how to handle external payment events safely. Rather than polling for payment status, the system listens for an inbound webhook from Stripe, processes it idempotently, and updates downstream records without requiring human input. This approach is more reliable than scheduled checks and avoids sending reminders after payment has already cleared.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The error handling layer is equally important. The automation logs every failed email send, surfaces it to a monitoring Slack channel, and retries on a defined schedule. Silent failures in billing automation are costly, so visibility into every step is built in from the start.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'A branded invoice HTML template aligned to the company\'s design and legal requirements (including required tax fields per jurisdiction)',
                  'CRM configuration to expose project stage and billing data in a consistent structure the automation can read',
                  'A Stripe account with webhooks configured, or an alternative payment processor with equivalent webhook support',
                  'A Google Drive folder structure agreed in advance for organised invoice archiving',
                  'A self-hosted or cloud-hosted n8n instance with SMTP or SendGrid credentials and Stripe API access',
                  'A decision on escalation policy: who receives overdue alerts and at what intervals, documented before the workflow is configured',
                  'Testing with real invoice data in a staging environment before going live to catch edge cases in amount formatting, tax calculation, and address fields',
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
              { title: 'Service Businesses Invoicing on Completion', desc: 'Businesses generating invoices manually from templates who want automated, consistent billing on project milestones.' },
              { title: 'Agencies With Recurring Client Billing', desc: 'Agencies with predictable invoice cycles spending regular hours on manual generation, sending, and chasing.' },
              { title: 'Stripe-Powered Small Businesses', desc: 'Businesses using Stripe who want overdue reminders and payment reconciliation handled automatically.' },
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
                'A branded invoice HTML template aligned to your design and jurisdiction\'s legal requirements.',
                'A CRM that exposes project stage and billing data via webhook or API.',
                'A Stripe account with webhooks configured to fire on payment receipt.',
                'A Google Drive folder structure agreed in advance for organised invoice storage.',
                'n8n instance with SendGrid and Stripe credentials configured and error monitoring active.',
                'A documented escalation policy covering who receives overdue alerts and at what intervals.',
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
              This project is part of our small business automation service, which covers billing workflows, CRM integration, and n8n-based automation for service businesses. If you want an automated invoicing system built around your billing process, the strategy call is the right starting point.
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
          <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Automate your billing process</h2>
          <p className="text-[#0B1220]/80 text-lg mb-8 max-w-lg mx-auto">We can adapt this system for your invoicing workflow and integrate it with your existing tools.</p>
          <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
