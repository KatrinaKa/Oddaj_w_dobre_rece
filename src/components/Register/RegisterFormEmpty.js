import React from 'react';
import {NavLink} from "react-router-dom";


class RegisterFormEmpty extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="RegisterFormEmpty">


            <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
            </div>
            );
    }
}


export default RegisterFormEmpty;