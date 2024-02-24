import Image from 'next/image'
import React from 'react'

const CTASummary = () => {
  return (
    <div className='w-screen h-[50%] mb-12 bg-gradient-to-r from-black to black/40 container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700'>
      <div className='flex'>
        <div className='flex flex-col p-10 w-full'>
          <p className='px-4 pb-4 text-3xl text-white tracking-wider uppercase'>You&apos;ll get access to</p>
          <div className='p-4 grid grid-cols-2 gap-6 text-center'>
            <div className='flex flex-col text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-rose-400 to-blue-300'>
              <p className='mb-[-0.6rem] mt-[0.5rem]'>FAMILY</p>
              <p className='text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-red-500 to-white'>
              <p className='mb-[-0.6rem] mt-[0.5rem]'>Action</p>
              <p className='text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-orange-400 to-emerald-500'>
              <p className='mb-[-0.6rem] mt-[0.5rem]'>Comedy</p>
              <p className='text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-neutral-800 to-blue-400'>
              <p className='mb-[-0.6rem] mt-[0.5rem]'>Drama</p>
              <p className='text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
          </div>
          <p className='text-end pr-4 pt-4 text-3xl text-white tracking-wider uppercase'>. . . and so much more!</p>
        </div>
        <div className='flex flex-col p-10 w-full'>
          <h2 className='text-3xl text-white'>Stream and download your favorite movies and tv shows with the new Next Movies mobile app.</h2>
        </div>
      </div>
    </div>
  )
}

export default CTASummary