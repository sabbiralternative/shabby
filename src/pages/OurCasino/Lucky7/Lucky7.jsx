import { useEffect, useState } from "react";
import { config } from "../../../utils/config";
import { useParams } from "react-router-dom";
import axios from "axios";
import one from "../../../static/front/img/virtual-casino/1.jpg";
import seven from "../../../static/front/img/cards/7.png";
import A from "../../../static/front/img/cards/A.png";
import two from "../../../static/front/img/cards/2.png";
import three from "../../../static/front/img/cards/3.png";
import four from "../../../static/front/img/cards/4.png";
import five from "../../../static/front/img/cards/5.png";
import six from "../../../static/front/img/cards/6.png";
import eight from "../../../static/front/img/cards/8.png";
import nine from "../../../static/front/img/cards/9.png";
import ten from "../../../static/front/img/cards/10.png";
import j from "../../../static/front/img/cards/J.png";
import q from "../../../static/front/img/cards/Q.png";
import k from "../../../static/front/img/cards/K.png";
import UseState from "../../../hooks/UseState";
import PlaceBets from "../../../components/PlaceBets/PlaceBets.jsx";
import { useQuery } from "@tanstack/react-query";
import PlaceBetModal from "../../../components/PlaceBets/PlaceBetModal.jsx";

