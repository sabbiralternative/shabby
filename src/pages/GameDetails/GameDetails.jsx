import { useParams } from "react-router-dom";
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
import Notification from "../../components/Notification/Notification";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseBalance from "../../hooks/UseBalance";
import MobilePlaceBet from "./MobilePlaceBet";
import DesktopPlaceBet from "./DesktopPlaceBet";
import { API, settings } from "../../utils";

const GameDetails = () => {
  const { id, eventId } = useParams();

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
  const [showMobileTv, setShowMobileTv] = useState(false);
  const [showBets, setShowBets] = useState(false);
  const { buttonValue, SetButtonValue } = UseState();
  const { placeBetValue } = UseState();
  const [price, setPrice] = useState("");
  const [totalSize, setTotalSize] = useState("");
  const [profit, setProfit] = useState("");
  const [loader, setLoader] = useState(false);
  const [oddStake, setOddStake] = useState("");
  const [oddStakeLay1, setOddStakeLay1] = useState("");
  const [oddStakeLay2, setOddStakeLay2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tabs, setTabs] = useState("odds");
  const [, refetchBalance] = UseBalance();
  const [booksValue, setBooksValue] = useState([]);
  const [isSticky, setSticky] = useState(false);

  /* Get casino thumbnail for home page */

  useEffect(() => {
    if (!settings.balanceApiLoop) {
      refetchBalance();
    }
  }, [refetchBalance]);

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
      placeBetValue?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * totalSize;
      setProfit(formatNumber(multiply - totalSize));
    } else if (
      price &&
      totalSize &&
      placeBetValue?.back &&
      (placeBetValue?.btype === "BOOKMAKER" ||
        placeBetValue?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / totalSize));
    }
  }, [price, totalSize, profit, placeBetValue, setProfit]);

  /* Get game details */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${API.odds}/${id}/${eventId}`);
      const data = res.data;
      if (data.success) {
        if (data?.result) {
          setData(data.result);
        }
      }
    };
    getGameDetails();
    /* Refetch after some millisecond */
    const intervalId = setInterval(getGameDetails, settings.interval);
    return () => clearInterval(intervalId);
  }, [token, id, eventId]);

  /* Filtered all the game  */
  useEffect(() => {
    const filterMatch_odds = data?.filter(
      (match_odd) => match_odd.btype === "MATCH_ODDS"
    );
    setMatch_odds(filterMatch_odds);

    const bookmarkerFilter = data?.filter(
      (bookmarker) => bookmarker.btype === "BOOKMAKER"
    );
    setBookmarker(bookmarkerFilter);

    const filterBookmarker2 = data?.filter(
      (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
    );
    setBookmarker2(filterBookmarker2);

    const normalFilter = data?.filter(
      (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
    );
    setNormal(normalFilter);

    const fancy1Filter = data?.filter(
      (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
    );
    setFancy1(fancy1Filter);

    const overByOverFilter = data?.filter(
      (overByOver) =>
        overByOver.btype === "FANCY" &&
        overByOver.tabGroupName === "Over By Over"
    );
    setOverByOver(overByOverFilter);
  }, [data]);

  /* Get video */
  useEffect(() => {
    const getVideo = () => {
      /* random token */
      const generatedToken = UseTokenGenerator();
      /* Encrypt post data */
      const encryptedVideoData = UseEncryptData({
        eventTypeId: id,
        eventId: eventId,
        type: "video",
        token: generatedToken,
      });
      if (showTv || showMobileTv) {
        fetch(API.accessToken, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(encryptedVideoData),
        })
          .then((res) => res.json())
          .then((data) => {
            setVideoUrl(data?.result);
          });
      }
    };
    getVideo();
  }, [eventId, id, showTv, token, showMobileTv]);

  /* Get exposure data */
  const { data: exposer = [], refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    queryFn: async () => {
      /* Random token */
      const generatedToken = UseTokenGenerator();
      /* Encrypt post data */
      const encryptedData = UseEncryptData(generatedToken);
      const res = await axios.post(
        `${API.exposure}/${eventId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
  });

  /* Handle order bets */
  const handleOrderBets = () => {
    /* Random token */
    const generatedToken = UseTokenGenerator();
    /* Encrypt post data */
    const encryptedData = UseEncryptData([
      {
        betDelay: placeBetValue?.betDelay,
        btype: placeBetValue?.btype,
        eventTypeId: placeBetValue?.eventTypeId,
        marketId: placeBetValue?.marketId,
        price: price ? price : placeBetValue?.price,
        selectionId: placeBetValue?.selectionId,
        side: placeBetValue?.side,
        totalSize: totalSize,
        token: generatedToken,
        maxLiabilityPerMarket: placeBetValue?.maxLiabilityPerMarket,
        isBettable: placeBetValue?.isBettable,
        maxLiabilityPerBet: placeBetValue?.maxLiabilityPerBet,
      },
    ]);
    setLoader(true);
    fetch(API.order, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          refetchExposure();
          refetchCurrentBets();
          refetchBalance();
          setLoader(false);
          setShowBets(false);
          setSuccessMessage("Bet Place Successfully !");
        } else {
          setErrorMessage(data?.error?.status[0]?.description);
          setLoader(false);
          setShowBets(false);
          refetchExposure();
          refetchBalance();
          refetchCurrentBets();
        }
      });
  };

  /* Fetch Current Bets */
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: async () => {
      try {
        /* Random token */
        const generatedToken = UseTokenGenerator();
        /* Encrypt post data */
        const encryptedData = UseEncryptData(generatedToken);
        const response = await fetch(`${API.currentBets}/${eventId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(encryptedData),
        });

        const data = await response.json();

        if (data.success) {
          return data.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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

  /* Place bet calculate */
  const pnl1 =
    placeBetValue?.pnl && placeBetValue?.pnl[0] ? placeBetValue?.pnl[0] : 0;
  const pnl2 =
    placeBetValue?.pnl && placeBetValue?.pnl[1] ? placeBetValue?.pnl[1] : 0;
  const pnl3 =
    placeBetValue?.pnl && placeBetValue?.pnl[2] ? placeBetValue?.pnl[2] : 0;
  const selectionId = placeBetValue?.selectionId?.toString();

  useEffect(() => {
    if (
      placeBetValue?.btype === "MATCH_ODDS" ||
      placeBetValue?.btype === "BOOKMAKER"
    ) {
      if (placeBetValue?.back) {
        let total;

        if (placeBetValue?.btype === "MATCH_ODDS") {
          total = price * totalSize - totalSize;
        }
        if (placeBetValue?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * totalSize - totalSize;
        }

        if (selectionId && selectionId.includes(".1")) {
          setOddStake(formatNumber(total + pnl1));
          setOddStakeLay1(formatNumber(pnl2 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl3 + -1 * totalSize));
          setBooksValue([
            { odd: formatNumber(total + pnl1), id: placeBetValue?.runnerId[0] },
            {
              odd: formatNumber(pnl2 + -1 * totalSize),
              id: placeBetValue?.runnerId[1],
            },
            {
              odd: formatNumber(pnl3 + -1 * totalSize),
              id: placeBetValue?.runnerId[2],
            },
          ]);
        } else if (selectionId && selectionId.includes(".2")) {
          setOddStake(formatNumber(total + pnl2));
          setOddStakeLay1(formatNumber(pnl3 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl2 + -1 * totalSize));
          setBooksValue([
            {
              odd: formatNumber(pnl2 + -1 * totalSize),
              id: placeBetValue?.runnerId[2],
            },
            { odd: formatNumber(total + pnl2), id: placeBetValue?.runnerId[1] },
            {
              odd: formatNumber(pnl3 + -1 * totalSize),
              id: placeBetValue?.runnerId[0],
            },
          ]);
        } else {
          setOddStake(formatNumber(total + pnl3));
          setOddStakeLay1(formatNumber(pnl1 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl2 + -1 * totalSize));
          setBooksValue([
            {
              odd: formatNumber(pnl1 + -1 * totalSize),
              id: placeBetValue?.runnerId[0],
            },
            {
              odd: formatNumber(pnl2 + -1 * totalSize),
              id: placeBetValue?.runnerId[1],
            },
            { odd: formatNumber(total + pnl3), id: placeBetValue?.runnerId[2] },
          ]);
        }
      } else if (placeBetValue?.lay) {
        let total;
        if (placeBetValue?.btype === "MATCH_ODDS") {
          total = -1 * (price * totalSize - totalSize);
        }
        if (placeBetValue?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * totalSize - totalSize);
        }

        if (selectionId && selectionId.includes(".1")) {
          setOddStake(formatNumber(total + pnl1));
          setOddStakeLay1(formatNumber(1 * pnl2 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl3 + 1 * totalSize));
          setBooksValue([
            { odd: formatNumber(total + pnl1), id: placeBetValue?.runnerId[0] },
            {
              odd: formatNumber(formatNumber(1 * pnl2 + 1 * totalSize)),
              id: placeBetValue?.runnerId[1],
            },
            {
              odd: formatNumber(formatNumber(1 * pnl3 + 1 * totalSize)),
              id: placeBetValue?.runnerId[2],
            },
          ]);
        } else if (selectionId && selectionId.includes(".2")) {
          setOddStake(formatNumber(total + pnl2));
          setOddStakeLay1(formatNumber(1 * pnl3 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl1 + 1 * totalSize));
          setBooksValue([
            {
              odd: formatNumber(formatNumber(1 * pnl1 + 1 * totalSize)),
              id: placeBetValue?.runnerId[2],
            },
            { odd: formatNumber(total + pnl2), id: placeBetValue?.runnerId[1] },
            {
              odd: formatNumber(formatNumber(1 * pnl3 + 1 * totalSize)),
              id: placeBetValue?.runnerId[0],
            },
          ]);
        } else {
          setOddStake(formatNumber(total + pnl3));
          setOddStakeLay1(formatNumber(1 * pnl1 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl2 + 1 * totalSize));
          setBooksValue([
            {
              odd: formatNumber(formatNumber(1 * pnl1 + 1 * totalSize)),
              id: placeBetValue?.runnerId[0],
            },
            {
              odd: formatNumber(formatNumber(1 * pnl2 + 1 * totalSize)),
              id: placeBetValue?.runnerId[1],
            },
            { odd: formatNumber(total + pnl3), id: placeBetValue?.runnerId[2] },
          ]);
        }
      }
    }
  }, [
    price,
    totalSize,
    placeBetValue,
    pnl1,
    pnl2,
    pnl3,
    selectionId,
    oddStake,
  ]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    return hasDecimal ? value.toFixed(2) : value;
  };

  /* Position sticky for bet section */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldStick = scrollY > 115;

      setSticky(shouldStick);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="center-container">
        {errorMessage && (
          <Notification
            message={errorMessage}
            success={false}
            setMessage={setErrorMessage}
          />
        )}
        {successMessage && (
          <Notification
            message={successMessage}
            success={true}
            setMessage={setSuccessMessage}
          />
        )}
        <div className="detail-page-container">
          <div className="game-header">
            <span>{data?.length > 0 && data[0]?.eventName}</span>
            <span className="float-right">
              {data?.length > 0 && data[0]?.openDate}
            </span>
          </div>
          <ul className="nav nav-tabs d-xl-none menu-tabs">
            <li
              onClick={() => setTabs("odds")}
              className="nav-item"
              style={{ cursor: "pointer" }}
            >
              <a
                className={`nav-link ${tabs === "odds" ? "active" : ""}`}
                data-bs-toggle="tab"
              >
                Odds
              </a>
            </li>

            <li
              onClick={() => setTabs("matchBets")}
              className="nav-item"
              style={{ cursor: "pointer" }}
            >
              <a
                className={`nav-link ${tabs === "matchBets" ? "active" : ""}`}
                data-bs-toggle="tab"
              >
                Matched Bet ({myBets?.length})
              </a>
            </li>

            {match_odds?.length > 0 && match_odds[0]?.hasVideo && (
              <li
                onClick={() => {
                  setShowTv(!showTv);
                  setTabs("tv");
                }}
                style={{ cursor: "pointer" }}
                className="nav-item"
              >
                <a className={`nav-link ${tabs === "tv" ? "active" : ""}`}>
                  <i className="fas fa-tv"></i>
                </a>
              </li>
            )}
          </ul>

          {tabs === "matchBets" && (
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
          )}
          {showTv && tabs === "tv" && (
            <div className="live-tv d-xl-none">
              <iframe
                src={videoUrl?.url}
                style={{
                  width: "100%",
                  border: "0px",
                }}
                referrerPolicy={
                  videoUrl?.ref === false ? "no-referrer" : "no-referrer"
                }
              ></iframe>
            </div>
          )}

          {(match_odds?.length > 0 &&
            match_odds[0]?.score?.length !== 0 &&
            tabs === "odds" &&
            id == "4") ||
          tabs === "tv" ? (
            <div className="scorecard">
              {match_odds?.[0]?.score?.map((scoreInfo, i) => {
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
                                {Array.isArray(scoreInfo?.recent) &&
                                  scoreInfo?.recent?.map((score, i) => {
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
          ) : null}

          {/* Match odds */}
          {(match_odds && match_odds?.length > 0 && tabs === "odds") ||
          tabs === "tv" ? (
            <MatchOddsSection
              match_odds={match_odds}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              id={id}
              eventId={eventId}
              setTotalSize={setTotalSize}
              booksValue={booksValue}
              totalSize={totalSize}
            />
          ) : null}

          {/* Bookmarker section  */}
          {(bookmarker && bookmarker?.length > 0 && tabs === "odds") ||
          tabs === "tv" ? (
            <BookmarkerSection
              bookmarker={bookmarker}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
              booksValue={booksValue}
              totalSize={totalSize}
            />
          ) : null}

          {/* Bookmarker 2 section  */}
          {(bookmarker2 && bookmarker2?.length > 0 && tabs === "odds") ||
          tabs === "tv" ? (
            <BookmarkerTwoSection
              bookmarker2={bookmarker2}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
            />
          ) : null}

          {/* Normal section */}
          {(normal && normal?.length > 0 && tabs === "odds") ||
          tabs === "tv" ? (
            <NormalSection
              normal={normal}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
            />
          ) : null}

          {/* Over by over */}
          {(overByOver && overByOver?.length > 0 && tabs === "odds") ||
          tabs === "tv" ? (
            <OverByOver
              overByOver={overByOver}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
            />
          ) : null}

          {/* Fancy1 section */}
          {(fancy1 && fancy1.length > 0 && tabs === "odds") || tabs === "tv" ? (
            <FancyOne
              fancy1={fancy1}
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
            />
          ) : null}
        </div>

        {/* Mobile place bet starts */}
        <MobilePlaceBet
          showBets={showBets}
          setShowBets={setShowBets}
          placeBetValue={placeBetValue}
          loader={loader}
          handleDecreasePrice={handleDecreasePrice}
          setPrice={setPrice}
          price={price}
          handleIncreasePrice={handleIncreasePrice}
          totalSize={totalSize}
          setTotalSize={setTotalSize}
          handleOrderBets={handleOrderBets}
          profit={profit}
          buttonValues={buttonValues}
          SetButtonValue={SetButtonValue}
          buttonValue={buttonValue}
          oddStake={oddStake}
          oddStakeLay1={oddStakeLay1}
          oddStakeLay2={oddStakeLay2}
          selectionId={placeBetValue?.selectionId}
        />

        {/* Mobile place bet ends */}
      </div>

      <div className={`sidebar right-sidebar ${isSticky ? "sticky" : ""}`}>
        {match_odds?.length > 0 && match_odds[0]?.hasVideo && (
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
                  referrerPolicy={
                    videoUrl?.ref === false ? "no-referrer" : "no-referrer"
                  }
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
        <DesktopPlaceBet
          showBets={showBets}
          placeBetValue={placeBetValue}
          loader={loader}
          setPrice={setPrice}
          price={price}
          handleDecreasePrice={handleDecreasePrice}
          handleIncreasePrice={handleIncreasePrice}
          setTotalSize={setTotalSize}
          totalSize={totalSize}
          profit={profit}
          buttonValue={buttonValue}
          SetButtonValue={SetButtonValue}
          buttonValues={buttonValues}
          setShowBets={setShowBets}
          handleOrderBets={handleOrderBets}
        />
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
                {myBets?.length > 0 && Array.isArray(myBets) && (
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
