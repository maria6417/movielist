import React, { useState } from 'react';
import styled from 'styled-components';

export default function Movie({ item, tab }) {
  const [watched, setWatched] = useState(false);
  const clickHandler = (e) => {
    setWatched(!watched);
  };

  return (
    <Box>
      <span>{item.title}</span>
      <Button type="button" onClick={clickHandler} watched={watched}>{watched ? 'Watched' : 'To Watch'}</Button>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${props => props.watched ? 'green' : 'white'};
  border: ${props => props.watched ? 'none' : '1px solid black'};
  color: ${props => props.watched ? 'white' : 'green'};
  border-radius: 5px;
  width: 70px;
`;