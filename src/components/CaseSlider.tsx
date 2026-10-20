"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

/** Horizontal snap slider: next card peeks in, with arrows and dots. */
export default function CaseSlider({ tags }: { tags: string[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const cardStep = useCallback(() => {
    const first = track.current?.querySelector<HTMLElement>("li");
    return first ? first.offsetWidth + 20 : 360;
  }, []);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const onScroll = () => setIndex(Math.min(tags.length - 1, Math.round(node.scrollLeft / cardStep())));
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, [cardStep, tags.length]);

  const goTo = (next: number) => {
    const target = Math.max(0, Math.min(tags.length - 1, next));
    track.current?.scrollTo({ left: target * cardStep(), behavior: "smooth" });
  };

  return (
    <div data-slider className="mx-auto mt-10 max-w-[1440px]" role="region" aria-roledescription="carousel" aria-label="Results">
      <ul ref={track} className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:px-[120px] [&::-webkit-scrollbar]:hidden">
        {tags.map((tag) => (
          <li key={tag} className="glass glass-card w-[78%] shrink-0 snap-start overflow-hidden rounded-[22px] text-left sm:w-[340px]">
            <div className="relative grid h-44 place-items-center border-b border-white/10 bg-[#0f2138] text-xs text-mist">
              <span className="absolute left-4 top-4 rounded-full bg-amber px-2.5 py-1 text-[11px] font-bold text-navy">SAMPLE</span>
              {tag} screenshot
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-bold text-white">[STAT HEADLINE from screenshot]</h3>
              <p className="mt-2 text-sm leading-6 text-pearl/80">[What we did, 1–2 lines]</p>
              <p className="mt-4 inline-block rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs font-bold text-amber">{tag}</p>
              <a href={site.calendlyUrl} className="mt-4 block text-sm font-bold text-amber">Book A Free Consultation →</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button type="button" className="grid size-9 place-items-center rounded-full border border-white/15 text-pearl hover:border-white/30 disabled:opacity-30" aria-label="Previous result" disabled={index === 0} onClick={() => goTo(index - 1)}>
          <span aria-hidden="true">←</span>
        </button>
        <div className="flex">
          {tags.map((tag, dot) => (
            <button key={tag} type="button" aria-label={`Show ${tag}`} aria-current={dot === index} className="grid size-6 place-items-center" onClick={() => goTo(dot)}>
              <span className={`size-2 rounded-full transition-colors ${dot === index ? "bg-amber" : "bg-white/30"}`} />
            </button>
          ))}
        </div>
        <button type="button" className="grid size-9 place-items-center rounded-full border border-white/15 text-pearl hover:border-white/30 disabled:opacity-30" aria-label="Next result" disabled={index === tags.length - 1} onClick={() => goTo(index + 1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
