import React, { Component } from "react";
import Countdown from "react-countdown";

class Laskuri extends Component {
  render() {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <p>ILMO</p>;
      } else {
        // Render a countdown
        return (
          <span>
            Ilmon aukeamiseen {days} päivää {hours} tuntia {minutes} minuuttia
            ja {seconds} sekuntia
          </span>
        );
      }
    };
    return (
      <>
        <Countdown date={new Date(2022, 2, 26)} renderer={renderer} />
      </>
    );
  }
}

export default Laskuri;
