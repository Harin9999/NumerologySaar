import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Gem, Heart, Lightbulb } from 'lucide-react';
import { coreNumbers } from '../data/gemstones';

export default function Introduction() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="py-12 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Introduction */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-royal-primary" />
            <h2 className="text-3xl font-bold royal-gold">
              What is Chaldean Numerology?
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed text-royal-scroll mb-8">
            Chaldean numerology, originating from ancient Babylon, assigns numbers based on the 
            vibrational essence of letters. This system provides profound insights into personality, 
            life path, and destiny through both name and birth date analysis.
          </p>
        </motion.div>

        {/* Core Numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-royal-primary" />
            <h3 className="text-2xl font-bold text-royal-primary bg-gradient-gold bg-clip-text text-transparent">
              Core Numbers & Their Gemstones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreNumbers.map((number) => (
              <motion.div
                key={number.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-royal-scroll/80 rounded-lg p-6 shadow-md border border-royal-accent/20"
              >
                <h4 className="text-xl font-bold text-royal-primary mb-2">
                  {number.number}: {number.title}
                </h4>
                <p className="text-gray-700 mb-4">{number.characteristics}</p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-royal-primary flex items-center gap-2">
                      <Gem className="w-4 h-4" />
                      Lucky Gemstone
                    </h5>
                    <p className="text-gray-700">{number.gemstone.name}</p>
                    <p className="text-sm text-gray-600">Planet: {number.gemstone.planet}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-royal-primary">Benefits:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {number.gemstone.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-royal-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-royal-primary flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Growth Focus
                    </h5>
                    <p className="text-sm text-gray-700">{number.growth}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <motion.a
            href="#calculator"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 royal-button text-white font-bold py-3 px-8 rounded-lg"
          >
            <Lightbulb className="w-5 h-5" />
            Discover Your Numbers Now
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}