import React, { Component } from "react";

class MiniLaskuri extends Component {
  render() {
    return (
      <div className="mini-laskuri">
        <div className="mini-laskuri-item">
            <span className="laskuri-text">{this.props.lang === "en" ? "Registration start in " : "Ilmoittautumisen alkuun "}</span>
            <span className="laskuri-amount">{this.pad(this.props.days)}{":"}{this.pad(this.props.hours)}{":"}{this.pad(this.props.minutes)}{":"}{this.pad(this.props.seconds)}</span>
            <i className="fa fa-clock-o"></i>
        </div>
      </div>
    );
  }

    pad(num) {
        num = num.toString();
        while (num.length < 2) num = "0" + num;
        return num;
    }
}

export default MiniLaskuri;
