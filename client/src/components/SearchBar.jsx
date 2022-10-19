import React from 'react';

export default function SearchBar({ setTerm }) {
  const changeHandler = (e) => {
    if (e.target.value.length >= 3) {
      setTerm(e.target.value);
    } else {
      setTerm('');
    }
  };

  return (
    <div>
      <input type="text" placeholder="search..." onChange={changeHandler} />
      <button type="button">Go!</button>
    </div>
  );
}
