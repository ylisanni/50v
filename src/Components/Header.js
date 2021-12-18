import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import Flags from "country-flag-icons/react/3x2";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg color="#fff" type="lines" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {this.props.data.lang === "en" ? "Top" : "Alkuun"}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#tietoa">
                {this.props.data.lang === "en" ? "About" : "Tietoa"}
              </a>
            </li>

            {this.props.data.lang !== "en" ? (
              <li>
                <a className="smoothscroll" href="#uutiset">
                  Uutiset
                </a>
              </li>
            ) : null}

            <li>
              <a className="smoothscroll" href="#ohjelma">
                {this.props.data.lang === "en" ? "Program" : "Ohjelma"}
              </a>
            </li>

            {this.props.data.lang !== "en" ? (
              <>
                <li>
                  <a className="smoothscroll" href="#etiketti">
                    Etiketti
                  </a>
                </li>

                <li>
                  <a className="smoothscroll" href="#sillis">
                    Sillis
                  </a>
                </li>

                <li>
                  <a className="smoothscroll" href="#ilmo">
                    Ilmoittautuminen
                  </a>
                </li>
              </>
            ) : null}

            <li>
              <a className="smoothscroll" href="#footer">
                {this.props.data.lang === "en" ? "Sponsors" : "Sponsorit"}
              </a>
            </li>

            {this.props.data.lang === "en" ? (
              <li>
                <Link to="/" onClick={this.forceUpdate}>
                  <Flags.FI title="In Finnish" style={{ width: "18px" }} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/en" onClick={this.forceUpdate}>
                  <Flags.GB title="In English" style={{ width: "18px" }} />
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <img
                alt="main logo"
                src="/images/logo-big.png"
                className="main-logo"
              ></img>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                {this.props.data.lang === "en" ? (
                  <>
                    Welcome to celebrate the 50th anniversary of our cherished
                    student organization Asteriski ry on Saturday 26.02.2022.
                    The annual party will be preceded by the annual party week
                    21.2.-24.2. The schedule can be found{" "}
                    <a className="smoothscroll" href="#ohjelma">
                      here
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Tervetuloa juhlistamaan rakkaan ainejärjestömme Asteriski
                    ry:n 50-vuotista taivalta lauantaina 26. helmikuuta 2022
                    vuosijuhlien merkeissä. Ennen vuosijuhlia järjestetään
                    vuosijuhlaviikko 21.2.-24.2., jonka ohjelman löydät{" "}
                    <a className="smoothscroll" href="#ohjelma">
                      täältä
                    </a>
                    .
                  </>
                )}
              </h3>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#tietoa">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
