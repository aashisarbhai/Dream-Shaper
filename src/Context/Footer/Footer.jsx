import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/Shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/help">Help Me</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Phone: +91 123456789</p>
          <p>Email: xyz@gmail.com</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dream Shaper. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
