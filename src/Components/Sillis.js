import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

class Sillis extends Component {
  render() {
    return (
      <section id="sillis">
        <ParticlesBg color="#fff" type="lines" bg={true} />
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Sillis</h1>
              <p>
                Hyvä juhlaväki! Naiset, herrat ja kaikki muut! Lapset ja ja
                lapsenmieliset!
              </p>

              <p>
                Raota värikkään teltan verhoa. Haista suolaiset herkut,
                paukkuvat popkornit, makeat houkutukset. Kuule leikkisä
                musiikki, hämmästyneet henkäykset ja lämmin nauru!
              </p>

              <p>Se on ihmeellinen, se on uskomaton, se on fantastinen:</p>

              <p>Asteriskin sirkusteemainen silliaamiainen!</p>

              <p>
                Astu sisään ja koe valot ja pelit ja herkut ja riemu! Ehkä
                sirkuksen maaginen tunnelma taikoo venähtäneen illan
                väsymyksenkin kadoksiin? Tai ainoa pelle ei tällä kertaa
                katsokaan peilistä? Astu siis sillisbussiin ja koe upea,
                henkeäsalpaava, hämmästyttävä - sirkus!
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Sillis;
