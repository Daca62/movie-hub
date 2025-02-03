import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
// import SearchPage from "./pages/SearchPage";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const DetailsContext = createContext(null);

function App() {
  const [selectedMovie, setSelectedMovie] = useState([278]);

  return (
    <div className="app">
      <DetailsContext.Provider value={(selectedMovie, setSelectedMovie)}>
        <Router>
          <Routes>
            {/* <Route path="/search" element={<SearchPage />} /> */}
            <Route path="/movie/:id" element={<DetailsPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
