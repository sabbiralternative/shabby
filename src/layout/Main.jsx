import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import DisableDevtool from "disable-devtool";
import useLatestEvent from "../hooks/useLatestEvent";
import { settings } from "../utils";
import { handleLogout } from "../utils/handleLogout";

const Main = () => {
  const location = useLocation();

  const params = useParams();
  const [relativeURL, setRelativeURL] = useState("");
  const currentURL = window.location.href;
  const baseUrl = window.location.origin;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { latestEvents } = useLatestEvent();

  /*if Token expire logout user */
  useEffect(() => {
    let isTokenExpired;
    if (token) {
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp;
      isTokenExpired = expirationTime < Date.now() / 1000;
      if (isTokenExpired) {
        handleLogout();
        navigate("/login");
      }
      /* if forceLogin true in notice.json and token not available then logout */
    } else if (settings.forceLogin) {
      if (!token) {
        handleLogout();
        navigate("/login");
      }
    }
  }, [navigate, token]);

  /* path */
  useEffect(() => {
    const relativeURL = currentURL.replace(baseUrl, "");
    setRelativeURL(relativeURL);
  }, [baseUrl, currentURL]);

  /* Disabled devtool */
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      if (settings?.disabledDevtool) {
        DisableDevtool({
          ondevtoolopen: (type) => {
            const info = "devtool opened!; type =" + type;
            if (info) {
              handleLogout();
              navigate("/login");
            }
          },
        });
      }
    }
  }, [navigate]);

  const navigateWhatsApp = () => {
    if (token && settings?.branchWhatsapplink) {
      window.open(settings?.branchWhatsapplink, "_blank");
    } else {
      window.open(settings?.whatsapplink, "_blank");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const changePassword = localStorage.getItem("changePassword");
    if (changePassword) {
      navigate("/change-password-login");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (settings?.pixel) {
      // Create fb pixel main script
      const script = document.createElement("script");
      script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${settings?.pixel});
      fbq('track', 'PageView');
    `;
      document.head.appendChild(script);

      // Create noscript + img
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.src = `https://www.facebook.com/tr?id=${settings?.pixel}&ev=PageView&noscript=1`;
      noscript.appendChild(img);

      document.body.appendChild(noscript);

      return () => {
        // cleanup when component unmounts
        script.remove();
        noscript.remove();
      };
    }
  }, []);

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
                    `/game-details/${event?.eventTypeId}/${event?.eventId}`,
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
      {settings?.instagramLink ? (
        <a
          style={{ cursor: "pointer", bottom: "30%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() => window.open(settings?.instagramLink, "_blank")}
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src="/assets/instagram.png"
          />
        </a>
      ) : null}
      {settings?.telegramLink ? (
        <a
          style={{ cursor: "pointer", bottom: "17%", right: "4.5%" }}
          className="whatsapp_link"
          onClick={() => window.open(settings?.telegramLink, "_blank")}
        >
          <img
            style={{ filter: "none", height: "60px", width: "60px" }}
            src="/assets/telegram.png"
          />
        </a>
      ) : null}
      {settings?.whatsapplink || settings?.branchWhatsapplink ? (
        <a
          onClick={navigateWhatsApp}
          style={{ cursor: "pointer" }}
          className="whatsapp_link"
        >
          <img src="/assets/wp_support.webp" alt="WhatsAPP" />
        </a>
      ) : null}
    </div>
  );
};

export default Main;
