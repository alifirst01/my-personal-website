import React, { Component } from 'react';
import "../../styles/themes/_skills.sass";
import SkillsService from "../../services/SkillsService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                            <div key={skillType}>
                                <h3 className="skill-type">{skillType}</h3>
                                <div className="skill-bars">
                                    <ul>
                                        {
                                            Object.keys(this.state.skills[skillType]['skills']).map((skill, index) => {
                                                return(
                                                    <Row key={skill} className="skill-row">
                                                        <Col xs={0} md={1} className="skill-icon">
                                                            {   (typeof this.state.skills[skillType]['skillsIcons'][index] == "string")
                                                                ?  <img src={this.state.skills[skillType]['skillsIcons'][index]} alt=""/>
                                                                :  <FontAwesomeIcon size="2x" icon={this.state.skills[skillType]['skillsIcons'][index]}/>
                                                            }
                                                        </Col>
                                                        <Col xs={12} md={11} className="skill">
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
                        <Row>
                            <Col xs={0} md={1}>
                            </Col>
                            <Col xs={12} md={11} lg={10} className="skill-level-col">
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                                <li className="skill-level">&nbsp;</li>
                            </Col>
                        </Row>
                    </ul>
                    <ul className="skill-levels">
                        <Row>
                            <Col xs={0} md={1}>
                            </Col>
                            <Col xs={12} md={11} lg={10} className="skill-texts-col">
                                <li className="skill-level-text">Beginner</li>
                                <li className="skill-level-text">Intermediate</li>
                                <li className="skill-level-text">Advanced</li>
                                <li className="skill-level-text">Proficient</li>
                            </Col>
                        </Row>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;