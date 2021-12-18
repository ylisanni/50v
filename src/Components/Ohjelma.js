import React, { Component } from "react";

class Ohjelma extends Component {
  render() {
    return (
      <section id="ohjelma">
        <div className="row">
          <div className="nine columns">
            {this.props.data.lang === "en" ? (
              <>
                <h1>The program</h1>
                <h2>Coctail party</h2>
                <p>
                  The cocktail party will be held in the lounge of Agora
                  (Vesilinnantie 3, Turku) starting at XX:XX. Reception of
                  greetings will begin at XX:XX. The cocktail party consists of
                  the welcome toast, appetizers, and greetings from invited
                  guests. All participants of the annual ball are welcome to
                  attend the event. Transportation to the main event will be
                  arranged.
                </p>
                <h2>Main Event</h2>
                <p>
                  The main event will take place in Turku VPK house (Eskelinkatu
                  5, 20100 Turku). Doors open at XX:XX and the event will start
                  at XX:XX. During the main event, we will honor our cherished
                  student organization with speeches and greetings. We will
                  enjoy a three-course dinner and acknowledge the people who
                  have taken part in shaping Asteriski into what it is today.
                  The dinner is followed by a ballroom dance.
                </p>
                <h2>Afterparty</h2>
                <p>
                  Bus transportation will take us to the afterparty in a secret
                  location after the main event has ended.
                </p>
                <h2>Herring Breakfast</h2>
                <p>
                  The herring breakfast aka “sillis” is organized the following
                  day on Sunday 27th of February 2022. In a mysterious location,
                  you will be welcomed with plentiful breakfast and drinks! You
                  don’t want to miss this!
                </p>
                <p>
                  The dress code is more relaxed, theme-appropriate outfits or
                  overalls are accepted. We recommend bringing a swimsuit and a
                  towel.
                </p>
                <p>Transportation will leave from XX:XX at Y. Be on time!</p>
              </>
            ) : (
              <>
                <h1>Ohjelma</h1>
                <h2>Coctail</h2>
                <p>
                  Pääjuhlaa edeltää cocktail-tilaisuus Agoran aulassa
                  (Vesilinnantie 3, Turku) alkaen klo XX:XX. Tervehdyksiä
                  aletaan ottamaan vastaan kello XX:XX. Cocktail-tilaisuuden
                  ohjelmaan kuuluu tervetuliaismalja, cocktailpalat sekä
                  kutsuvieraiden esittämät tervehdykset Asteriskille. Kaikki
                  vuosijuhlaosallistujat ovat tervetulleita seuraamaan
                  tilaisuutta. Cocktail-tilaisuudesta lähtee kuljetukset itse
                  pääjuhlaan.
                </p>
                <h2>Pääjuhla</h2>
                <p>
                  Asteriskin 50-vuotisvuosijuhlien päätapahtumana on pääjuhla,
                  jota vietetään Turun VPK:n talolla (Eskelinkatu 5, 20100
                  Turku). Ovet tilaisuuteen avataan klo XX:XX ja itse juhla
                  alkaa klo XX:XX. Pääjuhlassa kunnioitamme rakasta
                  ainejärjestöämme puhein ja tervehdyksin. Lisäksi nautimme
                  kolmen ruokalajin illallisen ja jaamme tunnustuksia
                  henkilöille, jotka ovat olleet vuosien varrella mukana
                  rakentamasta Asteriskista sellaisen kuin se tänä päivänä on.
                  Pääjuhlan päätyttyä tanssitaan akateemiset tanssit.
                </p>
                <h2>Jatkot</h2>
                <p>
                  Pääjuhlan loputtua vieraat kuljetetaan salaiseen
                  jatkopaikkaan.
                </p>
                <h2>Sillis</h2>
                <p>
                  Pääjuhlaa ja jatkoja seuraa sunnuntaina 27. helmikuuta 2022
                  eeppinen sirkusteemainen silliaamiainen, jota et halua
                  missata!
                </p>
                <p>
                  Silliksellä juhlakansaa odottaa maittava aamiainen sekä
                  olotiloja tasoittavaa juomaa. Suosittelemme myös pakattavan
                  mukaan pyyhkeen sekä uima-asu saunomista varten.
                </p>
                <p>
                  Yhteiskuljetusbussit lähtevät sunnuntaina osoitteesta Y kello
                  XX:XX. Ole ajoissa paikalla sillä bussit ei odota
                  myöhästelijöitä! Sillistä varten kannattaa varata rento asu.
                </p>
              </>
            )}
          </div>
          {this.props.data.lang !== "en" ? (
            <div className="three columns">
              <h2 style={{ color: "var(--white)" }}>
                Vuosijuhlaviikon ohjelma
              </h2>
              <p>Vuosijuhlaviikon ohjelma julkaistaan myöhemmin.</p>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default Ohjelma;
