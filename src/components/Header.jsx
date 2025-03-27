/* eslint-disable react/prop-types */
import "../styles/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SearchInput from "./SearchInput";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import fetchMovies from "../api/fetchMovies";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Header({ setSelected, setSearchResult }) {
  // const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <div
          className="header__leftBtn"
          onClick={() => setSelected(fetchMovies.fetchActionMovies)}
        >
          <Link to="/">
            <HomeIcon />
          </Link>
          <p>Home</p>
        </div>
        <div
          className="header__leftBtn"
          onClick={() => setSelected(fetchMovies.fetchTopRated)}
        >
          <EmojiEventsIcon />
          <p>Best Movies</p>
        </div>
        <div
          className="header__leftBtn"
          onClick={() => setSelected(fetchMovies.fetchTrending)}
        >
          <FlashOnIcon />
          <p>Trending</p>
        </div>
      </div>
      <SearchInput setSearchResult={setSearchResult} />
      <div className="header__logo">
        <h1>MovieHub</h1>
      </div>
    </div>
  );
}

export default Header;
