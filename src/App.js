import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tietoa from "./Components/Tietoa";
import Ohjelma from "./Components/Ohjelma";
import Uutiset from "./Components/Uutiset";
import Etiketti from "./Components/Etiketti";
import Sillis from "./Components/Sillis";
import Ilmo from "./Components/Ilmo";
import Sponsors from "./Components/Sponsors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang,
      kutsuvieras: props.kutsuvieras,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header data={this.state} />
        <Tietoa data={this.state} />
        <Uutiset data={this.state} />
        <Ohjelma data={this.state} />
        <Etiketti data={this.state} />
        <Sillis data={this.state} />
        <Ilmo data={this.state} />
        <Sponsors data={this.state} />
        <Footer data={this.state} />
      </div>
    );
  }
}

export default App;
