import React, { Component } from "react";
import axios from "axios";

import ShowLists from "./elements/ShowLists";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      search: "",
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/lists")
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
  render() {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="box">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input has-text-centered"
                    type="search"
                    placeholder="Search ..."
                  />
                </div>
                <div className="control">
                  <a className="button is-info">Search</a>
                </div>
              </div>
            </div>
            <ShowLists lists={this.state.lists} />
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;
