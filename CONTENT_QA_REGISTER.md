# Innoventix Hub - Content QA Register
Generated: 2026-09-18

---

## Em-Dash Scan Result

**Result: PASS - 0 em dashes (U+2014) found across all 64 TSX page files.**

Two em dashes existed in JSX/JS developer comments in component files (FloatingOrbs.tsx, ScrollStory.tsx) - cleaned to hyphens. Zero em dashes in any visible body content, heading, FAQ, metadata, or alt text.

---

## Page Inventory: 64 Routes

### Core Pages (6)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/Home.tsx` | DONE | ~900 words. Process steps, hero, "why coordination" expanded. |
| `src/pages/About.tsx` | DONE | ~1,060 words. Values, team bios, story paragraphs expanded. |
| `src/pages/Book.tsx` | DONE | ~950 words. FAQ mismatches fixed (all 6 rewritten + 7th added). Calendly embed preserved. |
| `src/pages/Contact.tsx` | DONE | ~950 words. Hero expanded, "what we work on" 4-column grid, 6-item FAQ added. Form not yet connected to email endpoint - error state remains with direct email fallback. |
| `src/pages/resources/Resources.tsx` | DONE | ~950 words. Hero expanded with second paragraph and library description added above article grid. |
| `src/pages/ThankYou.tsx` | ADEQUATE | ~200 words. Noindex page, post-booking confirmation only. Word count threshold does not apply. |

---

### Legal Pages (3)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/Privacy.tsx` | ADEQUATE | ~450 words. Draft disclaimer present. No legal provisions invented. |
| `src/pages/Terms.tsx` | ADEQUATE | ~400 words. Draft disclaimer present. No legal provisions invented. |
| `src/pages/Cookies.tsx` | ADEQUATE | ~300 words. Draft disclaimer present. |

**Legal pages: Flag for review before launch. Content is placeholder-level. No invented provisions.** A solicitor or legal document service should review before the site goes live.

---

### Content Creation Service Pages (5)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/content-creation/ContentCreation.tsx` | DONE | Pillar page. Expanded hero, process steps, service card descs. |
| `src/pages/content-creation/VideoEditing.tsx` | DONE | 6 deliverable descs (~100 words each), process section, FAQs. |
| `src/pages/content-creation/YouTubeAutomation.tsx` | DONE | Full channel-as-system framing, process, FAQs. 23 YouTube Shorts URLs preserved from brief. |
| `src/pages/content-creation/AiUgc.tsx` | DONE | Explicit AI UGC vs real testimonials distinction. Synthetic media disclosure language. |
| `src/pages/content-creation/Portfolio.tsx` | DONE | Portfolio/work-samples page. No invented client names or metrics. |

---

### AI Automation Service Pages (6)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/ai-automation/AiAutomation.tsx` | DONE | Pillar page. 4 service card descs expanded, hero, process. |
| `src/pages/ai-automation/Smb.tsx` | DONE | ~1,100+ words. 5 "starting point" scenarios (~100 words each), workflow list, audit steps, platforms, FAQs. |
| `src/pages/ai-automation/CustomCrm.tsx` | DONE | Custom CRM vs off-the-shelf positioning. No vendor certifications claimed. |
| `src/pages/ai-automation/Ghl.tsx` | DONE | Explicit "not a certified GHL partner or official reseller" language preserved. |
| `src/pages/ai-automation/N8n.tsx` | DONE | n8n self-hosting and data sovereignty positioning. |
| `src/pages/ai-automation/Projects.tsx` | DONE | Projects index page. Project statuses preserved as-is (in development / queued / paused / live). |

---

### AI Automation Project Sub-Pages (10)

| File | Project Status | Notes |
|------|----------------|-------|
| `src/pages/ai-automation/projects/ProjectManagement.tsx` | Live | Architecture table, workflow cards, what it does section. |
| `src/pages/ai-automation/projects/InvoiceGenerator.tsx` | Live | Invoice generation, reminder sequence, architecture. |
| `src/pages/ai-automation/projects/FinanceTracker.tsx` | Live | Finance tracking workflows. |
| `src/pages/ai-automation/projects/LeadManagement.tsx` | Live | Lead management and CRM sync. |
| `src/pages/ai-automation/projects/AttendanceTracker.tsx` | Live | Attendance automation. |
| `src/pages/ai-automation/projects/ContentCalendar.tsx` | Live | Content calendar automation. |
| `src/pages/ai-automation/projects/TaxiBookingRetell.tsx` | In Development | **Mock API disclosure retained.** iCabbi and TBMS compatibility explicitly NOT verified. |
| `src/pages/ai-automation/projects/TaxiBookingPipecat.tsx` | In Development | **Sub-500ms stated as unmeasured target, not result.** |
| `src/pages/ai-automation/projects/AiPersonalAssistant.tsx` | Queued | Status preserved. |
| `src/pages/ai-automation/projects/LegacyCrm.tsx` | Paused | Status preserved. |

---

### AI Voice Agent Service Pages (5)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/ai-voice-agents/AiVoiceAgents.tsx` | DONE | Pillar page. 6 use case descs (~100 words each), process, hero. |
| `src/pages/ai-voice-agents/UseCases.tsx` | DONE | Use case detail pages. No guaranteed call accuracy or uptime claims. |
| `src/pages/ai-voice-agents/Integrations.tsx` | DONE | Integration partners listed without claiming exclusive or certified status. |
| `src/pages/ai-voice-agents/Demos.tsx` | DONE | Demo page. No live call accuracy claims. |
| `src/pages/ai-voice-agents/TaxiBooking.tsx` | DONE | **Mock API disclosure prominent.** iCabbi/TBMS not verified. |

