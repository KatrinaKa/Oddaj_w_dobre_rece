import React from 'react';
import {NavLink} from "react-router-dom";


class LoginFormEmpty extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="LoginFormEmpty">


            <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
            </div>
            );
    }
}


export default LoginFormEmpty;