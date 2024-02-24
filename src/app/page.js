import { Options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import HomePageHero from './components/homePageComponents/HomePageHero';
import MovieTrailers from './components/homePageComponents/MovieTrailers';
import CTASummary from './components/homePageComponents/CTASummary';
import TopTenMovies from './components/homePageComponents/TopTenMovies';
import SEOFeatures from './components/homePageComponents/SEOFeatures';
import TopTenTVShows from './components/homePageComponents/TopTenTVShows';

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
      <div>
        <TopTenMovies />
      </div>
      <div>
        <SEOFeatures />
      </div>
      <div>
        <TopTenTVShows />
      </div>
    </main>
  );
}
