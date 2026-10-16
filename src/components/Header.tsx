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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "bg-ink/80 backdrop-blur-xl" : ""}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Innoventix Hub home">
          <Image src="/brand/logo-white.png" alt="Innoventix Hub" width={168} height={50} className="h-9 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-cream/90 hover:text-white"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <Chevron open={servicesOpen} />
            </button>
            <div
              id="services-menu"
              className={`absolute left-1/2 top-full z-20 w-[640px] -translate-x-1/2 pt-3 ${servicesOpen ? "block" : "hidden"}`}
            >
              <div className="glass grid grid-cols-2 gap-4 rounded-3xl p-5">
                {serviceNav.map((service) => (
                  <div key={service.href}>
                    <Link href={service.href} className="font-bold text-amber hover:text-white">
                      {service.label}
                    </Link>
                    <p className="mb-2 text-xs text-mist/70">{service.blurb}</p>
                    <ul className="space-y-1">
                      {service.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="text-sm text-cream/80 hover:text-white">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-cream/90 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href={site.calendlyUrl} className="inline-flex items-center rounded-full bg-amber px-4 py-2.5 text-sm font-bold text-ink hover:bg-[#ffc56a]">
            Book A Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="glass mx-4 mb-4 max-h-[75vh] overflow-auto rounded-3xl p-4 lg:hidden" aria-label="Mobile">
          {serviceNav.map((service) => (
            <div key={service.href} className="border-b border-white/10 py-3">
              <Link href={service.href} className="font-bold text-amber">{service.label}</Link>
              <ul className="mt-2 space-y-1">
                {service.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="text-sm text-cream/80">{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block border-b border-white/10 py-3">
              {link.label}
            </Link>
          ))}
          <Link href={site.calendlyUrl} className="mt-4 inline-flex rounded-full bg-amber px-4 py-2.5 text-sm font-bold text-ink">
            Book A Free Consultation
          </Link>
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
