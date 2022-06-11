import React, { Component } from 'react'

class Tietoa extends Component {
    render () {
        return (
            <section id="tietoa">
                <div className="row">
                    <div className="three columns table-cell asteriskilogo-container">
                        <img
                            className="asteriskilogo"
                            src="/images/asteriskilogo.png"
                            alt="Asteriski logo"
                        />
                    </div>
                    <div className="nine columns main-col table-cell">
                        {this.props.data.lang === 'en' ? (
                            <>
                                <h2>Information</h2>

                                <p>
                                    Asteriski ry celebrates its 50th anniversary with a grand
                                    annual ball on Saturday 1st of October 2022. The annual ball
                                    begins with a cocktail party at the University of Turku. The
                                    cocktail party is followed by the main event at Turku VPK
                                    house and after that we will continue the celebration with the
                                    after party in a secret location.
                                </p>
                                <p>
                                    On the following morning on Sunday 2nd of October 2022 the
                                    herring breakfast will take place in a secret location.
                                </p>
                                <p>
                                    The dress code at the annual ball is a white tie or dark
                                    lounge suit for men and an evening gown for women as well as
                                    academic decorations.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2>Tietoa</h2>

                                <p>
                                    Asteriski ry:n 50-vuotisjuhlia juhlitaan juhlavasti lauantaina
                                    1. lokakuuta 2022. Vuosijuhlat alkavat cocktail-tilaisuudella,
                                    joka järjestetään Turun yliopiston tiloissa.
                                    Cocktail-tilaisuudesta siirrymme itse pääjuhlaan Turun
                                    VPK-talolle. Juhlien jatkoja vietetään salaisessa
                                    jatkopaikassa.
                                </p>
                                <p>
                                    Silliaamiaista eli sillistä nautitaan juhlien seuraavana
                                    päivänä sunnuntaina 2. lokakuuta. Jatkojen tapaan myös sillis
                                    järjestetään salaisessa paikassa.
                                </p>
                                <p>
                                    Vuosijuhlien pukukoodina toimii juhlapuku tai tumma puku sekä
                                    akateemiset kunniamerkit.{' '}
                                    <a className="smoothscroll" href="#etiketti">
                                        Lisätietoa vuosijuhlien etiketistä
                                    </a>
                                    .
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default Tietoa
