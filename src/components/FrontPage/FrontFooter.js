import React from 'react';


class FrontFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
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
        );
    }
}


export default FrontFooter;