import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Password dan Konfirmasi Password tidak sama");
      return;
    }

    setErrorMessage("");

    const data = {
      email: email,
      password: password,
      nama: fullName,
    };

    try {
      const response = await fetch(
        "https://siptatif-backend.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSuccessMessage("Registrasi berhasil! Silakan login.");
        setErrorMessage("");
        localStorage.setItem("namaLengkap", fullName)
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const result = await response.json();
        setErrorMessage(
          result.message || "Registrasi gagal. Silakan coba lagi."
        );
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Nama Lengkap"
            style={{ paddingLeft: "15px" }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
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
            type={passwordVisible1 ? "text" : "password"}
            placeholder="Password"
            style={{ paddingLeft: "15px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordVisible1 ? (
            <FaEye className="eye-icon" onClick={togglePasswordVisibility1} />
          ) : (
            <FaEyeSlash
              className="eye-icon"
              onClick={togglePasswordVisibility1}
            />
          )}
        </div>
        <div className="input-box">
          <input
            type={passwordVisible2 ? "text" : "password"}
            placeholder="Konfirmasi Password"
            style={{ paddingLeft: "15px" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {passwordVisible2 ? (
            <FaEye className="eye-icon" onClick={togglePasswordVisibility2} />
          ) : (
            <FaEyeSlash
              className="eye-icon"
              onClick={togglePasswordVisibility2}
            />
          )}
        </div>
        {errorMessage && <p className="error-message" style={{marginBottom : "5dp"}}>{errorMessage}</p>}
        {successMessage && <p className="success-message" style={{marginBottom : "5dp"}}>{successMessage}</p>}

        <button type="submit">Daftar</button>

        <div className="register-link">
          <p>
            Sudah punya akun ? <Link to="/">Masuk</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
