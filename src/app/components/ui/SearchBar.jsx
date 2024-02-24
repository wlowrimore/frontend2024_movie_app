'use client'

import { useState, useEffect } from "react"
import { useSearch } from "@/app/context/SearchContext"

const SearchBar = () => {
  const { searchQuery, updateSearchQuery, resetSearchQuery } = useSearch();
  const [query, setQuery] = useState('')

  useEffect(() => {
    console.log("This is your search query:", searchQuery)
  }, [searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query:", query)
    updateSearchQuery(query)
  }

  return (
    <div className='px-12'>
      <form onSubmit={handleSubmit} className='flex gap-3'>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search by title, actor, or genre..."
          className='w-full bg-slate-200 text-black px-2 py-1 rounded placeholder:italic'
        />
        <button className='focus:outline-none py-1 px-3 bg-slate-300/50 text-slate-100 border border-slate-200 rounded hover:bg-slate-300 hover:text-slate-800 transition duration-300'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar