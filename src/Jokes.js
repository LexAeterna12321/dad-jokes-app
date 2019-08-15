import React from "react";
import Joke from "./Joke";

const Jokes = () => {
  const jokes = [
    { txt: "simple joke example", vote: 0, id: "1" },
    { txt: "simple joke example 2", vote: 4, id: "2" },
    { txt: "simple joke example 3", vote: -2, id: "3" }
  ];
  return (
    <ul className="Jokes">
      {jokes.map(joke => {
        return <Joke key={joke.id} txt={joke.txt} vote={joke.vote} />;
      })}
    </ul>
  );
};

export default Jokes;
