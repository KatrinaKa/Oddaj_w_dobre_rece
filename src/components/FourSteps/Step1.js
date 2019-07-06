import React from 'react';
import bulb3 from "../../images/light_bulb (3).png";


class Step1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="step-1 steps">
                <div className="step-image">
                    <img className="step-1-bulb" src={bulb3} alt="bulb"/>
                </div>
                <div className="step-line">
                    <div>Wybierz rzeczy</div>
                    <div className="step-line line"></div>
                </div>
                <div className="step-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos eveniet facilis laboriosam nostrum officia perferendis rerum sunt tempora. </div>
            </div>
        );
    }
}


export default Step1;