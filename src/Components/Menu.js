import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <section id="menu">
        <div className="row">
          <div className="twelve columns">
            {this.props.data.lang === "en" ? (
              <>
                <h2>Menu</h2>
                <h3>Starter</h3>
                <p>
                  Jerusalem artichoke soup, herbal oil, archipelago bread,
                  garlic spread
                </p>

                <h3>Main course</h3>
                <p>
                  <b>Meat:</b> overcooked beef breast and red wine sauce,
                  roasted small potatoes, baked root vegetables, pickled mustard
                  seeds, vegetable chips
                </p>
                <p>
                  <b>Fish:</b> blood orange salmon, citrus sauce, roasted small
                  potatoes, baked root vegetables, pickled mustard seeds,
                  vegetable chips
                </p>
                <p>
                  <b>Vegan:</b> melanzane, country bread, baked root vegetables,
                  pickled mustard seeds, vegetable chips
                </p>

                <h3>Dessert</h3>
                <p>Pineapple-passion chocolate cake, coffee/tea</p>
              </>
            ) : (
              <>
                <h2>Menu</h2>
                <h3>Alkuruoka</h3>
                <p>
                  Maa-artisokkakeittoa yrttiöljyä, saaristolaisleipää,
                  valkosipulilevite
                </p>

                <h3>Pääruoka</h3>
                <p>
                  <b>Liha:</b> ylikypsää naudan rintaa ja punaviinikastiketta,
                  paahdetut pikkuperunat, uunijuurekset pikkelöidyt
                  sinapinsiemenet, kasvischipsit
                </p>
                <p>
                  <b>Kala:</b> veriappelsiinilohta, citruskastiketta, paahdetut
                  pikkuperunat, uunijuurekset pikkelöidyt, sinapinsiemenet,
                  kasvischipsit
                </p>
                <p>
                  <b>Vegaani:</b> melanzane, maalaisleipää, uunijuurekset
                  pikkelöidyt sinapinsiemenet, kasvischipsit
                </p>

                <h3>Jälkiruoka</h3>
                <p>Ananas-passionsuklaakakkua, kahvi/tee </p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
