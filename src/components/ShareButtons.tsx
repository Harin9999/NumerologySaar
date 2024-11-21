import React from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface ShareButtonsProps {
  title: string;
  text: string;
  hashtags?: string[];
}

export default function ShareButtons({ title, text, hashtags = [] }: ShareButtonsProps) {
  const shareUrl = window.location.href;
  const hashtagString = hashtags.map(tag => `#${tag}`).join(' ');
  
  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n\n${text}\n\n${hashtagString}`)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(`${title}\n\n${text}`)}`,
      color: 'bg-[#4267B2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`,
      color: 'bg-[#0A66C2]'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex gap-2 items-center bg-royal-scroll/50 p-2 rounded-lg">
      {shareButtons.map((button) => (
        <motion.a
          key={button.name}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${button.color} p-2 rounded-full text-white hover:opacity-90 transition-opacity`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={`Share on ${button.name}`}
        >
          <button.icon className="w-5 h-5" />
        </motion.a>
      ))}
      <motion.button
        onClick={copyToClipboard}
        className="bg-royal-primary p-2 rounded-full text-white hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Copy link"
      >
        <Link2 className="w-5 h-5" />
      </motion.button>
    </div>
  );
}