import React from 'react';
import './ProfileSection.css';
import { Link } from 'react-router-dom';

const ProfileSection = ({ isActive, toggleProfileSection }) => {
  const menuItems = [
    { name: 'Coupons', path: '/coupons' },
    { name: 'Contact Us', path: '/about' }, 
    { name: 'Offers', path: '/offers', isNew: true },
    { name: 'Saved Addresses', path: '/saved-addresses' } 
  ];

  return (
    <div className={`ProfileSection ${isActive ? 'active' : ''}`}>
      <i className="fa-solid fa-xmark close-profile" onClick={toggleProfileSection}></i>
      <h2>Welcome</h2>
      <p>To access account and manage orders</p>
      
      <button className="login-signup-btn">LOGIN / SIGNUP</button>
      
      <ul className="profile-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={toggleProfileSection}>
              {item.name}
              {item.isNew && <span className="new-tag">New</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSection;
