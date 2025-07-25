// app/page.js
'use client'
import { useState } from 'react';
import PreviewTextInput from './components/PreviewTextInput';
import { useSearch } from './context/SearchContext';
import { PlusCircle } from 'lucide-react'; // Icon for the cards

export default function Home() {
  const [previewText, setPreviewText] = useState("The quick brown fox");
  const { searchQuery } = useSearch();
  
  const allFonts = ["Arial", "Georgia", "Allura","Anton","Caveat","Kaushan Script","Noto Color Emoji","Noto Sans","Oswald","Pacifico","Playfair Display","Press Start","Winky Rough"];
  
  const filteredFonts = allFonts.filter(font => 
    font.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Add more vertical padding for better visual rhythm
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
      
      {/* Centered Hero Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Explore Thousands of Fonts
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Find the perfect font for your next project. Instantly preview and customize your text.
        </p>
      </div>

      {/* Spacing for the preview input */}
      <div className="mt-12">
        <PreviewTextInput setPreviewText={setPreviewText} />
      </div>

      {/* Redesigned Font Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFonts.map((font) => (
          // The new interactive font card
          <div 
            key={font} 
            className="group relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
          >
            {/* Add button that appears on hover */}
            <button className="absolute top-4 right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-500">
              <PlusCircle size={24} />
            </button>
            
            {/* Font Preview Area */}
            <p className="text-4xl text-slate-800 truncate" style={{ fontFamily: font }}>
              {previewText}
            </p>

            {/* Font Name Area */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-slate-600">{font}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}