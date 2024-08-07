//src/component/signup
import React, { useState } from 'react'
import './Signup.css';

function Signup() {
   const [formdata,setFormData] = useState({
    name:"",
    email:"",
    password:""
   })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    const handleSubmit =  (e)=>{
      e.preventDefault()
        console.log(formdata)
      }
    
      return (
        <div>
          
             <form onSubmit={handleSubmit}>
            <h2>Signup Page</h2>
            <label htmlFor=""> Name</label>
            <input type="text" name='name' value={formdata.name} onChange={handleInputChange} />
            <label htmlFor="">email</label>
            <input type="text" name='email' value={formdata.email} onChange={handleInputChange}  />
            <label htmlFor="">password</label>
            <input type="text" name='password' value={formdata.password} onChange={handleInputChange}  />
            <button type='submit' className='btn btn-success mt-3'>Signup</button>
           </form>
    
        </div>
      )
    }
    
    export default Signup
