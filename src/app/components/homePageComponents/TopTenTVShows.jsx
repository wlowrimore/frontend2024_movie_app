'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Star from '/public/images/star.webp';

const TopTenTVShows = () => {
  const [topShows, setTopShows] = useState([])

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    const fetchTopShows = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${API_KEY}`);
      const data = await res.json();
      setTopShows(data.results.slice(0, 10));
    };
    fetchTopShows();
  }, [])

  return (
    <div className='bg-black container px-6 pt-6 pb-4 mb-12 border-b-2 border-slate-500 shadow-xl shadow-neutral-700 rounded-t-lg'>
      <h2 className='text-3xl w-full text-slate-300 pb-6'>Top 10 TV Shows This Week</h2>
      <div className='flex gap-6 overflow-x-scroll'>
        {topShows.map((show) => (
          <div key={show.id} className='flex mb-4'>
            <div className='flex flex-col text-white'>
              <p className='w-52 h-72'>
                {show ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    width={200}
                    height={300}
                    alt={show.title}
                    className='w-full h-full object-cover border rounded cursor-pointer hover:opacity-70 transition duration-300'
                  />

                ) : (
                  <p>No image available for this show</p>
                )}
              </p>
              <div className='flex items-center mt-2 text-sm text-slate-300 gap-4'>
                <h3>{show.title}</h3>
                <p>{show.first_air_date.split('-')[0]}</p>
              </div>
              <div className='flex items-center'>
                <Image src={Star} alt='star' width={20} height={20} className='w-5 h-5 mr-1' />
                <p className='mr-2'>{show.vote_average.toFixed(1)}</p>
                <p>&#40; {show.vote_count}&nbsp;votes &#41;</p>
              </div>
              {/* <p>{show.popularity}</p> */}
              {/* <p>{show.overview}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopTenTVShows