import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import { getImagePrefix } from "@/utils/util";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;
  
  if (!title || !slug) return null;

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {coverImage && (
          <div className="relative w-full h-48 bg-gray-50">
            <Image 
              src={`${getImagePrefix()}${coverImage}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              priority={true}
            />
          </div>
        )}
        
        <div className="p-6">
          {date && (
            <time className="text-sm text-gray-500 mb-2 block">
              {format(new Date(date), "MMM dd, yyyy")}
            </time>
          )}
          
          <h3 className="text-xl font-semibold text-midnight_text mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          {excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          )}
          
          <div className="text-primary font-medium flex items-center gap-2">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;