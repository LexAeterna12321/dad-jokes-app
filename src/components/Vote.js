import React from "react";

const Vote = ({ vote, changeVote, id, indicatorsChange }) => {
  const { border } = indicatorsChange(vote);
  const handleChangeVote = (vote, id) => {
    changeVote(vote, id);
  };
  const voteCls = `vote__count ${border}`;

  return (
    <div className="Joke__vote vote">
      <span className="vote__arrow" onClick={() => handleChangeVote("up", id)}>
        &uarr;
      </span>
      <span className={voteCls}>{vote}</span>
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
