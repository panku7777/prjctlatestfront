import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';


function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    async function register() {
        if (password === cpassword) {
          const user = {
            name,
            email,
            password,
            cpassword,
          };
          try {
            
             await axios.post('http://localhost:3005/api/users/register', user);
            
            setName('');
            setEmail('');
            setPassword('');
            setCpassword('');
            alert("Registered Sucessfully")
          } catch (error) {
           
            console.log(error);
          }
        } else {
          alert('Passwords do not Match');
        }
      }


    return (
        <div className='signup template d-flex justify-content-center align-items-center 100-vh bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="fname">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}  /> 
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lname">Email</label>
                        <input type="text" placeholder='Email' className='form-control' value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }}  /> 
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }}  /> 
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder='Enter Password ' className='form-control' value={cpassword} onChange={(e) => {
                            setCpassword(e.target.value);
                        }}  /> 
                    </div>

                   

                    <div className='d-grid'>
                        <button type="button" className='btn btn-primary' onClick={register}>Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered? <Link to="/login" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
