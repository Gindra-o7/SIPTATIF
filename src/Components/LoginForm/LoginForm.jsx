import "./LoginForm.css";
import { FaUserAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://siptatif-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        localStorage.setItem("userEmail", email);
        navigate("/dashboard");
      } else {
        const result = await response.json();
        setErrorMessage(result.message || "Login gagal. Silakan coba lagi.");
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="input-box">
            <FaUserAlt className="icon" />
            <input
              type="text"
              placeholder="Email"
              style={{ paddingLeft: "15px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              style={{ paddingLeft: "15px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordVisible ? (
              <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Ingat Saya
            </label>
            <Link to="/lupapsw">Forgot Password</Link>
          </div>

          <button type="submit">
            Masuk
          </button>

          <div className="register-link">
            <p>
              Tidak punya akun? <Link to="/register">Daftar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
