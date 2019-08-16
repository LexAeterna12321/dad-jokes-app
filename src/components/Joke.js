import React from "react";
import Vote from "./Vote";
import IconIndicator from "./IconIndicator";

const Joke = ({ txt, vote, changeVote, id }) => {
  return (
    <li className="Joke">
      <Vote vote={vote} changeVote={changeVote} id={id} />
      <p className="Joke__txt">{txt} </p>
      <IconIndicator />
    </li>
  );
};

export default Joke;
