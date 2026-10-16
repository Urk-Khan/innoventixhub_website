import Link from "next/link";
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
        <h1 className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px]">Practical Notes on AI, Content and Growth.</h1>
        <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75">Short, useful guides from the team that builds this stuff every day.</p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-[1000px] flex-wrap justify-center gap-2 text-sm">
          {["All", "AI UGC", "Automation", "Voice Agents", "Web", "SEO"].map((chip) => (
            <li key={chip} className="rounded-full border border-white/15 px-3 py-1">{chip}</li>
          ))}
        </ul>
        {featured ? (
          <article className="glass mx-auto mt-8 max-w-[1000px] rounded-3xl p-6 text-left">
            <p className="text-xs font-bold text-amber">{featured.category}</p>
            <h2 className="mt-2 text-3xl font-black"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
            <p className="mt-2 text-cream/80">{featured.description}</p>
            <p className="mt-3 text-sm text-mist/70">{featured.date} · {featured.readTime}</p>
          </article>
        ) : (
          <div className="glass mx-auto mt-8 max-w-[1000px] rounded-3xl p-6">
            <p>First posts are on the way. Want them in your inbox?</p>
            <a href="mailto:support@innoventixhub.tech?subject=Notify%20me%20about%20insights" className="mt-4 inline-flex rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink">Notify me</a>
          </div>
        )}
        <ul className="mx-auto mt-6 grid max-w-[1000px] gap-4 text-left md:grid-cols-3">
          {rest.map((post) => (
            <li key={post.slug} className="glass rounded-3xl p-5">
              <p className="text-xs text-amber">{post.category}</p>
              <h2 className="mt-2 font-bold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="mt-2 text-sm text-cream/75">{post.description}</p>
              <p className="mt-3 text-xs text-mist/70">{post.readTime} · {post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
