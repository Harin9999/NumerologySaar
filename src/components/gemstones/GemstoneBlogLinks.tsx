import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogPosts from '../../data/blogPosts';

export default function GemstoneBlogLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 border border-royal-accent/20"
    >
      <h3 className="text-2xl font-bold text-royal-primary mb-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6" />
        Learn More About Numerology and Gemstones
      </h3>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <Link
              to={`/blog/${post.id}`}
              className="flex items-center gap-2 text-gray-700 hover:text-royal-primary transition-colors"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div>
                <h4 className="font-medium">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}