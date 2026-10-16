"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { serviceNav, site } from "@/config/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <a href="#main" className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>

      <div className="pointer-events-auto flex h-[60px] items-center justify-between px-5 lg:hidden">
        <Link href="/" aria-label="Innoventix Hub home">
          <Image src="/brand/logo-white.png" alt="Innoventix Hub" width={168} height={50} className="h-7 w-auto" priority />
        </Link>
        <button
          type="button"
          className="flex h-5 w-7 flex-col justify-center gap-[5px]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="h-0.5 w-7 rounded-full bg-white" />
          <span className="h-0.5 w-7 rounded-full bg-white" />
          <span className={`h-0.5 rounded-full bg-white ${open ? "w-7" : "w-5"}`} />
        </button>
      </div>

      <div className="pointer-events-none hidden justify-center px-6 pt-8 lg:flex">
        <div className={`pointer-events-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between rounded-full border border-white/12 py-2 pl-6 pr-2 ${scrolled ? "bg-[rgba(38,74,117,0.7)] backdrop-blur-[24px]" : "bg-[rgba(38,74,117,0.7)] backdrop-blur-[12px]"}`}>
          <Link href="/" className="shrink-0" aria-label="Innoventix Hub home">
            <Image src="/brand/logo-white.png" alt="Innoventix Hub" width={168} height={50} className="h-[34px] w-auto" priority />
          </Link>
          <nav className="flex items-center gap-8 text-sm font-medium text-pearl" aria-label="Primary">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                className="flex items-center gap-1 hover:text-white"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                Services
                <Chevron open={servicesOpen} />
              </button>
              <div id="services-menu" className={`absolute left-1/2 top-full z-20 w-[680px] -translate-x-1/2 pt-4 ${servicesOpen ? "block" : "hidden"}`}>
                <div className="glass-strong grid grid-cols-2 gap-4 rounded-3xl p-5">
                  {serviceNav.map((service) => (
                    <div key={service.href}>
                      <Link href={service.href} className="font-bold text-amber hover:text-white">{service.label}</Link>
                      <p className="mb-2 text-xs text-mist">{service.blurb}</p>
                      <ul className="space-y-1">
                        {service.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="text-sm text-pearl/85 hover:text-white">{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">{link.label}</Link>
            ))}
          </nav>
          <Link href={site.calendlyUrl} className="btn-primary">
            Book A Free Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="pointer-events-auto glass-strong mx-4 max-h-[75vh] overflow-auto rounded-3xl p-4 lg:hidden" aria-label="Mobile">
          {serviceNav.map((service) => (
            <div key={service.href} className="border-b border-white/10 py-3">
              <Link href={service.href} className="font-bold text-amber">{service.label}</Link>
              <ul className="mt-2 space-y-1">
                {service.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-sm text-pearl/85">{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block border-b border-white/10 py-3">{link.label}</Link>
          ))}
          <Link href={site.calendlyUrl} className="btn-primary mt-4">Book A Free Consultation</Link>
        </nav>
      ) : null}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={open ? "rotate-180" : ""}>
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
