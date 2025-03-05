import "../../static/front/css/horseGreyhound.css";
import moment from "moment-timezone";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const HorseGreyhound = ({ data, title, eventTypeId }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (data) {
      setSelectedCategory(data?.[0]?.childs?.[0]?.countryCode);
    }
  }, [data]);

  const findChildByCountryCode =
    selectedCategory &&
    data &&
    data?.[0]?.childs?.find((child) => child?.countryCode === selectedCategory);

  const convertToIST = (utc) => {
    return moment(utc).tz("Asia/Kolkata").format("HH:mm");
  };
  return (
    <>
      <div className="tab-content mt-1">
        <div className="tab-pane active">
          <div className="nav nav-pills" role="tablist">
            <div className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="0"
                id="horse-tabs-tab-0"
                aria-controls="horse-tabs-tabpane-0"
                aria-selected="true"
                className="nav-link"
                href="#"
              >
                ZA
              </a>
            </div>
            <div className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="1"
                id="horse-tabs-tab-1"
                aria-controls="horse-tabs-tabpane-1"
                aria-selected="false"
                className="nav-link"
                href="#"
              >
                AU
              </a>
            </div>
            <div className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="2"
                id="horse-tabs-tab-2"
                aria-controls="horse-tabs-tabpane-2"
                aria-selected="false"
                className="nav-link"
                href="#"
              >
                GB
              </a>
            </div>
            <div className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="3"
                id="horse-tabs-tab-3"
                aria-controls="horse-tabs-tabpane-3"
                aria-selected="false"
                className="nav-link"
                href="#"
              >
                FR
              </a>
            </div>
            <div className="nav-item">
              <a
                role="tab"
                data-rr-ui-event-key="4"
                id="horse-tabs-tab-4"
                aria-controls="horse-tabs-tabpane-4"
                aria-selected="false"
                className="nav-link"
                href="#"
              >
                HK
              </a>
            </div>
          </div>
          <div className="tab-content">
            <div
              role="tabpanel"
              id="horse-tabs-tabpane-0"
              aria-labelledby="horse-tabs-tab-0"
              className="fade tab-pane active show"
            >
              <div className="bet-table position-relative horse-table">
                <div className="bet-table-body">
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Durbanville</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/887733804">
                        <span>15:45</span>
                      </a>
                      <a href="/game-details/10/869519258">
                        <span className="">16:20</span>
                      </a>
                      <a href="/game-details/10/817561260">
                        <span className="">16:55</span>
                      </a>
                      <a href="/game-details/10/519492699">
                        <span className="">17:30</span>
                      </a>
                      <a href="/game-details/10/525125044">
                        <span className="">18:05</span>
                      </a>
                      <a href="/game-details/10/471484663">
                        <span className="">18:45</span>
                      </a>
                      <a href="/game-details/10/898297331">
                        <span className="">19:20</span>
                      </a>
                      <a href="/game-details/10/530347551">
                        <span className="">19:53</span>
                      </a>
                      <a href="/game-details/10/908429751">
                        <span className="">20:28</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="horse-tabs-tabpane-1"
              aria-labelledby="horse-tabs-tab-1"
              className="fade tab-pane"
            >
              <div className="bet-table position-relative horse-table">
                <div className="bet-table-body">
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Bathurst</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/477540236">
                        <span className="">16:13</span>
                      </a>
                      <a href="/game-details/10/548864484">
                        <span className="">16:47</span>
                      </a>
                    </div>
                  </div>
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Bendigo</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/754789198">
                        <span className="">16:03</span>
                      </a>
                      <a href="/game-details/10/598477675">
                        <span className="">16:33</span>
                      </a>
                    </div>
                  </div>
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Launceston</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/756006740">
                        <span className="">16:00</span>
                      </a>
                      <a href="/game-details/10/797006226">
                        <span className="">16:30</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="horse-tabs-tabpane-2"
              aria-labelledby="horse-tabs-tab-2"
              className="fade tab-pane"
            >
              <div className="bet-table position-relative horse-table">
                <div className="bet-table-body">
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Catterick</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/479298752">
                        <span className="">19:55</span>
                      </a>
                      <a href="/game-details/10/694715784">
                        <span className="">20:25</span>
                      </a>
                      <a href="/game-details/10/867682549">
                        <span className="">20:55</span>
                      </a>
                      <a href="/game-details/10/793600702">
                        <span className="">21:25</span>
                      </a>
                      <a href="/game-details/10/814224792">
                        <span className="">22:00</span>
                      </a>
                      <a href="/game-details/10/794890033">
                        <span className="">22:30</span>
                      </a>
                    </div>
                  </div>
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Lingfield</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/882479891">
                        <span className="">19:10</span>
                      </a>
                      <a href="/game-details/10/493283604">
                        <span className="">19:42</span>
                      </a>
                      <a href="/game-details/10/895118933">
                        <span className="">20:12</span>
                      </a>
                      <a href="/game-details/10/481934549">
                        <span className="">20:42</span>
                      </a>
                      <a href="/game-details/10/719017551">
                        <span className="">21:12</span>
                      </a>
                      <a href="/game-details/10/694051431">
                        <span className="">21:42</span>
                      </a>
                      <a href="/game-details/10/506846094">
                        <span className="">22:12</span>
                      </a>
                      <a href="/game-details/10/515157719">
                        <span className="">22:47</span>
                      </a>
                    </div>
                  </div>
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Kempton</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/782421950">
                        <span className="">21:52</span>
                      </a>
                      <a href="/game-details/10/743232866">
                        <span className="">22:25</span>
                      </a>
                      <a href="/game-details/10/557188682">
                        <span className="">23:00</span>
                      </a>
                      <a href="/game-details/10/807029408">
                        <span className="">23:30</span>
                      </a>
                      <a href="/game-details/10/814588411">
                        <span className="">00:00</span>
                      </a>
                      <a href="/game-details/10/499048235">
                        <span className="">00:30</span>
                      </a>
                      <a href="/game-details/10/798394439">
                        <span className="">01:00</span>
                      </a>
                      <a href="/game-details/10/573947534">
                        <span className="">01:30</span>
                      </a>
                      <a href="/game-details/10/836864210">
                        <span className="">02:00</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="horse-tabs-tabpane-3"
              aria-labelledby="horse-tabs-tab-3"
              className="fade tab-pane"
            >
              <div className="bet-table position-relative horse-table">
                <div className="bet-table-body">
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>Bordeaux Le Bouscat</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/505765621">
                        <span className="">15:55</span>
                      </a>
                      <a href="/game-details/10/563216306">
                        <span className="">16:25</span>
                      </a>
                      <a href="/game-details/10/894141406">
                        <span className="">16:55</span>
                      </a>
                      <a href="/game-details/10/568032710">
                        <span className="">17:25</span>
                      </a>
                      <a href="/game-details/10/603679180">
                        <span className="">17:57</span>
                      </a>
                      <a href="/game-details/10/761382629">
                        <span className="">18:42</span>
                      </a>
                      <a href="/game-details/10/638201229">
                        <span className="">19:17</span>
                      </a>
                      <a href="/game-details/10/877792894">
                        <span className="">19:52</span>
                      </a>
                      <a href="/game-details/10/618339813">
                        <span className="">20:27</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              id="horse-tabs-tabpane-4"
              aria-labelledby="horse-tabs-tab-4"
              className="fade tab-pane"
            >
              <div className="bet-table position-relative horse-table">
                <div className="bet-table-body">
                  <div className="bet-table-row">
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <i className="fas fa-tv icon-tv"></i>
                      </div>
                      <div className="bet-nation-game-name">
                        <span>HAPPY VALLEY</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      <a href="/game-details/10/682322682">
                        <span className="">16:10</span>
                      </a>
                      <a href="/game-details/10/845682421">
                        <span className="">16:40</span>
                      </a>
                      <a href="/game-details/10/755178423">
                        <span className="">17:10</span>
                      </a>
                      <a href="/game-details/10/523458555">
                        <span className="">17:40</span>
                      </a>
                      <a href="/game-details/10/886376572">
                        <span className="">18:10</span>
                      </a>
                      <a href="/game-details/10/704447772">
                        <span className="">18:40</span>
                      </a>
                      <a href="/game-details/10/773110894">
                        <span className="">19:15</span>
                      </a>
                      <a href="/game-details/10/703403634">
                        <span className="">19:45</span>
                      </a>
                      <a href="/game-details/10/686115891">
                        <span className="">20:20</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorseGreyhound;
