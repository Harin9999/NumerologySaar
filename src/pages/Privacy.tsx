import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function Privacy() {
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
          <h1 className="text-4xl font-bold royal-gold mb-6">Privacy Policy</h1>
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
              <Shield className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">Information We Collect</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              NumerologySaar.com is a free service that provides numerology information and calculations. We collect:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Name and birth date for numerological calculations (optional)</li>
              <li>Contact information when you use our contact form</li>
              <li>Usage data to improve our service</li>
            </ul>
            <p className="mt-4 text-gray-700">
              We do not collect any payment information as our service is completely free.
            </p>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">External Links & Affiliate Products</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our website contains links to external products through ClickBank. Please note:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>These are third-party products not owned or operated by us</li>
              <li>Your purchase decisions and transactions occur on external websites</li>
              <li>We may receive compensation for purchases made through affiliate links</li>
              <li>We are not responsible for external products or services</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">Information Usage</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Provide free numerological calculations</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and services</li>
              <li>Send requested information about numerology</li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-royal-primary" />
              <h2 className="text-2xl font-bold text-royal-primary">Your Rights</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of communications</li>
              <li>File a complaint with relevant authorities</li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}