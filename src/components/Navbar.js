import React, { Component } from 'react';
import "../styles/themes/_navbar.sass";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
        var element = document.getElementsByClassName("custom-navbar")[0];
        if(!element.classList.contains('active') && scroll > 0)
            element.classList.add("active");
        else if(scroll === 0 && element.classList.contains('active'))
            element.classList.remove("active");
    };

    handleClick = (e, tag) => {
        e.preventDefault();
        if(this.props.home === true){
            this.props.switchHome();
            setTimeout(function () {
                document.querySelector(tag).scrollIntoView({ top: 500, behavior: 'smooth' });
            }, 1000);
        }
        else
            document.querySelector(tag).scrollIntoView({ top: 500, behavior: 'smooth' });
    };

    render() {
        return(
            <Row className="custom-navbar">
                <Col md={2} style={{textAlign: "left"}}>
                    <Button className="home-icon" variant="link" onClick={this.props.backToHome}>
                        <FontAwesomeIcon icon={faHome} />
                    </Button>
                </Col>
                <Col md={10} style={{textAlign: "right"}}>
                    <ul className="navlist">
                        <li className="link"><a href="#about" onClick={() => this.handleClick(event, "#about")}>About</a></li>
                        <li className="link"><a href="#projects" onClick={() => this.handleClick(event, "#projects")}>Projects</a></li>
                        <li className="link"><a href="#employment" onClick={() => this.handleClick(event, "#employment")}>Experience</a></li>
                        <li className="link"><a href="#contact" onClick={() => this.handleClick(event, "contact")}>Contact</a></li>
                        <li><Button id="resume-button">Resume</Button></li>
                    </ul>
                </Col>
            </Row>
        )
    }
}

export default Navbar;