import React from 'react';
import FrontNavigation from "../FrontPage/FrontNavigation";


class LoginFormNavi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="LoginFormNavi navi navi-log">
                <FrontNavigation/>
            </div>
        );
    }
}


export default LoginFormNavi;