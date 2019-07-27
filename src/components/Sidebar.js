import React, { Component } from 'react';
import "../styles/themes/_sidebar.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Handshake from "../assets/images/icons/handshake.svg";

class Sidebar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "ali-asgher@uiowa.edu",
            linkedIn: "https://www.linkedin.com/in/alifirst/",
            github: "https://github.com/alifirst01",
            handshake: "https://uiowa.joinhandshake.com/users/12936256",
        };
    }

    render() {
        return(
            <div className="sidebar">
                <ul>

                    <a href={`mailto:${this.state.email}`} title="Email">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" style={{color: "#ff2f33"}}/>
                        </li>
                    </a>

                    <a href={this.state.github} target="_blank" title="Github">
                        <li>
                            <FontAwesomeIcon icon={faGithub} className="icon" style={{color: "black"}}/>
                        </li>
                    </a>
                    <a href={this.state.linkedIn} target="_blank" title="LinkedIn">
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} className="icon" style={{color: "#0077B5"}}/>
                        </li>
                    </a>
                    <a href={this.state.handshake} target="_blank" title="Handshake">
                        <li>
                            <img height="25px" src={Handshake}/>
                        </li>
                    </a>
                </ul>
            </div>
        )
    }
}

export default Sidebar;