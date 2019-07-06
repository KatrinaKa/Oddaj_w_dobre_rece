import React from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


class FourStepsMainSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="logInPage loginPageMain">
                <div className="grid-steps">
                   <Step1/>
                   <Step2/>
                   <Step3/>
                   <Step4/>
                </div>

            </div>
        );
    }
}


export default FourStepsMainSection;