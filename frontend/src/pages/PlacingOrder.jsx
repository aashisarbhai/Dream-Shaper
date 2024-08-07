// // PlacingOrder.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const PlacingOrder = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     phone: '',
//     email: '',
//     address: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//     const response = await axios.post('http://localhost:3389/order', formData);
//     if (response.data.success)
//     { navigate(`/product-summary/${id}`, { state: { formData } });}}
//     catch (err) {
//         if (err.response && err.response.status === 401) {
//           setError('Invalid ');
//         } else {
//           setError('Server error. Please try again later.');
//         }
//       }
//   }

//   return (
//     <div className="placing-order">
//       <h1>Placing Order</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Phone:</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default PlacingOrder;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PlacingOrder = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const { id: productId } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3389/order', {
        productId,
        phone,
        email,
        address,
      });

      if (response.status === 201) {
        console.log("Order created");
        const orderId = response.data._id;
        navigate(`/product-summary/${orderId}`);
      } else {
        console.error('Failed to place order', response);
      }
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PlacingOrder;

