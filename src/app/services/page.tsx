import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BookButton } from "@/components/Sections";
import { serviceNav } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "AI Growth Services for D2C & SMBs, Innoventix Hub",
  description: "Five connected AI services: content, automation, voice agents, web development and SEO. See what we build and how it drives revenue.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main" className="section">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceSchema({
            name: "AI growth services",
            description: "Content, automation, voice agents, web development and SEO for D2C brands and SMBs.",
            path: "/services",
            serviceType: "AI agency services",
            catalog: serviceNav.map((service) => ({ name: service.label, description: service.blurb })),
          }),
        )}
      />
      <div className="wrap">
        <p className="text-sm text-mist/70">Home / Services</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">AI growth services for D2C brands and SMBs.</h1>
        <p className="mt-4 max-w-2xl text-lg text-cream/80">
          Five connected AI services: content, automation, voice agents, web development and SEO. See what we build and how it drives revenue.
        </p>
        <div className="mt-8"><BookButton /></div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {serviceNav.map((service, index) => (
            <li key={service.href} className="glass rounded-3xl p-6">
              <p className="text-sm font-bold text-amber">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-black">
                <Link href={service.href} className="hover:text-amber">{service.label}</Link>
              </h2>
              <p className="mt-2 text-sm text-cream/75">{service.blurb}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {service.children.map((child) => (
                  <li key={child.href}><Link href={child.href} className="text-cream/80 hover:text-white">{child.label}</Link></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
