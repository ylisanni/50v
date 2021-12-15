import Header from '../components/header'
import { Container, Row, Card, Button, Navbar } from 'react-bootstrap'
import HeadSection from '../components/head-section'

export default function Home() {
  return (
    <Container fluid className="main-container">
      <HeadSection></HeadSection>
      <Header></Header>
      <Container>
        <div className="vh-100">
          <div className="text-center">
            <img
              src="/logo-big.png"
              className="img-fluid"
              style={{ maxWidth: '800px', maxHeight: '80vh' }}
            ></img>
          </div>
          <div>
            <p>
              Tervetuloa juhlistamaan rakkaan ainejärjestömme Asteriski ry:n 50-vuotista
              taivalta lauantaina 26. helmikuuta 2022 vuosijuhlien merkeissä. Vuosijuhlia
              ennen järjestetään vuosijuhlaviikko 21.2.-24.2., jonka ohjelman löydät{' '}
              <a href="#ohjelma">täältä</a>.
            </p>
            <p>(laskuri)</p>
            <p>(Uutiset saitilta jonnekkin, sidebar?)</p>
          </div>
        </div>
        <div id="main">
          Asteriski ry:n 50-vuotisjuhlia juhlitaan juhlavasti lauantaina 26. helmikuuta
          2022. Vuosijuhlat alkavat cocktail-tilaisuudella, joka järjestetään Turun
          Yliopiston tiloissa Agora rakennuksen aulassa. Cocktail-tilaisuudesta siirrymme
          pääjuhlaan, joka järjestetään Turun VPK-talolla ja jatkot pidetään salaisessa
          jatkopaikassa. Matkat eri paikkojen välillä taittuu yhteisillä
          bussikuljetuksilla. Seuraavana päivänä sunnuntaina 27. helmikuuta 2022 vietetään
          salaisessa paikassa sillistä, jonne bussikuljetukset lähtevät kello X paikasta
          X. Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä akateemiset
          kunniamerkit. Lisää vuosijuhlan etiketistä voit lukea{' '}
          <a href="#etiketti">täältä</a>.

          <p>Tldr Englanniksi </p>
        </div>
        <div id="ohjelma">
          <h1>Ohjelma</h1>
          <h2>Coctail</h2>
          <p>
            Pääjuhlaa edeltää cocktail-tilaisuus Agoran aulassa (Vesilinnantie 3, Turku)
            alkaen klo 13:37. Tervehdyksiä aletaan ottamaan vastaan kello 14:00.
            Cocktail-tilaisuuden ohjelmaan kuuluu tervetuliaismalja, cocktailpalat sekä
            kutsuvieraiden esittämät tervehdykset Asteriskille. Kaikki
            vuosijuhlaosallistujat ovat tervetulleita seuraamaan tilaisuutta.
            Cocktail-tilaisuudesta lähtee kuljetukset itse pääjuhlaan.
          </p>{' '}
          <h2>Pääjuhla</h2>
          <p>
            Asteriskin 50-vuotisvuosijuhlien päätapahtumana on pääjuhla, jota vietetään
            ravintola Turun VPK:n talolla (Eskelinkatu 5, 20100 Turku). Ovet tilaisuuteen
            avataan klo xx:xx ja itse juhla alkaa klo 18:00. Pääjuhlassa kunnioitamme
            rakasta ainejärjestöämme puhein ja tervehdyksin. Lisäksi nautimme kolmen
            ruokalajin illallisen ja jaamme tunnustuksia henkilöille, jotka ovat olleet
            vuosien varrella mukana rakentamasta Asteriskista sellaisen kuin se tänä
            päivänä on. Pääjuhlan päätyttyä tanssitaan akateemiset tanssit.
          </p>
          <h2>Jatkot</h2>
          <p>Pääjuhlan loputtua vieraat kuljetetaan salaiseen jatkopaikkaan.</p>
          <h2>Sillis</h2>
          <p>
            Pääjuhlaa ja jatkoja seuraa sunnuntaina 27. helmikuuta 2022 eeppinen
            sirkusteemainen silliaamiainen, jota et halua missata! Silliksellä juhlakansaa
            odottaa maittava aamiainen sekä olotiloja tasoittavaa juomaa. Suosittelemme
            myös pakattavan mukaan pyyhkeen sekä uikkarit saunomista varten.
            Yhteiskuljetusbussit lähtevät sunnuntaina osoitteesta JOTAIN KELLO JOTAIN. Ole
            ajoissa paikalla sillä bussit ei odota myöhästelijöitä! Sillistä varten
            kannattaa varata rento asu.
          </p>
          <h2>Vuosijuhlaviikon ohjelma</h2>
          <p>tbh</p>
        </div>
        <div id="etiketti">
          <h1>Etiketti</h1>
          <h2>Pukukoodi</h2>

          <p>
            Pukukoodina vuosijuhlissa toimii juhlapuku tai tumma puku sekä akateemiset
            kunniamerkit.
          </p>

          <p>
            Juhlapuku tarkoittaa frakkia. Tumma puku on musta puku. Tumman puvun kanssa
            tulee käyttää valkoista paitaa sekä vaaleaa tai helmiäistä yksiväristä
            solmiota.
          </p>

          <p>
            Naiselle tämä tarkoittaa täyspitkää ilta- tai juhlapukua eli vain kengän
            kärjet saavat näkyä. Laukkuna tulee toimia olkaimeton ja siro laukku.
            Pääjuhlassa lippujen läsnäollessa hartioiden tulisi myös olla peitettynä
            esimerkiksi hartiahuivilla. Hansikkaita voi halutessaan käyttää muuten kuin
            ruokaillessa.
          </p>

          <p>
            Vuosijuhlilla käytetään akateemisiksi kunniamerkeiksi määriteltyjä nauhoja ja
            merkkejä, jotka kuuluvat perinteisesti vuosijuhla-asuun.
          </p>

          <p>
            Kunnianauhaa kannetaan oikealta olkapäältä rinnan yli viistoon vasemmalle.
            Kunnianauhaa voi kantaa myös ruusukkeena vasemmassa rintapielessä. Nauha ei
            saa koskettaa paljasta ihoa. Juhlapuvun kanssa nauhaa kannetaan liivin alla.
            Nauhoista arvokkainta tai suurinta organisaatiota edustavaa kannetaan ylimpänä
            (esimerkiksi TYYn kuntanauha ylimpänä). Asteriskin jäsennauhaa tulee kantaa
            keltainen väri ylempänä. Kunniamerkkejä kannetaan ne myöntäneen tahon ohjeiden
            mukaan esimerkiksi nauhassa tai puvun vasemmassa rintapielessä. Asteriskin
            jäsennauhaa ei tule käyttää samaa aikaa Asteriskin kunnianauhan, ansionauhan
            ja ansiomerkin kanssa. Kunniamerkkien kanssa ei käytetä frakin taskuliinaa.
          </p>

          <p>
            Asteriskin kannatustuotteista löydät lisätietoja{' '}
            <a href="https://www.asteriski.fi/virallista/asteriskin-tuotteet/">täältä</a>.
          </p>

          <p>
            Eeppiselle silliaamiaiselle päälle pantavaksi kannattaa varata sirkusteeman
            mukaista huomattavasti rennompaa vaatetusta, mitä rennompi ja typerämpi, sen
            parempi. Haalarit toimivat myös aina.
          </p>

          <h2>Vinkkejä käyttäytymiseen</h2>

          <p>
            Perinteiset hyvät käytöstavat toimivat oikein hyvin myös vuosijuhlilla.
            Keskustelu on suotavaa koko juhlan ajan lukuunottamatta ohjelmanumeroita sekä
            juhlamarsalkan ja laulunjohtajien puheita, jolloin juhlaväen tulee olla
            hiljaa. Laulu lähtee myös aina hiljaisuudesta.
          </p>

          <p>
            Taukojen aikana juhlakansa voi vapaasti nousta pöydästä. Muuten pöydästä
            poistumiseen kysytään lupa lähimmältä pöytäseurueelta, minkä jälkeen voi
            huomaamatta poistua juhlasalista. Liikennettä ei kuitenkaan pitäisi tapahtua
            laulujen tai ohjelmanumeroiden aikana.
          </p>

          <p>
            Myös vuosijuhlassa jokaisen laulun jälkeen sekä jonkun sitä ehdottaessa
            kohotetaan malja. Skoolattaessa laseja ei kilistellä yhteen vaan
            skoolaustoveria silmiin katsoen nostetaan laseja eteen. Ensin skoolataan
            viistosti istuvan kanssa aloittaen oikealle, tämän jälkeen viistosti vasempaan
            ja lopuksi edessä istuvan kanssa. Tyhjällä lasilla ei tule skoolata.
          </p>
        </div>
        <div id="menu">
          <h1>Menu</h1>
          <p>tbh</p>
        </div>
        <div id="sillis">
          <h1>Sillis</h1>
          <p>
            Hyvä juhlaväki! Naiset, herrat ja kaikki muut! Lapset ja ja lapsenmieliset!{' '}
          </p>

          <p>
            Raota värikkään teltan verhoa. Haista suolaiset herkut, paukkuvat popkornit,
            makeat houkutukset. Kuule leikkisä musiikki, hämmästyneet henkäykset ja lämmin
            nauru!
          </p>

          <p>Se on ihmeellinen, se on uskomaton, se on fantastinen:</p>

          <p>Asteriskin sirkusteemainen silliaamiainen!</p>

          <p>
            Astu sisään ja koe valot ja pelit ja herkut ja riemu! Ehkä sirkuksen maaginen
            tunnelma taikoo venähtäneen illan väsymyksenkin kadoksiin? Tai ainoa pelle ei
            tällä kertaa katsokaan peilistä? Astu siis sillisbussiin ja koe upea,
            henkeäsalpaava, hämmästyttävä - sirkus!
          </p>
        </div>
        <div id="ilmo">
          <h1>Ilmoittautuminen</h1>
          <p>Ilmoittautuminen aukeaa x.x.</p>
        </div>
        <div id="sponsorit">
          <h1>Sponsorit</h1>
          <ul>
            <li>Nitor</li>
            <li>Mehiläinen</li>
            <li>Sofokus</li>
            <li>Solita</li>
            <li>ATR soft</li>
          </ul>
        </div>
      </Container>
    </Container>
  )
}
