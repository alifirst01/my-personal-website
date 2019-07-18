import React, { Component } from 'react';
import "../../styles/themes/_projects.sass"
import ProjectService from "../../services/ProjectService";
import PFCarousel from "./Carousel";
import {Col, Row} from "react-bootstrap";
import Details from "./Details";
import Fade from 'react-reveal/Fade';

class Projects extends Component{

    constructor(props, context) {
        super(props, context);

        this.projectService = new ProjectService();
        this.state = {
            projects: this.projectService.getAllProjectsData(),
        };
    }

    render() {
        return(
            <div className="projects">
                <div className="header">
                    <h1>Projects</h1>
                </div>
                <div className="projects-content">
                    {
                        Object.keys(this.state.projects).map((project, index) => {
                            return (
                                <div>
                                    <Row className="project-row">
                                        {   (index % 2)
                                            ? <Col md={7}>
                                                <Fade left duration={2000} distance="20%">
                                                    <PFCarousel images={this.state.projects[project].images}/>
                                                </Fade>
                                              </Col>
                                            : null
                                        }
                                        <Col md={4}>
                                            <Details data={this.state.projects[project].data}
                                                     techIcons={this.state.projects[project].techIcons}/>
                                        </Col>
                                        {   !(index % 2)
                                            ? <Col md={7}>
                                                <Fade right duration={2000} distance="20%">
                                                    <PFCarousel images={this.state.projects[project].images}/>
                                                </Fade>
                                            </Col>
                                            : null
                                        }
                                    </Row>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;