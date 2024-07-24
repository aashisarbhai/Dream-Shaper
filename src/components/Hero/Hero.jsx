import React from 'react'
import './Hero.css'
 import photo1 from '../photo/photo1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hand-hand-icon">
              <p>new</p>
              <img src={photo1} alt="" ></img>
          </div>
</div>
</div>

    </div>    
  )
}
export default Hero;
