import { site } from "@/config/site";
import { euCountries } from "@/lib/seo";

const country = (code: string) => ({ "@type": "Country", name: code });

export const areaServed = [country("US"), country("GB"), ...euCountries.map(country)];

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo-white.png`,
    email: site.emailGeneral,
    foundingDate: "2025-01",
    founder: {
      "@type": "Person",
      name: "Ubaid ur Rehman Khan",
      jobTitle: "Founder & CEO",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+1-917-795-4404",
        url: site.whatsappUrl,
        areaServed,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-855-501-0702",
        areaServed,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#professional-service`,
    name: site.name,
    url: site.url,
    image: `${site.url}/brand/logo-white.png`,
    email: site.emailGeneral,
    telephone: "+1-917-795-4404",
    priceRange: "$$",
    areaServed,
    serviceType: [
      "AI content creation",
      "AI UGC ads",
      "AI automation",
      "AI voice agents",
      "Web development",
      "SEO",
    ],
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  catalog,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  catalog?: { name: string; description: string }[];
}) {
  return {
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed,
    ...(catalog
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: catalog.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.name, description: item.description },
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function videoSchema(videos: { id: string; name: string; thumbnail: string; embed: string }[]) {
  const items = videos.map((video) => ({
    "@type": "VideoObject",
    name: video.name,
    description: "AI UGC sample produced by Innoventix Hub.",
    thumbnailUrl: `${site.url}${video.thumbnail}`,
    embedUrl: video.embed,
    contentUrl: `https://www.youtube.com/shorts/${video.id}`,
  }));
  if (items.length === 1) return items[0];
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
