import React, {Component} from "react";
import Countdown from "react-countdown";
import MiniLaskuri from "./MiniLaskuri";
import MiniIlmoLink from "./MiniIlmoLink";
import api from "../api";

class MiniIlmo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            invited: props.data.kutsuvieras,
            registrationStatus: null,
            success: null,
            fitting: [],
            reserve: [],
            startDate: null,
        };
    }

    render() {
        const renderer = ({days, hours, minutes, seconds, completed}) => {
            if (completed) {
                return (
                    <MiniIlmoLink
                        lang={this.props.data.lang}
                        registrationStatus={this.state.registrationStatus}
                        invited={this.props.data.kutsuvieras}
                        fitting={this.state.fitting}
                        reserve={this.state.reserve}
                    />
                );
            } else {
                return (
                    <MiniLaskuri
                        lang={this.props.data.lang}
                        days={days}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                    />
                );
            }
        };
        return (
            <>
                {this.state.isLoading ? (
                    <span></span>
                ) : (
                    <Countdown
                        date={this.state.startDate}
                        renderer={renderer}
                        onComplete={() => window.location.reload(false)}
                    />
                )}
            </>
        );
    }

    async componentDidMount() {
        try {
            let ilmo = await api.get();
            ilmo = ilmo.data;
            let startDate = ilmo.main_start_date;
            if (this.state.invited) {
                startDate = ilmo.invited_start_date;
            }

            this.setState({
                ...this.state,
                ...{
                    isLoading: false,
                    success: true,
                    startDate: startDate,
                    registrationStatus: ilmo.registration_status,
                    fitting: ilmo.fitting_participants,
                    reserve: ilmo.reserve_participants,
                },
            });
        } catch (e) {
            this.setState({
                ...this.state,
                ...{
                    success: false,
                    isLoading: false,
                    startDate: new Date(2022, 7, 18, 13, 37),
                    registrationStatus: "NOT_STARTED",
                },
            });
        }
    }
}

export default MiniIlmo;
