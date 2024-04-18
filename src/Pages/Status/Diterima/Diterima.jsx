import "./Diterima.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const Diterima = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="accepted">
        <div className="accept__head">
          <h1 className="heading">Detail Status Pendaftaran</h1>
          <h2 className="diterima">Diterima</h2>
        </div>
        <section className="table__body">
          <table>
            <tbody>
              <tr>
                <td>Nama : </td>
                <td>Fulan Bin Fulan</td>
              </tr>
              <tr>
                <td>NIM : </td>
                <td>12250xxxxxx</td>
              </tr>
              <tr>
                <td>Jenis Kelamin : </td>
                <td>Laki-laki</td>
              </tr>
              <tr>
                <td>Judul Tugas Akhir : </td>
                <td>Siptatif</td>
              </tr>
              <tr>
                <td>Kategori Tugas Akhir : </td>
                <td>Laporan</td>
              </tr>
              <tr>
                <td>Jenis Tugas Akhir : </td>
                <td>Individu</td>
              </tr>
              <tr>
                <td>Dosen Pembimbing 1 : </td>
                <td>Fulan, S.T., M.Kom.</td>
              </tr>
              <tr>
                <td>Dosen Pembimbing 2 : </td>
                <td>Dr. Fulanah, S.T., M.Kom.</td>
              </tr>
              <tr>
                <td>Dosen Penguji 1 : </td>
                <td>Fulan, S.T., M.Sc.</td>
              </tr>
              <tr>
                <td>Dosen Penguji 2 : </td>
                <td>Fulan, S.T., M.T.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="button-container">
          <button className="btn-back" onClick={handleBackButtonClick}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diterima;
