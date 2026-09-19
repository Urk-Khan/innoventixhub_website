import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout'
import ScrollReveal from '../../../components/ScrollReveal'

export default function FinanceTracker() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to="/ai-automation/" className="hover:text-[#3ECF9E]">AI Automation</Link>
            <span className="mx-2">/</span>
            <Link to="/ai-automation/projects/" className="hover:text-[#3ECF9E]">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Finance Tracker</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Finance Tracker</h1>
            <span className="flex-shrink-0 mt-2 text-xs font-medium px-3 py-1.5 rounded-full border bg-[#3ECF9E]/20 text-[#3ECF9E] border-[#3ECF9E]/40">Live</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            A lightweight financial tracking dashboard that aggregates income and expense data from multiple sources, categorises transactions automatically, and delivers structured reports without requiring accounting software.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What it tracks</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The finance tracker pulls transaction data from connected bank accounts, payment processors, and invoicing tools on a daily schedule. Each transaction is categorised using a rule-based classification system that can be trained to recognise patterns specific to your business.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The data populates a structured dashboard showing revenue by category, expenses by category, net profit by month, and a rolling comparison against the previous period. Budget targets can be set per category with automated alerts when spending approaches or exceeds a threshold.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A monthly summary report is generated automatically and delivered to the business owner via email. The report includes a narrative summary of the period, flagged anomalies, and a comparison to the previous month and the same month in the prior year.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Uncategorised transactions are surfaced in a review queue rather than silently dropped. The owner or bookkeeper can assign a category through a simple interface, and the system learns from that assignment to handle similar transactions automatically in future.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">Technical stack</h2>
            <div className="space-y-3">
              {[
                { label: 'Data sources', value: 'Stripe, PayPal, bank CSV imports, and manual entry via Airtable form' },
                { label: 'Storage', value: 'Airtable with separate tables for transactions, categories, and budget targets' },
                { label: 'Automation', value: 'n8n for scheduled data pull, rule-based classification, and report generation' },
                { label: 'Reporting', value: 'Automated monthly PDF with category charts and period comparison' },
                { label: 'Alerts', value: 'Email and Slack notifications for budget threshold breaches and uncategorised backlogs' },
                { label: 'Access', value: 'Airtable interface with separate views for owner and accountant roles' },
                { label: 'Classification logic', value: 'Rule table in Airtable matched against transaction description and amount patterns' },
                { label: 'Anomaly detection', value: 'n8n workflow flags transactions outside expected ranges for manual review' },
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
            <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">How the data flow works</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Daily data ingestion',
                  body: 'Each morning, an n8n workflow queries the connected payment processors and bank import folders for new transactions since the last run. Each transaction is written to the Airtable transactions table with a raw description, source, amount, and date. Duplicate detection prevents the same transaction being recorded twice if it appears in multiple sources.',
                },
                {
                  title: 'Automatic categorisation',
                  body: 'After ingestion, each new transaction is run through the classification rule table. Rules are matched in order of specificity: exact description match first, then keyword match, then amount range. Matched transactions are automatically assigned a category and marked as classified. Unmatched transactions are placed in a review queue and the owner is notified.',
                },
                {
                  title: 'Monthly report generation',
                  body: 'On the first day of each month, n8n queries the previous month\'s transactions, groups them by category, calculates totals, and compares them against the prior period and the same month in the previous year. A formatted PDF report is generated and emailed to the business owner. Anomalies detected during the period are summarised in the report rather than buried.',
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
                The finance tracker demonstrates how small businesses can get structured financial visibility without subscribing to accounting software. The core pattern is a classification engine built on a maintained rule table rather than a machine learning model, which makes it auditable and adjustable without technical involvement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The review queue pattern is important. Instead of silently categorising ambiguous transactions or silently dropping them, the system surfaces them explicitly. This keeps the data clean without requiring the owner to review every transaction manually, only the ones the system could not handle.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The reporting layer shows how periodic summary documents can be generated from structured data without a separate reporting tool. The same Airtable base that stores raw transactions can produce a formatted monthly report through a template-driven generation step in n8n. This avoids the need for a BI tool for basic financial reporting.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-extrabold text-[#0B1220] mb-6">What would be needed to deploy this in production</h2>
              <ul className="space-y-3">
                {[
                  'A chart of accounts and category list agreed with the business owner or their accountant before the classification rules are written',
                  'Bank data access either through direct API (where available) or a defined CSV export and upload process',
                  'Stripe and PayPal credentials configured in n8n with read-only API access scoped to transaction data only',
                  'An initial categorisation pass on historical transactions to populate the rule table before live operation begins',
                  'A defined review cadence for the uncategorised queue so it does not accumulate between reporting periods',
                  'A decision on what constitutes an anomaly, documented as thresholds the system can evaluate rather than requiring human judgment each time',
                  'Accountant access set up separately with view-only permissions to protect financial data from accidental modification',
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
              { title: 'Business Owners With Multiple Income Sources', desc: 'Owners receiving payments via Stripe, PayPal, and bank transfers who currently reconcile manually each month.' },
              { title: 'Founders Who Want Automatic Monthly Reports', desc: 'Operators who want a financial summary delivered automatically without logging into an accounting tool.' },
              { title: 'Businesses Without Full Accounting Software', desc: 'Teams needing structured revenue and expense visibility on a recurring basis without a full accounting platform.' },
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
                'A chart of accounts agreed with the owner or accountant before classification rules are written.',
                'Bank data access via direct API or a defined CSV export and upload process.',
                'Stripe and PayPal API credentials in n8n with read-only access to transaction data.',
                'An initial categorisation pass on historical transactions to seed the rule table.',
                'A defined review cadence for the uncategorised queue to prevent backlog between reports.',
                'Anomaly thresholds documented as rules the system can evaluate without human judgment.',
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
              This project is part of our small business automation service, which covers financial tracking, reporting workflows, and n8n-based automation for owners who want structured financial visibility without subscribing to a full accounting platform. If this is the kind of system you need, the strategy call is the right place to start.
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
          <h2 className="text-3xl font-extrabold text-[#0B1220] mb-4">Get financial clarity without the overhead</h2>
          <p className="text-[#0B1220]/80 text-lg mb-8 max-w-lg mx-auto">Book a strategy call to discuss how a finance tracker system can be built around your accounts and reporting needs.</p>
          <Link to="/book/" className="inline-block bg-[#0B1220] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1D3A6E] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
