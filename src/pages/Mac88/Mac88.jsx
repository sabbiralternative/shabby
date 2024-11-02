import { useNavigate } from "react-router-dom";
import useGetMac88 from "../../hooks/useGetMac88";

const Mac88 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  const { data } = useGetMac88();
  const navigateLiveCasinoVideo = (id, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="center-container" style={{ width: "100%" }}>
      <div className="tab-content mt-xl-2 mt-1">
        <div className="tab-pane active" id="all-casino">
          <div className="casino-list">
            {data?.map((item) => {
              return (
                <div
                  onClick={() =>
                    navigateLiveCasinoVideo(item?.game_id, item?.game_name)
                  }
                  key={item?.game_id}
                  className="casino-list-item rect mac88"
                >
                  <div
                    onClick={() => navigateLiveCasinoVideo(item)}
                    className="casino-list-item-banner"
                    style={{
                      backgroundImage: `url(${item?.img})`,
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div className="game-name">
                    <p>{item?.game_name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac88;
