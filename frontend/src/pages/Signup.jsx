import React, { useState } from 'react'
import './Signup.css';
import login from '../components/photo/login.png'
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    console.log(formData)
  }
  
  return (
    <div className="signup-container">
      <img src={login} alt=" " />
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
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
        <p>or sign in using</p>
      </form>
    </div>
  )
}

export default Signup