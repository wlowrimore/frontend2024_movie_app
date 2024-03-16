import Image from 'next/image'
import Mobile from '/public/images/mobile.webp';
import GooglePlayLogo from '/public/images/google-play-logo.webp';
import AppStoreLogo from '/public/images/app-store-logo.webp';

const CTASummary = () => {
  return (
    <div className='md:w-screen md:h-[50%] mb-12 bg-gradient-to-r from-black to black/40 container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700 px-4 md:px-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:p-10 md:w-full'>
          <p className='hidden md:inline-block px-4 pb-4 text-xl md:text-3xl text-white tracking-wider uppercase'>You&apos;ll get access to</p>
          <div className='p-4 grid grid-cols-2 gap-4 md:gap-6 text-center'>
            <div className='flex flex-col w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-rose-400 to-blue-300'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>FAMILY</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-red-500 to-white'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Action</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-orange-400 to-emerald-500'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Comedy</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-neutral-800 to-blue-400'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Drama</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
          </div>
          <p className='hidden md:inline-block text-end pr-4 pt-4 text-3xl text-white tracking-wider uppercase'>. . . and so much more!</p>
        </div>
        <div className='grid grid-cols-2 w-full relative my-24'>
          <div className='flex flex-col'>
            <h2 className='text-3xl w-full ml-20 bg-gradient-to-b from-purple-200 to-purple-400 bg-clip-text text-transparent'>Now you can stream and download your favorite movies and tv shows with the new Next Movies mobile app.</h2>
            <div className='flex justify-center ml-[3.5rem] mt-4 gap-2'>
              <Image
                src={GooglePlayLogo}
                alt='Google Play Logo'
                width={200}
                height={200}
                className='w-28 opacity-60'
              />
              <Image
                src={AppStoreLogo}
                alt='App Store Logo'
                width={200}
                height={200}
                className='w-28 opacity-70'
              />
            </div>
          </div>
          <div className='absolute right-12 bottom-[-3.2rem]'>
            <Image
              src={Mobile}
              alt='Mobile app'
              width={400}
              height={400}
              className='w-44'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASummary