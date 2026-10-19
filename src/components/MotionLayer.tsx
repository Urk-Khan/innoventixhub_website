"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_SELECTOR = "h1, h2, h3, p, img, li, .glass-card, .glass, article, .pill, .reveal-item";

function collectRevealTargets(section: HTMLElement) {
  if (section.hasAttribute("data-no-reveal") || section.hasAttribute("data-pin") || section.hasAttribute("data-bento")) {
    return [];
  }
  const all = Array.from(section.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  const clean = all.filter((el) => {
    if (el.closest("[data-orbit], [data-pin], [data-no-reveal], [data-bento], [data-slider], .marquee")) return false;
    if (el.classList.contains("glow-copper") || el.classList.contains("glow-gold") || el.classList.contains("arch")) return false;
    const cls = typeof el.className === "string" ? el.className : "";
    if (cls.includes("translate-")) return false;
    if (el.tagName === "IMG" && el.getAttribute("alt") === "" && cls.includes("pointer-events-none")) return false;
    return true;
  });
  const tops = clean.filter((el) => !clean.some((other) => other !== el && other.contains(el)));
  tops.forEach((el) => el.classList.add("reveal-item"));
  return tops.slice(0, 24);
}

function applyPin(section: HTMLElement, progress: number) {
  section.style.setProperty("--progress", progress.toFixed(4));
  section.querySelectorAll<HTMLElement>("[data-from]").forEach((el) => {
    const from = Number(el.dataset.from || 0);
    const to = el.dataset.to == null ? Infinity : Number(el.dataset.to);
    el.classList.toggle("is-on", progress >= from && progress < to);
  });
  const nodes = section.querySelectorAll<HTMLElement>("[data-flow-node]");
  let running = 0;
  nodes.forEach((node) => {
    if (progress >= Number(node.dataset.from || 0)) running += 1;
  });
  const badge = section.querySelector<HTMLElement>("[data-running]");
  if (badge) badge.textContent = `Running ${running}/${nodes.length || 6}`;
}

export default function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((section) => {
        section.style.setProperty("--progress", "1");
        applyPin(section, 1);
      });
      document.querySelectorAll<HTMLElement>("[data-line-draw]").forEach((path) => {
        path.style.strokeDashoffset = "0";
      });
      return;
    }

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-words]").forEach((heading) => {
        if (heading.dataset.split === "1") return;
        // Split text nodes into word spans; keep <br> and inline elements (e.g. accent spans) intact.
        const wrap = (node: Node, into: HTMLElement) => {
          node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              (child.textContent || "").split(/(\s+)/).forEach((part) => {
                if (!part) return;
                const span = document.createElement("span");
                span.textContent = part;
                if (part.trim()) {
                  span.style.display = "inline-block";
                  span.className = "word";
                }
                into.appendChild(span);
              });
            } else if (child.nodeName === "BR") {
              into.appendChild(child.cloneNode());
            } else if (child instanceof HTMLElement) {
              const copy = child.cloneNode(false) as HTMLElement;
              wrap(child, copy);
              into.appendChild(copy);
            }
          });
        };
        const source = heading.cloneNode(true) as HTMLElement;
        heading.textContent = "";
        wrap(source, heading);
        heading.dataset.split = "1";
        gsap.from(heading.querySelectorAll(".word"), {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.04,
          delay: 0.15,
        });
      });

      gsap.utils.toArray<HTMLElement>("main section").forEach((section) => {
        const targets = collectRevealTargets(section);
        if (!targets.length) return;
        gsap.set(targets, { opacity: 0, y: 32 });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
          onComplete: () => gsap.set(targets, { clearProps: "opacity,transform" }),
        });
      });

      document.querySelectorAll<HTMLElement>("[data-bento]").forEach((section) => {
        const heads = Array.from(section.querySelectorAll<HTMLElement>(":scope > .wrap > .pill, :scope > .wrap > h2, :scope > .wrap > p"));
        const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-bento-card]"));
        const targets = [...heads, ...cards];
        if (targets.length) {
          gsap.set(targets, { opacity: 0, y: 32 });
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: section, start: "top 85%", once: true },
            onComplete: () => gsap.set(targets, { clearProps: "opacity,transform" }),
          });
        }
        const bars = section.querySelectorAll<HTMLElement>("[data-bento-bar]");
        if (bars.length) {
          gsap.fromTo(bars, { scaleY: 0 }, {
            scaleY: 1,
            transformOrigin: "bottom center",
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
        const wire = section.querySelector<SVGPathElement>("[data-bento-wire]");
        if (wire) {
          const length = wire.getTotalLength();
          gsap.set(wire, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(wire, {
            strokeDashoffset: 0,
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
        const glow = section.querySelector<SVGCircleElement>("[data-bento-glow]");
        if (glow) {
          gsap.fromTo(glow, { attr: { cx: 16 } }, {
            attr: { cx: 244 },
            duration: 1.3,
            ease: "power2.inOut",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
        const dots = section.querySelectorAll("[data-bento-dot]");
        if (dots.length) {
          gsap.fromTo(dots, { opacity: 0.2 }, {
            opacity: 1,
            duration: 0.4,
            stagger: 0.22,
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
        const progress = section.querySelector<HTMLElement>("[data-bento-progress]");
        if (progress) {
          gsap.fromTo(progress, { scaleX: 0 }, {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
      });

      document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const raw = node.dataset.count || "0";
        const target = Number(raw);
        if (Number.isNaN(target)) return;
        const suffix = node.dataset.suffix || "";
        const prefix = node.dataset.prefix || "";
        const decimals = Number(node.dataset.decimals || "0");
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
          onUpdate: () => {
            node.textContent = `${prefix}${proxy.value.toFixed(decimals)}${suffix}`;
          },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-hscroll]").forEach((scroller) => {
        const track = scroller.querySelector<HTMLElement>("[data-hscroll-track]");
        if (!track) return;
        const distance = () => Math.max(0, track.scrollWidth - scroller.clientWidth);
        if (distance() < 24 || window.innerWidth < 900) return;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: scroller,
            start: "top 20%",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      document.querySelectorAll<SVGSVGElement>("[data-line]").forEach((svg) => {
        const path = svg.querySelector<SVGPathElement>("[data-line-draw]");
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        const scope = svg.closest("section") || svg;
        const dots = scope.querySelectorAll<HTMLElement>("[data-step-dot]");
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
            onUpdate: (self) => {
              dots.forEach((dot, index) => {
                dot.classList.toggle("is-on", self.progress >= (index + 0.2) / dots.length);
              });
            },
          },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((section) => {
        const target = section.querySelector<HTMLElement>("[data-pin-target]") || section;
        section.classList.add("is-motion");
        ScrollTrigger.create({
          trigger: section,
          pin: target,
          start: "top top",
          end: () => (window.innerWidth < 1024 ? "+=50vh" : "+=150vh"),
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => applyPin(section, self.progress),
        });
      });
    });

    const loops = Array.from(document.querySelectorAll<HTMLElement>("[data-loop]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-playing", entry.isIntersecting));
    }, { threshold: 0.35 });
    loops.forEach((node) => observer.observe(node));

    let timer: number | undefined;
    const refresh = () => ScrollTrigger.refresh();
    const refreshSoon = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(refresh, 150);
    };
    window.addEventListener("load", refresh);
    // Late-loading images (sliders, logos) change layout; re-measure triggers.
    document.addEventListener("load", refreshSoon, true);
    document.fonts?.ready.then(refreshSoon);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      document.removeEventListener("load", refreshSoon, true);
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
