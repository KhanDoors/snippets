import React, { useState, useEffect } from "react";

const Test = ({ state }) => {
  //   sort books by id
  const sortedBooks = state.sort((a, b) => a.id - b.id);

  //   filter books by id
  const filteredBooks = state.filter((state) => state.id != 111);

  return (
    <div>
      hello back
      {sortedBooks.map((s, i) => (
        <h1 key={i}>{s.title}</h1>
      ))}
    </div>
  );
};

export default Test;
