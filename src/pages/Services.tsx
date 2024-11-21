import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Book, Users, Star } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: "Personal Numerology Reading",
    description: "A comprehensive analysis of your life path, destiny, and soul numbers.",
    features: [
      "Complete personality profile",
      "Life path analysis",
      "Career guidance",
      "Relationship compatibility",
      "PDF report included"
    ]
  },
  {
    icon: Book,
    title: "Relationship Compatibility Reading",
    description: "Understand your compatibility with partners, friends, or colleagues.",
    features: [
      "Detailed compatibility analysis",
      "Strength and challenge areas",
      "Communication guidance",
      "Future predictions",
      "Video consultation included"
    ]
  },
  {
    icon: Users,
    title: "Business Numerology Reading",
    description: "Optimize your business decisions using numerological insights.",
    features: [
      "Business name analysis",
      "Timing recommendations",
      "Partnership compatibility",
      "Growth opportunities",
      "Monthly follow-up included"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold royal-gold mb-6">Our Services</h1>
          <p className="text-xl text-royal-scroll">
            Discover our range of professional numerology services designed to help you 
            understand yourself and your path better.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-royal-scroll/80 rounded-lg shadow-lg overflow-hidden border border-royal-accent/20"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-royal-primary" />
                  <h2 className="text-2xl font-bold text-royal-primary">{service.title}</h2>
                </div>
                <p className="text-gray-700">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Star className="w-4 h-4 text-royal-accent" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="https://771773bdxjw8r-u48jlhzdpd0v.hop.clickbank.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center royal-button text-white font-bold py-3 px-6 rounded-lg mt-6 transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Affiliate Disclosure */}
        <div className="text-center">
          <p className="text-sm text-royal-scroll/80 italic">
            Some of the links on this website are affiliate links, meaning Numerologysaar.com may earn a commission if you purchase through these links at no extra cost to you. We only recommend products we trust and believe will add value to our readers.
          </p>
        </div>
      </motion.div>
    </div>
  );
}