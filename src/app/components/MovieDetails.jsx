'use client'

import { useEffect } from 'react';
import Image from "next/image";
import Star from '/public/images/star.webp';

const MovieDetails = ({ movie, closeModal }) => {

  const handleClick = (e) => {
    e.stopPropagation();
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

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
              className='rounded-2xl shadow-md border border-zinc-500'
            />
          ) : (
            null
          )
        }
        <div classname='flex flex-col'>
          <h2 className='text-5xl text-slate-400 uppercase font-bold mb-2'>{movie.title}</h2>
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
              <p className='text-lg text-slate-200'>({movie.vote_count === 1 ? movie.vote_count + ' vote' : movie.vote_count.toLocaleString() + ' votes'})</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails