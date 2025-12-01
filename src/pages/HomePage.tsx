import { Link } from 'react-router-dom';
import { Star, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { prompts, categories } from '../data/mockData';
import PromptCard from '../components/PromptCard';
import OpenMoji from '../components/OpenMoji';

export default function HomePage() {
  // Get top prompts by stars
  const topPrompts = [...prompts]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6);

  // Get recent prompts
  const recentPrompts = [...prompts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-green-50 to-emerald-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Prompt Repository
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover, share, and collaborate on AI prompts. Built for teams that want to scale productivity with AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/browse"
            className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
          >
            <span>Browse Prompts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/create"
            className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition font-medium"
          >
            <span>Create a Prompt</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div>
            <div className="text-3xl font-bold text-green-600">{prompts.length}</div>
            <div className="text-sm text-gray-600 mt-1">Prompts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{categories.length}</div>
            <div className="text-sm text-gray-600 mt-1">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {prompts.reduce((acc, p) => acc + p.usageCount, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">Uses</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/browse?category=${category.id}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-md transition group"
            >
              <div className="mb-3">
                <OpenMoji emoji={category.icon} size={48} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Prompts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Most Popular</h2>
          </div>
          <Link
            to="/browse?sort=stars"
            className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      {/* Recent Prompts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
          </div>
          <Link
            to="/browse?sort=recent"
            className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} showDate />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-12 rounded-2xl text-center text-white">
        <TrendingUp className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Ready to boost your team's productivity?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Join teams using Prompt Repository to centralize and share their best AI prompts.
          Open source and ready to deploy.
        </p>
        <Link
          to="/create"
          className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
        >
          <span>Share Your First Prompt</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
