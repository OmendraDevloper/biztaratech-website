import { getPostBySlug, getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Blog } from "@/types/blog";
import { getImagePrefix } from "@/utils/util";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post?.slug || '',
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, ["title", "excerpt"]);

  if (!post?.title) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist.",
    };
  }

  return {
    title: `${post.title} - Biztara Technologies Blog`,
    description: post.excerpt || "",
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "author",
    "authorImage",
    "date",
    "content",
    "metadata",
  ]) as Blog;

  if (!post?.title) {
    notFound();
  }

  return (
    <article className="py-24">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
          >
            ← Back to all posts
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">
            {post.title}
          </h1>

          {(post.author || post.date) && (
            <div className="flex items-center gap-4 mb-8">
              {post.author && post.authorImage && (
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={`${getImagePrefix()}${post.authorImage}`}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-midnight_text">
                      {post.author}
                    </p>
                    {post.date && (
                      <p className="text-sm text-gray-500">
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {post.metadata?.coverImage && (
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image 
                src={`${getImagePrefix()}${post.metadata.coverImage}`}
                alt={post.title}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-pre:overflow-x-auto prose-pre:max-w-full prose-img:max-w-full prose-img:rounded-xl prose-img:mx-auto prose-headings:text-midnight_text prose-a:text-primary">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
}
