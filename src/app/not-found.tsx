import Link from "next/link";
import { serviceNav, site } from "@/config/site";

export const metadata = {
  title: "Page not found | Innoventix Hub",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="hero-stage section lg:pt-40">
      <img src="/assets/glowcopper-92d117a3.svg" alt="" className="glow-copper" />
      <div className="wrap relative z-10 max-w-3xl text-center">
        <div className="relative mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-dashed border-amber/60 text-3xl" aria-hidden="true">⚡</div>
        <p className="text-6xl font-black text-amber">404</p>
        <h1 className="mt-4 text-4xl font-black">This page took a wrong turn.</h1>
        <p className="mt-3 text-cream/80">The link might be old, or the page has moved. Here's where you can go instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <a href={site.calendlyUrl} className="btn-secondary">Book A Free Consultation</a>
        </div>
        <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {serviceNav.map((service) => (
            <li key={service.href}><Link href={service.href} className="glass glass-card block rounded-2xl p-4 font-bold">{service.label}</Link></li>
          ))}
        </ul>
        <p className="mt-8 text-sm">Think something's broken? Tell us at <a className="text-amber" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.</p>
      </div>
    </main>
  );
}
