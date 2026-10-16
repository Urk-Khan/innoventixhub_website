"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline({
  title,
  steps,
}: {
  title: React.ReactNode;
  steps: { title: string; body: string }[];
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scope = root.current;
    if (!scope) return;
    const fill = scope.querySelector<HTMLElement>("[data-fill]");
    const nodes = scope.querySelectorAll<HTMLElement>("[data-step]");
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-active"));
      if (fill) fill.style.transform = "scaleY(1)";
      return;
    }
    if (!fill) return;
    const tween = gsap.fromTo(
      fill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      },
    );
    const triggers = Array.from(nodes).map((node) =>
      ScrollTrigger.create({
        trigger: node,
        start: "top 60%",
        onEnter: () => node.classList.add("is-active"),
        onLeaveBack: () => node.classList.remove("is-active"),
      }),
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={root} className="section">
      <div className="wrap">
        <p className="eyebrow">Our process</p>
        <h2 className="mt-5 max-w-3xl text-3xl text-white md:text-[44px] md:leading-[52px]">{title}</h2>
        <ol className="relative mt-14 space-y-8">
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-white/15 md:left-1/2" aria-hidden="true">
            <div data-fill className="h-full origin-top scale-y-0 bg-amber shadow-[0_0_16px_rgba(255,181,71,0.65)]" />
          </div>
          {steps.map((step, index) => {
            const flip = index % 2 === 1;
            return (
              <li key={step.title} data-step className="group relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                <div className={`glass glass-card rounded-[20px] p-6 opacity-80 transition group-[.is-active]:opacity-100 group-[.is-active]:shadow-[0_0_28px_rgba(255,181,71,0.2)] ${flip ? "md:col-start-3" : ""}`}>
                  <p className="text-xs font-semibold tracking-[1.6px] text-amber">STEP {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-pearl/80">{step.body}</p>
                </div>
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy text-sm font-bold text-pearl group-[.is-active]:border-amber group-[.is-active]:bg-amber group-[.is-active]:text-navy ${flip ? "md:col-start-2 md:row-start-1" : "md:col-start-2"}`}>
                  {index + 1}
                </div>
                <div className={`hidden md:block ${flip ? "md:col-start-1 md:row-start-1" : ""}`} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
