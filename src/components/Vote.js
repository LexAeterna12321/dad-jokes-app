import React from "react";

const Vote = ({ vote, changeVote, id }) => {
  const handleChangeVote = (vote, id) => {
    changeVote(vote, id);
  };

  return (
    <div className="Joke__vote vote">
      <span className="vote__arrow" onClick={() => handleChangeVote("up", id)}>
        &uarr;
      </span>
      <span className="vote__count">{vote}</span>
      <span
        className="vote__arrow"
        onClick={() => handleChangeVote("down", id)}
      >
        &darr;
      </span>
    </div>
  );
};

export default Vote;
