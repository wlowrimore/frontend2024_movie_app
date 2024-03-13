'use client'

import { useTrialUser } from '@/app/context/TrialUserContext';
import Link from 'next/link'

const TermsCheckbox = () => {
  const { isChecked, handleCheckboxChange } = useTrialUser();
  return (
    <div className='flex text-sm items-center gap-2'>
      <input
        onClick={handleCheckboxChange}
        type="checkbox"
        name="terms"
        id="terms"
        className='w-4 h-4 cursor-pointer'
        required
      />
      <label htmlFor="terms">I have read the <Link href='#' className='text-zinc-800 underline hover:text-zinc-600 transition duration-200'>terms and conditions</Link> and hereby agree.</label>
    </div>
  )
}

export default TermsCheckbox