import React, { useState } from 'react';
import styled from 'styled-components';

export default function WatchedTab({ watched, setWatched }) {
  const clickHandler = (e) => {
    e.target.innerText === 'Watched' ? setWatched(true) : setWatched(false);
  };

  return (
    <Container>
      <Tab clicked={watched} onClick={clickHandler}>
        Watched
      </Tab>
      <Tab clicked={!watched} onClick={clickHandler}>
        To Watch
      </Tab>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Tab = styled.div`
  color: ${props => props.clicked ? 'white' : 'black'};
  background-color: ${props => props.clicked ? 'green' : 'white'};
  border: 1px solid grey;
`;