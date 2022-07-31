import React, { Component } from "react";

class Laskuri extends Component {
  render() {
    return (
      <div className="laskuri row">
        <div className="laskuri-item columns three">
          <span className="laskuri-amount">{this.props.days}</span>{" "}
          <span className="laskuri-text">
            {this.props.lang === "en" ? "days" : "päivää"}
          </span>
        </div>
        <div className="laskuri-item columns three">
          <span className="laskuri-amount">{this.props.hours}</span>{" "}
          <span className="laskuri-text">
            {this.props.lang === "en" ? "hours" : "tuntia"}
          </span>
        </div>
        <div className="laskuri-item columns three">
          <span className="laskuri-amount">{this.props.minutes}</span>{" "}
          <span className="laskuri-text">
            {this.props.lang === "en" ? "minutes" : "minuuttia"}
          </span>
        </div>
        <div className="laskuri-item laskuri-item-last columns three">
          <span className="laskuri-amount">{this.props.seconds}</span>{" "}
          <span className="laskuri-text">
            {this.props.lang === "en" ? "seconds" : "sekuntia"}
          </span>
        </div>
      </div>
    );
  }
}

export default Laskuri;
