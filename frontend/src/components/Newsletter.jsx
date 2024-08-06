// src/component/Newsletter.js
import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await axios.post('http://localhost:3389/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Subscribe to our Newsletter</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-success mt-3">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
