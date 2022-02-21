import React, { Component } from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css"; 
import Section from '../Components/Section';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <>
            <Slider {...settings}>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
              <div>
                <img className='img-fluid pe-3' src='https://cdn.dribbble.com/users/4540442/screenshots/17384091/media/d214dbcff3f5bcee808dd3db63e11538.png?compress=1&resize=1600x1200&vertical=top' alt="hi" />
                <h4>Project Name</h4>
                <p>This is demo project description. We write this so that people get an ida of what we have done here.</p>
              </div>
            </Slider>

      </>
    );
  }
}
