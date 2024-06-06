import { useState, useEffect } from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/Profile.png";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      if (!token || !userEmail) {
        console.error("No token or user email found");
        return;
      }

      try {
        const response = await fetch("https://siptatif-backend.vercel.app/api/auth/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const { data } = await response.json();
        const user = data.find(user => user.email === userEmail);
        setUsername(user ? user.nama : "Unknown User");
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

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
              <h3>{username}</h3>
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
