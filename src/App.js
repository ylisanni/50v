import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tietoa from "./Components/Tietoa";
import Ohjelma from "./Components/Ohjelma";
import Etiketti from "./Components/Etiketti";
import Sillis from "./Components/Sillis";
import Ilmo from "./Components/Ilmo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header data={this.state} />
        <Tietoa data={this.state} />
        <Ohjelma data={this.state} />
        <Etiketti data={this.state} />
        <Sillis data={this.state} />
        <Ilmo data={this.state} />
        <Footer data={this.state} />
      </div>
    );
  }
}

export default App;
