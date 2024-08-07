// import React, { useState, useEffect } from 'react'
// import './Signup.css'  

// function Signup() {
//   const [formdata, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const [isActive, setIsActive] = useState(false)

//   useEffect(() => {
//     setIsActive(true)
//   }, [])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formdata)
//   }

//   return (
//     <div className={`signup-container ${isActive ? 'active' : ''}`}>
//       <div className="signup-form">
//         <form onSubmit={handleSubmit}>
//           <h2>Signup Page</h2>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name='name' value={formdata.name} onChange={handleInputChange} />
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name='email' value={formdata.email} onChange={handleInputChange} />
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name='password' value={formdata.password} onChange={handleInputChange} />
//           <button type='submit' className='btn btn-success mt-3'>Signup</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3389/signup', formData);
      if (response.data.success) {
        navigate('/'); // Redirect to home or another page after successful signup
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Signup failed. Please check your details.');
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Signup Page</h2>
          {error && <p className="error">{error}</p>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn btn-success mt-3">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
