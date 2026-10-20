import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allWork } from "@/content/work";

const paths = [
  "/",
  "/services",
  "/services/content-creation",
  "/services/ai-automation",
  "/services/ai-voice-agents",
  "/services/web-development",
  "/services/seo",
  "/about",
  "/contact",
  "/work",
  "/blog",
  "/privacy",
  "/terms",
  ...allWork.map((item) => `/work/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
