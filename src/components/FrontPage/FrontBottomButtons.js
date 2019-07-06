import React from 'react';


class FrontBottomButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="buttons">
                <button className="btn btn-info">ODDAJ RZECZY</button>
                <button className="btn btn-info">ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        );
    }
}


export default FrontBottomButtons;