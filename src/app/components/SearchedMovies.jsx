'use client'

import { useState, useEffect } from 'react';
import { fetchMovies } from './data-fetching/movieData';
import Image from "next/image";
import Star from '/public/images/star.webp';
import MovieDetails from './MovieDetails';

import { CaretRight, CaretLeft } from '@phosphor-icons/react';

const SearchedMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(query, currentPage);
      setMovies(fetchedMovies.results);
      setTotalPages(fetchedMovies.total_pages)
    };
    getMovies();
  }, [query, currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const formattedQuery = capitalizeFirstLetter(query);

  if (!movies || movies.length === 0) {
    return <p>No results found for {capitalizeFirstLetter(formattedQuery.replace(/%20/g, " "))}</p>;
  }

  return (
    <div className='w-full my-24 container'>
      <h1 className='text-3xl mb-[-3rem] text-white'>Search Results For {capitalizeFirstLetter(formattedQuery.replace(/%20/g, " "))}</h1>
      <div className='my-12 grid grid-cols-5'>
        {movies.map((movie) => ( // Iterate over movies, not selectedMovie
          <div key={movie.id} className='flex flex-col w-64 mb-32' onClick={() => openModal(movie)}>

            <div onClick={() => openModal(movie)} className='w-64 h-80 mt-12 cursor-pointer hover:opacity-60 transition duration-300'>
              {!movie.poster_path ? (
                <p className='bg-black/50 text-4xl text-red-400 text-center pt-28 w-64 h-80 rounded shadow-md border border-zinc-500'>No Image Available</p>

              ) : (

                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={500}
                  height={600}
                  alt={movie.title}
                  className='rounded shadow-md border border-zinc-500 w-full h-full object-cover'
                />

              )}
              <div>
                <p className='text-xl text-amber-600 pt-2'>{movie.title}</p>
                {!movie.release_date ? (
                  <p className='text-zinc-50'>No Release Date Available</p>
                ) : (
                  <p className='text-sm text-zinc-50'>Released in {movie.release_date.split('-')[0]}</p>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                {!movie.vote_average ? (
                  <p className='text-zinc-100 text-sm'>No Votes Received</p>
                ) : (
                  <>
                    <Image
                      src={Star}
                      alt='Star Icon'
                      width={20}
                      height={20}
                      className='w-4 h-4'
                    />
                    <div className='flex text-sm gap-2'>
                      <p className='text-zinc-100'>{movie.vote_average.toFixed(1)}</p>
                      <p className='text-zinc-100'>&#40;&nbsp;{movie.vote_count === 1 ? `${movie.vote_count.toLocaleString()} vote` : `${movie.vote_count.toLocaleString()} votes`}&nbsp;&#41;</p>
                    </div>
                  </>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>
      {selectedMovie && <MovieDetails movie={selectedMovie} closeModal={closeModal} />}
      <div className='flex justify-center items-center p-2 gap-3 bg-transparent text-white'>
        <button className='cursor-pointer text-slate-400 hover:text-slate-200 transition duration-300' onClick={goToPreviousPage} disabled={currentPage <= 1}><CaretLeft size={36} weight="fill" /></button>
        <span className='text-lg text-slate-400'>{currentPage} of {totalPages}</span>
        <button className='cursor-pointer text-slate-400 hover:text-slate-200 transition duration-300' onClick={goToNextPage} disabled={currentPage >= totalPages}><CaretRight size={36} weight="fill" /></button>
      </div>
    </div>
  );
};

export default SearchedMovies;