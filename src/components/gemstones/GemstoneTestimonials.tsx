import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface GemstoneTestimonialsProps {
  numerologyNumber: number;
}

const testimonialsByNumber: { [key: number]: Array<{ text: string; author: string }> } = {
  1: [
    {
      text: "The Ruby has completely transformed my confidence as a leader. I feel more decisive and empowered in my role as CEO.",
      author: "Sarah M., Business Leader"
    },
    {
      text: "Since wearing my Ruby, I've found the courage to start my own business. The stone's energy aligns perfectly with my Life Path 1 traits.",
      author: "Michael R., Entrepreneur"
    }
  ],
  2: [
    {
      text: "My Moonstone helps me stay balanced and intuitive in my counseling practice. It's perfect for a Life Path 2.",
      author: "Emma L., Therapist"
    },
    {
      text: "The Pearl has enhanced my natural diplomatic abilities. I'm more effective than ever in conflict resolution.",
      author: "David K., Mediator"
    }
  ],
  3: [
    {
      text: "Yellow Sapphire has amplified my creative energy. My art career has flourished since I started wearing it.",
      author: "Lisa P., Artist"
    },
    {
      text: "This gemstone helps me express myself more clearly. My public speaking abilities have improved tremendously.",
      author: "James C., Speaker"
    }
  ],
  4: [
    {
      text: "Hessonite has brought stability to both my career and personal life. I feel more grounded than ever.",
      author: "Robert M., Architect"
    },
    {
      text: "My focus and discipline have improved significantly with this stone. Perfect for my systematic nature.",
      author: "Patricia L., Project Manager"
    }
  ],
  5: [
    {
      text: "Emerald has enhanced my communication skills and brought new opportunities for growth.",
      author: "Alex T., Journalist"
    },
    {
      text: "This stone helps me adapt to change more easily. It's perfect for my adventurous spirit.",
      author: "Maria S., Travel Blogger"
    }
  ],
  6: [
    {
      text: "My Diamond has amplified my ability to create harmony in relationships. It's perfect for my counseling work.",
      author: "Jennifer R., Family Therapist"
    },
    {
      text: "This stone helps me maintain balance between work and family life. It's truly transformative.",
      author: "Thomas H., Life Coach"
    }
  ],
  7: [
    {
      text: "Cat's Eye has deepened my spiritual awareness and intuition. My research work has benefited greatly.",
      author: "Dr. Maya K., Researcher"
    },
    {
      text: "This stone provides clarity during meditation and helps me maintain focus on my spiritual path.",
      author: "William B., Spiritual Teacher"
    }
  ],
  8: [
    {
      text: "Blue Sapphire has brought remarkable success to my business ventures. It amplifies my natural leadership abilities.",
      author: "Richard D., CEO"
    },
    {
      text: "My financial intuition has sharpened since wearing this stone. Perfect for my path of material mastery.",
      author: "Amanda C., Financial Advisor"
    }
  ],
  9: [
    {
      text: "Red Coral has enhanced my humanitarian work. I feel more connected to my mission of helping others.",
      author: "Grace H., Non-profit Director"
    },
    {
      text: "This stone helps me maintain emotional balance while serving others. It's perfect for my Life Path 9 purpose.",
      author: "Daniel F., Social Worker"
    }
  ]
};

export default function GemstoneTestimonials({ numerologyNumber }: GemstoneTestimonialsProps) {
  const testimonials = testimonialsByNumber[numerologyNumber] || [];

  if (testimonials.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-royal-scroll/80 rounded-lg shadow-lg p-8 mb-12 border border-royal-accent/20"
    >
      <h3 className="text-2xl font-bold text-royal-primary mb-8 flex items-center gap-2">
        <Star className="w-6 h-6" />
        Success Stories from Life Path {numerologyNumber}
      </h3>

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
            className="flex gap-4"
          >
            <Quote className="w-8 h-8 text-royal-primary flex-shrink-0" />
            <div>
              <p className="text-gray-700 italic mb-2">{testimonial.text}</p>
              <p className="text-royal-primary font-semibold">{testimonial.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}