import React from 'react';
import styled from 'styled-components';

export default function Movie({ item }) {
  return (
    <Box>
      <span>{item.title}</span>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: 30%;
`;