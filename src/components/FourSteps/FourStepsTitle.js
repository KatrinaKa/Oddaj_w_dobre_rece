import React from 'react';
import logo from "../../images/decoration.png";


class FourStepsTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="logInPage logInPageTitle">
                <p>Wystarczą 4 proste kroki</p>
                <img className="logo" src={logo} alt="logo"/>
            </div>
        );
    }
}


export default FourStepsTitle;