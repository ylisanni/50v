import React, {Component} from "react";

class Tarjoukset extends Component {
    render() {
        return (
            <section id="tarjoukset">
                <div className="row">
                    <div className="columns twelve tarjous">
                        {this.props.data.lang === "en" ? (
                            <>
                                <h2>Offers</h2>
                                <div className="tarjous">
                                    <div className="tarjoukset-teksti-osio">
                                        <h3>Hiushuone Kerho</h3>
                                        <p>
                                            <i>
                                                -- Hiushuone Kerho beautiful hair with relaxed feel - Good
                                                service and excellent coffee included. --
                                            </i>
                                        </p>
                                        <p>
                                            Hiushuone Kerho (Humalistonkatu 13, 20100 Turku) offers
                                            party hairstyles for the annual party on October 1st for
                                            65.00 euros. Book your appointment by email{" "}
                                            <a href="mailto:kerho@hiushuonekerho.fi">
                                                kerho@hiushuonekerho.fi
                                            </a>
                                            Remember to mention the Asteriski anniversary in the email.
                                        </p>
                                        <p>
                                            Hiushuone Kerho also offers -10% off its other hair salon
                                            and barber services throughout September. You can use the
                                            discount when booking by writing "Vuosijuhla Asteriski" in
                                            the additional information field. The discount applies to
                                            hairdressers Maria, Niina, Katariina and Kirsi. Reservations
                                            via online appointment{" "}
                                            <a href="https://booksalon.fi/hiushuone-kerho/">
                                                nettiajanvarauksesta
                                            </a>
                                            , 050 379 0369 or email{" "}
                                            <a href="mailto:kerho@hiushuonekerho.fi">
                                                kerho@hiushuonekerho.fi
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div className="tarjoukset-kuva-osio">
                                        <div className="tarjoukset-images">
                                            <a
                                                className="tarjoukset-sponsor"
                                                rel="noreferrer"
                                                href="https://www.hiushuonekerho.fi/"
                                                target="_blank"
                                            >
                                                <img alt="" src="images/offers/webp/kerho.webp"/>
                                            </a>
                                        </div>
                                        <div className="tarjoukset-images">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7870.155214532703!2d22.2563748!3d60.4528289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29e0bed35c861da0!2sHiushuone%20Kerho!5e0!3m2!1sen!2sfi!4v1660480354303!5m2!1sen!2sfi"
                                                width="400"
                                                height="300"
                                                allowFullScreen=""
                                                loading="lazy"
                                                title="Hiushuone Kerho"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <i className="fa fa-asterisk"></i>
                                <div className="tarjous">
                                    <div className="tarjoukset-teksti-osio">
                                        <h4>Academia</h4>
                                        <p>
                                            <i>
                                                Dear annual ball guests!
                                            </i>
                                        </p>
                                        <p>
                                            As a partner of Asteriski's annual ball Academia offers all attendees of the
                                            celebration their services at a reduced price.
                                            From Academia you can rent high quality dress suits and patent leather court
                                            shoes for the ball.
                                            Renting a dress suit costs 125 € (normally 170 €) and the shoes 25-40 €
                                            (normally 35-45 €).
                                        </p>
                                        <p>
                                            You can also buy a new or used dress suit for yourself at a discount of 20%.
                                            The offer is applicable to all dress suit sets available starting from 350€.
                                        </p>
                                        <p>
                                            The fittings for dress suits and shoes will be arranged for all wanting to
                                            rent or buy one.
                                            You can also order a dress suit based on your measurements without fitting
                                            if you like (more information in the form).
                                            The deadline for registering to the fitting is 11.9.
                                            After this there will be a fitting time scheduled for you on 14.9.
                                            Register for the dress suit fitting through this {" "}
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxX3egU64ouFUAZ1ONlC1q9LIdxM5jTAvLdHeHGQQZ2nC_Lw/viewform?usp=pp_url">
                                                link
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div className="tarjoukset-kuva-osio">
                                        <div className="tarjoukset-images">
                                            <a
                                                className="tarjoukset-sponsor"
                                                rel="noreferrer"
                                                href="https://www.pukuvuokraamoacademia.fi/"
                                                target="_blank"
                                            >
                                                <img className="tarjoukset-images-alt" alt=""
                                                     src="images/academia.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>Tarjoukset</h2>
                                <div className="tarjous">
                                    <div className="tarjoukset-teksti-osio">
                                        <h3>Hiushuone Kerho</h3>
                                        <p>
                                            <i>
                                                -- Hiushuone Kerho Rennolla otteella kauniita hiuksia -
                                                hyvää palvelua ja hyvää kahvia unohtamatta. --
                                            </i>
                                        </p>
                                        <p>
                                            Hiushuone Kerho (Humalistonkatu 13, 20100 Turku) tarjoaa
                                            vuosijuhla päivänä 1.10. juhlakampauksia hintaan 65,00€.
                                            Varaa aikasi sähköpostilla{" "}
                                            <a href="mailto:kerho@hiushuonekerho.fi">
                                                kerho@hiushuonekerho.fi
                                            </a>{" "}
                                            Muista mainita Asteriskin vuosijuhlat sähköpostissa.
                                        </p>
                                        <p>
                                            Hiushuone Kerho tarjoaa lisäksi -10% muista kampaamo- ja
                                            parturipalveluistaan koko syyskuun ajan. Alennuksen saat
                                            käyttöösi varauksen yhteydessä kirjoittamalla
                                            lisätietokenttään “Vuosijuhla Asteriski”. Alennus koskee
                                            kampaajia Maria, Niina, Katariina ja Kirsi. Varaukset{" "}
                                            <a href="https://booksalon.fi/hiushuone-kerho/">
                                                nettiajanvarauksesta
                                            </a>
                                            , 050 379 0369 tai sähköpostitse{" "}
                                            <a href="mailto:kerho@hiushuonekerho.fi">
                                                kerho@hiushuonekerho.fi
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div className="tarjoukset-kuva-osio">
                                        <div className="tarjoukset-images">
                                            <a
                                                className="tarjoukset-sponsor"
                                                rel="noreferrer"
                                                href="https://www.hiushuonekerho.fi/"
                                                target="_blank"
                                            >
                                                <img alt="" src="images/offers/webp/kerho.webp"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <i className="fa fa-asterisk" style={{color:"var(--gold)"}}></i>
                                <div className="tarjous">
                                    <div className="tarjoukset-teksti-osio">
                                        <h4>Academia</h4>
                                        <p>
                                            <i>
                                                Arvon vuosijuhlaväki!
                                            </i>
                                        </p>
                                        <p>
                                            Academia toimii vuosijuhlien yhteistyökumppanina ja tarjoaa kaikille juhlaan
                                            osallistuville laadukkaan frakin vuokrauksen 125 euron hintaan (norm. 170
                                            €),
                                            sekä lakerikenkien vuokrauksen hintaan 25-40 € (norm. 35-45 €).
                                        </p>
                                        <p>
                                            Yhteistyötarjouksena on myös mahdollista ostaa frakki omaksi,
                                            uutena tai käytettynä, -20%:n alennuksella.
                                            Tarjous koskee kaikkia eri hintaisia settejä, edullisimmat alkaen 350 €.
                                        </p>
                                        <p>
                                            Frakkien sovitukset järjestetään hyvissä ajoin ennen vuosijuhlia,
                                            tarkemmasta ajankohdasta infotaan lähempänä.
                                            Frakin voi tilata myös mittojen mukaan toimitettuna ilman sovitusta.
                                        </p>
                                        <p>
                                            Sovitukseen ilmoittautuminen sulkeutuu 11.9.
                                            Sovitukset tapahtuvat alustavasti 14.9.
                                            Pääset ilmoittautumaan sovituspäivään tästä {" "}
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxX3egU64ouFUAZ1ONlC1q9LIdxM5jTAvLdHeHGQQZ2nC_Lw/viewform?usp=pp_url">
                                                linkistä
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div className="tarjoukset-kuva-osio">
                                        <div className="tarjoukset-images">
                                            <a
                                                className="tarjoukset-sponsor"
                                                rel="noreferrer"
                                                href="https://www.pukuvuokraamoacademia.fi/"
                                                target="_blank"
                                            >
                                                <img className="tarjoukset-images-alt" alt=""
                                                     src="images/academia.jpg"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Tarjoukset;
