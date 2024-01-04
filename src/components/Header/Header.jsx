import { useEffect, useRef, useState } from "react";
import { config } from "../../utils/config";
import logo from "../../static/front/img/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RulesModal from "./RulesModal";
import UseState from "../../hooks/UseState";
import SearchBox from "./SearchBox";
import UseBalance from "../../hooks/UseBalance";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import Notification from "../Notification/Notification";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [balance, setBalance] = useState(true);
  const [exp, setExp] = useState(true);
  const token = localStorage.getItem("token");
  const notificationApi = config?.result?.endpoint?.notification;
  const buttonValueApi = config?.result?.endpoint?.buttonValue;
  const { register, handleSubmit } = useForm();
  const [showNotification, setShowNotification] = useState("");
  const { buttonValue, SetButtonValue, setSports } = UseState();
  const isForceLogin = config?.result?.settings?.forceLogin;
  const isShowRegisterButton = config?.result?.settings?.registration;
  const isDemoLoginShow = config?.result?.settings?.demoLogin;
  const showWithdraw = config?.result?.settings?.withdraw;
  const showDeposit = config?.result?.settings?.deposit;
  const [ruleModal, setRuleModal] = useState(false);
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const openModalRef = useRef();
  const { setFilterGames } = UseState();
  const role = localStorage.getItem("loginName");
  const forceLoginSuccess = localStorage.getItem("forceLoginSuccess");
  const [balanceData] = UseBalance();
  const loginApi = config?.result?.endpoint?.login;
  const [errorLogin, setErrorLogin] = useState("");
  /* Close modalRef modal click outside the modal */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!openModalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* Game endpoint  */
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
  const tableTennisEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 8);
    setSports(8);
  };

  // /* Close modal after specific width */
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
  useEffect(() => {
    axios
      .get(notificationApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setShowNotification(res?.data?.result[0].text);
      });
  }, [notificationApi, token]);

  /* Logout */
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginName");
    localStorage.removeItem("hasModalBeenShown");
    localStorage.removeItem("modal");
    localStorage.removeItem("buttonValue");
    navigate("/login");
  };

  /* SetButton value */
  const onSubmit = ({
    buttons0label,
    buttons0value,
    buttons1label,
    buttons1value,
    buttons2label,
    buttons2value,
    buttons3label,
    buttons3value,
    buttons4label,
    buttons4value,
    buttons5label,
    buttons5value,
    buttons6label,
    buttons6value,
    buttons7label,
    buttons7value,
    buttons8label,
    buttons8value,
    buttons9label,
    buttons9value,
  }) => {
    fetch(buttonValueApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        game: [
          {
            label: buttons0label,
            value: buttons0value,
          },
          {
            label: buttons1label,
            value: buttons1value,
          },
          {
            label: buttons2label,
            value: buttons2value,
          },
          {
            label: buttons3label,
            value: buttons3value,
          },
          {
            label: buttons4label,
            value: buttons4value,
          },
          {
            label: buttons5label,
            value: buttons5value,
          },
          {
            label: buttons6label,
            value: buttons6value,
          },
          {
            label: buttons7label,
            value: buttons7value,
          },
          {
            label: buttons8label,
            value: buttons8value,
          },
          {
            label: buttons9label,
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
              label: buttons0label,
              value: buttons0value,
            },
            {
              label: buttons1label,
              value: buttons1value,
            },
            {
              label: buttons2label,
              value: buttons2value,
            },
            {
              label: buttons3label,
              value: buttons3value,
            },
            {
              label: buttons4label,
              value: buttons4value,
            },
            {
              label: buttons5label,
              value: buttons5value,
            },
            {
              label: buttons6label,
              value: buttons6value,
            },
            {
              label: buttons7label,
              value: buttons7value,
            },
            {
              label: buttons8label,
              value: buttons8value,
            },
            {
              label: buttons9label,
              value: buttons9value,
            },
          ];
          localStorage.setItem(
            "buttonValue",
            JSON.stringify(gameButtonsValues)
          );
          SetButtonValue(!buttonValue);
        }
      });
  };
  const loginWithDemo = () => {
    const generatedToken = UseTokenGenerator();
    const loginData = UseEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
    });
    fetch(loginApi, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("loginName", data.result.loginName);
        localStorage.setItem("forceLoginSuccess", "true");
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        localStorage.setItem("buttonValue", buttonValue);
        const modal = [
          { banner: data?.result?.banner },
          { bannerTitle: data?.result?.bannerTitle },
        ];
        localStorage.setItem("modal", JSON.stringify(modal));
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === true
        ) {
          navigate("/change-password-login");
        } else if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === false
        ) {
          navigate("/");
        } else {
          setErrorLogin(data?.error);
        }
      });
  };
  return (
    <div
      className="wrapper"
      style={{
        position: "relative",
      }}
    >
      {errorLogin && (
        <Notification
          message={errorLogin}
          success={false}
          setMessage={setErrorLogin}
        />
      )}
      <section className="header">
        <div className="header-top">
          {ruleModal && (
            <RulesModal ruleModal={ruleModal} setRuleModal={setRuleModal} />
          )}
          <div className="logo-header">
            <Link className="d-xl-none" href="/">
              <i className="fas fa-home me-1"></i>
            </Link>
            <Link href="/">
              <img src={logo} />
            </Link>
          </div>

          {(!isDemoLoginShow && !isShowRegisterButton && !isForceLogin) ||
            (forceLoginSuccess && (
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
                      <b>Rules</b>
                    </Link>
                  </div>
                </div>
                <div className="ms-3 d-none d-xl-flex">
                  {showDeposit && (
                    <Link className="btn btn-success me-2" to="/deposit">
                      Deposit
                    </Link>
                  )}
                  {showWithdraw && (
                    <Link className="btn btn-danger" to="/withdraw">
                      Withdraw
                    </Link>
                  )}
                </div>
                <div className="user-balance ms-1 ms-xl-3">
                  {balance && (
                    <div>
                      <span>Balance:</span>
                      <b>{balanceData?.creditLimit}</b>
                    </div>
                  )}
                  <div>
                    {exp && (
                      <>
                        <span>Exp:</span>
                        <b className="pointer">
                          {balanceData?.deductedExposure}
                        </b>
                      </>
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
                                      <div className="row row10">
                                        <div className="mb-1 col-6">
                                          <label className="form-label">
                                            <b>Price Label:</b>
                                          </label>
                                        </div>
                                        <div className="mb-1 col-6">
                                          <label className="form-label">
                                            <b>Price Value:</b>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons0label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[0].label
                                            }
                                            name="buttons0label"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons0value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[0].value
                                            }
                                            name="buttons0value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons1label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[1].label
                                            }
                                            name="buttons1label"
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
                                              buttonGameValue[1].value
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
                                            {...register("buttons2label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[2].label
                                            }
                                            name="buttons2label"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons2value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[2].value
                                            }
                                            name="buttons2value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons3label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[3].label
                                            }
                                            name="buttons3label"
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
                                              buttonGameValue[3].value
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
                                            {...register("buttons4label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[4].label
                                            }
                                            name="buttons4label"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons4value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[4].value
                                            }
                                            name="buttons4value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons5label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[5].label
                                            }
                                            name="buttons5label"
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
                                              buttonGameValue[5].value
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
                                            {...register("buttons6label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[6].label
                                            }
                                            name="buttons6label"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons6value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[6].value
                                            }
                                            name="buttons6value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons7label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[7].label
                                            }
                                            name="buttons7label"
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
                                              buttonGameValue[7].value
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
                                            {...register("buttons8label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[8].label
                                            }
                                            name="buttons8label"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons8value", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[8].value
                                            }
                                            name="buttons8value"
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="row row10">
                                        <div className="mb-3 col-6 position-relative">
                                          <input
                                            {...register("buttons9label", {
                                              required: true,
                                            })}
                                            defaultValue={
                                              buttonGameValue[9].label
                                            }
                                            name="buttons9label"
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
                                              buttonGameValue[9].value
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

                    <div ref={openModalRef} className="dropdown">
                      <div
                        onClick={() => setOpen(!open)}
                        className="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
                        id="react-aria2236598939-1"
                        aria-expanded="false"
                      >
                        {role}
                        <i className="fas fa-chevron-down ms-1"></i>
                      </div>
                      {open && (
                        <div className="show dropdown ">
                          <Link
                            className="user-name ms-3 d-none d-xl-block dropdown-toggle show"
                            id="react-aria9626335788-2"
                            aria-expanded="true"
                          >
                            Lake777<i className="fas fa-chevron-down ms-1"></i>
                          </Link>
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
                              transform: "translate(-190px, 5px)",
                            }}
                          >
                            <div className="d-xl-none d-flex justify-content-center"></div>
                            <Link
                              to="/account-statement"
                              onClick={() => setOpen(!open)}
                            >
                              <li
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                              >
                                Account Statement
                              </li>
                            </Link>
                            <Link
                              onClick={() => setOpen(!open)}
                              to="/current-bet"
                            >
                              <li
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                              >
                                Current Bet
                              </li>
                            </Link>
                            <Link
                              onClick={() => setOpen(!open)}
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
                                setOpen(!open);
                              }}
                            >
                              <li className="dropdown-item">
                                Set Button Values
                              </li>
                            </div>

                            <Link
                              to="/secure-auth"
                              onClick={() => setOpen(!open)}
                            >
                              <li
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                              >
                                Security Auth Verification
                              </li>
                            </Link>
                            <Link
                              onClick={() => setOpen(!open)}
                              to="/change-password"
                            >
                              <li
                                data-rr-ui-dropdown-item=""
                                className="dropdown-item"
                              >
                                Change Password
                              </li>
                            </Link>
                            <Link
                              onClick={() => {
                                setRuleModal(!ruleModal);
                                setOpen(!open);
                              }}
                              className="d-xl-none"
                            >
                              <li className="dropdown-item">Rules</li>
                            </Link>
                            <Link
                              onClick={() => setBalance(!balance)}
                              className="dropdown-item d-xl-none"
                            >
                              Balance
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
                              Exposure
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
                              SignOut
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
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
                            Current Bet
                          </li>
                        </Link>
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
                            Change Password
                          </li>
                        </Link>

                        <div className="d-xl-none">
                          <li className="dropdown-item">Rules</li>
                        </div>

                        <Link
                          onClick={() => setBalance(!balance)}
                          className="dropdown-item d-xl-none"
                        >
                          Balance
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
                          Exposure
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
                          SignOut
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          {(isDemoLoginShow || isShowRegisterButton || isForceLogin) &&
          !forceLoginSuccess ? (
            <div className="user-details login-btn-box">
              <div className="user-name dropdown ms-3">
                {isShowRegisterButton && (
                  <Link className="btn-home-login" to="/register">
                    Register
                  </Link>
                )}
                {isForceLogin && (
                  <Link className="btn-home-login" to="/login">
                    Login
                  </Link>
                )}
                {isDemoLoginShow && (
                  <button
                    onClick={loginWithDemo}
                    type="button"
                    className="btn-home-login"
                  >
                    Login with demo ID
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {(!isDemoLoginShow && !isShowRegisterButton && !isForceLogin) ||
            (forceLoginSuccess && (
              <div className="search-box-container d-xl-none">
                <SearchBox />
                <div className="depowith">
                  {" "}
                  <div className="d-xl-none d-flex justify-content-center">
                    {showDeposit && (
                      <a className="btn btn-success me-2" href="/deposit">
                        Deposit
                      </a>
                    )}
                    {showWithdraw && (
                      <a className="btn btn-danger" href="/withdraw">
                        Withdraw
                      </a>
                    )}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}

          <div className="news">
            {/* ToDO scrollAmount="3" */}
            <marquee>{showNotification} </marquee>
          </div>
        </div>
        <div className="header-bottom d-none d-xl-block">
          <nav className="navbar navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={cricketEndpoint}
                  className="nav-link"
                  to="/cricket"
                >
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={tennisEndpoint}
                  className="nav-link"
                  to="/tennis"
                >
                  Tennis
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={footballEndpoint}
                  className="nav-link"
                  to="/football"
                >
                  Football
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
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
