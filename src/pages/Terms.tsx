import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertCircle, FileText, CreditCard, Users } from 'lucide-react';

export default function Terms() {
  return (
    <div className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold royal-gold mb-6">Terms of Service</h1>
          <p className="text-xl text-royal-scroll">
            Last updated: March 2024
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">Free Service Agreement</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By using NumerologySaar.com, you agree that:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Our numerology calculator and information are provided free of charge</li>
              <li>No payment is required to access our core services</li>
              <li>You will use the services for personal, non-commercial purposes</li>
              <li>You will provide accurate information for calculations</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">User Content</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Regarding user-provided content:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Only plain text input is accepted (names, dates, messages)</li>
              <li>No file uploads or rich media content is permitted</li>
              <li>Content must not contain harmful or malicious code</li>
              <li>We reserve the right to reject inappropriate content</li>
              <li>You retain ownership of your submitted content</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">External Products & Affiliate Links</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Regarding external product links:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>We provide affiliate links to ClickBank products</li>
              <li>All purchases are made on external websites</li>
              <li>We are not responsible for external products or services</li>
              <li>Your purchase decisions are your sole responsibility</li>
              <li>External products may have their own terms and conditions</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">Disclaimers</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Please note that:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Numerology readings are for entertainment and self-reflection purposes</li>
              <li>Results should not be used as a substitute for professional advice</li>
              <li>We do not guarantee specific outcomes or results</li>
              <li>Individual experiences may vary</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">No Payment Collection</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We want to be clear that:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>NumerologySaar.com does not collect any payments</li>
              <li>Our numerology calculator and information are completely free</li>
              <li>Any purchases are made on external websites through affiliate links</li>
              <li>We do not store or process any payment information</li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}