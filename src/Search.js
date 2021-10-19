import React from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <label>Movie Search</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search.value}
      ></input>
    </div>
  );
}

export default Search;
