import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/PageNotFoundImage.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 page not found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
