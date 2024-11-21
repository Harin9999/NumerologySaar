import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BlogPostMeta from './BlogPostMeta';

interface RecentPostProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
  };
}

export default function RecentPost({ post }: RecentPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-royal-scroll/80 rounded-lg shadow-lg overflow-hidden border border-royal-accent/20"
    >
      <div className="p-6 space-y-4">
        <span className="px-3 py-1 bg-royal-primary/10 text-royal-primary rounded-full inline-block">
          {post.category}
        </span>
        
        <h2 className="text-2xl font-bold text-royal-primary hover:text-royal-secondary transition-colors">
          {post.title}
        </h2>
        
        <p className="text-gray-700">{post.excerpt}</p>
        
        <BlogPostMeta
          author={post.author}
          date={post.date}
          readTime={post.readTime}
          category={post.category}
        />
        
        <motion.a
          href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-royal-primary hover:text-royal-secondary transition-colors"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}