import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3389/login', formData);
      if (response.data.success) {
        navigate('/');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-success mt-3">Login</button>
        <button type="button" className="btn btn-primary mt-3" onClick={() => window.location.href = '/Signup'}>Signup</button>
      </form>
    </div>
  );
}

export default Login;