import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <section id="menu">
        <div className="row">
          <div className="twelve columns">
            {this.props.data.lang === "en" ? (
              <>
                <h2>Menu EN</h2>
                <p>Menu in english</p>
                <ul>
                  <li>fish</li>
                  <li>etc.</li>
                  <li>sausages</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Menu FI</h2>
                <p>Menu suomeksi</p>
                <ul>
                  <li>kalaa</li>
                  <li>yms.</li>
                  <li>makkaraa</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
