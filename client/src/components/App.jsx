import React, { useState } from 'react';
import styled from 'styled-components';
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
    <Container>
      <h2>
        Movie List
      </h2>
      <AddMovie add={addMovie} />
      <MovieList
        movies={movies}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid grey;
  padding: 5%;
`;