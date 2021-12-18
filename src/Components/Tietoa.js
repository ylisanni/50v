import React, { Component } from "react";

class Tietoa extends Component {
  render() {
    return (
      <section id="tietoa">
        <div className="row">
          <div className="three columns">
            <img
              className="asteriskilogo"
              src="/images/asteriskilogo.png"
              alt="Asteriski logo"
            />
          </div>
          <div className="nine columns main-col">
            <h2>Tietoa</h2>

            <p>
              Asteriski ry:n 50-vuotisjuhlia juhlitaan juhlavasti lauantaina 26.
              helmikuuta 2022. Vuosijuhlat alkavat cocktail-tilaisuudella, joka
              järjestetään Turun Yliopiston tiloissa Agora rakennuksen aulassa.
              Cocktail-tilaisuudesta siirrymme pääjuhlaan, joka järjestetään
              Turun VPK-talolla ja jatkot pidetään salaisessa jatkopaikassa.
              Matkat eri paikkojen välillä taittuu yhteisillä
              bussikuljetuksilla.
            </p>
            <p>
              Seuraavana päivänä sunnuntaina 27. helmikuuta 2022 vietetään
              salaisessa paikassa sillistä, jonne bussikuljetukset lähtevät
              kello X paikasta X.
            </p>
            <p>
              Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä
              akateemiset kunniamerkit. Lisää vuosijuhlan etiketistä voit lukea{" "}
              <a className="smoothscroll" href="#etiketti">
                täältä
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Tietoa;
