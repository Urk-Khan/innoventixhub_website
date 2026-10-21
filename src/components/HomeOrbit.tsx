"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BrandLogo from "@/components/BrandLogo";

const R = 22;

const services = [
  {
    label: "Content",
    detail: "UGC Ads · Short-form · Long-form",
    subs: ["UGC Ads", "Short-form", "Long-form"],
    href: "/services/content-creation",
    color: "#e8a07a",
    summary: "AI UGC ads, short-form edits and long-form video from one content team.",
  },
  {
    label: "Automation",
    detail: "n8n · GHL · CRM · Python",
    subs: ["n8n", "GHL", "CRM", "Python"],
    href: "/services/ai-automation",
    color: "#6ba3a0",
    summary: "Workflows that connect n8n, GoHighLevel, your CRM and custom Python.",
  },
  {
    label: "Voice",
    detail: "Inbound receptionist · Outbound",
    subs: ["Inbound", "Outbound"],
    href: "/services/ai-voice-agents",
    color: "#7a9ebf",
    summary: "An inbound receptionist and outbound voice agents that answer and book.",
  },
  {
    label: "Web",
    detail: "Next.js · Shopify · Landing pages",
    subs: ["Next.js", "Shopify", "Landing pages"],
    href: "/services/web-development",
    color: "#8fae8b",
    summary: "Next.js sites, Shopify stores and landing pages built to convert.",
  },
  {
    label: "SEO",
    detail: "Technical · On-page · Off-page · Local",
    subs: ["Technical", "On-page", "Off-page", "Local"],
    href: "/services/seo",
    color: "#d4a574",
    summary: "Technical, on-page, off-page and local SEO, reported every month.",
  },
].map((service, index) => {
  const turn = (index * 72 * Math.PI) / 180;
  const x = Math.sin(turn);
  const y = -Math.cos(turn);
  return { ...service, x, y, fans: fanOffsets(service.subs.length, x, y) };
});

const stars = [
  [8, 7, 2], [18, 16, 1.4], [31, 8, 1.6], [46, 12, 1.2], [61, 6, 2], [74, 14, 1.4], [88, 9, 1.8],
  [11, 30, 1.4], [24, 24, 1.2], [78, 28, 1.6], [91, 36, 1.3], [6, 52, 1.8], [15, 70, 1.3],
  [28, 86, 1.6], [44, 92, 1.2], [63, 88, 1.8], [79, 78, 1.3], [93, 64, 1.6], [86, 50, 1.2],
  [70, 42, 1.4], [52, 20, 1.2], [37, 74, 1.3], [55, 64, 1.5], [14, 44, 1.2],
];

function fanOffsets(count: number, x: number, y: number) {
  const base = Math.atan2(y, x);
  const spread = count <= 2 ? 0.85 : 1.2;
  const dist = 13;
  return Array.from({ length: count }, (_, index) => {
    const t = count === 1 ? 0.5 : index / (count - 1);
    const angle = base - spread / 2 + spread * t;
    return { dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist };
  });
}

function springEase() {
  const stiffness = 180;
  const damping = 18;
  const seconds = 0.85;
  const w0 = Math.sqrt(stiffness);
  const zeta = damping / (2 * w0);
  const wd = w0 * Math.sqrt(Math.max(0.0001, 1 - zeta * zeta));
  return (progress: number) => {
    const time = progress * seconds;
    const envelope = Math.exp(-zeta * w0 * time);
    return 1 - envelope * (Math.cos(wd * time) + ((zeta * w0) / wd) * Math.sin(wd * time));
  };
}

