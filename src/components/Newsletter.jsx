import React from 'react'
import './Newsletter.css';

const Newsletter= () => {
    return(
        <div className="newsletter">
            <h2>Stay Connected</h2>
            <p>Receive email updates on matters of craft and craftsmanship plus new product launches, discounts, and events.</p>
       
         <div>
         <i class="fa-regular fa-envelope"></i>
         <input type = "email" placeholder="your email id" />
         <button>subscribe</button>
         </div>
         </div>
    )
}

export default Newsletter
