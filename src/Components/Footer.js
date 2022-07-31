import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <a href="https://www.asteriski.fi/">
                <ul className="copyright">
                  <li>&copy; Copyright 2022 Asteriski ry</li>
                  <li>
                    <img
                      className="asteriskilogo"
                      src="/images/icon-512x512.webp"
                      alt="Asteriski logo"
                    />
                  </li>
                </ul>
              </a>
            </div>
          </Fade>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
