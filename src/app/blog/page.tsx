import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import BlogCard from "@/components/SharedComponent/Blog/blogCard";

export const metadata: Metadata = {
  title: "Blog - Biztara Technologies",
  description: "Enterprise integration insights and technical articles from 18+ years of experience",
};

export default async function BlogPage() {
  const posts = await getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="py-24">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Integration Insights</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Practical insights from 18+ years of enterprise integration experience at Capgemini and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(post => post !== null).map((post, i) => (
            <div key={i} className="w-full" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <BlogCard blog={post as import('@/types/blog').Blog} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
