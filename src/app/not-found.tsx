import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import FigmaLoop from "@/components/FigmaLoop";
import { notFoundLoop } from "@/content/motion/404";
import { serviceNav, site } from "@/config/site";

export const metadata = {
  title: "Page not found | Innoventix Hub",
  robots: { index: false, follow: false },
};

// Figma node ids for the five service links (108:3435 desktop).
const linkNodes: Record<string, string> = {
  "/services/content-creation": "108:4617",
  "/services/ai-automation": "108:4622",
  "/services/ai-voice-agents": "108:4627",
  "/services/web-development": "108:4632",
  "/services/seo": "108:4637",
};

export default function NotFound() {
  return (
    <FigmaLoop as="main" id="main" snippets={notFoundLoop} className="hero-stage section lg:pt-40">
      <img src="/assets/glowcopper-92d117a3.svg" alt="" className="glow-copper" />
      <div className="wrap relative z-10 max-w-5xl text-center">
        <BrandLogo variant="square" className="mx-auto mb-6 h-16 w-16 object-contain" />
        <p className="pill">Error 404</p>
        <p className="relative mx-auto mt-4 w-fit text-[clamp(6.875rem,4.3214rem+10.4762vw,13.75rem)] font-black leading-none tracking-[-0.02em] text-amber">
          404
          <span data-node-id="108:4610" aria-hidden="true" className="absolute -right-[0.15em] top-[0.05em] text-[0.25em] text-amber-bright drop-shadow-[0_0_14px_rgba(255,181,71,0.9)]">⚡</span>
        </p>
        <h1 data-words className="mt-4 text-h2 font-black text-white">This page took a wrong turn.</h1>
        <p className="mx-auto mt-3 max-w-xl text-cream/80">The link might be old, or the page has moved. Here's where you can go instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href={site.calendlyUrl} className="btn-secondary">Book A Free Consultation</a>
        </div>
        <p className="mt-14 text-xs font-bold tracking-[0.14em] text-amber-bright">GO SOMEWHERE USEFUL</p>
        <h2 className="mt-3 text-h2-sm text-white">Explore our services</h2>
        <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          {serviceNav.map((service) => (
            <li key={service.href} data-node-id={linkNodes[service.href]} className="relative">
              <Link href={service.href} className="glass glass-card flex h-full flex-col gap-6 rounded-2xl p-5">
                <span className="text-lg font-bold text-white">{service.label}</span>
                <span className="text-sm font-bold text-amber">Explore →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm">Think something's broken? Tell us at <a className="text-amber" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.</p>
      </div>
    </FigmaLoop>
  );
}
