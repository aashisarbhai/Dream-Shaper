import React from 'react'
import Productbar from '../Context/Navbar/Productbar';
import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter'
import Qualities from '../components/Hero/Qualities';
import Categories from '../components/Hero/Categories';
import Reason from '../components/Hero/Reason';
import Diy from '../components/Hero/Diy';
import Reviews from '../pages/Reviews';
import './Home.css'

const Home = () => {
  return(
    <div>
      <Productbar/>
      <Hero />
      <Qualities/>
      <Categories/>
      <Diy/>
      <Reason/>
      <Reviews/>
      <div className="whatsapp-float">
        <a href="https://wa.me/7042445757" target='_blank' rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <Newsletter />
    </div>
  )
}

export default Home;