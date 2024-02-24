'use client'

import { useSearch } from '@/app/context/SearchContext';
import AllMoviesResults from '../../searchResults-components/AllMoviesResults';
import HomePageHero from '../HomePageHero';
import MovieTrailers from '../MovieTrailers';
import CTASummary from '../CTASummary';
import TopTenMovies from '../TopTenMovies';
import SEOFeatures from '../SEOFeatures';
import TopTenTVShows from '../TopTenTVShows';

const HomeSwitch = () => {
  const { searchQuery } = useSearch();
  return (
    <div>
      {searchQuery ? (<AllMoviesResults />) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default HomeSwitch