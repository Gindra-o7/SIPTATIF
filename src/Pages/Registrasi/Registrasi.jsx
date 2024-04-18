import LoginPages from "../../Components/BackgroundDesign/LoginPages";
import Register from "../../Components/RegisterForm/Register";

const Registrasi = () => {
  return (
    <div>
      <LoginPages />
      <div className="login-form">
        <Register />
      </div>
    </div>
  );
};

export default Registrasi;
