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
            {this.props.data.lang === "en" ? (
              <>
                <h2>About</h2>

                <p>
                  Asteriski ry celebrates its 50th anniversary with the grand
                  annual ball on Saturday 26th of February 2022. The annual ball
                  begins with the cocktail party, which is hosted in the lounge
                  of Agora building at the University of Turku. The cocktail
                  party is followed by the main event at Turku VPK house and the
                  afterparty is held in a secret location. Traveling between the
                  destinations will be done via organized bus rides.
                </p>
                <p>
                  On the following morning on Sunday 27th of February 2022 the
                  herring breakfast will be taking place in a secret location.
                  Transportation to the herring breakfast will leave from XX:XX
                  at Y.
                </p>
                <p>
                  The dress code of the annual ball is a white tie or dark
                  lounge suit for men and an evening gown for women as well as
                  academic medals or ribbons.
                </p>
              </>
            ) : (
              <>
                <h2>Tietoa</h2>

                <p>
                  Asteriski ry:n 50-vuotisjuhlia juhlitaan juhlavasti lauantaina
                  26. helmikuuta 2022. Vuosijuhlat alkavat
                  cocktail-tilaisuudella, joka järjestetään Turun Yliopiston
                  tiloissa Agora rakennuksen aulassa. Cocktail-tilaisuudesta
                  siirrymme pääjuhlaan, joka järjestetään Turun VPK-talolla.
                  Jatkot pidetään salaisessa jatkopaikassa. Matkat eri paikkojen
                  välillä taittuu yhteisillä bussikuljetuksilla.
                </p>
                <p>
                  Seuraavana päivänä sunnuntaina 27. helmikuuta 2022 vietetään
                  salaisessa paikassa sillistä. Sinne bussikuljetukset lähtevät
                  kello XX:XX paikasta Y.
                </p>
                <p>
                  Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä
                  akateemiset kunniamerkit. Lisää vuosijuhlan etiketistä voit
                  lukea{" "}
                  <a className="smoothscroll" href="#etiketti">
                    täältä
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Tietoa;
