import React, { Component } from "react";

class Tarjoukset extends Component {
  render() {
    return (
      <section id="tarjoukset">
        <div className="row">
          {this.props.data.lang === "en" ? (
            <>
              <h2>Offers</h2>
              <h3>White tie</h3>
              <p>
                buy nice suit
              </p>
            </>
          ) : (
            <>
              <h2>Tarjoukset</h2>
              <h3>Frakkeja</h3>
              <p>
                Frakkejeja halavalla
              </p>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Tarjoukset;
