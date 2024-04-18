import "./Ditolak.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const Ditolak = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="reject">
        <div className="reject__head">
          <h1 className="heading">Detail Status Pendaftaran</h1>
          <h2 className="ditolak">Ditolak</h2>
        </div>
        <div className="table__container">
          <section className="table__body">
            <table>
              <tbody>
                <tr>
                  <td>Jenis Tugas Akhir : </td>
                  <td>Individu</td>
                </tr>
                <tr>
                  <td>Nama Mahasiswa : </td>
                  <td>Fulan Bin Fulan</td>
                </tr>
                <tr>
                  <td>Email Mahasiswa : </td>
                  <td>fulanbinfulan@gmail.com</td>
                </tr>
                <tr>
                  <td>NIM : </td>
                  <td>12250xxxxxx</td>
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
                  <td>Dosen Pembimbing 1 : </td>
                  <td>Fulan, S.T., M.Kom.</td>
                </tr>
                <tr>
                  <td>Dosen Pembimbing 2 : </td>
                  <td>Dr. Fulanah, S.T., M.Kom.</td>
                </tr>
                <tr>
                  <td>
                    <a href="/">Buka PDF</a>
                  </td>
                  <td>
                    <h4>Catatan: </h4>
                    File uraian tidak memenuhi syarat silahkan diperbaiki dan
                    upload ulang berkas
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div className="button-container">
          <button className="btn-back" onClick={handleBackButtonClick}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ditolak;
