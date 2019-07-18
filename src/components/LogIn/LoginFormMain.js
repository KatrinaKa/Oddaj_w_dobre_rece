import React from 'react';
import logo from "../../images/decoration.png";

class LoginFormMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="LoginFormMain">
                <div className="login loginPageTitle">
                    <p>Zaloguj się</p>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="loginForm form">
                    <input type="email" value="e-mail" className='input-email' id='email-login'/>
                    <input type="password" value="password" className='input-password' id='password-login'/>
                </div>
                <div className="buttons login-form-btn">
                    <button className="btn btn-info">Zaloguj</button>
                    <button className="btn btn-info">Załóż konto</button>
                </div>
            </div>
        );
    }
}


export default LoginFormMain;