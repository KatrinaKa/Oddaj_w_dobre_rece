import React from 'react';
import {NavLink} from "react-router-dom";
import logo from"../images/decoration.png"


class FrontPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <div id="frontPage" className="grid-frontPage grid">
                    <div className="image">
                        </div>
                    <div className="navi">
                        <div className="navi navi-log">
                        <NavLink to="/log" className="btn btn-navi" >Zaloguj</NavLink>
                        <NavLink to="/register" className="btn btn-navi"> Załóż konto</NavLink>
                        </div>
                        <div className="navi navi-info">
                            <NavLink to="/register" className="btn btn-navi"> Start</NavLink>
                            <NavLink to="/logInPage" className="btn btn-navi" >O co chodzi</NavLink>
                            <NavLink to="/aboutUs" className="btn btn-navi" >O Nas</NavLink>
                            <NavLink to="/info" className="btn btn-navi" >Fundacje i organizacje</NavLink>
                            <NavLink to="/contact" className="btn btn-navi" >Kontakt</NavLink>
                        </div>
                    </div>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis doloribus ea inventore ipsum neque nostrum quam ratione repudiandae sunt? Dolor, eius harum magni nobis quaerat soluta voluptatibus? Officia, veritatis.</p>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-info">ODDAJ RZECZY</button>
                    <button className="btn btn-info">ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                    <div className="footer">
                        <div className="footerSec-1 footerSec">
                            <p>10</p>
                            <p>ODDANYCH WORKÓW</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        </div>
                        <div className="footerSec-2 footerSec">
                            <p>7</p>
                            <p>WSPARTYCH ORANIZACJI</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        </div>
                        <div className="footerSec-3 footerSec">
                            <p>5</p>
                            <p>ZOORGANIZOWANYCH ZBIÓREK</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default FrontPage;




