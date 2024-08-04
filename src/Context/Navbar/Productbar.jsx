import React from 'react';
import './Productbar.css'; 
import familyPicture from '../../Assets/family-picture.png'; 
import bag from '../../Assets/bag.png';
import bookmark from '../../Assets/bookmark.png';
import keychain from '../../Assets/keychain.png';
import polaroid from '../../Assets/polaroid.png';
import mandala from '../../Assets/mandala.png';
import necklace from '../../Assets/necklace.png';
import paint from '../../Assets/paint.png';
import resin from '../../Assets/resin.png';
import wallhanging from '../../Assets/wallhanging.png';

const Productbar = () => {
  return (
    <div className="bar">
      <div className="product">
        <img src={familyPicture} alt="family portrait" /> 
        <p>Portrait</p>
      </div>
      <div className="product">
        <img src={resin} alt="resin" />
        <p>Resin Art</p>
      </div>
      <div className="product">
        <img src={bookmark} alt="bookmark" />
        <p>Bookmark</p>
      </div>
      <div className="product">
        <img src={keychain} alt="keychain" />
        <p>Keychain</p>
      </div>
      <div className="product">
        <img src={polaroid} alt="polaroid" />
        <p>Polaroid</p>
      </div>
      <div className="product">
        <img src={mandala} alt="mandala" />
        <p>Lippan Art</p>
      </div>
      <div className="product">
        <img src={necklace} alt="necklace" />
        <p>Necklace</p>
      </div>
      <div className="product">
        <img src={paint} alt="paint" />
        <p>Paintings</p>
      </div>
      <div className="product">
        <img src={bag} alt="bag" />
        <p>Bag</p>
      </div>
      <div className="product">
        <img src={wallhanging} alt="wallhanging" />
        <p>Wall Hanging</p>
      </div>
    </div>
  );
};

export default Productbar;
