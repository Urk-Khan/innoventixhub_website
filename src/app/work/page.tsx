import JsonLd from "@/components/JsonLd";
import WorkBrowser from "@/components/WorkBrowser";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Our Work | Innoventix Hub Case Studies",
  description: "AI UGC ads, websites and automations we've built for real brands.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main">
      <JsonLd data={graph(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]))} />
      <section className="bg-navy">
        <div className="wrap py-16">
          <p className="eyebrow">Our work</p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">Real Work for Real Brands.</h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">A look at the ads, websites and automations we've built. Numbers marked SAMPLE are placeholders until verified client results are added.</p>
        </div>
      </section>
      <div className="wrap">
        <WorkBrowser />
      </div>
    </main>
  );
}
