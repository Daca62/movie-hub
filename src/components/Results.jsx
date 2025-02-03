/* eslint-disable react/prop-types */
import "../styles/Results.css";
import MovieCard from "../components/MovieCard";
import axios from "../api/axios";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../pages/Home";

function Results({ selected }) {
  const [movies, setMovies] = useState([]);
  const searchMovie = useContext(SearchContext);
  // console.log(searchMovie.results);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selected);
      setMovies(response.data.results);
      // console.log(response);
      return response;
    }
    fetchData();
  }, [selected]);

  useEffect(() => {
    setMovies(searchMovie.results);
  }, [searchMovie]);

  return (
    <div className="results">
      {movies.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))}
      {/* {movies.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))} */}
    </div>
  );
}

export default Results;
