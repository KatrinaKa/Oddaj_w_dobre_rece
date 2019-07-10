import React from 'react';
import logo from "../../images/decoration.png";

class RegisterFormMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="RegisterFormMain">
                <div className="register registerPageTitle">
                    <p>Załóż konto</p>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="registerForm form">
                    <input type="email" value="e-mail" className='input-email' id='email-login'/>
                    <input type="password" placeholder="hasło"  className='input-password' id='password-login'/>
                    <input type="password"  placeholder="powtórz hasło" className='input-password' id='password-login'/>
                </div>
                <div className="buttons register-form-btn">
                    <button className="btn btn-info">Zaloguj</button>
                    <button className="btn btn-info">Załóż konto</button>
                </div>
            </div>
        );
    }
}


export default RegisterFormMain;