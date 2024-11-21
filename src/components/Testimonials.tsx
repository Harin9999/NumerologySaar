import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "The numerology reading was incredibly accurate. It helped me understand my career path better!",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "I was skeptical at first, but the insights about my life purpose were spot-on.",
    rating: 5
  },
  {
    name: "Emma Watson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "The relationship compatibility reading helped save my marriage. Truly life-changing!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-royal-scroll/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold royal-gold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-royal-scroll">Real stories from people who discovered their true path</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-royal-scroll/80 rounded-lg p-6 shadow-lg border border-royal-accent/20"
            >
              <Quote className="w-10 h-10 text-royal-accent mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-royal-primary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-royal-accent fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}