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
    <main id="main" className="section">
      <div className="wrap">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Practical Notes on AI, Content and Growth.</h1>
        <p className="mt-3 max-w-2xl text-cream/80">Short, useful guides from the team that builds this stuff every day.</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {["All", "AI UGC", "Automation", "Voice Agents", "Web", "SEO"].map((chip) => (
            <li key={chip} className="rounded-full border border-white/15 px-3 py-1">{chip}</li>
          ))}
        </ul>
        {featured ? (
          <article className="glass mt-8 rounded-3xl p-6">
            <p className="text-xs font-bold text-amber">{featured.category}</p>
            <h2 className="mt-2 text-3xl font-black"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
            <p className="mt-2 text-cream/80">{featured.description}</p>
            <p className="mt-3 text-sm text-mist/70">{featured.date} · {featured.readTime}</p>
          </article>
        ) : (
          <div className="glass mt-8 rounded-3xl p-6">
            <p>First posts are on the way. Want them in your inbox?</p>
            <a href="mailto:support@innoventixhub.tech?subject=Notify%20me%20about%20insights" className="mt-4 inline-flex rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink">Notify me</a>
          </div>
        )}
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
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
