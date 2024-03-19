import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Register.css";
import { useNavigate } from 'react-router-dom';
import regg from "../assets/images/regnew.webp";
import logo2 from '../assets/images/logo2.png';

import { Link } from 'react-router-dom';
export default function Register() {
    const navigate=useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const[password,setPassword]=useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(username.length===0 || email.length===0 || mobile.length===0 || password.length===0)
    {
      alert("Enter all the fields");
    }
    if(!regex.test(email))
    {
      alert("Enter a valid Email Address");
    }
    if(password.length<8)
    {
      alert("Enter atleast 8 characters in password");
    }
    if(mobile.length<10)
    {
      alert("Enter atleast 10 characters in mobile number");
    }
    else{
        navigate('/');
      }
    }
 

  return (
    <div className="register-container" > 
         {/* <img className="aqualogo" src={logo2} width="40px" height="40px"/>
         <div className="name">
            <p>Celestial Cruises</p>
        </div>  */}
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Create an Account</h2>
          <div className="form-groupr">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="form-groupr">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="form-groupr">
            <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
            <FontAwesomeIcon icon={faMobileAlt} className="icon" />
          </div>
          <div className="form-groupr">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
          <div className='regbut'>
          <button type="submit">Sign Up</button>
          </div>
          <div className="login">
            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
          </div>
        </form>
      </div>
      <div className="reg-image">
        <img src={regg}/>
      </div>
    </div>
  )
}
