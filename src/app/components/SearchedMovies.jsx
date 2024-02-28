import Image from "next/image";
import Star from '/public/images/star.webp';

async function fetchMovies(query) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  const movies = await res.json();
  return movies;
}

const SearchedMovies = async ({ query }) => {
  const movies = await fetchMovies(query);

  return (
    <div className='w-full my-24 container'>
      <h1 className='text-3xl text-white'>Search Results For {query}</h1>
      <div className='my-12 grid grid-cols-5'>
        {movies.results.map((movie) => (
          <div key={movie.id} className='flex flex-col w-64 mb-6'>
            <div className='w-64 h-80'>
              {!movie.poster_path
                ?

                <p className='flex w-64 h-80 bg-black text-center pt-28 text-3xl text-red-400 uppercase border rounded'>No poster available</p>

                :
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={200}
                  height={300}
                  alt={movie.title}
                  className='w-full h-full object-cover border rounded cursor-pointer hover:opacity-60 transition duration-300'
                />
              }
            </div>
            <h1 className='text-lg text-amber-600'>{movie.title}</h1>
            <div className='text-slate-200 text-sm tracking-wider'>
              <div className='flex items-center gap-1'>
                <Image
                  src={Star}
                  width={20}
                  height={20}
                  alt={movie.title}
                  className='w-4 h-4'
                />
                <p>{movie.vote_average}</p>
                <p>&#40; {movie.vote_count} &#41;</p>
                <p className='ml-6'>{movie.release_date.split('-')[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchedMovies