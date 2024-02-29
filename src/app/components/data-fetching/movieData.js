const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export async function fetchMovies(query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  const movies = await res.json();
  return movies;
}

export async function fetchTopTenMovies(id) {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`);
  const topTenMovies = await res.json();
  return topTenMovies.results.slice(0, 10);
}