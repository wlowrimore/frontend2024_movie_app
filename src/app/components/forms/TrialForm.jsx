'use client'

import { useState, useEffect } from 'react'
import { Nunito_Sans } from 'next/font/google';
import CountriesDropdown from '../ui/CountriesDropdown';
import TermsCheckbox from '../ui/TermsCheckbox';

const nunito = Nunito_Sans({ subsets: ['latin'] }, { weight: ['200', '400', '600', '800', '700'] })

const TrialForm = ({ handleCloseForm }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const [trialClaimantData, setTrialClaimantData] = useState([]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  const handleSelectCountry = (e) => {
    setCountry(e.target.value)
  }

  const removeFormAndMsg = () => {
    setSuccessMsg(null)
    handleCloseForm()
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      isChecked: isChecked
    }

    setTrialClaimantData([...trialClaimantData, newEntry])

    if (trialClaimantData) {

      setSuccessMsg(`Thank you ${firstName.toUpperCase()}! Your free trial is now active!`)
    }
  }

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('trialClaimantData')) || [];

    if (Array.isArray(trialClaimantData)) {
      const combinedData = [...existingData, ...trialClaimantData];
      localStorage.setItem('trialClaimantData', JSON.stringify(combinedData));
    } else {
      console.error('trialClaimantData is not an array.');
    }
  }, [trialClaimantData])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, []);

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='p-2 border-2 border-zinc-300 rounded-lg'
              placeholder='First Name'
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='p-2 border-2 border-zinc-300 rounded-lg'
              placeholder='Last Name'
              required
            />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 border-2 border-zinc-300 rounded-lg'
            placeholder='Email'
            required
          />
          <CountriesDropdown handleSelectCountry={handleSelectCountry} />
          <TermsCheckbox handleCheckboxChange={handleCheckboxChange} />
          <div className='flex gap-8 2xl:gap-5 mx-auto'>
            <button
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