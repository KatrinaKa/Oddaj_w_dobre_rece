import React from 'react';
import {NavLink} from "react-router-dom";


class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="logIn" className="grid-logIn grid">
                 <NavLink to="/" className="btn btn-navi return-btn">Powrót do strony głownej</NavLink>
                <div className="LoginFormEmpty"> </div>
                <div className="LoginFormNavi"></div>
                <div className="LoginFormMain"> </div>
            </div>


        );
    }
}


export default LogIn;