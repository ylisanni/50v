import React, { Component } from "react";

class Etiketti extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="etiketti">
        <div className="row">
          <div className="columns twelve">
            <h1>Etiketti</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns twelve">
            <h2>Pukukoodi</h2>

            <p>
              Pukukoodina vuosijuhlissa toimii juhlapuku tai tumma puku sekä
              akateemiset kunniamerkit.
            </p>

            <p>
              Juhlapuku tarkoittaa frakkia. Tumma puku on musta puku. Tumman
              puvun kanssa tulee käyttää valkoista paitaa sekä vaaleaa tai
              helmiäistä yksiväristä solmiota.
            </p>

            <p>
              Naiselle tämä tarkoittaa täyspitkää ilta- tai juhlapukua eli vain
              kengän kärjet saavat näkyä. Laukkuna tulee toimia olkaimeton ja
              siro laukku. Pääjuhlassa lippujen läsnäollessa hartioiden tulisi
              myös olla peitettynä esimerkiksi hartiahuivilla. Hansikkaita voi
              halutessaan käyttää muuten kuin ruokaillessa.
            </p>

            <p>
              Vuosijuhlilla käytetään akateemisiksi kunniamerkeiksi määriteltyjä
              nauhoja ja merkkejä, jotka kuuluvat perinteisesti
              vuosijuhla-asuun.
            </p>

            <p>
              Kunnianauhaa kannetaan oikealta olkapäältä rinnan yli viistoon
              vasemmalle. Kunnianauhaa voi kantaa myös ruusukkeena vasemmassa
              rintapielessä. Nauha ei saa koskettaa paljasta ihoa. Juhlapuvun
              kanssa nauhaa kannetaan liivin alla. Nauhoista arvokkainta tai
              suurinta organisaatiota edustavaa kannetaan ylimpänä (esimerkiksi
              TYYn kuntanauha ylimpänä). Asteriskin jäsennauhaa tulee kantaa
              keltainen väri ylempänä. Kunniamerkkejä kannetaan ne myöntäneen
              tahon ohjeiden mukaan esimerkiksi nauhassa tai puvun vasemmassa
              rintapielessä. Asteriskin jäsennauhaa ei tule käyttää samaa aikaa
              Asteriskin kunnianauhan, ansionauhan ja ansiomerkin kanssa.
              Kunniamerkkien kanssa ei käytetä frakin taskuliinaa.
            </p>

            <p>
              Asteriskin kannatustuotteista löydät lisätietoja{" "}
              <a
                href="https://www.asteriski.fi/virallista/asteriskin-tuotteet/"
                target="_blank"
                rel="noreferrer"
              >
                täältä
              </a>
              .
            </p>

            <p>
              Eeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata
              sirkusteeman mukaista huomattavasti rennompaa vaatetusta, mitä
              rennompi ja typerämpi, sen parempi. Haalarit toimivat myös aina.
            </p>

            <h2>Vinkkejä käyttäytymiseen</h2>

            <p>
              Perinteiset hyvät käytöstavat toimivat oikein hyvin myös
              vuosijuhlilla. Keskustelu on suotavaa koko juhlan ajan
              lukuunottamatta ohjelmanumeroita sekä juhlamarsalkan ja
              laulunjohtajien puheita, jolloin juhlaväen tulee olla hiljaa.
              Laulu lähtee myös aina hiljaisuudesta.
            </p>

            <p>
              Taukojen aikana juhlakansa voi vapaasti nousta pöydästä. Muuten
              pöydästä poistumiseen kysytään lupa lähimmältä pöytäseurueelta,
              minkä jälkeen voi huomaamatta poistua juhlasalista. Liikennettä ei
              kuitenkaan pitäisi tapahtua laulujen tai ohjelmanumeroiden aikana.
            </p>

            <p>
              Myös vuosijuhlassa jokaisen laulun jälkeen sekä jonkun sitä
              ehdottaessa kohotetaan malja. Skoolattaessa laseja ei kilistellä
              yhteen vaan skoolaustoveria silmiin katsoen nostetaan laseja
              eteen. Ensin skoolataan viistosti istuvan kanssa aloittaen
              oikealle, tämän jälkeen viistosti vasempaan ja lopuksi edessä
              istuvan kanssa. Tyhjällä lasilla ei tule skoolata.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Etiketti;
