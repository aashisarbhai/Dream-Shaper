// components/Cart.js
import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item._id}>
            <h3>{item.productId.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
