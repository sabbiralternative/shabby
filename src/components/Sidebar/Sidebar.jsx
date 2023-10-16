import axios from "axios";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sportsLink, setSportsLink] = useState(true);
  const [menu, setMenu] = useState([]);
  const menuApi = config?.result?.endpoint?.menu;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getAllMenuApi = async () => {
      const res = await axios.get(menuApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      setMenu(data);
    };
    getAllMenuApi();
  }, [menuApi, token]);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <h2
            onClick={() => setSportsLink(!sportsLink)}
            className="sidebar-title accordion-header"
          >
            <button
              type="button"
              aria-expanded="true"
              className={`accordion-button ${!sportsLink ? "collapsed" : ""}`}
            >
              All Sports
            </button>
          </h2>
          {sportsLink && (
            <div className="accordion-collapse collapse show">
              <div className="menu-box accordion-body">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    {menu.map((m, i) => (
                      <Menu key={i} eventTypeName={m.eventTypeName} menu={m} />
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

export const Menu = ({ eventTypeName, menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="dropdown-toggle nav-link"
      >
        {isOpen ? (
          <i className="far fa-minus-square me-1"></i>
        ) : (
          <i className="far fa-plus-square me-1"></i>
        )}

        <span>{eventTypeName}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li className="nav-item">
            {menu.competitions.map((c, i) => (
              <Competitions key={i} competitions={c} menu={menu} />
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export const Competitions = ({ competitions, menu }) => {
  const [links, setLinks] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  const showLink = (link) => {
    const find = menu.competitions.filter((c) => c.competitionName === link);
    setLinks(find[0].events.map((j) => j.eventName));
  };
  return (
    <>
      <div
        onClick={() => {
          showLink(competitions.competitionName);
          setShowLinks(!showLinks);
        }}
        className="dropdown-toggle nav-link"
      >
        {showLinks ? (
          <i className="far fa-minus-square me-1"></i>
        ) : (
          <i className="far fa-plus-square me-1"></i>
        )}
        <span>{competitions.competitionName}</span>
      </div>
      {showLinks && (
        <ul className="dropdown-menu show">
          <li className="nav-item">
            {links?.map((link, i) => (
              <Links key={i} links={links} />
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export const Links = ({ links }) => {
  return (
    <Link className="dropdown-toggle nav-link" to="/game-details/40/494346387">
      <span>{links}</span>
    </Link>
  );
};
