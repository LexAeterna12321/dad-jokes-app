import React from "react";
import Joke from "./Joke";

const Jokes = ({ jokes, changeVote }) => {
  return (
    <ul className="Jokes">
      {jokes.map(joke => {
        return (
          <Joke
            id={joke.id}
            key={joke.id}
            txt={joke.txt}
            vote={joke.vote}
            changeVote={changeVote}
          />
        );
      })}
    </ul>
  );
};

export default Jokes;
