import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Board from "./Board";
import Jokes from "./Jokes";
import LoadingSpinner from "./LoadingSpinner";
export class DadJokes extends Component {
  static defaultProps = {
    jokesPerRequest: 10
  };
  state = {
    jokes: [],
    loading: false,
    jokesPage: 1
  };
  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes = async () => {
    const API_URL = "https://icanhazdadjoke.com/search";
    this.setState({ loading: true });
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "application/json"
      },
      params: {
        limit: 10,
        page: this.state.jokesPage
      }
    });
    console.log(response.data.results);
    const jokes = response.data.results
      .slice(0, this.props.jokesPerRequest)
      .map(joke => {
        return { txt: joke.joke, vote: 0, id: joke.id };
      });
    this.setState(state => {
      return {
        jokes: [...state.jokes, ...jokes],
        loading: false,
        jokesPage: state.jokesPage + 1
      };
    });
    console.log(this.state);
  };

  changeVote = (vote, id) => {
    switch (vote) {
      case "up": {
        return this.setState(state => {
          const newJokes = state.jokes.map(joke => {
            if (joke.id === id) {
              return { ...joke, vote: joke.vote + 1 };
            }
            return joke;
          });
          return { jokes: newJokes };
        });
      }
      case "down": {
        return this.setState(state => {
          const newJokes = state.jokes.map(joke => {
            if (joke.id === id) {
              return { ...joke, vote: joke.vote - 1 };
            }
            return joke;
          });
          return { jokes: newJokes };
        });
      }
      default:
        return null;
    }
  };

  indicatorsChange = vote => {
    let indicator = { border: "vote__count", emoji: "" };

    if (vote > 5) {
      return { border: (indicator.border += "--great"), emoji: "😂" };
    } else if (vote > 3 && vote <= 5) {
      return { border: (indicator.border += "--good"), emoji: "😊" };
    } else if (vote >= -3 && vote <= 3) {
      return { border: (indicator.border += "--mediocrate"), emoji: "🤔" };
    } else if (vote < -3 && vote >= -5) {
      return { border: (indicator.border += "--bad"), emoji: "😒" };
    } else if (vote < -5) {
      return { border: (indicator.border += "--horrible"), emoji: "😔" };
    }
  };

  getNewJokes = () => {
    this.fetchJokes();
  };

  render() {
    return (
      <div className="DadJokes">
        {!this.state.loading ? (
          <>
            <Sidebar getNewJokes={this.getNewJokes} />
            <Board>
              <Jokes
                jokes={this.state.jokes}
                changeVote={this.changeVote}
                indicatorsChange={this.indicatorsChange}
              />
            </Board>
          </>
        ) : (
          <LoadingSpinner loading={this.state.loading} />
        )}
      </div>
    );
  }
}

export default DadJokes;
