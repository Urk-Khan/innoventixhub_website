import Link from "next/link";
import { CtaBand } from "@/components/Sections";
import { getPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insights | Innoventix Hub",
  description: "Short, useful guides from the team that builds this stuff every day.",
  path: "/blog",
  index: false,
});

export default function BlogIndexPage() {
  const posts = getPosts();
  const [featured, ...rest] = posts;
  return (
    <main id="main" className="hero-stage">
      <div className="px-5 pb-16 pt-28 text-center lg:pt-[200px]">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center">
        <p className="eyebrow">Insights</p>
        <h1 data-words className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Practical Notes on AI, Content and Growth.</h1>
        <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75">Short, useful guides from the team that builds this stuff every day.</p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-[1000px] flex-wrap justify-center gap-2 text-sm">
          {["All", "AI UGC", "Automation", "Voice Agents", "Web", "SEO"].map((chip, index) => (
            <li key={chip} className={`rounded-full px-4 py-2 font-bold ${index === 0 ? "bg-amber text-navy" : "border border-white/15 text-pearl"}`}>{chip}</li>
          ))}
        </ul>
      </div>
      <div className="wrap pb-4">
        {featured ? (
          <article className="glass glass-card overflow-hidden rounded-[24px] text-left lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid min-h-56 place-items-end bg-[#080d1e] p-6">
              <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">{featured.category}</span>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold tracking-wide text-amber">Featured</p>
              <h2 className="mt-3 text-3xl font-bold text-white"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
              <p className="mt-3 text-pearl/80">{featured.description}</p>
              <p className="mt-4 text-sm text-mist">{featured.date} · {featured.readTime}</p>
            </div>
          </article>
        ) : (
          <div className="glass rounded-[24px] p-8 text-center">
            <p className="text-pearl">First posts are on the way. Want them in your inbox?</p>
            <a href="mailto:support@innoventixhub.tech?subject=Notify%20me%20about%20insights" className="btn-primary mt-4">Notify me</a>
          </div>
        )}
        {rest.length ? (
          <ul className="mt-6 grid gap-5 text-left md:grid-cols-3">
            {rest.map((post) => (
              <li key={post.slug} className="glass glass-card overflow-hidden rounded-[22px]">
                <div className="grid h-28 place-items-center bg-[#080d1e] text-xs font-bold text-amber">{post.category}</div>
                <div className="p-5">
                  <h2 className="font-bold text-white"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p className="mt-2 text-sm leading-6 text-pearl/75">{post.description}</p>
                  <p className="mt-3 text-xs text-mist">{post.readTime} · {post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <CtaBand title="Want this built for you?" copy="Book a free consultation and we'll map the first thing worth building." />
    </main>
  );
}
