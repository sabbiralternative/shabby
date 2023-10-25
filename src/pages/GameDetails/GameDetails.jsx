import { useParams } from "react-router-dom";
import { config } from "../../utils/config";
import { useEffect, useState } from "react";
import axios from "axios";
import MatchOddsSection from "./MatchOddsSection";
import BookmarkerSection from "./BookmarkerSection";
import BookmarkerTwoSection from "./BookmarkerTwoSection";

const GameDetails = () => {
  const { id, eventId } = useParams();
  const oddsApi = config?.result?.endpoint?.odds;
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmarker, setBookmarker] = useState([]);
  const [bookmarker2, setBookmarker2] = useState([]);
  const [normal, setNormal] = useState([]);
  const [fancy1, setFancy1] = useState([]);
  const [overByOver, setOverByOver] = useState([]);

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
        console.log(data.result);
      }
    };
    getGameDetails();
  }, [token, oddsApi, id, eventId]);

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
 

  return (
    <>
      <div className="center-container">
        <div className="detail-page-container">
            <div className="game-header">
            <span>India v New Zealand</span>
            <span className="float-right">22/10/2023 14:00:00</span>
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
          <div className="live-tv d-xl-none">
            <iframe
              src="https://demo.livestream11.com/user/651724969/ios/49.36.109.100/7e7b0893-21f1-410c-b082-86bab63df61f"
              style={{
                width: "100%",
                border: "0px",
              }}
              scrolling="no"
            ></iframe>
          </div>

          <div className="scorecard">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="team-1 row">
                  <span className="team-name col-3">IND</span>
                  <span className="score col-4 text-end">22-0 (3.0)</span>
                  <span className="team-name col-5">
                    <span>CRR 7.33 </span>
                    <span>RR 5.36</span>
                  </span>
                </p>
                <p className="team-1 row mt-2">
                  <span className="team-name col-3">NZ</span>
                  <span className="score col-4 text-end">273-10 (50.0)</span>
                  <span className="team-name col-5"></span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="text-xl-end">
                      <span>IND Needed 252 runs from 282 balls</span>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <p className="text-xl-end ball-by-ball mt-2">
                          <span className="ball-runs">1</span>
                          <span className="ball-runs">1</span>
                          <span className="ball-runs">1</span>
                          <span className="ball-runs">0</span>
                          <span className="ball-runs">0</span>
                          <span className="ball-runs four">4</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          {/* Match odds */}
          {match_odds &&
            match_odds?.length > 0 &&
            match_odds?.map((match_odd) => (
              <MatchOddsSection
                key={match_odd.id}
                match_odd={match_odd}
                match_odds={match_odds}
              />
            ))}

          {/* Bookmarker section  */}
          {bookmarker &&
            bookmarker.length > 0 &&
            bookmarker.map((bookmark) => (
              <BookmarkerSection
                key={bookmark.id}
                bookmark={bookmark}
                bookmarker={bookmarker}
              />
            ))}

          {/* Bookmarker 2 section  */}
          {bookmarker2 &&
            bookmarker2.length > 0 &&
            bookmarker2.map((bookmark2) => (
              <BookmarkerTwoSection
                key={bookmark2.id}
                bookmark2={bookmark2}
                bookmarker2={bookmarker2}
              />
            ))}

          {/* Normal section */}
          {normal && normal.length > 0 && (
            <div className="game-market market-6">
              <div className="market-title">
                <span>{normal[0]?.tabGroupName}</span>
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
                  {normal.map((fancyGame) => {
                    return (
                      <div key={fancyGame.id} className="col-md-6">
                        <div
                          className={`${
                            fancyGame?.status === "OPEN"
                              ? "fancy-market "
                              : "fancy-market suspended-row"
                          }`}
                          data-title={`${
                            fancyGame?.status === "OPEN"
                              ? "ACTIVATE"
                              : "SUSPENDED"
                          }`}
                        >
                          <div className="market-row">
                            <div className="market-nation-detail">
                              <span className="market-nation-name">
                                {fancyGame?.name}
                              </span>
                            </div>
                            <div className="market-odd-box lay">
                              <span className="market-odd">
                                {fancyGame?.runners[0]?.lay[0]?.price}
                              </span>
                              <span className="market-volume">
                                {fancyGame?.runners[0]?.lay[0]?.line}
                              </span>
                            </div>
                            <div className="market-odd-box back">
                              <span className="market-odd">
                                {fancyGame?.runners[0]?.back[0]?.price}
                              </span>
                              <span className="market-volume">
                                {fancyGame?.runners[0]?.back[0]?.line}
                              </span>
                            </div>
                            <div className="fancy-min-max-box">
                              <div className="fancy-min-max">
                                <span className="w-100 d-block">
                                  Min: {fancyGame?.minLiabilityPerBet}
                                </span>
                                <span className="w-100 d-block">
                                  Max: {fancyGame?.maxLiabilityPerBet}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
            <div className="game-market market-6">
              <div className="market-title">
                <span>{overByOver[0]?.tabGroupName}</span>
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
                  {overByOver.map((over) => {
                    return (
                      <div key={over?.id} className="col-md-6">
                        <div
                          className={`${
                            over?.status === "OPEN"
                              ? "fancy-market "
                              : "fancy-market suspended-row"
                          }`}
                          data-title={`${
                            over?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                          }`}
                        >
                          <div className="market-row">
                            <div className="market-nation-detail">
                              <span className="market-nation-name">
                                {over?.name}
                              </span>
                            </div>
                            <div className="market-odd-box lay">
                              <span className="market-odd">
                                {over?.runners[0]?.lay[0]?.prize}
                              </span>
                              <span className="market-volume">
                                {over?.runners[0]?.lay[0]?.size}
                              </span>
                            </div>
                            <div className="market-odd-box back">
                              <span className="market-odd">
                                {over?.runners[0]?.back[0]?.prize}
                              </span>
                              <span className="market-volume">
                                {over?.runners[0]?.back[0]?.size}
                              </span>
                            </div>
                            <div className="fancy-min-max-box">
                              <div className="fancy-min-max">
                                <span className="w-100 d-block">
                                  Min: {over?.minLiabilityPerBet}
                                </span>
                                <span className="w-100 d-block">
                                  Max: {over?.maxLiabilityPerBet}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
            <div className="game-market market-6">
              <div className="market-title">
                <span>{fancy1[0]?.tabGroupName}</span>
              </div>
              <div className="row row10">
                <div className="col-md-6">
                  <div className="market-header">
                    <div className="market-nation-detail"></div>
                    <div className="market-odd-box back">
                      <b>Back</b>
                    </div>
                    <div className="market-odd-box lay">
                      <b>Lay</b>
                    </div>
                    <div className="fancy-min-max-box"></div>
                  </div>
                </div>
                <div className="col-md-6 d-none d-xl-block">
                  <div className="market-header">
                    <div className="market-nation-detail"></div>
                    <div className="market-odd-box back">
                      <b>Back</b>
                    </div>
                    <div className="market-odd-box lay">
                      <b>Lay</b>
                    </div>
                    <div className="fancy-min-max-box"></div>
                  </div>
                </div>
              </div>
              <div className="market-body" data-title="OPEN">
                <div className="row row10">
                  {fancy1.map((odds) => {
                    return (
                      <div key={odds?.id} className="col-md-6">
                        <div
                          className={`${
                            odds?.status === "OPEN"
                              ? "fancy-market "
                              : "fancy-market suspended-row"
                          }`}
                          data-title={`${
                            odds?.status === "OPEN" ? "ACTIVATE" : "SUSPENDED"
                          }`}
                        >
                          <div className="market-row">
                            <div className="market-nation-detail">
                              <span className="market-nation-name">
                                {odds?.name}
                              </span>
                              <div className="market-nation-book"></div>
                            </div>
                            <div className="market-odd-box back">
                              <span className="market-odd">
                                {odds?.runners[0]?.back[0]?.price}
                              </span>
                              <span className="market-volume">
                                {odds?.runners[0]?.back[0]?.size}
                              </span>
                            </div>
                            <div className="market-odd-box lay">
                              <span className="market-odd">
                                {odds?.runners[0]?.lay[0]?.price}
                              </span>
                              <span className="market-volume">
                                {odds?.runners[0]?.lay[0]?.size}
                              </span>
                            </div>
                            <div className="fancy-min-max-box">
                              <div className="fancy-min-max">
                                <span className="w-100 d-block">
                                  Min: {odds?.minLiabilityPerBet}
                                </span>
                                <span className="w-100 d-block">
                                  Max: {odds?.maxLiabilityPerBet}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
      </div>
      <div className="sidebar right-sidebar">
        <div className="sidebar-box">
          <div className="sidebar-title">
            <h4>Live Match</h4>
          </div>
        </div>
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
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
