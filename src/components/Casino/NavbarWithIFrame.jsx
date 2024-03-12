import { Link, useNavigate } from "react-router-dom";
import UseState from "../../hooks/UseState";

const NavbarWithIFrame = () => {
  const { logo, setSports, setFilterGames } = UseState();
  const navigate = useNavigate();

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
  const tableTennisEndpoint = () => {
    localStorage.removeItem("group");
    localStorage.setItem("group", 8);
    setSports(8);
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
            <Link to="/">
              <img src={logo} />
            </Link>
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

export default NavbarWithIFrame;
