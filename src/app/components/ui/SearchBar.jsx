import React from 'react'

const SearchBar = () => {
  return (
    <div className='px-12'>
      <form className='flex gap-3'>
        <input
          type="text"
          placeholder="search by title, actor, or genre..."
          className='w-full bg-slate-200 text-black px-2 py-1 rounded placeholder:italic'
        />
        <button type='submit' className='focus:outline-none py-1 px-3 bg-slate-300/50 text-slate-100 border border-slate-200 rounded hover:bg-slate-300 hover:text-slate-800 transition duration-300'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar