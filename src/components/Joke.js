import React from "react";
import Vote from "./Vote";
import IconIndicator from "./IconIndicator";

const Joke = ({
  txt,
  vote,
  changeVote,
  id,
  indicatorsChange,
  newJoke,
  changeViewedStatus
}) => {
  const { emoji } = indicatorsChange(vote);
  return (
    <li
      className="Joke"
      onTouchStart={() => changeViewedStatus(id)}
      onMouseDown={() => changeViewedStatus(id)}
    >
      <Vote
        vote={vote}
        changeVote={changeVote}
        id={id}
        indicatorsChange={indicatorsChange}
      />
      <p className="Joke__txt">{txt} </p>
      {newJoke && <span className="Joke__new-indicator">NEW</span>}
      <IconIndicator emoji={emoji} />
    </li>
  );
};

export default Joke;
