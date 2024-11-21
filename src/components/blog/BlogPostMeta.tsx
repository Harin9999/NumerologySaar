import React from 'react';
import { Calendar, Clock, Tag, User } from 'lucide-react';

interface BlogPostMetaProps {
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export default function BlogPostMeta({ author, date, readTime, category }: BlogPostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-royal-primary/80">
      <div className="flex items-center gap-1">
        <User className="w-4 h-4" />
        <span>{author}</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{readTime}</span>
      </div>
      <div className="flex items-center gap-1">
        <Tag className="w-4 h-4" />
        <span>{category}</span>
      </div>
    </div>
  );
}