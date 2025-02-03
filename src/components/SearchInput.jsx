/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import "../styles/SearchInput.css";
import { useRef } from "react";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGFjZGRkYTZmM2EyYzJlMmI1NmZlMmUxYjkxMjE3MiIsIm5iZiI6MTczMTUyNzM3Mi4yNjIsInN1YiI6IjY3MzUwMmNjY2U3NDAxZjRhNGQ5YzcyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YLCNz4OoqaXRvy3OpQs-FVgJKrPJmnty3doOja2liY";

function SearchInput({ setSearchResult }) {
  const searchInput = useRef(null);
  // const [searchValue, setSearchValue] = useState([]);

  const search = (e) => {
    e.preventDefault();
    const query = searchInput.current.value;
    const request = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };
    // console.log(query);

    if (!query) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      request
    )
      .then((res) => res.json())
      .then((res) => setSearchResult(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="search">
      <form className="search__form">
        <SearchIcon onClick={() => console.log("click")} />
        <input ref={searchInput} type="text" placeholder="Enter a movie" />
        <button hidden onClick={search} />
      </form>
    </div>
  );
}

// function SearchInput() {
//   const [query, setQuery] = useState("");

//   function handleSearch(e) {
//     setQuery(e.target.value);
//     console.log("query", query);
//   }

//   return (
//     <div className="search">
//       <form action="submit" placeholder="111111"></form>
//       <input
//         type="search"
//         placeholder="Enter a movie name..."
//         onChange={(e) => handleSearch(e)}
//       />
//       <SearchIcon />
//     </div>
//   );
// }

export default SearchInput;

//GET MOVIE DETAILS
// fetch('https://api.themoviedb.org/3/movie/278?language=en-US'

//SEARCH API
// fetch('https://api.themoviedb.org/3/search/movie?query=green%20mile&include_adult=false&language=en-US&page=1'
