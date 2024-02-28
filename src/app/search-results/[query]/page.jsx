import SearchedMovies from "@/app/components/SearchedMovies"

const SearchResultsPage = ({ params: { query } }) => {
  return (
    <main className='bg-black/60 min-h-screen mt-12 flex flex-col items-center mx-auto'>
      <SearchedMovies query={query} />
    </main>
  )
}

export default SearchResultsPage