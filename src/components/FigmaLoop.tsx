"use client";

import { useEffect, useRef } from "react";
import { buildLoop } from "@/lib/figma-loop";

/**
 * Wrap a section whose elements carry `data-node-id`. Each id in `snippets` is matched to its
 * element and plays the exported Figma keyframes while the section is in view.
 * Under prefers-reduced-motion nothing animates (elements stay at rest).
 */
export default function FigmaLoop({
  snippets,
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  snippets: Record<string, string>;
  as?: "div" | "section";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations = Object.entries(snippets).flatMap(([id, snippet]) => {
      const el = root.querySelector(`[data-node-id="${id}"]`);
      return el ? buildLoop(el, snippet) : [];
    });
    // Restart together so staggered offsets stay aligned (one shared timeline per frame).
    const observer = new IntersectionObserver(([entry]) => {
      animations.forEach((animation) => {
        if (entry.isIntersecting) animation.play();
        else animation.pause();
      });
    }, { threshold: 0.35 });
    observer.observe(root);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [snippets]);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={className} {...rest}>
      {children}
    </Component>
  );
}
