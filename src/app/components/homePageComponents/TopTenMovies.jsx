'use client'

import { useState, useEffect } from 'react'
import { fetchTopTenMovies } from '../data-fetching/movieData';
import MovieDetails from '../MovieDetails';
import Image from 'next/image'
import Star from '/public/images/star.webp';

const TopTenMovies = ({ id }) => {
  const [topMovies, setTopMovies] = useState([])
  const [selectedTopMovie, setSelectedTopMovie] = useState(null);

  // const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // useEffect(() => {
  //   const fetchTopMovies = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`);
  //     const data = await res.json();
  //     setTopMovies(data.results.slice(0, 10));
  //   };
  //   fetchTopMovies();
  // }, []);

  const openModal = (movie) => {
    setSelectedTopMovie(movie);
  };

  const closeModal = () => {
    setSelectedTopMovie(null);
  };

  useEffect(() => {
    const getTopMovies = async () => {
      const topTenMovies = await fetchTopTenMovies(id);
      setTopMovies(topTenMovies);
    };
    getTopMovies();
  }, [id])



  return (
    <div className='bg-black container px-6 pt-6 pb-4 mb-12 border-b-2 border-slate-500 shadow-xl shadow-neutral-700 rounded-t-lg'>
      <h2 className='text-3xl w-full text-slate-300 pb-6'>Top 10 Movies This Week</h2>
      <div className='flex gap-6 overflow-x-scroll'>
        {topMovies.map((movie) => (
          <div key={movie.id} className='flex mb-4'>
            <div className='flex flex-col text-white'>
              <p className='w-52 h-72' onClick={(() => openModal(movie))}>
                {movie ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={200}
                    height={300}
                    alt={movie.title}
                    className='w-full h-full object-cover border rounded cursor-pointer hover:opacity-70 transition duration-300'
                  />

                ) : (
                  <p>No image available for this movie</p>
                )}
              </p>
              <div className='flex items-center mt-2 text-sm text-slate-300 gap-4'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split('-')[0]}</p>
              </div>
              <div className='flex items-center'>
                <Image src={Star} alt='star' width={20} height={20} className='w-5 h-5 mr-1' />
                <p className='mr-2'>{movie.vote_average.toFixed(1)}</p>
                <p>&#40; {movie.vote_count}&nbsp;votes &#41;</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTopMovie && <MovieDetails movie={selectedTopMovie} closeModal={closeModal} />}
    </div>
  )
}

export default TopTenMovies