import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>
        <Category />
        {/* <div
          className="center-main-container home-page"
          style={{ height: "calc(100vh - 270px)" }}
        > */}
         <div className="center-main-container home-page">
        <Outlet />
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
