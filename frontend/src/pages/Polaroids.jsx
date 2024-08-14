import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import './Polaroids.css'; 

function Polaroids() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);  // Manage cart state
  const [wishlist, setWishlist] = useState([]); // Manage wishlist state
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3389/products/polaroids');
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="polaroids-container">
      <h2 className="polaroids-title">Polaroids</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product._id} 
            product={product} 
            addToCart={addToCart} 
            addToWishlist={addToWishlist} 
          />
        ))}
      </div>

      {/* Display Cart Items */}
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Wishlist Items */}
      <div className="wishlist-container">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Polaroids;
