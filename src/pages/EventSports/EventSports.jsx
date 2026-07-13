import { useEffect, useState } from "react";
import axios from "axios";
import BetTable from "../../components/BetTable/BetTable";
import { API } from "../../utils";
import handleDecryptData from "../../utils/handleDecryptData";
import { useParams } from "react-router-dom";

const EventSports = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  /* Cricket event */
  useEffect(() => {
    const gamesData = async () => {
      if (id !== null) {
        const apiUrl = `${API.groupSportsBook}/${id}`;
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
    /* Refetch cricket api after 1 second */
  }, []);

  if (loading) {
    return;
  }

  return (
    <div className="center-container" style={{ width: "100%" }}>
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
              {Object.values(data).length > 0 ? (
                Object.keys(data)
                  ?.filter((key) => {
                    return data?.[key]?.visible === true;
                  })
                  .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                  .map((key, index) => (
                    <BetTable key={index} keys={key} data={data} />
                  ))
              ) : (
                <div className="bet-table-row">No Record Found</div>
              )}
              {/* {Object.keys(data)?.filter((key) => {
                return data?.[key]?.visible === true;
              }).length < 1 && (
                <div className="bet-table-row">No Record Found</div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSports;
