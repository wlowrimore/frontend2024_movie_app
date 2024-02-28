'use client'

import { useState, useEffect } from "react"
import { useSearch } from "@/app/context/SearchContext"
import { usePathname, redirect } from "next/navigation"
const SearchBar = () => {
  const { searchQuery, updateSearchQuery, resetSearchQuery } = useSearch();
  const [query, setQuery] = useState('')
  const pathname = usePathname();




  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateSearchQuery(query)
  }

  useEffect(() => {
    if (searchQuery) {
      redirect(`/search-results/${searchQuery}`)
    }
  }, [searchQuery])

  return (
    <div className='px-12'>
      <form onSubmit={handleSubmit} className='flex gap-3'>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search by title, actor, or genre..."
          className='w-full bg-slate-200 text-black px-2 py-1 rounded placeholder:italic'
        />
        <button className='focus:outline-none py-1 px-3 bg-slate-300/50 text-slate-100 border border-slate-200 rounded hover:bg-slate-300 hover:text-slate-800 transition duration-300'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar