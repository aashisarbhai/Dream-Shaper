import React, { useState } from 'react';
import './Navbar.css';

import logo from '../../Assets/logo.jpeg';
import cart_icon from '../../Assets/cart_icon.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Dream Shaper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("Home") }}>
          <Link to='/' className={menu === "Home" ? "active" : ""}>Home</Link>
        </li>
        <li onClick={() => { setMenu("Item") }}>
          <Link to='/item' className={menu === "Item" ? "active" : ""}>Item</Link>
        </li>
        <li onClick={() => { setMenu("Notification") }}>
          <Link to='/notification' className={menu === "Notification" ? "active" : ""}>Notification</Link>
        </li>
        <li onClick={() => { setMenu("About") }}>
          <Link to='/about' className={menu === "About" ? "active" : ""}>About</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-user"></i>
      <Link to='/cart_icon'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
