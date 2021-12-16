import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <div className="sponsors">
                <h1>Yhteistyössä mukana</h1>
                <ul>
                  <li>Nitor</li>
                  <li>Mehiläinen</li>
                  <li>Sofokus</li>
                  <li>Solita</li>
                  <li>ATR soft</li>
                </ul>
              </div>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Asteriski ry</li>
              </ul>
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
