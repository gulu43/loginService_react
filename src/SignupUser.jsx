import './SignupUser.css'
export function SignupUser() {
  return (
    <>
      <h1 className='topHeading'>Sign-up Page</h1>

      <div className='fieldsContainer'>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='emailInpId' className='Label'>Email: </label>
          <input type="email" name="" id="emailInpId" className='Inp' />
        </div>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='fullNameInpId' className='Label'>Full name: </label>
          <input type="text" name="" id="fullNameInpId" className='Inp' />
        </div>
        <div className='ContainerForLableAndInput'>
          <label htmlFor='passwordInpId' className='Label'>Password: </label>
          <input type="password" name="" id="passwordInpId" className='Inp' />
        </div>
        <div>
          <button className='SignupBtn'>Create</button>
        </div>

      </div>
    </>
  );
}