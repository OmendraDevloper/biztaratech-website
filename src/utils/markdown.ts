import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSXElementConstructor, ReactElement } from "react";

const postsDirectory = join(process.cwd(), "markdown/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Only compile MDX if content field is requested
    let mdxContent: ReactElement<any, string | JSXElementConstructor<any>> | null = null;
    if (fields.includes("content")) {
      const { content: compiledContent } = await compileMDX({
        source: content,
        options: { parseFrontmatter: false },
      });
      mdxContent = compiledContent;
    }

    const items: Record<string, any> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content" && mdxContent) {
        items[field] = mdxContent;
      }
      if (field === "metadata") {
        items[field] = data;
      }
      if (data[field]) {
        items[field] = data[field];
      }
    });

    return items;
  } catch (e) {
    console.error(`Error processing post ${slug}:`, e);
    return null;
  }
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug.replace(/\.mdx$/, ""), fields))
  );

  // Sort posts by date in descending order
  return posts
    .filter((post) => post !== null)
    .sort((post1, post2) => (post1?.date > post2?.date ? -1 : 1));
}
