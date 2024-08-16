// // context/CartContext.js
// import React, { createContext, useReducer, useEffect } from 'react';
// import axios from 'axios';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_CART':
//       return action.payload;
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     case 'REMOVE_FROM_CART':
//       return state.filter(item => item._id !== action.payload);
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   useEffect(() => {
//     const fetchCart = async () => {
//       const userId = localStorage.getItem('userId');
//       if (userId) {
//         const res = await axios.get(`https://localhost:3389/cart/${userId}`);
//         dispatch({ type: 'SET_CART', payload: res.data });
//       }
//     };
//     fetchCart();
//   }, []);

//   const addToCart = async (userId, productId, quantity) => {
//     const res = await axios.post('https://localhost:3389/cart', { userId, productId, quantity });
//     dispatch({ type: 'ADD_TO_CART', payload: res.data });
//   };

//   const removeFromCart = async (cartItemId) => {
//     await axios.delete(`https://localhost:3389/cart/${cartItemId}`);
//     dispatch({ type: 'REMOVE_FROM_CART', payload: cartItemId });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

// Create the CartContext
const CartContext = createContext();

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item._id !== action.payload);
    case 'UPDATE_CART_ITEM':
      return state.map(item => item._id === action.payload._id ? action.payload : item);
    default:
      return state;
  }
};

// CartProvider component to provide cart context to the app
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const setCart = (items) => {
    dispatch({ type: 'SET_CART', payload: items });
  };

  const addToCart = async (userId, productId, quantity) => {
    try {
      const res = await axios.post('https:localhost:3389/cart', { userId, productId, quantity });
      dispatch({ type: 'ADD_TO_CART', payload: res.data });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`https:localhost:3389/cart/${cartItemId}`);
      dispatch({ type: 'REMOVE_FROM_CART', payload: cartItemId });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItem = async (cartItemId, quantity) => {
    try {
      const res = await axios.patch(`https:localhost:3389/cart/${cartItemId}`, { quantity });
      dispatch({ type: 'UPDATE_CART_ITEM', payload: res.data });
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
