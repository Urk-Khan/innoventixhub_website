export type WorkItem = {
  slug: string;
  title: string;
  group: "Web Development" | "AI Automation";
  summary: string;
  challenge: string;
  built: string;
  tools: string[];
  image?: string;
  imageAlt?: string;
  metric: string;
};

export const webCases: WorkItem[] = [
  {
    slug: "247-virtual-solution",
    title: "247virtualsolution.com",
    group: "Web Development",
    summary:
      "Service website for a virtual assistant company, built to explain the offer clearly and turn visitors into booked calls.",
    challenge: "The offer needed a clear explanation and a straight path from visitor to booked call.",
    built: "A custom service website with design, build and on-page SEO basics.",
    tools: ["Web design", "Build", "On-page SEO basics"],
    image: "/work/247virtualsolution.com.jpg",
    imageAlt: "Screenshot of the 247virtualsolution.com website homepage",
    metric: "Page speed [x] SAMPLE · Leads +[x]% SAMPLE",
  },
  {
    slug: "247-digital-marketing-agency",
    title: "247digitalmarketingagency.com",
    group: "Web Development",
    summary:
      "Agency website showcasing digital marketing services with clear service pages and strong calls to action.",
    challenge: "Services were hard to scan, and calls to action needed to sit on every service page.",
    built: "An agency site with distinct service pages and clear next steps.",
    tools: ["Web design", "Build", "On-page SEO basics"],
    image: "/work/247digitalmarketingagency.com.jpg",
    imageAlt: "Screenshot of the 247digitalmarketingagency.com website homepage",
    metric: "Page speed [x] SAMPLE · Leads +[x]% SAMPLE",
  },
  {
    slug: "247-virtual-solution-llc",
    title: "247virtualsolutionllc.com",
    group: "Web Development",
    summary: "Website for the US entity, focused on trust and simple enquiry paths.",
    challenge: "The US entity needed a site that felt trustworthy and made enquiry easy.",
    built: "A focused website with simple enquiry paths and a clear offer.",
    tools: ["Web design", "Build", "On-page SEO basics"],
    image: "/work/247virtualsolutionllc.com.jpg",
    imageAlt: "Screenshot of the 247virtualsolutionllc.com website homepage",
    metric: "Page speed [x] SAMPLE · Leads +[x]% SAMPLE",
  },
];

export const automationCases: WorkItem[] = [
  {
    slug: "lead-management",
    title: "Lead Management System",
    group: "AI Automation",
    summary: "Captures leads from forms and ads, qualifies them and updates the CRM automatically.",
    challenge: "Leads arrived in different places and waited on a person to sort them.",
    built: "A workflow that captures, qualifies and writes each lead into the CRM.",
    tools: ["n8n", "CRM"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "project-management",
    title: "Project Management System",
    group: "AI Automation",
    summary: "Tracks tasks, owners and deadlines with automatic reminders.",
    challenge: "Tasks and deadlines lived in chat, so follow-up depended on memory.",
    built: "A system that tracks owners and sends reminders when dates slip.",
    tools: ["n8n"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator",
    group: "AI Automation",
    summary: "Creates and sends invoices when a deal is won.",
    challenge: "Invoices were typed by hand after a deal closed.",
    built: "A workflow that generates and sends the invoice when a deal is marked won.",
    tools: ["n8n", "Python"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    group: "AI Automation",
    summary: "Keeps income and expenses up to date without manual entry.",
    challenge: "Income and expenses were copied into a sheet after the fact.",
    built: "A tracker that records income and expenses as they happen.",
    tools: ["Python", "n8n"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "attendance-tracker",
    title: "Attendance Tracker",
    group: "AI Automation",
    summary: "Logs team attendance and flags gaps.",
    challenge: "Attendance was a spreadsheet that nobody trusted by Friday.",
    built: "A log that records attendance and flags gaps for a person to review.",
    tools: ["Python"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "content-calendar",
    title: "Content Calendar",
    group: "AI Automation",
    summary: "Turns ideas into drafts, approvals and scheduled posts.",
    challenge: "Ideas sat in a sheet and never reached a draft or a schedule.",
    built: "A calendar flow from idea to draft, approval and scheduled post.",
    tools: ["n8n", "GoHighLevel"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "ai-personal-assistant",
    title: "AI Personal Assistant",
    group: "AI Automation",
    summary: "Handles inbox triage, reminders and quick answers.",
    challenge: "The inbox and reminder list competed with the actual work.",
    built: "An assistant that triages mail, sets reminders and answers routine questions.",
    tools: ["Python", "n8n"],
    metric: "[hours saved] SAMPLE",
  },
  {
    slug: "legacy-crm",
    title: "Legacy CRM",
    group: "AI Automation",
    summary: "Moves an old CRM's data and workflows into a modern setup.",
    challenge: "An older CRM held the customer record, but the team had outgrown it.",
    built: "A migration of data and workflows into a current CRM setup.",
    tools: ["CRM", "Python"],
    metric: "[hours saved] SAMPLE",
  },
];

export const allWork = [...webCases, ...automationCases];

export function getWork(slug: string) {
  return allWork.find((item) => item.slug === slug);
}
