import { Outlet, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";

const Main = () => {
  const params = useParams();
  const [relativeURL, setRelativeURL] = useState("");
  const currentURL = window.location.href;
  const baseUrl = window.location.origin;

  useEffect(() => {
    // Subtract the base URL from the full URL to get the relative URL
    const relativeURL = currentURL.replace(baseUrl, "");
    setRelativeURL(relativeURL);
  }, [baseUrl, currentURL]);

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>
        <Category />
        <div
          className={`center-main-container ${
            relativeURL == "/" ? "home-page" : ""
          } ${params.eventId && params.id ? "detail-page" : ""} ${
            relativeURL == "/fantasy-games" ? "list-page own-casino-page" : ""
          } ${
            relativeURL == "/live-casino" ||
            relativeURL == "/our-virtual" ||
            relativeURL == "/slot-games" ||
            relativeURL == "/our-casino"
              ? "list-page slot-page"
              : ""
          } 
        ${relativeURL.includes("/diamond/") ? "casino-page" : ""}
          `}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
