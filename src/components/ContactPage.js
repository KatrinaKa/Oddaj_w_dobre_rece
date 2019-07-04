import React from 'react';
import {NavLink} from "react-router-dom";


class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="contactPage" className="grid-contactPage grid">
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <div className="ContactPageImage"></div>
                <div className="ContactPageForm">
                    <div className="title"></div>
                    <div className="form"></div>
                    <div className="button"></div>
                </div>
                <div className="ContactPageFooter"></div>
            </div>
        );
    }
}


export default ContactPage;