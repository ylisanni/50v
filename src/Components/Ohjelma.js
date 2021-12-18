import React, { Component } from "react";

class Ohjelma extends Component {
  render() {
    return (
      <section id="ohjelma">
        <div className="row">
          <div className="nine columns">
            <h1>Ohjelma</h1>
            <h2>Coctail</h2>
            <p>
              Pääjuhlaa edeltää cocktail-tilaisuus Agoran aulassa (Vesilinnantie
              3, Turku) alkaen klo 13:37. Tervehdyksiä aletaan ottamaan vastaan
              kello 14:00. Cocktail-tilaisuuden ohjelmaan kuuluu
              tervetuliaismalja, cocktailpalat sekä kutsuvieraiden esittämät
              tervehdykset Asteriskille. Kaikki vuosijuhlaosallistujat ovat
              tervetulleita seuraamaan tilaisuutta. Cocktail-tilaisuudesta
              lähtee kuljetukset itse pääjuhlaan.
            </p>
            <h2>Pääjuhla</h2>
            <p>
              Asteriskin 50-vuotisvuosijuhlien päätapahtumana on pääjuhla, jota
              vietetään ravintola Turun VPK:n talolla (Eskelinkatu 5, 20100
              Turku). Ovet tilaisuuteen avataan klo xx:xx ja itse juhla alkaa
              klo 18:00. Pääjuhlassa kunnioitamme rakasta ainejärjestöämme
              puhein ja tervehdyksin. Lisäksi nautimme kolmen ruokalajin
              illallisen ja jaamme tunnustuksia henkilöille, jotka ovat olleet
              vuosien varrella mukana rakentamasta Asteriskista sellaisen kuin
              se tänä päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset
              tanssit.
            </p>
            <h2>Jatkot</h2>
            <p>
              Pääjuhlan loputtua vieraat kuljetetaan salaiseen jatkopaikkaan.
            </p>
            <h2>Sillis</h2>
            <p>
              Pääjuhlaa ja jatkoja seuraa sunnuntaina 27. helmikuuta 2022
              eeppinen sirkusteemainen silliaamiainen, jota et halua missata!
              Silliksellä juhlakansaa odottaa maittava aamiainen sekä olotiloja
              tasoittavaa juomaa. Suosittelemme myös pakattavan mukaan pyyhkeen
              sekä uikkarit saunomista varten. Yhteiskuljetusbussit lähtevät
              sunnuntaina osoitteesta JOTAIN KELLO JOTAIN. Ole ajoissa paikalla
              sillä bussit ei odota myöhästelijöitä! Sillistä varten kannattaa
              varata rento asu.
            </p>
          </div>
          <div className="three columns">
            <h2 style={{color: "var(--white)"}}>Vuosijuhlaviikon ohjelma</h2>
            <p>Vuosijuhlaviikon ohjelma julkaistaan myöhemmin.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Ohjelma;
