import React, { useState } from 'react';
import { Router, Route, useNavigate, Outlet } from 'react-router-dom';
import './LogoutUser.css'
import { toast } from 'react-toastify';
export function LogoutUser() {

    // const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const BACKENDURL = import.meta.env.VITE_BACKEND_URL;


    const logoutUserFn = async () => {
        try {
            const response = await fetch(`${BACKENDURL}/user/logout`, {
                method: 'POST',
                credentials: 'include'
            })
            const result = await response.json();
            console.log("result of logout-> " + result);
            for (const key in result) {
                console.log(`${key}: ${result[key]}`);
            }

            if (result.ok) {
                // setMessage(result.message || "Logout successfully!")
                toast.success(result.message || "Logout successfully!");
                navigate("/user/login");

            } else {
                toast.error(result.message || "Logout Failed!" )
                // setMessage(result.message || "Logout Failed!")
            }
        } catch (error) {
            toast.error(error?.message || error || "Logout Failed! in bitween")
            console.log("logout user error "+error);
            
        }
    }


    return (
        <>
            <h1>Logout page</h1><br/>
            <button className='logoutBtn' onClick={logoutUserFn}>log out</button>
            {/* <div>message: {message}</div> */}
        </>
    );
}