import React from 'react';
import './Qualities.css';

function Qualities() {
  return (
    <div className="qualities-container">
      <div className="quality-item">
        <i className="fa-solid fa-truck-fast"></i>
        <p>Worldwide Shipping</p>
      </div>
      <div className="quality-item">
        <i className="fa-regular fa-comments"></i>
        <p>24x7 Customer Support</p>
      </div>
      <div className="quality-item">
        <i className="fa-regular fa-credit-card"></i>
        <p>Secure Transactions</p>
      </div>
    </div>
  );
}

export default Qualities;
