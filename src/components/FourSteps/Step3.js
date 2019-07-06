import React from 'react';
import binocular from "../../images/binoculars2.png";


class Step3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="step-3 steps">
                <div className="step-image ">
                    <img className="step-3-binocular" src={binocular} alt="binocular"/>
                </div>
                <div className="step-line">
                    <div>Zdecyduj komu chcesz pomóc</div>
                    <div className="step-line line"></div>
                </div>
                <div className="step-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos eveniet facilis laboriosam nostrum officia perferendis rerum sunt tempora. </div>

            </div>
        );
    }
}


export default Step3;