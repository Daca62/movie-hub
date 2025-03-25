/* eslint-disable react/prop-types */
import "../styles/Results.css";
import MovieCard from "../components/MovieCard";
import axios from "../api/axios";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../pages/Home";

function Results({ selected }) {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const searchMovie = useContext(SearchContext);
  // console.log(searchMovie.results);

  useEffect(() => {
    async function fetchData() {
      // setIsLoading(true);
      try {
        const response = await axios.get(selected);
        const data = await response.data.results;
        console.log(data);
        setMovies(data);
        // setIsLoading(false);
        return response;
      } catch (error) {
        throw new Error(
          error.message ||
            "Failed fetching the movies, Please reload the page and try again..."
        );
      }
    }

    // console.log(response);

    fetchData();
  }, [selected]);

  useEffect(() => {
    setMovies(searchMovie.results);
  }, [searchMovie]);

  return (
    <div className="results">
      {/* {isLoading && <h2>Loading content, please wait...</h2>} */}
      {movies?.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))}
      {/* {movies.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))} */}
    </div>
  );
}

export default Results;
