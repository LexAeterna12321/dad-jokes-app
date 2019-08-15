import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Board from "./Board";
import Jokes from "./Jokes";

export class DadJokes extends Component {
  static defaultProps = {
    jokesPerRequest: 10
  };
  state = {
    jokes: [],
    jokesNum: 0
  };
  async componentDidMount() {
    const API_URL = "https://icanhazdadjoke.com/search";
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "application/json"
      }
    });
    const jokes = response.data.results
      .slice(0, this.props.jokesPerRequest)
      .map(joke => {
        return { txt: joke.joke, vote: 0, id: joke.id };
      });

    this.setState(state => {
      return { jokes, jokesNum: state.jokesNum + this.props.jokesPerRequest };
    });
  }

  render() {
    return (
      <div className="DadJokes">
        <Sidebar />
        <Board>
          <Jokes jokes={this.state.jokes} />
        </Board>
      </div>
    );
  }
}

export default DadJokes;
