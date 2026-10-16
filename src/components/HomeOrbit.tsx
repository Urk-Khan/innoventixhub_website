"use client";

import Link from "next/link";
import { serviceNav } from "@/config/site";

export default function HomeOrbit() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px]">
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber/40 bg-navy text-center text-xs font-black tracking-wide text-amber shadow-[0_0_40px_rgba(255,181,71,0.25)]">
        INNOVENTIX
      </div>
      {serviceNav.map((service, index) => {
        const angle = (index / serviceNav.length) * 360 - 90;
        return (
          <Link
            key={service.href}
            href={service.href}
            className="glass absolute left-1/2 top-1/2 w-40 rounded-2xl p-3 text-center text-sm font-bold hover:border-amber/50"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-190px) rotate(${-angle}deg)` }}
          >
            {service.label}
            <span className="mt-1 block text-[11px] font-normal text-mist/70">{service.blurb}</span>
          </Link>
        );
      })}
    </div>
  );
}
