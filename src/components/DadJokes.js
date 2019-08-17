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
  async componentDidMount() {
    const lsItems = await this.retrieveFromLS();

    lsItems[0] !== null
      ? this.setState({ jokes: lsItems[0], jokesPage: lsItems[1] })
      : this.fetchJokes();
  }
  async componentDidUpdate() {
    this.saveToLS(this.state.jokes, this.state.jokesPage);
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
    const jokes = response.data.results
      .slice(0, this.props.jokesPerRequest)
      .map(joke => {
        return { txt: joke.joke, vote: 0, id: joke.id, newJoke: true };
      });
    this.setState(state => {
      return {
        jokes: this.sortJokesByVotes([...state.jokes, ...jokes]),
        loading: false,
        jokesPage: state.jokesPage + 1
      };
    });
  };

  changeVote = (vote, id) => {
    return this.setState(state => {
      const newJokes = state.jokes.map(joke => {
        if (joke.id === id) {
          return { ...joke, vote: joke.vote + (vote === "up" ? 1 : -1) };
        }
        return joke;
      });

      return { jokes: this.sortJokesByVotes(newJokes) };
    });
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

  sortJokesByVotes = jokes => {
    return jokes.sort((a, b) => b.vote - a.vote);
  };

  changeViewedStatus = id => {
    const jokes = this.state.jokes.map(joke => {
      if (joke.id === id) {
        joke.newJoke = false;
      }
      return joke;
    });
    this.setState({ jokes });
  };

  saveToLS = async (jokes, jokesPage) => {
    await window.localStorage.setItem("jokes", JSON.stringify(jokes));
    await window.localStorage.setItem("jokesPage", jokesPage);
  };
  retrieveFromLS = () => {
    const lsItem = window.localStorage.getItem("jokes");
    const lsJokesPage = window.localStorage.getItem("jokesPage");
    return [JSON.parse(lsItem), JSON.parse(lsJokesPage)];
  };

  render() {
    return (
      <div className="DadJokes">
        {!this.state.loading ? (
          <>
            <Sidebar getNewJokes={this.fetchJokes} />
            <Board>
              <Jokes
                jokes={this.state.jokes}
                changeVote={this.changeVote}
                indicatorsChange={this.indicatorsChange}
                changeViewedStatus={this.changeViewedStatus}
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
