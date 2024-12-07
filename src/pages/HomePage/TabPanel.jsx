import UseState from "../../hooks/UseState";

const TabPanel = ({ label, icon: Icon, id }) => {
  const { setSports, sports } = UseState();

  return (
    <li onClick={() => setSports(id)} className="nav-item">
      <p className={`nav-link ${sports === id ? "active" : ""}`}>
        <div
          style={{
            paddingBottom: "3px",
            fontSize: "15px",
          }}
          className="d-xl-none"
        >
          {id == 7 ? (
            <i className="icon icon-10"></i>
          ) : id == 4339 ? (
            <i className="icon icon-65"></i>
          ) : (
            <Icon />
          )}
        </div>
        <span>{label}</span>
      </p>
    </li>
  );
};

export default TabPanel;
