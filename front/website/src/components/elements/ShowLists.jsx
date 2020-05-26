import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ShowLists extends Component {
  render() {
    return (
      <div className="row columns is-multiline">
        {this.props.lists.map((list) => (
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://picsum.photos/800/600/?random"
                    alt={list.name}
                  />
                </figure>
              </div>
              <div className="card-content">
                <Link
                  to={{
                    pathname: "/list",
                    search: `?id=${list.id}`,
                  }}
                >
                  <div className="notification is-dark">
                    <h1 className="title is-5">{list.name}</h1>
                  </div>
                </Link>
                <div className="content">{list.description}</div>
                <hr />
                <div className="columns">
                  <div className="column has-text-left">
                    <p>
                      <i class="fas fa-heart"></i> 245
                    </p>
                  </div>
                  <div className="column has-text-right">
                    <p>6 Comments</p>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <div className="card-footer-item">
                  <a href="#">
                    <i class="fas fa-heart"></i> <small>Like</small>
                  </a>
                </div>
                <div className="card-footer-item">
                  <a href="#">
                    <i class="fas fa-comment-alt"></i> <small>Comm.</small>
                  </a>
                </div>
                <div className="card-footer-item">
                  <a href="#">
                    <i class="fas fa-share"></i> <small>Share</small>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowLists;
