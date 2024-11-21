import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, History, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Numerologist",
    description: "With over 15 years of experience in Chaldean numerology, Sarah has helped thousands discover their life purpose."
  },
  {
    name: "David Chen",
    role: "Spiritual Guide",
    description: "An expert in combining ancient wisdom with modern understanding to provide comprehensive numerological insights."
  }
];

export default function About() {
  return (
    <div className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold royal-gold mb-6">About NumerologySaar</h1>
          <p className="text-xl text-royal-scroll">
            Dedicated to unlocking the ancient wisdom of Chaldean numerology for modern seekers.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 border border-royal-accent/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-royal-primary" />
            <h2 className="text-2xl font-bold royal-gold">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At NumerologySaar, we're committed to making the ancient wisdom of Chaldean numerology 
            accessible to everyone. Our mission is to help individuals discover their true potential 
            and life purpose through the power of numbers.
          </p>
        </motion.div>

        {/* History Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 border border-royal-accent/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <History className="w-6 h-6 text-royal-primary" />
            <h2 className="text-2xl font-bold royal-gold">Our Journey</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, NumerologySaar has grown from a small passion project into a trusted 
            resource for numerological insights. We combine traditional Chaldean methods with modern 
            technology to provide accurate and meaningful readings.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-royal-primary" />
            <h2 className="text-2xl font-bold royal-gold">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 border border-royal-accent/20"
              >
                <h3 className="text-xl font-semibold text-royal-primary mb-2">{member.name}</h3>
                <p className="text-royal-secondary mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 border border-royal-accent/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-royal-primary" />
            <h2 className="text-2xl font-bold royal-gold">Our Expertise</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our team holds certifications in various forms of numerology and spiritual practices. 
            We continuously update our knowledge and methods to provide the most accurate and 
            insightful readings possible.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}