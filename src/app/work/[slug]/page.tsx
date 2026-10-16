import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { allWork, getWork } from "@/content/work";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export function generateStaticParams() {
  return allWork.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return pageMeta({
    title: `${item.title} | Innoventix Hub`,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const index = allWork.findIndex((entry) => entry.slug === item.slug);
  const next = allWork[(index + 1) % allWork.length];

  return (
    <main id="main" className="section">
      <JsonLd data={graph(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: item.title, path: `/work/${item.slug}` },
      ]))} />
      <article className="wrap max-w-3xl">
        <p className="text-sm text-amber">{item.group}</p>
        <h1 className="mt-3 break-words text-3xl font-black [overflow-wrap:anywhere] sm:text-4xl">{item.title}</h1>
        {item.image ? <img src={item.image} alt={item.imageAlt || ""} width={1440} height={900} className="mt-6 w-full rounded-3xl" /> : null}
        <h2 className="mt-8 text-2xl font-black">The challenge</h2>
        <p className="mt-2 text-cream/80">{item.challenge}</p>
        <h2 className="mt-8 text-2xl font-black">What we built</h2>
        <p className="mt-2 text-cream/80">{item.built}</p>
        <h2 className="mt-8 text-2xl font-black">Results</h2>
        <p className="mt-2 text-amber">{item.metric}</p>
        <h2 className="mt-8 text-2xl font-black">Tools used</h2>
        <p className="mt-2">{item.tools.join(" · ")}</p>
        <p className="mt-10"><Link href={`/work/${next.slug}`} className="text-amber">Next project: {next.title}</Link></p>
        <a href={site.calendlyUrl} className="mt-6 inline-flex rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink">Book A Free Consultation</a>
      </article>
    </main>
  );
}
