/**
 * Single source of truth for contact details, booking, and feature flags.
 * Swap values here. Do not hardcode them in pages.
 */
export const site = {
  name: "Innoventix Hub",
  domain: "innoventixhub.tech",
  url: "https://innoventixhub.tech",
  locale: "en",
  calendlyUrl: "https://calendly.com/ubaid-persistbrands/free-consultation",
  emailGeneral: "support@innoventixhub.tech",
  emailFounder: "ubaid@innoventixhub.tech",
  phoneWhatsappDisplay: "+1 917 795 4404",
  phoneWhatsappTel: "+19177954404",
  whatsappUrl: "https://wa.me/19177954404",
  voiceAgentDisplay: "+1 855 501 0702",
  voiceAgentTel: "+18555010702",
  /** Empty until a chatbot vendor snippet is pasted in. */
  chatbotEmbedHtml: "",
  /** "Live ads we created" on Content Creation. Off until approved. */
  showLiveAds: false,
  /** Meta library IDs that must never render, even if the flag is on. */
  excludedAdLibraryIds: ["1148602907724747"],
} as const;

export const clientLogos = [
  { name: "Persist Brands", src: "/logos/clients/persist-brands-white.png", width: 476, height: 142 },
  { name: "Image2work", src: "/logos/clients/image2work-white.png", width: 435, height: 100 },
  { name: "Pete's Builders", src: "/logos/clients/petes-builders-white.png", width: 491, height: 240 },
] as const;

export type NavChild = { label: string; href: string };

export const serviceNav: { label: string; href: string; blurb: string; children: NavChild[] }[] = [
  {
    label: "Content Creation",
    href: "/services/content-creation",
    blurb: "AI UGC, short-form and long-form",
    children: [
      { label: "AI UGC Ads", href: "/services/content-creation#ai-ugc" },
      { label: "Short-form editing", href: "/services/content-creation#short-form" },
      { label: "Long-form editing", href: "/services/content-creation#long-form" },
    ],
  },
  {
    label: "AI Automation",
    href: "/services/ai-automation",
    blurb: "n8n, GoHighLevel, CRM, Python",
    children: [
      { label: "n8n workflows", href: "/services/ai-automation#n8n" },
      { label: "GoHighLevel", href: "/services/ai-automation#ghl" },
      { label: "CRM automation", href: "/services/ai-automation#crm" },
      { label: "Custom Python", href: "/services/ai-automation#python" },
    ],
  },
  {
    label: "AI Voice Agents",
    href: "/services/ai-voice-agents",
    blurb: "Inbound receptionist and outbound",
    children: [
      { label: "AI receptionist", href: "/services/ai-voice-agents#inbound" },
      { label: "Outbound agents", href: "/services/ai-voice-agents#outbound" },
    ],
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    blurb: "Next.js, Shopify, WordPress, UI/UX",
    children: [
      { label: "Custom Next.js", href: "/services/web-development#nextjs" },
      { label: "Shopify & WordPress", href: "/services/web-development#shopify-wordpress" },
      { label: "Landing pages", href: "/services/web-development#landing-pages" },
      { label: "UI/UX design", href: "/services/web-development#ui-ux" },
    ],
  },
  {
    label: "SEO",
    href: "/services/seo",
    blurb: "Technical, local, e-commerce, AI search",
    children: [
      { label: "Technical SEO", href: "/services/seo#technical-seo" },
      { label: "On-page SEO", href: "/services/seo#on-page" },
      { label: "Link building", href: "/services/seo#link-building" },
      { label: "Local SEO", href: "/services/seo#local-seo" },
      { label: "E-commerce SEO", href: "/services/seo#ecommerce-seo" },
      { label: "AI search", href: "/services/seo#ai-search" },
    ],
  },
];

export function telHref(tel: string) {
  return `tel:${tel}`;
}
