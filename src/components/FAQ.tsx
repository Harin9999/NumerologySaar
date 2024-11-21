import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Chaldean Numerology?",
    answer: "Chaldean Numerology is an ancient system that reveals the hidden meanings in numbers and letters. Unlike other systems, it assigns numbers based on vibration rather than sequence, making it highly accurate for personal readings."
  },
  {
    question: "How is it different from other numerology systems?",
    answer: "Chaldean Numerology is considered more accurate as it's based on the vibrational essence of letters rather than their sequential order. It uses numbers 1-8, with 9 being sacred and used separately."
  },
  {
    question: "What will my numerology reading reveal?",
    answer: "Your reading will reveal your life path, destiny number, soul urge, and personality number. These insights can guide career choices, relationships, and personal growth opportunities."
  },
  {
    question: "How accurate are the readings?",
    answer: "Chaldean Numerology is known for its accuracy, with many clients reporting 90%+ accuracy in their readings. The system has been refined over thousands of years."
  },
  {
    question: "Can numerology help with relationships?",
    answer: "Yes! Numerology can reveal compatibility between partners, potential challenges, and areas for growth in relationships. It's particularly helpful for understanding communication patterns."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 bg-royal-scroll/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold royal-gold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-royal-scroll">Everything you need to know about numerology readings</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-royal-scroll/80 rounded-lg border border-royal-accent/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-royal-primary">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-royal-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-royal-primary" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}