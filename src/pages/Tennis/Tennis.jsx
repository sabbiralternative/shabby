import { useEffect, useState } from "react";
import axios from "axios";
import BetTable from "../../components/BetTable/BetTable";
import { API } from "../../utils";

const Tennis = () => {
  const [data, setData] = useState([]);
  const group = JSON.parse(localStorage.getItem("group"));
  const [loading, setLoading] = useState(true);

  /* Get tennis data */
  useEffect(() => {
    const gamesData = async () => {
      if (group !== null) {
        const apiUrl = `${API.group}/${group}`;
        const res = await axios.get(apiUrl, {
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        });
        const data = res.data;

        setData(data);
        setLoading(false);
      }
    };
    gamesData();
  }, [group]);

  if (loading) {
    return "";
  }

  return (
    <div className="center-container">
      <div className="tab-content mt-1">
        <div className="tab-pane active">
          <div className="bet-table">
            <div className="bet-table-header">
              <div className="bet-nation-name">
                <b>Game</b>
              </div>
              <div className="bet-nation-odd">
                <b>1</b>
              </div>
              <div className="bet-nation-odd">
                <b>X</b>
              </div>
              <div className="bet-nation-odd">
                <b>2</b>
              </div>
            </div>
            <div className="bet-table-body">
              {Object.values(data).length > 0 &&
                group === 2 &&
                Object.keys(data)
                  .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                  .map((key, index) => (
                    <BetTable key={index} keys={key} data={data} />
                  ))}
              {Object.values(data).length < 1 && (
                <div className="bet-table-row">No Record Found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tennis;
