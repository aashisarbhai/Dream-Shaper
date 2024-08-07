import React from 'react'
import Productbar from '../Context/Navbar/Productbar';
import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter'
import Qualities from '../components/Hero/Qualities';
import Categories from '../components/Hero/Categories';

const Home = () => {
  return(
    <div>
      <Productbar/>
      <Hero />
      <Qualities/>
       <Categories/> 
      <Newsletter />
    </div>
  )
}

export default Home;