import "./FormPendaftaran.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

const FormPendaftaran = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [dosenOptions, setDosenOptions] = useState([]);
  const [selectedDosen1, setSelectedDosen1] = useState("");
  const [selectedDosen2, setSelectedDosen2] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nim: "",
    judul: "",
    kategori: "",
    dosen1: "",
    dosen2: "",
  });

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
        if (user) {
          setUserData({ name: user.nama, email: userEmail });

          // Extract NIM from email
          const nim = userEmail.split("@")[0];
          setFormData(prevFormData => ({
            ...prevFormData,
            nim: nim,
          }));
        } else {
          setUserData({ name: "Unknown User", email: userEmail });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    const fetchDosenData = async () => {
      try {
        const response = await fetch("https://siptatif-backend.vercel.app/api/dosen");
        const result = await response.json();
        setDosenOptions(result.data);
      } catch (error) {
        console.error("Failed to fetch dosen data:", error);
      }
    };

    fetchUserData();
    fetchDosenData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleDosen1Change = (e) => {
    setSelectedDosen1(e.target.value);
    if (e.target.value === selectedDosen2) {
      setError("Tidak bisa memilih dosen pembimbing yang sama");
    } else {
      setError("");
    }
  };

  const handleDosen2Change = (e) => {
    setSelectedDosen2(e.target.value);
    if (e.target.value === selectedDosen1) {
      setError("Tidak bisa memilih dosen pembimbing yang sama");
    } else {
      setError("");
    }
  };

  const handleFileChange = (e) => {
    setFileUploaded(e.target.files.length > 0);
  };

  const handleCancelButtonClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSendButtonClick = async (e) => {
    e.preventDefault();
    if (error) {
      alert("Harap perbaiki kesalahan sebelum mengirim");
      return;
    }

    if (!formData.nim || !formData.judul || !selectedDosen1 || !selectedDosen2 || !userData.name) {
      alert("Harap isi semua field sebelum mengirim");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('kode', 'kode-unik');
    formDataToSend.append('nim', formData.nim);
    formDataToSend.append('nama', userData.name);
    formDataToSend.append('judul', formData.judul);
    formDataToSend.append('kategori', formData.kategori);
    formDataToSend.append('pembimbing_1', selectedDosen1);
    formDataToSend.append('pembimbing_2', selectedDosen2);

    const fileInput = document.getElementById('uploadBTN');
    if (fileInput.files.length > 0) {
      formDataToSend.append('file', fileInput.files[0]);
    }

    console.log("Sending data:", formDataToSend);

    try {
      const response = await fetch("https://siptatif-backend.vercel.app/api/ta", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        navigate("/pendaftaran");
      } else {
        const result = await response.json();
        alert(JSON.stringify(result) || "Pengiriman gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Failed to send data:", error);
      alert("Failed to send data: " + error.message);
    }
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="form_regis">
        <div className="table__head">
          <h1 className="heading">Form Pendaftaran Tugas Akhir</h1>
        </div>
        <form action="#" className="form" onSubmit={handleSendButtonClick}>
          <div className="input-box">
            <label htmlFor="">Jenis Pendaftaran</label>
            <div className="select-box">
              <select name="kategori" onChange={handleInputChange}>
                <option value="Individu">Individu</option>
                <option value="Kelompok">Kelompok</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleUserDataChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleUserDataChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">NIM</label>
            <input type="text" name="nim" placeholder="Masukkan NIM" value={formData.nim} onChange={handleInputChange} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Judul TA</label>
            <input type="text" name="judul" placeholder="Masukkan Judul" onChange={handleInputChange} required />
          </div>
          <div className="input-box">
            <label htmlFor="">Kategori TA</label>
            <div className="column">
              <div className="select-box">
                <select name="kategori" onChange={handleInputChange}>
                  <option value="Laporan">Laporan</option>
                  <option value="Paper">Paper Base</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Calon Dosen Pembimbing 1</label>
            <div className="column">
              <div className="select-box">
                <select value={selectedDosen1} onChange={handleDosen1Change}>
                  {dosenOptions.map((option) => (
                    <option key={option._id} value={option.nama}>
                      {option.nama}
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
                <select value={selectedDosen2} onChange={handleDosen2Change}>
                  {dosenOptions.map((option) => (
                    <option key={option._id} value={option.nama}>
                      {option.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className={`input-file ${fileUploaded ? 'file-uploaded' : ''}`}>
            <input type="file" id="uploadBTN" onChange={handleFileChange} />
            <label htmlFor="uploadBTN">
              <i className="fa-solid fa-upload"></i> Upload File
            </label>
          </div>
          <div className="button-container">
            <button className="btn-cancel" onClick={handleCancelButtonClick}>
              Batal
            </button>
            <button className="btn-send" type="submit">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPendaftaran;
