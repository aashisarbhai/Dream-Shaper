import React from 'react';
import Slider from 'react-slick';
import review1 from '../components/photo/review1.jpg';
import review2 from '../components/photo/review2.jpg';
import review3 from '../components/photo/review3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/Review.css'

function Reviews() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true 
  };

  return (
    <div>
      <h1>A Word From Happy Customers</h1>
      <Slider {...settings}>
        <div>
          <img src={review1} alt="Review 1" />
        </div>
        <div>
          <img src={review2} alt="Review 2" />
        </div>
        <div>
          <img src={review3} alt="Review 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;