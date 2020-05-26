import React, { Component } from "react";
import axios from "axios";

import ShowLists from "./elements/ShowLists";

class Explore extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      lists: [],
      listsInitial: [],
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
          this.setState({ listsInitial: [] });
        } else {
          this.setState({ lists: res.data });
          this.setState({ listsInitial: res.data });
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

  search = () => {
    let lists = [...this.state.listsInitial];
    console.log(this.state.listsInitial);
    console.log(lists);
    const search = this.state.search;
    lists.forEach((element, index) => {
      if (
        !element.name.includes(search) &&
        !element.description.includes(search)
      ) {
        console.log(index);
        console.log(element.name);
        console.log(element.name.includes(search));
        lists.splice(index, 1);
      }
    });
    this.setState({ lists });
  };

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="box has-background-dark">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input has-text-centered"
                    type="search"
                    placeholder="Search ..."
                    onChange={(e) => (this.state.search = e.target.value)}
                  />
                </div>
                <div className="control">
                  <a className="button is-info" onClick={(e) => this.search()}>
                    Search
                  </a>
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
