import React from 'react';
import logo from "../../images/decoration.png";


class FrontMainSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis doloribus ea inventore ipsum neque nostrum quam ratione repudiandae sunt? Dolor, eius harum magni nobis quaerat soluta voluptatibus? Officia, veritatis.</p>
                <img className="logo" src={logo} alt="logo"/>
            </div>
        );
    }
}


export default FrontMainSection;