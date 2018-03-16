
import React, {Component} from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      cssEase: 'linear',
      centerPadding: '10px'
    };

    return (
      <Slider {...settings}>
         <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz1.png" />
        </div>
        <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz2.png" />
        </div>
        <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz3.png" />
        </div>
        <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz1.png" />
        </div>
        <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz2.png" />
        </div>
        <div>
            <img src="http://kenwheeler.github.io/slick/img/fonz3.png" />
        </div>
      </Slider>
    );
  }
}