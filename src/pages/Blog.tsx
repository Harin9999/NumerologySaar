import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import blogPosts from '../data/blogPosts';
import BlogPost from '../components/blog/BlogPost';

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // If an ID is provided, show the specific blog post
  if (id) {
    const post = blogPosts.find(post => post.id === id);
    if (!post) return <div>Blog post not found</div>;
    
    return (
      <div className="py-12 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 flex items-center gap-2 royal-button text-white font-bold py-2 px-4 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Results
          </motion.button>

          <BlogPost post={post} />
        </motion.div>
      </div>
    );
  }

  // Otherwise show the blog listing
  return (
    <div className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold royal-gold mb-6">Numerology Insights</h1>
          <p className="text-xl text-royal-scroll">
            Explore our collection of expert articles about numerology and spiritual growth.
          </p>
        </motion.div>

        {/* Featured Article */}
        <BlogPost post={{ ...blogPosts[0], isFeatured: true }} />

        {/* Recent Articles */}
        <div className="space-y-8 mt-12">
          <h2 className="text-2xl font-bold text-royal-primary mb-6">Recent Articles</h2>
          {blogPosts.slice(1).map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}