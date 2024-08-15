// context/CartContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item._id !== action.payload);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const fetchCart = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const res = await axios.get(`/cart/${userId}`);
        dispatch({ type: 'SET_CART', payload: res.data });
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (userId, productId, quantity) => {
    const res = await axios.post('/cart', { userId, productId, quantity });
    dispatch({ type: 'ADD_TO_CART', payload: res.data });
  };

  const removeFromCart = async (cartItemId) => {
    await axios.delete(`/cart/${cartItemId}`);
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartItemId });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
