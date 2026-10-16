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
    <main id="main" className="section">
      <JsonLd data={graph({
        "@type": "BlogPosting",
        headline: post.meta.title,
        datePublished: post.meta.date,
        description: post.meta.description,
        author: { "@type": "Person", name: post.meta.author, jobTitle: post.meta.role },
        publisher: { "@id": `${site.url}/#organization` },
      })} />
      <article className="wrap grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold text-amber">ON THIS PAGE</p>
          <ul className="mt-3 space-y-2 text-sm">
            {post.headings.filter((heading) => heading.level === 2).map((heading) => (
              <li key={heading.id}><a href={`#${heading.id}`} className="hover:text-amber">{heading.text}</a></li>
            ))}
          </ul>
        </aside>
        <div>
          <p className="text-sm text-mist/70"><Link href="/">Home</Link> / Insights / {post.meta.category}</p>
          <p className="mt-4 text-xs font-bold text-amber">{post.meta.category}</p>
          <h1 className="mt-2 text-4xl font-black">{post.meta.title}</h1>
          <p className="mt-3 text-sm text-mist/80">{post.meta.author} · {post.meta.role} · {post.meta.date} · {post.meta.readTime}</p>
          <div className="prose-invert mt-8 space-y-4 text-cream/90 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-black [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-7">
            <MDXRemote source={post.content} components={{
              h2: (props) => <h2 id={slugify(String(props.children))} {...props} />,
              h3: (props) => <h3 id={slugify(String(props.children))} {...props} />,
            }} />
          </div>
          <aside className="glass mt-10 rounded-3xl p-5">
            <h2 className="font-bold">Key takeaways</h2>
            <p className="mt-2 text-sm text-cream/80">AI UGC is a way to test more hooks. You approve the brief. Results still depend on the offer and the media buy.</p>
          </aside>
          <aside className="mt-6 flex gap-4">
            <img src="/team/ubaid-ur-rehman-khan-founder-ceo.jpg" alt="" width={72} height={72} className="h-16 w-16 rounded-full object-cover" />
            <div>
              <p className="font-bold">{post.meta.author}</p>
              <p className="text-sm text-mist/80">{post.meta.role}</p>
            </div>
          </aside>
          <div className="mt-8 rounded-3xl bg-navy p-6">
            <p className="text-xl font-black">Want this built for you?</p>
            <a href={site.calendlyUrl} className="mt-4 inline-flex rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink">Book A Free Consultation</a>
          </div>
          {related.length ? (
            <div className="mt-8">
              <h2 className="text-xl font-black">Related</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((item) => <li key={item.slug}><Link className="text-amber" href={`/blog/${item.slug}`}>{item.title}</Link></li>)}
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
