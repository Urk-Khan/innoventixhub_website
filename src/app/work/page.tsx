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
      <section className="hero-stage bg-navy">
        <img src="/assets/glowgold-2e04291d.svg" alt="" className="glow-gold" />
        <div className="relative z-10 px-5 py-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <p className="eyebrow">Our work</p>
            <h1 className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Real Work for Real Brands.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">A look at the ads, websites and automations we&apos;ve built. Numbers marked SAMPLE are placeholders until verified client results are added.</p>
          </div>
        </div>
      </section>
      <div className="wrap">
        <WorkBrowser />
      </div>
    </main>
  );
}
