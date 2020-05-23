import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome on FriendShopping</h1>
            <hr />
            <h2 className="subtitle">
              A remote place for your dynamic shared list
            </h2>
            <Link to="/signIn">
              <button className="button is-success">GET STARTED !</button>
            </Link>
            <p>
              Or <Link to="/logIn">Log In</Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
