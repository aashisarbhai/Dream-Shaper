import React from 'react';
import './Productbar.css'; 
import familyPicture from '../../Assets/family-picture.png'; 
import bag from '../../Assets/bag.png';
import bookmark from '../../Assets/bookmark.png';
import keychain from '../../Assets/keychain.png';
import polaroid from '../../Assets/polaroid.png';

const Productbar = () => {
  return (
    <div>
      <div className="bar">
        <div className="portrait">
          <img src={familyPicture} alt="family portrait" /> 
          <img src={bag} alt="bag" />
          <img src={bookmark} alt="bookmark" />
          <img src={keychain} alt="keychain" />
          <img src={polaroid} alt="polaroid" />
        </div>
      </div>
    </div>
  );
};

export default Productbar;
