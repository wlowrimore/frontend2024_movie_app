'use client'

import { useSearch } from '@/app/context/SearchContext';
import HomePageHero from '../HomePageHero';
import MovieTrailers from '../MovieTrailers';
import CTASummary from '../CTASummary';
import TopTenMovies from '../TopTenMovies';
import SEOFeatures from '../SEOFeatures';
import TopTenTVShows from '../TopTenTVShows';

const HomeSwitch = () => {
  const { searchQuery } = useSearch();
  return (
    <div className=''>
      <HomePageHero />
      <CTASummary />
      <TopTenMovies />
      <SEOFeatures />
      <TopTenTVShows />
    </div>
  )
}

export default HomeSwitch