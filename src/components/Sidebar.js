import React, { Component } from 'react';
import "../styles/themes/_sidebar.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Handshake from "../assets/images/icons/handshake.svg";
class Sidebar extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="sidebar">
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} className="icon" style={{color: "#ff2f33"}}/></li>
                    <li><FontAwesomeIcon icon={faGithub} className="icon"/></li>
                    <li><FontAwesomeIcon icon={faLinkedin} className="icon" style={{color: "#0077B5"}}/></li>
                    <li><img height="25px" src={Handshake}/></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;