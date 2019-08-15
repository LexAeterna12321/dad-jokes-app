import React from "react";
import Vote from "./Vote";
import IconIndicator from "./IconIndicator";

const Joke = ({ txt, vote }) => {
  console.log(txt, vote);
  return (
    <li className="Joke">
      <Vote vote={vote} />
      <p className="Joke__txt">{txt} </p>
      <IconIndicator />
    </li>
  );
};

export default Joke;
