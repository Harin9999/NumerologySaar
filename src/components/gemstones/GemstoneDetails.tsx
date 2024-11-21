import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { gemstoneData } from '../../data/gemstones';

interface GemstoneDetailsProps {
  numerologyNumber: number;
}

export default function GemstoneDetails({ numerologyNumber }: GemstoneDetailsProps) {
  const gemstone = gemstoneData[numerologyNumber];

  if (!gemstone) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 mb-12 border border-royal-accent/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
          <img
            src={gemstone.imageUrl}
            alt={`${gemstone.name} - Lucky gemstone for Life Path ${numerologyNumber}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-lg font-semibold">{gemstone.name}</h4>
            <p className="text-sm opacity-90">Associated with Life Path {numerologyNumber}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-royal-primary mb-2">
              {gemstone.name}
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Associated Planet:</span> {gemstone.planet}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-royal-primary mb-3">Benefits:</h4>
            <ul className="space-y-2">
              {gemstone.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Star className="w-4 h-4 text-royal-accent flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.a
            href={gemstone.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="royal-button inline-flex items-center gap-2 text-white font-bold py-3 px-6 rounded-lg"
          >
            Purchase Your {gemstone.name}
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}