import "./Sidebar.css";
import { FaHome, FaEdit, FaChalkboardTeacher } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <nav className="sidebar">
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-link">
              <li className="nav-link">
                <Link to="/dashboard">
                  <FaHome className="icon" />
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/pendaftaran">
                  <FaEdit className="icon" />
                  <span className="text nav-text">Pendaftaran</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/dospem">
                  <FaChalkboardTeacher className="icon" />
                  <span className="text nav-text">Dosen Pembimbing</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/status">
                  <FaFileCircleCheck className="icon" />
                  <span className="text nav-text">Status Pendaftaran</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
