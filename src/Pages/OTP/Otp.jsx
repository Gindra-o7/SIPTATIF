import LoginPages from "../../Components/BackgroundDesign/LoginPages";
import OtpForm from "../../Components/OTPForm/OtpForm";

const Otp = () => {
  return (
    <div>
      <LoginPages />
      <div className="login-form">
        <OtpForm />
      </div>
    </div>
  );
};

export default Otp;
