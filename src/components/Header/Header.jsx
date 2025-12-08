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
import useGetSocialLink from "../../hooks/useGetSocialLink";
const Header = () => {
  const { socialLink } = useGetSocialLink();

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
  const { buttonValue, SetButtonValue, setSports, logo } = UseState();

  /* rule modal state */
  const [ruleModal, setRuleModal] = useState(false);
  /* get button values */
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const openModalRef = useRef();
  /* filter games state */
  const { setFilterGames } = UseState();
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
  const cricketEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 4);
    setSports(4);
  };
  const tennisEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 2);
    setSports(2);
  };
  const footballEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 1);
    setSports(1);
  };
  const kabbadiEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 5);
    setSports(5);
  };
  const tableTennisEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 8);
    setSports(8);
  };

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
    localStorage.clear();
    if (settings.forceLogin) {
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
            JSON.stringify(gameButtonsValues)
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
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      localStorage.setItem("closePopupForForever", true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
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

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      navigate(`/casino/${name}/${id}`);
    } else {
      navigate("/login");
    }
  };

  const openWhatsAppLink = (link) => {
    window.open(link, "_blank");
  };

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
        {settings?.apkLink && showAppPopUp && windowWidth < 600 && (
          <AppPopup setShowAppPopUp={setShowAppPopUp} />
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
                      // maxHeight: `${settings.logoHeight}px`,
                      // maxWidth: `${settings.logoWidth}px`,
                    }
                  }
                  src={logo}
                />
              </Link>
            </div>
            {/* in notice.json if demoLogin,registration = false and force login success or forceLoginSuccess and token in locale storage then show search box  */}
            {(!settings.demoLogin &&
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
                    <div className="show dropdown">
                      <ul
                        // xPlacement="bottom-start"
                        aria-labelledby="react-aria9626335788-2"
                        className="dropdown-menu show"
                        data-popper-reference-hidden="true"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-start"
                        style={{
                          position: "absolute",
                          inset: "0px auto auto 0px",
                          transform: "translate(-110px, 10px)",
                        }}
                      >
                        <div className="d-xl-none d-flex justify-content-center"></div>
                        {/* notice.json if withdraw = true then show withdraw button */}

                        {socialLink?.branchWhatsapplink && (
                          <Link
                            onClick={() =>
                              openWhatsAppLink(socialLink?.branchWhatsapplink)
                            }
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              Deposit Support
                            </li>
                          </Link>
                        )}
                        {settings.withdraw && (
                          <Link
                            to="/withdraw-statement"
                            onClick={() => setDropDown(!dropDown)}
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.WITHDRAW_STATMENT
                              )}
                            </li>
                          </Link>
                        )}
                        {/* notice.json if deposit = true then show deposit button */}
                        {settings.deposit && (
                          <Link
                            to="/deposit-statement"
                            onClick={() => setDropDown(!dropDown)}
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              {languageValue(
                                valueByLanguage,
                                LanguageKey.DEPOSIT_STATEMENT
                              )}
                            </li>
                          </Link>
                        )}
                        <Link
                          to="/account-statement"
                          onClick={() => setDropDown(!dropDown)}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Account Statement
                          </li>
                        </Link>
                        <Link
                          onClick={() => setDropDown(!dropDown)}
                          to="/current-bet"
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Current Bets
                          </li>
                        </Link>
                        <Link
                          to="/my-bank-details"
                          onClick={() => setDropDown(!dropDown)}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            {languageValue(
                              valueByLanguage,
                              LanguageKey.MY_BANK_DETAILS
                            )}
                          </li>
                        </Link>
                        <Link
                          to="/bonus-statement"
                          onClick={() => setDropDown(!dropDown)}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            {languageValue(
                              valueByLanguage,
                              LanguageKey.BONUS_STATEMENT
                            )}
                          </li>
                        </Link>
                        {socialLink?.referral && (
                          <Link
                            to="/affiliate"
                            onClick={() => setDropDown(!dropDown)}
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              Affiliate
                            </li>
                          </Link>
                        )}

                        {/* <Link
                          to="/referral-statement"
                          onClick={() => {
                            setDropDown(false);
                          }}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Referral Statement
                          </li>
                        </Link> */}

                        <Link
                          onClick={() => setDropDown(!dropDown)}
                          to="/activity-logs"
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Activity Logs
                          </li>
                        </Link>

                        <div
                          onClick={() => {
                            SetButtonValue(!buttonValue);
                            setDropDown(!dropDown);
                          }}
                        >
                          <li className="dropdown-item">Set Button Values</li>
                        </div>

                        <Link
                          to="/secure-auth"
                          onClick={() => setDropDown(!dropDown)}
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            Security Auth Verification
                          </li>
                        </Link>
                        <Link
                          onClick={() => setDropDown(!dropDown)}
                          to="/change-password"
                        >
                          <li
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                          >
                            {languageValue(
                              valueByLanguage,
                              LanguageKey.CHANGE_PASSWORD
                            )}
                          </li>
                        </Link>
                        {/* {socialLink?.whatsapplink && (
                          <Link
                            onClick={() =>
                              openWhatsAppLink(socialLink?.whatsapplink)
                            }
                          >
                            <li
                              data-rr-ui-dropdown-item=""
                              className="dropdown-item"
                            >
                              All Support
                            </li>
                          </Link>
                        )} */}
                        <div className="d-xl-none">
                          <li className="dropdown-item">
                            {" "}
                            {languageValue(valueByLanguage, LanguageKey.RULES)}
                          </li>
                        </div>

                        <Link
                          onClick={() => setBalance(!balance)}
                          className="dropdown-item d-xl-none"
                        >
                          {languageValue(valueByLanguage, LanguageKey.BALANCE)}
                          <div className="form-check float-end">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </Link>
                        <Link
                          onClick={() => setExp(!exp)}
                          className="dropdown-item d-xl-none"
                        >
                          {languageValue(valueByLanguage, LanguageKey.EXPOSURE)}
                          <div className="form-check float-end">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </Link>
                        <hr className="dropdown-divider" role="separator" />
                        <li
                          onClick={logOut}
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          {languageValue(valueByLanguage, LanguageKey.LOGOUT)}
                        </li>
                      </ul>
                    </div>
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
            {((settings.demoLogin || settings.registration) &&
              !forceLoginSuccess) ||
            (!settings.demoLogin &&
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
                  {settings.demoLogin && (
                    <a onClick={loginWithDemo} className="btn-home-login">
                      Demo
                    </a>
                  )}
                  {settings.registrationWhatsapp &&
                    socialLink?.whatsapplink &&
                    !token && (
                      <a
                        onClick={() =>
                          openWhatsAppLink(socialLink?.whatsapplink)
                        }
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
            <SiteNotification />
          </div>

          <div className="header-bottom d-none d-xl-block">
            <nav className="navbar navbar-expand">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {languageValue(valueByLanguage, LanguageKey.HOME)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/game-details/4/28045743">
                    WBBL
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={cricketEndpoint}
                    className="nav-link"
                    to="/cricket"
                  >
                    {languageValue(valueByLanguage, LanguageKey.CRICKET)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={footballEndpoint}
                    className="nav-link"
                    to="/football"
                  >
                    {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={tennisEndpoint}
                    className="nav-link"
                    to="/tennis"
                  >
                    {languageValue(valueByLanguage, LanguageKey.TENNIS)}
                  </Link>
                </li>
                <li
                  onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
                  className="nav-item"
                >
                  <a className="nav-link" to="/tennis">
                    Sportsbook
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={kabbadiEndpoint}
                    className="nav-link"
                    to="/kabaddi"
                  >
                    {languageValue(valueByLanguage, LanguageKey.KABADDI)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/horse">
                    {languageValue(valueByLanguage, LanguageKey.HORSE)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/greyhound">
                    {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={tableTennisEndpoint}
                    className="nav-link"
                    to="/table-tennis"
                  >
                    Table Tennis
                  </Link>
                </li>
                <li
                  onClick={() => {
                    navigate("our-casino");
                    setFilterGames("Baccarat");
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/baccarat">
                    Baccarat
                  </Link>
                </li>
                <li
                  onClick={() => {
                    navigate("our-casino");
                    setFilterGames("32 Cards");
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/32-cards">
                    32 Cards
                  </Link>
                </li>
                <li
                  onClick={() => {
                    navigate("our-casino");
                    setFilterGames("Teen Patti");
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/teenpatti">
                    Teenpatti
                  </Link>
                </li>
                <li
                  onClick={() => {
                    navigate("our-casino");
                    setFilterGames("Poker");
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/poker">
                    Poker
                  </Link>
                </li>
                <li
                  onClick={() => {
                    navigate("our-casino");
                    setFilterGames("Lucky 7");
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/lucky-7">
                    Lucky 7
                  </Link>
                </li>

                <li
                  onClick={() => handleNavigateToIFrame("crash", "201206 ")}
                  className="nav-item aviator"
                >
                  <a
                    className="nav-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      style={{ height: "25px", transform: "rotate(11deg)" }}
                      id="Layer_2"
                      data-name="Layer 2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 457.6 277.4"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: ".cls-1 { fill: #e40539; }",
                          }}
                        />
                      </defs>
                      <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                          <path
                            className="cls-1"
                            d="M61.85,273.4c-1.8-3.5-2.3-3.9-4-3-3.2,1.7-5.5,1.1-9-2.5l-3.3-3.4,4.4-1.9c2.4-1.1,8-2.2,12.4-2.6,27.1-2.5,84.1-19.2,161-47.1,32.1-11.7,80.4-30.1,81.3-31,1.2-1.2-1-1.5-11.9-1.7-10.6-.2-11.7,0-16.5,2.4-13.1,6.8-74.6,31.2-92.8,36.7l-6.9,2.1-6.4-5-6.5-4.9-3.6,1.5c-21.3,9-88,36.4-89.2,36.6-1,.2-1.6-.6-1.8-2.3-.3-2.4.5-3,7.8-6.9,4.5-2.3,7.9-4.5,7.5-4.8-.3-.4-4.3-.9-8.9-1.3-9.7-.8-17.3-4-28.2-11.9-4.8-3.5-7.8-5-10-5-4.3,0-6.4.9-6.4,2.7,0,.8,6.8,8.7,15.1,17.6,13,13.7,14.9,16.2,13.3,16.8-3.7,1.5-4.8.8-16.3-10.3-6.4-6.2-14.6-14.2-18.3-17.7l-6.7-6.5-8.8,4.2-8.8,4.2-.3-3.4c-.2-2,.2-4.4.8-5.5s6.5-4.8,13.1-8.2c11.8-6,14.2-8,12.2-10-.7-.7-4.1.5-10.2,3.5l-9.1,4.6v-2.5c0-2,1.4-3.3,7.7-7,10.3-6,17.3-8.1,22.3-6.6,2.1.6,10.7,6.3,19.1,12.6,19,14.3,29.4,19.9,35.9,19.2,5.3-.5,34-13.7,61.9-28.5,18.3-9.7,21.6-12.1,19.5-14.2-.7-.7-7.1,1.8-21.4,8.5-14.7,7-20.5,9.3-21.1,8.4-1.2-2-.1-3.3,5.6-6.3,3-1.6,5.5-3.4,5.5-4,0-.7-1.3-2.5-2.8-4l-2.9-2.7-19.8,9.6c-10.9,5.2-20,9.3-20.2,9.1-.8-.7,2.5-12.8,3.8-14.1.8-.8,9.5-5.6,19.4-10.8,17.7-9.4,18-9.6,17.8-12.7,0-1.7-.4-3.4-.7-3.7s-3.9.9-8,2.7l-7.4,3.3-8.9-9.3c-4.8-5.1-8.9-9.6-9.1-10-.5-1.4,8.8-7.9,14.6-10.1,10.4-4,10.9-3.9,118.5,11.3,35.6,5,65.5,9.7,66.5,10.4,1.6,1.1,1.6,1.4-.1,4.8l-1.7,3.7,2.8,1c1.5.5,5.8,2.1,9.5,3.6l6.9,2.5,10.1-4.3c12.4-5.2,32.9-15.6,45.6-23.2l9.4-5.5,3.2,2.4c3.2,2.4,6.9,3.1,7.9,1.6.3-.5-2.5-6.9-6.3-14.3-3.7-7.4-8.7-18.4-11-24.4-2.4-6.1-4.8-11.6-5.4-12.4-.9-1-3.3-1.2-10.7-.8-10.8.5-18.1,2.6-42,12-15.4,6-67.7,31.5-70.6,34.4-1.3,1.4-3.4,1.4-19.2-.1-9.7-.9-18-1.6-18.4-1.6-1.4,0-.8-5.5,1.1-9.7,1.6-3.4,3.9-5.4,14-12.1,14.3-9.5,28.2-16.5,37.4-18.9l6.5-1.7,9.9,3.9c14.3,5.6,16.3,5.6,39.8-1,38.2-10.6,43.5-11.8,52.2-11.9,8-.1,8.3,0,11.6,3.3,2.6,2.5,5.7,8.3,12,23,4.7,10.8,9,21.3,9.7,23.5,1.7,5.4.8,11.9-2.4,16-6.7,8.8-38,25.2-82.1,42.8-22.8,9.1-61.8,21.9-162.5,53.3-31.1,9.7-64.7,20.3-74.6,23.6-10,3.2-18.9,5.9-19.8,5.9-.8,0-2.5-1.8-3.6-4ZM291.35,168.4c3.8-2.3,7.1-6.9,5.8-8-.6-.5-144.9-20.8-158.8-22.3-1.2-.1-2,.4-2,1.3,0,1.2,15.5,4.6,72,16.1,39.6,8.1,73.7,14.7,75.9,14.8,2.3.1,5.2-.7,7.1-1.9h0ZM247.65,122c4.2-2.3,11.2-5.8,15.4-7.7,4.3-1.9,7.8-3.7,7.8-4.1s-2.8-1.3-6.2-2c-7.7-1.7-13.7-.9-22.4,3.3-6.7,3.1-18.9,11.7-18.1,12.6.6.5,9.3,1.9,13.5,2.2,1.3,0,5.8-1.9,10-4.3h0ZM282.15,115.8c7.5-3.8,10.7-6,10.5-7.1-.4-2.1-18.3-9.2-23.4-9.3-2.2,0-4.9.6-6,1.4q-2.1,1.6,10.4,6.5c2.6,1,4.8,2.3,5,2.9s-1.9,2.2-4.7,3.6c-5.5,2.8-6.6,4-5.7,6.1.8,2.3,2.3,1.9,13.9-4.1h0Z"
                          />
                          <path
                            className="cls-1"
                            d="M440.55,196.2c-6.8-10.1-13.5-20.3-14.9-22.8-1.5-2.5-5.5-14.1-9.1-25.7l-6.5-21.3,5.1-5c2.7-2.8,5.1-4.9,5.2-4.8.1.2,5.2,9.4,11.4,20.6,11.9,21.3,15.8,31,23.1,58,3.3,11.9,3.3,12.3,1.7,15.7-.9,1.9-2.1,3.5-2.6,3.5s-6.5-8.2-13.4-18.2h0ZM454.65,206.5c.2-1.9-.5-4.6-1.7-6.7-1.8-3.1-22-30.4-24.3-32.9-1.2-1.3-3,1.5-2.2,3.5,1.2,3.4,26,39.9,26.9,39.6.6-.1,1.1-1.7,1.3-3.5h0Z"
                          />
                          <path
                            className="cls-1"
                            d="M295.35,148.3c-13.2-2.6-24.6-4.9-25.4-5.1-.8-.2,11.3-5.4,27-11.6l28.3-11.4,5.3,5.9c2.9,3.2,5.2,6.3,5.3,6.9,0,.6-2.3,5.5-5.1,10.8-4.8,9.1-5.2,9.6-8.2,9.5-1.8-.1-14-2.3-27.2-5h0Z"
                          />
                          <path
                            className="cls-1"
                            d="M334.85,152.1c0-.2,1.6-3.6,3.6-7.5,1.9-4,4.1-9,4.9-11.1l1.3-3.8-5.3-6.9c-5.3-6.8-5.4-6.9-3.2-8.1,2-1.1,2.6-.8,6.2,3.2,2.2,2.5,4.3,4.5,4.6,4.5s1.7-3.9,3-8.7l2.4-8.8.3,4.9c.2,2.6-.2,8-.8,11.8l-1,7,5.1,6.4,5.1,6.4-2.7,1c-2.2.9-2.9.6-5-1.8-1.3-1.5-2.5-3-2.5-3.4-.1-2.3-1.9-.1-3.9,4.6-1.2,3-2.8,5.9-3.5,6.5-1.4,1.1-8.6,4.3-8.6,3.8h0Z"
                          />
                          <path
                            className="cls-1"
                            d="M404.75,114.7c-7.2-16.1-7.3-16.4-5.8-17.5,1.5-1,21.2-.4,24.2.7.9.4,1.7,1.4,1.7,2.2,0,4.2-12.6,21.3-15.6,21.3-.9,0-2.8-2.9-4.5-6.7h0ZM414.15,104.7c4.8-2,8.7-4,8.7-4.4,0-1.2-4.4-1.9-13.2-1.9-8.2,0-8.8.1-8.8,2,0,2.4,2.7,8,3.8,8,.4,0,4.6-1.6,9.5-3.7Z"
                          />
                          <path
                            className="cls-1"
                            d="M385.05,75.9c-10.7-19.1-14-27.3-20.7-51.6-4-14.3-4.3-18.7-1.6-22l1.9-2.3,14.8,22.3,14.8,22.3,7.6,24.2c4.2,13.2,7.4,24.2,7.1,24.3-.3.1-3.5.3-7.1.6l-6.5.4-10.3-18.2h0ZM391.85,46.5c0-1.5-23.2-37.5-26.1-40.6-1.3-1.3-2.9,1.2-2.9,4.7,0,2.5,8.8,15.4,22.3,32.7,4.6,6,6.7,7,6.7,3.2Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="ms-1">Crash</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
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
