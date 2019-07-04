import React from 'react';
import {NavLink} from "react-router-dom";


class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="infoPage"  className="grid-infoPage grid">
                <NavLink to="/" className="btn btn-navi return-btn" >Powrót do strony głownej</NavLink>
                <div className="InfoPageHeader">
                    <div className="InfoPageHeader-title"></div>
                    <div className="InfoPageHeader-buttons"></div>
                    <div className="InfoPageHeader-text"></div>
                </div>
                <div className="InfoPageContainer">
                    <div className="container-1"></div>
                    <div className="container-2"></div>
                    <div className="InfoPageContainer-footer"></div>
                </div>
            </div>
        );
    }
}


export default InfoPage;