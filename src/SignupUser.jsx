import { useState, useEffect } from 'react';
import './SignupUser.css'

export function SignupUser() {
  const PORT = import.meta.env.VITE_PORT || 8000;
  let [data, setData] = useState({
    email: "",
    fullName: "",
    password: ""
  });

  let [message, setMessage] = useState("");
  let [isSuccess, setIsSuccess] = useState(null); // ✅ new state

  let sendDataForRegisterFn = async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true); // ✅ mark as success
        setMessage(result.message || "Registered successfully!");
      } else {
        setIsSuccess(false); // ✅ mark as failure
        setMessage(result.message || "Registration failed!");
      }
    } catch (error) {
      console.log("Error while sending data", error?.message);
      setIsSuccess(false); // ✅ mark as failure
      setMessage("Network error or server not responding.");
    }
  };

  return (
    <>
      <h1 className='topHeading'>Sign-up Page</h1>

      <div className='fieldsContainer'>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='emailInpId' className='Label'>Email: </label>
          <input type="email" id="emailInpId" className='Inp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              email: e.target.value
            }))
          }} />
        </div>

        <div className='ContainerForLableAndInput'>
          <label htmlFor='fullNameInpId' className='Label'>Full name: </label>
          <input type="text" id="fullNameInpId" className='Inp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              fullName: e.target.value
            }))
          }} />
        </div>

        <div className='ContainerForLableAndInput'>
          <label htmlFor='passwordInpId' className='Label'>Password: </label>
          <input type="password" id="passwordInpId" className='Inp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              password: e.target.value
            }))
          }} />
        </div>

        <div>
          <button className='SignupBtn' onClick={sendDataForRegisterFn}>Create</button>
        </div>

       
        {message && (
          <p style={{ marginTop: "10px", color: isSuccess ? "green" : "red" }}>
            {message}
          </p>
        )}
      </div>
    </>
  );
}
