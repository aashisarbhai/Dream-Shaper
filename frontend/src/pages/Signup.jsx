import React, { useState } from 'react';
import './Signup.css';
import signin from '../components/photo/signin.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const [agreeTerms, setAgreeTerms] = useState(false);
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
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3389/signup', formData);
      if (response.data.success) {
        navigate('/');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      // Send the credential to your backend
      const response = await axios.post('http://localhost:3389/google-signup', {
        credential: credentialResponse.credential
      });
      if (response.data.success) {
        navigate('/');
      }
    } catch (err) {
      setError('Google sign-up failed. Please try again.');
    }
  };

  const handleGoogleError = () => {
    setError('Google sign-up failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="106377916370-53qjpob36k9knqumc8ugp1bokvtgas5i.apps.googleusercontent.com">
      <div className="signup-container">
        <img src={signin} alt=" " />
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
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
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="terms">I hereby agree to all the terms & conditions</label>
          </div>
          <button type="submit" className="btn btn-success">Sign Up</button>
          <p>or sign up using</p>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Signup;