import { useEffect, useState } from "react";
import { config } from "../../utils/config";
import logo from "../../static/front/img/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  // const [input, setInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [balance, setBalance] = useState(true);
  const [exp, setExp] = useState(true);
  const token = localStorage.getItem("token");
  const balanceApi = config?.result?.endpoint?.balance;
  const notificationApi = config?.result?.endpoint?.notification;
  const [showBalance, setShowBalance] = useState(0);
  const [showExp, setShowExp] = useState(0);
  const [showNotification, setShowNotification] = useState("");
  const navigate = useNavigate();

  const cricketEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 4);
  };
  const tennisEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 2);
  };
  const footballEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 1);
  };

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

  /* Call balance anx exp api every 5 seconds */
  useEffect(() => {
    const fetchBalanceExp = () => {
      axios
        .get(balanceApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setShowBalance(res?.data?.result?.creditLimit);
          setShowExp(res?.data?.result?.deductedExposure);
        });
    };
    fetchBalanceExp();
    const intervalId = setInterval(fetchBalanceExp, 5000);
    return () => clearInterval(intervalId);
  }, [balanceApi, token]);

  /* Get notification */
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

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginName");
    localStorage.removeItem("hasModalBeenShown");
    navigate("/login");
  };

  return (
    <div
      className="wrapper"
      style={{
        position: "relative",
      }}
    >
      <section className="header">
        <div className="header-top">
          <div className="logo-header">
            <Link className="d-xl-none" href="/">
              <i className="fas fa-home me-1"></i>
            </Link>
            <Link href="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="user-details">
            <div className="search-box-container d-none d-xl-block">
              <div className="search-box">
                <input
                  type="search"
                  placeholder="Search here"
                  className="form-control"
                />
                <Link>
                  <i className="fas fa-search-plus"></i>
                </Link>
              </div>
            </div>
            <div className="header-rules ms-3">
              <div>
                <Link className="rules-link pointer">
                  <b>Rules</b>
                </Link>
              </div>
            </div>
            <div className="ms-3 d-none d-xl-flex"></div>
            <div className="user-balance ms-1 ms-xl-3">
              {balance && (
                <div>
                  <span>Balance:</span>
                  <b>{showBalance}</b>
                </div>
              )}
              <div>
                {exp && (
                  <>
                    <span>Exp:</span>
                    <b className="pointer">{showExp}</b>
                  </>
                )}
                <div onClick={() => setOpen(!open)} className="dropdown">
                  <div
                    className="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
                    id="react-aria2236598939-1"
                    aria-expanded="false"
                  >
                    Demo<i className="fas fa-chevron-down ms-1"></i>
                  </div>
                </div>

                {open && (
                  <div className="show dropdown">
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
                      <Link href="/account-statement">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Account Statement
                        </li>
                      </Link>
                      <Link href="/current-bet">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Current Bet
                        </li>
                      </Link>
                      <Link href="/activity-log">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Activity Logs
                        </li>
                      </Link>
                      <Link href="/casino-results">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Casino Results
                        </li>
                      </Link>
                      <Link href="/live-casino-bets">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Live Casino Bets
                        </li>
                      </Link>
                      <Link>
                        <li className="dropdown-item">Set Button Values</li>
                      </Link>
                      <Link href="/secure-auth">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Security Auth Verification
                        </li>
                      </Link>
                      <Link href="/change-password">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Change Password
                        </li>
                      </Link>
                      <Link className="d-xl-none">
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
                        transform: "translate(10px, 5px)",
                      }}
                    >
                      <div className="d-xl-none d-flex justify-content-center"></div>
                      <Link href="/account-statement">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Account Statement
                        </li>
                      </Link>
                      <Link href="/current-bet">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Current Bet
                        </li>
                      </Link>
                      <Link href="/activity-log">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Activity Logs
                        </li>
                      </Link>
                      <Link href="/casino-results">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Casino Results
                        </li>
                      </Link>
                      <Link href="/live-casino-bets">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Live Casino Bets
                        </li>
                      </Link>
                      <Link>
                        <li className="dropdown-item">Set Button Values</li>
                      </Link>
                      <Link href="/secure-auth">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Security Auth Verification
                        </li>
                      </Link>
                      <Link href="/change-password">
                        <li
                          data-rr-ui-dropdown-item=""
                          className="dropdown-item"
                        >
                          Change Password
                        </li>
                      </Link>
                      <Link className="d-xl-none">
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
            <div onClick={() => setDropDown(!dropDown)} className="dropdown">
              <div
                className="user-name ms-3 d-none d-xl-block dropdown-toggle"
                id="react-aria2236598939-2"
                aria-expanded="false"
              >
                Demo<i className="fas fa-chevron-down ms-1"></i>
              </div>
            </div>
          </div>
          <div className="search-box-container d-xl-none">
            <div className="search-box">
              <input
                type="search"
                placeholder="Search here"
                className="form-control"
              />
              <Link>
                <i className="fas fa-search-plus"></i>
              </Link>
            </div>
          </div>
          <div className="news">
           
            <marquee scrollAmount="3">{showNotification} </marquee>
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
                <Link className="nav-link" to="/lottery">
                  Lottery
                </Link>
              </li>
              <li onClick={cricketEndpoint} className="nav-item">
                <Link className="nav-link" to="/cricket">
                  Cricket
                </Link>
              </li>
              <li onClick={tennisEndpoint} className="nav-item">
                <Link className="nav-link" to="/tennis">
                  Tennis
                </Link>
              </li>
              <li onClick={footballEndpoint} className="nav-item">
                <Link className="nav-link" to="/football">
                  Football
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/table-tennis">
                  Table Tennis
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/baccarat">
                  Baccarat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/32-cards">
                  32 Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teenpatti">
                  Teenpatti
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/poker">
                  Poker
                </Link>
              </li>
              <li className="nav-item">
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
