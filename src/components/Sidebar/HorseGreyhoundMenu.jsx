import { useRef, useState } from "react";
import useGetGroupSportsBook from "../../hooks/groupSportsBook";
import { Link } from "react-router-dom";
import useCloseMultipleModal from "../../hooks/closeMultipleModal";

const listItems = [
  {
    title: "Horse Racing",
    group: "7a",
    dropDownTitle: "All Horse Racing",
  },
  {
    title: "Greyhound Racing",
    group: "4339a",
    dropDownTitle: "All Greyhound Racing",
  },
];

const HorseGreyhoundMenu = () => {
  const dropdownRefs = useRef({});
  const [activeTab, setActiveTab] = useState(null);
  const { data } = useGetGroupSportsBook(activeTab);

  useCloseMultipleModal(dropdownRefs, () => {
    setActiveTab(null);
  });

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="sidebar-title accordion-header">
          <button
            type="button"
            aria-expanded="true"
            className="accordion-button"
          >
            Racing Sports
          </button>
        </h2>
        <div className="accordion-collapse collapse show">
          <div className="racing-sport accordion-body">
            {listItems?.map((listItem) => {
              return (
                <ul key={listItem.group}>
                  <div
                    className={`nav-item dropdown ${
                      activeTab === listItem.group ? "show" : ""
                    }`}
                  >
                    <a
                      onClick={() => setActiveTab(listItem.group)}
                      id="horse-dropdown"
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                    >
                      {listItem?.title}
                    </a>
                    <div
                      ref={(el) => (dropdownRefs.current[listItem.group] = el)}
                      aria-labelledby="horse-dropdown"
                      className={`dropdown-menu ${
                        activeTab === listItem.group ? "show" : ""
                      }`}
                      data-popper-reference-hidden="false"
                      data-popper-escaped="true"
                      data-popper-placement="bottom-start"
                      style={{
                        position: "absolute",
                        inset: "0px auto auto 0px",
                        transform: "translate(0px, 183.333px)",
                      }}
                    >
                      <h5>{listItem.dropDownTitle}</h5>
                      <div className="horse-list-box">
                        {data?.map((navItem) => {
                          return (
                            <Link
                              onClick={() => setActiveTab(null)}
                              key={navItem?.event_id}
                              data-rr-ui-dropdown-item
                              className="dropdown-item"
                              to={`/game-details/${navItem?.event_type_id}/${navItem?.event_id}`}
                            >
                              <p className="dropdown-item">
                                {navItem?.event_name}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseGreyhoundMenu;
