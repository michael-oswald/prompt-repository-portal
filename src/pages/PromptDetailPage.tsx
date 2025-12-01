import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Star, Copy, Check, TrendingUp, Calendar, User } from 'lucide-react';
import OpenMoji from '../components/OpenMoji';
import { prompts } from '../data/mockData';

export default function PromptDetailPage() {
  const { id } = useParams();
  const prompt = prompts.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);
  const [starred, setStarred] = useState(false);

  if (!prompt) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Prompt not found</h2>
        <Link to="/" className="text-green-600 hover:text-green-700">
          Go back home
        </Link>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleStar = () => {
    setStarred(!starred);
    // In a real app, this would update the backend
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to prompts</span>
      </Link>

      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <OpenMoji emoji={prompt.author.avatar} size={48} />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{prompt.title}</h1>
                <p className="text-gray-600 mt-1">{prompt.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>by <span className="font-medium text-gray-900">{prompt.author.name}</span></span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(prompt.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span>{prompt.usageCount.toLocaleString()} uses</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {prompt.category}
          </span>
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
          <button
            onClick={handleStar}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition font-medium border-2 ${
              starred
                ? 'bg-yellow-50 border-yellow-400 text-yellow-700'
                : 'bg-white border-gray-300 text-gray-700 hover:border-yellow-400'
            }`}
          >
            <Star className={`w-5 h-5 ${starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            <span>{starred ? 'Starred' : 'Star'}</span>
            <span className="text-sm">({prompt.stars + (starred ? 1 : 0)})</span>
          </button>
        </div>
      </div>

      {/* Prompt Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Prompt Template</h2>
          <button
            onClick={handleCopy}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
            {prompt.content}
          </pre>
        </div>
      </div>

      {/* How to use */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">How to use this prompt</h3>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Click "Copy Prompt" to copy the template to your clipboard</li>
          <li>Paste it into your favorite AI assistant (ChatGPT, Claude, etc.)</li>
          <li>Replace any placeholder text with your specific content</li>
          <li>Get your AI-powered result!</li>
        </ol>
      </div>

      {/* Related prompts */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Prompts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prompts
            .filter((p) => p.id !== prompt.id && p.category === prompt.category)
            .slice(0, 2)
            .map((relatedPrompt) => (
              <Link
                key={relatedPrompt.id}
                to={`/prompt/${relatedPrompt.id}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-green-500 hover:shadow-md transition"
              >
                <div className="flex items-start space-x-3">
                  <OpenMoji emoji={relatedPrompt.author.avatar} size={32} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 hover:text-green-600 transition line-clamp-1">
                      {relatedPrompt.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {relatedPrompt.description}
                    </p>
                    <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span>{relatedPrompt.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{relatedPrompt.usageCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
