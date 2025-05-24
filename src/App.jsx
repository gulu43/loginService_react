import { useState, useEffect } from 'react'
import './App.css'
import { LoginUser } from './loginUser.jsx'
import { SignupUser } from './signupUser.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <div className='RadioAndPageContainer'>

        <div className='RadioCounter'>
          <input type="radio" name="LoginService" id="loginRadioId" className='loginRadio' onClick={() => setIsLogin(true)} defaultChecked />
          <label htmlFor="loginRadioId">Login</label>

          <input type="radio" name="LoginService" id="registerRadioId" className='registerRadio' onClick={() => setIsLogin(false)} />
          <label htmlFor="registerRadioId">Register</label>
        </div>

        <div className='pageContainer'>
          {(isLogin === true) ? <LoginUser /> : <SignupUser />}
        </div>

      </div>
    </>
  )
}

export default App
