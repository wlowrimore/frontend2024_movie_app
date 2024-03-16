import Image from 'next/image';
import { Options } from '../../api/auth/[...nextauth]/options';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = async () => {
  const session = await getServerSession(Options);
  // const { data: session } = useSession({ required: true });
  return (
    <nav className='hidden md:inline-block fixed z-20 top-0 left-0 right-0 shadow-xl shadow-slate-600 border-slate-600 bg-slate-800'>
      <div className='w-full flex items-center justify-between py-3 container mx-auto'>
        <div className='bg-gradient-to-t from-slate-600 to-zinc-50 bg-clip-text text-transparent'>
          <Link href='/'><h1 className='hover:text-zinc-300 transition duration-300 text-4xl uppercase'>Next Movies</h1></Link>
        </div>
        <div className='flex text-zinc-200 items-center gap-10'>
          {session ? (
            <>
              <SearchBar />
              <div className='text-indigo-200 flex items-center gap-2'>
                <p className='py-1 px-2 font-light tracking-wide'>{session.user.name}</p>
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className='rounded-full w-8 h-8'
                  />
                ) : (
                  <Image
                    src='/images/user.svg'
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className='rounded-full w-6 h-6'
                  />
                )}
              </div>
              <div className=''>
                <Link href='/api/auth/signout' className='py-1 px-2'><h3 className='text-slate-200 hover:text-slate-400 hover:underline transition duration-300'>SignOut</h3></Link>
              </div>
            </>
          ) : (
            <>
              {/* <p className='text-rose-500'>Sign in to browse site</p> */}
              <Link href='/api/auth/signin' className='py-1 px-2 text-slate-200 hover:text-slate-400 hover:underline transition duration-300'>Sign in for full access</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header