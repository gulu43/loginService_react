import { useState, useEffect } from 'react';
import { Router, Route, useNavigate, Outlet } from 'react-router-dom';
import { RefreshUser } from './RefreshUser.jsx';
import './LoginUser.css'

export function LoginUser() {
  // const PORT = import.meta.env.VITE_PORT || 8000;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  let [data, setData] = useState({
    email: "",
    password: ""
  });

  let [message, setMessage] = useState("");

  let sendDataForLoginFn = async () => {
    const response = await fetch(`${BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include"
    });
    const result = await response.json();

    if (response.ok) {
      setMessage(result.message || "Login successful!");
    } else {
      setMessage(result.message || "Login failed!");
    }

  }
  
  const navigate = useNavigate();
  
  let loginWithJWTFn = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/user/auth/refresh`, {
      method: "POST", 
      credentials: "include", // for sending the cookie
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(result.message || "Auto-login successful!");
      navigate("/user/udata"); 
    } else {
      setMessage(result.message || "Session expired. Please log in.");
    }
  } catch (err) {
    setMessage("Network error or backend not available.");
  }
};


  return (
    <>
      
      <h1 className='topHeading'>Login Page</h1>
      {/* <Outlet></Outlet> */}

      <div className='fieldsContainer'>
        <div className='emailLableAndTextContainer'>
          <label htmlFor='emailInpId' className='emailLabel'>Email: </label>
          <input type="email" name="" id="emailInpId" className='emailInp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              email: e.target.value
            }))

          }} />
        </div>
        <div className='passwordLableAndTextContainer'>
          <label htmlFor='passwordInpId' className='passwordLabel'>Password: </label>
          <input type="password" name="" id="passwordInpId" className='passwordInp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              password: e.target.value
            }))
          }} />
        </div>
        <div>
          <button className='loginBtn' onClick={sendDataForLoginFn}>Log-in</button>
        </div>

        <div>
          <button className='loginBtn' onClick={loginWithJWTFn}>Log-in with JWT</button>
        </div>

        {message && <p style={{ marginTop: "10px", color: "whitesmoke" }}>{message}</p>}
        
      </div>
    
    </>
  );
}