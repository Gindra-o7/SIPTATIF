import "./Dospem.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dospem = () => {
  const [dosen, setDosen] = useState([]);
  const [filteredDosen, setFilteredDosen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDosen = async () => {
      try {
        const response = await fetch("https://siptatif-backend.vercel.app/api/dosen");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDosen(data.data);
        setFilteredDosen(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDosen();
  }, []);

  useEffect(() => {
    setFilteredDosen(
      dosen.filter(d => 
        d.nama.toLowerCase().includes(searchTerm.toLowerCase()) || 
        d.keahlian.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.nip.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, dosen]);

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="dospem">
        <div className="table__head">
          <h1 className="heading">Data Dosen Pembimbing</h1>
        </div>
        <div className="input-box">
          <div className="search-box">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Cari berdasarkan nama atau keahlian..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{backgroundColor: '#f1f1f1', color: '#000'}}
            />
          </div>
        </div>
        <section className="table__body">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Dosen</th>
                  <th>NIP</th>
                  <th>Keahlian</th>
                  <th>Kuota</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {filteredDosen.map((dosen, index) => (
                  <tr key={dosen.nip}>
                    <td>{index + 1}</td>
                    <td>{dosen.nama}</td>
                    <td>{dosen.nip}</td>
                    <td>{dosen.keahlian}</td>
                    <td>{dosen.kuota}</td>
                    <td className="icon-cell">
                      <Link to="/">
                        <FaArrowRight className="arrow-icon" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dospem;
