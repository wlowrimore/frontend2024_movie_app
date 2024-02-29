const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export async function fetchMovies(query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  const movies = await res.json();
  return movies;
}

export async function fetchMovieDetail(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const selectedMovie = await res.json();
  return selectedMovie;
}