import { Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { config } from "../utils/config";
import DisableDevtool from "disable-devtool";

const Main = () => {
  const params = useParams();
  const [relativeURL, setRelativeURL] = useState("");
  const currentURL = window.location.href;
  const baseUrl = window.location.origin;
  const navigate = useNavigate();
  const pageTitle = config?.result?.settings?.siteTitle;
  const isDisabledDevtools = config?.result?.settings?.disabledDevtool;
  const isForceLogin = config?.result?.settings?.forceLogin;
  const token = localStorage.getItem("token");

  /* TODO */

  useEffect(() => {
    let isTokenExpired;
    if (token) {
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp;
      isTokenExpired = expirationTime < Date.now() / 1000;
      if (isTokenExpired) {
        localStorage.clear();
        navigate("/login");
      }
    } else if (isForceLogin) {
      if (!token) {
        localStorage.clear();
        navigate("/login");
      }
    }
  }, [navigate, isForceLogin, token]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    const relativeURL = currentURL.replace(baseUrl, "");
    setRelativeURL(relativeURL);
  }, [baseUrl, currentURL]);

  useEffect(() => {
    if (isDisabledDevtools) {
      DisableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            localStorage.clear();
            navigate("/login");
          }
        },
      });
    }
  }, [isDisabledDevtools, navigate]);

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
            relativeURL == "/our-casino" ||
            relativeURL == "/deposit" ||
            relativeURL == "/withdraw"
              ? "list-page slot-page"
              : ""
          } 
           ${
             relativeURL == "/current-bet" ||
             relativeURL == "/activity-logs" ||
             relativeURL == "/change-password" ||
             relativeURL == "/account-statement"
               ? "report-page"
               : ""
           } 
        ${
          relativeURL.includes("/our-casino/") ||
          relativeURL.includes("/our-virtual/")
            ? "casino-page"
            : ""
        } 
       `}
          style={{ minHeight: "100vh" }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
