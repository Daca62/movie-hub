/* eslint-disable react/prop-types */
import "../styles/Nav.css";
import fetchMovies from "../api/fetchMovies";

function Nav({ setSelected }) {
  return (
    <div className="nav">
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchActionMovies)}>
          Action
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchAdventureMovies)}>
          Adventure
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchComedyMovies)}>
          Comedy
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchCrime)}>Crime</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchDramaMovies)}>Drama</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchFantasyMovies)}>
          Fantasy
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchHorrorMovies)}>
          Horror
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchMystery)}>Mystery</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchRomanceMovies)}>
          Romance
        </h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchSciFi)}>Sci-Fi</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchTV)}>TV Movie</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelected(fetchMovies.fetchWestern)}>Western</h2>
      </div>
    </div>
  );
}

export default Nav;
