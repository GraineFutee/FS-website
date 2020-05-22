import React, { Component } from "react";
import axios from "axios";

class Log extends Component {
  state = {
    error: "",
  };

  submitFormSignIn = () => {
    const newUser = {
      username: document.getElementById("username").value,
      pass_word: document.getElementById("pass_word").value,
      mail: document.getElementById("mail").value,
    };

    if (
      newUser.pass_word ===
      document.getElementById("pass_wordConfirmation").value
    ) {
      axios
        .post(`http://localhost:3001/api/users`, newUser)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.props.onLog(true, null);
        })
        .catch((error) => {
          console.log(error.response);
          this.setState({ error: error.response.data });
        });
    } else {
      this.setState({ error: "The two passwords are differents" });
    }
  };

  submitFormLogIn = () => {
    const user = {
      username: document.getElementById("username").value,
      pass_word: document.getElementById("pass_word").value,
    };
    axios
      .get(`http://localhost:3001/api/users/${user.username}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (user.pass_word !== res.data.pass_word) {
          console.log("Password incorect");
          this.setState({ error: "Password incorect" });
        } else {
          this.props.onLog(null, res.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ error: error.response.data });
      });
  };

  // http://localhost:3000/api/users
  render() {
    let res = <div className="container"></div>;
    switch (this.props.log) {
      case true:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Log in</h1>
            <div className="box">
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="eg : StarLord"
                    name="username"
                    id="username"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    name="pass_word"
                    id="pass_word"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                {/* <p class="help is-success">This username is available</p> */}
              </div>
              <p className="help is-danger">{this.state.error}</p>
              <button
                className="button is-primary"
                onClick={this.submitFormLogIn}
              >
                Log in
              </button>
            </div>
          </div>
        );
        break;
      case false:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Sign in</h1>
            <div className="box">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="eg : StarLord@gmail.com"
                    name="mail"
                    id="mail"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="eg : StarLord"
                    name="username"
                    id="username"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    name="pass_word"
                    id="pass_word"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                {/* <p className="help is-success">This username is available</p> */}
              </div>
              <div className="field">
                <label className="label">Password confirmation</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    name="pass_wordConfirmation"
                    id="pass_wordConfirmation"
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                {/* <p className="help is-success">This username is available</p> */}
              </div>
              <p className="help is-danger">{this.state.error}</p>
              <button
                className="button is-primary"
                onClick={() => this.submitFormSignIn()}
              >
                Sign in
              </button>
            </div>
          </div>
        );
        break;
      default:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Welcome on FriendShopping</h1>
            <h2 className="subtitle">
              A remote place for your dynamic shared list
            </h2>
            <button
              className="button is-primary"
              onClick={() => this.props.onLog(false, null)}
            >
              GET STARTED !
            </button>
            <p>
              Or{" "}
              <a href="#" onClick={() => this.props.onLog(true, null)}>
                Log In
              </a>
            </p>
          </div>
        );
    }
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">{res}</div>
      </section>
    );
  }
}

export default Log;
