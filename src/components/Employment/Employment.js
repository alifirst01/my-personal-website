import React, { Component } from 'react';
import "../../styles/themes/_employment.sass"
import {Col, Row} from "react-bootstrap";
import EmploymentService from "../../services/EmploymentService";
import Zoom from 'react-reveal/Zoom';
import Thumbnails from "./Thumbnails";
import EmploymentDetails from "./EmploymentDetails";

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

    isActive = (activeIndex) => {
        var employmentThumbnailsTags = document.getElementsByClassName("employment-thumbnails-list-item");
        var ans = false;
        Array.prototype.forEach.call(employmentThumbnailsTags, (tag, index) => {
            if(tag.classList.contains("activeEmp") && (index === activeIndex))
                ans = true;
        });
        return ans;
    };

    switchEmploymentDetails = (index) => {
        if(!this.isActive(index)) {
            this.setState({ show: !this.state.show });

            setTimeout(function() {
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
        }
    };

    render() {
        return(
            <section id="employment">
                <div className="header">
                    <h1>Experience</h1>
                </div>
                <div className="employment-content">
                    <Row>
                        <Col md={4} xs={12}>
                            <Thumbnails employmentHistory={this.state.employmentHistory} switchEmploymentDetails={this.switchEmploymentDetails}/>
                        </Col>
                        <Col md={8} xs={12}>
                            <Zoom left opposite when={this.state.show} duration={800}>
                                <EmploymentDetails employmentHistory={this.state.employmentHistory}/>
                            </Zoom>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Employment;