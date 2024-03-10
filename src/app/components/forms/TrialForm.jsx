'use client'

import { useState, useEffect } from 'react'
import CountriesDropdown from '../ui/CountriesDropdown';
import TermsCheckbox from '../ui/TermsCheckbox';
const TrialForm = ({ handleCloseForm }) => {



  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, []);

  return (
    <main className='fixed z-20 inset-0 backdrop-blur-sm flex items-center justify-center bg-neutral-900/60'>
      <div className='flex bg-slate-100/50 p-28 w-4/5 border-2 border-zinc-300 rounded-lg shadow-xl shadow-neutral-800'>
        <div className='flex flex-col'>
          <div className='w-4/5'>
            <h2 className='text-5xl font-bold uppercase'>
              Starting your free trial is easy.
            </h2>
            <ul className='list-disc px-6 text-lg text-neutral-700 font-semibold tracking-wide my-4'>
              <li>Provide us with your information.</li>
              <li>Verify your email address.</li>
              <li>Start enjoying your 7-day free trial.</li>
              <li>We&apos;ll notify you 48 hours before your trial expires.</li>
            </ul>
          </div>
        </div>
        <form className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <input className='p-2 border-2 border-zinc-300 rounded-lg' type="text" placeholder='First Name' />
            <input className='p-2 border-2 border-zinc-300 rounded-lg' type="text" placeholder='Last Name' />
          </div>
          <input className='p-2 border-2 border-zinc-300 rounded-lg' type="email" placeholder='Email' />
          <CountriesDropdown />
          <TermsCheckbox />
          <div className='flex gap-8 mx-auto'>
            <button className='py-3 px-[4.8rem] bg-red-500 text-xl text-white border rounded-lg hover:bg-red-700  transition duration-300'>Claim Now</button>

            <button onClick={handleCloseForm} className='py-3 px-[6.4rem] bg-slate-700 text-xl text-white border rounded-lg hover:bg-slate-800 transition duration-300'>Cancel</button>
          </div>
          <em className='text-xs text-slate-700'>&dagger; we will never sell or share your information</em>
        </form>
      </div>
    </main>
  )
}

export default TrialForm