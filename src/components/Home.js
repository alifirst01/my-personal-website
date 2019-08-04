import React, { Component } from 'react';
import "../styles/themes/_home.sass"
import Fade from 'react-reveal/Fade';
import Button from "react-bootstrap/Button";

class Home extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount = () => {
        window.addEventListener('wheel', this.props.updateContent);
    };

    componentWillUnmount() {
        window.removeEventListener('wheel', this.props.updateContent);
    };

    render() {
        return(
            <div className="home">
                <Fade left cascade>
                    <p>Hi, I am</p>
                    <h1>Ali Asgher</h1>
                    <h3>Software Developer</h3>
                    <p className="description">specializes in building quality web applications with highly maintainable and testable code</p>

                    <div>
                        <Button id="explore-button" onClick={this.props.updateContent} variant="outline-success">
                            Explore more
                        </Button>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Home;