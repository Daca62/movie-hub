/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";
import TextTruncate from "react-text-truncate";
import { useContext } from "react";
import { DetailsContext } from "../App";

const base_url = "https://image.tmdb.org/t/p/original/";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGFjZGRkYTZmM2EyYzJlMmI1NmZlMmUxYjkxMjE3MiIsIm5iZiI6MTczMTUyNzM3Mi4yNjIsInN1YiI6IjY3MzUwMmNjY2U3NDAxZjRhNGQ5YzcyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YLCNz4OoqaXRvy3OpQs-FVgJKrPJmnty3doOja2liY";

// IF NULL = THIS PICTURE
// const movie_reel =
//   "https://karlkwin.wordpress.com/wp-content/uploads/2017/08/movie-reel.jpeg";

function MovieCard({ movie }) {
  // const navigate = useNavigate();
  const backdrop = movie.backdrop_path;
  const poster = movie.poster_path;
  const setSelectedMovie = useContext(DetailsContext);

  async function returnId(item) {
    console.log("ID", item.id);

    const params = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${item.id}?language=en-US`,
      params
    )
      .then((response) => response.json())
      .then((res) => setSelectedMovie(res));

    // try {
    //   const request = await fetch(
    //     `https://api.themoviedb.org/3/movie/${item.id}?language=en-US`,
    //     params
    //   );
    //   const response = await request.json();
    //   setSelectedMovie(response);
    // } catch (error) {
    //   console.log("error", error);
    // }
  }
  //   returnId(item)= {

  // // } returnId = (item) => {
  //   // setSelectedMovie(item.id);

  // };

  return (
    <Link to={`/movie/${movie.id}`} onClick={() => returnId(movie)}>
      <div className="movieCard" onClick={() => returnId(movie)}>
        <h3>{movie.title || movie.name}</h3>
        <img src={`${base_url}${backdrop || poster}`} alt="movie image" />
        <div className="movieCard__info">
          <h4>•{movie.release_date || movie.first_air_date}•</h4>
          <TextTruncate
            line={2}
            element="p"
            truncateText="..."
            text={movie.overview}
          />
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
