import React, { Component } from 'react';
import Photo from "../assets/images/profile-photo/photo.jpg";
import "../styles/themes/_contact.sass"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faSkype, faLinkedin, faDiscord, faGithub} from "@fortawesome/fontawesome-free-brands";
import Fade from 'react-reveal/Fade';

class Contact extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "ali-asgher@uiowa.edu",
            linkedIn: "linkedin.com/in/alifirst/",
            skype: "razor0128",
            discord: "alifirst#9510",
            github: "github.com/alifirst01"
        };
    }

    render() {
        return(
            <section id="contact">
                <div className="header">
                    <h1>Contact</h1>
                </div>
                <div className="contact-content">
                    <Row>
                        <Col md={5} xs={12}>
                            <Fade>
                                <Row>
                                    <img src={Photo} alt="Profile Photo"/>
                                </Row>
                                <Row className="primary-contact-link">
                                    <a href={`mailto:${this.state.email}`} target="_blank" >
                                        Get In Touch
                                    </a>
                                </Row>
                            </Fade>
                        </Col>
                        <Col lg={5} md={7} xs={12}>
                            <Fade right cascade duration={2000}>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" style={{color: "#ff2f33"}} title="Email"/>
                                        <span className="ctext">{this.state.email}</span>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" style={{color: "#0077B5"}} title="LinkedIn"/>
                                        <span className="ctext">{this.state.linkedIn}</span>
                                    </li>
                                    {(window.innerWidth <= 600) || (window.innerHeight <= 500)
                                        ?
                                            <li>
                                                <FontAwesomeIcon icon={faGithub} className="contact-icon" style={{color: "black"}} title="Github"/>
                                                <span className="ctext">{this.state.github}</span>
                                            </li>
                                        :   null
                                    }
                                    <li>
                                        <FontAwesomeIcon icon={faSkype} className="contact-icon" style={{color: "#009efb"}} title="Skype"/>
                                        <span className="ctext">{this.state.skype}</span>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon icon={faDiscord}className="contact-icon" style={{color: "#9186c1"}} title="Discord"/>
                                        <span className="ctext">{this.state.discord}</span>
                                    </li>
                                </ul>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Contact;