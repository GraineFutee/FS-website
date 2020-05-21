import React, { Component } from "react";
import NavBar from "./components/navbar";
import Log from "./components/log";
import "./App.css";

class App extends Component {
  state = {
    log: null,
  };

  handleLog = (log) => {
    this.setState({ log });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onLog={this.handleLog} />
        <Log log={this.state.log} onLog={this.handleLog} />
      </React.Fragment>
    );
  }
}

export default App;
