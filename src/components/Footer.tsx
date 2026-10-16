"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { serviceNav, site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-soft">
      <div className="wrap grid gap-10 pb-12 pt-16 md:grid-cols-[1.3fr_0.8fr_0.7fr_1fr] md:pt-20">
        <div className="max-w-[340px]">
          <BrandLogo variant="square" className="h-16 w-16 object-contain" />
          <p className="mt-4 font-display text-[28px] tracking-[-0.28px] text-white">Innoventix Hub</p>
          <p className="mt-4 text-[15px] leading-[1.55] text-mist">
            AI content, voice agents and automation for D2C brands and SMBs in the USA, UK and Europe.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[1.68px] text-mist">SERVICES</p>
          <ul className="mt-4 space-y-3.5 text-[15px] text-pearl">
            {serviceNav.map((service) => (
              <li key={service.href}><Link href={service.href} className="hover:text-white">{service.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[1.68px] text-mist">COMPANY</p>
          <ul className="mt-4 space-y-3.5 text-[15px] text-pearl">
            <li><Link href="/work" className="hover:text-white">Work</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[1.68px] text-mist">CONTACT</p>
          <ul className="mt-4 space-y-3.5 text-[15px] text-pearl">
            <li><a className="hover:text-white" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></li>
            <li><a className="hover:text-white" href={site.whatsappUrl}>WhatsApp {site.phoneWhatsappDisplay}</a></li>
            <li><a className="hover:text-white" href={`tel:${site.voiceAgentTel}`}>AI agent {site.voiceAgentDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 border-t border-white/10 py-6 text-[13px] text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Innoventix Hub. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <button type="button" className="hover:text-white" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}
