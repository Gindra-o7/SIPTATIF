import LoginForm from "../../Components/LoginForm/LoginForm";
import LoginPages from "../../Components/BackgroundDesign/LoginPages";

const Login = () => {
  return (
    <div>
      <LoginPages />
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
