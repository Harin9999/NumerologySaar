import React from 'react';
import { motion } from 'framer-motion';
import { NumerologyMeaning } from '../types/numerology';
import { Info } from 'lucide-react';

interface NumberMeaningProps {
  number: number;
  meaning: NumerologyMeaning;
  delay?: number;
}

export default function NumberMeaning({ number, meaning, delay = 0 }: NumberMeaningProps) {
  const traitVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + 0.1 * i,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.02,
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="space-y-4"
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-xl font-medium text-royal-primary">
          {number}: {meaning.title}
        </h3>
        <Info
          className="w-4 h-4 text-royal-primary cursor-help transition-colors hover:text-royal-secondary"
          data-tooltip-id="number-tooltip"
          data-tooltip-content={meaning.brief}
        />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="text-gray-700 leading-relaxed"
      >
        {meaning.preview}
      </motion.p>
      
      <ul className="space-y-2">
        {meaning.traits.map((trait, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={traitVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex items-center gap-2 text-gray-600 cursor-default"
          >
            <motion.span 
              className="w-1.5 h-1.5 bg-royal-primary rounded-full"
              whileHover={{ scale: 1.5 }}
            />
            {trait}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}