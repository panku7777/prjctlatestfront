import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Loginscreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function Login(e) {
        e.preventDefault(); // Prevent the default form submission behavior
      
        const user = {
          email,
          password
        };
      
        try {
          const response = await axios.post('http://localhost:3005/api/users/login', user);
          const result = response.data;
          navigate('/panel');
        } catch (err) {
          console.error(err);
          alert('Login Failed');
        }
      }
      

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
      <div className='40-w p-5 rounded'>
        {/* Add content for the rounded div if needed */}
      </div>
      <form>
        <h3>Sign In</h3>
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}  /> 
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }}  /> 
        </div>
        
        <div className='d-grid'>
          <button className='btn btn-primary' onClick={Login}>Sign in</button>
        </div>
        <br></br>
        <p className='text-center'>
        
        Not a user?<a href='/signup'>Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Loginscreen;
