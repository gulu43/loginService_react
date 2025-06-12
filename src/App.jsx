import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { LoginUser } from './LoginUser.jsx';
import { SignupUser } from './SignupUser.jsx';
import { RefreshUser } from './RefreshUser.jsx';
import './App.css';

export default function App() {
  const navigate = useNavigate();       // allows URL changes (like navigate("/login"))
  const location = useLocation();       // tells us current path (like "/login" or "/register")
4
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
          <Route path="/user/auth/refresh" element={< RefreshUser />} />
          <Route path="/" element={<Navigate to="/user/login" />} /> {/* redirect root to login */}
          <Route path="*" element={<Navigate to="/user/login" />} /> 
        </Routes>
      </div>
    </div>
  );
}
