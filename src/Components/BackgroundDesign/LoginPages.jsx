import "./LoginPages.css";
import Background1 from "../../assets/background1.jpg";
import Background2 from "../../assets/background2.jpg";
import Background3 from "../../assets/background3.jpg";
import Background4 from "../../assets/background4.jpg";
import Background5 from "../../assets/background5.jpg";
import Background6 from "../../assets/background6.jpg";
import Background7 from "../../assets/background7.jpg";
import Background8 from "../../assets/background8.jpg";
import Logo from "../../assets/logo.png";

const LoginPages = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo UIN SUSKA" />
          <div className="nama">
            <h1 style={{}}>SIPTATIF</h1>
            <p>Sistem Informasi Pendaftaran Tugas Akhir Teknik Informatika</p>
          </div>
        </div>
      </div>
      <figure className="marquee marquee--8">
        <img
          className="marquee__item"
          src={Background1}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background2}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background3}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background4}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background5}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background6}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background7}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background8}
          width="300"
          height="250"
          alt="Background"
        />
      </figure>
      <figure className="marquee marquee--6">
        <img
          className="marquee__item"
          src={Background5}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background4}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background8}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background7}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background1}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background6}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background2}
          width="300"
          height="250"
          alt="Background"
        />
        <img
          className="marquee__item"
          src={Background3}
          width="300"
          height="250"
          alt="Background"
        />
      </figure>
    </div>
  );
};

export default LoginPages;
