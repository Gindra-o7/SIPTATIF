import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const dummyData = {
    email: "fulanbinfulan@example.com",
  };
  return (
    <div className="wrapper">
      <form action="">
        <h1>Lupa Password</h1>

        <p>Masukkan email yang terdaftar</p>

        <div className="input-email">
          <input type="text" placeholder={dummyData.email} required />
        </div>

        <Link to="/otplupa">
          <button type="submit">Kirimkan</button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
