import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

const ContentCreation = lazy(() => import('./pages/content-creation/ContentCreation'))
const VideoEditing = lazy(() => import('./pages/content-creation/VideoEditing'))
const YouTubeAutomation = lazy(() => import('./pages/content-creation/YouTubeAutomation'))
const AiUgc = lazy(() => import('./pages/content-creation/AiUgc'))
const ContentPortfolio = lazy(() => import('./pages/content-creation/Portfolio'))

const AiAutomation = lazy(() => import('./pages/ai-automation/AiAutomation'))
const Smb = lazy(() => import('./pages/ai-automation/Smb'))
const CustomCrm = lazy(() => import('./pages/ai-automation/CustomCrm'))
const Ghl = lazy(() => import('./pages/ai-automation/Ghl'))
const N8n = lazy(() => import('./pages/ai-automation/N8n'))
const Projects = lazy(() => import('./pages/ai-automation/Projects'))
const ProjectManagement = lazy(() => import('./pages/ai-automation/projects/ProjectManagement'))
const InvoiceGenerator = lazy(() => import('./pages/ai-automation/projects/InvoiceGenerator'))
const FinanceTracker = lazy(() => import('./pages/ai-automation/projects/FinanceTracker'))
const LeadManagement = lazy(() => import('./pages/ai-automation/projects/LeadManagement'))
const AttendanceTracker = lazy(() => import('./pages/ai-automation/projects/AttendanceTracker'))
const ContentCalendar = lazy(() => import('./pages/ai-automation/projects/ContentCalendar'))
const TaxiBookingRetell = lazy(() => import('./pages/ai-automation/projects/TaxiBookingRetell'))
const TaxiBookingPipecat = lazy(() => import('./pages/ai-automation/projects/TaxiBookingPipecat'))
const AiPersonalAssistant = lazy(() => import('./pages/ai-automation/projects/AiPersonalAssistant'))
const LegacyCrm = lazy(() => import('./pages/ai-automation/projects/LegacyCrm'))

const AiVoiceAgents = lazy(() => import('./pages/ai-voice-agents/AiVoiceAgents'))
const UseCases = lazy(() => import('./pages/ai-voice-agents/UseCases'))
const Integrations = lazy(() => import('./pages/ai-voice-agents/Integrations'))
const Demos = lazy(() => import('./pages/ai-voice-agents/Demos'))
const TaxiBookingVoice = lazy(() => import('./pages/ai-voice-agents/TaxiBooking'))

const WebDevelopment = lazy(() => import('./pages/web-development/WebDevelopment'))
const Custom = lazy(() => import('./pages/web-development/Custom'))
const WordPress = lazy(() => import('./pages/web-development/WordPress'))
const WebDesignUx = lazy(() => import('./pages/web-development/WebDesignUx'))
const WebPortfolio = lazy(() => import('./pages/web-development/WebPortfolio'))

