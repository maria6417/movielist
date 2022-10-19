import React, { useState } from 'react';

export default function AddMovie({ add }) {
  const [title, setTitle] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    add(title);
    setTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Add movie title here" onChange={(e) => setTitle(e.target.value)} value={title} />
      <button type="submit">Add</button>
    </form>
  );

}