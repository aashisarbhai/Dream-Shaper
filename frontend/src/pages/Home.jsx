import React from 'react'
import Productbar from '../Context/Navbar/Productbar';
import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter'
//import Categories from '../pages/Categories';

const Home = () => {
  return(
    <div>
      <Productbar/>
      <Hero />
      {/* <Categories/> */}
      <Newsletter />
    </div>
  )
}

export default Home;