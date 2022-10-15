import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      <SearchBar setTerm={setSearchTerm} />
      <MovieList
        movies={
          movies.filter(
            (m) => m
              .title
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
        }
      />
    </>
  );
}
