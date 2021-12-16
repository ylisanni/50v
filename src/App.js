import React, { Component } from "react";
import $ from "jquery";
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
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData} />
        <Tietoa data={this.state.resumeData} />
        <Ohjelma data={this.state.resumeData} />
        <Etiketti data={this.state.resumeData} />
        <Sillis data={this.state.resumeData} />
        <Ilmo data={this.state.resumeData} />
        <Footer data={this.state.resumeData} />
      </div>
    );
  }
}

export default App;
