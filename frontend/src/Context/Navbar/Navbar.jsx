import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../components/photo/logo.jpg';
import { Link } from 'react-router-dom';
import ProfileSection from './ProfileSection';
import Sidebar from './Sidebar';
import Productbar from './Productbar';

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarActive(!sidebarActive);
  const toggleProfile = () => setProfileActive(!profileActive);
  const toggleSearch = () => setSearchVisible(!searchVisible);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
    // Implement search functionality here
  };

  return (
    <nav className='navbar'>
      {isMobile && <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>}
      
      <div className="nav-logo">
        <img src={logo} alt="Dream Shaper Logo" />
        <h2>Dream Shaper</h2>
      </div>
      
      <div className="nav-login-cart">
        <div className="icons">
          <div className="nav-search-container">
            <button id="search-icon" onClick={toggleSearch}>
              <i className="fa-solid fa-search"></i>
            </button>
            <input
              type="text"
              id="search-bar"
              className={searchVisible ? 'active' : ''}
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onBlur={() => setSearchVisible(false)}
            />
          </div>

          <div 
            className="profile-icon"
            onMouseEnter={toggleProfile}
            onMouseLeave={toggleProfile}
          >
            <i className="fa-regular fa-user"></i>
            {profileActive && <ProfileSection isActive={profileActive} onClose={toggleProfile} />}
          </div>

          <Link to='wishlist' className="wishlist">
            <i className="fa-regular fa-heart"></i>
          </Link>
          
          <Link to='cart' className="cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>

          {isMobile && (
            <Sidebar isActive={sidebarActive} toggleSidebar={toggleSidebar}>
              <Productbar />
            </Sidebar>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;