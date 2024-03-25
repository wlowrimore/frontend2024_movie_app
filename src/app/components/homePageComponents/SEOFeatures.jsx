'use client'

import { useState } from 'react'
import Image from 'next/image'
import TrialForm from '../forms/TrialForm'
import DownloadIcon from '/public/images/icons/download.webp'
import StreamingIcon from '/public/images/icons/streaming.webp'
import DevicesIcon from '/public/images/icons/devices.webp'

const SEOFeatures = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)

  const handleOpenForm = () => {
    setFormIsOpen(true);
  }

  const handleCloseForm = () => {
    setFormIsOpen(false);
  }

  return (
    <>
      <div className='w-screen flex flex-col gap-6 md:gap-0 md:flex-row text-center justify-around items-center text-purple-300 text-3xl container px-6 pt-6 pb-4 my-4 md:my-12 border-b-2 border-slate-500 rounded bg-gradient-to-t from-black to-transparent shadow-xl shadow-neutral-700'>
        <div className='flex flex-col w-64 items-center'>
          <Image
            src={DownloadIcon}
            alt='Download Icon'
            width={200}
            height={300}
            className='pt-4'
          />
          <p>Download To Any Device</p>
          <div className='text-[1.3rem] font-bold my-4'>
            <button onClick={handleOpenForm} className='bg-amber-200 py-1 px-5 text-neutral-800 rounded-lg hover:bg-cyan-700 hover:text-white transition duration-300'>7-Days Free</button>
          </div>
        </div>
        <div className='flex flex-col w-64 items-center'>
          <Image
            src={StreamingIcon}
            alt='Streaming Icon'
            width={200}
            height={300}
            className='py-4'
          />
          <p>Stream On Any Device</p>
          <div className='text-[1.3rem] font-bold my-4'>
            <button onClick={handleOpenForm} className='bg-amber-200 py-1 px-5 text-neutral-800 rounded-lg hover:bg-cyan-700 hover:text-white transition duration-300'>7-Days Free</button>
          </div>
        </div>
        <div className='flex flex-col w-64 items-center'>
          <Image
            src={DevicesIcon}
            alt='Devices Icon'
            width={250}
            height={350}
            className='py-4'
          />
          <p>Enjoy with All Devices</p>
          <div className='text-[1.3rem] font-bold my-4'>
            <button onClick={handleOpenForm} className='bg-amber-200 py-1 px-5 text-neutral-800 rounded-lg hover:bg-cyan-700 hover:text-white transition duration-300'>7-Days Free</button>
          </div>
        </div>
      </div>
      {formIsOpen && <TrialForm handleCloseForm={handleCloseForm} />}
    </>
  )
}

export default SEOFeatures