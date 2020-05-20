import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            onClick={() => this.props.onLog(null)}
            className="navbar-item"
            href="#"
          >
            FriendsShopping
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Explore</a>

            <a className="navbar-item">About</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a onClick={() => this.props.onLog(true)} className="navbar-link">
                Log In
              </a>

              <div className="navbar-dropdown is-right">
                <a
                  onClick={() => this.props.onLog(false)}
                  className="navbar-item"
                >
                  Sign-in
                </a>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
