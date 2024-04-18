import "./Dashboard.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="content">
        <h1 className="salam">
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </h1>
        <h2 className="title">
          Selamat Datang kembali, <span id="nama">Gilang Ramadhan Indra</span>
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolor at maiores magni? Ipsa quod vero maxime totam quaerat assumenda
          magni expedita reiciendis repellat ratione! Repellendus ipsa culpa sit
          mollitia? Rem, odio consequatur perferendis tempora, doloremque quam,
          ab distinctio et sit aut eum? Commodi veritatis velit labore ex
          consectetur. Explicabo voluptate minima porro dignissimos eveniet
          dicta voluptas, quibusdam accusamus cupiditate! Temporibus beatae
          expedita molestias ipsa nulla fuga rerum eius repellendus impedit nam
          saepe quisquam exercitationem, maxime in nostrum laudantium sunt
          itaque sequi.
        </p>
        <p className="description" style={{marginTop:"20px"}}>
          Consequuntur corrupti esse veritatis reiciendis optio saepe nisi.
          Dolorem doloremque explicabo nesciunt quidem ipsum! Enim labore quam
          architecto quo libero dolore et. Rem ut animi modi quos quia
          laboriosam, nulla a inventore nobis odio, commodi harum minus illo.
          Corrupti, officiis delectus pariatur unde quae labore porro veniam
          libero sequi dicta vel odit iusto expedita doloremque commodi
          eligendi, facere aliquid dignissimos, eos quaerat magni error
          consequuntur! Quae, id quam.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
