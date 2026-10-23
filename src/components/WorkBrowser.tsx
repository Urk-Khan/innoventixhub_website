"use client";

import { useState } from "react";
import Link from "next/link";
import { UgcSlider } from "@/components/VideoGallery";
import { playableUgc } from "@/content/videos";
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
      <div className="mt-2 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Work filters">
        {filters.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={filter === item} className={`rounded-full px-4 py-2 text-sm font-bold ${filter === item ? "bg-amber text-navy" : "border border-white/15 text-pearl"}`} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div key={filter} className="tab-panel-in">
      {showUgc ? (
        <section className="section text-center">
          <p className="pill">AI UGC & Content</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-h2 text-white">Scroll-stopping ads, made fast</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-mist">AI UGC ad · hook rate [x]% SAMPLE</p>
          <UgcSlider videos={playableUgc} label="AI UGC samples" />
        </section>
      ) : null}
      {showWeb ? (
        <section className="section pt-0 text-center">
          <p className="pill">Web Development</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-h2 text-white">Websites built to convert and rank</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {webCases.map((item) => (
              <li key={item.slug} className="glass glass-card overflow-hidden rounded-[22px] text-left">
                {item.image ? <img src={item.image} alt={item.imageAlt || ""} className="h-44 w-full object-cover object-top" /> : null}
                <div className="p-5">
                  <h3 className="font-bold text-white"><Link href={`/work/${item.slug}`} className="hover:text-amber">{item.title}</Link></h3>
                  <p className="mt-2 text-sm leading-6 text-pearl/75">{item.summary}</p>
                  <p className="mt-3 text-xs text-mist">Scope: design · build · on-page SEO basics</p>
                  <p className="mt-2 text-xs font-bold text-amber">{item.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {showAuto ? (
        <section className="section pt-0 text-center">
          <p className="pill">AI Automation</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-h2 text-white">Automations we&apos;ve built</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {automationCases.map((item) => (
              <li key={item.slug} className="glass glass-card rounded-[22px] p-5 text-left">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold text-amber">
                  {item.tools.map((tool, index) => (
                    <span key={tool} className="flex items-center gap-2">
                      {index > 0 ? <span className="text-white/30">→</span> : null}
                      <span className="rounded-full border border-amber/30 px-2 py-1">{tool}</span>
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-white"><Link href={`/work/${item.slug}`} className="hover:text-amber">{item.title}</Link></h3>
                <p className="mt-2 text-sm leading-6 text-pearl/75">{item.summary}</p>
                <p className="mt-3 text-xs font-bold text-amber">{item.metric}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="section pt-0 text-center">
        <p className="pill">Case study</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-h2 text-white">Every case study follows one clear story</h2>
        <article className="glass mx-auto mt-8 max-w-3xl rounded-[24px] p-6">
          <p className="text-xs font-bold tracking-wide text-amber">WEB DEVELOPMENT</p>
          <h3 className="mt-2 text-2xl font-bold text-white">The challenge, the build, the result</h3>
          <div className="mt-4 grid gap-3 text-sm text-pearl/80 sm:grid-cols-2">
            {["The challenge", "What we built", "Results · SAMPLE", "Tools used"].map((label) => (
              <p key={label} className="rounded-2xl border border-white/10 px-4 py-3">{label}</p>
            ))}
          </div>
          <Link href="/work/247-virtual-solution" className="mt-5 inline-block text-sm font-bold text-amber">Open a case study →</Link>
        </article>
      </section>
      <section className="pb-20 text-center">
        <div className="cta-card px-6 py-14">
          <h2 className="text-cta text-white">Your project could be next.</h2>
          <a href={site.calendlyUrl} className="btn-primary mt-6">Book A Free Consultation <span aria-hidden="true">→</span></a>
        </div>
      </section>
      </div>
    </>
  );
}
