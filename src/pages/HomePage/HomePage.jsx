import ic_vir from "../../static/front/img/ic_vir.png";
import ic_bm from "../../static/front/img/ic_bm.png";
import ic_fancy from "../../static/front/img/ic_fancy.png";
import game_icon from "../../static/front/img/game-icon.svg";
const HomePage = () => {
  return (
    <div className="center-container">
      <ul className="nav nav-pills sports-tab">
        <li className="nav-item">
          <a className="nav-link active">
            <div className="d-xl-none">
              <i className="icon icon-4"></i>
            </div>
            <span>Cricket</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-1"></i>
            </div>
            <span>Football</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-2"></i>
            </div>
            <span>Tennis</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-8"></i>
            </div>
            <span>Table Tennis</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-15"></i>
            </div>
            <span>Basketball</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-18"></i>
            </div>
            <span>Volleyball</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-59"></i>
            </div>
            <span>Snooker</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-19"></i>
            </div>
            <span>Ice Hockey</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-11"></i>
            </div>
            <span>E Games</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-9"></i>
            </div>
            <span>Futsal</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-39"></i>
            </div>
            <span>Handball</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <div className="d-xl-none">
              <i className="icon icon-66"></i>
            </div>
            <span>Kabaddi</span>
          </a>
        </li>
      </ul>
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
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/822593513"
                  >
                    <span>Bangladesh v Afghanistan</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 10:30:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon">
                      <span className="active"></span>
                    </div>
                    <div className="game-icon">
                      <i className="fas fa-tv icon-tv"></i>
                    </div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_bm} />
                    </div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.2</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>1.21</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>5.7</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>5.8</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/cricketv/4/85956504"
                  >
                    <span>Perth Scorchers XI v Hobart Hurricanes XI</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 11:15:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon">
                      <span className="active"></span>
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_bm} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_vir} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/cricketv/4/59315829"
                  >
                    <span>GAW XI v SNP XI</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 12:35:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon">
                      <span className="active"></span>
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_vir} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/virtual-cricket/4/752970941"
                  >
                    <span>New Zealand T10 v Australia T10</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 12:40:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon">
                      <span className="active"></span>
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={game_icon} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/virtual-cricket/4/827144297"
                  >
                    <span>Bangladesh T10 v South Africa T10</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 12:50:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon">
                      <span className="active"></span>
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={game_icon} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/674699216"
                  >
                    <span>ICC Cricket World Cup</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>05/10/2023 14:00:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_bm} />
                    </div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/virtual-cricket/4/782056749"
                  >
                    <span>Bangladesh T10 v India T10</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 13:55:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={game_icon} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/533779777"
                  >
                    <span>South Africa v Sri Lanka</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 14:00:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_bm} />
                    </div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.44</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>1.45</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>3.2</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>3.3</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/virtual-cricket/4/751060239"
                  >
                    <span>West Indies T10 v India T10</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>07/10/2023 14:10:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={game_icon} />
                    </div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd suspended-box">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/904120015"
                  >
                    <span>South Australia v Tas Tigers</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>08/10/2023 05:00:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.92</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>2.3</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.77</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>2.1</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/815470038"
                  >
                    <span>Australia Women v West Indies Women</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>08/10/2023 05:05:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.04</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>1.05</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>21</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>22</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/698509074"
                  >
                    <span>India v Australia</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>08/10/2023 14:00:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon">
                      <img src={ic_bm} />
                    </div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.7</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>1.71</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>2.42</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>2.44</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bet-table-row">
                <div className="bet-nation-name">
                  <a
                    className="bet-nation-game-name"
                    href="/game-details/4/721493511"
                  >
                    <span>New Zealand v Netherlands</span>
                    <span className="d-none d-md-inline-block">
                      &nbsp;/&nbsp;
                    </span>
                    <span>09/10/2023 14:00:00</span>
                  </a>
                  <div className="game-icons">
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                    <div className="game-icon">
                      <img src={ic_fancy} />
                    </div>
                    <div className="game-icon"></div>
                    <div className="game-icon"></div>
                  </div>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>1</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>X</b>
                </div>
                <div className="bet-nation-odd d-xl-none">
                  <b>2</b>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>1.08</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>1.09</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>-</b>
                    </span>
                  </div>
                </div>
                <div className="bet-nation-odd">
                  <div className="back odd-box">
                    <span className="bet-odd">
                      <b>12</b>
                    </span>
                  </div>
                  <div className="lay odd-box">
                    <span className="bet-odd">
                      <b>13.5</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-list mt-2">
        <div className="casino-list-item">
          <a href="/casino/sicbo">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen32">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino-list/LC/4/31">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen9">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen8">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/poker">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/poker20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/poker6">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/baccarat">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/baccarat2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/dt20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/dt6">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/dtl20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/dt202">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/card32">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/card32eu">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/ab20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/abj">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/lucky7">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/lucky7eu">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/3cardj">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/war">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/worli">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/worli2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/aaa">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/btable">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/lottcard">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/cricketv3">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/cmatch20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/cmeter">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen6">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/queen">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/race20">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/lucky7eu2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/superover">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/trap">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/patti2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teensin">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teenmuf">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/race17">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen20b">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/trio">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/notenum">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/kbc">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen120">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen1">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino-list/LC/4/31">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/ab3">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/aaa2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/race2">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/teen3">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/dum10">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
        <div className="casino-list-item">
          <a href="/casino/cmeter1">
            <div
              className="casino-list-item-banner"
              style={{
                backgroundImage:
                  "url('https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg'), url('https://nd.sprintstaticdata.com/casino-icons/default.jpg')",
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
