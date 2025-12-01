import { Link } from 'react-router-dom';
import { Search, Plus, BookOpen, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Prompt Repository</h1>
                <p className="text-xs text-gray-500">Share & Discover AI Prompts</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/browse"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition"
              >
                <Search className="w-4 h-4" />
                <span>Browse</span>
              </Link>
              <Link
                to="/create"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Create Prompt</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link
                to="/create"
                className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>Prompt Repository - An open source prompt repository inspired by Instacart's Ava</p>
            <p className="mt-2">
              <a
                href="https://github.com/yourusername/prompt-repository-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
