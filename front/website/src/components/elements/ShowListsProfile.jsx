import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class ShowListsProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      error: "",
    };
  }
  componentDidMount() {
    if (this.props.user.id) {
      axios
        .get(`http://localhost:3001/api/lists/all/${this.props.user.id}`)
        .then((res) => {
          if (res.data.length === 0) {
            this.setState({ lists: [] });
          } else {
            this.setState({ lists: res.data });
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
      <div className="container has-text-centered">
        {this.state.lists.map((list) => (
          <Link
            to={{
              pathname: "/list",
              search: `?id=${list.id}`,
            }}
          >
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://picsum.photos/800/600/?random"
                    alt={list.name}
                  />
                </figure>
              </div>
              <div className="card-content has-text-left">
                <h1 className="title is-5 has-text-dark">{list.name}</h1>
                <p>as {list.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default ShowListsProfile;
