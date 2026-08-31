import { NavLink } from "react-router-dom";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../constant";
// import { settings } from "../../utils";

const Category = () => {
  const { getLanguage } = useLanguage();
  return (
    <>
      <ul className="nav nav-tabs d-xl-none menu-tabs">
        <li className="nav-item">
          <NavLink aria-current="page" className="nav-link" to="/">
            Sports
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/our-casino">
            Our Casino
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" to="/live-casino">
            {getLanguage(LanguageKey.LIVE_CASINO)}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/slot-games">
            {getLanguage(LanguageKey.SLOTS)}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/fantasy-games">
            {getLanguage(LanguageKey.FANTASY)}
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/mac88">
            Mac88
          </NavLink>
        </li> */}
      </ul>
    </>
  );
};

export default Category;
