import React, { Component } from "react";
import Countdown from "react-countdown";
import Ilmoformi from "./Ilmoformi";
import Laskuri from "./Laskuri";

class Ilmo extends Component {
  render() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Ilmoformi />;
      } else {
        return (
          <Laskuri
            lang={this.props.data.lang}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        );
      }
    };
    return (
      <section id="ilmo">
        <div className="row section-head">
          {this.props.data.lang === "en" ? (
            <>
              <h1>Sign Up</h1>
              <p>
                Signing up for the annual ball starts for Asteriski members and
                other guests on 16.8.2022. The dinner card costs 100 euros for
                members and 110 euros for other guests. You can also purchase
                the endorsement dinner card which costs 150 euros. Note that
                your company should sign up separately.
              </p>
              <p>
                Tickets to the herring breakfast are sold separately and they
                cost 20 euros.
              </p>
              <p>
                You can also attend the Annual Ball as a volunteer.{" "}
                <a
                  href="https://nakit.asteriski.fi"
                  target="_blank"
                  rel="noreferrer"
                >
                  More info about volunteering
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h1>Ilmoittautuminen</h1>
              <p>
                Vuosijuhlien ilmoittautuminen Asteriskin jäsenistölle sekä
                muille vieraille aukeaa 16.8.2022. Vuosijuhlien illalliskortin
                hinta jäsenelle on 100€ ja muille vieraille 110€.
                Vaihtoehtoisesti voit ostaa vuosijuhlien kannatus
                illalliskortin, jonka hinta on 150€. Huomioithan, että avecin
                tulee ilmoittautua erikseen.
              </p>
              <p>
                Vuosijuhlien illalliskortin lisäksi on mahdollista ostaa lippu
                sunnuntaina järjestettävälle silliaamiaiselle hintaan 20€.
              </p>
              <p>
                Halutessasi voit osallistua vuosijuhlille myös nakkien muodossa.{" "}
                <a
                  href="https://nakit.asteriski.fi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lisätietoja nakittautumisesta
                </a>
                .
              </p>
            </>
          )}
        </div>
        <div className="row">
          <div className="columns twelve">
            <Countdown
              date={new Date(2022, 7, 18, 13, 37)}
              renderer={renderer}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Ilmo;
