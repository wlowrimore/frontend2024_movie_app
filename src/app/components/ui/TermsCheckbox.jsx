import Link from 'next/link'
import React from 'react'

const TermsCheckbox = () => {
  return (
    <div className='flex text-sm items-center gap-2'>
      <input type="checkbox" name="terms" id="terms" className='w-4 h-4 cursor-pointer' />
      <label htmlFor="terms">I have read the <Link href='#' className='text-zinc-800 underline hover:text-zinc-600 transition duration-200'>terms and conditions</Link> and hereby agree.</label>
    </div>
  )
}

export default TermsCheckbox