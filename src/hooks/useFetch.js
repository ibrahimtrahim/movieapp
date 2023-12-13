import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    const [currentPage, setCurrentPage] = useState(2);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies(); 
      }, [url]);

      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const totalPosts = data.length;
      const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return { totalPosts, currentPosts, postsPerPage, setCurrentPage }
}
