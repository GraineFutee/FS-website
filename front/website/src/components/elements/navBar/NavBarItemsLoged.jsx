import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBarItemsLoged extends Component {
  render() {
    return (
      <>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-item is-tab">{this.props.username}</a>
          <div className="navbar-dropdown is-right">
            <Link
              className="navbar-item"
              to={{
                pathname: "/profil",
                search: `?id=${this.props.user_id}`,
              }}
            >
              Profile
            </Link>
            <a className="navbar-item" onClick={this.props.logOut}>
              Log Out
            </a>
            <hr className="navbar-divider"></hr>
            <a className="navbar-item">Report an issue</a>
          </div>
        </div>
        <Link
          to={{
            pathname: "/profil",
            search: `?id=${this.props.user_id}`,
          }}
        >
          <div>
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
          </div>
        </Link>
      </>
    );
  }
}

export default NavBarItemsLoged;
