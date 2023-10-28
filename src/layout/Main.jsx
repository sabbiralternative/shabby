import { Outlet, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";

const Main = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>
        <Category />
        <div
          className={`center-main-container home-page ${
            params.eventId && params.id ? "detail-page" : ""
          } `}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
