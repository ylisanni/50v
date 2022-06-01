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
            <h1>{this.props.data.lang === "en" ? "Etiquette" : "Etiketti"}</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns twelve">
            {this.props.data.lang === "en" ? (
              <>
                <h2>Dresscode</h2>

                <p>
                  The dress code at the annual ball is a white tie or a dark
                  lounge suit for men and an evening gown for women as well as
                  academic medals or ribbons.
                </p>

                <p>
                  A dark lounge suit refers to a black suit with a white shirt
                  and a light-colored tie. Evening gown should be full length,
                  the hemline going under the ankles. Handbag should be
                  strapless and fit the occasion. Shoulders should be covered
                  during the main event. Gloves can be worn but not during
                  dinner.
                </p>

                <p>
                  Academic decorations, such as medals and ribbons, are
                  traditionally part of the annual party attire.
                </p>

                <p>
                  Honorary ribbons are worn over the right shoulder across your
                  chest to the left. In a suit they go under the vest. When
                  wearing a tie, the honorary ribbon should go in front of the
                  tie. Honorary ribbons can also be folded into a rosette to be
                  attached to your left lapel. They should not be in touch with
                  the skin. The decoration of the highest value or representing
                  the biggest organization should be placed on the top (for
                  example student union TYY’s ribbon should be first of the
                  decorations).
                </p>

                <p>
                  Member ribbon is worn yellow stripe on upwards. Decorations
                  should be worn according to the recommendations of the
                  organization that bestowed them. Asteriski member ribbon
                  should not be used at the same time as Asteriski honorary
                  ribbon, ribbon of praise, and medal of praise. A white tie is
                  not accessorized with a handkerchief while wearing
                  decorations.
                </p>

                <p>
                  <a
                    href="https://www.asteriski.fi/virallista/asteriskin-tuotteet/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More information about Asteriski’s endorsement products
                  </a>
                  .
                </p>

                <p>
                  In our epic herring breakfast the dress code is much more
                  casual. Dress according to the circus theme, the more chill
                  and sillier the better! Or just come in your overalls. That’s
                  good too.
                </p>

                <h2>Manners</h2>

                <p>
                  The annual ball is a prestigious event, and you are expected
                  to follow proper manners. Toastmaster’s and song master’s
                  speeches should be followed quietly and attentively. However,
                  outside the official program socializing with your tableside
                  company is encouraged throughout the event. Guest speeches are
                  saved for the dedicated slot in the official program and you
                  may request permission from the toastmaster during scheduled
                  breaks. Songs can also be requested from the song master
                  during breaks only. Songs always start from silence and lyrics
                  follow given songbooks; no extra verses are sung during the
                  main event.
                </p>

                <p>
                  You may leave your table freely during the scheduled breaks.
                  Otherwise, you should request permission from your closest
                  tableside company. Don’t move during songs or speeches.
                </p>

                <p>
                  Toasting is done after each song. Toast by lifting your glass
                  and nodding towards the person you are toasting, preferably
                  making eye contact. Start by toasting with the person across
                  your right side, then left across you, and then straight in
                  front of you. Never toast with an empty glass.
                </p>
              </>
            ) : (
              <>
                <h2>Pukukoodi</h2>

                <p>
                  Pukukoodina vuosijuhlissa toimii juhlapuku tai tumma puku sekä
                  akateemiset kunniamerkit.
                </p>

                <p>
                  Juhlapuku tarkoittaa frakkia ja tumma puku on musta puku.
                  Tumman puvun kanssa tulee käyttää valkoista paitaa sekä
                  vaaleaa tai helmiäistä yksiväristä solmiota.
                </p>

                <p>
                  Naiselle tämä tarkoittaa täyspitkää ilta- tai juhlapukua eli
                  vain kengän kärjet saavat näkyä. Laukkuna tulee toimia
                  olkaimeton ja siro laukku. Pääjuhlassa lippujen läsnäollessa
                  hartioiden tulisi myös olla peitettynä esimerkiksi
                  hartiahuivilla. Hansikkaita voi halutessaan käyttää muuten
                  kuin ruokaillessa.
                </p>

                <p>
                  Vuosijuhlilla käytetään akateemisiksi kunniamerkeiksi
                  määriteltyjä nauhoja ja merkkejä, jotka kuuluvat perinteisesti
                  vuosijuhla-asuun.
                </p>

                <p>
                  Kunnianauhaa kannetaan oikealta olkapäältä rinnan yli viistoon
                  vasemmalle. Kunnianauhaa voi kantaa myös ruusukkeena
                  vasemmassa rintapielessä. Nauha ei saa koskettaa paljasta
                  ihoa. Juhlapuvun kanssa nauhaa kannetaan liivin alla.
                  Nauhoista arvokkainta tai suurinta organisaatiota edustavaa
                  kannetaan ylimpänä (esimerkiksi TYYn kuntanauha ylimpänä).
                  Asteriskin jäsennauhaa tulee kantaa keltainen väri ylempänä.
                  Kunniamerkkejä kannetaan ne myöntäneen tahon ohjeiden mukaan
                  esimerkiksi nauhassa tai puvun vasemmassa rintapielessä.
                  Asteriskin jäsennauhaa ei tule käyttää samaa aikaa Asteriskin
                  kunnianauhan, ansionauhan ja ansiomerkin kanssa.
                  Kunniamerkkien kanssa ei käytetä frakin taskuliinaa.
                </p>

                <p>
                  <a
                    href="https://www.asteriski.fi/virallista/asteriskin-tuotteet/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lisätietoa Asteriskin kannatustuotteista
                  </a>
                  .
                </p>

                <p>
                  Eeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata
                  sirkusteeman mukaista huomattavasti rennompaa vaatetusta. Mitä
                  rennompi ja typerämpi, sen parempi! Haalarit toimivat myös
                  aina.
                </p>

                <h2>Vinkkejä käyttäytymiseen</h2>

                <p>
                  Perinteiset hyvät käytöstavat toimivat oikein hyvin myös
                  vuosijuhlilla. Keskustelu on suotavaa koko juhlan ajan
                  lukuunottamatta ohjelmanumeroita sekä juhlamarsalkan ja
                  laulunjohtajien puheita, jolloin juhlaväen tulee olla hiljaa.
                  Juhlavieraiden ei ole suotavaa pyytää puheenvuoroa kesken
                  juhlan, vaan juhlavieraiden puheenvuorot jätetään vapaaseen
                  sanaan. Vapaan sanan puheenvuoroja voit käydä pyytämässä
                  taukojen aikana juhlamarsalkalta. Laulutoiveita voit
                  puolestaan käydä esittämässä vain taukojen aikana
                  laulunjohtajille. Laulu lähtee aina hiljaisuudesta ja
                  lauluihin ei ole suotavaa laulaa lauluvihkosta ulkopuolisia
                  säkeistöjä.
                </p>

                <p>
                  Taukojen aikana juhlakansa voi vapaasti nousta pöydästä.
                  Muuten pöydästä poistumiseen kysytään lupa lähimmältä
                  pöytäseurueelta, minkä jälkeen voi huomaamatta poistua
                  juhlasalista. Liikennettä ei kuitenkaan pitäisi tapahtua
                  laulujen tai ohjelmanumeroiden aikana.
                </p>

                <p>
                  Myös vuosijuhlassa jokaisen laulun jälkeen kohotetaan malja.
                  Skoolattaessa laseja ei kilistellä yhteen vaan skoolaustoveria
                  silmiin katsoen nostetaan laseja eteen. Ensin skoolataan
                  viistosti istuvan kanssa aloittaen oikealle, tämän jälkeen
                  viistosti vasempaan ja lopuksi edessä istuvan kanssa. Tyhjällä
                  lasilla ei tule skoolata.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Etiketti;
