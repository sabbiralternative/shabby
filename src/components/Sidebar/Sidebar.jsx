import axios from "axios";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sportsLink, setSportsLink] = useState(true);
  const [menu, setMenu] = useState([]);
  const menuApi = config?.result?.endpoint?.menu;


  /* get menu links */
  useEffect(() => {
    const getAllMenuApi = async () => {
      const res = await axios.get(menuApi);
      const data = res.data;
      setMenu(data);
    };
    getAllMenuApi();
  }, [menuApi]);

  return (
    <>
      <div className="accordion"></div>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button
              type="button"
              aria-expanded="true"
              className="accordion-button"
            >
              Others
            </button>
          </h2>
          <div className="accordion-collapse collapse show">
            <div className="other-casino-list accordion-body">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/our-casino">
                    <span className="blink_me">Our Casino</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/our-virtual">
                    <span className="blink_me">Our Virtual</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/live-casino">
                    <span>Live Casino</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/slot-games">
                    <span>Slot Game</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fantasy-games">
                    <span>Fantasy Game</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                    {menu?.map((m, i) => (
                      <Menu
                        key={i}
                        eventTypeName={m.eventTypeName}
                        menu={m}
                        singleEvent={m}
                      />
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

export const Menu = ({ eventTypeName, menu, singleEvent }) => {
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
              <Competitions
                key={i}
                competitions={c}
                menu={menu}
                singleEvent={singleEvent}
              />
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export const Competitions = ({ competitions, menu, singleEvent }) => {
  const [links, setLinks] = useState([]);
  const [showLinks, setShowLinks] = useState(false);
  const showLink = (link) => {
    const find = menu.competitions.filter((c) => c.competitionName === link);
    setLinks(find);
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
            {links[0].events.map((li, i) => (
              <Links
                key={i}
                eventName={li.eventName}
                competitions={competitions}
                singleEvent={singleEvent}
              />
            ))}
          </li>
        </ul>
      )}
    </>
  );
};

export const Links = ({ eventName, singleEvent, competitions }) => {
  const navigate = useNavigate();
  const getSingleGame = (name) => {
    const filter = competitions.events.find((ev) => ev.eventName === name);
    const evenTypeId = singleEvent.eventTypeId;
    const eventId = filter.eventId;
    navigate(`/game-details/${evenTypeId}/${eventId}`);
  };
  return (
    <div
      onClick={() => getSingleGame(eventName)}
      className="dropdown-toggle nav-link"
    >
      <span>{eventName}</span>
    </div>
  );
};
