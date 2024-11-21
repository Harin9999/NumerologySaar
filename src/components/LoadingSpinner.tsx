import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      className="w-6 h-6 border-3 border-purple-200 border-t-purple-600 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}