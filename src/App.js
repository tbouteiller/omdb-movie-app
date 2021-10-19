import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import Movies from "./Movies";
import Search from "./Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false);

  const apiCall = async (search) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API}`
    );
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
      setEmpty(false);
    } else if (data.Response === "False") {
      setMovies([]);
      setEmpty(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      apiCall(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <Movies movies={movies} />
      {empty && (
        <p>
          <i>Please search for a valid movie title.</i>
        </p>
      )}
    </div>
  );
}

export default App;
