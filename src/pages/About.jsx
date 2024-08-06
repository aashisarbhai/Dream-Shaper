import React from 'react';
import { Link } from 'react-router-dom';
import photo4 from '../components/photo/photo4.png';
import photo5 from '../components/photo/photo5.png';
import photo6 from '../components/photo/photo6.png';
import photo7 from '../components/photo/photo7.png';

import './About1.css'; // You can create CSS for styling

const About = () => {
  return (
    <div className="founder-page">
      <div className="image-section">
        {/* Placeholder for Imagesdnfj */}
        
      <marquee> 
        <img src={photo5}  alt="Founder" className="image"/>
        <img src={photo4}  alt="Founder" className="image"/>
        <img src={photo5}  alt="Founder" className="image"/>
        </marquee>
      </div>  
    

      <div className="text-section1">
      <h2 class="animate__animated animate__backInDown">Founder Speak</h2>
      </div>
      
      <div className="image-section">

      <div className="text-section2">
      

        <h3 class="animate__animated animate__backInDown">About</h3>

        <p class="animate__animated animate__backInDown">Welcome to "DREAM SHAPER", where art comes to life! We are a dynamic online marketplace dedicated to connecting passionate 
          artists and art enthusiasts from around the world. Our platform is a curated space where vendors can showcase their unique physical
          artworks and related articles, and buyers can discover and purchase one-of-a-kind pieces that inspire and enrich their lives.</p>  
                  
         <p class="animate__animated animate__backInDown"> At "DREAM SHAPER", we believe in the power of art to transform spaces and evoke emotions. Whether you're searching for a 
          striking painting, a handcrafted sculpture, or art-inspired decor, you'll find an ever-evolving collection of high-quality, original
          works from talented creators.</p>
          </div>

          <div  class="animate__animated animate__fadeInDown">
          <img src={photo4}  alt="Founder" className="image1"  />
          </div>
          </div>
          
          <div className="image-section">


      <div  class="animate__animated animate__fadeInDown" >
          <img src={photo7}  alt="Founder" className="image2"  />
          </div>

          <div className="text-section2">
        <h3 class="animate__animated animate__backInDown">Vision</h3>
        <p class="animate__animated animate__backInDown">Our vision is to be the leading global marketplace for physical art and related articles, celebrating creativity and craftsmanship in
          every form. We aspire to foster a vibrant community where artists gain the recognition they deserve and art lovers find pieces that 
          resonate deeply with their personal tastes and values. Through our platform, we aim to elevate the art experience, making it accessible,
          enjoyable, and meaningful for everyone.</p>
          
          </div>
          </div>
      <div className="text-section2">
        <h3 class="animate__animated animate__backInDown">Mission</h3>
        <p >Our mission is to provide an exceptional online space that empowers artists and vendors to reach a wider audience while offering art
           enthusiasts an unparalleled selection of distinctive and high-quality artworks. We are committed to:</p>
       <ul> 
      
        <li>Curating Excellence: We carefully select and feature artworks that showcase exceptional talent and craftsmanship.</li>
        <li>Supporting Artists: We offer artists and vendors a platform to thrive, ensuring they have the tools and visibility needed to succeed.</li>
        <li> Enhancing Experiences: We strive to create a seamless, enjoyable shopping experience, making the process of discovering and acquiring 
        art straightforward and satisfying.</li>
        <li> Promoting Creativity: We are dedicated to celebrating the diversity of artistic expression and fostering a community where creativity 
        is nurtured and celebrated.</li> 
          
     </ul>
<p>Thank you for visiting "DREAM SHAPER". We invite you to explore, connect, and find the perfect piece of art that speaks to you.</p>

      </div>
      <Link to="/productlist" className="shop-now-button">Shop Now</Link>
    </div>
  );
};

export default About;
