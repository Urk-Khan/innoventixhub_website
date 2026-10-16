"use client";

import { useEffect, useState } from "react";

const files = {
  horizontal: "logo-horizontal",
  icon: "logo-icon",
  square: "logo-square",
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

  const file = files[variant];
  return (
    <img
      src={live ? `/brand/motion/${file}.webp` : `/brand/motion/${file}-poster.webp`}
      alt={variant === "icon" ? "" : "Innoventix Hub"}
      className={className}
    />
  );
}
