import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{this.props.list.name}</h1>
            <h2 className="subtitle">By : {this.props.list.creator}</h2>
          </div>
        </div>
        <div className="tab is-boxed is-centered main-menu" id="nav">
          <ul>
            <li data-target="pane-1" id="1">
              <a>
                <span class="icon is-small">
                  <i class="fa fa-image"></i>
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li data-target="pane-2" id="2" class="is-active">
              <a>
                <span class="icon is-small">
                  <i class="fab fa-empire"></i>
                </span>
                <span>Article</span>
              </a>
            </li>
            <li data-target="pane-3" id="3">
              <a>
                <span class="icon is-small">
                  <i class="fab fa-superpowers"></i>
                </span>
                <span>Team</span>
              </a>
            </li>
            <li data-target="pane-4" id="4">
              <a>
                <span class="icon is-small">
                  <i class="fa fa-film"></i>
                </span>
                <span>Video</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="tab--content">
          <div className="tab-pane" is="pane-1">
            <figure>
              <img
                src="https://source.unsplash.com/0_xMuEbpFAQ/400x400"
                alt="💯"
                class="cent"
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/wPMvPMD9KBI/800x600"
                alt="💯"
                class="cent"
              />
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default List;
