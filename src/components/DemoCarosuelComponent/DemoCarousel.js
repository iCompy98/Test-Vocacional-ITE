import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../images/logo-ensenada.png';
import boca from '../../images/boca.jpeg';
import lisa from '../../images/lisa.jpg';
import img from '../../images/img.jpg';

class DemoCarousel extends Component {
    render() {
        return (
        <div id="carousel">
            <Carousel>
                <div >
                    <img src={boca} id= ""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={lisa} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img} />
                  //  <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;

// Don't forget to include the css in your page