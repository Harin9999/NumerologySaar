import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calculator = document.getElementById('calculator');
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-royal py-16 px-4 mb-12"
      role="banner"
      aria-label="Hero section"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-4 right-4"
      >
        <Sparkles className="w-8 h-8 text-royal-accent" aria-hidden="true" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 royal-gold"
        >
          Ancient Chaldean Numerology Calculator
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-royal-scroll mb-8"
        >
          Unlock Your Life's Purpose with Our Free Professional Chaldean Reading
        </motion.p>
        
        <motion.a
          href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="royal-button inline-block text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Get your free numerology reading"
        >
          Get Your Free Reading Now
        </motion.a>
      </div>
    </motion.section>
  );
}