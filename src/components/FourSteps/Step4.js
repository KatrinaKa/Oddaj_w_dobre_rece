import React from 'react';
import connect from "../../images/people-connection.png";


class Step4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="step-4 steps">
                <div className="step-image">
                    <img className="step-4-connect" src={connect} alt="connect"/>
                </div>

                <div className="step-line">
                    <div>Zamów kuriera

                    </div>
                    <div className="step-line line"></div>
                </div>
                <div className="step-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos eveniet facilis laboriosam nostrum officia perferendis rerum sunt tempora. </div>

            </div>
        );
    }
}


export default Step4;