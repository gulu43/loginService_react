import { Routes, Route, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { LoginUser } from './LoginUser.jsx';
import { SignupUser } from './SignupUser.jsx';
import { RefreshUser } from './RefreshUser.jsx';
import { LogoutUser } from './LogoutUser.jsx';
import { HomePage } from './HomePage.jsx';
import { AuthLayout } from './AuthLayout.jsx';
import { Slider } from './Slider.jsx';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export const Message_Passing_Data = createContext();

export default function App() {

  const [currentSockitID, setCurrentSockitID] = useState('');
  const [email, setEmail] = useState('');
  const [reciver, setReciver] = useState('');

  return (
    < Message_Passing_Data.Provider value={{ currentSockitID, setCurrentSockitID, email, setEmail, reciver, setReciver }}>

      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/user/login" element={<LoginUser />} />
          <Route path="/user/register" element={<SignupUser />} />
        </Route>

        {/* <Route path="/user/udata" element={<LoginUser />} /> */}
        <Route path='/user/logout' element={<LogoutUser />} />
        <Route path="/user/auth/refresh" element={< RefreshUser />} />
        <Route path="/user/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/user/login" />} /> {/* redirect root to login */}
        <Route path="*" element={<Navigate to="/user/login" />} />

      </Routes>
      <ToastContainer position="top-center" autoClose={5000} theme='dark' />

    </ Message_Passing_Data.Provider >
  );
}
