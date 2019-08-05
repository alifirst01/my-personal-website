import React, { Component } from 'react';
import "../../styles/themes/_employment.sass"

class Thumbnails extends Component{
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="employment-thumbnails">
                <ul className="employment-thumbnails-list">
                    {
                        Object.keys(this.props.employmentHistory).map((employment, index) => {
                            return(
                                <li key={index} className="employment-thumbnails-list-item" onClick={() => this.props.switchEmploymentDetails(index)}>
                                    {(window.innerWidth > 600) && (window.innerHeight > 500)
                                        ? [
                                            <h6>{this.props.employmentHistory[employment].data.company}</h6>,
                                            <p>{this.props.employmentHistory[employment].data.title}</p>
                                        ]
                                        :
                                        <h6>{this.props.employmentHistory[employment].data.companyAbbr}</h6>
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Thumbnails;