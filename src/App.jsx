import Login from "./Pages/Login/Login";
import Registrasi from "./Pages/Registrasi/Registrasi";
import Lupapsw from "./Pages/LupaPsw/Lupapsw";
import Otplupa from "./Pages/OtpLupaPsw/Otplupa";
import Confirmpsw from "./Pages/Confirm/Confirmpsw";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Pendaftaran from "./Pages/Pendaftaran/Pendaftaran" 
import FormPendaftaran from "./Pages/Pendaftaran/FormPendaftaran/FormPendaftaran";
import Dospem from "./Pages/Dospem/Dospem";
import Status from "./Pages/Status/Status";
import Diterima from "./Pages/Status/Diterima/Diterima";
import Ditolak from "./Pages/Status/Ditolak/Ditolak";
import ProfilePage from "./Pages/Profile/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registrasi />} />
            <Route path="/lupapsw" element={<Lupapsw />} />
            <Route path="/otplupa" element={<Otplupa />} />
            <Route path="/confirmpassword" element={<Confirmpsw />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/formregis" element={<FormPendaftaran />} />
            <Route path="/dospem" element={<Dospem />} />
            <Route path="/status" element={<Status />} />
            <Route path="/ditolak" element={<Ditolak />} />
            <Route path="/diterima" element={<Diterima />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
