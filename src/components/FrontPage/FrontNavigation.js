import React from 'react';
import {NavLink} from "react-router-dom";


class FrontNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <div className="navi">
                    <div className="navi navi-log">
                        <NavLink to="/log" className="btn btn-navi" >Zaloguj</NavLink>
                        <NavLink to="/register" className="btn btn-navi"> Załóż konto</NavLink>
                    </div>
                    <div className="navi navi-info">
                        <NavLink to="/register" className="btn btn-navi"> Start</NavLink>
                        <NavLink to="/fourSteps" className="btn btn-navi" >O co chodzi</NavLink>
                        <NavLink to="/aboutUs" className="btn btn-navi" >O Nas</NavLink>
                        <NavLink to="/info" className="btn btn-navi" >Fundacje i organizacje</NavLink>
                        <NavLink to="/contact" className="btn btn-navi" >Kontakt</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}


export default FrontNavigation;