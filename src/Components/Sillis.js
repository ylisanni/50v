import React, { Component } from "react";

class Sillis extends Component {
  render() {
    if (this.props.data.lang === "en") return null;
    return (
      <section id="sillis">
        <div className="sillisTop"></div>
        <div className="row">
          <div className="twelve columns">
            <h1>Sillis</h1>
            <p>
              Hyvä juhlaväki! Naiset, herrat ja kaikki muut! Lapset ja ja
              lapsenmieliset!
            </p>

            <p>
              Raota värikkään teltan verhoa. Haista suolaiset herkut, paukkuvat
              popkornit, makeat houkutukset. Kuule leikkisä musiikki,
              hämmästyneet henkäykset ja lämmin nauru!
            </p>

            <p>Se on ihmeellinen, se on uskomaton, se on fantastinen:</p>

            <p>Asteriskin sirkusteemainen silliaamiainen!</p>

            <p>
              Astu sisään ja koe valot ja pelit ja herkut ja riemu! Ehkä
              sirkuksen maaginen tunnelma taikoo venähtäneen illan väsymyksenkin
              kadoksiin? Tai ainoa pelle ei tällä kertaa katsokaan peilistä?
              Astu siis sillisbussiin ja koe upea, henkeäsalpaava, hämmästyttävä
              - sirkus!
            </p>
          </div>
        </div>
        <div className="sillisBottom"></div>
      </section>
    );
  }
}

export default Sillis;
