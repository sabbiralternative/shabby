import { Link, useParams } from "react-router-dom";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchOddsSection from "./MatchOddsSection";
import BookmarkerSection from "./BookmarkerSection";
import BookmarkerTwoSection from "./BookmarkerTwoSection";
import NormalSection from "./NormalSection";
import OverByOver from "./OverByOver";
import FancyOne from "./FancyOne";
import UseState from "../../hooks/UseState";
import { useQuery } from "@tanstack/react-query";

const GameDetails = () => {
  const { id, eventId } = useParams();
  const oddsApi = config?.result?.endpoint?.odds;
  const interval = config?.result?.settings?.interval;
  const accessTokenApi = config?.result?.endpoint?.accessToken;
  const exposerApi = config?.result?.endpoint?.exposure;
  const orderApi = config?.result?.endpoint?.order;
  const currentBetsApi = config?.result?.endpoint?.currentBets;
  const token = localStorage.getItem("token");
  const buttonValues = JSON.parse(localStorage.getItem("buttonValue"));
  const [data, setData] = useState([]);
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmarker, setBookmarker] = useState([]);
  const [bookmarker2, setBookmarker2] = useState([]);
  const [normal, setNormal] = useState([]);
  const [fancy1, setFancy1] = useState([]);
  const [overByOver, setOverByOver] = useState([]);
  const [showTv, setShowTv] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const [exposer, setExposer] = useState([]);
  const [showMobileTv, setShowMobileTv] = useState(false);
  const [showBets, setShowBets] = useState(false);
  const { buttonValue, SetButtonValue } = UseState();
  const { placeBetValue } = UseState();
  const [price, setPrice] = useState("");
  const [totalSize, setTotalSize] = useState("");
  const [myBets, setMyBets] = useState([]);
  const [profit, setProfit] = useState("");
  const [loader, setLoader] = useState(false);
  const [oddStake, setOddStake] = useState("");
  const [oddStakeLay, setOddStakeLay] = useState("");

  const oppositionName = placeBetValue?.oppositionName?.filter(
    (name) => name !== placeBetValue?.name
  );

  console.log(oppositionName);
  /* Set price */
  useEffect(() => {
    setPrice(placeBetValue?.price);
  }, [placeBetValue]);

  /* Profit */
  useEffect(() => {
    if (
      price &&
      totalSize &&
      placeBetValue?.back &&
      placeBetValue?.btype !== "FANCY"
    ) {
      const multiply = price * totalSize;
      setProfit(multiply - totalSize);
    }
  }, [price, totalSize, placeBetValue?.back, placeBetValue?.btype]);

  /* Get game details */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${oddsApi}/${id}/${eventId}`, {
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
  }, [token, oddsApi, id, eventId, interval]);

  /* Filtered all the game  */
  useEffect(() => {
    const filterMatch_odds = data.filter(
      (match_odd) => match_odd.btype === "MATCH_ODDS"
    );
    setMatch_odds(filterMatch_odds);

    const bookmarkerFilter = data.filter(
      (bookmarker) => bookmarker.btype === "BOOKMAKER"
    );
    setBookmarker(bookmarkerFilter);

    const filterBookmarker2 = data.filter(
      (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
    );
    setBookmarker2(filterBookmarker2);

    const normalFilter = data.filter(
      (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
    );
    setNormal(normalFilter);

    const fancy1Filter = data.filter(
      (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
    );
    setFancy1(fancy1Filter);

    const overByOverFilter = data.filter(
      (overByOver) =>
        overByOver.btype === "FANCY" &&
        overByOver.tabGroupName === "Over By Over"
    );
    setOverByOver(overByOverFilter);
  }, [data]);

  /* Get video */
  useEffect(() => {
    if (showTv || showMobileTv) {
      fetch(accessTokenApi, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          eventTypeId: id,
          eventId: eventId,
          type: "video",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setVideoUrl(data?.result);
        });
    }
  }, [eventId, id, showTv, token, accessTokenApi, showMobileTv]);

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

  /* Handle bets */
  const handleOrderBets = () => {
    setLoader(true);
    fetch(orderApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([
        {
          betDelay: placeBetValue?.betDelay,
          btype: placeBetValue?.btype,
          eventTypeId: placeBetValue?.eventTypeId,
          marketId: placeBetValue?.marketId,
          price: price ? price : placeBetValue?.price,
          selectionId: placeBetValue?.selectionId,
          side: placeBetValue?.side,
          totalSize: totalSize,
        },
      ]),
    })
      .then((res) => res.json())
      .then((data) => {
        refetchExposure();
        refetchCurrentBets();
        console.log(data);
        setLoader(false);
        setShowBets(false);
      });
  };

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
          }
        });
    },
  });

  /* Increase price bets */
  const handleIncreasePrice = () => {
    if (price == 1000 || placeBetValue?.isWeak === true) {
      return;
    } else if (price > 1.0 && price < 2) {
      setPrice((parseFloat(price) + 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) + 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) + 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) + 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) + 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) + 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) + 1);
    }
  };

  /* Decrease price bets */
  const handleDecreasePrice = () => {
    if (price < 1.02 || placeBetValue?.isWeak === true) {
      return;
    } else if (price < 2) {
      setPrice((parseFloat(price) - 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) - 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) - 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) - 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) - 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) - 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) - 1);
    }
  };

  useEffect(() => {
    if (placeBetValue?.back) {
      const multiply = price * totalSize;
      const total = multiply - totalSize;
      setOddStake(total);
      setOddStakeLay(-1 * totalSize);
    } else if (placeBetValue?.lay) {
      const total = -1 * (price * totalSize - totalSize);
      setOddStake(total);
      setOddStakeLay(totalSize);
    }
  }, [price, totalSize, placeBetValue]);

  return (
    <>
      <div className="center-container">
        <div className="detail-page-container">
          <div className="game-header">
            <span>{data[0]?.eventName}</span>
            <span className="float-right">{data[0]?.openDate}</span>
          </div>
          <ul className="nav nav-tabs d-xl-none menu-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab">
                Odds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                Matched Bet ({myBets?.length})
              </a>
            </li>

            {match_odds[0]?.hasVideo && (
              <li onClick={() => setShowTv(!showTv)} className="nav-item">
                <Link className="nav-link">
                  <i className="fas fa-tv"></i>
                </Link>
              </li>
            )}
          </ul>

          {showTv && (
            <div className="live-tv d-xl-none">
              <iframe
                src={videoUrl?.url}
                style={{
                  width: "100%",
                  border: "0px",
                }}
                referrerPolicy={videoUrl?.ref === false ? "no-referrer" : ""}
              ></iframe>
            </div>
          )}

          {match_odds[0]?.score?.length !== 0 && (
            <div className="scorecard">
              {match_odds[0]?.score?.map((scoreInfo, i) => {
                return (
                  <div key={i} className="row">
                    <div className="col-12 col-md-6">
                      <p className="team-1 row">
                        <span className="team-name col-3">
                          {scoreInfo?.team1Name}
                        </span>
                        <span className="score col-4 text-end">
                          {scoreInfo?.team1Score}
                        </span>
                        <span className="team-name col-5">
                          <span>{scoreInfo?.runRate} </span>
                          <span></span>
                        </span>
                      </p>
                      <p className="team-1 row mt-2">
                        <span className="team-name col-3">
                          {scoreInfo?.team2Name}
                        </span>
                        <span className="score col-4 text-end">
                          {scoreInfo?.team2Score}
                        </span>
                        <span className="team-name col-5"></span>
                      </p>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row">
                        <div className="col-12">
                          {scoreInfo.target !== null && (
                            <div className="text-xl-end">
                              <span>{scoreInfo?.target}</span>
                            </div>
                          )}

                          <div className="row">
                            <div className="col-12">
                              <p className="text-xl-end ball-by-ball mt-2">
                                {scoreInfo?.recent.map((score, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={`ball-runs ${
                                        score === "4" ? "four" : ""
                                      } ${score === "6" ? "six" : ""} ${
                                        score === "ww" ? "wicket" : ""
                                      }`}
                                    >
                                      {score}
                                    </span>
                                  );
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Match odds */}
          {match_odds && match_odds?.length > 0 && (
            <MatchOddsSection
              match_odds={match_odds}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              id={id}
              eventId={eventId}
            />
          )}

          {/* Bookmarker section  */}
          {bookmarker && bookmarker?.length > 0 && (
            <BookmarkerSection
              bookmarker={bookmarker}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
            />
          )}

          {/* Bookmarker 2 section  */}
          {bookmarker2 && bookmarker2?.length > 0 && (
            <BookmarkerTwoSection
              bookmarker2={bookmarker2}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
            />
          )}

          {/* Normal section */}
          {normal && normal?.length > 0 && (
            <NormalSection
              normal={normal}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
            />
          )}

          {/* Tie Match */}
          {/* <div className="game-market market-2 width30">
            <div className="market-title">
              <span>Tied Match</span>
            </div>
            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">
                  Min: 100&nbsp; Max: 1L
                </span>
              </div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
            </div>
            <div className="market-body" data-title="SUSPENDED">
              <div className="market-row suspended-row" data-title="SUSPENDED">
                <div className="market-nation-detail">
                  <span className="market-nation-name">YES</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">-</span>
                </div>
                <div className="market-odd-box lay">
                  <span className="market-odd">-</span>
                </div>
              </div>
              <div className="market-row" data-title="ACTIVE">
                <div className="market-nation-detail">
                  <span className="market-nation-name">NO</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">1</span>
                  <span className="market-volume">100000</span>
                </div>
                <div className="market-odd-box lay">
                  <span className="market-odd">1.5</span>
                  <span className="market-volume">100000</span>
                </div>
              </div>
            </div>
            <div className="market-row">
              <marquee className="market-remark">
                ICC Cricket World Cup 2023 Bets Started In Our Exchange
              </marquee>
            </div>
          </div> */}

          {/* Over by over */}
          {overByOver && overByOver.length > 0 && (
            <OverByOver
              overByOver={overByOver}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
            />
          )}

          {/* Ball by ball */}
          {/* <div className="game-market market-6">
            <div className="market-title">
              <span>Ball By Ball</span>
            </div>
            <div className="row row10">
              <div className="col-md-6">
                <div className="market-header">
                  <div className="market-nation-detail"></div>
                  <div className="market-odd-box lay">
                    <b>No</b>
                  </div>
                  <div className="market-odd-box back">
                    <b>Yes</b>
                  </div>
                  <div className="fancy-min-max-box"></div>
                </div>
              </div>
              <div className="col-md-6 d-none d-xl-block">
                <div className="market-header">
                  <div className="market-nation-detail"></div>
                  <div className="market-odd-box lay">
                    <b>No</b>
                  </div>
                  <div className="market-odd-box back">
                    <b>Yes</b>
                  </div>
                  <div className="fancy-min-max-box"></div>
                </div>
              </div>
            </div>
            <div className="market-body" data-title="OPEN">
              <div className="row row10">
                <div className="col-md-6">
                  <div className="fancy-market" data-title="">
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          3.1 ball run IND
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">23</span>
                        <span className="market-volume">250</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">23</span>
                        <span className="market-volume">150</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 100</span>
                          <span className="w-100 d-block">Max: 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="fancy-market suspended-row"
                    data-title="SUSPENDED"
                  >
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          3.2 ball run IND
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 100</span>
                          <span className="w-100 d-block">Max: 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="fancy-market suspended-row"
                    data-title="SUSPENDED"
                  >
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          3.3 ball run IND
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 100</span>
                          <span className="w-100 d-block">Max: 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="fancy-market suspended-row"
                    data-title="SUSPENDED"
                  >
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          3.4 ball run IND
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 100</span>
                          <span className="w-100 d-block">Max: 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="fancy-market suspended-row"
                    data-title="SUSPENDED"
                  >
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          3.5 ball run IND
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">-</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 100</span>
                          <span className="w-100 d-block">Max: 2L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Fancy1 section */}
          {fancy1 && fancy1.length > 0 && (
            <FancyOne
              fancy1={fancy1}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
            />
          )}

          {/* Meter section */}
          {/* <div className="game-market market-6">
            <div className="market-title">
              <span>meter</span>
            </div>
            <div className="row row10">
              <div className="col-md-6">
                <div className="market-header">
                  <div className="market-nation-detail"></div>
                  <div className="market-odd-box lay">
                    <b>No</b>
                  </div>
                  <div className="market-odd-box back">
                    <b>Yes</b>
                  </div>
                  <div className="fancy-min-max-box"></div>
                </div>
              </div>
              <div className="col-md-6 d-none d-xl-block">
                <div className="market-header">
                  <div className="market-nation-detail"></div>
                  <div className="market-odd-box lay">
                    <b>No</b>
                  </div>
                  <div className="market-odd-box back">
                    <b>Yes</b>
                  </div>
                  <div className="fancy-min-max-box"></div>
                </div>
              </div>
            </div>
            <div className="market-body" data-title="OPEN">
              <div className="row row10">
                <div className="col-md-6">
                  <div className="fancy-market" data-title="">
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          Fall of 1st wkt meter IND adv
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">70</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">73</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 10</span>
                          <span className="w-100 d-block">Max: 3K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fancy-market" data-title="">
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          S Gill meter adv
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">50</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">53</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 10</span>
                          <span className="w-100 d-block">Max: 5K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="fancy-market" data-title="">
                    <div className="market-row">
                      <div className="market-nation-detail">
                        <span className="market-nation-name">
                          R Sharma meter adv
                        </span>
                      </div>
                      <div className="market-odd-box lay">
                        <span className="market-odd">63</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="market-odd-box back">
                        <span className="market-odd">66</span>
                        <span className="market-volume">100</span>
                      </div>
                      <div className="fancy-min-max-box">
                        <div className="fancy-min-max">
                          <span className="w-100 d-block">Min: 10</span>
                          <span className="w-100 d-block">Max: 5K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Odd even section */}
          {/*
              <div className="game-market market-6">
              <div className="market-title">
                <span>{oddsEven[0]?.tabGroupName}</span>
              </div>
              <div className="market-body" data-title="OPEN">
                <div className="row row10">
                  <div className="col-md-6">
                    <div
                      className="fancy-market suspended-row"
                      data-title="SUSPENDED"
                    >
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 5 over even run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 10</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-market" data-title="">
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 10 over odd run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">1.98</span>
                          <span className="market-volume">500000</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 10</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
  
               
               
             
             
                
                
               
             
             
                  <div className="col-md-6">
                    <div className="fancy-market" data-title="">
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 25 over odd run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">1.98</span>
                          <span className="market-volume">500000</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 10</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-market" data-title="">
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 25 over even run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">1.98</span>
                          <span className="market-volume">500000</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 100</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-market" data-title="">
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 30 over odd run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">1.98</span>
                          <span className="market-volume">500000</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 10</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-market" data-title="">
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            2nd inn 30 over even run bhav(IND vs NZ)adv
                          </span>
                          <div className="market-nation-book"></div>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">-</span>
                        </div>
                        <div className="market-odd-box back">
                          <span className="market-odd">1.98</span>
                          <span className="market-volume">500000</span>
                        </div>
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">Min: 10</span>
                            <span className="w-100 d-block">Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         */}

          {/* <div className="game-market market-9">
            <div className="market-title">
              <span>2ND INN 10 OVER IND VS NZ</span>
            </div>
            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">Min: 100 Max: 25K</span>
              </div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
            <div className="market-body" data-title="OPEN">
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">0 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">1 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">2 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">3 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">4 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">5 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">6 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">7 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">8 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">9 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
            </div>
          </div>
          <div className="game-market market-9">
            <div className="market-title">
              <span>2ND INN 20 OVER IND VS NZ</span>
            </div>
            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">Min: 100 Max: 25K</span>
              </div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
            <div className="market-body" data-title="OPEN">
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">0 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">1 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">2 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">3 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">4 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">5 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">6 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">7 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">8 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
              <div className="market-row" data-title="">
                <div className="market-nation-detail">
                  <span className="market-nation-name">9 Number</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">9.5</span>
                  <span className="market-volume">100</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* TIED_MATCH */}
          {/* <div className="game-market market-4">
            <div className="market-title">
              <span>TIED_MATCH</span>
            </div>
            <div className="market-header">
              <div className="market-nation-detail">
                <span className="market-nation-name">Max: 1</span>
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
                  <span className="market-nation-name">Yes</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back2">
                  <span className="market-odd">90</span>
                  <span className="market-volume">46.39</span>
                </div>
                <div className="market-odd-box back1">
                  <span className="market-odd">95</span>
                  <span className="market-volume">52.63</span>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">100</span>
                  <span className="market-volume">277.37</span>
                </div>
                <div className="market-odd-box lay">
                  <span className="market-odd">140</span>
                  <span className="market-volume">32</span>
                </div>
                <div className="market-odd-box lay1">
                  <span className="market-odd">160</span>
                  <span className="market-volume">1</span>
                </div>
                <div className="market-odd-box lay2">
                  <span className="market-odd">180</span>
                  <span className="market-volume">3.56</span>
                </div>
              </div>
              <div className="market-row" data-title="ACTIVE">
                <div className="market-nation-detail">
                  <span className="market-nation-name">No</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back2">
                  <span className="market-odd">-</span>
                </div>
                <div className="market-odd-box back1">
                  <span className="market-odd">-</span>
                </div>
                <div className="market-odd-box back">
                  <span className="market-odd">-</span>
                </div>
                <div className="market-odd-box lay">
                  <span className="market-odd">1.01</span>
                  <span className="market-volume">14513.61</span>
                </div>
                <div className="market-odd-box lay1">
                  <span className="market-odd">1.02</span>
                  <span className="market-volume">71997.97</span>
                </div>
                <div className="market-odd-box lay2">
                  <span className="market-odd">1.03</span>
                  <span className="market-volume">13397.81</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Mobile place bet starts */}
        {showBets && window.innerWidth < 1200 && (
          <>
            <div className="fade modal-backdrop show"></div>
            <div
              role="dialog"
              aria-modal="true"
              className="fade modal show"
              tabIndex="-1"
              style={{
                paddingRight: "17px",
                display: "block",
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title h4">Place Bet</div>
                    <button
                      onClick={() => setShowBets(false)}
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      className={`place-bet-modal  ${
                        placeBetValue?.back ? "back" : ""
                      } ${placeBetValue?.lay ? "lay" : ""}`}
                    >
                      {loader && (
                        <div id="loader-section">
                          <div id="load-inner">
                            <i className="fa fa-spinner fa-spin"></i>
                          </div>
                        </div>
                      )}
                      <div className="row align-items-end">
                        <div className="col-6">
                          <b>{placeBetValue?.name}</b>
                        </div>
                        <div className="col-6">
                          <div className="float-end">
                            <button
                              onClick={handleDecreasePrice}
                              className="stakeactionminus btn"
                            >
                              <span className="fa fa-minus"></span>
                            </button>
                            <input
                              onChange={(e) => setPrice(e.target.value)}
                              type="text"
                              className="stakeinput"
                              disabled=""
                              value={price}
                            />
                            <button
                              onClick={handleIncreasePrice}
                              className="stakeactionminus btn"
                            >
                              <span className="fa fa-plus"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-4">
                          <input
                            onChange={(e) => setTotalSize(e.target.value)}
                            type="number"
                            className="stakeinput w-100"
                            value={totalSize}
                          />
                        </div>
                        <div onClick={handleOrderBets} className="col-4 d-grid">
                          <button className="btn btn-primary btn-block">
                            Submit
                          </button>
                        </div>
                        <div className="col-4 text-center pt-2">
                          <span>
                            {price &&
                            totalSize &&
                            placeBetValue?.back &&
                            placeBetValue?.btype !== "FANCY"
                              ? profit
                              : null}
                            {price &&
                            totalSize &&
                            placeBetValue?.lay &&
                            placeBetValue?.btype !== "FANCY"
                              ? totalSize
                              : null}
                            {price &&
                            totalSize &&
                            placeBetValue?.btype == "FANCY"
                              ? 0
                              : null}
                          </span>
                        </div>
                      </div>
                      <div className="place-bet-buttons mt-2">
                        {buttonValues?.map((buttonVal, i) => {
                          const handleButtonValue = (val) => {
                            setTotalSize(val.value);
                          };
                          return (
                            <button
                              key={i}
                              onClick={() => handleButtonValue(buttonVal)}
                              className="btn btn-place-bet"
                            >
                              {buttonVal?.label}
                            </button>
                          );
                        })}
                      </div>
                      <div
                        onClick={() => {
                          setShowBets(!showBets);
                          SetButtonValue(!buttonValue);
                        }}
                        className="mt-3 d-flex justify-content-between align-items-center"
                      >
                        <button className="btn btn-info">Edit</button>
                      </div>

                      <div className="row mt-2">
                        <div className="col-4">
                          <span>{placeBetValue?.name}</span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="text-danger"></span>
                        </div>
                        <div className="col-4 text-end">
                          <span
                            className={`${
                              oddStake > 0 ? "text-success" : "text-danger"
                            }`}
                          >
                            {oddStake !== 0 && oddStake}
                          </span>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-4">
                          <span>
                            {oppositionName?.length > 0
                              ? oppositionName[0]
                              : null}
                          </span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="text-center"></span>
                        </div>
                        <div className="col-4 text-end">
                          <span
                            className={`${
                              oddStakeLay > 0 ? "text-success" : "text-danger"
                            }`}
                          >
                            {placeBetValue?.back &&
                              totalSize != 0 &&
                              oddStakeLay}

                            {placeBetValue?.lay &&
                              totalSize != 0 &&
                              oddStakeLay}
                          </span>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-4">
                          <span>
                            {oppositionName?.length > 1
                              ? oppositionName[1]
                              : null}
                          </span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="text-center"></span>
                        </div>
                        <div className="col-4 text-end">
                          <span
                            className={`${
                              oddStakeLay > 0 ? "text-success" : "text-danger"
                            }`}
                          >
                            {placeBetValue?.back && oppositionName?.length > 1 &&
                              totalSize != 0 &&
                              oddStakeLay}

                            {placeBetValue?.lay &&
                            oppositionName?.length > 1 &&
                              totalSize != 0 &&
                              oddStakeLay}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Mobile place bet ends */}
      </div>

      <div className="sidebar right-sidebar">
        {match_odds[0]?.hasVideo && (
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => setShowMobileTv(!showMobileTv)}
            className="sidebar-box"
          >
            <div className="sidebar-title">
              <h4>Live Match</h4>
            </div>
            {showMobileTv && (
              <div className="live-tv">
                <iframe
                  src={videoUrl?.url}
                  referrerPolicy={videoUrl?.ref === false ? "no-referrer" : ""}
                  style={{
                    width: "100%",
                    border: "0px",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        )}

        {/* Place bet start */}
        {showBets && window.innerWidth > 1199 && (
          <div className="sidebar-box place-bet-container">
            <div className="sidebar-title">
              <h4>Place Bet</h4>
            </div>
            <div
              className={`place-bet-box position-relative ${
                placeBetValue?.back ? "back" : ""
              } ${placeBetValue?.lay ? "lay" : ""}`}
            >
              {loader && (
                <div id="loader-section">
                  <div id="load-inner">
                    <i className="fa fa-spinner fa-spin"></i>
                  </div>
                </div>
              )}
              <div className="place-bet-box-header">
                <div className="place-bet-for">(Bet for)</div>
                <div className="place-bet-odds">Odds</div>
                <div className="place-bet-stake">Stake</div>
                <div className="place-bet-profit">Profit</div>
              </div>
              <div className="place-bet-box-body">
                <div className="place-bet-for">
                  <span>{placeBetValue?.name}</span>
                </div>
                <div className="place-bet-odds">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    className="form-control"
                    disabled=""
                    value={price}
                  />
                  <div className="spinner-buttons input-group-btn btn-group-vertical">
                    <button
                      onClick={handleIncreasePrice}
                      className="btn-default"
                    >
                      <i className="fa fa-angle-up"></i>
                    </button>
                    <button
                      onClick={handleDecreasePrice}
                      className="btn-default"
                    >
                      <i className="fa fa-angle-down"></i>
                    </button>
                  </div>
                </div>
                <div className="place-bet-stake">
                  <input
                    onChange={(e) => setTotalSize(e.target.value)}
                    type="number"
                    className="form-control"
                    value={totalSize}
                  />
                </div>
                <div className="place-bet-profit">
                  {price &&
                  totalSize &&
                  placeBetValue?.back &&
                  placeBetValue?.btype !== "FANCY"
                    ? profit
                    : null}
                  {price &&
                  totalSize &&
                  placeBetValue?.lay &&
                  placeBetValue?.btype !== "FANCY"
                    ? totalSize
                    : null}
                  {price && totalSize && placeBetValue?.btype == "FANCY"
                    ? 0
                    : null}
                </div>
              </div>
              <div className="place-bet-buttons">
                {buttonValues?.map((buttonVal) => {
                  const handleButtonValue = (val) => {
                    setTotalSize(val.value);
                  };
                  return (
                    <>
                      <button
                        onClick={() => handleButtonValue(buttonVal)}
                        className="btn btn-place-bet"
                      >
                        {buttonVal?.label}
                      </button>
                    </>
                  );
                })}
              </div>
              <div className="place-bet-action-buttons">
                <div onClick={() => SetButtonValue(!buttonValue)}>
                  <button className="btn btn-info">Edit</button>
                </div>
                <div>
                  <button
                    onClick={() => setShowBets(!showBets)}
                    className="btn btn-danger me-1"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleOrderBets}
                    className="btn btn-success"
                    disabled=""
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Place bet end */}
        <div className="sidebar-box my-bet-container">
          <div className="sidebar-title">
            <h4>My Bet</h4>
          </div>
          <div className="my-bets">
            <div className="table-responsive w-100">
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
                          className={`${betType === "Lay" ? "lay" : "back"}`}
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

export default GameDetails;
