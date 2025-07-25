// app/context/SearchContext.js
'use client';

import { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Create a provider component
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

// Create a custom hook to use the search context
export function useSearch() {
  return useContext(SearchContext);
}