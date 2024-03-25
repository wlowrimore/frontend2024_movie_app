'use client'

import { useState, useEffect } from 'react'
import { fetchTopTenShows } from '../data-fetching/showData';
import ShowDetails from '../ShowDetails';
import Image from 'next/image'
import Star from '/public/images/star.webp';

const TopTenTVShows = ({ id }) => {
  const [topShows, setTopShows] = useState([])
  const [selectedTopShow, setSelectedTopShow] = useState(null);

  // const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // useEffect(() => {
  //   const fetchTopShows = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${API_KEY}`);
  //     const data = await res.json();
  //     setTopShows(data.results.slice(0, 10));
  //   };
  //   fetchTopShows();
  // }, [])

  const openModal = (show) => {
    setSelectedTopShow(show);
  };

  const closeModal = () => {
    setSelectedTopShow(null);
  };

  useEffect(() => {
    const getTopShows = async () => {
      const topTenShows = await fetchTopTenShows(id);
      setTopShows(topTenShows);
    };
    getTopShows();
  }, [id])

  return (
    <div className='bg-black container px-6 pt-6 pb-4 mb-24 border-b-2 border-slate-500 shadow-xl shadow-neutral-700 rounded-t-lg'>
      <h2 className='md:text-3xl w-full text-slate-300 pb-6 text-center md:text-start'>Top 10 TV Shows This Week</h2>
      <div className='flex flex-col items-center md:items-start md:flex-row gap-6 overflow-x-scroll'>
        {topShows.map((show) => (
          <div key={show.id} className='flex mb-4'>
            <div className='flex flex-col text-white'>
              <p className='w-52 h-72' onClick={() => openModal(show)}>
                {show ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    width={200}
                    height={300}
                    alt={show.name}
                    className='w-full h-full object-cover border rounded cursor-pointer hover:opacity-70 transition duration-300'
                  />

                ) : (
                  <p>No image available for this show</p>
                )}
              </p>
              <div className='flex items-center mt-2 text-sm text-slate-300 gap-4'>
                <h3 className='max-w-[10rem] md:max-w-full'>{show.name}</h3>
                <p>{show.first_air_date.split('-')[0]}</p>
              </div>
              <div className='flex items-center'>
                <Image src={Star} alt='star' width={20} height={20} className='w-5 h-5 mr-1' />
                <p className='mr-2'>{show.vote_average.toFixed(1)}</p>
                <p>&#40; {show.vote_count}&nbsp;votes &#41;</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTopShow && <ShowDetails show={selectedTopShow} closeModal={closeModal} />}
    </div>
  )
}

export default TopTenTVShows