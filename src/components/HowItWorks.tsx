import React from 'react';
import { motion } from 'framer-motion';
import { Hash, ArrowRight } from 'lucide-react';

const numerologyTypes = [
  {
    title: "Life Path Number",
    description: "The most important number in numerology, representing your life's purpose."
  },
  {
    title: "Destiny Number",
    description: "Reveals what you're meant to accomplish in this lifetime."
  },
  {
    title: "Soul Urge Number",
    description: "Reflects your inner desires and motivations."
  },
  {
    title: "Personality Number",
    description: "Shows how others perceive you."
  }
];

export default function HowItWorks() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="py-12 px-6 bg-royal-scroll/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Hash className="w-6 h-6 text-royal-primary" />
          <h2 className="text-3xl font-bold royal-gold">
            How Does Our Calculator Work?
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg leading-relaxed text-gray-700 mb-8 text-center"
        >
          Our Chaldean Numerology Calculator uses both your full name and birth date to calculate 
          key numbers that reveal important aspects of your life:
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {numerologyTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-royal-scroll/80 rounded-lg shadow-md border border-royal-primary/20"
            >
              <h3 className="text-xl font-semibold text-royal-primary mb-2">
                {type.title}
              </h3>
              <p className="text-gray-700">{type.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <motion.a
            href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 royal-button text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Try the Calculator Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}