const Resources = lazy(() => import('./pages/resources/Resources'))
const VideoEditingBrief = lazy(() => import('./pages/resources/articles/VideoEditingBrief'))
const RepurposeLongVideos = lazy(() => import('./pages/resources/articles/RepurposeLongVideos'))
const VideoEditingCostFactors = lazy(() => import('./pages/resources/articles/VideoEditingCostFactors'))
const YoutubeProductionWorkflow = lazy(() => import('./pages/resources/articles/YoutubeProductionWorkflow'))
const AiUgcVsCreatorUgc = lazy(() => import('./pages/resources/articles/AiUgcVsCreatorUgc'))
const AiProductVideoBrief = lazy(() => import('./pages/resources/articles/AiProductVideoBrief'))
const SmallBusinessAutomationAudit = lazy(() => import('./pages/resources/articles/SmallBusinessAutomationAudit'))
const N8nVsZapier = lazy(() => import('./pages/resources/articles/N8nVsZapier'))
const GhlMigrationChecklist = lazy(() => import('./pages/resources/articles/GhlMigrationChecklist'))
const CustomCrmVsOffTheShelf = lazy(() => import('./pages/resources/articles/CustomCrmVsOffTheShelf'))
const LeadFollowUpAutomation = lazy(() => import('./pages/resources/articles/LeadFollowUpAutomation'))
const N8nErrorHandlingMonitoring = lazy(() => import('./pages/resources/articles/N8nErrorHandlingMonitoring'))
const AiVoiceAgentHumanHandoff = lazy(() => import('./pages/resources/articles/AiVoiceAgentHumanHandoff'))
const RetellVsVapi = lazy(() => import('./pages/resources/articles/RetellVsVapi'))
const AiVoiceAgentCostFactors = lazy(() => import('./pages/resources/articles/AiVoiceAgentCostFactors'))
const TaxiVoiceAgentDispatchIntegration = lazy(() => import('./pages/resources/articles/TaxiVoiceAgentDispatchIntegration'))
const AiReceptionistPilotChecklist = lazy(() => import('./pages/resources/articles/AiReceptionistPilotChecklist'))
const VoiceAgentCrmIntegration = lazy(() => import('./pages/resources/articles/VoiceAgentCrmIntegration'))
const WordpressVsCustomWebsite = lazy(() => import('./pages/resources/articles/WordpressVsCustomWebsite'))
const SaasDashboardUxChecklist = lazy(() => import('./pages/resources/articles/SaasDashboardUxChecklist'))
const WebsiteMigrationSeoChecklist = lazy(() => import('./pages/resources/articles/WebsiteMigrationSeoChecklist'))
const WordpressPerformanceAudit = lazy(() => import('./pages/resources/articles/WordpressPerformanceAudit'))
const CustomPortalDevelopmentRequirements = lazy(() => import('./pages/resources/articles/CustomPortalDevelopmentRequirements'))
const WebAppDevelopmentCostFactors = lazy(() => import('./pages/resources/articles/WebAppDevelopmentCostFactors'))

