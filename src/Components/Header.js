import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

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
                Alkuun
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#tietoa">
                Tietoa
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#uutiset">
                Uutiset
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#ohjelma">
                Ohjelma
              </a>
            </li>

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

            <li>
              <a className="smoothscroll" href="#footer">
                Sponsorit
              </a>
            </li>
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
                Tervetuloa juhlistamaan rakkaan ainejärjestömme Asteriski ry:n
                50-vuotista taivalta lauantaina 26. helmikuuta 2022 vuosijuhlien
                merkeissä. Vuosijuhlia ennen järjestetään vuosijuhlaviikko
                21.2.-24.2., jonka ohjelman löydät <a className="smoothscroll" href="#ohjelma">täältä</a>
                .
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
