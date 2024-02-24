import { Options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import HomePageHero from './components/homePageComponents/HomePageHero';
import MovieTrailers from './components/homePageComponents/MovieTrailers';
import CTASummary from './components/homePageComponents/CTASummary';

export default async function Home() {
  const session = await getServerSession(Options);
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto'>
      <HomePageHero />
      <div>
        <MovieTrailers />
      </div>
      <div>
        <CTASummary />
      </div>
    </main>
  );
}
