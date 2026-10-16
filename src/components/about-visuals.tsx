"use client";

import { useEffect, useRef, useState } from "react";

const orbitNodes = [
  { mono: "UG", name: "Content Creation (UGC)", color: "#ffb547", left: 449, top: 37 },
  { mono: "Au", name: "AI Automation", color: "#3e63dd", left: 747, top: 181 },
  { mono: "Vo", name: "AI Voice Agents", color: "#30a46c", left: 633, top: 415 },
  { mono: "We", name: "Web Development", color: "#8e4ec6", left: 265, top: 415 },
  { mono: "SE", name: "SEO", color: "#e5484d", left: 151, top: 181 },
];

export function ServiceNetwork() {
  return (
    <div className="@container mx-auto mt-10 w-full max-w-[1100px]">
      <div className="relative w-full" style={{ height: "min(550px, calc(100cqw * 550 / 1100))" }}>
        <div
          className="absolute left-0 top-0 h-[550px] w-[1100px] origin-top-left overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45),0_0_80px_rgba(255,181,71,0.2)]"
          style={{
            transform: "scale(min(1, 100cqw / 1100px))",
            backgroundImage: "linear-gradient(153deg, #1a3657 0%, #0f2138 71%)",
          }}
        >
          <img src="/assets/dottedgrid-efb2d737.svg" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" />
          <img src="/assets/orbitring-79de6d1b.png" alt="" className="pointer-events-none absolute left-[340px] top-[65px] size-[418px] object-contain" />
          <div className="orbit-core absolute left-[459px] top-[240px] grid h-[68px] w-[180px] place-items-center rounded-[18px] border border-amber/70 glass text-[16px] font-bold text-white">
            Innoventix Hub
          </div>
          {orbitNodes.map((node, index) => (
            <div key={node.name} className="absolute h-[56px] w-[200px]" style={{ left: node.left, top: node.top }}>
              <div className="glass relative flex h-full items-center gap-2.5 rounded-[14px] px-2.5 shadow-[0_8px_12px_rgba(0,0,0,0.35)]">
                <span className="grid size-9 shrink-0 place-items-center rounded-[9px] text-[13px] font-black text-white" style={{ background: node.color }}>{node.mono}</span>
                <span className="min-w-0">
                  <span className="block truncate text-[14px] font-bold leading-none text-white">{node.name}</span>
                  <span className="mt-1 block text-[11px] text-mist">Service</span>
                </span>
              </div>
              <div
                className="node-glow pointer-events-none absolute inset-0 rounded-[14px] border-2 border-amber bg-amber/10 shadow-[0_0_28px_rgba(255,181,71,0.65)]"
                style={{ animationDelay: `${index * 0.8}s` }}
              />
            </div>
          ))}
          <p className="absolute bottom-5 left-10 text-[15px] font-bold text-white">Five services, one accountable team</p>
        </div>
      </div>
    </div>
  );
}

const slides = [
  { kind: "photo" as const, src: "/assets/slide1officegroupphoto-f29d2030.jpg", alt: "The Innoventix Hub team together in the office" },
  { kind: "placeholder" as const, title: "Achievement 2", body: "Placeholder for a second achievement photo", tag: "PLACEHOLDER · slide 2" },
  { kind: "placeholder" as const, title: "Achievement 3", body: "Placeholder for a third achievement photo", tag: "PLACEHOLDER · slide 3" },
];

export function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      if (!paused.current) setIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="glass relative h-[460px] overflow-hidden rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onTouchStart={(event) => { startX.current = event.touches[0]?.clientX ?? 0; paused.current = true; }}
      onTouchEnd={(event) => {
        const delta = (event.changedTouches[0]?.clientX ?? 0) - startX.current;
        if (Math.abs(delta) > 40) setIndex((current) => (current + (delta < 0 ? 1 : slides.length - 1)) % slides.length);
        paused.current = false;
      }}
    >
      <p className="absolute left-5 top-4 z-10 text-[12px] font-bold tracking-wide text-amber">ACHIEVEMENTS</p>
      <div className="absolute inset-x-[19px] top-[43px] h-[350px] overflow-hidden rounded-[14px]">
        <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.kind === "photo" ? slide.src : slide.title} className="h-full w-full shrink-0">
              {slide.kind === "photo" ? (
                <img src={slide.src} alt={slide.alt} className="h-full w-full rounded-[14px] border border-white/12 object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center rounded-[14px] border border-dashed border-amber/35 bg-[radial-gradient(circle_at_center,#2f5a8c,#0f2138)] px-6 text-center">
                  <p className="text-[40px] text-amber">★</p>
                  <p className="mt-3 text-[16px] font-bold text-white">{slide.title}</p>
                  <p className="mt-2 text-[12px] leading-[17px] text-mist">{slide.body}</p>
                  <p className="pill mt-8 !px-2 !py-1 !text-[8px]">{slide.tag}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[37px] left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, dot) => (
          <button
            key={slide.kind === "photo" ? slide.src : slide.title}
            type="button"
            aria-label={`Show slide ${dot + 1}`}
            className={`size-2 rounded-full ${dot === index ? "bg-amber" : "bg-white/35"}`}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>
      <p className="absolute bottom-3 left-5 text-[11px] text-[#7f93ad]">Auto-slides every 3s, pauses on hover; swipe on mobile.</p>
    </div>
  );
}
