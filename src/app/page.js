import { Options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import HomePageHero from './components/ui/HomePageHero';
import MovieTrailers from './components/movie-components/MovieTrailers';

export default async function Home() {
  const session = await getServerSession(Options);
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center mx-auto'>
      <HomePageHero />
      <div>
        <MovieTrailers />
      </div>
    </main>
  );
}
