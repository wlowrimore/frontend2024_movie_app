import Image from 'next/image'
import Mobile from '/public/images/mobile.webp';
import GooglePlayLogo from '/public/images/google-play-logo.webp';
import AppStoreLogo from '/public/images/app-store-logo.webp';

const CTASummary = () => {
  return (
    <div className='md:w-screen md:h-[50%] mb-4 md:mb-12 bg-gradient-to-r from-black to black/40 container border-b-2 border-slate-600 rounded shadow-xl shadow-neutral-700 px-2 md:px-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:p-10 md:w-full'>
          <p className='hidden md:inline-block px-4 pb-4 text-xl md:text-3xl text-white tracking-wider uppercase'>You&apos;ll get access to</p>
          <div className='px-8 py-4 md:p-4 mb-12 mt-4 md:my-0 grid grid-cols-2 gap-4 md:gap-6 text-center'>
            <div className='flex flex-col items-center w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-rose-400 to-blue-300'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Family</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col items-center w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-red-500 to-white'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Action</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col items-center w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-r from-orange-400 to-emerald-500'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Comedy</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
            <div className='flex flex-col items-center w-full text-3xl text-slate-900 font-bold border border-slate-500 rounded p-4 bg-gradient-to-l from-neutral-800 to-blue-400'>
              <p className='md:mb-[-0.6rem] md:mt-[0.5rem]'>Drama</p>
              <p className='hidden md:block text-[1.3rem] text-slate-700'>Movies & TV</p>
            </div>
          </div>
          <p className='hidden md:inline-block text-end pr-4 pt-4 text-3xl text-white tracking-wider uppercase'>. . . and so much more!</p>
        </div>
        <div className='flex md:grid grid-cols-2 w-full relative md:my-24'>
          <div className='flex flex-col xl:mr-4 items-center'>
            <h2 className='md:text-3xl w-full mt-[-3rem] md:mt-0 ml-4 md:ml-20 px-6 md:px-0 bg-gradient-to-b from-purple-200 to-purple-400 bg-clip-text text-transparent'>Now you can stream and download your favorite movies and tv shows with the new Next Movies mobile app.</h2>
            <div className='flex justify-center md:ml-[3.5rem] mt-48 mb-12 md:mt-5 gap-2'>
              <Image
                src={GooglePlayLogo}
                alt='Google Play Logo'
                width={200}
                height={200}
                className='w-28 opacity-60 md:pb-10'
              />
              <Image
                src={AppStoreLogo}
                alt='App Store Logo'
                width={200}
                height={200}
                className='w-28 opacity-70 md:pb-10'
              />
            </div>
          </div>
          <div className='absolute w-screen top-10 ml-4 md:bottom-[-10%] xl:top-[-2%] xl:bottom-[-5%] 2xl:top-[-2%] 2xl:bottom-10 2xl:left-[-15%] md:left-[-25%]'>
            <Image
              priority
              src={Mobile}
              alt='Mobile app'
              width={1000}
              height={1000}
              className='w-full h-full md:w-[70%] md:h-[80%] md:opacity-20 xl:w-[64%] xl:h-[80%] 2xl:w-[35%] 2xl:h-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASummary