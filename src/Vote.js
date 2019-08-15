import React from "react";

const Vote = ({ vote }) => {
  return (
    <div className="Joke__vote vote">
      <span className="vote__arrow">&uarr;</span>
      <span className="vote__count">{vote}</span>
      <span className="vote__arrow">&darr;</span>
    </div>
  );
};

export default Vote;
