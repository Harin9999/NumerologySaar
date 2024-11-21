import React from 'react';
import { ScrollText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { numerologyMeanings } from '../types/numerology';
import NumberMeaning from './NumberMeaning';
import ShareButtons from './ShareButtons';
import PDFExport from './PDFExport';

interface NumerologyResultProps {
  name: string;
  destinyNumber: number | null;
  lifePathNumber: number | null;
}

export default function NumerologyResult({ name, destinyNumber, lifePathNumber }: NumerologyResultProps) {
  if (destinyNumber === null || lifePathNumber === null) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-purple-200"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <ScrollText className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-semibold text-purple-900">Your Numerology Reading</h2>
        </motion.div>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-medium text-purple-700">Destiny Number</h3>
            <NumberMeaning
              number={destinyNumber}
              meaning={numerologyMeanings[destinyNumber]}
              delay={0.5}
            />
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-medium text-purple-700">Life Path Number</h3>
            <NumberMeaning
              number={lifePathNumber}
              meaning={numerologyMeanings[lifePathNumber]}
              delay={0.8}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <PDFExport
              name={name}
              destinyNumber={destinyNumber}
              lifePathNumber={lifePathNumber}
              meanings={numerologyMeanings}
            />
            <ShareButtons
              destinyNumber={destinyNumber}
              lifePathNumber={lifePathNumber}
            />
          </motion.div>
        </div>

        <Tooltip id="number-tooltip" className="z-50" />
        <Tooltip id="share-tooltip" className="z-50" />
      </motion.div>
    </AnimatePresence>
  );
}