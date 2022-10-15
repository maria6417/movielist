import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => <Movie item={movie} key={movie.title} />)}
    </div>
  );
}
