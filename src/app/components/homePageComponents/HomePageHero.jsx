'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import TrialForm from '../forms/TrialForm'

const HomePageHero = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const handleOpenForm = () => {
    setFormIsOpen(true);
  }

  const handleCloseForm = () => {
    setFormIsOpen(false);
  }

  return (
    <div className='flex w-full xl:h-[50%] xl:mt-28 xl:mb-12 bg-homepage-hero bg-cover bg-center bg-norepeat container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700'>
      <div className='flex bg-zinc-800/80 md:bg-gradient-to-l md:from-black/30 md:to-black/70'>
        <div className='relative flex flex-col px-4 py-10 md:p-10 md:w-[42rem]'>
          <div className='p-4'>
            <p className='md:hidden text-white top-3 right-16 absolute'>SignIn</p>
            <h1 className='text-5xl text-purple-300'>Welcome to Next Movies</h1>
            <h2 className='text-3xl text-white'>The Largest Movie Database Available!</h2>
          </div>
          <div className='px-4'>
            <p className='text-lg text-white mb-2 tracking-wider'>With Next Movies you will have access to the largest movie database with over one million movies and tv shows to choose from.</p>
            <p className='text-lg text-white tracking-wider'>Sign up today to take advantage of our 7-day free trial offer.  We are so confident that you will enjoy using Next Movies that we require no credit card for registration.</p>
            <div className='py-6'>
              <button onClick={handleOpenForm} className='py-2 px-4 bg-red-600 text-lg text-white border rounded hover:bg-purple-300 hover:text-black transition duration-300'>Claim Your Free Trial Now</button>
            </div>
          </div>
        </div>
        {formIsOpen && <TrialForm handleCloseForm={handleCloseForm} />}
      </div>
    </div>
  )
}

export default HomePageHero