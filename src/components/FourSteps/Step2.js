import React from 'react';
import arrow from "../../images/arrow_down.png";


class Step2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="step-2 steps">
                <div className="step-image">
                  <img className="step-2-arrow" src={arrow} alt="arrow"/>
                </div>
                <div className="step-line">
                    <div>Spakuj je</div>
                    <div className="step-line line"></div>
                </div>
                <div className="step-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos eveniet facilis laboriosam nostrum officia perferendis rerum sunt tempora. </div>

            </div>
        );
    }
}


export default Step2;