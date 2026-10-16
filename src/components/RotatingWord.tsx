"use client";

import { useEffect, useState } from "react";

export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 2200);
    return () => window.clearInterval(timer);
  }, [words.length]);
  return <span className="text-amber">{words[index]}</span>;
}
