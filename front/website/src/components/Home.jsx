import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import ShowLists from "./elements/ShowLists";

class Home extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      listsManager: [],
      listsBuyer: [],
      error: "",
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      axios
        .get(`http://localhost:3001/api/lists/manager/${this.props.user.id}`)
        .then((res) => {
          if (res.data.length === 0) {
            this.setState({ listsManager: [] });
          } else {
            this.setState({ listsManager: res.data });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ error: error.response.data });
          }
        });
      axios
        .get(`http://localhost:3001/api/lists/buyer/${this.props.user.id}`)
        .then((res) => {
          if (res.data.length === 0) {
            this.setState({ listsBuyer: [] });
          } else {
            this.setState({ listsBuyer: res.data });
          }
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ error: error.response.data });
          }
        });
    }
  }

  render() {
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
                {this.state.listsManager.length > 0 && (
                  <div className="box">
                    <h1 className="title has-text-dark">Lists you manage</h1>
                    <ShowLists lists={this.state.listsManager} />
                  </div>
                )}
                {this.state.listsBuyer.length > 0 && (
                  <div className="box">
                    <h1 className="title has-text-dark">Lists you buy</h1>
                    <ShowLists lists={this.state.listsBuyer} />
                  </div>
                )}
                {this.state.listsManager.length === 0 &&
                  this.state.listsBuyer.length === 0 && (
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
