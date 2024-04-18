import './ConfirmPassword.css'
import { Link } from 'react-router-dom'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from 'react';

const ConfirmPassword = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  return (
    <div className='wrapper'> 

        <form action="">

            <h1>Password Baru</h1>
            
            <div className="input-box">
              <input type={passwordVisible1 ? "text" : "password"} placeholder='Password Baru' required/>
              {passwordVisible1 ? (
                <FaEye className='eye-icon' onClick={togglePasswordVisibility1} />
              ) : (
                <FaEyeSlash className='eye-icon' onClick={togglePasswordVisibility1} />
              )}
            </div>

            <div className="input-box">
              <input type={passwordVisible2 ? "text" : "password"} placeholder='Konfirmasi Password Baru' required/>
              {passwordVisible2 ? (
                <FaEye className='eye-icon' onClick={togglePasswordVisibility2} />
              ) : (
                <FaEyeSlash className='eye-icon' onClick={togglePasswordVisibility2} />
              )}
            </div>
            
            <Link to='/'>
                <button type='submit'>Masuk</button>
            </Link>

        </form>

    </div>
  )
}

export default ConfirmPassword