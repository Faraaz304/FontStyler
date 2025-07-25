// app/components/header.js
'use client'; 

import { useSearch } from '../context/SearchContext'; 
import { Search, Sparkles } from 'lucide-react'; // Using icons for a modern feel

export default function Header() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    // A sticky header with a backdrop blur for a modern effect when scrolling
    <header className="w-full border-b border-gray-200/80 bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo with a subtle gradient text and icon */}
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            MyFonts
          </span>
        </div>

        {/* Center: Improved Search Bar with an icon inside */}
        <div className="flex-1 mx-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search thousands of fonts..."
            className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Right: Navigation with a modern underline hover effect */}
        <nav className="flex items-center space-x-8 text-gray-800 font-medium">
          <a href="#" className="relative group">
            <span>Fonts</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="#" className="relative group">
            <span>Icons</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="#" className="relative group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </nav>
      </div>
    </header>
  );
}