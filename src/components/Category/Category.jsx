import { NavLink } from "react-router-dom";
import { settings } from "../../utils";

const Category = () => {
  return (
    <>
      <ul className="nav nav-tabs d-xl-none menu-tabs">
        <li className="nav-item">
          <NavLink aria-current="page" className="nav-link" to="/">
            Sports
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/our-casino">
            Our Casino
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/live-casino">
            Live Casino
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/slot-games">
            Slots
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/fantasy-games">
            Fantasy
          </NavLink>
        </li>
        {settings.mac88 && settings.casinoCurrency === "INR" && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/mac88">
              Mac88
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default Category;
