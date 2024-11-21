import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bookmark, Share2 } from 'lucide-react';
import ShareButtons from '../ShareButtons';

interface BlogActionsProps {
  title: string;
  excerpt: string;
}

export default function BlogActions({ title, excerpt }: BlogActionsProps) {
  const [showShare, setShowShare] = React.useState(false);

  const handleLike = () => {
    console.log('Liked:', title);
  };

  const handleSave = () => {
    console.log('Saved:', title);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pt-6 border-t border-royal-accent/20">
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLike}
            className="flex items-center gap-2 text-royal-primary hover:text-royal-secondary"
          >
            <Heart className="w-5 h-5" />
            <span>Like</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleSave}
            className="flex items-center gap-2 text-royal-primary hover:text-royal-secondary"
          >
            <Bookmark className="w-5 h-5" />
            <span>Save</span>
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowShare(!showShare)}
          className="flex items-center gap-2 text-royal-primary hover:text-royal-secondary"
        >
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </motion.button>
      </div>
      
      {showShare && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex justify-end"
        >
          <ShareButtons
            title={title}
            text={excerpt}
            hashtags={['numerology', 'spirituality', 'selfdiscovery']}
          />
        </motion.div>
      )}
    </div>
  );
}