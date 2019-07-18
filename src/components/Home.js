import React, { Component } from 'react';
import "../styles/themes/_home.sass"
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

class Home extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="home">
                <Fade left cascade>
                    <p>Hi, I am</p>
                    <h1>Ali Asgher</h1>
                    <h3>Software Developer</h3>
                    <p style={{width: "40%", paddingLeft: "5%"}}>specializes in building quality web applications with highly maintainable and testable code</p>

                    <div>
                        <Button id="explore-button" onClick={this.props.updateContent} variant="outlined">
                            <span>
                                Explore more
                            </span>
                            <span>
                                <div id="arrowAnim">
                                    <div className="arrowSliding">
                                        <div className="arrow"> </div>
                                    </div>
                                    <div className="arrowSliding delay1">
                                        <div className="arrow"> </div>
                                    </div>
                                    <div className="arrowSliding delay2">
                                        <div className="arrow"> </div>
                                    </div>
                                    <div className="arrowSliding delay3">
                                        <div className="arrow"> </div>
                                    </div>
                                </div>
                            </span>
                        </Button>

                    </div>
                </Fade>
            </div>
        )
    }
}

export default Home;