import "./LoginForm.css";
import { FaUserAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/dashboard");
  };

  const dummyData = {
    email: "fulanbinfulan@example.com"
  };

  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <FaUserAlt className="icon" />
            <input type="text" placeholder={dummyData.email} required />
          </div>

          <div className="input-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
            />
            {passwordVisible ? (
              <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEyeSlash
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Ingat Saya
            </label>
            <Link to="/lupapsw">Forgot Password</Link>
          </div>

          <button type="button" onClick={handleRedirectToHome}>
            Masuk
          </button>

          <div className="register-link">
            <p>
              Tidak punya akun ? <Link to="/register">Daftar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
