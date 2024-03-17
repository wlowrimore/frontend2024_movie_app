'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import TrialForm from '../forms/TrialForm'
import { fetchTopTenMovies } from '../data-fetching/movieData'
import Image from 'next/image'

import { MdOutlineOpenInNew } from 'react-icons/md'
import { MdOutlineOpenInNewOff } from 'react-icons/md'

const HomePageHero = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [featuredMovies, setFeaturedMovies] = useState([])
  const [randomMovie, setRandomMovie] = useState(null);

  const handleOpenForm = () => {
    setFormIsOpen(true);
  }

  const handleCloseForm = () => {
    setFormIsOpen(false);
  }

  useEffect(() => {
    const getMoviesArray = async () => {
      try {
        const movieArray = await fetchTopTenMovies();
        setFeaturedMovies(movieArray);
      } catch (error) {
        console.error("Error fetching featured movies", error);
      }
    }
    getMoviesArray();
  }, []);

  useEffect(() => {
    if (featuredMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * featuredMovies.length);
      setRandomMovie(featuredMovies[randomIndex]);
    }
  }, [featuredMovies])

  return (
    <div className='flex w-full xl:h-[50%] xl:mt-28 xl:mb-12 bg-black md:bg-homepage-hero bg-cover bg-center bg-norepeat container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700'>
      <div className='flex w-full bg-zinc-900/80 md:bg-gradient-to-r md:from-transparent md:to-zinc-900/10'>
        <div className='relative flex flex-col px-4 py-10 md:p-10 md:w-[42rem]'>
          <div className='p-2'>
            <p className='md:hidden text-white top-4 left-6 absolute text-sm flex items-center gap-2'><MdOutlineOpenInNew />SignIn</p>
            <h1 className='text-4xl md:text-5xl text-purple-300'>Next Movies</h1>
            <h2 className='text-2xl md:text-3xl text-white'>The Largest Movie Database Available!</h2>
          </div>
          <div className='px-4 hidden md:block'>
            <p className='text-lg text-white mb-2 tracking-wider'>With Next Movies you will have access to the largest movie database with over one million movies and tv shows to choose from.</p>
            <p className='text-lg text-white tracking-wider'>Sign up today to take advantage of our 7-day free trial offer.  We are so confident that you will enjoy using Next Movies that we require no credit card for registration.</p>
            <div className='py-6'>
              <button onClick={handleOpenForm} className='py-2 px-4 bg-red-600 text-lg text-white border rounded hover:bg-purple-300 hover:text-black transition duration-300'>Claim Your Free Trial Now</button>
            </div>
          </div>
          {randomMovie && (
            <div className='md:hidden block mb-[-2rem]'>
              <Image
                src={`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`}
                alt={randomMovie.title}
                width={500}
                height={500}
                className='opacity-70 w-full'
              />
              <div className='md:hidden flex w-full'>
                <button className='w-full border rounded-b mt-2 mb-6 bg-indigo-300 font-bold text-xl px-6 py-1'>Get 7-Days Free</button>
              </div>
            </div>
          )}
        </div>
        {formIsOpen && <TrialForm handleCloseForm={handleCloseForm} />}
      </div>
    </div>
  )
}

export default HomePageHero