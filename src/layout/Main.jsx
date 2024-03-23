import { Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { config } from "../utils/config";
import DisableDevtool from "disable-devtool";
import { useQuery } from "@tanstack/react-query";
import UseTokenGenerator from "../hooks/UseTokenGenerator";
import UseEncryptData from "../hooks/UseEncryptData";
import axios from "axios";
import useLatestEvent from "../hooks/useLatestEvent";

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
  const whatsappApi = config?.result?.endpoint?.whatsapp;
  const siteUrl = config?.result?.settings?.siteUrl;
  const { latestEvents } = useLatestEvent();

  /*if Token expire logout user */
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
      /* if forceLogin true in notice.json and token not available then logout */
    } else if (isForceLogin) {
      if (!token) {
        localStorage.clear();
        navigate("/login");
      }
    }
  }, [navigate, isForceLogin, token]);

  /* Site title */
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  /* path */
  useEffect(() => {
    const relativeURL = currentURL.replace(baseUrl, "");
    setRelativeURL(relativeURL);
  }, [baseUrl, currentURL]);

  /* Disabled devtool */
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

  /* Get whats app link */
  const { data: whatsAppLink } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      /* random token function */
      const generatedToken = UseTokenGenerator();
      /* Encryption post data */
      const encryptedVideoData = UseEncryptData({
        site: siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(whatsappApi, encryptedVideoData);
      const data = res.data;
      if (data?.success) {
        return data?.result?.link;
      }
    },
  });

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="sidebar left-sidebar">
          <Sidebar />
        </div>
        <div className="latest-event d-xl-none">
          {latestEvents?.map((event, i) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(
                    `/game-details/${event?.eventTypeId}/${event?.eventId}`
                  );
                }}
                key={i}
                className="latest-event-item"
              >
                <a className="blink_me">
                  <i className="d-icon"></i>
                  <span style={{ color: "white" }}>{event?.eventName}</span>
                </a>
              </div>
            );
          })}
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
             relativeURL == "/account-statement" ||
             relativeURL == "/withdraw-statement" ||
             relativeURL == "/deposit-statement"
               ? "report-page"
               : ""
           } 
        ${
          relativeURL.includes("/our-casino/") ||
          relativeURL.includes("/our-virtual/")
            ? "casino-page"
            : ""
        } 

        ${
          relativeURL.includes("/casino") ||
          relativeURL.includes("/live-casino")
            ? "list-page slot-page"
            : ""
        } 
       `}
          style={{ minHeight: "100vh" }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
      {whatsAppLink && (
        <a
          href={whatsAppLink}
          target="_main"
          to={whatsAppLink}
          className="whatsapp_link"
        >
          <img src="/assets/wp_support.webp" alt="WhatsAPP" />
        </a>
      )}
    </div>
  );
};

export default Main;
