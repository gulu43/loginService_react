import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';

import './App.css';

export function Slider() {

    const navigate = useNavigate();       // allows URL changes (like navigate("/login"))
    const location = useLocation();
    const isLogin = location.pathname === "/user/login";

    return (
        <>
            <div className='RadioCounter'>
                <input type="radio" id="loginRadioId" name="LoginService" checked={isLogin}
                    onChange={() => navigate("/user/login")} />
                <label htmlFor="loginRadioId">Login</label>

                <input type="radio" id="registerRadioId" name="LoginService" checked={!isLogin}
                    onChange={() => navigate("/user/register")} />
                <label htmlFor="registerRadioId">Register</label>
            </div>
        </>
    );
}