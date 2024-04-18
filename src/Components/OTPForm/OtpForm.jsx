import {useEffect} from 'react'
import './OtpForm.css'
import { Link } from 'react-router-dom';

const OtpForm = () => {
  useEffect(() => {
    function addListener(input) {
      input.addEventListener("keyup", () => {
        const code = parseInt(input.value);
        if (code >= 0 && code <= 9) {
          const n = input.nextElementSibling;
          if (n) n.focus();
        } else {
          input.value = "";
        }

        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
          const prev = input.previousElementSibling;
          if (prev) prev.focus();
        }
      });
    }

    const inputs = ["input1", "input2", "input3", "input4"];

    inputs.forEach((id) => {
      const input = document.getElementById(id);
      addListener(input);
    });
  }, []);

  return (
    <div className='wrapper'> 
        <form action="">
            <h1>OTP</h1>

            <div className="title">Kode Verifikasi</div>

            <p>Masukkan 4 digit angka yang sudah dikirimkan ke email anda.</p>

            <div className="input-otp">
              <input id='input1' type="text" maxLength="1"/>
              <input id='input2' type="text" maxLength="1"/>
              <input id='input3' type="text" maxLength="1"/>
              <input id='input4' type="text" maxLength="1"/>
            </div>

            <div className='register-link'>
              <p>Tidak menerima kode ? <a href="#">Kirim Ulang</a></p>
            </div>

            <Link to="/">
              <button type='submit'>Verifikasi</button>
            </Link>
            
        </form>
    </div>
  )
}

export default OtpForm