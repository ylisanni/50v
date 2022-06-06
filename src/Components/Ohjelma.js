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
                <h2>Cocktail party</h2>
                <p>
                  The cocktail party will be held at the University starting at
                  14:30. The cocktail party consists of welcome toast,
                  appetizers, and greetings from invited guests. All
                  participants of the annual ball are welcome to attend the
                  event. Transportation to the main event will be arranged.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Cocktail party sponsor:
                  </div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.mehilainen.fi/"
                      target="_blank"
                    >
                      <img
                        alt="Mehiläinen logo"
                        src="images/companies/mehilainen.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Main Event</h2>
                <p>
                  The main event will take place in Turku VPK house (Eskelinkatu
                  5, 20100 Turku). Doors open at 17:00 and the event will start
                  at 18:00. During the main event, we will honor our cherished
                  student organization with speeches and greetings. We will
                  enjoy a three-course dinner and acknowledge the people who
                  have taken part in shaping Asteriski into what it is today.
                  The dinner is followed by a ballroom dance.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Main event sponsors:
                  </div>
                  <div
                    className="ohjelma-sponsor"
                    style={{ display: "inline-block" }}
                  >
                    <a
                      rel="noreferrer"
                      href="https://nitor.com/"
                      target="_blank"
                    >
                      <img alt="Nitor logo" src="images/companies/nitor.png" />
                    </a>
                  </div>
                  <div
                    className="ohjelma-sponsor"
                    style={{ display: "inline-block" }}
                  >
                    <a
                      rel="noreferrer"
                      href="https://www.solita.fi/"
                      target="_blank"
                    >
                      <img
                        alt="Solita logo"
                        src="images/companies/solita.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Afterparty</h2>
                <p>
                  Bus transportation will take us to the afterparty in a secret
                  location after the main event has ended.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Afterparty sponsor:
                  </div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.sofokus.com/"
                      target="_blank"
                    >
                      <img
                        alt="Sofokus logo"
                        src="images/companies/sofokus.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Herring Breakfast</h2>
                <p>
                  The herring breakfast aka “sillis” is organized the following
                  day on Sunday 2nd of October. In a mysterious location, you
                  will be welcomed with plentiful breakfast and drinks! You
                  don’t want to miss this!
                </p>
                <p>
                  The dress code is more relaxed; theme-appropriate outfits or
                  overalls are accepted. We recommend bringing a swimsuit and a
                  towel.
                </p>
                <p>
                  We will move to Sillis by bus on Sunday morning. The exact
                  time and location for the departure will be released later. Be
                  on time!
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Herring Breakfast sponsor:
                  </div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.atrsoft.com/"
                      target="_blank"
                    >
                      <img alt="ATR logo" src="images/companies/atr.png" />
                    </a>
                  </div>
                </p>
              </>
            ) : (
              <>
                <h1>Ohjelma</h1>
                <h2>Cocktail-tilaisuus</h2>
                <p>
                  Pääjuhlaa edeltää cocktail-tilaisuus, joka pidetään Turun
                  yliopiston tiloissa kello 14:30 alkaen. Cocktail-tilaisuuden
                  ohjelmaan kuuluu tervetuliaismalja, cocktailpalat sekä
                  kutsuvieraiden esittämät tervehdykset Asteriskille. Kaikki
                  vuosijuhlaosallistujat ovat tervetulleita seuraamaan
                  tilaisuutta. Cocktail-tilaisuudesta lähtee kuljetukset itse
                  pääjuhlaan.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Cocktail-tilaisuudessa mukana:
                  </div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.mehilainen.fi/"
                      target="_blank"
                    >
                      <img
                        alt="Mehiläinen logo"
                        src="images/companies/mehilainen.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Pääjuhla</h2>
                <p>
                  Asteriskin 50-vuotisjuhlien pääjuhlaa vietetään Turun VPK:n
                  talolla (Eskelinkatu 5, 20100 Turku). Ovet tilaisuuteen
                  avataan klo 17:00 ja itse pääjuhla alkaa klo 18:00. Juhlassa
                  kunnioitamme rakasta ainejärjestöämme puhein ja tervehdyksin.
                  Lisäksi nautimme kolmen ruokalajin illallisen ja jaamme
                  tunnustuksia henkilöille, jotka ovat olleet vuosien varrella
                  mukana rakentamasta Asteriskista sellaisen kuin se tänä
                  päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset
                  tanssit.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Pääjuhlassa mukana:
                  </div>
                  <div
                    className="ohjelma-sponsor"
                    style={{ display: "inline-block" }}
                  >
                    <a
                      rel="noreferrer"
                      href="https://nitor.com/"
                      target="_blank"
                    >
                      <img alt="Nitor logo" src="images/companies/nitor.png" />
                    </a>
                  </div>
                  <div
                    className="ohjelma-sponsor"
                    style={{ display: "inline-block" }}
                  >
                    <a
                      rel="noreferrer"
                      href="https://www.solita.fi/"
                      target="_blank"
                    >
                      <img
                        alt="Solita logo"
                        src="images/companies/solita.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Jatkot</h2>
                <p>
                  Pääjuhlan loputtua vieraat kuljetetaan salaiseen
                  jatkopaikkaan.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">Jatkoilla mukana:</div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.sofokus.com/"
                      target="_blank"
                    >
                      <img
                        alt="Sofokus logo"
                        src="images/companies/sofokus.png"
                      />
                    </a>
                  </div>
                </p>
                <h2>Sillis</h2>
                <p>
                  Pääjuhlaa ja jatkoja seuraa sunnuntaina 2. lokakuuta eeppinen
                  sirkusteemainen silliaamiainen, jota et halua missata!
                </p>
                <p>
                  Silliksellä juhlakansaa odottaa maittava aamiainen sekä
                  olotiloja tasoittavaa juomaa. Otathan sillikselle mukaan
                  pyyhkeen sekä uima-asun saunomista varten.{" "}
                  <b>
                    Yleisen viihtyvyyden vuoksi huomioithan, että pesutiloissa
                    on uima-asu pakko!
                  </b>
                </p>
                <p>
                  Sillikselle kuljemme yhteisellä bussikuljetuksella
                  sunnuntaina. Tarkempi lähtöaika ja paikka ilmoitetaan
                  myöhemmin. Ole ajoissa paikalla sillä bussit ei odota
                  myöhästelijöitä! Sillistä varten kannattaa varata rento asu.
                </p>
                <p>
                  <div className="ohjelma-sponsor-text">
                    Silliksellä mukana:
                  </div>
                  <div className="ohjelma-sponsor">
                    <a
                      rel="noreferrer"
                      href="https://www.atrsoft.com/"
                      target="_blank"
                    >
                      <img alt="ATR logo" src="images/companies/atr.png" />
                    </a>
                  </div>
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
          ) : (
            <div className="three columns">
              <h2 style={{ color: "var(--white)" }}>
                Schedule of the annual ball week
              </h2>
              <p>Schedule will be published later.</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Ohjelma;
