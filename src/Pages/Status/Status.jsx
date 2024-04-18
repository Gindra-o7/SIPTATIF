import "./Status.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Status = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="status__regis">
        <div className="table__head">
          <h1 className="heading">Status Pendaftaran TA</h1>
        </div>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Status</th>
                <th>Keterangan Lanjut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status ditolak">Ditolak</p>
                </td>
                <td className="icon-cell">
                  <Link to="/ditolak">
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status diterima">Diterima</p>
                </td>
                <td className="icon-cell">
                  <Link to="/diterima">
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status menunggu">Menunggu</p>
                </td>
                <td className="icon-cell">
                  <Link to="/" className="dot">
                    ....
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Status;
