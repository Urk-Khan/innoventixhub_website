"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-words]").forEach((heading) => {
        if (heading.dataset.split === "1") return;
        const text = heading.textContent || "";
        heading.textContent = "";
        text.split(/(\s+)/).forEach((part) => {
          const span = document.createElement("span");
          span.textContent = part;
          if (part.trim()) {
            span.style.display = "inline-block";
            span.className = "word";
          }
          heading.appendChild(span);
        });
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

      const blocks = gsap.utils.toArray<HTMLElement>("main section");
      blocks.forEach((block) => {
        if (block.hasAttribute("data-no-reveal") || block.hasAttribute("data-pin")) return;
        const pieces = block.querySelectorAll<HTMLElement>(":scope > .wrap > *, :scope > .wrap h2, :scope .reveal-item");
        const targets = pieces.length ? Array.from(pieces).slice(0, 8) : [];
        if (!targets.length) return;
        gsap.from(targets, {
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        });
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

      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((section) => {
        const stages = section.querySelectorAll<HTMLElement>("[data-stage]");
        if (!stages.length) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const index = Math.min(stages.length - 1, Math.floor(self.progress * stages.length));
            stages.forEach((stage, stageIndex) => {
              stage.hidden = stageIndex !== index;
            });
            section.style.setProperty("--progress", String(self.progress));
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
