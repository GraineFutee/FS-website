import React, { Component } from "react";

class Log extends Component {
  render() {
    let res = <div className="container"></div>;
    switch (this.props.log) {
      case true:
        res = <p>It's TRUE</p>;
        break;
      case false:
        res = <p>It's FALSE</p>;
        break;
      default:
        res = (
          <div className="container has-text-centered">
            <h1 className="title">Welcome on FriendShopping</h1>
            <h2 className="subtitle">
              A remote place for your dynamic shared list
            </h2>
            <button className="button is-primary">GET STARTED !</button>
            <p>Or Log In</p>
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
