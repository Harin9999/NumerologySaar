import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CalculatorCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-8 text-center space-y-6 border-t border-royal-primary/20 pt-8"
    >
      <h3 className="text-2xl font-bold text-royal-primary">
        Want a More Detailed Reading?
      </h3>
      
      <p className="text-gray-700">
        Discover the full potential of your numerological profile with our comprehensive reading service.
      </p>
      
      <motion.a
        href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 royal-button text-white font-bold py-3 px-8 rounded-lg"
      >
        Get Your Full Reading
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
}