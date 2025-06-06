import { useState, useEffect } from 'react';
import './SignupUser.css'

export function SignupUser() {
  // const PORT = import.meta.env.VITE_PORT || 8000;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  
  let [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
    profilePhoto: ""
  });

  let [message, setMessage] = useState("");

  let sendDataForRegisterFn = async () => {
    console.log("is null? ",data);
    
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("fullName", data.fullName);
      if (data.password == "") {
        console.error("password is required");
        // return { message: "password is required"}
      }
      formData.append("password", data.password);
      formData.append("profilePhoto", data.profilePhoto); 

      const response = await fetch(`${BACKEND_URL}/user/signup`, {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data) 
      });

      const result = await response.json();
      console.log("response from server ",result);
      
      if (response.ok) {
        setMessage(result.message || "Registered successfully!");
      } else {
        setMessage(result?.error?.message || result?.message || "Registration failed!");
      }
    } catch (error) {
      console.log("Error while sending data", error?.message);
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
          <input type="password" id="passwordInpId" className='Inp' required onChange={(e) => {
            setData((prev) => ({
              ...prev,
              password: e.target.value
            }))
          }} />
        </div>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='avatarPhotoInpId' className='Label'>Profile Photo: </label>
          <input type="file" name="profilePhoto" id="avatarPhotoInpId" className='Inp' onChange={(e) => {
            setData((prev) => ({
              ...prev,
              profilePhoto: e.target.files[0]
            }))
          }} />
        </div>

        <div>
          <button className='SignupBtn' onClick={sendDataForRegisterFn}>Create</button>
        </div>

       {message && <p style={{ marginTop: "10px", color: "whitesmoke" }}>{message}</p>}
      </div>
    </>
  );
}
