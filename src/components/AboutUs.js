import React from 'react';
import {NavLink} from "react-router-dom";


class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="aboutUs" className="grid-aboutUs grid">
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <div className="AboutUsText"></div>
                <div className="AboutUsImage">
                    <div className="image aboutUs-image"></div>
                </div>
            </div>
        );
    }
}


export default AboutUs;