import type { NextConfig } from "next";

const hashRedirects: { source: string; destination: string }[] = [
  { source: "/services/ai-ugc-ads", destination: "/services/content-creation#ai-ugc" },
  { source: "/services/short-form-video-editing", destination: "/services/content-creation#short-form" },
  { source: "/services/long-form-video-editing", destination: "/services/content-creation#long-form" },
  { source: "/services/n8n-automation", destination: "/services/ai-automation#n8n" },
  { source: "/services/gohighlevel-automation", destination: "/services/ai-automation#ghl" },
  { source: "/services/crm-automation", destination: "/services/ai-automation#crm" },
  { source: "/services/custom-python-automation", destination: "/services/ai-automation#python" },
  { source: "/services/ai-receptionist", destination: "/services/ai-voice-agents#inbound" },
  { source: "/services/outbound-ai-voice-agents", destination: "/services/ai-voice-agents#outbound" },
  { source: "/services/custom-website-development", destination: "/services/web-development#nextjs" },
  { source: "/services/shopify-wordpress-development", destination: "/services/web-development#shopify-wordpress" },
  { source: "/services/landing-page-design", destination: "/services/web-development#landing-pages" },
  { source: "/services/ui-ux-design", destination: "/services/web-development#ui-ux" },
  { source: "/services/technical-seo", destination: "/services/seo#technical-seo" },
  { source: "/services/on-page-seo", destination: "/services/seo#on-page" },
  { source: "/services/off-page-seo", destination: "/services/seo#link-building" },
  { source: "/services/local-ecommerce-seo", destination: "/services/seo#ecommerce-seo" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.innoventixhub.tech" }],
        destination: "https://innoventixhub.tech/:path*",
        permanent: true,
      },
      ...hashRedirects.map((item) => ({
        ...item,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
