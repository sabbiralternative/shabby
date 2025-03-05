import { useEffect, useState } from "react";
import UseState from "../../hooks/UseState";

const HorseGreyhound = ({ data, exposer, setShowBets, setTotalSize }) => {
  const [previousData, setPreviousData] = useState(data);
  const [changedPrices, setChangedPrices] = useState({});
  const { setPlaceBetValue, placeBetValue } = UseState();

  /* exposer */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  useEffect(() => {
    const newChangedPrices = {};
    data?.forEach((item, index) => {
      item?.runners?.forEach((runner, runnerIndex) => {
        if (placeBetValue?.selectionId) {
          if (placeBetValue?.selectionId === runner?.selectionId) {
            if (runner?.status !== "ACTIVE") {
              setShowBets(false);
              setPlaceBetValue({});
            }
          }
        }
        const previousRunner = previousData[index]?.runners[runnerIndex];
        runner?.ex?.availableToBack?.forEach((backItem, backIndex) => {
          const previousBackItem =
            previousRunner?.ex?.availableToBack?.[backIndex];

          if (backItem?.price !== previousBackItem?.price) {
            newChangedPrices[`back-${runner?.selectionId}-${backIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[
                `back-${runner?.selectionId}-${backIndex}`
              ] = false;

              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
        runner?.ex?.availableToLay?.forEach((layItem, layIndex) => {
          const previousLayItem =
            previousRunner?.ex?.availableToLay?.[layIndex];
          if (layItem?.price !== previousLayItem?.price) {
            newChangedPrices[`lay-${runner?.selectionId}-${layIndex}`] = true;
            setChangedPrices({ ...newChangedPrices });
            setTimeout(() => {
              newChangedPrices[
                `lay-${runner?.selectionId}-${layIndex}`
              ] = false;
              setChangedPrices({ ...newChangedPrices });
            }, 300);
          }
        });
      });
    });
    setPreviousData(data);
  }, [data, previousData]);

  console.log(data);

  return (
    <div className="center-container" style={{ width: "100%" }}>
      <div className="detail-page-container">
        <div className="horse-banner">
          <img
            src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
            className="img-fluid"
          />
          <div className="horse-banner-detail">
            <div className="text-success">OPEN</div>
            <div className="horse-timer">
              <span>
                &nbsp;28 <small>Minutes</small>&nbsp;10
                <small>Seconds</small>
              </span>
              <span>Remaining</span>
            </div>
            <div className="time-detail">
              <p>AU &gt; Bathurst</p>
              <h5>
                <span>05/03/2025 16:47:00</span>
                <span>| R10 1730m Pace M</span>
              </h5>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs d-xl-none menu-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab">
              Odds
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab">
              Matched Bet (0)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fas fa-tv"></i>
            </a>
          </li>
        </ul>
        <div className="game-market market-12">
          <div className="market-title">
            <span>MATCH_ODDS</span>
          </div>
          <div className="market-header">
            <div className="market-nation-detail">
              <span className="market-nation-name">Max: 25K</span>
            </div>
            <div className="market-odd-box no-border d-none d-md-flex"></div>
            <div className="market-odd-box no-border d-none d-md-flex"></div>
            <div className="market-odd-box back">
              <b>Back</b>
            </div>
            <div className="market-odd-box lay">
              <b>Lay</b>
            </div>
            <div className="market-odd-box d-none d-md-flex"></div>
            <div className="market-odd-box no-border d-none d-md-flex"></div>
          </div>
          <div className="market-body" data-title="OPEN">
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-0"
                    id="checkbox-runner-0"
                    value='{"mid":7737765680340,"sid":513570,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      1<br />
                      (1)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/513570.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>1. Domus Angeli</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Jye Coney</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Josh Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">15</span>
                <span className="market-volume">9.18</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">19</span>
                <span className="market-volume">12.25</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">23</span>
                <span className="market-volume">4.46</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">190</span>
                <span className="market-volume">4.98</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">990</span>
                <span className="market-volume">1.45</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">-</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Jye Coney</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Josh Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>3</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-1"
                    id="checkbox-runner-1"
                    value='{"mid":7737765680340,"sid":867201,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      2<br />
                      (2)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/867201.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>2. Teeswift</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Mat Rue</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Mat Rue</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">2.54</span>
                <span className="market-volume">45.11</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">2.56</span>
                <span className="market-volume">1.5</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">2.58</span>
                <span className="market-volume">2.26</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">3.4</span>
                <span className="market-volume">5.44</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">5</span>
                <span className="market-volume">3.16</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">5.1</span>
                <span className="market-volume">1.9</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Mat Rue</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Mat Rue</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>3</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-2"
                    id="checkbox-runner-2"
                    value='{"mid":7737765680340,"sid":780452,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      3<br />
                      (3)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/780452.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>3. Faith In Karlee</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Jason Hewitt</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>L D Battle</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>5</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">23</span>
                <span className="market-volume">9.44</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">28</span>
                <span className="market-volume">3.29</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">29</span>
                <span className="market-volume">3.32</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">260</span>
                <span className="market-volume">3.62</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">270</span>
                <span className="market-volume">2.45</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">970</span>
                <span className="market-volume">2.33</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Jason Hewitt</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>L D Battle</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>5</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-3"
                    id="checkbox-runner-3"
                    value='{"mid":7737765680340,"sid":808823,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      4<br />
                      (4)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/808823.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>4. A True Love</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>T G Rue</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>G J Rue</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">5.2</span>
                <span className="market-volume">49.43</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">5.7</span>
                <span className="market-volume">18.93</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">5.8</span>
                <span className="market-volume">12.22</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">8.8</span>
                <span className="market-volume">4.9</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">17</span>
                <span className="market-volume">1.62</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">17.5</span>
                <span className="market-volume">2.45</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>T G Rue</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>G J Rue</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>3</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-4"
                    id="checkbox-runner-4"
                    value='{"mid":7737765680340,"sid":604104,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      5<br />
                      (5)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/604104.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>5. Pyekakariki</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Nathan Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>K E Rue</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>5</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">9.6</span>
                <span className="market-volume">4.9</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">9.8</span>
                <span className="market-volume">5.48</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">10.5</span>
                <span className="market-volume">1.01</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">34</span>
                <span className="market-volume">6.1</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">36</span>
                <span className="market-volume">1.33</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">40</span>
                <span className="market-volume">2.45</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Nathan Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>K E Rue</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>5</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-5"
                    id="checkbox-runner-5"
                    value='{"mid":7737765680340,"sid":86915,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      6<br />
                      (6)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/86915.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>6. Toothsville</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Jason Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>G F Bullock</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>5</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">23</span>
                <span className="market-volume">9.44</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">28</span>
                <span className="market-volume">3.29</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">29</span>
                <span className="market-volume">3.31</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">260</span>
                <span className="market-volume">4.66</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">970</span>
                <span className="market-volume">2.07</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">1000</span>
                <span className="market-volume">1.39</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Jason Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>G F Bullock</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>5</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-6"
                    id="checkbox-runner-6"
                    value='{"mid":7737765680340,"sid":53146,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      7<br />
                      (7)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/53146.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>7. Boomer Shannon</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Travis Bullock</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Peter Bullock</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>6</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">18</span>
                <span className="market-volume">5.23</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">18.5</span>
                <span className="market-volume">2.45</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">19</span>
                <span className="market-volume">1.89</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">120</span>
                <span className="market-volume">3.63</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">140</span>
                <span className="market-volume">3.51</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">440</span>
                <span className="market-volume">1.63</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Travis Bullock</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Peter Bullock</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>6</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-7"
                    id="checkbox-runner-7"
                    value='{"mid":7737765680340,"sid":65557,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      8<br />
                      (8)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/65557.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>8. Ultimate Cookie</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Jett Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Josh Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>4</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">2.66</span>
                <span className="market-volume">3.14</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">2.68</span>
                <span className="market-volume">2.18</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">2.74</span>
                <span className="market-volume">6.09</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">6</span>
                <span className="market-volume">3.3</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">6.2</span>
                <span className="market-volume">1.89</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">6.8</span>
                <span className="market-volume">8.33</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Jett Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Josh Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>4</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-8"
                    id="checkbox-runner-8"
                    value='{"mid":7737765680340,"sid":658478,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      9<br />
                      (9)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/658478.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>9. Never Happy</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>Mitch Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Steve Turnbull</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">28</span>
                <span className="market-volume">1.42</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">32</span>
                <span className="market-volume">2.87</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">34</span>
                <span className="market-volume">3.19</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">300</span>
                <span className="market-volume">3.54</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">310</span>
                <span className="market-volume">2.45</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">990</span>
                <span className="market-volume">2.46</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>Mitch Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Steve Turnbull</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>3</span>
              </span>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox-runner-9"
                    id="checkbox-runner-9"
                    value='{"mid":7737765680340,"sid":627349,"tno":0}'
                  />
                  <label className="form-check-label">
                    <div>
                      10
                      <br />
                      (10)
                    </div>
                    <div>
                      <img src="https://sitethemedata.com/race_icons/7737765680340/627349.png" />
                    </div>
                    <div>
                      <span className="market-nation-name">
                        <span>10. Jets Reason</span>
                        <span className="d-md-none horse-detail-arrow ms-1">
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>
                      <div className="jockey-detail d-none d-md-flex">
                        <span className="jockey-detail-box">
                          <b>Jockey:</b>
                          <span>John OShea</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Trainer:</b>
                          <span>Veronica Fisher</span>
                        </span>
                        <span className="jockey-detail-box">
                          <b>Age:</b>
                          <span>4</span>
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="market-odd-box back2 d-none d-md-flex">
                <span className="market-odd">16</span>
                <span className="market-volume">3</span>
              </div>
              <div className="market-odd-box back1 d-none d-md-flex">
                <span className="market-odd">36</span>
                <span className="market-volume">5.4</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">70</span>
                <span className="market-volume">5.2</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">760</span>
                <span className="market-volume">2.49</span>
              </div>
              <div className="market-odd-box lay1 d-none d-md-flex">
                <span className="market-odd">980</span>
                <span className="market-volume">1.36</span>
              </div>
              <div className="market-odd-box lay2 d-none d-md-flex">
                <span className="market-odd">-</span>
              </div>
            </div>
            <div className="jockey-detail d-md-none collapse">
              <span className="jockey-detail-box">
                <b>Jockey:</b>
                <span>John OShea</span>
              </span>
              <span className="jockey-detail-box">
                <b>Trainer:</b>
                <span>Veronica Fisher</span>
              </span>
              <span className="jockey-detail-box">
                <b>Age:</b>
                <span>4</span>
              </span>
            </div>
          </div>
        </div>
        <div className="game-market market-4">
          <div className="market-title">
            <span>MATCH_BET</span>
          </div>
          <div className="market-header">
            <div className="market-nation-detail">
              <span className="market-nation-name">Max: 5K</span>
            </div>
            <div className="market-odd-box no-border d-none d-md-block"></div>
            <div className="market-odd-box no-border d-none d-md-block"></div>
            <div className="market-odd-box back">
              <b>Back</b>
            </div>
            <div className="market-odd-box lay">
              <b>Lay</b>
            </div>
            <div className="market-odd-box"></div>
            <div className="market-odd-box no-border"></div>
          </div>
          <div className="market-body" data-title="OPEN">
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <span className="market-nation-name">4. A True Love</span>
                <div className="market-nation-book"></div>
              </div>
              <div className="market-odd-box back2">
                <span className="market-odd">1.32</span>
                <span className="market-volume">32.2</span>
              </div>
              <div className="market-odd-box back1">
                <span className="market-odd">1.42</span>
                <span className="market-volume">43.41</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">1.43</span>
                <span className="market-volume">28.36</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">2.22</span>
                <span className="market-volume">5.16</span>
              </div>
              <div className="market-odd-box lay1">
                <span className="market-odd">2.4</span>
                <span className="market-volume">3.65</span>
              </div>
              <div className="market-odd-box lay2">
                <span className="market-odd">4.8</span>
                <span className="market-volume">5.55</span>
              </div>
            </div>
            <div className="market-row" data-title="ACTIVE">
              <div className="market-nation-detail">
                <span className="market-nation-name">5. Pyekakariki</span>
                <div className="market-nation-book"></div>
              </div>
              <div className="market-odd-box back2">
                <span className="market-odd">1.27</span>
                <span className="market-volume">20.96</span>
              </div>
              <div className="market-odd-box back1">
                <span className="market-odd">1.72</span>
                <span className="market-volume">5.1</span>
              </div>
              <div className="market-odd-box back">
                <span className="market-odd">1.82</span>
                <span className="market-volume">6.29</span>
              </div>
              <div className="market-odd-box lay">
                <span className="market-odd">3.35</span>
                <span className="market-volume">20.11</span>
              </div>
              <div className="market-odd-box lay1">
                <span className="market-odd">3.4</span>
                <span className="market-volume">10.25</span>
              </div>
              <div className="market-odd-box lay2">
                <span className="market-odd">4.2</span>
                <span className="market-volume">10.12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseGreyhound;
