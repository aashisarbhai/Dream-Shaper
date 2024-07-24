import React from 'react'
import './Hero.css'
 import photo1 from '../photo/photo1.jpg'
 import photo2 from '../photo/photo2.jpg'
 import photo3 from '../photo/photo3.jpg'

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
          <p>collection</p>
          <p>for everyone</p>
      </div>
      <div className="hero-atest-btn">
         <div>
         Latest Collection
         </div>
         <img src={photo2} alt="vugv" />
      </div>
      </div>

      <div className="hero-right">
      <img src={photo3} alt="" />
      </div>
      </div>     
  )
}
export default Hero;
