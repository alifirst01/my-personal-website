import React, { Component } from 'react';
import "../../styles/themes/_carousel.sass";
import { Carousel } from 'react-responsive-carousel';

class PFCarousel extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return(
            <div className="carousel-main">
                <Carousel showThumbs={false} infiniteLoop={true}>
                    {
                        this.props.images.map((image, index) => {
                            return(
                                <div key={index}>
                                    <img src={image} alt=""/>
                                </div>
                            );
                        })
                    }
                </Carousel>

            </div>
        )
    }
}

export default PFCarousel;