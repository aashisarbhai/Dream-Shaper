import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.jpeg';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfileSection from './ProfileSection';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [sidebarActive, setSidebarActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const toggleProfile = () => {
    setProfileActive(!profileActive);
  };

  return (
    <div className='navbar'>
      <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <h2>Dream Shaper</h2>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("Home") }}>
          <Link to='/' className={menu === "Home" ? "active" : ""}>Home</Link>
        </li>
        <li onClick={() => { setMenu("Item") }}>
          <Link to='/item' className={menu === "Item" ? "active" : ""}>Products</Link>
        </li>
        <li onClick={() => { setMenu("About") }}>
          <Link to='/about' className={menu === "About" ? "active" : ""}>About</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="icons">
          <div 
            className="profile-icon"
            onMouseEnter={() => setProfileActive(true)}
            onMouseLeave={() => setProfileActive(false)}
          >
            <i className="fa-regular fa-user"></i>
            {profileActive && <ProfileSection isActive={profileActive} onClose={() => setProfileActive(false)} />}
          </div>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="nav-cart-count">0</div>
      </div>
      <Sidebar isActive={sidebarActive} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;