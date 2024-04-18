import { useState } from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/Profile.jpg";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <div className="hero">
      <nav>
        <div className="logo-img">
          <img src={Logo} alt="Logo" />
          <p>SIPTATIF.</p>
        </div>
        <img
          className="profile"
          src={Profile}
          alt="Profile Pic"
          onClick={toggleMenu}
        />

        <div className={`sub-menu-wrap ${isSubMenuOpen ? 'open-menu' : ''}`} id="subMenu">
          <div className="sub-menu">
            <div className="user-info">
              <img src={Profile} alt="" />
              <h3>Fulan Bin Fulan</h3>
            </div>
            <hr />
            <Link to="/profile" className="sub-menu-link">
              <FaUser className="img" />
              <p>Edit Profil</p>
              <span>{">"}</span>
            </Link>
            <Link to="/" className="sub-menu-link">
              <RiLogoutBoxRFill className="img" />
              <p style={{ color: "#d1001f" }}>Keluar</p>
              <span>{">"}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
