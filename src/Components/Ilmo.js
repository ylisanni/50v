import React, {Component} from "react";
import Countdown from "react-countdown";
import Ilmoformi from "./Ilmoformi";
import Laskuri from "./Laskuri";

class Ilmo extends Component {
  render() {
    if (this.props.data.lang === "en") return null;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Ilmoformi />;
      } else {
        return (
          <Laskuri
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
          <h1>Ilmoittautuminen</h1>
        </div>
        <div className="row">
          <div className="columns twelve">
            <Countdown
              date={new Date(2022, 1, 1, 13, 37)}
              renderer={renderer}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Ilmo;
