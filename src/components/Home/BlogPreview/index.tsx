import { Icon } from "@iconify/react";
import Link from "next/link";

const featuredPosts = [
    {
        title: "Enterprise Integration Patterns with MuleSoft",
        excerpt: "Learn about essential enterprise integration patterns and their implementation in MuleSoft, drawing from real-world experience at Capgemini.",
        author: "Omendra Dwivedi",
        date: "May 26, 2025",
        category: "Integration"
    },
    {
        title: "Modernizing Legacy Systems with Dell Boomi",
        excerpt: "A practical guide to modernizing legacy systems using Dell Boomi, based on enterprise transformation projects.",
        author: "Omendra Dwivedi",
        date: "May 24, 2025",
        category: "Integration"
    },
    {
        title: "Building Scalable MERN Applications",
        excerpt: "Best practices for building enterprise-grade applications with MongoDB, Express, React, and Node.js.",
        author: "Omendra Dwivedi",
        date: "May 22, 2025",
        category: "Development"
    }
];

const BlogPreview = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Integration Insights</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Practical insights from 18+ years of enterprise integration experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <article key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm">{post.date}</span>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-midnight_text mb-3">
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    {post.title}
                                </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Icon icon="mdi:account" className="text-primary text-xl" />
                                    <span className="text-gray-600">{post.author}</span>
                                </div>
                                <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                                    Read More
                                    <Icon icon="mdi:arrow-right" className="text-xl" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-colors">
                        View All Articles
                        <Icon icon="mdi:arrow-right" className="text-xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
