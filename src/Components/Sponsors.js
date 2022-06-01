import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <section id="sponsors">
        <div className="row">
          <Fade bottom>
            <div className="sponsors">
              <h1>
                {this.props.data.lang === "en"
                  ? "Sponsors"
                  : "Yhteistyössä mukana"}
              </h1>
              <div className="sponsors-grid">
                <a rel="noreferrer" href="https://nitor.com/" target="_blank">
                  <img alt="Nitor logo" src="images/companies/nitor.png" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.atrsoft.com/"
                  target="_blank"
                >
                  <img alt="ATR logo" src="images/companies/atr.png" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.sofokus.com/"
                  target="_blank"
                >
                  <img alt="Sofokus logo" src="images/companies/sofokus.png" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.solita.fi/"
                  target="_blank"
                >
                  <img alt="Solita logo" src="images/companies/solita.png" />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.mehilainen.fi/"
                  target="_blank"
                >
                  <img
                    alt="Mehiläinen logo"
                    src="images/companies/mehilainen.png"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Footer;
