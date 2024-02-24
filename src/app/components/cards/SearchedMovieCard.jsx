'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';;
import Star from '/public/images/star.webp';

import { getGenres } from '@/app/lib/genres';

const SearchedMovieCard = ({ searchQuery = '', movies = [], resetSearchQuery }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (movie) => {
    setModalData(movie);
  }

  const closeModal = () => {
    setModalData(null);
  }

  return (
    <>
      <div className='my-24 '>
        <div className='flex justify-between items-end'>
          <h1 className='text-3xl pt-6 font-bold text-neutral-400'>Results for {searchQuery}</h1>
          <button onClick={resetSearchQuery} className='h-[2rem] py-1 px-3 mr-2 bg-neutral-800 rounded-lg text-white hover:bg-amber-800/50 hover:text-black transition duration-300'>Back to Movies</button>
        </div>
        <div className='grid grid-cols-5 gap-10 py-8'>
          {movies.map((movie) => (
            <div key={movie.id} className='max-w-[16rem]'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={250}
                height={350}
                alt={movie.title}
                onClick={() => openModal(movie)}
                className='rounded-2xl shadow-md shadow-neutral-900 cursor-pointer hover:opacity-80 hover:scale-105 transition duration-300 border border-zinc-500'
              />
              <h2 className='font-semibold pt-3 text-neutral-400'>{movie.title}<span className='text-sm font-normal ml-3'>{movie.release_date.split('-')[0]}</span></h2>
              <div className='flex'>
                <p className='text-xs tracking-wider text-rose-600 pb-1'>
                  {Array.isArray(movie.genre_ids) && movie.genre_ids.length > 0
                    ? movie.genre_ids.map((id) => getGenres(id)).join(' | ')
                    : 'Unknown'}
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  src={Star}
                  width={100}
                  height={100}
                  alt='Thumb up'
                  className='w-6'
                />
                <p className='text-neutral-400'>{movie.vote_average.toFixed(1)}&nbsp;<span>&#40;{movie.vote_count}&#41;</span></p>
              </div>
              <p className='w-full py-4 text-neutral-400'>{movie.overview.slice(0, 100)}<span onClick={() => openModal(movie)} className='text-sm text-orange-500 italic cursor-pointer hover:text-indigo-500 transition duration-300'>...read more</span></p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalData && (

        <div
          className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg w-[60%] m-12">
            <div className='flex gap-4'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${modalData.poster_path}`}
                width={500}
                height={600}
                alt={modalData.title}
                className='rounded-2xl shadow-md shadow-neutral-900 border border-zinc-500'
              />
              <div className='flex flex-col'>
                <h2 className='text-4xl font-bold mb-1'>{modalData.title}</h2>
                <div className='flex'>
                  <p className='text-sm font-semibold tracking-wide text-rose-600 pb-1'>
                    {Array.isArray(modalData.genre_ids) && modalData.genre_ids.length > 0
                      ? modalData.genre_ids.map((id) => getGenres(id)).join(' | ')
                      : 'Unknown'}
                  </p>
                </div>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={Thumb}
                      width={100}
                      height={100}
                      alt='Thumb up'
                      className='w-6'
                    />
                    <p>{modalData.vote_average.toFixed(1)}&nbsp;<span>&#40;{modalData.vote_count}&#41;</span></p>
                  </div>
                  <p className='text-sm font-normal'>{modalData.release_date.split('-')[0]}</p>
                </div>
                <p>{modalData.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchedMovieCard