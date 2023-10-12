import logo from "../../static/front/img/logo.png";
const Header = () => {
  return (
    <div className="wrapper">
      <section className="header">
        <div className="header-top">
          <div className="logo-header">
            <a className="d-xl-none" href="/home">
              <i className="fas fa-home me-1"></i>
            </a>
            <a href="/home">
              <img src={logo} />
            </a>
          </div>
          <div className="user-details">
            <div className="search-box-container d-none d-xl-block">
              <div className="search-box">
                <input
                  type="search"
                  placeholder="Search here"
                  className="form-control"
               
                />
                <a>
                  <i className="fas fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div className="header-rules ms-3">
              <div>
                <a className="rules-link pointer">
                  <b>Rules</b>
                </a>
              </div>
            </div>
            <div className="ms-3 d-none d-xl-flex"></div>
            <div className="user-balance ms-1 ms-xl-3">
              <div>
                <span>Balance:</span>
                <b>5190</b>
              </div>
              <div>
                <span>Exp:</span>
                <b className="pointer">0</b>
                <div className="dropdown">
                  <a
                    className="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
                    id="react-aria2236598939-1"
                    aria-expanded="false"
                  >
                    Demo<i className="fas fa-chevron-down ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a
                className="user-name ms-3 d-none d-xl-block dropdown-toggle"
                id="react-aria2236598939-2"
                aria-expanded="false"
              >
                Demo<i className="fas fa-chevron-down ms-1"></i>
              </a>
            </div>
          </div>
          <div className="search-box-container d-xl-none">
            <div className="search-box">
              <input
                type="search"
                placeholder="Search here"
                className="form-control"
             
              />
              <a>
                <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
          <div className="news">
            <marquee >
              Experience the Excitement of Live Sports, Live Casinos, Virtual
              Casinos and Fantasy Games On Our Exchange. Play Now To Win
              Unlimited.{" "}
            </marquee>
          </div>
        </div>
        <div className="header-bottom d-none d-xl-block">
          <nav className="navbar navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports-book/33">
                  Lottery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-sports/4">
                  Cricket
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-sports/2">
                  Tennis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-sports/1">
                  Football
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-sports/8">
                  Table Tennis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/casino-list/LC/4/22">
                  Baccarat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/casino-list/LC/4/24">
                  32 Cards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/casino-list/LC/4/20">
                  Teenpatti
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/casino-list/LC/4/21">
                  Poker
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/casino-list/LC/4/27">
                  Lucky 7
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
