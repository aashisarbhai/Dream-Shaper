import React, { useState} from 'react'
import'./Navbar.css'

import logo from '../Assets/logo.jpeg'
import cart_icon from '../Assets/cart_icon.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
   const[menu,setMenu] = useState("shop"); 
   
   return (
     <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>Dream Shaper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link> {menu=="Home"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("Item")}}><Link to='Item'>Item</Link> {menu=="Item"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("Notification")}}><Link to ='Notification'>Notification</Link> {menu=="Notification"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("About")}}><Link to ='About'>About</Link> {menu=="About"?<h/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
