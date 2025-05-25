import { useState, useEffect } from 'react';
import './SignupUser.css'

export function SignupUser() {
  const PORT = import.meta.env.VITE_PORT || 8000;
    let [data, setData] = useState({
      email: "",
      fullName: "",
      password: ""
    })
    let sendDataForRegisterFn = async ()=>{
      // "http://localhost:5250/user/signup"
      //  here
      fetch(`http://localhost:${PORT}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data) 
      })
      .then((res)=>{
        console.log("You are Registered Succesfully",res)
      })
      .catch((error)=>{
        console.log("error while sending data",error?.message)
      })
    }
  return (
    <>
      <h1 className='topHeading'>Sign-up Page</h1>

      <div className='fieldsContainer'>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='emailInpId' className='Label'>Email: </label>
          <input type="email" name="" id="emailInpId" className='Inp' onChange={(e)=>{
            setData((prev)=>({
              ...prev,
              email: e.target.value 
            }))
            
            }}/>
        </div>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='fullNameInpId' className='Label'>Full name: </label>
          <input type="text" name="" id="fullNameInpId" className='Inp' onChange={(e)=>{
            setData((prev)=>({
              ...prev,
              fullName: e.target.value
            }))
          }}/>
        </div>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='passwordInpId' className='Label'>Password: </label>
          <input type="password" name="" id="passwordInpId" className='Inp' onChange={(e)=>{
            setData((prev)=>({
              ...prev,
              password: e.target.value
            }))
          }}/>
        </div>
        <div>
          <button className='SignupBtn' onClick={ sendDataForRegisterFn } >Create</button>
        </div>

      </div>
    </>
  );
}