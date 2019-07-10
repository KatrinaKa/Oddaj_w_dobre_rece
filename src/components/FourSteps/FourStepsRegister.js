import React from 'react';
import FrontBottomButtons from "../FrontPage/FrontBottomButtons";
import {NavLink} from "react-router-dom";


class FourStepsRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="logInPage register-button buttons">
                {/*<button className="btn btn-info btn-register">ZAŁÓŻ KONTO</button>*/}

                <NavLink to="/register" className="btn btn-navi btn-register"> <p>ZAŁÓŻ KONTO</p></NavLink>

            </div>
        );
    }
}


export default FourStepsRegister;