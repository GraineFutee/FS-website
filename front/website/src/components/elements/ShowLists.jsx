import React, { Component } from "react";

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
                <div className="notification is-dark">
                  <h1 className="title is-5">{list.name}</h1>
                </div>
                <div className="content">{list.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowLists;
