import React from 'react';
import { motion } from 'framer-motion';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.split('\n\n').map((paragraph, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          {paragraph.startsWith('- ') ? (
            <ul className="list-disc pl-6">
              {paragraph.split('\n').map((item, i) => (
                <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
              ))}
            </ul>
          ) : paragraph.match(/^\d\./) ? (
            <ol className="list-decimal pl-6">
              {paragraph.split('\n').map((item, i) => (
                <li key={i} className="text-gray-700">{item.replace(/^\d\.\s/, '')}</li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}