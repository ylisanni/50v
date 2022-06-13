import React, { Component } from 'react'
import Fade from 'react-reveal'

class Footer extends Component {
    Sponsor (props) {
        return (
            <a rel="noreferrer" href={props.sponsor_url} target="_blank">
                <img alt={`${props.sponsor_name} -logo`} src={`images/companies/webp/${props.sponsor_image_url}`} />
            </a>
        )
    };

    render () {
        const sponsors = [
            { sponsor_name: 'Nitor', sponsor_url: 'https://nitor.com/', sponsor_image_url: 'nitor.webp' },
            { sponsor_name: 'ATR Soft', sponsor_url: 'https://www.atrsoft.com/', sponsor_image_url: 'atr.webp' },
            { sponsor_name: 'Sofokus', sponsor_url: 'https://www.sofokus.com/', sponsor_image_url: 'sofokus.webp' },
            { sponsor_name: 'Solita', sponsor_url: 'https://www.solita.fi/', sponsor_image_url: 'solita.webp' },
            { sponsor_name: 'Mehiläinen', sponsor_url: 'https://www.mehilainen.fi/', sponsor_image_url: 'mehilainen.webp' },
            { sponsor_name: 'Gofore', sponsor_url: 'https://gofore.com/', sponsor_image_url: 'gofore.webp' },
            { sponsor_name: 'Tivia', sponsor_url: 'https://tivia.fi/', sponsor_image_url: 'tivia.webp' },
        ]
        sponsors.sort(() => Math.random() - 0.5)

        return (
            <section id="sponsors">
                <div className="row">
                    <Fade bottom>
                        <div className="sponsors">
                            <h2>
                                {this.props.data.lang === 'en' ? 'Sponsors' : 'Yhteistyössä mukana'}
                            </h2>
                            <div className="sponsors-flex">
                                {sponsors.map((object, index) => {
                                    return <div className="sponsor" key={index}>{this.Sponsor(object)}</div>
                                })}
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Footer
