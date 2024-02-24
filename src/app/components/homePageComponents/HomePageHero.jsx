import Image from 'next/image'
import React from 'react'

const HomePageHero = () => {
  return (
    <div className='w-full h-[50%] mt-28 mb-12 bg-homepage-hero bg-cover bg-center bg-norepeat container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700'>
      <div className='flex bg-gradient-to-l from-black/30 to-black/70'>
        <div className='flex flex-col p-10 w-[42rem]'>
          <div className='p-4'>
            <h1 className='text-5xl text-purple-300'>Welcome to Next Movies</h1>
            <h2 className='text-3xl text-white'>The Largest Movie Database Available!</h2>
          </div>
          <div className='px-4'>
            <p className='text-lg text-white mb-2 tracking-wider'>With Next Movies you will have access to the largest movie database with over one million movies and tv shows to choose from.</p>
            <p className='text-lg text-white tracking-wider'>Sign up today to take advantage of our 7-day free trial offer.  We are so confident that you will enjoy using Next Movies that we require no credit card for registration.</p>
            <div className='py-6'>
              <button className='py-2 px-4 bg-red-600 text-lg text-white border rounded hover:bg-purple-300 hover:text-black transition duration-300'>Claim Your Free Trial Now</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>

        </div>
      </div>
    </div>
  )
}

export default HomePageHero