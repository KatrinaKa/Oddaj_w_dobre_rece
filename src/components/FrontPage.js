import React from 'react';
import FrontNavigation from "./FrontPage/FrontNavigation";
import FrontMainSection from "./FrontPage/FrontMainSection";
import FrontBottomButtons from "./FrontPage/FrontBottomButtons";
import FrontFooter from "./FrontPage/FrontFooter";


class FrontPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <div id="frontPage" className="grid-frontPage grid">
                    <div className="image front-image"></div>
                    <FrontNavigation/>
                    <FrontMainSection/>
                    <FrontBottomButtons/>
                    <FrontFooter/>
                </div>
            </div>
        );
    }
}


export default FrontPage;




