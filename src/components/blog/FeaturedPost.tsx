import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import BlogPostMeta from './BlogPostMeta';

interface FeaturedPostProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  };
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16 bg-royal-scroll/80 rounded-lg shadow-lg overflow-hidden border border-royal-accent/20"
    >
      <div className="p-8 space-y-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 bg-royal-primary/10 text-royal-primary rounded-full flex items-center gap-1">
            <Star className="w-4 h-4" />
            Featured Article
          </span>
          <span className="px-3 py-1 bg-royal-primary/10 text-royal-primary rounded-full">
            {post.category}
          </span>
        </div>

        <h2 className="text-3xl font-bold text-royal-primary hover:text-royal-secondary transition-colors">
          {post.title}
        </h2>

        <BlogPostMeta
          author={post.author}
          date={post.date}
          readTime={post.readTime}
          category={post.category}
        />

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {paragraph.startsWith('- ') ? (
                <ul className="list-disc pl-6">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
                  ))}
                </ul>
              ) : paragraph.match(/^\d\./) ? (
                <ol className="list-decimal pl-6">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-700">{item.replace(/^\d\.\s/, '')}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-royal-primary hover:text-royal-secondary transition-colors"
          whileHover={{ x: 5 }}
        >
          Read Full Article
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}