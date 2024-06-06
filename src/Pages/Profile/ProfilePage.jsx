import "./Profile.css";
import Profile from "../../assets/Profile.png";
import { FaEdit } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const ProfilePage = () => {
  const dummyData = {
    firstName: "Fulan",
    lastName: "Bin Fulan",
    nim: "123456789",
    birthPlace: "Pekanbaru",
    birthDate: "01/01/1990",
    email: "fulanbinfulan@example.com",
    phoneNumber: "123-456-789",
    address: "123 Main St, Pekanbaru",
  };

  const genderOptions = ["Pilih Jenis Kelamin", "Laki-laki", "Perempuan"];

  const selectedGender = "Laki-laki";

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="profilepages">
        <div className="table__head">
          <h1 className="heading">Profile</h1>
        </div>
        <div className="edit-section">
          <form action="#" className="form">
            <div className="profile-img">
              <img src={Profile} alt="Foto Profil" />
              <AiFillPicture className="change-profile" />
            </div>
            <div className="column">
              <div className="input-profil">
                <label htmlFor="">Nama Depan</label>
                <div className="input-field">
                  <input type="text" placeholder={dummyData.firstName} />
                  <FaEdit className="icon" />
                </div>
              </div>
              <div className="input-profil">
                <label htmlFor="">Nama Belakang</label>
                <div className="input-field">
                  <input type="text" placeholder={dummyData.lastName} />
                  <FaEdit className="icon" />
                </div>
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">NIM</label>
              <div className="input-field">
                <input type="text" placeholder={dummyData.nim} />
                <FaEdit className="icon" />
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">Jenis Kelamin</label>
              <div className="select-box">
                <select>
                  {genderOptions.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      selected={option === selectedGender}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">Tempat Tanggal Lahir</label>
              <div className="input-field">
                <input type="text" placeholder={`${dummyData.birthPlace}, ${dummyData.birthDate}`} />
                <FaEdit className="icon" />
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">Email</label>
              <div className="input-field">
                <input type="text" placeholder={dummyData.email} />
                <FaEdit className="icon" />
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">Nomor Telepon</label>
              <div className="input-field">
                <input type="text" placeholder={dummyData.phoneNumber} />
                <FaEdit className="icon" />
              </div>
            </div>
            <div className="input-profil">
              <label htmlFor="">Alamat Sekarang</label>
              <div className="input-field">
                <input type="text" placeholder={dummyData.address} />
                <FaEdit className="icon" />
              </div>
            </div>
          </form>
        </div>
        <div className="button-profile">
          <button className="btn-save">Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
