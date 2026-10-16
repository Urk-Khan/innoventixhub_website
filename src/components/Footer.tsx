"use client";

import Image from "next/image";
import Link from "next/link";
import { serviceNav, site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#091018]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/brand/logo-white.png" alt="Innoventix Hub" width={160} height={48} className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-6 text-mist/80">
            AI content, voice agents and automation for D2C brands and SMBs in the USA, UK and Europe.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-amber">SERVICES</p>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-cream/85 hover:text-white">{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-amber">COMPANY</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/work" className="hover:text-white">Work</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-amber">CONTACT</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></li>
            <li><a className="hover:text-white" href={site.whatsappUrl}>WhatsApp {site.phoneWhatsappDisplay}</a></li>
            <li><a className="hover:text-white" href={`tel:${site.voiceAgentTel}`}>AI agent {site.voiceAgentDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-5 text-sm text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Innoventix Hub. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <button
              type="button"
              className="hover:text-white"
              onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
