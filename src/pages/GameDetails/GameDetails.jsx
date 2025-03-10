import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchOddsSection from "./MatchOddsSection";
import BookmarkerSection from "./BookmarkerSection";
import BookmarkerTwoSection from "./BookmarkerTwoSection";
import NormalSection from "./NormalSection";
import { v4 as uuidv4 } from "uuid";
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
import handleDecryptData from "../../utils/handleDecryptData";
import HorseGreyhound from "./HorseGreyhoynd";
import Tracker from "./Tracker";
import MyBets from "./MyBets";
import { AxiosSecure } from "../../lib/AxiosSecure";
import useLanguage from "../../hooks/useLanguage";

const GameDetails = () => {
  const { language } = useLanguage();
  const { id, eventId } = useParams();
  const token = localStorage.getItem("token");
  const buttonValues = JSON.parse(localStorage.getItem("buttonValue"));
  const [data, setData] = useState([]);
  const [score, setScore] = useState();
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
  const {
    buttonValue,
    SetButtonValue,
    predictOdds,
    setPredictOdds,
    placeBetValue,
  } = UseState();

  const [price, setPrice] = useState("");
  const [totalSize, setTotalSize] = useState("");
  const [profit, setProfit] = useState("");
  const [loader, setLoader] = useState(false);

  const [betDelay, setBetDelay] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tabs, setTabs] = useState("odds");
  const [, refetchBalance] = UseBalance();

  const [isSticky, setSticky] = useState(false);
  const [fetchVideo, setFetchVideo] = useState(false);

  /* Get casino thumbnail for home page */

  useEffect(() => {
    if (!settings.balanceApiLoop) {
      refetchBalance();
    }
  }, [refetchBalance]);

  /* Set price */
  useEffect(() => {
    setPrice(placeBetValue?.price);
    setTotalSize(
      placeBetValue?.totalSize > 0 ? placeBetValue?.totalSize.toFixed(2) : null
    );
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
      const res = await axios.get(`${API.eventDetails}/${id}/${eventId}`, {
        headers: {
          "Cache-Control": "public",
          "max-age": 1,
        },
      });
      const data = res.data;

      const decryptionData = await handleDecryptData(JSON.stringify(data));

      if (decryptionData.success) {
        setData(decryptionData.result);
        setScore(decryptionData.score);
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
      (match_odd) =>
        match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
    );
    setMatch_odds(filterMatch_odds);

    const bookmarkerFilter = data?.filter(
      (bookmarker) =>
        bookmarker.btype === "BOOKMAKER" && bookmarker?.visible == true
    );
    setBookmarker(bookmarkerFilter);

    const filterBookmarker2 = data?.filter(
      (bookmarker2) =>
        bookmarker2.btype === "BOOKMAKER2" && bookmarker2?.visible == true
    );
    setBookmarker2(filterBookmarker2);

    const normalFilter = data?.filter(
      (normal) =>
        normal.btype === "FANCY" &&
        normal.tabGroupName === "Normal" &&
        normal?.visible == true
    );
    setNormal(normalFilter);

    const fancy1Filter = data?.filter(
      (fancy1) =>
        fancy1.btype === "ODDS" &&
        fancy1.tabGroupName === "Fancy1" &&
        fancy1?.visible == true
    );
    setFancy1(fancy1Filter);

    const overByOverFilter = data?.filter(
      (overByOver) =>
        overByOver.btype === "FANCY" &&
        overByOver.tabGroupName === "Over By Over" &&
        overByOver?.visible == true
    );
    setOverByOver(overByOverFilter);
  }, [data]);

  /* Get video */
  useEffect(() => {
    if ((showTv || showMobileTv) && fetchVideo) {
      const getVideo = async () => {
        const payload = {
          eventTypeId: id,
          eventId: eventId,
          type: "video",
        };

        const { data } = await AxiosSecure.post(API.accessToken, payload);
        setVideoUrl(data?.result);
        setFetchVideo(false);
      };
      getVideo();
    }
  }, [eventId, id, showTv, token, showMobileTv, fetchVideo]);

  /* Get exposure data */
  const { data: exposer = [], refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    queryFn: async () => {
      const res = await AxiosSecure.post(`${API.exposure}/${eventId}`);
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
        language,
        nounce: uuidv4(),
        isbetDelay: settings.betDelay,
        cashout: placeBetValue.cashout || false,
      },
    ]);

    let delay = 0;
    if (
      (id == 4 || id == 2) &&
      placeBetValue?.btype === "MATCH_ODDS" &&
      price > 3 &&
      placeBetValue?.name?.length === 2
    ) {
      delay = 9000;
    }
    if (
      (id == 4 || id == 2) &&
      placeBetValue?.btype === "MATCH_ODDS" &&
      price > 7 &&
      placeBetValue?.name?.length === 3
    ) {
      delay = 9000;
    } else {
      setBetDelay(placeBetValue?.betDelay);
      delay = settings.betDelay ? placeBetValue?.betDelay * 1000 : 0;
    }
    setLoader(true);
    setTimeout(() => {
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
    }, delay);
  };

  /* Fetch Current Bets */
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    queryFn: async () => {
      try {
        const { data } = await AxiosSecure.post(
          `${API.currentBets}/${eventId}`
        );

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

  useEffect(() => {
    let total;
    if (
      placeBetValue?.btype === "MATCH_ODDS" ||
      placeBetValue?.btype === "BOOKMAKER"
    ) {
      if (placeBetValue?.back) {
        if (placeBetValue?.btype === "MATCH_ODDS") {
          total = price * totalSize - totalSize;
        }
        if (placeBetValue?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * totalSize - totalSize;
        }

        const currentExposure = placeBetValue?.exposure?.map((exp) => {
          return {
            updatedExposure: totalSize
              ? exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * totalSize)
              : null,

            id: exp?.id,
            isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            name: exp?.name,
            exposure: exp?.exposure,
          };
        });

        setPredictOdds(currentExposure);
      } else if (placeBetValue?.lay) {
        if (placeBetValue?.btype === "MATCH_ODDS") {
          total = -1 * (price * totalSize - totalSize);
        }
        if (placeBetValue?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * totalSize - totalSize);
        }

        const currentExposure = placeBetValue?.exposure?.map((exp) => {
          return {
            updatedExposure: totalSize
              ? exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * totalSize)
              : null,
            id: exp?.id,
            isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            name: exp?.name,
            exposure: exp?.exposure,
          };
        });
        setPredictOdds(currentExposure);
      }
    }
  }, [price, totalSize, placeBetValue, setPredictOdds]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
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

  useEffect(() => {
    if (betDelay > 0) {
      setTimeout(() => {
        setBetDelay((prev) => prev - 1);
      }, 1000);
    } else {
      setBetDelay(null);
    }
  }, [setBetDelay, betDelay]);

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

            {score?.hasVideo && (
              <li
                onClick={() => {
                  setFetchVideo(true);
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
          <Tracker score={score} />

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
              booksValue={predictOdds}
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
              booksValue={predictOdds}
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

          {(id == 7 || id == 4339) && data?.length > 0 ? (
            <HorseGreyhound
              exposer={exposer}
              showBets={showBets}
              setShowBets={setShowBets}
              setTotalSize={setTotalSize}
              data={data}
            />
          ) : null}
        </div>

        {/* Mobile place bet starts */}
        <MobilePlaceBet
          betDelay={betDelay}
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
          predictOdds={predictOdds}
        />

        {/* Mobile place bet ends */}
      </div>

      <div className={`sidebar right-sidebar ${isSticky ? "sticky" : ""}`}>
        {score?.hasVideo && (
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setShowMobileTv(!showMobileTv);
              setFetchVideo(true);
            }}
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
          betDelay={betDelay}
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

        <MyBets myBets={myBets} />
      </div>
    </>
  );
};

export default GameDetails;
