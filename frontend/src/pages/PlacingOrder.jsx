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
