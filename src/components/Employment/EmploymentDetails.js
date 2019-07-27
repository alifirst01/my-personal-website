import React, { Component } from 'react';
import "../../styles/themes/_employment.sass"
import {Col, Row} from "react-bootstrap";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EmploymentDetails extends Component{
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="employment-list">
                <ul className="employment-details-list">
                    {
                        Object.keys(this.props.employmentHistory).map((employment, index1) => {
                            return(
                                <li key={index1} className="employment-details-list-item">
                                    <Row>
                                        <Col md={2}>
                                            {(typeof this.props.employmentHistory[employment].logo == "string")
                                                ? <img className="company-logo"
                                                       src={this.props.employmentHistory[employment].logo} alt=""/>
                                                : <FontAwesomeIcon size="4x"
                                                                   icon={this.props.employmentHistory[employment].logo}/>
                                            }
                                        </Col>
                                        <Col md={10}>
                                            <h5>{this.props.employmentHistory[employment].data.title}</h5>
                                            <h6><a href={this.props.employmentHistory[employment].data.companyUrl}>{this.props.employmentHistory[employment].data.company}</a></h6>
                                            <p>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" color="gray"/>&nbsp;
                                                {this.props.employmentHistory[employment].data.location}
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} className="icon" color="gray"/>&nbsp;
                                                {this.props.employmentHistory[employment].data.startDate}&nbsp;-&nbsp;
                                                {(this.props.employmentHistory[employment].data.current) ? "Present" : this.props.employmentHistory[employment].data.endDate}&nbsp;
                                                ({this.props.employmentHistory[employment].data.duration})
                                            </p>

                                            <ul className="description-list">
                                                {
                                                    Object.keys(this.props.employmentHistory[employment].data.description).map((desc, index2) => {
                                                        return (
                                                            <li key={index2} className="description-list-item">
                                                                <p>{desc}</p>
                                                                <ul>
                                                                    {
                                                                        this.props.employmentHistory[employment].data.description[desc].map((subDesc, index3) => {
                                                                            return (
                                                                                <li key={index3}>
                                                                                    <p>{subDesc}</p>
                                                                                </li>
                                                                            );
                                                                        })
                                                                    }
                                                                </ul>
                                                            </li>
                                                        );
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
        )
    }
}

export default EmploymentDetails;