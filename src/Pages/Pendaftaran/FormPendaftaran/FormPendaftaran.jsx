import "./FormPendaftaran.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const FormPendaftaran = () => {
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  const handleSendButtonClick = () => {
    navigate("/pendaftaran");
  };

  const dummyData = {
    name: "Fulan Bin Fulan",
    email: "fulanbinfulan@example.com",
    nim: "123456789",
    judul: "SIPTATIF",
  };

  const regisOptions = ["Pilih Jenis Kelamin", "Individu", "Kelompok"];

  const selectedRegis = "Individu";

  const categoryOptions = ["Pilih Kategori TA", "Laporan"];

  const selectedCategory = "Laporan";

  const dosenOptions = [
    "Pilih Calon Dosen Pembimbing",
    "Dr. Fulan, S.T., M.Kom.",
    "Fulanah, S.T., M.T.",
  ];

  const selectedDosen = "Dr. Fulan, S.T., M.Kom.";
  const selectedDosen2 = "Fulanah, S.T., M.T.";

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="form_regis">
        <div className="table__head">
          <h1 className="heading">Form Pendaftaran Tugas Akhir</h1>
        </div>
        <form action="#" className="form">
          <div className="input-box">
            <label htmlFor="">Jenis Pendaftaran</label>
            <div className="select-box">
              <select>
                {regisOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option}
                    selected={option === selectedRegis}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Nama Lengkap</label>
            <input type="text" placeholder={dummyData.name} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input type="text" placeholder={dummyData.email} required />
          </div>
          <div className="input-box">
            <label htmlFor="">NIM</label>
            <input type="text" placeholder={dummyData.nim} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Judul TA</label>
            <input type="text" placeholder={dummyData.judul} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Kategori TA</label>
            <div className="column">
              <div className="select-box">
                <select>
                  {categoryOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      selected={option === selectedCategory}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Calon Dosen Pembimbing 1</label>
            <div className="column">
              <div className="select-box">
                <select>
                  {dosenOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      selected={option === selectedDosen}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Calon Dosen Pembimbing 2</label>
            <div className="column">
              <div className="select-box">
                <select>
                  {dosenOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      selected={option === selectedDosen2}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="input-file">
            <input type="file" id="uploadBTN" />
            <label htmlFor="uploadBTN">
              <i className="fa-solid fa-upload"></i> Upload File
            </label>
          </div>
          <div className="button-container">
            <button className="btn-cancel" onClick={handleCancelButtonClick}>
              Batal
            </button>
            <button className="btn-send" onClick={handleSendButtonClick}>
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPendaftaran;
