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

{
  /* <li onClick={() => setSports(4)} className="nav-item">
          <Link className="nav-link active">
            <div className="d-xl-none">
              <i className="icon icon-4"></i>
            </div>
            <span>Cricket</span>
          </Link>
        </li>

        <li onClick={() => setSports(1)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-1"></i>
            </div>
            <span>Football</span>
          </a>
        </li>

        <li onClick={() => setSports(2)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-2"></i>
            </div>
            <span>Tennis</span>
          </a>
        </li>

        <li onClick={() => setSports(5)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-8"></i>
            </div>
            <span>Table Tennis</span>
          </a>
        </li>

        <li onClick={() => setSports(6)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-15"></i>
            </div>
            <span>Basketball</span>
          </a>
        </li>

        <li onClick={() => setSports(7)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-18"></i>
            </div>
            <span>Volleyball</span>
          </a>
        </li>

        <li onClick={() => setSports(8)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-59"></i>
            </div>
            <span>Snooker</span>
          </a>
        </li>

        <li onClick={() => setSports(9)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-19"></i>
            </div>
            <span>Ice Hockey</span>
          </a>
        </li>

        <li onClick={() => setSports(10)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-11"></i>
            </div>
            <span>E Games</span>
          </a>
        </li>

        <li onClick={() => setSports(12)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-9"></i>
            </div>
            <span>Futsal</span>
          </a>
        </li>

        <li onClick={() => setSports(13)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-39"></i>
            </div>
            <span>Handball</span>
          </a>
        </li>

        <li onClick={() => setSports(14)} className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-66"></i>
            </div>
            <span>Kabaddi</span>
          </a>
        </li> */
}
