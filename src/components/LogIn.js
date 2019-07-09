import React from 'react';
import LoginFormEmpty from "./LogIn/LoginFormEmpty";
import LoginFormNavi from "./LogIn/LoginFormNavi";
import LoginFormMain from "./LogIn/LoginFormMain";


class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="logIn" className="grid-logIn grid">
                <LoginFormEmpty/>
                <LoginFormNavi/>
                <LoginFormMain/>
            </div>


        );
    }
}


export default LogIn;