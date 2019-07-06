import React from 'react';
import FrontPage from "./FrontPage";
import LogInPage from "./FourSteps";
import AboutUs from "./AboutUs";
import InfoPage from "./InfoPage";
import ContactPage from "./ContactPage";


class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="layout">
                    <FrontPage/>
                    <LogInPage/>
                    <AboutUs/>
                    <InfoPage/>
                    <ContactPage/>
            </div>
        );
    }
}


export default Layout;