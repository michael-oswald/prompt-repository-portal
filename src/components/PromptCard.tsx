import { Link } from 'react-router-dom';
import { Star, TrendingUp, Calendar } from 'lucide-react';
import OpenMoji from './OpenMoji';
import type { Prompt } from '../types';

interface PromptCardProps {
  prompt: Prompt;
  showDate?: boolean;
}

export default function PromptCard({ prompt, showDate = false }: PromptCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Link
      to={`/prompt/${prompt.id}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition line-clamp-2">
            {prompt.title}
          </h3>
        </div>
        <OpenMoji emoji={prompt.author.avatar} size={32} className="ml-2" />
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {prompt.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
          >
            {tag}
          </span>
        ))}
        {prompt.tags.length > 3 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            +{prompt.tags.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium text-gray-700">{prompt.stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span>{prompt.usageCount.toLocaleString()}</span>
          </div>
        </div>
        {showDate && (
          <div className="flex items-center space-x-1 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(prompt.createdAt)}</span>
          </div>
        )}
      </div>

      {/* Author */}
      <div className="mt-3 text-xs text-gray-500">
        by <span className="font-medium text-gray-700">{prompt.author.name}</span>
      </div>
    </Link>
  );
}
