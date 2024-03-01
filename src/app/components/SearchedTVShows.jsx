'use client'

import { useState, useEffect } from 'react';
import { fetchShows } from './data-fetching/showData';
import Image from "next/image";
import Star from '/public/images/star.webp';
import ShowDetails from './ShowDetails';

const SearchedTVShows = ({ query }) => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const openModal = (show) => {
    setSelectedShow(show);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  useEffect(() => {
    const getShows = async () => {
      const fetchedShows = await fetchShows(query);
      setShows(fetchedShows.results);
    };
    getShows();
  }, [query]);
  const formattedQuery = capitalizeFirstLetter(query);

  if (!shows || shows.length === 0) {
    return <p>No results found for {formattedQuery}</p>;
  }

  return (
    <div className='w-full my-24 container'>
      <h1 className='text-3xl text-white'>Search Results For {capitalizeFirstLetter(formattedQuery.replace(/%20/g, " "))}</h1>
      <div className='my-12 grid grid-cols-5'>
        {shows.map((show) => (
          <div key={show.id} className='flex flex-col w-64 mb-32' onClick={() => openModal(show)}>

            <div onClick={() => openModal(show)} className='w-64 h-80 cursor-pointer hover:opacity-60 transition duration-300'>
              {!show.poster_path ? (
                <p className='bg-black/50 text-4xl text-red-400 text-center pt-28 w-64 h-80 rounded shadow-md border border-zinc-500'>No Image Available</p>

              ) : (

                <Image
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  width={500}
                  height={600}
                  alt={show.name}
                  className='rounded shadow-md border border-zinc-500 w-full h-full object-cover'
                />

              )}
              <div>
                <p className='text-xl text-amber-600 pt-2'>{show.name}</p>
                {!show.air_date ? (
                  <p className='text-zinc-50'>No Air Date Available</p>
                ) : (
                  <p className='text-sm text-zinc-50'>Originally Aired in {show.air_date.split('-')[0]}</p>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                {!show.vote_average ? (
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
                      <p className='text-zinc-100'>{show.vote_average.toFixed(1)}</p>
                      <p className='text-zinc-100'>&#40; {show.vote_count === 1 ? `${show.vote_count.toLocaleString()} vote` : `${show.vote_count.toLocaleString()} votes`} &#41;</p>
                    </div>
                  </>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>
      {selectedShow && <ShowDetails show={selectedShow} closeModal={closeModal} />}
    </div>
  );
};

export default SearchedTVShows;