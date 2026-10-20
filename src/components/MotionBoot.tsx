"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// GSAP, ScrollTrigger and Lenis are ~100KB; load them after first paint so they stay off the LCP path.
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const MotionLayer = dynamic(() => import("@/components/MotionLayer"), { ssr: false });

export default function MotionBoot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 1200 });
      return () => win.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setReady(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  return ready ? (
    <>
      <SmoothScroll />
      <MotionLayer />
    </>
  ) : null;
}
