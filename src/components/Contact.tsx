import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold royal-gold mb-6">Contact Us</h1>
          <p className="text-xl text-royal-scroll">
            Have questions about your numerology reading? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 space-y-6 border border-royal-accent/20">
              <h2 className="text-2xl font-bold text-royal-primary mb-4">Get in Touch</h2>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-royal-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-royal-primary">Email</h3>
                  <a href="mailto:connect@numerologysaar.com" className="text-gray-700 hover:text-royal-primary">
                    connect@numerologysaar.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-royal-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-royal-primary">Response Time</h3>
                  <p className="text-gray-700">We typically respond within 24-48 hours</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-royal-primary/10 rounded-lg">
                <p className="text-gray-700">
                  For the most accurate and timely responses, please include your:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• Full name as used in your reading</li>
                  <li>• Date of calculation</li>
                  <li>• Specific questions about your reading</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-royal-scroll/80 rounded-lg shadow-lg p-6 space-y-6 border border-royal-accent/20">
              <h2 className="text-2xl font-bold text-royal-primary mb-4">Send Message</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-royal-primary mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-royal-primary/20 focus:ring-2 focus:ring-royal-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-primary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-royal-primary/20 focus:ring-2 focus:ring-royal-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-royal-primary mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-royal-primary/20 focus:ring-2 focus:ring-royal-primary/50 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-royal-primary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-royal-primary/20 focus:ring-2 focus:ring-royal-primary/50 focus:border-transparent"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 royal-button text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}