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
import List from "./components/List";
import ListUpdate from "./components/ListUpdate";
import Profil from "./components/Profil";

import NavBar from "./components/elements/navBar/NavBar";
import Footer from "./components/elements/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: null,
        username: "",
        password: "",
      },
      list: {
        id: null,
        name: "Fridge",
        description: "Here is the list to keep my fridge full",
        creation: "20/10/2004",
        id_user_creator: "3",
        creator: "StarLord",
      },
      go: <div />,
      loged: false,
      error: "",
    };
  }

  handleLogOut = () => {
    this.setState({ go: "" });
    console.log("User loged out");
    const user = { id: null, username: "", password: "" };
    this.setState({ user });
    this.setState({ loged: false });
    this.setState({ error: "" });
    this.setState({ go: <Redirect push to="/" /> });
  };

  handleLogIn = (user) => {
    this.setState({ go: "" });
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
          this.setState({ user: res.data });
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
          user_id={this.state.user.id}
        />
        <main className="has-navbar-fixed-top">
          <Switch>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/list">
              <List list={this.state.user} />
            </Route>
            <Route path="/list_update">
              <ListUpdate list={this.state.user} />
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
            <Route path="/profil">
              <Profil user={this.state.user} />
            </Route>
            <Route path="/">
              <Home user={this.state.user} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
