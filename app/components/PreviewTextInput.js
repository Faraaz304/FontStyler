// app/components/PreviewTextInput.js
'use client'
import { useState } from 'react';
import { Type } from 'lucide-react'; // Using an icon for better visual context

export default function PreviewTextInput({ setPreviewText }) {
  const [text, setText] = useState("The quick brown fox");

  const handleChange = (e) => {
    // Prevent the input from being empty to always show a preview
    const newText = e.target.value === '' ? ' ' : e.target.value;
    setText(newText);
    setPreviewText(newText);
  };

  return (
    // Increased bottom margin for better spacing
    <div className="mb-12">
      <label htmlFor="preview-text-input" className="block text-sm font-medium text-gray-600 mb-2">
        Type something to preview
      </label>
      
      {/* Relative container to position the icon inside the input */}
      <div className="relative">
        
        {/* Icon placed on the left for a modern look */}
        <Type className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />

        <input
          id="preview-text-input"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Preview text..."
          // Enhanced styling for the input field
          className="w-full bg-white border border-gray-300 rounded-lg pl-14 pr-4 py-4 text-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
      </div>
    </div>
  );
}