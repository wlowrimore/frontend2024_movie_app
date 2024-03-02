'use client'

import { useState, useEffect } from 'react';
import { fetchMovieCast } from './data-fetching/movieData';
import Image from "next/image";
import Star from '/public/images/star.webp';

const MovieDetails = ({ id, movie, closeModal }) => {

  const [cast, setCast] = useState([]);

  const handleClick = (e) => {
    e.stopPropagation();
  }

  // useEffect = () => {
  //   const getCast = async () => {
  //     const cast = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  //     const castData = await cast.json();
  //     console.log("CAST DATA", castData)
  //   }
  //   getCast();
  // }, []

  useEffect(() => {
    const getCast = async () => {
      const cast = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
      const castData = await cast.json();
      const mainCast = castData.cast.slice(0, 4);
      setCast(mainCast);
    }
    getCast();

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])


  console.log(cast)
  return (
    <div className="fixed inset-0 top-10 bg-black/40 backdrop-blur-sm flex items-center justify-center" onClick={() => closeModal()}>
      <div className="flex bg-zinc-800 p-12 gap-8 rounded-lg w-[60%] m-12">
        {
          movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={500}
              height={600}
              alt={movie.title}
              className='rounded-lg shadow-md border border-zinc-500'
            />
          ) : (
            null
          )
        }
        <div classname='flex flex-col'>
          <div className='bg-gradient-to-t from-slate-600 to-zinc-50 bg-clip-text text-transparent'>
            <h2 className='text-5xl uppercase font-bold mb-2'>{movie.title}</h2>
          </div>
          <p className='text-lg text-slate-200 tracking-widest mb-2'>{movie.overview}</p>
          {!movie.release_date ? (
            <p className='text-zinc-300'>No Release Date Available</p>
          ) : (
            <p className='text-lg text-red-400 mb-2'>Released in {movie.release_date.split('-')[0]}</p>
          )}
          {!movie.vote_average ? (
            <p className='text-zinc-300'>No Ratings Yet</p>
          ) : (
            <div className='flex items-center gap-2'>
              <Image
                src={Star.src}
                width={20}
                height={20}
                alt='star'
                className='w-4 h-4'
              />
              <p className='text-lg text-slate-200'>{movie.vote_average.toFixed(1)}</p>
              <p className='text-lg text-slate-200'>&#40;&nbsp;{movie.vote_count === 1 ? movie.vote_count + ' vote' : movie.vote_count.toLocaleString() + ' votes'}&nbsp;&#41;</p>
            </div>
          )}

          <div className='flex space-x-8 my-12'>
            {cast?.map((actor) => (
              <div key={actor.id} className='flex flex-col'>
                <p className='text-xs text-slate-400 tracking-wider mb-2'>{actor.character}</p>
                {actor.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    width={40}
                    height={40}
                    alt={actor.name}
                    className='w-24 h-32 rounded-md'
                  />
                ) :
                  <div className='flex flex-col items-center justify-center bg-black/50 w-24 h-32 rounded-md'>
                    <p className='text-red-400 text-center'>No Image Available</p>
                  </div>
                }
                <div className='flex flex-col text-slate-200 mt-2 mb-4'>
                  <p className='text-sm'>{actor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails