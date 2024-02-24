import { Options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import HomeSwitch from './components/homePageComponents/switchHelper/HomeSwitch';

export default async function Home() {
  const session = await getServerSession(Options);

  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto'>
      <HomeSwitch />
    </main>
  );
}
