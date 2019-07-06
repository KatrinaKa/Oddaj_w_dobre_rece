import React from 'react';
import {NavLink} from "react-router-dom";
import FourStepsTitle from "./FourSteps/FourStepsTitle";
import FourStepsMainSection from "./FourSteps/FourStepsMainSection";
import FourStepsRegister from "./FourSteps/FourStepsRegister";


class FourSteps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="logInPage" className="grid-logInPage grid">
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <FourStepsTitle/>
                <FourStepsMainSection/>
                <FourStepsRegister/>
            </div>
        );
    }
}


export default FourSteps;