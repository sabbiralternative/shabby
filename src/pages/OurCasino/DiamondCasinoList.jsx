import { Link, useNavigate } from "react-router-dom";

const DiamondCasinoList = ({ casino }) => {
  console.log(casino);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (casino?.category == "Lucky 7")
      navigate(`/diamond/${casino?.eventTypeId}/${casino?.eventId}`);
  };
  return (
    <div onClick={handleNavigate} className="casino-list-item">
      <Link>
        <div
          className="casino-list-item-banner"
          style={{
            backgroundImage: `url(${casino.image})`,
          }}
        ></div>
      </Link>
    </div>
  );
};

export default DiamondCasinoList;
