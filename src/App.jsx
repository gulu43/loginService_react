import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { LoginUser } from './LoginUser.jsx';
import { SignupUser } from './SignupUser.jsx';
import { RefreshUser } from './RefreshUser.jsx';
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
          <Route path="/user/auth/refresh" element={< RefreshUser />} />
          <Route path="/" element={<Navigate to="/user/login" />} /> {/* redirect root to login */}
          <Route path="*" element={<Navigate to="/user/login" />} /> {/* for unknown paths */}
        </Routes>
      </div>
    </div>
  );
}

// import { LoginUser } from './LoginUser.jsx'
// import { SignupUser } from './SignupUser.jsx'
// import { useState, useEffect } from 'react'
// import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
// import './App.css'

// function App() {
//   const [isLogin, setIsLogin] = useState(true)
//   return (
//     <>
//       <div className='RadioAndPageContainer'>

//         <div className='RadioCounter'>
//           <input type="radio" name="LoginService" id="loginRadioId" className='loginRadio' onClick={() => setIsLogin(true)} defaultChecked />
//           <label htmlFor="loginRadioId">Login</label>

//           <input type="radio" name="LoginService" id="registerRadioId" className='registerRadio' onClick={() => setIsLogin(false)} />
//           <label htmlFor="registerRadioId">Register</label>
//         </div>

//         <div className='pageContainer'>
//           {(isLogin === true) ? <LoginUser /> : <SignupUser />}
//         </div>

//       </div>
//     </>
//   )
// }

// export default App

// {/* <Link to="/user/login" className='link_text'></Link>
// <Link to="/user/register" className='link_text'></Link> */}