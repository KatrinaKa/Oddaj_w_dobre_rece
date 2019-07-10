import React from 'react';
import FrontNavigation from "../FrontPage/FrontNavigation";



class RegisterFormNavi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="RegisterFormNavi navi navi-log">
                <FrontNavigation/>
            </div>
        );
    }
}


export default RegisterFormNavi;