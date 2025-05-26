import { useState, useEffect } from 'react';
import './LoginUser.css'

export function LoginUser() {
  const PORT = import.meta.env.VITE_PORT || 8000;

  let [data, setData] = useState({
    email: "",
    password: ""
  });

  let [message, setMessage] = useState("");

  let sendDataForLoginFn = async () => {
    const response = await fetch(`http://localhost:${PORT}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (response.ok) {
      setMessage(result.message || "Login successful!");
    } else {
      setMessage(result.message || "Login failed!");
    }
  }

  return (
    <>

      <h1 className='topHeading'>Login Page</h1>

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

        {message && <p style={{ marginTop: "10px", color: "whitesmoke" }}>{message}</p>}
      </div>

    </>
  );
}