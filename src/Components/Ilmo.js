import React, { Component } from "react";
import Countdown from "react-countdown";
import Ilmoformi from "./Ilmoformi";
import Laskuri from "./Laskuri";
import api from "../api";

class Ilmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      invited: props.data.kutsuvieras,
      registrationStatus: null,
      success: null,
      fitting: [],
      reserve: [],
      startDate: null,
    };
  }
  render() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return (
          <Ilmoformi
            lang={this.props.data.lang}
            registrationStatus={this.state.registrationStatus}
            invited={this.props.data.kutsuvieras}
            fitting={this.state.fitting}
            reserve={this.state.reserve}
          />
        );
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
      <>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <section id="ilmo">
            <div className="row section-head">
              {this.props.data.lang === "en" ? (
                <>
                  <h2>Sign Up</h2>
                  <p>
                    Signing up for the annual ball starts for Asteriski members
                    and other guests on 16.8.2022. The dinner card costs 100
                    euros for members and 110 euros for other guests. You can
                    also purchase the endorsement dinner card which costs 150
                    euros. Note that your company should sign up separately.
                  </p>
                  <p>
                    Tickets to the herring breakfast are sold separately and
                    they cost 20 euros.
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
                  <h2>Ilmoittautuminen</h2>
                  <p>
                    Vuosijuhlien ilmoittautuminen Asteriskin jäsenistölle sekä
                    muille vieraille aukeaa 16.8.2022. Vuosijuhlien
                    illalliskortin hinta jäsenelle on 100€ ja muille vieraille
                    110€. Vaihtoehtoisesti voit ostaa vuosijuhlien kannatus
                    illalliskortin, jonka hinta on 150€. Huomioithan, että
                    avecin tulee ilmoittautua erikseen.
                  </p>
                  <p>
                    Vuosijuhlien illalliskortin lisäksi on mahdollista ostaa
                    lippu sunnuntaina järjestettävälle silliaamiaiselle hintaan
                    20€.
                  </p>
                  <p>
                    Halutessasi voit osallistua vuosijuhlille myös nakkien
                    muodossa.{" "}
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
              <Countdown date={this.state.startDate} renderer={renderer} />
            </div>
          </section>
        )}
      </>
    );
  }
  async componentDidMount() {
    try {
      let ilmo = await api.get();
      ilmo = ilmo.data;
      let startDate = ilmo.main_start_date;
      if (this.state.invited) {
        startDate = ilmo.invited_start_date;
      }

      this.setState({
        ...this.state,
        ...{
          isLoading: false,
          success: true,
          startDate: startDate,
          registrationStatus: ilmo.registration_status,
          fitting: ilmo.fitting_participants,
          reserve: ilmo.reserve_participants,
        },
      });
    } catch (e) {
      this.setState({
        ...this.state,
        ...{
          success: false,
          isLoading: false,
          startDate: new Date(2022, 7, 18, 13, 37),
          registrationStatus: "NOT_STARTED",
        },
      });
    }
  }
}

export default Ilmo;
