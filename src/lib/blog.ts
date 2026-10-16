import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  role: string;
  readTime: string;
};

const dir = path.join(process.cwd(), "content/blog");

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const words = content.trim().split(/\s+/).length;
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: String(data.title || "Untitled"),
        description: String(data.description || ""),
        date: String(data.date || ""),
        category: String(data.category || "Insights"),
        author: String(data.author || "Innoventix Hub"),
        role: String(data.role || ""),
        readTime: `${Math.max(1, Math.round(words / 200))} min read`,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = ["mdx", "md"].map((ext) => path.join(dir, `${slug}.${ext}`)).find((item) => fs.existsSync(item));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const meta = getPosts().find((post) => post.slug === slug);
  const headings = content
    .split("\n")
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return { level, text, id };
    });
  return { meta, content, headings };
}
