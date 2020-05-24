import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <h1 className="title is-1">Contact Us</h1>
                <p className="is-size-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  eligendi soluta voluptate facere molestiae consequatur.
                </p>
                <div className="social-media">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="button is-dark is-large"
                  >
                    <i class="fab fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="button is-dark is-large"
                  >
                    <i class="fab fa-instagram-square" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="button is-dark is-large"
                  >
                    <i class="fab fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="column is-one-third has-text-left">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Name ..."
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Email ..."
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-medium"
                      placeholder="Message ..."
                    ></textarea>
                  </div>
                </div>
                <div className="control">
                  <button
                    type="submit"
                    className="button is-link is-fullwidth has-text-weight-medium is-medium"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
