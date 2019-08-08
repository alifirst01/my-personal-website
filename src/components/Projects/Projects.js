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
            moreProjectsLink: "https://github.com/alifirst01"
        };
    }

    render() {
        return(
            <section id="projects">
                <div className="header">
                    <h1>Projects</h1>
                </div>
                <div className="projects-content">
                    {
                        Object.keys(this.state.projects).map((project, index) => {
                            return (
                                <div key={index}>
                                    <Row className="project-row">
                                        {   (window.innerWidth > 600) && (window.innerHeight > 600) && (index % 2)
                                            ? <Col md={7}>
                                                <Fade left duration={2000} distance="20%">
                                                    <PFCarousel images={this.state.projects[project].images}/>
                                                </Fade>
                                              </Col>
                                            : null
                                        }
                                        <Col md={5} lg={4}>
                                            <Details data={this.state.projects[project].data}
                                                     techIcons={this.state.projects[project].techIcons}/>
                                        </Col>
                                        {   (window.innerWidth <= 600) || (window.innerHeight <= 600) || !(index % 2)
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
                <Fade bottom duration={1000} delay={300}>
                    <div className="more-projects-link">
                        <a href={this.state.moreProjectsLink} target="_blank" >
                            More Projects
                        </a>
                    </div>
                </Fade>

            </section>
        );
    }
}

export default Projects;