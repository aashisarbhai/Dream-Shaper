import React from 'react';
import Slider from 'react-slick';
import hero1 from '../photo/hero1.png';
import hero2 from '../photo/hero2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hero-container">
      <Slider {...settings}>
        <div>
          <img src={hero1} alt="Slide 1" />
        </div>
        <div>
          <img src={hero2} alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