export default function CommandCenter() {
  const root = useRef<HTMLDivElement>(null);
  const rotor = useRef<HTMLDivElement>(null);
  const spin = useRef<gsap.core.Tween | null>(null);
  const branches = useRef<Array<HTMLDivElement | null>>([]);
  const hold = useRef(false);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const apply = () => setMobile(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const angle = { value: 0 };
    const paint = () => {
      if (rotor.current) rotor.current.style.transform = `rotate(${angle.value}deg)`;
      root.current?.querySelectorAll<HTMLElement>("[data-upright]").forEach((el) => {
        const base = el.dataset.base || "translate(-50%, -50%)";
        el.style.transform = `${base} rotate(${-angle.value}deg)`;
      });
    };
    paint();
    if (reduce || mobile) return;
    const tween = gsap.to(angle, {
      value: 360,
      duration: 90,
      ease: "none",
      repeat: -1,
      onUpdate: paint,
    });
    spin.current = tween;
    return () => {
      tween.kill();
      spin.current = null;
    };
  }, [mobile]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chips = root.current?.querySelectorAll<HTMLElement>("[data-chip]") ?? [];
    chips.forEach((chip) => {
      gsap.fromTo(chip, { opacity: 0, scale: 0.4 }, {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: springEase(),
        transformOrigin: "center center",
      });
    });
  }, [active]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (hold.current) return;
      setActive((current) => (current + 1) % services.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function easeSpin(timeScale: number) {
    const tween = spin.current;
    if (!tween) return;
    gsap.to(tween, {
      timeScale,
      duration: 1.2,
      ease: timeScale === 0 ? "power2.out" : "power2.in",
      overwrite: "auto",
    });
  }

  function zoom(index: number) {
    branches.current.forEach((branch, branchIndex) => {
      if (!branch) return;
      const node = services[branchIndex];
      gsap.to(branch, {
        scale: branchIndex === index ? 1.8 : 1,
        duration: 0.7,
        ease: "power3.inOut",
        transformOrigin: `${50 + node.x * R}% ${50 + node.y * R}%`,
      });
    });
  }

  function closePanel() {
    setSelected(null);
    hold.current = false;
    easeSpin(1);
    branches.current.forEach((branch) => {
      if (branch) gsap.to(branch, { scale: 1, duration: 0.5, ease: "power3.inOut" });
    });
  }

  function focusNode(index: number) {
    if (selected != null) return;
    hold.current = true;
    setActive(index);
    easeSpin(0);
  }

  function choose(index: number) {
    hold.current = true;
    setActive(index);
    easeSpin(0);
    if (mobile) {
      setSelected((current) => (current === index ? null : index));
      if (selected === index) hold.current = false;
      return;
    }
    setSelected(index);
    zoom(index);
  }

  const chosen = selected == null ? null : services[selected];

  return (
    <div
      ref={root}
      data-orbit
      className="relative mx-auto mt-2 w-full max-w-[980px]"
      onMouseLeave={() => {
        if (selected != null) return;
        hold.current = false;
        easeSpin(1);
      }}
      onPointerDown={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("[data-node], [data-panel]")) return;
        if (selected != null) closePanel();
      }}
    >
      <div className="relative mx-auto aspect-square w-full overflow-hidden">
        <img src="/assets/blobteal-3582615b.svg" alt="" className="pointer-events-none absolute -left-[8%] top-[16%] w-[38%] opacity-70" />
        <img src="/assets/blobcopper-15ea01b9.svg" alt="" className="pointer-events-none absolute -right-[6%] top-[6%] w-[40%] opacity-60" />
        <img src="/assets/blobblue-01ad4f44.svg" alt="" className="pointer-events-none absolute bottom-[4%] right-[6%] w-[32%] opacity-50" />
        {stars.map(([x, y, size]) => (
          <span
            key={`${x}-${y}`}
            className="pointer-events-none absolute rounded-full bg-white"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity: size > 1.6 ? 0.85 : 0.45 }}
          />
        ))}

        <div ref={rotor} className="absolute inset-0">
          <img src="/assets/orbitring300-4cf18727.png" alt="" className="pointer-events-none absolute left-1/2 top-1/2 w-[70%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80" />
          <img src="/assets/orbitring180-830ed194.png" alt="" className="pointer-events-none absolute left-1/2 top-1/2 w-[42%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-75" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
            {services.map((service, index) => (
              <line
                key={service.label}
                x1="50"
                y1="50"
                x2={50 + service.x * R}
                y2={50 + service.y * R}
                stroke={index === active ? service.color : "rgba(255,255,255,0.28)"}
                strokeWidth={index === active ? 0.35 : 0.18}
              />
            ))}
            {services[active].fans.map((fan, index) => (
              <line
                key={`${services[active].label}-${index}`}
                x1={50 + services[active].x * R}
                y1={50 + services[active].y * R}
                x2={50 + services[active].x * R + fan.dx}
                y2={50 + services[active].y * R + fan.dy}
                stroke={services[active].color}
                strokeWidth="0.22"
              />
            ))}
          </svg>

          {services.map((service, index) => {
            const on = index === active;
            return (
              <div
                key={service.label}
                ref={(node) => { branches.current[index] = node; }}
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{ opacity: on ? 1 : 0.3 }}
              >
                <button
                  type="button"
                  data-node
                  className="pointer-events-auto absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-4"
                  style={{
                    left: `${50 + service.x * R}%`,
                    top: `${50 + service.y * R}%`,
                    background: service.color,
                    boxShadow: on ? `0 0 0 6px ${service.color}33, 0 0 22px ${service.color}` : `0 0 12px ${service.color}`,
                  }}
                  aria-pressed={on}
                  aria-label={`${service.label}. ${service.detail}`}
                  onMouseEnter={() => focusNode(index)}
                  onFocus={() => focusNode(index)}
                  onClick={() => choose(index)}
                />
                <div
                  data-upright
                  data-base="translate(-50%, -50%)"
                  className="absolute max-w-[92px] -translate-x-1/2 -translate-y-1/2 text-center sm:max-w-[140px]"
                  style={{ left: `${50 + service.x * (R + 8)}%`, top: `${50 + service.y * (R + 8)}%` }}
                >
                  <p className="text-[11px] font-bold leading-tight sm:text-[13px]" style={{ color: service.color }}>{service.label}</p>
                  {on ? null : <p className="mt-0.5 hidden text-[10px] leading-tight text-pearl/80 sm:block">{service.detail}</p>}
                </div>
                {on
                  ? service.subs.map((sub, subIndex) => {
                    const fan = service.fans[subIndex];
                    return (
                      <div
                        key={sub}
                        data-chip
                        className="absolute"
                        style={{
                          left: `${50 + service.x * R + fan.dx}%`,
                          top: `${50 + service.y * R + fan.dy}%`,
                        }}
                      >
                        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                          <span className="mx-auto block size-2 rounded-full sm:size-2.5" style={{ background: service.color, boxShadow: `0 0 10px ${service.color}` }} />
                          <span
                            data-upright
                            data-base="translate(-50%, 0)"
                            className="absolute left-1/2 top-3 block -translate-x-1/2 whitespace-nowrap text-[9px] font-bold text-white sm:text-[11px]"
                          >
                            {sub}
                          </span>
                        </div>
                      </div>
                    );
                  })
                  : null}
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[24%] -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/coreglow-e7939e95.svg" alt="" className="absolute left-1/2 top-1/2 w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2" />
          <div className="relative flex aspect-square flex-col items-center justify-center rounded-full border-2 border-amber bg-[#101830] text-center shadow-[0_0_50px_rgba(93, 240, 168,0.45)]">
            <BrandLogo variant="icon" className="h-[34%] w-[34%] object-contain" />
            <span className="text-[clamp(6px,1vw,10px)] font-bold tracking-[0.14em] text-amber">INNOVENTIX</span>
            <span className="text-[clamp(9px,1.5vw,15px)] font-black tracking-[0.16em] text-white">HUB</span>
          </div>
        </div>

        <aside
          data-panel
          className={`absolute bottom-3 right-3 top-3 z-30 hidden w-[360px] max-w-[46%] flex-col rounded-3xl border border-white/15 bg-[rgba(15,33,56,0.94)] p-6 text-left shadow-2xl backdrop-blur-xl transition-transform duration-500 md:flex ${selected != null ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
          aria-hidden={selected == null}
        >
          {chosen ? (
            <>
              <p className="text-xs font-bold tracking-[0.16em] text-amber">SERVICE</p>
              <h3 className="mt-3 text-3xl font-black text-white">{chosen.label}</h3>
              <p className="mt-2 text-sm text-pearl/80">{chosen.detail}</p>
              <p className="mt-4 text-sm leading-6 text-pearl">{chosen.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {chosen.subs.map((sub) => (
                  <li key={sub} className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white">{sub}</li>
                ))}
              </ul>
              <Link href={chosen.href} className="btn-primary mt-auto w-fit">Explore {chosen.label} →</Link>
            </>
          ) : null}
        </aside>
      </div>

      {chosen ? (
        <div data-panel className="mx-auto mt-3 max-w-md rounded-2xl border border-white/10 bg-[rgba(15,33,56,0.92)] p-4 text-left md:hidden">
          <p className="text-xs font-bold tracking-[0.14em] text-amber">{chosen.label}</p>
          <p className="mt-2 text-sm text-pearl/85">{chosen.summary}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {chosen.subs.map((sub, index) => (
              <li key={sub} className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold" style={{ transform: `rotate(${(index - (chosen.subs.length - 1) / 2) * 4}deg)` }}>{sub}</li>
            ))}
          </ul>
          <Link href={chosen.href} className="mt-4 inline-flex text-sm font-bold text-amber">Explore {chosen.label} →</Link>
        </div>
      ) : null}
    </div>
  );
}
