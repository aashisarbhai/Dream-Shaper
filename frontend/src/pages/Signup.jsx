import React, { useState, useEffect } from 'react'
import './Signup.css'  

function Signup() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formdata)
  }

  return (
    <div className={`signup-container ${isActive ? 'active' : ''}`}>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Signup Page</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name='name' value={formdata.name} onChange={handleInputChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' value={formdata.email} onChange={handleInputChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' value={formdata.password} onChange={handleInputChange} />
          <button type='submit' className='btn btn-success mt-3'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup