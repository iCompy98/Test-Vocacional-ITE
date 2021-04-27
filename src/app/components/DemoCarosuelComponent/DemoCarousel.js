import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../images/logo-ensenada.png';
import uno from '../../images/boca.jpeg';
import tres from '../../images/img.jpg';
import dos from '../../images/lisa.jpg';

class DemoCarousel extends Component {
    render() {
        return (
        // <div id="carousel">
            <Carousel>
                <div >
                    <img src={null} id= ""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={null} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={null} />
                  <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            // </div>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;
