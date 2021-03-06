import React, { Component } from 'react';
import "../../styles/themes/_projects.sass";
import {Card, Col, Row} from "react-bootstrap";
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Details extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="details">
                <Card className="project-details-card">
                    <Card.Title className="card-title">
                        <Row>
                            <Col xs={6} md={8}>
                                <h3 className="project-title">{this.props.data.title}</h3>
                            </Col>
                            <Col xs={6} md={4}>
                                <ul>
                                    <a href={this.props.data.externalLink} target="_blank">
                                        <li>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" title="External"/>
                                        </li>
                                    </a>
                                    <a href={this.props.data.githubLink} target="_blank">
                                        <li>
                                            <FontAwesomeIcon icon={faGithub} className="link-icon" title="Github"/>
                                        </li>
                                    </a>
                                </ul>
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Body className="card-body">
                        <p className="project-description">
                            {this.props.data.description}
                        </p>
                        <ul className="tech-icons-list">
                            {
                                this.props.techIcons.map((icon, index) => {
                                    return(
                                        <li key={index}>
                                            {   (typeof icon == "string")
                                                ? <img src={icon} title={this.props.data.technologies[index]} alt=""/>
                                                : <FontAwesomeIcon size="2x" icon={icon} title={this.props.data.technologies[index]}/>
                                            }
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Details;