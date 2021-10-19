import React from "react";

function Movies({ movies }) {
  return (
    <div className="list">
      {movies.map((movie, index) => (
        <div key={index} className="item">
          <img src={movie.Poster} alt="movie-poster"></img>
          <p>
            <b>{movie.Title}</b>
          </p>
          <p>Release: {movie.Year}</p>
          <p>
            {`Type:
            ${
              movie.Type.charAt(0).toUpperCase() +
              movie.Type.substring(1, movie.Type.length)
            }`}
          </p>
          <p>{movie.Plot}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
