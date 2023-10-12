import { Link } from "react-router-dom";
import UseState from "../../hooks/UseState";

const TabPanel = ({ label, icon: Icon, id }) => {
  const { setSports, sports } = UseState();
  return (
    <li onClick={() => setSports(id)} className="nav-item">
      <Link className={`nav-link ${sports === id ? "active" : ""}`}>
        <div style={{
          paddingBottom:'3px',
          fontSize:'15px'
        }} className="d-xl-none">
          <Icon />
        </div>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default TabPanel;