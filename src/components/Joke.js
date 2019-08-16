import React from "react";
import Vote from "./Vote";
import IconIndicator from "./IconIndicator";

const Joke = ({ txt, vote, changeVote, id, indicatorsChange }) => {
  const { emoji } = indicatorsChange(vote);
  return (
    <li className="Joke">
      <Vote
        vote={vote}
        changeVote={changeVote}
        id={id}
        indicatorsChange={indicatorsChange}
      />
      <p className="Joke__txt">{txt} </p>
      <IconIndicator emoji={emoji} />
    </li>
  );
};

export default Joke;
