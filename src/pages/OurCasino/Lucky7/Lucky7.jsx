import { useEffect, useState } from "react";
import { config } from "../../../utils/config";
import { useParams } from "react-router-dom";
import axios from "axios";
import one from "../../../static/front/img/virtual-casino/1.jpg";
import seven from '../../../static/front/img/cards/7.png'
import A from '../../../static/front/img/cards/A.png'
import two from '../../../static/front/img/cards/2.png'
import three from '../../../static/front/img/cards/3.png'
import four from '../../../static/front/img/cards/4.png'
import five from '../../../static/front/img/cards/5.png'
import six from '../../../static/front/img/cards/6.png'
import eight from '../../../static/front/img/cards/8.png'
import nine from '../../../static/front/img/cards/9.png'
import ten from '../../../static/front/img/cards/10.png'
import j from '../../../static/front/img/cards/J.png'
import q from '../../../static/front/img/cards/Q.png'
import k from '../../../static/front/img/cards/K.png'

const Lucky7 = () => {
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const interval = config?.result?.settings?.interval;
  const oddsApi = config?.result?.endpoint?.odds;
  const token = localStorage.getItem("token");
  const { eventId, eventTypeId } = useParams();
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  /* Get video */
  useEffect(() => {
    const getCasinoVideo = async () => {
      const res = await axios.post(
        getSingleCasinoApi,
        {
          eventId: eventId,
          eventTypeId: eventTypeId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data.success) {
        setUrl(data?.result?.url);
      }
    };
    getCasinoVideo();
  }, [eventId, eventTypeId, getSingleCasinoApi, token]);

  /* Get odds */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${oddsApi}/${eventTypeId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        setData(data.result);
      }
    };
    getGameDetails();
    const intervalId = setInterval(getGameDetails, interval);
    return () => clearInterval(intervalId);
  }, [token, oddsApi, eventTypeId, eventId, interval]);
  console.log(data);
  return (
    <>
      <div className="center-container">
        <div className="casino-page-container lucky7a">
          <div className="casino-header">
            <span className="casino-name">
              {data[0]?.eventName}
              <a className="ms-1">
                <small>Rules</small>
              </a>
            </span>
            <span className="casino-rid d-none d-xl-inline-block">
              <small>
                Round ID: <span>{data[0]?.roundId}</span>
              </small>
            </span>
          </div>
          <div className="casino-title-header-mobile d-xl-none">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <div className="nav-link active">Game</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Placed Bet (0)</div>
              </li>
            </ul>
            <div className="pe-2">
              <span className="casino-rid">
                Round ID: <span>5869789508981</span>
              </span>
            </div>
          </div>
          <div className="">
            <div className="casino-video">
              <div className="video-box-container">
                {/* Iframe video */}
                <div className="casino-video-box">
                  <iframe
                    allow="fullscreen;"
                    src={url}
                    style={{ widows: "100%", border: "0px" }}
                  ></iframe>
                </div>
              </div>
              <div className="casino-video-cards">
                <div>
                  <div className="flip-card-container">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        {/* <!-- card html start --> */}
                        {data[0]?.indexCard?.length === 0 ? (
                          <div className="flip-card-front">
                            <img src={one} />
                          </div>
                        ):(
                          <div className="flip-card-front">
                          <img src={one} />
                        </div>
                        )}

                     
                          <div className="flip-card-back">
                            <img src={`../../../static/front/img/cards/1.jpg`} />
                          </div>
                    

                        {/* <!-- card html end --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="clock flip-clock-wrapper">
                <ul className="flip play">
                  <li className="flip-clock-before">
                    <a href="#">
                      <div className="up">
                        <div className="shadow"></div>
                        <div className="inn">1</div>
                      </div>
                      <div className="down">
                        <div className="shadow"></div>
                        <div className="inn">1</div>
                      </div>
                    </a>
                  </li>
                  <li className="flip-clock-active">
                    <a href="#">
                      <div className="up">
                        <div className="shadow"></div>
                        <div className="inn">0</div>
                      </div>
                      <div className="down">
                        <div className="shadow"></div>
                        <div className="inn">0</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="flip play">
                  <li className="flip-clock-before">
                    <a href="#">
                      <div className="up">
                        <div className="shadow"></div>
                        <div className="inn">1</div>
                      </div>
                      <div className="down">
                        <div className="shadow"></div>
                        <div className="inn">1</div>
                      </div>
                    </a>
                  </li>
                  <li className="flip-clock-active">
                    <a href="#">
                      <div className="up">
                        <div className="shadow"></div>
                        <div className="inn">0</div>
                      </div>
                      <div className="down">
                        <div className="shadow"></div>
                        <div className="inn">0</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            {/* <!-- winner  market start --> */}

            <div className="casino-detail">
              <div className="casino-table">
                <div className="casino-table-full-box">
                  
                  <div className="lucky7low">
                    <div className="casino-odds text-center">{data[0]?.runners[0]?.back[0]?.price}</div>
                    <div className="casino-odds-box back casino-odds-box-theme">
                      {/* <!-- suspended-box --> */}
                      <span className="casino-odds">Low Card</span>
                    </div>
                    <div className="casino-nation-book text-center">
                      <span className={`${data[0]?.runners[0]?.back[0]?.size < 0 ?'text-danger':'text-success'}`}>{data[0]?.runners[0]?.back[0]?.size}</span>
                    </div>
                  </div>
                  <div className="lucky7">
                    <img src={seven} />
                  </div>

                  <div className="lucky7high">
                    <div className="casino-odds text-center">{data[0]?.runners[1]?.lay[0]?.price}
                    </div>
                    <div className="casino-odds-box back casino-odds-box-theme">
                      {/* <!-- suspended-box --> */}
                      <span className="casino-odds">High Card</span>
                    </div>
                    <div className="casino-nation-book text-center">
                    <span className={`${data[0]?.runners[1]?.lay[0]?.size < 0 ?'text-danger':'text-success'}`}>{data[0]?.runners[1]?.lay[0]?.size}</span>
                    </div>
                  </div>
                </div>
                {/* 
                      <!-- winner  market end -->

                      <!-- even odd  market start --> */}

                <div className="casino-table-box mt-3">
                  <div className="casino-table-left-box" >
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">{data[1]?.runners[0]?.back[0]?.price}</div>
                      <div className="casino-odds-box back casino-odds-box-theme">
                        {/* <!-- suspended-box --> */}
                        
                        <span className="casino-odds">Even</span>
                      </div>
                      <div className="casino-nation-book text-center"></div>
                    </div>
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">{data[1]?.runners[1]?.lay[0]?.price}</div>
                      <div className="casino-odds-box back casino-odds-box-theme">
                        {/* <!-- suspended-box --> */}
                        <span className="casino-odds">Odd</span>
                      </div>
                      <div className="casino-nation-book text-center"></div>
                    </div>
                  </div>

                  {/* <!-- even odd  market end --> */}

                  {/* <!-- color  market start --> */}
                  <div className="casino-table-right-box">
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">{data[2]?.runners[0]?.back[0]?.price}</div>
                      <div className="casino-odds-box back casino-odds-box-theme">
                        {/* <!-- suspended-box --> */}
                        <span className="casino-odds">
                          <span className="card-icon ms-1">
                            <span className="card-red"></span>
                          </span>
                          <span className="card-icon ms-1">
                            <span className="card-red"></span>
                          </span>
                        </span>
                      </div>
                      <div className="casino-nation-book text-center"></div>
                    </div>
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">{data[2]?.runners[1]?.lay[0]?.price}</div>
                      <div className="casino-odds-box back casino-odds-box-theme">
                        {/* <!-- suspended-box --> */}
                        <span className="casino-odds">
                          <span className="card-icon ms-1">
                            <span className="card-black"></span>
                          </span>
                          <span className="card-icon ms-1">
                            <span className="card-black"></span>
                          </span>
                        </span>
                      </div>
                      <div className="casino-nation-book text-center"></div>
                    </div>
                  </div>
                </div>

                {/* <!-- color  market end -->

                      <!-- range  market start --> */}

                <div className="casino-table-box mt-3">
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">{data[3]?.runners[0]?.back[0]?.price}</div>
                    <div className="card-odd-box-container">
                      {/* <!-- suspended-box --> */}
                      <div className="card-odd-box">
                        <div className="">
                          <img src={A} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={two} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={three} />
                        </div>
                      </div>
                    </div>
                    <div className="casino-nation-book text-center w-100"></div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">{data[3]?.runners[1]?.back[0]?.price}</div>
                    <div className="card-odd-box-container">
                      {/* <!-- suspended-box --> */}
                      <div className="card-odd-box">
                        <div className="">
                          <img src={four} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={five} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={six} />
                        </div>
                      </div>
                    </div>
                    <div className="casino-nation-book text-center w-100"></div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">{data[3]?.runners[2]?.back[0]?.price}</div>
                    <div className="card-odd-box-container">
                      {/* <!-- suspended-box --> */}
                      <div className="card-odd-box">
                        <div className="">
                          <img src={eight} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={nine} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={ten} />
                        </div>
                      </div>
                    </div>
                    <div className="casino-nation-book text-center w-100"></div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">{data[3]?.runners[3]?.back[0]?.price}</div>
                    <div className="card-odd-box-container">
                      {/* <!-- suspended-box --> */}
                      <div className="card-odd-box">
                        <div className="">
                          <img src={j} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={q} />
                        </div>
                      </div>
                      <div className="card-odd-box">
                        <div className="">
                          <img src={k} />
                        </div>
                      </div>
                    </div>
                    <div className="casino-nation-book text-center w-100"></div>
                  </div>
                </div>
                {/* 
                      <!-- range  market end -->

                      <!-- card  market start --> */}

                <div className="casino-table-full-box lucky7acards mt-3">
                  <div className="casino-odds w-100 text-center">12</div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={A} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={two} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={three} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={four} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={five} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={six} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={seven} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={eight} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={nine} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={ten} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={j} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={q} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div className="">
                      {/* <!-- suspended-box --> */}
                      <img src={k} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                </div>
              </div>

              {/* // <!-- card  market end --> */}

              <div className="casino-last-result-title">
                <span>Last Result</span>
                <span>
                  <a href="/casino-results/lucky7">View All</a>
                </span>
              </div>

              {/* <!-- 
                                        result-b for H
                                        result-a for L
                                        no class name for T --> */}

              <div className="casino-last-results">
                <span className="result result-b">H</span>
                <span className="result result-b">H</span>
                <span className="result result-b">H</span>
                <span className="result result-b">H</span>
                <span className="result result-a">L</span>
                <span className="result result-b">H</span>
                <span className="result">T</span>
                <span className="result result-a">L</span>
                <span className="result result-a">L</span>
                <span className="result result-b">H</span>
                <span className="result result-b">H</span>
                <span className="result result-b">H</span>
              </div>
            </div>
          </div>
          <div className="d-none">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Matched Bet</th>
                    <th className="text-end">Odds</th>
                    <th className="text-end">Stake</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar right-sidebar casino-right-sidebar">
        <div className="sidebar-box my-bet-container">
          <div className="sidebar-title">
            <h4>My Bet</h4>
          </div>
          <div className="my-bets">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Matched Bet</th>
                    <th className="text-end">Odds</th>
                    <th className="text-end">Stake</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lucky7;
