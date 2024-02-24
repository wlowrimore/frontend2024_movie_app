'use client'

import { useState, useEffect } from "react"
import { useSearch } from "@/app/context/SearchContext"
import SearchedMovieCard from "@/app/components/cards/SearchedMovieCard"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const fetchMovies = async (searchQuery) => {
  console.log("Searching for:", searchQuery);
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`);
    const data = await res.json();

    if (!res.ok) {
      console.error(`Error: ${data.status_message}`);
      return [];
    }

    return data.results;
  } catch (error) {
    console.error("Error fetching searched movies:", error);
    return [];
  }
}

const AllMoviesResults = () => {
  const { searchQuery, resetSearchQuery } = useSearch();;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("Search query:", searchQuery);
    if (searchQuery) {
      fetchMovies(searchQuery)
        .then(data => {
          console.log(`Here are the results for "${searchQuery}":`, data);
          setMovies(data)
        })
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchedMovieCard
        movies={movies}
        searchQuery={searchQuery}
        resetSearchQuery={resetSearchQuery}
      />
    </div>
  )
}


export default AllMoviesResults;
