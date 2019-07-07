import React from 'react';
import {NavLink} from "react-router-dom";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="register" className="grid-register grid">
                <NavLink to="/" className="btn btn-navi return-btn">Powrót do strony głownej</NavLink>
                <div className="RegisterFormEmpty"> </div>
                <div className="RegisterFormNavi"></div>
                <div className="RegisterFormMain"> </div>
            </div>
        );
    }
}


export default Register;