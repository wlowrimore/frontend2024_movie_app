import Image from 'next/image';
import { Options } from '../api/auth/[...nextauth]/options';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const Header = async () => {
  const session = await getServerSession(Options);
  // const { data: session } = useSession({ required: true });
  return (
    <nav className='fixed z-20 top-0 left-0 right-0 border-b-4 border-slate-200 bg-slate-800'>
      <div className='w-full flex items-center justify-between py-3 container mx-auto'>

        <h1 className='text-3xl uppercase text-zinc-200'>Next Movies</h1>
        <div className='flex text-zinc-200 items-center gap-10'>
          {session ? (
            <>
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
                <Link href='/api/auth/signout' className='py-1 px-2'><h3 className='text-indigo-100 hover:text-indigo-300 transition duration-300'>SignOut</h3></Link>
              </div>
            </>
          ) : (
            <Link href='/api/auth/signin' className='py-1 px-2'>SignIn</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header