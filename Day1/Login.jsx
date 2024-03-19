import React, { useState } from 'react';
import "../assets/css/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import logo2 from "../assets/images/logo2.png";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHolder = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (email.length === 0 || password.length === 0) {
      alert("Enter all the fields");
    } else if (!regex.test(email)) {
      alert("Enter a valid Email Address");
    } else if (password.length < 8) {
      alert("Enter at least 8 characters in password");
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formHolder}>
        <img className="logoo" src={logo2} alt="logo" width="50px" height="50px"/>
        <h2>LOGIN</h2>
        <p>Celestial Cruises</p>
        <div className="form-groupl">
          <label>Email</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-groupl">
          <label>Password</label>
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className='logbut'>
        <button type="submit" id='sibtn'>Login</button>
        </div>
        <div className="lsignup">
          <p1>Don't have an account? <Link to='/register'>Sign Up</Link></p1>
        </div>
      </form>
    </div>
  );
};
