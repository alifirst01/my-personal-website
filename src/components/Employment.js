import React, { Component } from 'react';
import "../styles/themes/_employment.sass"
import {Col, Row} from "react-bootstrap";
import EmploymentService from "../services/EmploymentService";
import Zoom from 'react-reveal/Zoom';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Employment extends Component{
    constructor(props, context) {
        super(props, context);
        this.employmentService = new EmploymentService();
        this.state = {
            show: true,
            employmentHistory: this.employmentService.getEmploymentHistory()
        };
    }

    componentDidMount() {
        document.getElementsByClassName("employment-details-list-item")[0].style.display = "block";
        document.getElementsByClassName("employment-thumbnails-list-item")[0].classList.add("activeEmp");
    }

    switchEmploymentDetails = (index) => {
        this.setState({ show: !this.state.show });
        setTimeout(function(){
            var employmentThumbnailsTags = document.getElementsByClassName("employment-thumbnails-list-item");
            Array.prototype.forEach.call(employmentThumbnailsTags, tag => {
                tag.classList.remove("activeEmp");
            });
            var employmentListTags = document.getElementsByClassName("employment-details-list-item");
            Array.prototype.forEach.call(employmentListTags, tag => {
                tag.style.display = "none";
            });
            employmentListTags[index].style.display = "block";
            employmentThumbnailsTags[index].classList.add("activeEmp");
            this.setState({ show: !this.state.show });
        }.bind(this), 500);
    };

    render() {
        return(
            <div className="employment">
                <div className="header">
                    <h1>Experience</h1>
                </div>
                <div className="employment-content">
                    <Row>
                        <Col md={4}>
                            <div className="employment-thumbnails">
                                <ul>
                                    {
                                        Object.keys(this.state.employmentHistory).map((employment, index) => {
                                            return(
                                                <li className="employment-thumbnails-list-item" onClick={() => this.switchEmploymentDetails(index)}>
                                                    <h6>{this.state.employmentHistory[employment].data.company}</h6>
                                                    <p>{this.state.employmentHistory[employment].data.title}</p>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Zoom left opposite when={this.state.show} duration={800}>
                                <div className="employment-list">
                                    <ul className="employment-details-list">
                                        {
                                            Object.keys(this.state.employmentHistory).map(employment => {
                                                return(
                                                    <li className="employment-details-list-item">
                                                        <Row>
                                                            <Col md={2}>
                                                                <img className="company-logo" src={this.state.employmentHistory[employment].logo} />
                                                            </Col>
                                                            <Col md={10}>
                                                                <h5>{this.state.employmentHistory[employment].data.title}</h5>
                                                                <h6><a href={this.state.employmentHistory[employment].data.companyUrl}>{this.state.employmentHistory[employment].data.company}</a></h6>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" color="gray"/>&nbsp;
                                                                    {this.state.employmentHistory[employment].data.location}
                                                                </p>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" color="gray"/>&nbsp;
                                                                    {this.state.employmentHistory[employment].data.startDate}&nbsp;-&nbsp;
                                                                    {(this.state.employmentHistory[employment].data.current) ? "Present" : this.state.employmentHistory[employment].data.endDate}&nbsp;
                                                                    ({this.state.employmentHistory[employment].data.duration})
                                                                </p>

                                                                <ul className="description-list">
                                                                    {
                                                                        Object.keys(this.state.employmentHistory[employment].data.description).map(desc => {
                                                                            return (
                                                                                <li className="description-list-item">
                                                                                    <p>{desc}</p>
                                                                                    <ul>
                                                                                        {
                                                                                            this.state.employmentHistory[employment].data.description[desc].map(subDesc => {
                                                                                                return (
                                                                                                    <li>
                                                                                                        <p>{subDesc}</p>
                                                                                                    </li>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </ul>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }

                                                                </ul>
                                                            </Col>
                                                        </Row>

                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </Zoom>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Employment;