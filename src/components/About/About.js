import React, { Component } from 'react';
import "../../styles/themes/_about.sass";
import {Col, Row} from "react-bootstrap";
import Skills from "./Skills";

class About extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <section id="about">
                <div className="content">
                    <Row>
                        <Col md={6} className="intro">
                            <div className="header">
                                <h1>About</h1>
                            </div>
                            <p>
                                Hello! I'm Ali, a software engineer with a strong passion to build applications for the web. I develop high-quality applications which provide seamless user experience and write code that is easily maintainable and testable.
                                <br />
                                <br />
                                Currently pursuing a MS in Computer Science at &lt;<a href="https://uiowa.edu/" target="_blank">University of Iowa</a>&gt;, I have a strong interest in building and optimizing user-centric, high-impact websites. I also enjoy working on algorithmic problems and leverage problem solving skills to optimize existing solutions.
                                <br />
                                <br />
                                Few technologies I've been working with recently:
                            </p>
                            <Row className="technologies">
                                <Col xs={6} md={7}>
                                    <h4>Programming Languages</h4>
                                    <ul>
                                        <li>JavaScript (ES6)</li>
                                        <li>TypeScript</li>
                                        <li>HTML & (S)CSS</li>
                                        <li>Python</li>
                                    </ul>
                                </Col>
                                <Col xs={6} md={5}>
                                    <h4>Frameworks</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>Vue</li>
                                        <li>Jest</li>
                                        <li>Spring MVC</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Skills key={"skills"}/>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default About;
