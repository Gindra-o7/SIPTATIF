import "./Pendaftaran.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Pendaftaran = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="pendaftaran">
        <div className="table__head">
          <h1 className="heading">Data Pendaftaran Tugas Akhir</h1>
        </div>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Judul</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status ditolak">Ditolak</p>
                </td>
              </tr>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status diterima">Diterima</p>
                </td>
              </tr>
              <tr>
                <td>16 April 2024</td>
                <td>SIPTATIF</td>
                <td>
                  <p className="status menunggu">Menunggu</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="regis__form">
          <h4>
            <Link to="/formregis">Form Pendaftaran Judul TA</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Pendaftaran;
