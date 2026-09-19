import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const projects = [
  {
    title: 'AI Project Management System',
    cat: 'AI Automation',
    desc: 'Full project management dashboard with AI-powered task prioritisation, team assignment, and deadline tracking. Built on n8n with a custom React frontend.',
    tags: ['n8n', 'React', 'AI'],
    href: '/ai-automation/projects/project-management/',
    img: 'photo-1551288049-bebda4e38f71',
  },
  {
    title: 'Invoice Generator',
    cat: 'AI Automation',
    desc: 'Automated invoice generation triggered by CRM deal close events. PDF generation, email delivery, and payment status tracking with automated reminders.',
    tags: ['n8n', 'PDF', 'CRM'],
    href: '/ai-automation/projects/invoice-generator/',
    img: 'photo-1554224155-6726b3ff858f',
  },
  {
    title: 'Finance Tracker Dashboard',
    cat: 'AI Automation',
    desc: 'Real-time finance tracking dashboard pulling data from multiple sources. Revenue, expenses, and cash flow visualised with automated weekly summary reports.',
    tags: ['Dashboard', 'Finance', 'Automation'],
    href: '/ai-automation/projects/finance-tracker/',
    img: 'photo-1611974789855-9c2a0a7236a3',
  },
  {
    title: 'Lead Management CRM',
    cat: 'Custom CRM',
    desc: 'Custom CRM built for a service business with lead scoring, pipeline stages, automated follow-up sequences, and team activity logging.',
    tags: ['CRM', 'Lead Scoring', 'Pipeline'],
    href: '/ai-automation/projects/lead-management/',
    img: 'photo-1460925895917-afdab827c52f',
  },
  {
    title: 'AI Personal Assistant',
    cat: 'AI Automation',
    desc: 'Conversational AI assistant integrated with calendar, email, and task management. Schedules meetings, drafts replies, and surfaces daily priorities.',
    tags: ['AI', 'Calendar', 'Email'],
    href: '/ai-automation/projects/ai-personal-assistant/',
    img: 'photo-1677442136019-21780ecad995',
  },
  {
    title: 'Attendance Tracker',
    cat: 'AI Automation',
    desc: 'Automated staff attendance tracking with check-in notifications, absence alerts, and monthly attendance reports delivered to management.',
    tags: ['HR', 'Automation', 'Notifications'],
    href: '/ai-automation/projects/attendance-tracker/',
    img: 'photo-1521737604893-d14cc237f11d',
  },
  {
    title: 'Content Calendar System',
    cat: 'AI Automation',
    desc: 'AI-assisted content calendar that generates post ideas, schedules publishing across platforms, and tracks engagement metrics per piece.',
    tags: ['Content', 'AI', 'Scheduling'],
    href: '/ai-automation/projects/content-calendar/',
    img: 'photo-1611532736597-de2d4265fba3',
  },
  {
    title: 'Taxi Booking (Retell AI)',
    cat: 'AI Voice',
    desc: 'Inbound voice agent for a taxi company. Handles calls, collects pickup and destination, checks driver availability, and confirms bookings via SMS.',
    tags: ['Retell AI', 'Voice', 'Taxi'],
    href: '/ai-automation/projects/taxi-booking-retell/',
    img: 'photo-1549317661-bd32c8ce0db2',
  },
  {
    title: 'Taxi Booking (Pipecat)',
    cat: 'AI Voice',
    desc: 'Real-time voice pipeline for taxi dispatch using Pipecat. Low-latency conversation with live availability checks and confirmation message dispatch.',
    tags: ['Pipecat', 'Voice', 'Real-time'],
    href: '/ai-automation/projects/taxi-booking-pipecat/',
    img: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    title: 'Legacy CRM Replacement',
    cat: 'Custom CRM',
    desc: 'Full migration from a legacy on-premise CRM to a modern cloud-based custom system. Data migration, retraining, and a 30-day parallel run.',
    tags: ['Migration', 'CRM', 'Custom'],
    href: '/ai-automation/projects/custom-crm/',
    img: 'photo-1460925895917-afdab827c52f',
  },
]

