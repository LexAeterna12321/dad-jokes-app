import React from "react";
import Joke from "./Joke";

const Jokes = ({ jokes }) => {
  return (
    <ul className="Jokes">
      {jokes.map(joke => {
        return <Joke key={joke.id} txt={joke.txt} vote={joke.vote} />;
      })}
    </ul>
  );
};

export default Jokes;
