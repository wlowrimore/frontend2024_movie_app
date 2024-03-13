'use client'

import { useTrialUser } from '@/app/context/TrialUserContext';
import { Nunito_Sans } from 'next/font/google';
import CountriesDropdown from '../ui/CountriesDropdown';
import TermsCheckbox from '../ui/TermsCheckbox';
import { useState, useEffect } from 'react';

const nunito = Nunito_Sans({ subsets: ['latin'] }, { weight: ['200', '400', '600', '800', '700'] })

const TrialForm = ({ handleCloseForm }) => {
  const { trialUser, addOrUpdateTrialUser, isChecked, country } = useTrialUser();
  const { firstName, lastName, email } = trialUser || {};
  const [successMsg, setSuccessMsg] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('INPUT CHANGE', name, value);
    addOrUpdateTrialUser(name, value);
  }

  const removeFormAndMsg = () => {
    setSuccessMsg(null)
    handleCloseForm()
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    // const newUser = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   country: country,
    //   isChecked: isChecked
    // }
    // addOrUpdateTrialUser(newUser);
    localStorage.setItem('trialUser', JSON.stringify(trialUser));
    setSuccessMsg(`Thank you ${firstName}! You may now enjoy your 7-day free trial.`)
  }

  useEffect(() => {
    const savedUser = localStorage.getItem('trialUser');
    if (savedUser) {
      addOrUpdateTrialUser(JSON.parse(savedUser));
    }
  }, [])

  return (
    <main className='fixed z-20 inset-0 backdrop-blur-sm flex items-center justify-center bg-zinc-600/80'>
      {successMsg ? (
        <div className='fixed inset-44 2xl:w-1/2 mx-auto bg-gradient-to-r from-blue-700 to-red-800 flex flex-col gap-10 items-center justify-center rounded-2xl border-2 border-zinc-200'>
          <h3 className='text-5xl text-white'>{successMsg}</h3>
          <button onClick={removeFormAndMsg} className='px-5 py-7 rounded-full text-zinc-50 text-lg tracking-wider font-bold bg-slate-900/30 border-2 border-zinc-50 hover:bg-green-500/50 transition duration-300'>Start</button>
        </div>
      ) : null}

      <div className='flex bg-gradient-to-t from-blue-200 to-slate-950 p-28 2xl:w-1/2 border-2 border-zinc-300 rounded-lg shadow-xl shadow-neutral-800'>
        <div className='flex flex-col'>
          <div className='w-4/5 bg-gradient-to-b from-blue-500 via-slate-800  to-slate-900 bg-clip-text text-transparent'>
            <h2 className={`${nunito.className} text-5xl font-bold uppercase`}>
              Starting your free trial is easy.
            </h2>
            <ul className='text-lg font-semibold tracking-wide my-4'>
              <li>* Provide us with your information.</li>
              <li>* Verify your email address.</li>
              <li>* Start enjoying your 7-day free trial.</li>
              <li>* 48 hour expiration reminder.</li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <input
              type="text"
              name='firstName'
              value={firstName || ''}
              onChange={handleInputChange}
              className='p-2 border-2 border-zinc-300 rounded-lg'
              placeholder='First Name'
              required
            />
            <input
              type="text"
              name='lastName'
              value={lastName || ''}
              onChange={handleInputChange}
              className='p-2 border-2 border-zinc-300 rounded-lg'
              placeholder='Last Name'
              required
            />
          </div>
          <input
            type="email"
            name='email'
            value={email || ''}
            onChange={handleInputChange}
            className='p-2 border-2 border-zinc-300 rounded-lg'
            placeholder='Email'
            required
          />
          <CountriesDropdown />
          <TermsCheckbox />
          <div className='flex gap-8 2xl:gap-5 mx-auto'>
            <button
              type='submit'
              disabled={!isChecked}
              className={`py-3 px-[4.8rem] text-xl text-white border rounded-lg transition duration-300 ${isChecked ? 'bg-red-600/80 hover:bg-red-700' : 'bg-red-600/30 border-none cursor-not-allowed'}`}>Claim Now</button>

            <button onClick={handleCloseForm}
              className='py-3 px-[6.4rem] bg-slate-700 text-xl text-white border rounded-lg hover:bg-slate-800 transition duration-300'>
              Cancel
            </button>
          </div>
          <em className='text-xs text-slate-700'>&dagger; we will never sell or share your information</em>
        </form>
      </div>

    </main>
  )
}

export default TrialForm