---

### Web Development Service Pages (5)

| File | Status | Notes |
|------|--------|-------|
| `src/pages/web-development/WebDevelopment.tsx` | DONE | Pillar page. 3 service descs expanded, capabilities list, FAQs. |
| `src/pages/web-development/Custom.tsx` | DONE | Custom React/Next.js app positioning. |
| `src/pages/web-development/WordPress.tsx` | DONE | WordPress and WooCommerce. No performance guarantees. |
| `src/pages/web-development/WebDesignUx.tsx` | DONE | UX design and Figma process. |
| `src/pages/web-development/WebPortfolio.tsx` | DONE | Portfolio page. No invented client names or metrics. |

---

### Resource Articles (24)

All 24 articles written to 1,050-1,300 words each. Em-dash free.

| File | Category | Special Notes |
|------|----------|--------------|
| `VideoEditingBrief.tsx` | Content Creation | |
| `RepurposeLongVideos.tsx` | Content Creation | |
| `VideoEditingCostFactors.tsx` | Content Creation | No invented price figures |
| `YoutubeProductionWorkflow.tsx` | Content Creation | |
| `AiUgcVsCreatorUgc.tsx` | Content Creation | Explicit AI UGC vs testimonials distinction |
| `AiProductVideoBrief.tsx` | Content Creation | |
| `SmallBusinessAutomationAudit.tsx` | AI Automation | |
| `N8nVsZapier.tsx` | AI Automation | Mid-2025 date disclaimer |
| `GhlMigrationChecklist.tsx` | AI Automation | "Not a certified GHL partner" explicit |
| `CustomCrmVsOffTheShelf.tsx` | AI Automation | |
| `LeadFollowUpAutomation.tsx` | AI Automation | |
| `N8nErrorHandlingMonitoring.tsx` | AI Automation | |
| `AiVoiceAgentHumanHandoff.tsx` | AI Voice Agents | |
| `RetellVsVapi.tsx` | AI Voice Agents | Mid-2025 disclaimer, no winner declared |
| `AiVoiceAgentCostFactors.tsx` | AI Voice Agents | No invented price figures |
| `TaxiVoiceAgentDispatchIntegration.tsx` | AI Voice Agents | Prominent mock API disclosure box |
| `AiReceptionistPilotChecklist.tsx` | AI Voice Agents | |
| `VoiceAgentCrmIntegration.tsx` | AI Voice Agents | |
| `WordpressVsCustomWebsite.tsx` | Web Development | Decision matrix, no winner declared |
| `SaasDashboardUxChecklist.tsx` | Web Development | |
| `WebsiteMigrationSeoChecklist.tsx` | Web Development | |
| `WordpressPerformanceAudit.tsx` | Web Development | INP vs FID distinction noted |
| `CustomPortalDevelopmentRequirements.tsx` | Web Development | |
| `WebAppDevelopmentCostFactors.tsx` | Web Development | No invented cost figures |

---

## Constraint Compliance Checklist

| Constraint | Status |
|-----------|--------|
| No em dashes (U+2014) anywhere | PASS - 0 found in page files |
| No invented clients, testimonials, or case study metrics | PASS |
| No invented ROI, revenue, or ranking guarantees | PASS |
| No invented prices or cost figures | PASS |
| No city-specific or local landing claims | PASS |
| No certifications claimed (GHL, etc.) | PASS - explicit disclaimers where relevant |
| No "Persist Brands" in public-facing content | PASS - appears only in email/Calendly URLs |
| Primary CTA links to correct Calendly URL | PASS |
| Retell taxi: mock API disclosed, iCabbi/TBMS not verified | PASS |
| Pipecat taxi: sub-500ms stated as target not result | PASS |
| Project statuses preserved exactly | PASS |
| AI UGC synthetic media disclosure | PASS |
| No AI Overview / featured snippet guarantees | PASS |

---

## Items Requiring Action Before Launch

1. **Contact form endpoint**: Form always returns an error state. Currently falls back to direct email. Wire up a form submission endpoint (Formspree, Resend, or similar) before launch.

2. **Legal page review**: Privacy.tsx, Terms.tsx, and Cookies.tsx carry draft disclaimers. Have a solicitor or legal document service review and complete these before the site goes live.

3. **TaxiBookingRetell.tsx and TaxiBookingPipecat.tsx**: Both carry prominent disclosures about mock API use and unverified dispatch integrations. These disclosures must remain in place until live integration testing is complete with a real dispatch system.

4. **YouTube Shorts URLs (23)**: Preserved as supplied. Verify each URL is still live and correctly attributed before publishing the YouTubeAutomation.tsx page.

5. **Portfolio pages (ContentCreation/Portfolio.tsx and WebPortfolio.tsx)**: No real client work or metrics were added. Add actual work samples, project screenshots, or case study summaries once the team has approved content to publish.

---

## Word Count Range

- Articles: ~1,050 - 1,300 words per page
- Service pillar pages: ~950 - 1,200 words per page
- Service sub-pages: ~950 - 1,150 words per page
- Project sub-pages: ~900 - 1,100 words per page
- Core pages (Home, About, Book, Contact, Resources): ~900 - 1,060 words per page
- Legal pages: ~300 - 450 words (adequate for purpose; legal content is not SEO content)
- ThankYou.tsx: ~200 words (noindex, post-conversion page only)
