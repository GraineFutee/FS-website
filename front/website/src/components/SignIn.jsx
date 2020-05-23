import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class SignIn extends Component {
  state = {
    user: {
      username: null,
      mail: null,
      password: null,
    },
  };
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h1 className="title">Sign In</h1>
              <hr />
              <h2 className="subtitle">
                Please fill this form to sign in. or,{" "}
                <Link to="/logIn">Log In</Link>
              </h2>

              <div className="box">
                <div className="field">
                  <div className="control">
                    <input
                      id="mail"
                      className="input"
                      type="email"
                      placeholder="Email ..."
                      onChange={(e) => (this.state.user.mail = e.target.value)}
                    />
                  </div>
                </div>
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
                    Suscribe to Newsletter
                  </label>
                </div>
                <p style={{ color: "red" }}>{this.props.error}</p>
                <button
                  className="button is-block is-info is-fullwidth"
                  onClick={(e) => this.props.signIn(this.state.user)}
                >
                  Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignIn;
