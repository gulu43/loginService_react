import './LoginUser.css'

export function LoginUser() {
  return (
    <>

      <h1 className='topHeading'>Login Page</h1>

      <div className='fieldsContainer'>
        <div className='emailLableAndTextContainer'>
          <label htmlFor='emailInpId' className='emailLabel'>Email: </label>
          <input type="email" name="" id="emailInpId" className='emailInp' />
        </div>
        <div className='passwordLableAndTextContainer'>
          <label htmlFor='passwordInpId' className='passwordLabel'>Password: </label>
          <input type="password" name="" id="passwordInpId" className='passwordInp' />
        </div>
        <div>
          <button className='loginBtn'>Log-in</button>
        </div>

      </div>

    </>
  );
}