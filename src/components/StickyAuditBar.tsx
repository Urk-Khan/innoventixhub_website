"use client";

import { useEffect, useState } from "react";

/** Mobile-only bar that appears once the hero has scrolled away and hides near the audit form / footer. */
export default function StickyAuditBar({ heroSelector = ".hero-stage", targetId = "free-audit" }: { heroSelector?: string; targetId?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(heroSelector);
    const footer = document.querySelector("body > footer");
    const form = document.getElementById(targetId);
    if (!hero) return;
    let heroGone = false;
    let blocked = false;
    const update = () => setShow(heroGone && !blocked);
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroGone = !entry.isIntersecting;
      update();
    }, { threshold: 0 });
    heroObserver.observe(hero);
    const blockers = [footer, form].filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const blockObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
      blocked = visible.size > 0;
      update();
    }, { threshold: 0.1 });
    blockers.forEach((node) => blockObserver.observe(node));
    return () => {
      heroObserver.disconnect();
      blockObserver.disconnect();
    };
  }, [heroSelector, targetId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/10 bg-[rgba(15,33,56,0.92)] py-3 pl-5 pr-[88px] backdrop-blur-md transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
      aria-hidden={!show}
    >
      <p className="text-sm font-bold text-white">Free SEO audit</p>
      <a href={`#${targetId}`} tabIndex={show ? 0 : -1} className="btn-primary !h-10 !px-4 text-sm">Get My Free SEO Audit</a>
    </div>
  );
}
