import React, { Component } from "react";
import NavBar from "./components/navbar";
import Log from "./components/log";
import NavBarLoged from "./components/navbarLoged";
import Welcome from "./components/welcome";
import "./App.css";

class App extends Component {
  state = {
    log: null,
    user: null,
  };

  handleLog = (log, user) => {
    this.setState({ log });
    this.setState({ user });
  };

  render() {
    let res = "";
    if (this.state.user === null) {
      res = (
        <React.Fragment>
          <NavBar onLog={this.handleLog} />
          <Log log={this.state.log} onLog={this.handleLog} />
        </React.Fragment>
      );
    } else {
      res = (
        <React.Fragment>
          <NavBarLoged onLog={this.handleLog} user={this.state.user} />
          <Log log={this.state.log} onLog={this.handleLog} />
        </React.Fragment>
      );
    }
    return res;
  }
}

export default App;
