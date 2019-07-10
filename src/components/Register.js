import React from 'react';
import RegisterFormEmpty from "./Register/RegisterFormEmpty";
import RegisterFormNavi from "./Register/RegisterFormNavi";
import RegisterFormMain from "./Register/RegisterFormMain";


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="register" className="grid-register grid">
                <RegisterFormEmpty/>
                <RegisterFormNavi/>
                <RegisterFormMain/>
            </div>
        );
    }
}


export default Register;