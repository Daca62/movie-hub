/* eslint-disable react/prop-types */
import "../styles/Home.css";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Results from "../components/Results.jsx";
import fetchMovies from "../api/fetchMovies.js";
import { createContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext(null);

function Home() {
  const [selected, setSelected] = useState(fetchMovies.fetchTopRated);
  const [searchResult, setSearchResult] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  // console.log("putanja", searchParams);

  return (
    <SearchContext.Provider value={searchResult}>
      <div className="home">
        <Header setSelected={setSelected} setSearchResult={setSearchResult} />
        <Nav setSelected={setSelected} />
        <Results selected={selected} />
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
