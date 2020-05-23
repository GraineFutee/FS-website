import React, { Component } from "react";

class LogIn extends Component {
  state = {
    user: {
      username: null,
      mail: null,
      password: null,
    },
  };
  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h1 className="title">Log In</h1>
              <hr />
              <h2 className="subtitle">Please fill this form to log in.</h2>
              <div className="box">
                <div className="field">
                  <div className="control">
                    <input
                      id="username"
                      className="input"
                      type="text"
                      placeholder="Username ..."
                      onChange={(e) =>
                        (this.state.user.username = e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      id="password"
                      className="input"
                      type="password"
                      placeholder="Password ..."
                      onChange={(e) =>
                        (this.state.user.password = e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remimber me
                  </label>
                </div>
                <p style={{ color: "red" }}>{this.props.error}</p>
                <button
                  className="button is-block is-info is-fullwidth"
                  onClick={(e) => this.props.logIn(this.state.user)}
                >
                  Log In <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogIn;
