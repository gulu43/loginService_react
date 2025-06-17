import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LoginUser } from './LoginUser.jsx';
import { SignupUser } from './SignupUser.jsx';
import { RefreshUser } from './RefreshUser.jsx';
import { LogoutUser } from './LogoutUser.jsx';
import './App.css';

export default function App() {
  const navigate = useNavigate();       // allows URL changes (like navigate("/login"))
  const location = useLocation();       // tells us current path (like "/login" or "/register")

  const isLogin = location.pathname === "/user/login"; // boolean for checked state

  return (
    <div className='RadioAndPageContainer'>

      {/* --------- Radio button navigation ----------- */}
      <div className='RadioCounter'>
        <input type="radio" id="loginRadioId" name="LoginService" checked={isLogin}
         onChange={() => navigate("/user/login")} /> 
        <label htmlFor="loginRadioId">Login</label>

        <input type="radio" id="registerRadioId" name="LoginService" checked={!isLogin}
         onChange={() => navigate("/user/register")} />
        <label htmlFor="registerRadioId">Register</label>
      </div>

      {/* --------- Component rendering based on URL ----------- */}
      <div className='pageContainer'>
        <Routes>
          <Route path="/user/login" element={<LoginUser />} />
          <Route path="/user/register" element={<SignupUser />} />
          {/* <Route path="/user/udata" element={<LoginUser />} /> */}
          <Route path='/user/logout' element={ <LogoutUser/> }/>
          <Route path="/user/auth/refresh" element={< RefreshUser />} />
          <Route path="/" element={<Navigate to="/user/login" />} /> {/* redirect root to login */}
          <Route path="*" element={<Navigate to="/user/login" />} /> 
        </Routes>
        <ToastContainer position="top-center" autoClose={4000} theme='dark' />
      </div>
    </div>
  );
}
