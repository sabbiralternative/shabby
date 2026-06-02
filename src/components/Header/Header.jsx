import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RulesModal from "./RulesModal";
import UseState from "../../hooks/UseState";
import SearchBox from "./SearchBox";
import UseBalance from "../../hooks/UseBalance";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import Notification from "../Notification/Notification";
import SiteNotification from "./Notification";
import MyMarketModal from "../Modal/MyMarketModal";
import { API, settings } from "../../utils";
import AppPopup from "./AppPopUp";
import Referral from "../Modal/Referral";
import MobileDropdown from "./MobileDropdown";
import useLanguage from "../../hooks/useLanguage";
import Language from "../Modal/Language";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../constant";

import DownloadAPK from "../Modal/DownloadAPK/DownloadAPK";
import BuildVersion from "../Modal/BuildVersion/BuildVersion";
import { handleLogout } from "../../utils/handleLogout";
import Error from "../Modal/Error/Error";
import DesktopDropdown from "./DesktopDropdown";
import HeaderBottomDesktopLinks from "./HeaderBottomDesktopLinks";
const Header = () => {
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  /* Open dropdown state for mobile version */
  const { language, valueByLanguage } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);

  const [showReferral, setShowReferral] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [showAppPopUp, setShowAppPopUp] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  /* Open dropdown state for desktop version */
  const [dropDown, setDropDown] = useState(false);
  /* show balance state */
  const [balance, setBalance] = useState(true);
  /* show exposure state */
  const [exp, setExp] = useState(true);
  /* token */
  const token = localStorage.getItem("token");
  const { register, handleSubmit } = useForm();
  /* notification state */

  /* this are coming from context */
  const {
    buttonValue,
    SetButtonValue,

    logo,
    closePopupForForever,
    setClosePopUpForForever,
  } = UseState();

  /* rule modal state */
  const [ruleModal, setRuleModal] = useState(false);
  /* get button values */
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const openModalRef = useRef();
  /* role name */
  const role = localStorage.getItem("loginName");
  /* get forceLoginSuccess */
  const forceLoginSuccess = localStorage.getItem("forceLoginSuccess");
  /* Balance api */
  const [balanceData] = UseBalance();

  /* error state */
  const [errorLogin, setErrorLogin] = useState("");
  /* show market state */
  const [showMyMarket, setShowMyMarket] = useState(false);
  const [showAPKModal, setShowAPKModal] = useState(false);

  /* handle close modal click outside the modal desktop version */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef?.current?.contains(e?.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  /* handle close modal click outside the modal mobile version */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!openModalRef?.current?.contains(e?.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* Set games eventId for fetch odds data in homepage  */

  // /* Close modal automatic after specific width */
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1199) {
        setOpen(false);
      } else if (window.innerWidth < 1200) {
        setDropDown(false);
      }
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /* Get marquee notification */

  /*handle Logout */
  const logOut = () => {
    handleLogout();
    if (settings.force_login) {
      /* If force login is true in notice.json the navigate login page after logout otherwise stay in homepage */
      navigate("/login");
    } else {
      setDropDown(false);
      navigate("/");
    }
  };

  /* Edit button value that saved in locale storage after login */
  const onSubmit = ({
    buttons0value,
    buttons1value,
    buttons2value,
    buttons3value,
    buttons4value,
    buttons5value,
    buttons6value,
    buttons7value,
    buttons8value,
    buttons9value,
  }) => {
    fetch(API.buttonValue, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        game: [
          {
            label: 100,
            value: buttons0value,
          },
          {
            label: 100,
            value: buttons1value,
          },
          {
            label: 100,
            value: buttons2value,
          },
          {
            label: 100,
            value: buttons3value,
          },
          {
            label: 100,
            value: buttons4value,
          },
          {
            label: 100,
            value: buttons5value,
          },
          {
            label: 100,
            value: buttons6value,
          },
          {
            label: 100,
            value: buttons7value,
          },
          {
            label: 100,
            value: buttons8value,
          },
          {
            label: 100,
            value: buttons9value,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("buttonValue");
          const gameButtonsValues = [
            {
              label: 100,
              value: buttons0value,
            },
            {
              label: 100,
              value: buttons1value,
            },
            {
              label: 100,
              value: buttons2value,
            },
            {
              label: 100,
              value: buttons3value,
            },
            {
              label: 100,
              value: buttons4value,
            },
            {
              label: 100,
              value: buttons5value,
            },
            {
              label: 100,
              value: buttons6value,
            },
            {
              label: 100,
              value: buttons7value,
            },
            {
              label: 100,
              value: buttons8value,
            },
            {
              label: 100,
              value: buttons9value,
            },
          ];
          /* set edited button values */
          localStorage.setItem(
            "buttonValue",
            JSON.stringify(gameButtonsValues),
          );
          SetButtonValue(!buttonValue);
        }
      });
  };

  /* Login with demoId  */
  const loginWithDemo = () => {
    /* random token  */
    const generatedToken = UseTokenGenerator();
    /* encrypted post data */
    const loginData = UseEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
    });
    fetch(API.login, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        /* Set token to localeStorage */
        localStorage.setItem("token", data.result.token);
        /* Set login name to locale storage */
        localStorage.setItem("loginName", data.result.loginName);
        /* set button value to locale storage */
        localStorage.setItem("forceLoginSuccess", "true");
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        /* set modal picture to locale storage for the open modal in home page */
        localStorage.setItem("buttonValue", buttonValue);
        const modal = [
          { banner: data?.result?.banner },
          { bannerTitle: data?.result?.bannerTitle },
        ];
        /* set modal picture and title */
        localStorage.setItem("modal", JSON.stringify(modal));
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === true
        ) {
          /* if token, login name, and result.password === true then navigation change-password-login page */
          navigate("/change-password-login");
        } else if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === false
        ) {
          localStorage.removeItem("forceLogin");
          setOpen(false);
          navigate("/");
          /* if token, login name, and result.password === false then stay in home page */
        } else {
          setErrorLogin(data?.error);
        }
      });
  };

  /* If force login true in notice.json then set forceLogin for hide the login,register button from home page after login   */
  const handleForceLogin = () => {
    localStorage.setItem("forceLogin", "true");
  };

  const [myMarketData, setMyMarketData] = useState([]);

  /* handle get market value from api */
  const handleGetMyMarket = async () => {
    setMyMarketData([]);
    setShowMyMarket(true);
    /* random token */
    const generatedToken = UseTokenGenerator();
    /* encrypted post data */
    const encryptedData = UseEncryptData(generatedToken);
    const res = await axios.post(API.myMarket, encryptedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res?.data?.result;

    setMyMarketData(data);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    setClosePopUpForForever(closePopupForForever ? true : false);
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      setClosePopUpForForever(true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        setShowAPKModal(true);
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if (!expiryTime || currentTime > expiryTime) {
          localStorage.removeItem("installPromptExpiryTime");

          setShowAppPopUp(true);
        }
      }
    }
  }, [windowWidth, showAppPopUp, location?.state?.pathname, location.pathname]);

  useEffect(() => {
    const newVersion = settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [settings?.build_version, stored_build_version]);

  const openWhatsAppLink = (link) => {
    window.open(link, "_blank");
  };

  if (settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <>
      <div
        className="wrapper"
        style={{
          position: "relative",
        }}
      >
        {showLanguage && (
          <Language
            windowWidth={windowWidth}
            showAppPopUp={showAppPopUp}
            setShowLanguage={setShowLanguage}
          />
        )}
        {showReferral && <Referral setShowReferral={setShowReferral} />}
        {settings.apk_link && showAppPopUp && windowWidth < 600 && (
          <AppPopup setShowAppPopUp={setShowAppPopUp} />
        )}
        {settings.apk_link && showAPKModal && (
          <DownloadAPK setShowAPKModal={setShowAPKModal} />
        )}
        {showBuildVersion && !showAPKModal && (
          <BuildVersion
            build_version={settings?.build_version}
            setShowBuildVersion={setShowBuildVersion}
          />
        )}
        {/* if error during the demo login then show error message  */}
        {errorLogin && (
          <Notification
            message={errorLogin}
            success={false}
            setMessage={setErrorLogin}
          />
        )}
        <section className="header">
          <div className="header-top">
            {/* show rules modal */}
            {ruleModal && (
              <RulesModal ruleModal={ruleModal} setRuleModal={setRuleModal} />
            )}
            <div className="logo-header">
              <Link className="d-xl-none" to="/">
                <i className="fas fa-home me-1"></i>
              </Link>
              <Link to="/">
                <img
                  style={
                    {
                      // maxHeight: `${settings.logo_height}px`,
                      // maxWidth: `${settings.logo_width}px`,
                    }
                  }
                  src={logo}
                />
              </Link>
            </div>
            {/* in notice.json if demoLogin,registration = false and force login success or forceLoginSuccess and token in locale storage then show search box  */}
            {(!settings.demo_login &&
              !settings.registration &&
              forceLoginSuccess) ||
            (forceLoginSuccess && token) ? (
              <div className="user-details">
                <div className="search-box-container d-none d-xl-block">
                  <SearchBox />
                </div>

                <div
                  onClick={() => setRuleModal(!ruleModal)}
                  className="header-rules ms-3"
                >
                  <div>
                    <Link className="rules-link pointer">
                      <b>{languageValue(valueByLanguage, LanguageKey.RULES)}</b>
                    </Link>
                  </div>
                </div>
                <div className="ms-3 d-none d-xl-flex">
                  {/* In notice.json if deposit = true then showing deposit button */}
                  {settings.deposit && (
                    <Link className="btn btn-success me-2" to="/deposit">
                      {languageValue(valueByLanguage, LanguageKey.DEPOSIT)}
                    </Link>
                  )}
                  {/* In notice.json if withdraw = true then showing withdraw button */}
                  {settings.withdraw && (
                    <Link className="btn btn-danger" to="/withdraw">
                      {languageValue(valueByLanguage, LanguageKey.WITHDRAW)}
                    </Link>
                  )}
                </div>
                <div className="user-balance ms-1 ms-xl-3">
                  {balance && (
                    <div>
                      <span>
                        {languageValue(valueByLanguage, LanguageKey.BALANCE)}:
                      </span>
                      <b>{balanceData?.creditLimit}</b>
                    </div>
                  )}
                  <div>
                    {exp && (
                      <span
                        onClick={handleGetMyMarket}
                        style={{ cursor: "pointer" }}
                      >
                        <span>Exp:</span>
                        <b className="pointer">
                          {balanceData?.deductedExposure}
                        </b>
                      </span>
                    )}

                    {buttonValue && (
                      <>
                        <div className={`fade modal-backdrop show`}></div>
                        <div
                          role="dialog"
                          aria-modal="true"
                          className="fade modal show"
                          tabIndex="-1"
                          style={{
                            display: "block",
                          }}
                        >
                          <div className="modal-dialog modal-md">
                            <div className="modal-content">
                              <div className="modal-header">
                                <div className="modal-title h4">
                                  Set Button Value
                                </div>
                                <button
                                  onClick={() => SetButtonValue(!buttonValue)}
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div
                                  className="mt-1 nav nav-pills"
                                  role="tablist"
                                >
                                  <div className="nav-item">
                                    <a
                                      role="tab"
                                      data-rr-ui-event-key="1"
                                      id="rules-tabs-tab-1"
                                      aria-controls="rules-tabs-tabpane-1"
                                      aria-selected="true"
                                      className="nav-link active"
                                      tabIndex="0"
                                      href="#"
                                    >
                                      Game Buttons
                                    </a>
                                  </div>
                                </div>
                                <div className="mt-1 tab-content">
                                  <div
                                    role="tabpanel"
                                    id="rules-tabs-tabpane-1"
                                    aria-labelledby="rules-tabs-tab-1"
                                    className="fade tab-pane active show"
                                  >
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                      {/* <div className="row row10">
                                      <div className="mb-1 col-6">
                                        <label className="form-label">
                                          <b>Price Value:</b>
                                        </label>
                                      </div>
                                      <div className="mb-1 col-6">
                                        <label className="form-label">
                                          <b>Price Value:</b>
                                        </label>
                                      </div>
                                    </div> */}
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons0value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[0]?.value
                                            }
                                            name="buttons0value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons1value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[1]?.value
                                            }
                                            name="buttons1value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons2value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[2]?.value
                                            }
                                            name="buttons2value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons3value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[3]?.value
                                            }
                                            name="buttons3value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>

                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons4value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[4]?.value
                                            }
                                            name="buttons4value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons5value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[5]?.value
                                            }
                                            name="buttons5value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>

                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons6value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[6]?.value
                                            }
                                            name="buttons6value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons7value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[7]?.value
                                            }
                                            name="buttons7value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>

                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons8value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[8]?.value
                                            }
                                            name="buttons8value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons9value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue?.[9]?.value
                                            }
                                            name="buttons9value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>

                                      <div className="row row10">
                                        <div className="mb-3 col-md-6 ">
                                          <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                          >
                                            Update
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {/* Mobile dropdown */}
                    <MobileDropdown
                      SetButtonValue={SetButtonValue}
                      balance={balance}
                      buttonValue={buttonValue}
                      exp={exp}
                      logOut={logOut}
                      open={open}
                      openModalRef={openModalRef}
                      role={role}
                      ruleModal={ruleModal}
                      setBalance={setBalance}
                      setDropDown={setDropDown}
                      setExp={setExp}
                      setOpen={setOpen}
                      setRuleModal={setRuleModal}
                      setShowReferral={setShowReferral}
                    />
                    {/* Mobile dropdown */}
                  </div>
                </div>

                <div ref={modalRef} className="dropdown">
                  <div
                    onClick={() => {
                      setDropDown(!dropDown);
                    }}
                    className="user-name ms-3 d-none d-xl-block dropdown-toggle"
                    id="react-aria2236598939-2"
                    aria-expanded="false"
                  >
                    {role}
                    <i className="fas fa-chevron-down ms-1"></i>
                  </div>

                  {/* open dropdown for desktop version */}
                  {dropDown && (
                    <DesktopDropdown
                      balance={balance}
                      dropDown={dropDown}
                      exp={exp}
                      logOut={logOut}
                      setBalance={setBalance}
                      setDropDown={setDropDown}
                      setExp={setExp}
                    />
                  )}
                </div>
                {settings.language && (
                  <a
                    style={{ background: "none" }}
                    onClick={() => setShowLanguage(true)}
                    className="btn-home-login"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                        src="/assets/globe.gif"
                        alt=""
                      />
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "10px",
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        {language || "EN"}
                      </p>
                    </div>
                  </a>
                )}
              </div>
            ) : null}

            {/* in notice.json if demoLogin or register = true and forceLogin(localeStorage) not success or demoLogin, register, token, forceLoginSuccess = false then show this html */}
            {((settings.demo_login || settings.registration) &&
              !forceLoginSuccess) ||
            (!settings.demo_login &&
              !settings.registration &&
              !token &&
              !forceLoginSuccess) ? (
              <div className="user-details login-btn-box">
                <div
                  className="user-name dropdown ms-3"
                  style={{ display: "flex" }}
                >
                  {/* if register = true in notice.json then show register button */}
                  {settings.registration && (
                    <Link className="btn-home-login" to="/register">
                      {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                    </Link>
                  )}

                  <Link
                    onClick={handleForceLogin}
                    className="btn-home-login"
                    to="/login"
                  >
                    {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                  </Link>
                  {/* notice.json --> demoLogin = true then show the button */}
                  {settings.demo_login && (
                    <a onClick={loginWithDemo} className="btn-home-login">
                      Demo
                    </a>
                  )}
                  {settings.registration_whatsapp &&
                    settings?.whatsapplink &&
                    !token && (
                      <a
                        onClick={() => openWhatsAppLink(settings?.whatsapplink)}
                        className="btn-home-login"
                      >
                        Get ID
                      </a>
                    )}
                  {settings.language && (
                    <a
                      onClick={() => setShowLanguage(true)}
                      className="btn-home-login"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            height: "15px",
                            width: "15px",
                          }}
                          src="/assets/globe.gif"
                          alt=""
                        />
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "10px",
                            color: "white",
                            textTransform: "capitalize",
                          }}
                        >
                          {language || "EN"}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ) : null}
            {/* in notice.json if demoLogin or register = false and forceLogin(localeStorage) success or  token, forceLoginSuccess = true then show below html */}
          </div>
          <SiteNotification />
          <HeaderBottomDesktopLinks />
        </section>
        {/* market modal */}
        {showMyMarket && myMarketData?.length > 0 && (
          <MyMarketModal
            setShowMyMarket={setShowMyMarket}
            myMarketData={myMarketData}
          />
        )}
      </div>
    </>
  );
};

export default Header;
