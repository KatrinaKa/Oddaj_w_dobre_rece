import React from 'react';
import {NavLink} from "react-router-dom";
import RegisterForm from "./Register/RegisterForm";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <RegisterForm/>
            </div>
        );
    }
}


export default Register;