const Book = lazy(() => import('./pages/Book'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
const ThankYou = lazy(() => import('./pages/ThankYou'))

export default function App() {
  return (
    <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/" element={<About />} />

      {/* Content Creation */}
      <Route path="/content-creation/" element={<ContentCreation />} />
      <Route path="/content-creation/video-editing/" element={<VideoEditing />} />
      <Route path="/content-creation/youtube-automation/" element={<YouTubeAutomation />} />
      <Route path="/content-creation/ai-ugc/" element={<AiUgc />} />
      <Route path="/content-creation/portfolio/" element={<ContentPortfolio />} />

      {/* AI Automation */}
      <Route path="/ai-automation/" element={<AiAutomation />} />
      <Route path="/ai-automation/smb/" element={<Smb />} />
      <Route path="/ai-automation/custom-crm/" element={<CustomCrm />} />
      <Route path="/ai-automation/ghl/" element={<Ghl />} />
      <Route path="/ai-automation/n8n/" element={<N8n />} />
      <Route path="/ai-automation/projects/" element={<Projects />} />
      <Route path="/ai-automation/projects/project-management/" element={<ProjectManagement />} />
      <Route path="/ai-automation/projects/invoice-generator/" element={<InvoiceGenerator />} />
      <Route path="/ai-automation/projects/finance-tracker/" element={<FinanceTracker />} />
      <Route path="/ai-automation/projects/lead-management/" element={<LeadManagement />} />
      <Route path="/ai-automation/projects/attendance-tracker/" element={<AttendanceTracker />} />
      <Route path="/ai-automation/projects/content-calendar/" element={<ContentCalendar />} />
      <Route path="/ai-automation/projects/taxi-booking-retell/" element={<TaxiBookingRetell />} />
      <Route path="/ai-automation/projects/taxi-booking-pipecat/" element={<TaxiBookingPipecat />} />
      <Route path="/ai-automation/projects/ai-personal-assistant/" element={<AiPersonalAssistant />} />
      <Route path="/ai-automation/projects/custom-crm/" element={<LegacyCrm />} />

      {/* AI Voice Agents */}
      <Route path="/ai-voice-agents/" element={<AiVoiceAgents />} />
      <Route path="/ai-voice-agents/use-cases/" element={<UseCases />} />
      <Route path="/ai-voice-agents/integrations/" element={<Integrations />} />
      <Route path="/ai-voice-agents/demos/" element={<Demos />} />
      <Route path="/ai-voice-agents/taxi-booking/" element={<TaxiBookingVoice />} />

      {/* Web Development */}
      <Route path="/web-development/" element={<WebDevelopment />} />
      <Route path="/web-development/custom/" element={<Custom />} />
      <Route path="/web-development/wordpress/" element={<WordPress />} />
      <Route path="/web-development/web-design-ux/" element={<WebDesignUx />} />
      <Route path="/web-development/portfolio/" element={<WebPortfolio />} />

      {/* Resources */}
      <Route path="/resources/" element={<Resources />} />
      <Route path="/resources/video-editing-brief/" element={<VideoEditingBrief />} />
      <Route path="/resources/repurpose-long-videos-into-shorts/" element={<RepurposeLongVideos />} />
      <Route path="/resources/video-editing-cost-factors/" element={<VideoEditingCostFactors />} />
      <Route path="/resources/youtube-production-workflow/" element={<YoutubeProductionWorkflow />} />
      <Route path="/resources/ai-ugc-vs-creator-ugc/" element={<AiUgcVsCreatorUgc />} />
      <Route path="/resources/ai-product-video-brief/" element={<AiProductVideoBrief />} />
      <Route path="/resources/small-business-automation-audit/" element={<SmallBusinessAutomationAudit />} />
      <Route path="/resources/n8n-vs-zapier/" element={<N8nVsZapier />} />
      <Route path="/resources/ghl-migration-checklist/" element={<GhlMigrationChecklist />} />
      <Route path="/resources/custom-crm-vs-off-the-shelf/" element={<CustomCrmVsOffTheShelf />} />
      <Route path="/resources/lead-follow-up-automation/" element={<LeadFollowUpAutomation />} />
      <Route path="/resources/n8n-error-handling-monitoring/" element={<N8nErrorHandlingMonitoring />} />
      <Route path="/resources/ai-voice-agent-human-handoff/" element={<AiVoiceAgentHumanHandoff />} />
      <Route path="/resources/retell-vs-vapi/" element={<RetellVsVapi />} />
      <Route path="/resources/ai-voice-agent-cost-factors/" element={<AiVoiceAgentCostFactors />} />
      <Route path="/resources/taxi-voice-agent-dispatch-integration/" element={<TaxiVoiceAgentDispatchIntegration />} />
      <Route path="/resources/ai-receptionist-pilot-checklist/" element={<AiReceptionistPilotChecklist />} />
      <Route path="/resources/voice-agent-crm-integration/" element={<VoiceAgentCrmIntegration />} />
      <Route path="/resources/wordpress-vs-custom-website/" element={<WordpressVsCustomWebsite />} />
      <Route path="/resources/saas-dashboard-ux-checklist/" element={<SaasDashboardUxChecklist />} />
      <Route path="/resources/website-migration-seo-checklist/" element={<WebsiteMigrationSeoChecklist />} />
      <Route path="/resources/wordpress-performance-audit/" element={<WordpressPerformanceAudit />} />
      <Route path="/resources/custom-portal-development-requirements/" element={<CustomPortalDevelopmentRequirements />} />
      <Route path="/resources/web-app-development-cost-factors/" element={<WebAppDevelopmentCostFactors />} />

      {/* Utility */}
      <Route path="/book/" element={<Book />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/privacy/" element={<Privacy />} />
      <Route path="/terms/" element={<Terms />} />
      <Route path="/cookies/" element={<Cookies />} />
      <Route path="/thank-you/" element={<ThankYou />} />
    </Routes>
    </Suspense>
  )
}
