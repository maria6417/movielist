import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default function App() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
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
