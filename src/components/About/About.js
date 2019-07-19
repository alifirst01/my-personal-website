import React, { Component } from 'react';
import "../../styles/themes/_about.sass";
import Photo from "../../assets/images/profile-photo/photo.jpg";
import {Col, Row} from "react-bootstrap";
import Skills from "./Skills";

class About extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="about">
                <div className="content">
                    <Row>
                        <Col md={6} className="intro">
                            <div className="header">
                                <h1>About</h1>
                            </div>
                            <p>
                                Hello! I'm Ali, a software engineer with a strong passion to built applications for the web. I develop high-quality websites that provide seamless user experience.
                                <br />
                                <br />
                                Currently pursuing a MS in Computer Science at &lt;<a href="https://uiowa.edu/" target="_blank">University of Iowa</a>&gt;, I have a strong interest in building and testing web applications. I also love to solve algorithmic problems.
                                <br />
                                <br />
                                Few technologies I've been working with recently:
                            </p>
                            <Row className="technologies">
                                <Col md={7}>
                                    <h4>Programming Languages</h4>
                                    <ul>
                                        <li>JavaScript (ES6)</li>
                                        <li>TypeScript</li>
                                        <li>HTML & (S)CSS</li>
                                        <li>Python</li>
                                    </ul>
                                </Col>
                                <Col md={5}>
                                    <h4>Frameworks</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>Vue</li>
                                        <li>Jest</li>
                                        <li>Django</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Skills key={"skills"}/>
                            {/*<img src={Photo} alt="This is the profile photo"/>*/}
                        </Col>
                    </Row>


                </div>
            </div>
        )
    }
}

export default About;
