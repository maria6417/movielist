import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import SearchBar from './SearchBar';
import WatchedTab from './WatchedTab';

export default function MovieList({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  const [tab, setTab] = useState('watched');

  useEffect(() => {
    setFilteredMovies(movies.filter(
      (m) => m
        .title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, movies]);

  return (
    <div>
      <Flex>
        <WatchedTab setTab={setTab} />
        <SearchBar setTerm={setSearchTerm} />
      </Flex>
      {filteredMovies.length
        ? filteredMovies.map((movie) => <Movie item={movie} key={movie.title} tab={tab} />)
        : <div>No match found.</div>}
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;