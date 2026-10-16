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
    <main id="main" className="pb-16">
      <JsonLd data={graph(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: item.title, path: `/work/${item.slug}` },
      ]))} />
      <header className="hero-stage px-5 pb-12 pt-28 text-center lg:pt-[200px]">
        <p className="text-sm text-mist"><Link href="/">Home</Link> / <Link href="/work">Work</Link> / {item.group}</p>
        <p className="eyebrow mt-6">{item.group}</p>
        <h1 className="mx-auto mt-6 max-w-4xl break-words text-4xl font-bold text-white [overflow-wrap:anywhere] md:text-[56px] md:leading-[1.05]">{item.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-pearl/75">{item.summary}</p>
      </header>
      <article className="wrap max-w-4xl">
        {item.image ? <img src={item.image} alt={item.imageAlt || ""} width={1440} height={900} className="glass w-full rounded-[24px] object-cover object-top" /> : (
          <div className="glass grid h-56 place-items-center rounded-[24px] text-sm text-mist">Workflow diagram</div>
        )}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["The challenge", item.challenge],
            ["What we built", item.built],
          ].map(([title, body]) => (
            <section key={title} className="glass rounded-[22px] p-6">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-pearl/80">{body}</p>
            </section>
          ))}
        </div>
        <section className="glass mt-4 rounded-[22px] p-6">
          <h2 className="text-xl font-bold text-white">Results</h2>
          <p className="mt-3 text-sm font-bold text-amber">{item.metric}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-sm font-bold tracking-[1.6px] text-mist uppercase">Tools used</h2>
          <ul className="mt-3 flex flex-wrap gap-2">{item.tools.map((tool) => <li key={tool} className="glass rounded-full px-4 py-2 text-sm font-bold">{tool}</li>)}</ul>
        </section>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link href={`/work/${next.slug}`} className="font-bold text-amber">Next project: {next.title} →</Link>
          <a href={site.calendlyUrl} className="btn-primary">Book A Free Consultation <span aria-hidden="true">→</span></a>
        </div>
      </article>
    </main>
  );
}
