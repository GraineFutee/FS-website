import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBarItems from "./NavBarItems";
import NavBarItemsLoged from "./NavBarItemsLoged";

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav
          className="navbar is-transparent is-fixed-top "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              FriendShopping
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start"></div>

            <div className="navbar-end">
              <Link className="navbar-item is-tab" to="/explore">
                Explore
              </Link>
              <Link className="navbar-item is-tab" to="/about">
                About
              </Link>
              {!this.props.loged && <NavBarItems />}
              {this.props.user_id && this.props.loged && (
                <NavBarItemsLoged
                  username={this.props.username}
                  user_id={this.props.user_id}
                  loged={this.props.loged}
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
