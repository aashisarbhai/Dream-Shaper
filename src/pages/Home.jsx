import React from 'react'
import Productbar from '../Context/Navbar/Productbar';
import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter'

const Home = () => {
  return(
    <div>
      <Productbar/>
      <Hero />
      <Newsletter />
    </div>
  )
}

export default Home;