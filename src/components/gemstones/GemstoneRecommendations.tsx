import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';
import GemstoneDetails from './GemstoneDetails';
import GemstoneTestimonials from './GemstoneTestimonials';
import GemstoneBlogLinks from './GemstoneBlogLinks';

interface GemstoneRecommendationsProps {
  numerologyNumber: number;
}

export default function GemstoneRecommendations({ numerologyNumber }: GemstoneRecommendationsProps) {
  return (
    <section className="mt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Gem className="w-8 h-8 text-royal-primary" />
          <h2 className="text-3xl font-bold royal-gold">
            Your Lucky Gemstones
          </h2>
        </div>
        <div className="bg-royal-primary/10 backdrop-blur-sm border border-royal-accent/20 rounded-lg p-6 inline-block">
          <p className="text-xl font-medium text-royal-primary">
            Discover the perfect gemstones to enhance your Life Path {numerologyNumber} energies
          </p>
        </div>
      </motion.div>

      <GemstoneDetails numerologyNumber={numerologyNumber} />
      <GemstoneTestimonials numerologyNumber={numerologyNumber} />
      <GemstoneBlogLinks />
    </section>
  );
}