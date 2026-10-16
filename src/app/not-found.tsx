import Link from "next/link";
import { serviceNav, site } from "@/config/site";

export const metadata = { robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="wrap max-w-3xl text-center">
        <div className="mx-auto mb-6 h-24 w-24 rounded-full border border-dashed border-amber/60" aria-hidden="true" />
        <p className="text-6xl font-black text-amber">404</p>
        <h1 className="mt-4 text-4xl font-black">This page took a wrong turn.</h1>
        <p className="mt-3 text-cream/80">The link might be old, or the page has moved. Here's where you can go instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink">Back to Home</Link>
          <a href={site.calendlyUrl} className="rounded-full border border-white/25 px-5 py-3 text-sm font-bold">Book A Free Consultation</a>
        </div>
        <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {serviceNav.map((service) => (
            <li key={service.href}><Link href={service.href} className="glass block rounded-2xl p-4 font-bold">{service.label}</Link></li>
          ))}
        </ul>
        <p className="mt-8 text-sm">Think something's broken? Tell us at <a className="text-amber" href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a>.</p>
      </div>
    </main>
  );
}
