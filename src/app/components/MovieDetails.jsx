'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Star from '/public/images/star.webp';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

const MovieDetails = ({ id, movie, closeModal }) => {
  const [cast, setCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  const handleClick = (e) => {
    e.stopPropagation();
  }

  useEffect(() => {
    const getCast = async () => {
      const cast = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`);
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
  console.log("CAST", cast)
  return (
    <div className="fixed h-screen inset-0 top-10 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center overflow-y-scroll" onClick={() => closeModal()}>
      <div className="flex bg-zinc-800 p-12 gap-8 rounded-lg w-[71%] h-full mt-12 mb-20">
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
                src={Star}
                width={20}
                height={20}
                alt='star'
                className='w-4 h-4'
              />
              <p className='text-lg text-slate-200'>{movie.vote_average.toFixed(1)}</p>
              <p className='text-lg text-slate-200'>&#40;&nbsp;{movie.vote_count === 1 ? movie.vote_count + ' vote' : movie.vote_count.toLocaleString() + ' votes'}&nbsp;&#41;</p>
            </div>
          )}

          <div className='flex space-x-8 mt-24'>
            {cast?.map((actor) => (
              <div key={actor.id} className='flex flex-col justify-center items-center w-[10rem] h-[16rem]'>
                <div className='flex'>
                  <p className='flex text-xs text-slate-400 mt-2 mb-2'>{actor.character}</p>
                </div>
                {actor.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    width={1000}
                    height={1000}
                    alt={actor.name}
                    className='w-44 h-[14rem] objuect-cover rounded-md border border-zinc-500'
                  />
                ) :
                  <div className='flex flex-col px-2 py-[5.2rem] bg-black rounded-md border border-zinc-500'>
                    <p className='text-red-400 text-xl text-center'>No Image Available</p>
                  </div>
                }
                <div className='flex text-slate-200 mt-2 mb-4'>
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