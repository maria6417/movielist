import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      {
        title: movie,
      },
    ]);
  };

  return (
    <>
      <AddMovie add={addMovie} />
      <MovieList
        movies={movies}
      />
    </>
  );
}
