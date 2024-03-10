const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export async function GetCountries() {
  const res = await fetch(`https://api.themoviedb.org/3/configuration/countries?&api_key=${API_KEY}&language=en-US`);
  const countries = await res.json();
  return countries
}