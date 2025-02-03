import { useContext } from "react";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import { DetailsContext } from "../App";

function DetailsPage() {
  const selectedMovie = useContext(DetailsContext);

  // console.log("FILM", selectedMovie);

  return (
    <>
      <Header />
      <div>This is a page that contains all the movie details.</div>
      <MovieDetails />
      <button onClick={() => console.log("1", selectedMovie)}>CLICK</button>
    </>
  );
}

export default DetailsPage;
