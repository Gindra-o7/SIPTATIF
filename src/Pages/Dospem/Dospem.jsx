import "./Dospem.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dospem = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="dospem">
        <div className="table__head">
          <h1 className="heading">Data Dosen Pembimbing</h1>
        </div>
        <div className="input-box">
          <div className="select-box">
            <select className="list-sort">
              <option>Urutkan</option>
              <option>Berdasarkan Abjad</option>
              <option>Berdasarkan Keahlian</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Dosen</th>
                <th>NIP</th>
                <th>Jenis Kelamin</th>
                <th>Keahlian</th>
                <th>Kuota</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nama Dosen 1</td>
                <td>12345</td>
                <td>Laki-laki</td>
                <td>Data Science</td>
                <td>10</td>
                <td className="icon-cell">
                  <Link to="/">
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nama Dosen 2</td>
                <td>12345</td>
                <td>Perempuan</td>
                <td>Website Developer</td>
                <td>6</td>
                <td className="icon-cell">
                  <Link to="/">
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nama Dosen 3</td>
                <td>12345</td>
                <td>Laki-laki</td>
                <td>Android Developer</td>
                <td>8</td>
                <td className="icon-cell">
                  <Link to="/">
                    <FaArrowRight className="arrow-icon" />
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

export default Dospem;
