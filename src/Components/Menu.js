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
                  <li> Starter
                    Jerusalem artichoke soup, herbal oil, archipelago Bread, garlic spread </li>
                  <li>Main course
                    Meat Overcooked beef breast and red wine sauce,
                    roasted small potatoes, baked root vegetables, pickled mustard seeds, vegetable chips

                   Fish blood orange salmon, citrus sauce,
                    roasted small potatoes, baked root vegetables, pickled mustard seeds, vegetable chips

                   Vegan melanzane, country bread, baked root vegetables, pickled mustard seeds, vegetable chips </li>

                   <li>Dessert
                   pineapple-passion chocolate cake, coffee/tea </li>
                </ul>
              </>
            ) : (
              <>
                <h2>Menu FI</h2>
                <p>Menu suomeksi</p>
                <ul>
                  <li> Alkuruoka
                    maa-artisokkakeittoa yrttiöljyä, saaristolaisleipää, valkosipulilevite </li>
                  <li>Pääruoka 
                    Liha ylikypsää naudan rintaa ja punaviinikastiketta,
                    paahdetut pikkuperunat, uunijuurekset pikkelöidyt sinapinsiemenet, kasvischipsit 

                    Kala veriappelsiinilohta, citruskastiketta, paahdetut pikkuperunat, uunijuurekset pikkelöidyt,
                    sinapinsiemenet, kasvischipsit

                    Vegaani melanzane, maalaisleipää, uunijuurekset pikkelöidyt sinapinsiemenet, kasvischipsit </li>

                   <li>Jälkiruoka
                   ananas-passionsuklaakakkua, kahvi/tee </li>
          
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
