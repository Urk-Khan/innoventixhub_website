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
        <h2 className="max-w-3xl text-3xl font-black md:text-5xl">{title}</h2>
        <ol className="relative mt-12 space-y-10">
          <div className="absolute bottom-[6%] left-[1.15rem] top-[4%] w-px bg-white/15 md:left-1/2" aria-hidden="true">
            <div data-fill className="h-full origin-top scale-y-0 bg-amber" />
          </div>
          {steps.map((step, index) => {
            const flip = index % 2 === 1;
            return (
              <li key={step.title} data-step className="group relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                <div className={`glass rounded-3xl p-5 opacity-70 transition-opacity group-[.is-active]:opacity-100 ${flip ? "md:col-start-3" : ""}`}>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/80">{step.body}</p>
                </div>
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink text-sm font-bold text-cream group-[.is-active]:border-amber group-[.is-active]:bg-amber group-[.is-active]:text-ink ${flip ? "md:col-start-2 md:row-start-1" : "md:col-start-2"}`}>
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
