import "./Pendaftaran.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

const Pendaftaran = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://siptatif-backend.vercel.app/api/ta");
        const result = await response.json();

        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
          const nim = userEmail.split("@")[0];
          const userFilteredData = result.data.filter(item => item.nim === nim);
          setFilteredData(userFilteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'diproses':
        return 'status-diproses';
      case 'ditolak':
        return 'status-ditolak';
      case 'diterima':
        return 'status-diterima';
      default:
        return '';
    }
  };

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
              {filteredData.map(item => (
                <tr key={item._id}>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>{item.judul}</td>
                  <td className={getStatusClass(item.status)}>{item.status}</td>
                </tr>
              ))}
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
