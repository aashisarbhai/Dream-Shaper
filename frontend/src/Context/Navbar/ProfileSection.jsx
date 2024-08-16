import React from 'react';
import './ProfileSection.css';
import { Link } from 'react-router-dom';

const ProfileSection = ({ isActive, onClose }) => {
  if (!isActive) return null;

  const menuItems = [
    { name: 'My Orders', path: '/cart' },
    { name: 'Contact Us', path: '/about' }, 
    { name: 'Notifications', path: '/Notification'},
    { name: 'Offers', path: '/offers', isNew: true },
    { name: 'Saved Addresses', path: '/saved-addresses' } 
  ];

  return (
    <div className="ProfileSection popup-menu">
      <h2>Welcome</h2>
      <p>To access account and manage orders</p>
      
      <Link to="/Login">
        <button className="login-signup-btn">SIGN IN / SIGN UP</button>
      </Link>
      <ul className="profile-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={onClose}>
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