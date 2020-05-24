import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import ShowLists from "./elements/ShowLists";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      error: "",
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      console.log("Getting the lists of the connected user");
      axios
        .get(`http://localhost:3001/api/users/lists/${this.props.user.id}`)
        .then((res) => {
          console.log("Response from server :");
          console.log(res);
          console.log(res.data);
          if (res.data.length === 0) {
            this.setState({ lists: [] });
          } else {
            this.setState({ lists: res.data });
            console.log("State updated");
            console.log(this.state.lists);
          }
        })
        .catch((error) => {
          console.log("here1");
          console.log("Error from server :");
          console.log(error.response);
          if (error.response) {
            this.setState({ error: error.response.data });
          }
        });
    }
  }

  render() {
    console.log(this.state.lists);
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              {this.props.user.username && `Hi ${this.props.user.username}`}
            </h1>
            <h1 className="title">Welcome on FriendShopping</h1>
            <hr />
            {!this.props.user.id && (
              <div>
                <h2 className="subtitle">
                  A remote place for your dynamic shared list
                </h2>
                <Link to="/signIn">
                  <button className="button is-link">GET STARTED !</button>
                </Link>
                <p>
                  Or <Link to="/logIn">Log In</Link>
                </p>
              </div>
            )}
            {this.props.user.id && (
              <div>
                {this.state.lists.length > 0 && (
                  <ShowLists lists={this.state.lists} />
                )}
                {this.state.lists.length === 0 && (
                  <p>It's a bit empty here...</p>
                )}
                <button className="button">Create a new list</button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
