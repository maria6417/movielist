import React, { useState } from 'react';
import styled from 'styled-components';

export default function WatchedTab() {
  const [watched, setWatched] = useState(true);
  const clickHandler = (e) => {
    e.target.innerText === 'Watched' ? setWatched(true) : setWatched(false);
  };

  return (
    <div>
      <Tab clicked={watched} onClick={clickHandler}>
        Watched
      </Tab>
      <Tab clicked={!watched} onClick={clickHandler}>
        To Watch
      </Tab>
    </div>
  );
}

const Tab = styled.div`
  color: ${props => props.clicked ? 'white' : 'black'};
  background-color: ${props => props.clicked ? 'green' : 'white'};
  border: 1px solid grey;
`;