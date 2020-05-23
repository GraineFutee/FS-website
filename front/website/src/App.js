import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import Explore from "./components/Explore";
import About from "./components/About";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

import NavBar from "./components/elements/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: null,
        username: "",
        password: "",
      },
      go: <div />,
      loged: false,
      error: "",
    };
  }

  handleLogOut = () => {
    console.log("User loged out");
    const user = { id: null, username: "", password: "" };
    this.setState({ user });
    this.setState({ loged: false });
    this.setState({ error: "" });
    this.setState({ go: <Redirect push to="/" /> });
  };

  handleLogIn = (user) => {
    console.log("New log : ");
    console.log(user);
    this.setState({ user });
    axios
      .get(`http://localhost:3001/api/users/${user.username}`)
      .then((res) => {
        console.log("Response from server :");
        console.log(res);
        console.log(res.data);
        if (user.password !== res.data.password) {
          console.log("Password incorect");
          this.setState({ error: "Password incorect" });
        } else {
          this.setState({ loged: true });
          this.setState({ error: "" });
          this.setState({ go: <Redirect push to="/" /> });
        }
      })
      .catch((error) => {
        console.log("Error from server :");
        console.log(error.response);
        if (error.response) {
          this.setState({ error: error.response.data });
        }
      });
  };

  handleSignIn = (user) => {
    console.log("New user : ");
    console.log(user);
    this.setState({ user });
    axios
      .post(`http://localhost:3001/api/users`, user)
      .then((res) => {
        console.log("Response from server :");
        console.log(res);
        console.log(res.data);
        this.setState({ error: "" });
        this.setState({ go: <Redirect push to="/logIn" /> });
      })
      .catch((error) => {
        console.log("Error from server :");
        console.log(error.response);
        if (error.response) {
          this.setState({ error: error.response.data });
        }
      });
  };
  render() {
    return (
      <Router>
        {this.state.go}
        <NavBar
          username={this.state.user.username}
          loged={this.state.loged}
          logOut={this.handleLogOut}
        />
        <main>
          <Switch>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/logIn">
              <LogIn logIn={this.handleLogIn} error={this.state.error} />
            </Route>
            <Route path="/signIn">
              <SignIn signIn={this.handleSignIn} error={this.state.error} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
