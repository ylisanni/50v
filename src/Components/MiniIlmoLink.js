import React, {useState} from "react";

export default function MiniIlmoLink(props) {
    const [loading, setLoading] = useState(false);
    const [apiErrors, setApiErrors] = useState({});
    const [posted, setPosted] = useState(false);

    const regStatus = props.registrationStatus;
    const clearApiError = (e) => {
        let errs = structuredClone(apiErrors);
        delete errs[e.target.name];
        setApiErrors(errs);
    };

    if (posted) {
        return (
            <span className="ilmo-banner-text">
            {props.lang === "en"
                ? "Thanks for the sign up!"
                : "Kiitos ilmoittautumisesta!"}
                <i className="fa fa-heart"></i>

      </span>
        );

    } else if (regStatus !== "INVITED_IN_PROGRESS" && props.invited) {
        return (
            <span className="ilmo-banner-text">
          {props.lang === "en"
              ? "Invitation sign up is closed"
              : "Kutsuvierasilmoittautuminen on päättynyt"}
                <i className="fa fa-ban"></i>
        </span>
        );
    } else if (regStatus === "ENDED") {
        return (
            <span className="ilmo-banner-text">
          {props.lang === "en"
              ? "Sign up has ended"
              : "Ilmoittautuminen on päättynyt"}
                <i className="fa fa-ban"></i>

        </span>
        );
    } else if (regStatus === "RESERVE_IN_PROGRESS") {
        return (
            <span className="ilmo-banner-text">
          {props.lang === "en"
              ? "Sign up for reserve!"
              : "Ilmoittaudu varasijalle!"}
                <i className="fa fa-warning"></i>
        </span>
        );
    } else {
        return (
            <span className="ilmo-banner-text">
          {props.lang === "en"
              ? "Sign up for the event!"
              : "Ilmoittautuminen on käynnissä!"}
                <i className="fa fa-rocket"></i>
        </span>
        );
    }
}
