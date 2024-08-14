import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import login from '../components/photo/login.png'

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
    <div className="login-container">
      <img src={login} alt="" />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign in</h2>
        <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <p>forgot password?</p>
        </div>
        <button type="submit" className="btn btn-success">Sign in</button>
        <p>or sign in using</p>
      </form>
    </div>
  );
}

export default Login;