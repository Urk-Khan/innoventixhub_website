"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { serviceNav, site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-soft">
      <div className="wrap flex flex-col items-start gap-7 pb-10 pt-12 md:hidden">
        <p className="font-display text-[22px] font-black tracking-[-0.22px] text-white">Innoventix Hub</p>
        <a className="text-sm text-pearl" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>
        <a className="text-sm text-pearl" href={site.whatsappUrl}>WhatsApp {site.phoneWhatsappDisplay}</a>
        <a className="text-sm text-pearl" href={`tel:${site.voiceAgentTel}`}>AI agent {site.voiceAgentDisplay}</a>
        <p className="text-[13px] text-mist">
          <Link href={serviceNav[0]?.href ?? "/"}>Services</Link> · <Link href="/work">Work</Link> · <Link href="/about">About</Link> · <Link href="/contact">Contact</Link>
        </p>
        <a href={site.whatsappUrl} className="rounded-full bg-[#25d366] px-3.5 py-2.5 text-xs font-semibold text-white">WhatsApp</a>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-mist">
          <span>© {new Date().getFullYear()} Innoventix Hub</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Cookie settings</button>
        </div>
      </div>
      <div className="wrap hidden gap-10 pb-12 pt-20 md:grid md:grid-cols-[1.3fr_0.8fr_0.7fr_1fr]">
        <div className="col-span-2 max-w-[340px] md:col-span-1">
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
        <div className="col-span-2 md:col-span-1">
          <p className="text-xs font-semibold tracking-[1.68px] text-mist">CONTACT</p>
          <ul className="mt-4 space-y-3.5 text-[15px] text-pearl">
            <li><a className="hover:text-white" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></li>
            <li><a className="hover:text-white" href={site.whatsappUrl}>WhatsApp {site.phoneWhatsappDisplay}</a></li>
            <li><a className="hover:text-white" href={`tel:${site.voiceAgentTel}`}>AI agent {site.voiceAgentDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap hidden gap-3 border-t border-white/10 py-6 text-[13px] text-mist md:flex md:flex-row md:items-center md:justify-between">
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
