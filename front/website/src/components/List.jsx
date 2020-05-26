import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      activeTab: 1,
      list: {
        id: this.getParameterByName("id"),
        list_name: "",
        description: "",
        creation: "",
        username: "",
      },
      elements: [],
      stock: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/lists/${this.state.list.id}`)
      .then((res) => {
        console.log("Response from server :");
        console.log(res);
        console.log(res.data);
        if (res.data) {
          let elements = [];
          let stock = [];
          res.data.forEach((element) => {
            if (element.is_stock) {
              stock.push(element);
            }
            if (element.need > 0) {
              elements.push(element);
            }
          });
          this.setState({ elements });
          this.setState({ stock });
          const list = {
            id: res.data[0].id,
            list_name: res.data[0].list_name,
            description: res.data[0].description,
            creation: res.data[0].creation,
            username: res.data[0].username,
          };
          this.setState({ list });
          console.log("State updated");
          console.log(this.state.list);
        } else {
          // this.setState({ lists: null });
        }
      })
      .catch((error) => {
        console.log("here1");
        console.log("Error from server :");
        console.log(error.response);
        if (error.response) {
          this.setState({ error: error.response.data });
        }
      });
  }

  tabSwitch = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{this.state.list.list_name}</h1>
            <h2 className="subtitle">By : {this.state.list.username}</h2>
          </div>
        </div>
        <div class="tabs is-boxed is-centered is-marginless">
          <ul>
            <li className={this.state.activeTab === 1 && "is-active"}>
              <a onClick={(e) => this.tabSwitch(1)}>
                <span class="icon is-small">
                  <i class="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Description</span>
              </a>
            </li>
            <li className={this.state.activeTab === 2 && "is-active"}>
              <a onClick={(e) => this.tabSwitch(2)}>
                <span class="icon is-small">
                  <i class="fas fa-list" aria-hidden="true"></i>
                </span>
                <span>Elements</span>
              </a>
            </li>
            <li className={this.state.activeTab === 3 && "is-active"}>
              <a onClick={(e) => this.tabSwitch(3)}>
                <span class="icon is-small">
                  <i class="fas fa-cubes" aria-hidden="true"></i>
                </span>
                <span>Stock</span>
              </a>
            </li>
            <li className={this.state.activeTab === 4 && "is-active"}>
              <a onClick={(e) => this.tabSwitch(4)}>
                <span class="icon is-small">
                  <i class="fas fa-users" aria-hidden="true"></i>
                </span>
                <span>Contributors</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="tab-content has-text-dark"
          style={{ backgroundColor: "white" }}
        >
          <div
            className={this.state.activeTab === 1 && "is-active"}
            style={{ display: this.state.activeTab !== 1 && "none" }}
          >
            <div className="container">
              <div className="box">
                <h1 className="title has-text-dark">Description</h1>
                <div className="columns">
                  <div className="column">
                    <div className="box">
                      <figure className="image is-4by3">
                        <img
                          src="https://picsum.photos/800/600/?random"
                          alt={this.state.list.name}
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <p>{this.state.list.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={this.state.activeTab === 2 && "is-active"}
            style={{ display: this.state.activeTab !== 2 && "none" }}
          >
            <div className="container">
              <div className="box">
                <h1 className="title has-text-dark">Elements</h1>
                <div className="box">
                  <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Need</th>
                        <th>Unit</th>
                        <th>Buyer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.elements.map((element) => (
                        <tr>
                          <th>{element.element_name}</th>
                          <td>{element.element_description}</td>
                          <td>{element.need}</td>
                          <td>{element.unite}</td>
                          <td>None</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            className={this.state.activeTab === 3 && "is-active"}
            style={{ display: this.state.activeTab !== 3 && "none" }}
          >
            <div className="container">
              <div className="box">
                <h1 className="title has-text-dark">Stock</h1>
                <div className="box">
                  <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Unit</th>
                        <th>Stock Min</th>
                        <th>Buyer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.stock.map((element) => (
                        <tr>
                          <th>{element.element_name}</th>
                          <td>{element.element_description}</td>
                          <td>{element.stock}</td>
                          <td>{element.unite}</td>
                          <td>{element.stock_minimum}</td>
                          <td>None</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            className={this.state.activeTab === 4 && "is-active"}
            style={{ display: this.state.activeTab !== 4 && "none" }}
          >
            <h1>tab4</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default List;
