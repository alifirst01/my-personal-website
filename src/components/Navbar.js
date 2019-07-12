import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "../styles/themes/_navbar.sass";

class Navbar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        var scroll = window.scrollY;
        if(scroll > 0)
            document.getElementsByClassName("navbar")[0].classList.add("active");
        else {
            console.log(document.getElementsByClassName("navbar")[0].classList);
            document.getElementsByClassName("navbar")[0].classList.remove("active");
            console.log(document.getElementsByClassName("navbar")[0].classList);
        }
    };

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