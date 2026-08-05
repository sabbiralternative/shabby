import { useEffect, useState } from "react";
import axios from "axios";
import BetTable from "../../components/BetTable/BetTable";
import { API } from "../../utils";
import handleDecryptData from "../../utils/handleDecryptData";
import { filterLiveVirtual } from "../../utils/filter-live-virtual";
import LiveVirtual from "../HomePage/LiveVirtual";

const Tennis = () => {
  const [liveVirtual, setLiveVirtual] = useState([]);
  const [data, setData] = useState([]);
  const group = JSON.parse(localStorage.getItem("group"));
  const [loading, setLoading] = useState(true);

  /* Get tennis data */
  useEffect(() => {
    const gamesData = async () => {
      if (group !== null) {
        const apiUrl = `${API.groupSportsBook}/${group}`;
        const res = await axios.get(apiUrl, {
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        });
        const data = res.data;

        let decryptionData;
        if (data?.ct) {
          decryptionData = handleDecryptData(JSON.stringify(data));
        } else {
          decryptionData = data;
        }
        setData(decryptionData);
        setLoading(false);
      }
    };
    gamesData();
  }, [group]);

  if (loading) {
    return "";
  }
  const groupedData = filterLiveVirtual(liveVirtual, group, data);
  return (
    <div className="center-container" style={{ width: "100%" }}>
      <div className="tab-content mt-1">
        <div className="tab-pane active">
          <div className="bet-table">
            <div className="bet-table-header">
              <div
                className="bet-nation-name"
                style={{ display: "flex", alignItems: "center" }}
              >
                <b>Game</b>
                <LiveVirtual setLiveVirtual={setLiveVirtual} category={group} />
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
                groupedData?.map((key, index) => (
                  <BetTable key={index} keys={key} data={data} />
                ))}

              {Object.keys(data)?.filter((key) => {
                return data?.[key]?.visible === true;
              }).length < 1 && (
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
