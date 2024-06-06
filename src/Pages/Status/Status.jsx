import "./Status.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

const Status = () => {
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://siptatif-backend.vercel.app/api/ta");
        const result = await response.json();
        
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
          const nim = userEmail.split("@")[0];
          const filteredData = result.data.filter(item => item.nim === nim);
          setStatusData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
              {statusData.map(item => (
                <tr key={item._id}>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>{item.judul}</td>
                  <td>
                    <p className={`status-${item.status.toLowerCase()}`}>{item.status}</p>
                  </td>
                  <td className="icon-cell">
                    {item.status.toLowerCase() === 'ditolak' && (
                      <Link to={`/ditolak/${item._id}`}>
                        <FaArrowRight className="arrow-icon" />
                      </Link>
                    )}
                    {item.status.toLowerCase() === 'diterima' && (
                      <Link to={`/diterima/${item._id}`}>
                        <FaArrowRight className="arrow-icon" />
                      </Link>
                    )}
                    {item.status.toLowerCase() === 'diproses' && (
                      <Link to={`/diproses/${item._id}`} className="dot">
                        ....
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Status;
