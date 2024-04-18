import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import './Register.css'
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  const dummyData = {
    name: "Fulan Bin Fulan",
    email: "fulanbinfulan@example.com",
    nim: "123456789",
  };

  return (
    <div className='wrapper'> 
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder={dummyData.name} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder={dummyData.nim} required/>
            </div>
            <div className="input-box">
              <input type="text" placeholder={dummyData.email} required/>
            </div>
            <div className="input-box">
              <input type={passwordVisible1 ? "text" : "password"} placeholder='Password' required/>
              {passwordVisible1 ? (
                <FaEye className='eye-icon' onClick={togglePasswordVisibility1} />
              ) : (
                <FaEyeSlash className='eye-icon' onClick={togglePasswordVisibility1} />
              )}
            </div>
            <div className="input-box">
              <input type={passwordVisible2 ? "text" : "password"} placeholder='Konfirmasi Password' required/>
              {passwordVisible2 ? (
                <FaEye className='eye-icon' onClick={togglePasswordVisibility2} />
              ) : (
                <FaEyeSlash className='eye-icon' onClick={togglePasswordVisibility2} />
              )}
            </div>

            <Link to="/otp">
              <button type='submit'>Daftar</button>
            </Link>

            <div className='register-link'>
              <p>Sudah punya akun ? <Link to="/">Masuk</Link></p>
            </div>
            
        </form>
    </div>
  )
}

export default Register