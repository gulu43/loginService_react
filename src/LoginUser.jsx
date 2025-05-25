import { useState, useEffect } from 'react';
import './LoginUser.css'

export function LoginUser() {
  const PORT = import.meta.env.VITE_PORT || 8000;
  let [data, setData] = useState({
    email: "",
    password: ""
  })
  let sendDataForLoginFn = async ()=>{
    // "http://localhost:5250/user/login"
    //  here
    fetch(`http://localhost:${PORT}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data) 
    })
    .then((res)=>{
      console.log("You are Logined Succesfully",res)
    })
    .catch((error)=>{
      console.log("error while sending data",error?.message)
    })
  }
  
  return (
    <>

      <h1 className='topHeading'>Login Page</h1>

      <div className='fieldsContainer'>
        <div className='emailLableAndTextContainer'>
          <label htmlFor='emailInpId' className='emailLabel'>Email: </label>
          <input type="email" name="" id="emailInpId" className='emailInp' onChange={(e)=>{
            setData((prev)=>({
              ...prev,
              email: e.target.value 
            }))
            
            }} />
        </div>
        <div className='passwordLableAndTextContainer'>
          <label htmlFor='passwordInpId' className='passwordLabel'>Password: </label>
          <input type="password" name="" id="passwordInpId" className='passwordInp' onChange={(e)=>{
            setData((prev)=>({
              ...prev,
              password: e.target.value
            }))
          }} />
        </div>
        <div>
          <button className='loginBtn' onClick={ sendDataForLoginFn }>Log-in</button>
        </div>

      </div>

    </>
  );
}