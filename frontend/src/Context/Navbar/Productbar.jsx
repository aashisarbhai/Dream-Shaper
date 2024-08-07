import React from 'react';
import './Productbar.css'; 
import familyPicture from '../../Assets/family-picture.png'; 
import bag from '../../Assets/bag.png';
import bookmark from '../../Assets/bookmark.png';
import keychain from '../../Assets/keychain.png';
import polaroid from '../../Assets/polaroid.png';
import mandala from '../../Assets/mandala.png';
import fridge from '../../Assets/fridge.png';
import paint from '../../Assets/paint.png';
import resin from '../../Assets/resin.png';
import wallhanging from '../../Assets/wallhanging.png';
import { Link } from 'react-router-dom';

const Productbar = () => {
  return (
    <div className="bar">
      <div className="product">
        <Link to='../pages/Portraits'>
        <img src={familyPicture} alt="family portrait" /> 
        <p>Portrait</p>
        </Link>
      </div>
      
      <div className="product">
      <Link to='../pages/ResinArt'>
        <img src={resin} alt="resin" />
        <p>Resin Art</p>
        </Link>
      </div>
      
      <div className="product">
        <Link to='../pages/Bookmark'>
        <img src={bookmark} alt="bookmark" />
        <p>Bookmark</p>
        </Link>
        </div>

      <div className="product">
        <Link to='../pages/Keychains'>
        <img src={keychain} alt="keychain" />
        <p>Keychain</p>
        </Link>
        </div>

      <div className="product">
        <Link to='../pages/Polaroids'>
        <img src={polaroid} alt="polaroid" />
        <p>Polaroid</p>
        </Link>
       </div>

      <div className="product">
        <Link to='../pages/LippanArt'>
        <img src={mandala} alt="mandala" />
        <p>Lippan Art</p>
        </Link>
      </div>
      
      <div className="product">
        <Link to='../pages/FridgeMagnet'>
        <img src={fridge} alt="fridge" />
        <p>Fridge Magnets</p>
        </Link>
      </div>
      
      <div className="product">
        <Link to='../pages/Painting'>
        <img src={paint} alt="paint" />
        <p>Paintings</p>
        </Link>
      </div>

      <div className="product">
        <Link to='../pages/Purse'>
        <img src={bag} alt="bag" />
        <p>Purse</p>
        </Link>
      </div>

      <div className="product">
        <Link to='../pages/WallHanging'>
        <img src={wallhanging} alt="wallhanging" />
        <p>Wall Hanging</p>
        </Link>
      </div>
    </div>
  );
};

export default Productbar;
