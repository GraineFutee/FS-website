import React, { Component } from "react";
import ShowListsProfile from "./elements/ShowListsProfile";
import axios from "axios";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: this.getParameterByName("id"),
        username: "",
      },
    };
  }

  componentDidMount() {
    if (this.state.user.id) {
      console.log("Getting the lists of the connected user");
      axios
        .get(`http://localhost:3001/api/users/byid/${this.state.user.id}`)
        .then((res) => {
          console.log("Response from server :");
          console.log(res);
          console.log(res.data);
          this.setState({ user: res.data });
          console.log("State updated");
          console.log(this.state.user);
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

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="box">
              <figure class="avatar">
                <img
                  style={{
                    margin: "20px",
                    padding: "3px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 2px black",
                  }}
                  src="https://picsum.photos/300/300/?random"
                />
              </figure>
              <h1 className="title has-text-dark is-1">
                {this.state.user.username}
              </h1>
              <hr />
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <h1 className="title has-text-dark">About</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus, necessitatibus amet officiis omnis provident
                      voluptate qui laborum optio ab molestias sed quisquam unde
                      sapiente in quam non totam? Sapiente, minima?
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <h1 className="title has-text-dark">Friends</h1>
                    <div className="columns">
                      <div className="column">
                        <figure class="avatar">
                          <img
                            style={{
                              margin: "6px",
                              padding: "2px",
                              borderRadius: "50%",
                              boxShadow: "0px 0px 1 px black",
                            }}
                            src="https://picsum.photos/35/35/?random"
                          />
                        </figure>
                        <p>Roger</p>
                      </div>
                      <div className="column">
                        <figure class="avatar">
                          <img
                            style={{
                              margin: "6px",
                              padding: "2px",
                              borderRadius: "50%",
                              boxShadow: "0px 0px 1 px black",
                            }}
                            src="https://picsum.photos/35/35/?random"
                          />
                        </figure>
                        <p>Roger</p>
                      </div>

                      <div className="column">
                        <figure class="avatar">
                          <img
                            style={{
                              margin: "6px",
                              padding: "2px",
                              borderRadius: "50%",
                              boxShadow: "0px 0px 1 px black",
                            }}
                            src="https://picsum.photos/35/35/?random"
                          />
                        </figure>
                        <p>Roger</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="columns">
                  <div className="column is-two-thirds">
                    <div className="box">
                      <h1 className="title has-text-dark">Feed</h1>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <h1 className="title has-text-dark">Lists</h1>
                      <ShowListsProfile user={this.state.user} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profil;
