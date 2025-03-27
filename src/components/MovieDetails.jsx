import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieDetails.css";

/* eslint-disable react/prop-types */
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// let initialState = true;

const base_url = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const [details, setDetails] = useState({});

  const params = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
          options
        );
        const data = await response.json();
        setDetails(data);
        // initialState = false;
      } catch (error) {
        throw new Error(
          error.message || "There was an error fetching the movie data."
        );
      }
    }
    fetchMovieDetails();
  }, []);

  console.log(details);
  return (
    <article className="container">
      <div className="img-container">
        <h3>{details?.tagline}</h3>
        <img
          src={`${base_url}${details?.backdrop_path}`}
          alt="Movie poster"
          className="movie-poster"
        />
      </div>
      <div className="info-container">
        <h2 className="title">{details?.title}</h2>
        <p className="movie-description">{details?.overview}</p>
      </div>
    </article>
  );
}

export default MovieDetails;
