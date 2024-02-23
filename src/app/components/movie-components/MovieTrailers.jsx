'use client'

import { useState, useEffect } from 'react'

const MovieTrailers = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    // 1. Fetch the top 5 movies and store them in an array
    const fetchTopMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`);
      const data = await res.json();
      setTopMovies(data.results.slice(0, 10));
    };

    fetchTopMovies();
  }, []);

  useEffect(() => {
    // 2. Use the movie ids to fetch the movie trailers
    const fetchTrailers = async () => {
      const trailersData = await Promise.all(
        topMovies.map(async (movie) => {
          const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US&api_key=${API_KEY}`);
          const trailerData = await trailerRes.json();
          return trailerData.results[0]?.key || null;
        })
      );

      setTrailers(trailersData);
    };

    if (topMovies.length > 0) {
      fetchTrailers();
    }
  }, [topMovies]);

  // 4. Display the movie trailers in a list
  return (
    <div className='bg-black container px-6 pt-6 pb-4 mb-16 border-b-2 border-slate-500 shadow-xl shadow-neutral-700 rounded-t-lg'>
      <h2 className='text-3xl text-slate-300 pb-6'>Most Watched Features & Clips This Week</h2>
      <ul className='flex gap-10 overflow-x-scroll'>
        {trailers.map((trailer, index) => (
          <li key={index} className='border border-slate-300 rounded mb-4 hover:opacity-60 cursor-pointer transition duration-300'>
            {trailer ? (
              <iframe
                title={`Movie Trailer ${index + 1}`}
                width="225"
                height="275"
                src={`https://www.youtube.com/embed/${trailer}`}
                allowFullScreen
                className='rounded'
              ></iframe>
            ) : (
              <p>No trailer available for this movie</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTrailers;