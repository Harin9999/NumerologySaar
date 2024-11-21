import React from 'react';
import { motion } from 'framer-motion';
import { numerologyMeanings } from '../../types/numerology';
import NumberMeaning from '../NumberMeaning';
import PDFExport from '../PDFExport';
import ShareButtons from '../ShareButtons';
import GemstoneRecommendations from '../gemstones/GemstoneRecommendations';

interface CalculatorResultsProps {
  name: string;
  destinyNumber: number;
  lifePathNumber: number;
}

export default function CalculatorResults({ name, destinyNumber, lifePathNumber }: CalculatorResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-8 border-t border-royal-primary/20 pt-8"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-royal-primary mb-4">Your Destiny Number: {destinyNumber}</h2>
          <NumberMeaning
            number={destinyNumber}
            meaning={numerologyMeanings[destinyNumber]}
            delay={0.3}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-royal-primary mb-4">Your Life Path Number: {lifePathNumber}</h2>
          <NumberMeaning
            number={lifePathNumber}
            meaning={numerologyMeanings[lifePathNumber]}
            delay={0.5}
          />
        </motion.div>

        {/* Gemstone Recommendations */}
        <GemstoneRecommendations numerologyNumber={lifePathNumber} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <PDFExport
          name={name}
          destinyNumber={destinyNumber}
          lifePathNumber={lifePathNumber}
          meanings={numerologyMeanings}
        />
        <ShareButtons
          title="My Numerology Reading"
          text={`My Destiny Number is ${destinyNumber} and Life Path Number is ${lifePathNumber}. Get your free reading!`}
          hashtags={['numerology', 'spirituality', 'selfdiscovery']}
        />
      </motion.div>
    </motion.div>
  );
}