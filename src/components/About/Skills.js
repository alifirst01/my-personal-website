import React, { Component } from 'react';
import "../../styles/themes/_skills.sass";
import SkillsService from "../../services/SkillsService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Skills extends Component{
    constructor(props, context) {
        super(props, context);
        this.skillsService = new SkillsService();
        this.state = {
            skills: this.skillsService.getUserSkills()
        };
    }

    render() {
        return(
            <div className="skills">
                {
                    Object.keys(this.state.skills).map(skillType => {
                        return(
                            <div>
                                <h3 className="skill-type">{skillType}</h3>
                                <div className="skill-bars">
                                    <ul>
                                        {
                                            Object.keys(this.state.skills[skillType]['skills']).map((skill, index) => {
                                                return(
                                                    <Row style={{width: "90%"}}>
                                                        <Col md={1} className="skill-icon">
                                                            <img src={this.state.skills[skillType]['skillsIcons'][index]}/>
                                                        </Col>
                                                        <Col md={11} className="skill">
                                                            <li style={{width: this.state.skills[skillType]['skills'][skill] + "%"}}>
                                                                {skill}
                                                            </li>
                                                        </Col>
                                                    </Row>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
                <div>
                    <ul className="skill-levels">
                        <Row style={{height: "10px", width: "90%"}}>
                            <Col md={1}>
                            </Col>
                            <Col md={11}>
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                            </Col>
                        </Row>
                    </ul>
                    <ul className="skill-levels">
                        <Row>
                            <Col md={1}>
                            </Col>
                            <Col md={11}>
                                <li className="skill-level-text" style={{textAlign: "right"}}>Beginner</li>
                                <li className="skill-level-text" style={{textAlign: "right"}}>Intermediate</li>
                                <li className="skill-level-text" style={{textAlign: "center"}}>Advanced</li>
                                <li className="skill-level-text" >Proficient</li>
                            </Col>
                        </Row>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;