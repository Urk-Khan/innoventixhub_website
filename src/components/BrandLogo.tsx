"use client";

import { useEffect, useState } from "react";

// Poster intrinsic sizes; width/height attrs reserve space so the swap never shifts layout.
const files = {
  horizontal: { file: "logo-horizontal", width: 480, height: 182 },
  icon: { file: "logo-icon", width: 200, height: 200 },
  square: { file: "logo-square", width: 220, height: 220 },
} as const;

export default function BrandLogo({
  variant,
  className,
}: {
  variant: keyof typeof files;
  className?: string;
}) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => setLive(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  const { file, width, height } = files[variant];
  return (
    <img
      src={live ? `/brand/motion/${file}.webp` : `/brand/motion/${file}-poster.webp`}
      alt={variant === "icon" ? "" : "Innoventix Hub"}
      width={width}
      height={height}
      className={className}
    />
  );
}
