import React, { Component } from "react";

class Log extends Component {
  submitFormSignIn() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail: document.getElementById("mail").value,
        username: document.getElementById("username").value,
        pass_word: document.getElementById("pass_word").value,
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
  }

  // http://localhost:3000/api/users
  render() {
    let res = <div className="container"></div>;
    switch (this.props.log) {
      case true:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Log in</h1>
            <div className="box">
              <form action="" method="GET">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="eg : StarLord"
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text"></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  {/* <p class="help is-success">This username is available</p> */}
                </div>
                <button className="button is-primary" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        );
        break;
      case false:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Sign in</h1>
            <div className="box">
              <form name="signInForm" id="signInForm">
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
                    <input className="input" type="text"></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  {/* <p className="help is-success">This username is available</p> */}
                </div>
                <button
                  className="button is-primary"
                  onClick={() => this.submitFormSignIn()}
                >
                  Sign in
                </button>
              </form>
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
              onClick={() => this.props.onLog(false)}
            >
              GET STARTED !
            </button>
            <p>
              Or{" "}
              <a href="#" onClick={() => this.props.onLog(true)}>
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
