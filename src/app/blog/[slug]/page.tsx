import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import JsonLd from "@/components/JsonLd";
import { getPost, getPosts } from "@/lib/blog";
import { site } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { graph } from "@/lib/schema";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post?.meta) return { robots: { index: false, follow: true } };
  return pageMeta({
    title: `${post.meta.title} | Innoventix Hub`,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    index: false,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post?.meta) notFound();
  const related = getPosts().filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main id="main" className="pb-20">
      <JsonLd data={graph({
        "@type": "BlogPosting",
        headline: post.meta.title,
        datePublished: post.meta.date,
        description: post.meta.description,
        author: { "@type": "Person", name: post.meta.author, jobTitle: post.meta.role },
        publisher: { "@id": `${site.url}/#organization` },
      })} />
      <header className="hero-stage px-5 pb-10 pt-28 text-center lg:pt-[200px]">
        <p className="text-sm text-mist"><Link href="/">Home</Link> / <Link href="/blog">Insights</Link> / {post.meta.category}</p>
        <p className="eyebrow mt-6">{post.meta.category}</p>
        <h1 className="mx-auto mt-7 max-w-[920px] text-[34px] font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">{post.meta.title}</h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-left">
          <img src="/team/ubaid-ur-rehman-khan-founder-ceo.jpg" alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
          <p className="text-sm text-pearl">{post.meta.author} · {post.meta.role}<br /><span className="text-mist">{post.meta.date} · {post.meta.readTime}</span></p>
        </div>
      </header>
      <div className="wrap">
        <div className="glass mb-10 grid h-64 place-items-end overflow-hidden rounded-[24px] bg-[#0f2138] p-6 md:h-80">
          <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">{post.meta.category}</span>
        </div>
      </div>
      <article className="wrap grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="glass h-fit rounded-[20px] p-5 lg:sticky lg:top-28">
          <p className="text-xs font-bold tracking-[1.6px] text-amber">ON THIS PAGE</p>
          <ul className="mt-3 space-y-2 text-sm text-pearl/85">
            {post.headings.filter((heading) => heading.level === 2).map((heading) => (
              <li key={heading.id}><a href={`#${heading.id}`} className="hover:text-amber">{heading.text}</a></li>
            ))}
          </ul>
        </aside>
        <div>
          <div className="space-y-4 text-pearl/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-7">
            <MDXRemote source={post.content} components={{
              h2: (props) => <h2 id={slugify(String(props.children))} {...props} />,
              h3: (props) => <h3 id={slugify(String(props.children))} {...props} />,
            }} />
          </div>
          <aside className="glass mt-10 rounded-[20px] border-amber/30 p-5">
            <h2 className="font-bold text-amber">Key takeaways</h2>
            <p className="mt-2 text-sm leading-6 text-pearl/85">AI UGC is a way to test more hooks. You approve the brief. Results still depend on the offer and the media buy.</p>
          </aside>
          <aside className="mt-6 flex items-center gap-4">
            <img src="/team/ubaid-ur-rehman-khan-founder-ceo.jpg" alt="" width={72} height={72} className="size-16 rounded-full object-cover" />
            <div>
              <p className="font-bold text-white">{post.meta.author}</p>
              <p className="text-sm text-mist">{post.meta.role}</p>
            </div>
          </aside>
          <div className="cta-card mt-8 px-6 py-8">
            <p className="text-2xl font-bold text-white">Want this built for you?</p>
            <a href={site.calendlyUrl} className="btn-primary mt-4">Book A Free Consultation <span aria-hidden="true">→</span></a>
          </div>
          {related.length ? (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-white">Related</h2>
              <ul className="mt-4 grid gap-3">
                {related.map((item) => (
                  <li key={item.slug} className="glass rounded-[18px] px-4 py-3 text-sm">
                    <Link className="font-bold text-white hover:text-amber" href={`/blog/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
