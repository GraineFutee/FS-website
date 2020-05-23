import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    let res;
    if (this.props.username && this.props.loged) {
      res = (
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">{this.props.username}</a>
          <div className="navbar-dropdown is-right">
            <Link className="navbar-item" to="/lists">
              My lists
            </Link>
            <a className="navbar-item" onClick={this.props.logOut}>
              Log Out
            </a>
            <hr className="navbar-divider"></hr>
            <a className="navbar-item">Report an issue</a>
          </div>
        </div>
      );
    } else {
      res = (
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-item" to="/logIn">
            Log In
          </Link>
          <div className="navbar-dropdown is-right">
            <Link className="navbar-item" to="/signIn">
              Sign In
            </Link>
            <hr className="navbar-divider"></hr>
            <a className="navbar-link">Report an issue</a>
          </div>
        </div>
      );
    }
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              FriendShopping
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start"></div>

            <div className="navbar-end">
              <Link className="navbar-item" to="/explore">
                Explore
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {res}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
