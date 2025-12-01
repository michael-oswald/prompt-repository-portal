import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { prompts, categories } from '../data/mockData';
import PromptCard from '../components/PromptCard';

export default function BrowsePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'stars');

  // Filter and sort prompts
  const filteredPrompts = useMemo(() => {
    let filtered = [...prompts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          p.content.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort prompts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stars - a.stars;
        case 'usage':
          return b.usageCount - a.usageCount;
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      searchParams.set('q', query);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('stars');
    setSearchParams({});
  };

  const hasFilters = searchQuery || selectedCategory !== 'all' || sortBy !== 'stars';

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Prompts</h1>
        <p className="text-gray-600">Discover and search through our collection of AI prompts</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search prompts by title, description, tags..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="inline w-4 h-4 mr-1" />
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort by */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="stars">Most Popular (Stars)</option>
              <option value="usage">Most Used</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>
        </div>

        {/* Clear filters */}
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="mt-4 flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
          >
            <X className="w-4 h-4" />
            <span>Clear all filters</span>
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredPrompts.length}</span>{' '}
          {filteredPrompts.length === 1 ? 'prompt' : 'prompts'}
        </p>
      </div>

      {/* Results */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No prompts found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={clearFilters}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
