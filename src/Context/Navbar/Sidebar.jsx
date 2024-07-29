// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isActive, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <i className="fa-solid fa-xmark close-sidebar" onClick={toggleSidebar}></i>
      <ul>
        <li onClick={toggleSidebar}>
          <Link to='/Profile'>Profile</Link>
        </li>
        {/* <li onClick={toggleSidebar}>
          <Link to='/settings'>Settings</Link>
        </li> */}
        <li onClick={toggleSidebar}>
          <Link to='/Orders'>Orders</Link>
        </li>
        <li onClick={toggleSidebar}>
          <Link to='/Wishlist'>Wishlist</Link>
        </li>
        <li onClick={toggleSidebar}>
          <Link to='/Logout'>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
