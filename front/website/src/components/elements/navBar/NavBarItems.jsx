import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBarItems() {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-item is-tab" to="/logIn">
        Log In
      </Link>
      <div className="navbar-dropdown is-right">
        <Link className="navbar-item is-tab" to="/signIn">
          Sign In
        </Link>
        <hr className="navbar-divider"></hr>
        <a className="navbar-item">Report an issue</a>
      </div>
    </div>
  );
}
