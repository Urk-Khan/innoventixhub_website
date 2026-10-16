"use client";

import { useState } from "react";
import Link from "next/link";
import { HomeShorts } from "@/components/VideoGallery";
import { automationCases, webCases } from "@/content/work";
import { site } from "@/config/site";

const filters = ["All", "AI UGC & Content", "Web Development", "AI Automation"] as const;

export default function WorkBrowser() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const showUgc = filter === "All" || filter === "AI UGC & Content";
  const showWeb = filter === "All" || filter === "Web Development";
  const showAuto = filter === "All" || filter === "AI Automation";

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Work filters">
        {filters.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={filter === item} className={`rounded-full px-4 py-2 text-sm ${filter === item ? "bg-amber text-ink" : "border border-white/15"}`} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      {showUgc ? (
        <section className="section">
          <h2 className="text-2xl font-black">AI UGC & Content</h2>
          <p className="mt-2 text-sm text-mist/80">AI UGC ad. Hook rate [x]% SAMPLE</p>
          <HomeShorts />
        </section>
      ) : null}
      {showWeb ? (
        <section className="section pt-0">
          <h2 className="text-2xl font-black">Web Development</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {webCases.map((item) => (
              <li key={item.slug} className="glass overflow-hidden rounded-3xl">
                {item.image ? <img src={item.image} alt={item.imageAlt || ""} className="h-40 w-full object-cover" /> : null}
                <div className="p-5">
                  <h3 className="font-bold"><Link href={`/work/${item.slug}`}>{item.title}</Link></h3>
                  <p className="mt-2 text-sm text-cream/75">{item.summary}</p>
                  <p className="mt-2 text-xs text-mist/70">Scope: design · build · on-page SEO basics</p>
                  <p className="mt-2 text-xs text-amber">{item.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {showAuto ? (
        <section className="section pt-0">
          <h2 className="text-2xl font-black">AI Automation</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {automationCases.map((item) => (
              <li key={item.slug} className="glass rounded-3xl p-5">
                <h3 className="font-bold"><Link href={`/work/${item.slug}`}>{item.title}</Link></h3>
                <p className="mt-2 text-sm text-cream/75">{item.summary}</p>
                <p className="mt-2 text-xs text-mist/80">{item.tools.join(" · ")}</p>
                <p className="mt-2 text-xs text-amber">{item.metric}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="pb-16 text-center">
        <h2 className="text-3xl font-black">Your project could be next.</h2>
        <a href={site.calendlyUrl} className="mt-6 inline-flex rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink">Book A Free Consultation</a>
      </section>
    </>
  );
}
