import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Board from "./Board";

export class DadJokes extends Component {
  render() {
    return (
      <div className="DadJokes">
        <Sidebar />
        <Board />
      </div>
    );
  }
}

export default DadJokes;
