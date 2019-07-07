import React from 'react';
import FrontBottomButtons from "../FrontPage/FrontBottomButtons";


class FourStepsRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="logInPage register-button buttons">
                <button className="btn btn-info btn-register">ZAŁÓŻ KONTO</button>
            </div>
        );
    }
}


export default FourStepsRegister;