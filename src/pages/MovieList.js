import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch";
import { Pagination } from "../components/Pagination";


export const MovieList = ({apiPath}) => {

  const {currentPosts : movies, totalPosts, postsPerPage, setCurrentPage} = useFetch(apiPath);


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <section className="pb-3">
        <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      </section>
    </main>
  )
}