const catColor: Record<string, string> = {
  'AI Automation': 'rgba(62,207,158,0.15)',
  'Custom CRM': 'rgba(124,58,237,0.2)',
  'AI Voice': 'rgba(245,158,11,0.15)',
}
const catText: Record<string, string> = {
  'AI Automation': '#3ECF9E',
  'Custom CRM': '#a78bfa',
  'AI Voice': '#fbbf24',
}

export default function Projects() {
  return (
    <Layout>
      <section className="relative pt-24 pb-16 overflow-hidden" style={{ background: '#050B18' }}>
        <div className="absolute inset-0 grid-texture pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(62,207,158,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
              <Link to="/ai-automation/" className="hover:text-[#3ECF9E] transition-colors">AI Automation</Link>
              <span>/</span><span className="text-gray-300">Projects</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
              Automation Projects
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-[0.95]">
              Real builds.<br />
              <span className="gradient-text">Working demos.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
              A portfolio of automation builds, CRM systems, and AI voice agents built by the Innoventix Hub team. Every project listed here is a real, functional system.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60} direction="scale">
                <Link to={p.href} className="block group h-full">
                  <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col">
                    <div className="relative h-44 overflow-hidden shrink-0">
                      <img src={unsplash(p.img, 600, 350)} alt={p.title} loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ opacity: 0.6 }} />
                      <div className="absolute inset-0 img-fade-bottom" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: catColor[p.cat], color: catText[p.cat] }}>
                          {p.cat}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-black text-lg text-white mb-2 group-hover:text-[#3ECF9E] transition-colors">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.tags.map(t => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(62,207,158,0.07)', border: '1px solid rgba(62,207,158,0.15)', color: '#a8f0da' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About these projects */}
      <section className="py-20 relative" style={{ background: '#050B18' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" style={{ color: '#3ECF9E', background: 'rgba(62,207,158,0.08)', border: '1px solid rgba(62,207,158,0.2)' }}>
                About These Projects
              </span>
              <h2 className="font-display font-black text-4xl text-white mt-4 mb-5">
                What these project<br />
                <span className="gradient-text">pages represent.</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>The projects listed here represent work at different stages of development and production. Not all projects are complete, and none are presented as complete unless their status is Live. A project card links to a detail page with the current state of the build, the tools and stack used, and any available demo or documentation.</p>
                <p>Status labels reflect the current state accurately. If a build is in progress or queued, that is what the label says. We do not retroactively mark a project as complete until it meets the criteria for a Live designation.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-4">
                {[
                  { status: 'Live', color: '#3ECF9E', bg: 'rgba(62,207,158,0.1)', border: 'rgba(62,207,158,0.25)', desc: 'The build is deployed and functional. The system operates as described on the project page. A live demo or documented output is available.' },
                  { status: 'In Development', color: '#a78bfa', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', desc: 'The build is actively in progress. Core components exist but the system is not yet production-ready. Subject to change before completion.' },
                  { status: 'Queued', color: '#fbbf24', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', desc: 'The project is scoped and planned but work has not yet begun. It is next in line after current active builds are completed.' },
                  { status: 'Paused', color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.15)', desc: 'Work on this project is temporarily on hold. It may resume when the blocking dependency, resourcing, or requirement is resolved.' },
                ].map((item) => (
                  <div key={item.status} className="glass-card rounded-xl p-5 card-lift flex items-start gap-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5" style={{ background: item.bg, color: item.color, border: `1px solid ${item.border}` }}>
                      {item.status}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative" style={{ background: 'rgba(10,22,40,0.6)' }}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal direction="scale">
            <div className="glass-card rounded-3xl px-8 py-14 max-w-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-3xl mint-border-pulse" />
              <div className="relative">
                <h2 className="font-display font-black text-4xl text-white mb-4">
                  Have a project<br />
                  <span className="gradient-text">in mind?</span>
                </h2>
                <p className="text-gray-400 mb-8">Book a free strategy call. We will scope your automation project and give you a realistic build estimate.</p>
                <Link to="/book/" className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-display font-bold text-base"
                  style={{ background: '#3ECF9E', color: '#050B18' }}>
                  Book Free Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
