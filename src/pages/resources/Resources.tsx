import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ScrollReveal from '../../components/ScrollReveal'

const articles = [
  { slug: 'video-editing-brief', title: 'Video Editing Brief Template for Brands', category: 'Content Creation', desc: 'A practical checklist for preparing your video editing brief, covering goals, formats, reference styles, and feedback rules.' },
  { slug: 'repurpose-long-videos-into-shorts', title: 'How to Repurpose Long Videos into Shorts', category: 'Content Creation', desc: 'A repeatable process for selecting clips, reframing footage, adding captions, and reviewing short-form cuts.' },
  { slug: 'video-editing-cost-factors', title: 'Video Editing Costs: What Changes the Quote?', category: 'Content Creation', desc: 'How footage length, graphics, revisions, and delivery formats affect a video editing quote.' },
  { slug: 'youtube-production-workflow', title: 'YouTube Production Workflow: From Brief to Publish', category: 'Content Creation', desc: 'Mapping the steps from planning and editing to thumbnails, publishing, and review.' },
  { slug: 'ai-ugc-vs-creator-ugc', title: 'AI UGC vs Creator UGC: Choosing Your Format', category: 'Content Creation', desc: 'Comparing AI-generated and creator-led video by production process, creative control, and authenticity.' },
  { slug: 'ai-product-video-brief', title: 'AI Product Video Brief: Assets and Creative Direction', category: 'Content Creation', desc: 'How to prepare an AI product video brief with assets, audience, scripts, and approval checks.' },
  { slug: 'small-business-automation-audit', title: 'Small Business Automation Audit Checklist', category: 'AI Automation', desc: 'Find repetitive work worth automating with a checklist covering volume, effort, errors, and handoffs.' },
  { slug: 'n8n-vs-zapier', title: 'n8n vs Zapier: How to Choose for Your Workflow', category: 'AI Automation', desc: 'Comparing n8n and Zapier using workflow complexity, hosting, maintenance, and integration needs.' },
  { slug: 'ghl-migration-checklist', title: 'GoHighLevel Migration Checklist for Your CRM', category: 'AI Automation', desc: 'Planning a GoHighLevel migration with checks for fields, contacts, pipelines, and cutover.' },
  { slug: 'custom-crm-vs-off-the-shelf', title: 'Custom CRM vs Off-the-Shelf: A Decision Guide', category: 'AI Automation', desc: 'Comparing custom CRM development and ready-made platforms by workflows, integrations, and maintenance.' },
  { slug: 'lead-follow-up-automation', title: 'Lead Follow-Up Automation: A Practical Workflow', category: 'AI Automation', desc: 'Mapping a lead follow-up workflow from enquiry to qualification and handoff.' },
  { slug: 'n8n-error-handling-monitoring', title: 'n8n Error Handling and Monitoring Checklist', category: 'AI Automation', desc: 'Planning error handling, retries, alerts, and monitoring for n8n workflows.' },
  { slug: 'ai-voice-agent-human-handoff', title: 'AI Voice Agent Human Handoff: A Planning Guide', category: 'AI Voice Agents', desc: 'Designing clear human handoff paths for an AI voice agent, including escalation triggers and fallback behavior.' },
  { slug: 'retell-vs-vapi', title: 'Retell vs Vapi: Voice Agent Evaluation Checklist', category: 'AI Voice Agents', desc: 'Evaluating Retell and Vapi against your call flow, integration, and operational requirements.' },
  { slug: 'ai-voice-agent-cost-factors', title: 'AI Voice Agent Costs: What to Include in Your Budget', category: 'AI Voice Agents', desc: 'Planning a voice agent budget around development, call usage, telephony, and maintenance.' },
  { slug: 'taxi-voice-agent-dispatch-integration', title: 'Taxi Voice AI: Dispatch API Integration Checklist', category: 'AI Voice Agents', desc: 'Reviewing dispatch API requirements for a taxi booking voice agent.' },
  { slug: 'ai-receptionist-pilot-checklist', title: 'AI Receptionist Pilot Checklist for Business Calls', category: 'AI Voice Agents', desc: 'Planning an AI receptionist pilot with call scenarios, knowledge boundaries, and review criteria.' },
  { slug: 'voice-agent-crm-integration', title: 'Voice Agent CRM Integration: Fields and Handoffs', category: 'AI Voice Agents', desc: 'Mapping how a voice agent should read and update your CRM, and handle failures.' },
  { slug: 'wordpress-vs-custom-website', title: 'WordPress vs Custom Website: Choosing Your Build', category: 'Web Development', desc: 'Comparing WordPress and custom website development by editing needs, integrations, and maintenance.' },
  { slug: 'saas-dashboard-ux-checklist', title: 'SaaS Dashboard UX Checklist for Product Teams', category: 'Web Development', desc: 'Reviewing navigation, data hierarchy, empty states, and accessibility in a SaaS dashboard.' },
  { slug: 'website-migration-seo-checklist', title: 'Website Migration SEO Checklist for Site Owners', category: 'Web Development', desc: 'Planning a website migration with URL mapping, redirects, canonicals, and post-launch checks.' },
  { slug: 'wordpress-performance-audit', title: 'WordPress Performance Audit: A Practical Checklist', category: 'Web Development', desc: 'Reviewing WordPress performance using page templates, real-user metrics, scripts, and images.' },
  { slug: 'custom-portal-development-requirements', title: 'Customer Portal Requirements: A Planning Checklist', category: 'Web Development', desc: 'Scoping a customer portal with user roles, permissions, workflows, and integrations.' },
  { slug: 'web-app-development-cost-factors', title: 'Web App Development Costs: Scope and Trade-Offs', category: 'Web Development', desc: 'Understanding how features, integrations, permissions, and support shape web app costs.' },
]

