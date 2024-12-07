import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../utils";
import HorseGreyhound from "../../components/HorseGreyhound/HorseGreyhound";
import handleDecryptData from "../../utils/handleDecryptData";

const Horse = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  /* Cricket event */
  useEffect(() => {
    const gamesData = async () => {
      const apiUrl = `${API.groupSportsBook}/${7}`;
      const res = await axios.get(apiUrl);
      const data = res.data;
      const decryptionData = await handleDecryptData(JSON.stringify(data));

      setData(decryptionData);
      setLoading(false);
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
              {data?.length > 0 ? (
                <HorseGreyhound
                  data={data}
                  eventTypeId={7}
                  title="Horse Racing"
                />
              ) : (
                <div className="bet-table-row">No Record Found</div>
              )}
              {/* {Object.values(data).length < 1 && (
                <div className="bet-table-row">No Record Found</div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horse;
