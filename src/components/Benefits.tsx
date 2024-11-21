import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Lightbulb, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: "Personality Insights",
    text: "Gain deep insights into your personality and discover how others truly perceive you."
  },
  {
    icon: Users,
    title: "Life Path Discovery",
    text: "Understand your destined life path and learn to navigate upcoming challenges with confidence."
  },
  {
    icon: Lightbulb,
    title: "Hidden Talents",
    text: "Uncover hidden talents and innate abilities that you may not be fully utilizing."
  },
  {
    icon: Heart,
    title: "Relationship Harmony",
    text: "Improve relationships by understanding numerological compatibility patterns."
  }
];

export default function Benefits() {
  return (
    <section 
      aria-label="Benefits of Chaldean Numerology"
      className="py-12 px-6 bg-royal-scroll/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-center royal-gold mb-12"
        >
          Benefits of Chaldean Numerology
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-6 bg-royal-scroll/80 rounded-lg shadow-md"
            >
              <benefit.icon 
                className="w-6 h-6 text-royal-primary flex-shrink-0 mt-1" 
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl font-semibold text-royal-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700">{benefit.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}