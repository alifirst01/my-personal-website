import React, { Component } from 'react';
import "../styles/themes/_navbar.sass";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";

class PFNavbar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            resumeLink: "https://drive.google.com/file/d/1SU-LTjz8nFSGM67k0bOW3oMYkVdUSiQD/view?usp=sharing"
        };
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
        if(!element.classList.contains('nav-active') && scroll > 0)
            element.classList.add("nav-active");
        else if(scroll === 0 && element.classList.contains('nav-active'))
            element.classList.remove("nav-active");
    };

    handleClick = (tag) => (e) => {
        e.preventDefault();
        if(this.props.home === true){
            this.props.switchHome();
            setTimeout(function () {
                document.querySelector(tag).scrollIntoView({ top: 500, behavior: 'smooth' });
            }, 700);
        }
        else
            document.querySelector(tag).scrollIntoView({ top: 500, behavior: 'smooth' });
    };

    render() {
        return(
            <Navbar collapseOnSelect expand="md" className="custom-navbar" fixed="top">
                <Navbar.Brand className="home-link">
                    <Button className="home-icon" variant="link" onClick={this.props.backToHome}>
                        <FontAwesomeIcon icon={faHome} />
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav id="nav-list">
                        <Nav.Link className="link"><a href="#about" onClick={this.handleClick("#about")}>About</a></Nav.Link>
                        <Nav.Link className="link"><a href="#projects" onClick={this.handleClick("#projects")}>Projects</a></Nav.Link>
                        <Nav.Link className="link"><a href="#employment" onClick={this.handleClick("#employment")}>Experience</a></Nav.Link>
                        <Nav.Link className="link"><a href="#contact" onClick={this.handleClick("#contact")}>Contact</a></Nav.Link>
                        <Nav.Link href={this.state.resumeLink} target="_blank" className="resume-button"><a>Resume</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
export default PFNavbar;