const Lucky7 = () => {
  const getSingleCasinoApi = config?.result?.endpoint?.accessToken;
  const interval = config?.result?.settings?.interval;
  const oddsApi = config?.result?.endpoint?.odds;
  const token = localStorage.getItem("token");
  const { eventId, eventTypeId } = useParams();
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [showBets, setShowBets] = useState(false);
  const { setPlaceBetValue, placeBetValue } = UseState();
  const [exposer, setExposer] = useState([]);
  const [myBets, setMyBets] = useState([]);
  const exposerApi = config?.result?.endpoint?.exposure;
  const currentBetsApi = config?.result?.endpoint?.currentBets;
  const [lowExposure, setLowExposure] = useState([]);
  const [highExposure, setHighExposure] = useState([]);
  const [evenExposure, setEvenExposure] = useState([]);
  const [oddExposure, setOddExposure] = useState([]);
  const [redExposure, setRedExposure] = useState([]);
  const [blackExposure, setBlackExposure] = useState([]);
  const [a23Exposure, setA23Exposure] = useState([]);
  const [four56Exposure, setFour56Exposure] = useState([]);
  const [eight910Exposure, setEight910Exposure] = useState([]);
  const [jqkExposure, setJqkExposure] = useState([]);


  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  useEffect(() => {
    const low = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[0]?.id
    );
    setLowExposure(low);
    const high = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[0]?.runners[1]?.id
    );
    setHighExposure(high)
    const even = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[1]?.runners[0]?.id
    );
    setEvenExposure(even)
    const odd = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[1]?.runners[1]?.id
    );
    setOddExposure(odd)
    const red = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[2]?.runners[0]?.id
    );
    setRedExposure(red)
    const black = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[2]?.runners[1]?.id
    );
    setBlackExposure(black)
    const a23 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[0]?.id
    );
    setA23Exposure(a23)
    const four56 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[1]?.id
    );
    setFour56Exposure(four56)
    const eight910 = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[2]?.id
    );
    setEight910Exposure(eight910)
    const jqk = pnlBySelection?.filter(
      (pnl) => pnl?.RunnerId == data[3]?.runners[3]?.id
    );
   setJqkExposure(jqk)
  
  }, [data]);


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

  /* Get exposure data */
  const { refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    queryFn: async () => {
      const res = await axios.get(`${exposerApi}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        setExposer(data.result);
      }
    },
  });

  /* Fetch Current Bets */
  const { refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: () => {
      fetch(`${currentBetsApi}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMyBets(data?.result);
            console.log(data);
          }
        });
    },
  });

  return (
    <>
      <div className="center-container">
      {showBets && window.innerWidth < 1200 && (
        <PlaceBetModal placeBetValue={placeBetValue} refetchCurrentBets={refetchCurrentBets} refetchExposure={refetchExposure} setShowBets={setShowBets} showBets={showBets}/>
      )}
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
                <div className="nav-link">Placed Bet ({myBets?.length})</div>
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
                        ) : (
                          <div className="flip-card-front">
                            <img
                              src={`/src/static/front/img/cards/${data[0]?.indexCard}.jpg`}
                              alt={`Card`}
                            />
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
                    <div className="casino-odds text-center">
                      {data[0]?.runners[0]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[0]?.runners[0]?.back[0]?.price,
                          side: 0,
                          selectionId: data[0]?.runners[0]?.id,
                          btype: data[0]?.btype,
                          eventTypeId: data[0]?.eventTypeId,
                          betDelay: data[0]?.betDelay,
                          marketId: data[0]?.id,
                          back: true,
                          name: data[0]?.runners[0]?.name,
                          isWeak: data[0]?.isWeak,
                        });
                      }}
                      className={`${
                        data[0]?.status === "OPEN" &&
                        data[0]?.runners[0]?.status === "ACTIVE"
                          ? "casino-odds-box back casino-odds-box-theme"
                          : "casino-odds-box back casino-odds-box-theme suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <span className="casino-odds">Low Card</span>
                    </div>
                    <div className="casino-nation-book text-center">
                      <span
                        className={`${ lowExposure && lowExposure[0]?.pnl
                          < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                       
                    {lowExposure ? lowExposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                  <div className="lucky7">
                    <img src={seven} />
                  </div>

                  <div className="lucky7high">
                    <div className="casino-odds text-center">
                      {data[0]?.runners[1]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[0]?.runners[1]?.back[0]?.price,
                          side: 0,
                          selectionId: data[0]?.runners[1]?.id,
                          btype: data[0]?.btype,
                          eventTypeId: data[0]?.eventTypeId,
                          betDelay: data[0]?.betDelay,
                          marketId: data[0]?.id,
                          back: true,
                          name: data[0]?.runners[1]?.name,
                          isWeak: data[0]?.isWeak,
                        });
                      }}
                      className={`${
                        data[0]?.status === "OPEN" &&
                        data[0]?.runners[1]?.status === "ACTIVE"
                          ? "casino-odds-box back casino-odds-box-theme"
                          : "casino-odds-box back casino-odds-box-theme suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <span className="casino-odds">High Card</span>
                    </div>
                    <div className="casino-nation-book text-center">
                      <span
                        className={`${
                          lowExposure && highExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         {highExposure ? highExposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                </div>
                {/* 
                      <!-- winner  market end -->

                      <!-- even odd  market start --> */}

                <div className="casino-table-box mt-3">
                  <div className="casino-table-left-box">
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">
                        {data[1]?.runners[0]?.back[0]?.price}
                      </div>
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: data[1]?.runners[0]?.back[0]?.price,
                            side: 0,
                            selectionId: data[1]?.runners[0]?.id,
                            btype: data[1]?.btype,
                            eventTypeId: data[1]?.eventTypeId,
                            betDelay: data[1]?.betDelay,
                            marketId: data[1]?.id,
                            back: true,
                            name: data[1]?.runners[0]?.name,
                            isWeak: data[1]?.isWeak,
                          });
                        }}
                        className={`${
                          data[1]?.status === "OPEN" &&
                          data[1]?.runners[0]?.status === "ACTIVE"
                            ? "casino-odds-box back casino-odds-box-theme"
                            : "casino-odds-box back casino-odds-box-theme suspended-box"
                        }`}
                      >
                        {/* <!-- suspended-box --> */}

                        <span className="casino-odds">Even</span>
                      </div>
                      <div className="casino-nation-book text-center">
                      <span
                        className={`${
                          evenExposure && evenExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         {evenExposure ? evenExposure[0]?.pnl:null}
                      </span>
                    </div>
                    </div>
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">
                        {data[1]?.runners[1]?.back[0]?.price}
                      </div>
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: data[1]?.runners[1]?.back[0]?.price,
                            side: 0,
                            selectionId: data[1]?.runners[1]?.id,
                            btype: data[1]?.btype,
                            eventTypeId: data[1]?.eventTypeId,
                            betDelay: data[1]?.betDelay,
                            marketId: data[1]?.id,
                            back: true,
                            name: data[1]?.runners[1]?.name,
                            isWeak: data[1]?.isWeak,
                          });
                        }}
                        className={`${
                          data[1]?.status === "OPEN" &&
                          data[1]?.runners[1]?.status === "ACTIVE"
                            ? "casino-odds-box back casino-odds-box-theme"
                            : "casino-odds-box back casino-odds-box-theme suspended-box"
                        }`}
                      >
                        {/* <!-- suspended-box --> */}
                        <span className="casino-odds">Odd</span>
                      </div>
                      <div className="casino-nation-book text-center">
                      <span
                        className={`${
                          oddExposure && oddExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         {oddExposure ? oddExposure[0]?.pnl:null}
                      </span>
                    </div>
                    </div>
                  </div>

                  {/* <!-- even odd  market end --> */}

                  {/* <!-- color  market start --> */}
                  <div className="casino-table-right-box">
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">
                        {data[2]?.runners[0]?.back[0]?.price}
                      </div>
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: data[2]?.runners[0]?.back[0]?.price,
                            side: 0,
                            selectionId: data[2]?.runners[0]?.id,
                            btype: data[2]?.btype,
                            eventTypeId: data[2]?.eventTypeId,
                            betDelay: data[2]?.betDelay,
                            marketId: data[2]?.id,
                            back: true,
                            name: data[2]?.runners[0]?.name,
                            isWeak: data[2]?.isWeak,
                          });
                        }}
                        className={`${
                          data[2]?.status === "OPEN" &&
                          data[2]?.runners[0]?.status === "ACTIVE"
                            ? "casino-odds-box back casino-odds-box-theme"
                            : "casino-odds-box back casino-odds-box-theme suspended-box"
                        }`}
                      >
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
                      <div className="casino-nation-book text-center">
                      <span
                        className={`${
                          redExposure && redExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         {redExposure ? redExposure[0]?.pnl:null}
                      </span>
                    </div>
                    </div>
                    <div className="lucky7odds">
                      <div className="casino-odds text-center">
                        {data[2]?.runners[1]?.back[0]?.price}
                      </div>
                      <div
                        onClick={() => {
                          setShowBets(true);
                          setPlaceBetValue({});
                          setPlaceBetValue({
                            price: data[2]?.runners[1]?.back[0]?.price,
                            side: 0,
                            selectionId: data[2]?.runners[1]?.id,
                            btype: data[2]?.btype,
                            eventTypeId: data[2]?.eventTypeId,
                            betDelay: data[2]?.betDelay,
                            marketId: data[2]?.id,
                            back: true,
                            name: data[2]?.runners[1]?.name,
                            isWeak: data[2]?.isWeak,
                          });
                        }}
                        className={`${
                          data[2]?.status === "OPEN" &&
                          data[2]?.runners[1]?.status === "ACTIVE"
                            ? "casino-odds-box back casino-odds-box-theme"
                            : "casino-odds-box back casino-odds-box-theme suspended-box"
                        }`}
                      >
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
                      <div className="casino-nation-book text-center">
                      <span
                        className={`${
                          blackExposure && blackExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         {blackExposure ? blackExposure[0]?.pnl:null}
                      </span>
                    </div>
                    </div>
                  </div>
                </div>

                {/* <!-- color  market end -->

                      <!-- range  market start --> */}

                <div className="casino-table-box mt-3">
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">
                      {data[3]?.runners[0]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[3]?.runners[0]?.back[0]?.price,
                          side: 0,
                          selectionId: data[3]?.runners[0]?.id,
                          btype: data[3]?.btype,
                          eventTypeId: data[3]?.eventTypeId,
                          betDelay: data[3]?.betDelay,
                          marketId: data[3]?.id,
                          back: true,
                          name: data[3]?.runners[0]?.name,
                          isWeak: data[3]?.isWeak,
                        });
                      }}
                      className={`${
                        data[3]?.status === "OPEN" &&
                        data[3]?.runners[0]?.status === "ACTIVE"
                          ? "card-odd-box-container"
                          : "card-odd-box-container suspended-box"
                      }`}
                    >
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
                    <div className="casino-nation-book text-center  w-100">
                      <span
                        className={`${
                          a23Exposure && a23Exposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         { a23Exposure ? a23Exposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">
                      {data[3]?.runners[1]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[3]?.runners[1]?.back[0]?.price,
                          side: 0,
                          selectionId: data[3]?.runners[1]?.id,
                          btype: data[3]?.btype,
                          eventTypeId: data[3]?.eventTypeId,
                          betDelay: data[3]?.betDelay,
                          marketId: data[3]?.id,
                          back: true,
                          name: data[3]?.runners[1]?.name,
                          isWeak: data[3]?.isWeak,
                        });
                      }}
                      className={`${
                        data[3]?.status === "OPEN" &&
                        data[3]?.runners[1]?.status === "ACTIVE"
                          ? "card-odd-box-container"
                          : "card-odd-box-container suspended-box"
                      }`}
                    >
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
                    <div className="casino-nation-book text-center  w-100">
                      <span
                        className={`${
                          four56Exposure && four56Exposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         { four56Exposure ? four56Exposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">
                      {data[3]?.runners[2]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[3]?.runners[2]?.back[0]?.price,
                          side: 0,
                          selectionId: data[3]?.runners[2]?.id,
                          btype: data[3]?.btype,
                          eventTypeId: data[3]?.eventTypeId,
                          betDelay: data[3]?.betDelay,
                          marketId: data[3]?.id,
                          back: true,
                          name: data[3]?.runners[2]?.name,
                          isWeak: data[3]?.isWeak,
                        });
                      }}
                      className={`${
                        data[3]?.status === "OPEN" &&
                        data[3]?.runners[2]?.status === "ACTIVE"
                          ? "card-odd-box-container"
                          : "card-odd-box-container suspended-box"
                      }`}
                    >
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
                    <div className="casino-nation-book text-center  w-100">
                      <span
                        className={`${
                          eight910Exposure && eight910Exposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         { eight910Exposure ? eight910Exposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                  <div className="lucky7cards">
                    <div className="casino-odds w-100 text-center">
                      {data[3]?.runners[3]?.back[0]?.price}
                    </div>
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[3]?.runners[3]?.back[0]?.price,
                          side: 0,
                          selectionId: data[3]?.runners[3]?.id,
                          btype: data[3]?.btype,
                          eventTypeId: data[3]?.eventTypeId,
                          betDelay: data[3]?.betDelay,
                          marketId: data[3]?.id,
                          back: true,
                          name: data[3]?.runners[3]?.name,
                          isWeak: data[3]?.isWeak,
                        });
                      }}
                      className={`${
                        data[3]?.status === "OPEN" &&
                        data[3]?.runners[3]?.status === "ACTIVE"
                          ? "card-odd-box-container"
                          : "card-odd-box-container suspended-box"
                      }`}
                    >
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
                    <div className="casino-nation-book text-center  w-100">
                      <span
                        className={`${
                         jqkExposure && jqkExposure[0]?.pnl < 0
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                         { jqkExposure ? jqkExposure[0]?.pnl:null}
                      </span>
                    </div>
                  </div>
                </div>
                {/* 
                      <!-- range  market end -->

                      <!-- card  market start --> */}

                <div className="casino-table-full-box lucky7acards mt-3">
                  <div className="casino-odds w-100 text-center">
                    {data[4]?.runners[0]?.back[0]?.price}
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[0]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[0]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[0]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[0]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={A} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[1]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[1]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[1]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[1]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={two} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[2]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[2]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[2]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[2]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={three} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[3]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[3]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[3]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[3]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={four} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[4]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[4]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[4]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[4]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={five} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[5]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[5]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[5]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[5]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={six} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[6]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[6]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[6]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[6]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={seven} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[7]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[7]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[7]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[7]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={eight} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[8]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[8]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[8]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[8]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={nine} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[9]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[9]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[9]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[9]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={ten} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[10]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[10]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[10]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[10]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={j} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[11]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[11]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[11]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[11]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
                      {/* <!-- suspended-box --> */}
                      <img src={q} />
                    </div>
                    <div className="casino-nation-book"></div>
                  </div>
                  <div className="card-odd-box">
                    <div
                      onClick={() => {
                        setShowBets(true);
                        setPlaceBetValue({});
                        setPlaceBetValue({
                          price: data[4]?.runners[12]?.back[0]?.price,
                          side: 0,
                          selectionId: data[4]?.runners[12]?.id,
                          btype: data[4]?.btype,
                          eventTypeId: data[4]?.eventTypeId,
                          betDelay: data[4]?.betDelay,
                          marketId: data[4]?.id,
                          back: true,
                          name: data[4]?.runners[12]?.name,
                          isWeak: data[4]?.isWeak,
                        });
                      }}
                      className={`${
                        data[4]?.status === "OPEN" &&
                        data[4]?.runners[12]?.status === "ACTIVE"
                          ? ""
                          : "suspended-box"
                      }`}
                    >
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
        {/* Place bet start */}
        {showBets && window.innerWidth > 1199 && (
          <PlaceBets
            placeBetValue={placeBetValue}
            showBets={showBets}
            setShowBets={setShowBets}
            refetchCurrentBets={refetchCurrentBets}
            refetchExposure={refetchExposure}
          />
        )}
        {/* Place bet end */}
        <div className="sidebar-box my-bet-container">
          <div className="sidebar-title">
            <h4>My Bet</h4>
          </div>

          <div className="my-bets">
            <div className="table-responsive ">
              <table className="table">
                <thead>
                  <tr>
                    <th>Matched Bet</th>
                    <th className="text-end">Odds</th>
                    <th className="text-end">Stake</th>
                  </tr>
                </thead>

                {myBets.length > 0 && Array.isArray(myBets) && (
                  <tbody>
                    {myBets?.map(({ nation, userRate, amount, betType }, i) => {
                      return (
                        <tr
                          key={i}
                          className={`${betType === "Lay" ? "lay" : "back "}`}
                        >
                          <td>{nation}</td>
                          <td className="text-end">{userRate}</td>
                          <td className="text-end">{amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lucky7;
