import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3389/cart/${userId}`);
        setCartItems(response.data);
      } catch (error) {
        setError('Failed to fetch cart items');
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:3389/cart/${cartItemId}`);
      // Refresh cart items after removal
      setCartItems(cartItems.filter(item => item._id !== cartItemId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {error && <p className="error-message">{error}</p>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id}>
            <p>{item.productId.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
