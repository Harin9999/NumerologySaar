import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import LoadingSpinner from '../LoadingSpinner';

interface CalculatorFormProps {
  name: string;
  birthDate: string;
  setName: (name: string) => void;
  setBirthDate: (date: string) => void;
  handleCalculate: () => void;
  isCalculating: boolean;
}

export default function CalculatorForm({
  name,
  birthDate,
  setName,
  setBirthDate,
  handleCalculate,
  isCalculating
}: CalculatorFormProps) {
  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        handleCalculate();
      }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-royal-primary mb-1">
            Full Name
            <Info
              className="inline-block w-4 h-4 ml-2 text-royal-primary/70 cursor-help"
              data-tooltip-id="name-tooltip"
              data-tooltip-content="Enter your full name as it appears on your birth certificate"
            />
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 border-royal-primary/20 focus:border-royal-primary focus:ring focus:ring-royal-primary/20 transition-colors"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="birthDate" className="block text-sm font-medium text-royal-primary mb-1">
            Birth Date
            <Info
              className="inline-block w-4 h-4 ml-2 text-royal-primary/70 cursor-help"
              data-tooltip-id="date-tooltip"
              data-tooltip-content="Enter your birth date to calculate your Life Path Number"
            />
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 border-royal-primary/20 focus:border-royal-primary focus:ring focus:ring-royal-primary/20 transition-colors"
            required
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isCalculating}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full royal-button text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isCalculating ? (
          <>
            <LoadingSpinner />
            Calculating...
          </>
        ) : (
          'Calculate Your Numbers'
        )}
      </motion.button>
    </motion.form>
  );
}