const categories = ['All', 'Content Creation', 'AI Automation', 'AI Voice Agents', 'Web Development']
const catColors: Record<string, string> = {
  'Content Creation': 'bg-purple-100 text-purple-700',
  'AI Automation': 'bg-blue-100 text-blue-700',
  'AI Voice Agents': 'bg-green-100 text-green-700',
  'Web Development': 'bg-orange-100 text-orange-700',
}

export default function Resources() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #1D3A6E 0%, transparent 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Practical guides from the Innoventix Hub team</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed mb-4">Twenty-four guides covering AI automation, voice agents, content production, and web development. Written by the practitioners who do the work, not content generalists.</p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">Each guide addresses a specific decision, checklist, or planning task that comes up when building real systems. The automation guides cover workflow architecture, tool selection, and operational considerations. The voice agent guides cover platform evaluation, integration planning, and pilot design. The content guides cover production workflows, briefing, and format decisions. The web development guides cover build decisions, migration planning, and performance. None of these guides guarantee outcomes or make claims about what a specific tool will do for your business. They are structured reference materials designed to improve the quality of your planning conversations and brief preparation.</p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-gray-600 text-sm leading-relaxed text-center">The library is organized across four topic areas: Content Creation covers video production, YouTube channel management, and AI-generated content. AI Automation covers workflow tools, CRM decisions, and operational process design. AI Voice Agents covers platform selection, integration architecture, and call flow planning. Web Development covers build decisions, migration, and performance. Use the filters below or browse the full set. If a guide addresses a project you are actively scoping, the strategy call is the right next step after reading it.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <span key={cat} className="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full cursor-default">{cat}</span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 30}>
                <Link to={`/resources/${article.slug}/`} className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#3ECF9E] hover:shadow-md transition-all h-full group">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${catColors[article.category]}`}>{article.category}</span>
                  <h3 className="text-[#0B1220] font-bold text-base mb-2 leading-snug group-hover:text-[#1D3A6E] transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{article.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1220] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">Ready to put these ideas to work?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Book a free strategy call and we will identify the specific automations, content workflows, or web tools that will have the most impact on your business.</p>
          <Link to="/book/" className="inline-block bg-[#3ECF9E] text-[#0B1220] font-bold px-8 py-4 rounded-full hover:bg-[#2AB584] transition-colors">Book Free Strategy Call</Link>
        </div>
      </section>
    </Layout>
  )
}
