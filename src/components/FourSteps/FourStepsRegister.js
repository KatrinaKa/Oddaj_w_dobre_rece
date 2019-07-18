import React from 'react';
import {NavLink} from "react-router-dom";


class FourStepsRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="logInPage register-button buttons">
                <NavLink to="/register" className="btn btn-navi btn-register"> <p>ZAŁÓŻ KONTO</p></NavLink>

            </div>
        );
    }
}


export default FourStepsRegister;