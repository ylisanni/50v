import React, {Component} from "react";

class Tarjoukset extends Component {
    render() {
        return (
            <section id="tarjoukset">
                <div className="row">
                    <div className="columns twelve">
                        {this.props.data.lang === "en" ? (
                            <>
                                <div className="tarjoukset-teksti-osio">
                                    <h2>Offers</h2>
                                    <h3>
                                        Coming soon!
                                    </h3>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="tarjoukset-teksti-osio">
                                    <h2>Tarjoukset</h2>
                                    <h3>
                                        Tulossa pian!
                                    </h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/*}
                <i className="fa fa-asterisk"></i>
                <div className="row">
                    <div className="columns twelve tarjous">
                        {this.props.data.lang === "en" ? (
                            <>
                                <div className="tarjoukset-teksti-osio">
                                    <h3>
                                        Hiushuone Kerho
                                    </h3>
                                    <p><i>Hiushuone Kerho Rennolla otteella kauniita hiuksia - hyvää palvelua ja hyvää
                                        kahvia unohtamatta.</i></p>
                                    <p>
                                        Hiushuone Kerho (Humalistonkatu 13, 20100 Turku) tarjoaa vuosijuhla päivänä
                                        1.10. juhlakampauksia hintaan 65,00€. Varaathan aikasi sähköpostilla <a
                                        href="mailto:kerho@hiushuonekerho.fi">kerho@hiushuonekerho.fi</a>
                                    </p>
                                    <p>
                                        Hiushuone Kerho tarjoaa lisäksi -10% muista kampaamo- ja parturipalveluistaan
                                        koko syyskuun ajan. Alennuksen saat käyttöösi varauksen yhteydessä
                                        kirjoittamalla lisätietokenttään “Vuosijuhla Asteriski”. Alennus koskee
                                        kampaajia Maria, Niina, Katariina ja Kirsi. Varaukset <a
                                        href="https://booksalon.fi/hiushuone-kerho/">nettiajanvarauksesta</a>
                                        , puhelimitse tai sähköpostitse <a
                                        href="mailto:kerho@hiushuonekerho.fi">kerho@hiushuonekerho.fi</a>.</p>
                                </div>
                                <div className="tarjoukset-kuva-osio">
                                    <div className="tarjoukset-images">
                                        <a
                                            className="tarjoukset-sponsor"
                                            rel="noreferrer"
                                            href="https://www.hiushuonekerho.fi/"
                                            target="_blank"
                                        >
                                            <img
                                                alt=""
                                                src="images/offers/webp/kerho.webp"
                                            />
                                        </a>
                                    </div>
                                    <div className="tarjoukset-images">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7870.155214532703!2d22.2563748!3d60.4528289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29e0bed35c861da0!2sHiushuone%20Kerho!5e0!3m2!1sen!2sfi!4v1660480354303!5m2!1sen!2sfi"
                                            width="400" height="300" allowFullScreen="" loading="lazy"
                                            title="Hiushuone Kerho"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="tarjoukset-teksti-osio">
                                    <h3>
                                        Hiushuone Kerho
                                    </h3>
                                    <p><i>-- Hiushuone Kerho Rennolla otteella kauniita hiuksia - hyvää palvelua ja hyvää
                                        kahvia unohtamatta. --</i></p>
                                    <p>
                                        Hiushuone Kerho (Humalistonkatu 13, 20100 Turku) tarjoaa vuosijuhla päivänä
                                        1.10. juhlakampauksia hintaan 65,00€. Varaathan aikasi sähköpostilla <a
                                        href="mailto:kerho@hiushuonekerho.fi">kerho@hiushuonekerho.fi</a>
                                    </p>
                                    <p>
                                        Hiushuone Kerho tarjoaa lisäksi -10% muista kampaamo- ja parturipalveluistaan
                                        koko syyskuun ajan. Alennuksen saat käyttöösi varauksen yhteydessä
                                        kirjoittamalla lisätietokenttään “Vuosijuhla Asteriski”. Alennus koskee
                                        kampaajia Maria, Niina, Katariina ja Kirsi. Varaukset <a
                                        href="https://booksalon.fi/hiushuone-kerho/">nettiajanvarauksesta</a>
                                        , puhelimitse tai sähköpostitse <a
                                        href="mailto:kerho@hiushuonekerho.fi">kerho@hiushuonekerho.fi</a>.</p>
                                </div>
                                <div className="tarjoukset-kuva-osio">
                                    <div className="tarjoukset-images">
                                        <a
                                            className="tarjoukset-sponsor"
                                            rel="noreferrer"
                                            href="https://www.hiushuonekerho.fi/"
                                            target="_blank"
                                        >
                                            <img
                                                alt=""
                                                src="images/offers/webp/kerho.webp"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {*/}
            </section>
        );
    }
}

export default Tarjoukset;
