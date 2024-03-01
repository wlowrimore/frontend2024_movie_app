const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export async function fetchShows(query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  const shows = await res.json();
  return shows;
}

export async function fetchTopTenShows(id) {
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${API_KEY}`);
  const topTenShows = await res.json();
  return topTenShows.results.slice(0, 10);
}
