import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "../styles/themes/_navbar.sass";

class Navbar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="navbar">
                <ul className="navlist">
                    <li className="link"><a href="">About</a></li>
                    <li className="link"><a href="">Projects</a></li>
                    <li className="link"><a href="">Skills</a></li>
                    <li className="link"><a href="">Experience</a></li>
                    <li className="link"><a href="">Contact</a></li>
                    <li><Button variant="outlined" id="resume-button">Resume</Button></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;