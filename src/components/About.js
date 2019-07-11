import React, { Component } from 'react';
import "../styles/themes/_about.sass";
import photo from "assets/images/profile-photo/photo.jpg";

class Home extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="about">
                <div className="header">
                    <h1>About</h1>
                </div>
                <div className="content">
                    <div className="intro">
                        <p>
                            Hello! I'm Ali, a software engineer with a strong passion to built applications for the web. I develop high-quality websites that provide seamless user experience.
                            <br />
                            <br />
                            Currently pursuing a MS in Computer Science at &lt;<a href="https://uiowa.edu/" target="_blank">University of Iowa</a>&gt;, I have a strong interest in building and testing web applications. I also love to solve algorithmic problems.
                            <br />
                            <br />
                            Few technologies I've been working with recently:
                        </p>
                        <div className="technologies">
                            <div style={{float: "left"}}>
                                <h4>Programming Languages</h4>
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>HTML & (S)CSS</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                            <div style={{float: "right"}}>
                                <h4>Frameworks</h4>
                                <ul>
                                    <li>React</li>
                                    <li>Vue</li>
                                    <li>Jest</li>
                                    <li>Django</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="profile-photo">
                        <img src={photo} alt="This is the profile photo"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;