"use client";

import { useEffect, useState } from "react";

const files = {
  horizontal: "logo-horizontal",
  icon: "logo-icon",
  square: "logo-square",
} as const;

const sizes = {
  horizontal: { width: 180, height: 34 },
  icon: { width: 48, height: 48 },
  square: { width: 64, height: 64 },
} as const;

export default function BrandLogo({
  variant,
  className,
}: {
  variant: keyof typeof files;
  className?: string;
}) {
  const [live, setLive] = useState(false);
  const size = sizes[variant];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => setLive(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  const file = files[variant];
  return (
    <img
      src={live ? `/brand/motion/${file}.webp` : `/brand/motion/${file}-poster.webp`}
      alt={variant === "icon" ? "" : "Innoventix Hub"}
      width={size.width}
      height={size.height}
      className={className}
      decoding="async"
    />
  );
}
