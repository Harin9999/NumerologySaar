import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import CalculatorForm from './calculator/CalculatorForm';
import CalculatorResults from './calculator/CalculatorResults';
import CalculatorCTA from './calculator/CalculatorCTA';
import toast from 'react-hot-toast';
import { calculateDestinyNumber, calculateLifePathNumber } from '../utils/numerology';

export default function Calculator() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    destinyNumber: number | null;
    lifePathNumber: number | null;
  }>({
    destinyNumber: null,
    lifePathNumber: null
  });

  useEffect(() => {
    // Handle hash navigation on load
    if (window.location.hash === '#calculator') {
      const calculator = document.getElementById('calculator');
      if (calculator) {
        calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const handleCalculate = async () => {
    if (!name || !birthDate) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const destiny = calculateDestinyNumber(name);
      const lifePath = calculateLifePathNumber(birthDate);
      
      setResult({
        destinyNumber: destiny,
        lifePathNumber: lifePath
      });
      
      toast.success('Your numbers have been calculated!');
    } catch (error) {
      toast.error('Error calculating your numbers. Please try again.');
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <section 
      id="calculator" 
      className="py-12 px-4 relative scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="scroll-bg rounded-xl shadow-xl p-8 relative overflow-hidden"
        >
          {/* Calculator Header */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            <CalcIcon className="w-8 h-8 text-royal-primary" />
            <h2 className="text-3xl font-bold royal-gold">
              Free Professional Numerology Calculator
            </h2>
          </motion.div>

          {/* Calculator Form */}
          <CalculatorForm
            name={name}
            birthDate={birthDate}
            setName={setName}
            setBirthDate={setBirthDate}
            handleCalculate={handleCalculate}
            isCalculating={isCalculating}
          />

          {/* Results Section */}
          {result.destinyNumber !== null && result.lifePathNumber !== null && (
            <>
              <CalculatorResults
                name={name}
                destinyNumber={result.destinyNumber}
                lifePathNumber={result.lifePathNumber}
              />
              <CalculatorCTA />
            </>
          )}
        </motion.div>
      </div>
      
      <Tooltip id="name-tooltip" />
      <Tooltip id="date-tooltip" />
    </section>
  );
}