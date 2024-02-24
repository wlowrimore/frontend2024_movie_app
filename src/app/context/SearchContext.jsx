'use client'

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = (query) => {
    console.log("Updating search query:", query)
    setSearchQuery(query);
  };

  const resetSearchQuery = () => {
    setSearchQuery('');
  }

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery, resetSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};