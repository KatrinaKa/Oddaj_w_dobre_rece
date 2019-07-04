import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../images/decoration.png";
import bulb from "../images/light_bulb.png";


class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="logInPage" className="grid-logInPage grid">
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <div className="logInPage logInPageTitle">
                    <p>Wystarczą 4 proste kroki</p>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="logInPage loginPageMain">
                    <div className="grid-steps">
                        <div className="step-1">
                            <div className="step-image">
                                <img className="step-1-bulb" src={bulb} alt="bulb"/>
                            </div>
                            <div className="step-line">---------------</div>
                            <div className="step-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos eveniet facilis laboriosam nostrum officia perferendis rerum sunt tempora. </div>
                        </div>
                        <div className="step-2">
                            <div className="step-image">&#8687;</div>
                            <div className="step-line"></div>
                            <div className="step-text"></div>
                        </div>
                        <div className="step-3">
                            <div className="step-image"></div>
                            <div className="step-line"></div>
                            <div className="step-text"></div>
                        </div>
                        <div className="step-4">
                            <div className="step-image"></div>
                            <div className="step-line"></div>
                            <div className="step-text"></div>
                        </div>
                    </div>

                </div>
                <div className="logInPage loginPageButton"></div>
            </div>
        );
    }
}


export default LogInPage;