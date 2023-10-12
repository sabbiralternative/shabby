const Sidebar = () => {
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button
              type="button"
              aria-expanded="true"
              className="accordion-button"
            >
              Racing Sports
            </button>
          </h2>
          <div className="accordion-collapse collapse show">
            <div className="racing-sport accordion-body">
              <ul>
                <div className="nav-item dropdown">
                  <a
                    id="horse-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    tabIndex="0"
                    href="#"
                  >
                    Horse Racing
                  </a>
                </div>
              </ul>
              <ul>
                <div className="nav-item dropdown">
                  <a
                    id="horse-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
                    tabIndex="0"
                    href="#"
                  >
                    Greyhound Racing
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button
              type="button"
              aria-expanded="true"
              className="accordion-button"
            >
              Others
            </button>
          </h2>
          <div className="accordion-collapse collapse show">
            <div className="other-casino-list accordion-body">
              <ul>
                <li className="nav-item">
                  <a className="nav-link" href="/casino-list/LC/4">
                    <span className="blink_me">Our Casino</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/casino-list/LC/19">
                    <span className="blink_me">Our Virtual</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/live-casino-list/CS/26">
                    <span>Live Casino</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/slot-list">
                    <span>Slot Game</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/fantasy-list">
                    <span>Fantasy Game</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button
              type="button"
              aria-expanded="true"
              className="accordion-button"
            >
              All Sports
            </button>
          </h2>
          <div className="accordion-collapse collapse show">
            <div className="menu-box accordion-body">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Politics</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>Assembly Election 2023</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/40/494346387"
                          >
                            <span>Assembly Election 2023</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Cricket</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>Virtual Cricket League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/virtual-cricket/4/782056749"
                          >
                            <span>Bangladesh T10 v India T10</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/virtual-cricket/4/827144297"
                          >
                            <span>Bangladesh T10 v South Africa T10</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/virtual-cricket/4/752970941"
                          >
                            <span>New Zealand T10 v Australia T10</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/virtual-cricket/4/751060239"
                          >
                            <span>West Indies T10 v India T10</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>Womens One Day Internationals</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/815470038"
                          >
                            <span>Australia Women v West Indies Women</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>T5 XI</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/cricketv/4/59315829"
                          >
                            <span>GAW XI v SNP XI</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ICC Cricket World Cup</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/822593513"
                          >
                            <span>Bangladesh v Afghanistan</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/674699216"
                          >
                            <span>ICC Cricket World Cup</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/698509074"
                          >
                            <span>India v Australia</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/721493511"
                          >
                            <span>New Zealand v Netherlands</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/533779777"
                          >
                            <span>South Africa v Sri Lanka</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>Marsh One-Day Cup</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/4/904120015"
                          >
                            <span>South Australia v Tas Tigers</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>T10 XI</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/cricketv/4/85956504"
                          >
                            <span>
                              Perth Scorchers XI v Hobart Hurricanes XI
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Football</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>FRANCE Ligue 2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/888547908"
                          >
                            <span>Amiens v Angers</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/659343229"
                          >
                            <span>Bastia v Annecy</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/652403826"
                          >
                            <span>Bordeaux v Laval</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/861548808"
                          >
                            <span>Concarneau v Dunkerque</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/494628149"
                          >
                            <span>Guingamp v Grenoble</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/745967771"
                          >
                            <span>Paris FC v Auxerre</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/488426058"
                          >
                            <span>Quevilly Rouen v Pau</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/798905649"
                          >
                            <span>Rodez v Caen</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/681818394"
                          >
                            <span>St Etienne v AC Ajaccio</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/809967226"
                          >
                            <span>Valenciennes v ESTAC Troyes</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>HONG KONG Premier League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/700271500"
                          >
                            <span>Eastern AA - Sham Shui Po Sports</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/875645031"
                          >
                            <span>Wofoo Tai Po - Resources Capital</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SCOTLAND Premiership</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/792879714"
                          >
                            <span>Celtic v Kilmarnock</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/838969281"
                          >
                            <span>Dundee v Ross Co</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/715239419"
                          >
                            <span>Hearts v Hibernian</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/748001777"
                          >
                            <span>Livingston v Motherwell</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GERMANY 2. Bundesliga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/578344128"
                          >
                            <span>FC Magdeburg v Karlsruhe</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/818014200"
                          >
                            <span>Greuther Furth v Hansa Rostock</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/915104815"
                          >
                            <span>St Pauli v Nurnberg</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/523864787"
                          >
                            <span>Wehen Wiesbaden v Hamburger SV</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>POLAND Division 1</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/915501822"
                          >
                            <span>Podbeskidzie B-B v Stal Rzeszow</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/656075430"
                          >
                            <span>Wisla Krakow v Znicz Pruszkow</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/600658843"
                          >
                            <span>Wisla Plock v Arka Gdynia</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ROMANIA Liga 2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/874917024"
                          >
                            <span>ACS Viitorul Tg Jiu v Concordia Chiajna</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/501268538"
                          >
                            <span>
                              Chindia Targoviste v Progresul 1944 Spartac
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/732209774"
                          >
                            <span>CS Mioveni v CSM Scolar Resita</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/658296858"
                          >
                            <span>CSM Slatina v Gloria Buzau</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/837495997"
                          >
                            <span>FC Metaloglobus Bucuresti v Csikszereda</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/474878529"
                          >
                            <span>FC Unirea Dej v ACS Dumbravita</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/499998863"
                          >
                            <span>FCM Alexandria v Ceahlaul</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>POLAND Ekstraliga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/733610041"
                          >
                            <span>slask wroclaw W - Azs Uj Krakow W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SOUTH KOREA K League 2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/734664411"
                          >
                            <span>Gimpo Citizen v FC Anyang</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/825044517"
                          >
                            <span>Jeonnam Dragons v Ansan Greeners FC</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/624230186"
                          >
                            <span>Seongnam FC v Chungnam Asan</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/615738419"
                          >
                            <span>Seoul E-Land FC v Gyeongnam</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>BELGIUM Jupiler Pro League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/866896817"
                          >
                            <span>Anderlecht v Yellow-Red Mechelen</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/540453363"
                          >
                            <span>Cercle Brugge v Oud-Heverlee Leuven</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/534709322"
                          >
                            <span>Westerlo v Kortrijk</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>IRELAND FAI CUP - SEMI-FINALS</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/598897552"
                          >
                            <span>Galway Utd v Bohemians</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>NORWAY Eliteserien</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/702705639"
                          >
                            <span>Odds BK v Viking</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC FORTUNA LIGA</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/679044726"
                          >
                            <span>Banik Ostrava v Pardubice</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/902083042"
                          >
                            <span>Bohemians 1905 v Zlin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/849377657"
                          >
                            <span>Ceske Budejovice v MFK Karvina</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/481838602"
                          >
                            <span>Sigma Olomouc v Mlada Boleslav</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/701884971"
                          >
                            <span>Slovacko v Teplice</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SOUTH KOREA K4 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/630106910"
                          >
                            <span>Busan Ipark II - Gangwon B</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/694439314"
                          >
                            <span>Jeonju Citizen - Geoje Citizen</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/662192748"
                          >
                            <span>Pyeongtaek Citizen - Chungju Citizen</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITALY Primavera 1</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/796724132"
                          >
                            <span>Frosinone U19 - Fiorentina U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/677778541"
                          >
                            <span>Sassuolo U19 - Roma U19</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GERMANY Bundesliga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/908182499"
                          >
                            <span>Augsburg v SV Darmstadt</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/628460673"
                          >
                            <span>Dortmund v Union Berlin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/687241290"
                          >
                            <span>RB Leipzig v Bochum</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/598355460"
                          >
                            <span>Stuttgart v Wolfsburg</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/612554888"
                          >
                            <span>Werder Bremen v Hoffenheim</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC U19 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/494151314"
                          >
                            <span>Frydek-Mistek U19 - Jihlava U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/628836392"
                          >
                            <span>MFK OKD Karvina U19 - Zlin U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/717231739"
                          >
                            <span>Slavia Prague U19 - Dukla Praha U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/773812396"
                          >
                            <span>Slovacko U19 - Sigma Olomouc U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/536450800"
                          >
                            <span>Viktoria Plzen U19 - Pardubice U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/745964305"
                          >
                            <span>Zbrojovka Brno U19 - Mlada Boleslav U19</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITALY Serie A</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/633644948"
                          >
                            <span>Genoa v AC Milan</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/598900206"
                          >
                            <span>Inter v Bologna</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/553191881"
                          >
                            <span>Juventus v Torino</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>EGYPT Premier League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/836217788"
                          >
                            <span>El Daklyeh v Al-Masry</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/915239937"
                          >
                            <span>El Geish v Future FC</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/745285440"
                          >
                            <span>National Bank v Zamalek</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>JAPAN J2 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/764266511"
                          >
                            <span>Nagasaki v Fujieda Myfc</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/727138395"
                          >
                            <span>Omiya v Renofa Yamaguchi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/885112880"
                          >
                            <span>Shimizu v Iwata</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/808578440"
                          >
                            <span>Tokyo-V v Oita</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SWEDEN Allsvenskan</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/920813988"
                          >
                            <span>AIK v Mjallby</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/724586474"
                          >
                            <span>Halmstads v Degerfors</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/744796647"
                          >
                            <span>IFK Goteborg v Sirius</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SWITZERLAND Super League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/875371152"
                          >
                            <span>FC Zurich v Winterthur</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/725250834"
                          >
                            <span>St Gallen v Stade Lausanne-Ouchy</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/640520075"
                          >
                            <span>Yverdon Sport v Grasshoppers Zurich</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>FRANCE Ligue 1</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/540176814"
                          >
                            <span>Metz v Nice</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/678968937"
                          >
                            <span>Reims v Monaco</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SPAIN LaLiga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/862058111"
                          >
                            <span>Cadiz v Girona</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/717403530"
                          >
                            <span>Mallorca v Valencia</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/523838978"
                          >
                            <span>Real Madrid v Osasuna</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/531042578"
                          >
                            <span>Sevilla v Rayo Vallecano</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UKRAINE Persha Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/878133111"
                          >
                            <span>
                              FC Metalist Kharkiv - FC Ahrobiznes Volochysk
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>INDONESIA Liga 1</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/620817989"
                          >
                            <span>Persebaya Surabaya v Persib Bandung</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/747211318"
                          >
                            <span>Persija Jakarta v PS Barito Putera</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ENGLAND Premier League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/744524362"
                          >
                            <span>Burnley v Chelsea</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/473285105"
                          >
                            <span>Crystal Palace v Nottm Forest</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/561227225"
                          >
                            <span>Everton v Bournemouth</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/642200871"
                          >
                            <span>Fulham v Sheff Utd</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/479293379"
                          >
                            <span>Luton v Tottenham</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/747043552"
                          >
                            <span>Man Utd v Brentford</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ENGLAND Championship</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/701590807"
                          >
                            <span>Cardiff v Watford</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/921979919"
                          >
                            <span>Coventry v Norwich</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/512939784"
                          >
                            <span>Ipswich v Preston</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/835590630"
                          >
                            <span>Leeds v Bristol City</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/698579792"
                          >
                            <span>Leicester v Stoke</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/578831865"
                          >
                            <span>Millwall v Hull</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/687024633"
                          >
                            <span>Plymouth v Swansea</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/572797534"
                          >
                            <span>QPR v Blackburn</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/650818769"
                          >
                            <span>Sheff Wed v Huddersfield</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/753301979"
                          >
                            <span>Southampton v Rotherham</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/499442782"
                          >
                            <span>Sunderland v Middlesbrough</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ROMANIA Liga 1</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/764051464"
                          >
                            <span>ACS Petrolul 52 v UTA Arad</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/902153564"
                          >
                            <span>Botosani v FCSB</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/750309377"
                          >
                            <span>FC Voluntari v Universitatea Craiova</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PORTUGAL Liga Portugal 2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/501527927"
                          >
                            <span>CD Nacional Funchal v Oliveirense</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/799787880"
                          >
                            <span>Pacos Ferreira v Vilaverdense</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/779955272"
                          >
                            <span>Tondela v Leixoes</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CHILE Primera Division</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/544288604"
                          >
                            <span>Curico Unido v Cobresal</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/895850100"
                          >
                            <span>OHiggins v Univ Catolica (Chile)</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>AUSTRIA Bundesliga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/825103059"
                          >
                            <span>Austria Vienna v FC Blau Weiss Linz</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/747137870"
                          >
                            <span>Hartberg v WSG Wattens</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/662032570"
                          >
                            <span>SC Austria Lustenau v Rapid Vienna</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GERMANY 3. Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/802009122"
                          >
                            <span>1860 Munich v Dynamo Dresden</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/811074048"
                          >
                            <span>Arminia Bielefeld v Dortmund II</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/754290142"
                          >
                            <span>Duisburg v Unterhaching</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/858630564"
                          >
                            <span>Erzgebirge v Saarbrucken</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/859235595"
                          >
                            <span>Rot-Weiss Essen v Verl</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/841177291"
                          >
                            <span>Waldhof Mannheim v Viktoria Koln</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SWEDEN Superettan</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/913614350"
                          >
                            <span>Osters v Orebro</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/884137255"
                          >
                            <span>Ostersunds FK v Helsingborgs</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/489943175"
                          >
                            <span>Skovde Aik v Gefle</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/812382020"
                          >
                            <span>Vasteras SK v Jonkopings Sodra</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>NETHERLANDS Eredivisie</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/715237572"
                          >
                            <span>Almere City v RKC Waalwijk</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/650807688"
                          >
                            <span>Go Ahead Eagles v Heracles</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/686322587"
                          >
                            <span>Heerenveen v NEC Nijmegen</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/916137347"
                          >
                            <span>Vitesse Arnhem v Excelsior</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SERBIA Super Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/811538740"
                          >
                            <span>FK Javor Ivanjica v Zeleznicar Pancevo</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/600611265"
                          >
                            <span>FK Novi Pazar v Vojvodina</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/680469403"
                          >
                            <span>Partizan Belgrade v Mladost Lucani</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITALY Serie B</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/720222603"
                          >
                            <span>Ascoli v Sampdoria</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/514485935"
                          >
                            <span>Cittadella v Ternana</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/685992879"
                          >
                            <span>Cosenza v Lecco</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/891082426"
                          >
                            <span>Modena v Palermo</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/843959268"
                          >
                            <span>Reggiana v SSD Bari</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/894888339"
                          >
                            <span>Sudtirol v Catanzaro</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/837911720"
                          >
                            <span>Venezia v Parma</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PORTUGAL Liga Portugal</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/890798053"
                          >
                            <span>Braga v Rio Ave</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/715331707"
                          >
                            <span>Chaves v Gil Vicente</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/754797692"
                          >
                            <span>Estoril Praia v Benfica</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/561716848"
                          >
                            <span>Farense v Vizela</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>KENYA Super League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/694475657"
                          >
                            <span>Silibwet - Mara Sugar</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CROATIA HNL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/586248554"
                          >
                            <span>Osijek v Rudes</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/710608427"
                          >
                            <span>Rijeka v Hajduk Split</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>TURKEY Super Lig</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/854290728"
                          >
                            <span>Ankaragucu v Kayserispor</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/618141832"
                          >
                            <span>Antalyaspor v Galatasaray</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/558248190"
                          >
                            <span>Basaksehir v Gaziantep FK</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/911777143"
                          >
                            <span>Pendikspor v Sivasspor</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SERBIA U19 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/623440912"
                          >
                            <span>Vozdovac U19 - Novi Pazar U19</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>LITHUANIA I Lyga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/856196079"
                          >
                            <span>FK Lietava Jonava - BFA Vilnius</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/631507622"
                          >
                            <span>FK Minija Kretinga - Panevezys II</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CROATIA U19 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/502035330"
                          >
                            <span>Sibenik U19 - NK Slaven Belupo U19</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>URUGUAY Primera Division</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/561370401"
                          >
                            <span>Cerro Largo FC v Centro Atletico Fenix</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/875230647"
                          >
                            <span>Liverpool Montevideo v Wanderers (Uru)</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>POLAND III Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/470180308"
                          >
                            <span>Jagiellonia II Bialystok - GKS Wikielec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/686502511"
                          >
                            <span>Legia II Warszawa - LKS Lomza</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/610716649"
                          >
                            <span>
                              Odra Bytom Odrzanski - KS Stilon Gorzow
                              Wielkopolski
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/875989815"
                          >
                            <span>Pogon II Szczecin - Gedania Gdansk</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/841071573"
                          >
                            <span>Unia Solec Kujawski - Sokol Kleczew</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>LATVIA 1. Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/867762861"
                          >
                            <span>Dinamo Riga - Tukums 2000 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PORTUGAL U19 League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/743979274"
                          >
                            <span>Belenenses U19 - Estoril U19</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/899180132"
                          >
                            <span>Sporting CP U19 - Torreense-U19</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC FNL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/712021534"
                          >
                            <span>MFK Chrudim v SFC Opava</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/479467708"
                          >
                            <span>Prostejov v Lisen</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/498572482"
                          >
                            <span>Vyskov v Zizkov</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>POLAND Ekstraklasa</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/622840294"
                          >
                            <span>Radomiak Radom v LKS Lodz</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/920015094"
                          >
                            <span>Ruch Chorzow v Pogon Szczecin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/646878634"
                          >
                            <span>Widzew Lodz v Stal Mielec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/623229743"
                          >
                            <span>Zaglebie Lubin v Piast Gliwice</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>AUSTRALIA AUSTRALIA CUP - FINAL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/554357703"
                          >
                            <span>Sydney FC v Brisbane Roar</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>AUSTRIA 2. Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/841358924"
                          >
                            <span>Fc Dornbirn v SK Sturm Graz II</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/656183932"
                          >
                            <span>Grazer AK v Bregenz</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>LATVIA Optibet Virsliga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/823704230"
                          >
                            <span>BFC Daugavpils - Valmiera FC</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SPAIN LaLiga2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/714409378"
                          >
                            <span>Huesca v Eldense</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/752041610"
                          >
                            <span>Leganes v Oviedo</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/613617357"
                          >
                            <span>Racing Santander v Sporting Gijon</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>DENMARK 1st Division</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/493504922"
                          >
                            <span>Kolding IF v HB Koge</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ASIA ASIAN GAMES - 3RD PLACE</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/1/480801965"
                          >
                            <span>Uzbekistan U23 - Hong Kong U23</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Tennis</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CHALLENGER MEN - SINGLES CAMPINAS (BRAZIL)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/483837049"
                          >
                            <span>Burruchaga v Darderi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/594193818"
                          >
                            <span>Luz v Pellegrino</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/865824607"
                          >
                            <span>Pellegrino v Cam Ugo Carabelli</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/906922237"
                          >
                            <span>T Monteiro v Darderi</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WTA - SINGLES Seoul (South Korea)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/621415995"
                          >
                            <span>Mattek-Sands v Zaytseva</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/592505217"
                          >
                            <span>Mei Yamaguchi v Pean Plipuech</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/815419106"
                          >
                            <span>Qui Gleason v Ya-Hsu Lee</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/736962951"
                          >
                            <span>Soh Park v Yeonwoo Ku</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ATP - SINGLES Shanghai (China)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/487022105"
                          >
                            <span>Atmane v Jarry</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/916986647"
                          >
                            <span>Carlos Alcaraz v Barrere</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/596157981"
                          >
                            <span>Dimitrov v Vukic</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/640862608"
                          >
                            <span>Fils v Davidovich Fokina</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/537689938"
                          >
                            <span>Garin v Medvedev</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/863392622"
                          >
                            <span>Halys v Rublev</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/487646813"
                          >
                            <span>J Wolf v Norrie</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/678980955"
                          >
                            <span>Kukushkin v Evans</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/544681538"
                          >
                            <span>Lehecka v D Schwartzman</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/650006176"
                          >
                            <span>Mannarino v Tseng</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/562237454"
                          >
                            <span>Paul v Ofner</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/617393183"
                          >
                            <span>Sinner v Giron</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/482084583"
                          >
                            <span>Struff v Arnaldi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/849905133"
                          >
                            <span>Tiafoe v Sonego</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/679735447"
                          >
                            <span>Tsitsipas v Ri Hijikata</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/791016657"
                          >
                            <span>Van de Zandschulp v Humbert</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/907835457"
                          >
                            <span>Yo Watanuki v Fritz</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/703836872"
                          >
                            <span>Zhukayev v Khachanov</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CHALLENGER MEN - SINGLES ALICANTE (SPAIN)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/756653667"
                          >
                            <span>Grenier v Novak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/695819725"
                          >
                            <span>Lestienne v Ma Landaluce</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/888384591"
                          >
                            <span>Lestienne v Marterer</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ATP - DOUBLES Shanghai (China)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/797346997"
                          >
                            <span>
                              Ivan Dodig/Austin Krajicek - Alex de Minaur / Max
                              Purcell
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/733856690"
                          >
                            <span>
                              Hurkacz Hubert / Shelton Ben - Rinky Hijikata /
                              Cameron Norrie
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/753834982"
                          >
                            <span>
                              Karen Khachanov / Andrey Rublev - Francisco
                              Cerundolo / Tomas Martin Etcheverry
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/565366162"
                          >
                            <span>
                              Kevin Krawietz / Tim Puetz - Mektic Nikola / Peers
                              John
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/894575162"
                          >
                            <span>
                              Mackenzie McDonald / Frances Tiafoe - Wesley
                              Koolhof / Neal Skupski
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/639129189"
                          >
                            <span>
                              Marcelo Arevalo / Jean Julien Rojer - Felix Auger
                              Aliassime / Lehecka Jiri
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/524382783"
                          >
                            <span>
                              Rafael Matos / Marcelo Melo - Jamie Murray /
                              Michael Venus
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/580867230"
                          >
                            <span>
                              Robin Haase / Stefanos Tsitsipas - Nathaniel
                              Lammons / Jackson Withrow
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/568249416"
                          >
                            <span>
                              Santiago Gonzalez / Edouard Roger Vasselin - Zhe
                              Li / Sun Fajing
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITF WOMEN - DOUBLES W60 Rome, GA (USA)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/464885444"
                          >
                            <span>
                              Sara Daavettila / Katarina Kozarov - Chieh-Yu-Hsu
                              / Sahaja Yamalapalli
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          ITF WOMEN - SINGLES W15 Sharm ElSheikh (Egypt)
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/571935694"
                          >
                            <span>
                              Elena-Teodora Cadar - Lamis Alhussein Abdel Aziz
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/855032533"
                          >
                            <span>Katarina Kuzmova - Sandra Samir</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          CHALLENGER MEN-SINGLES MOUILLERON-LE-CAPTIF(FRANCE
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/783918965"
                          >
                            <span>Escoffier v Ar Fery</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/833037749"
                          >
                            <span>Machac v Lu Nardi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/651600717"
                          >
                            <span>Machac v Poullain</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UTR PRO TENNIS SERIES BEOGRAD WOMEN</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/605509951"
                          >
                            <span>
                              Ana Giraldi Requena - Alexia Iulia Marginean
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/738791698"
                          >
                            <span>
                              Andjela Lazarevic - Sofia Maria Barbulescu
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/898593546"
                          >
                            <span>
                              Julia Terziyska - Georgia Andreea Craciun
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/675823582"
                          >
                            <span>Milica Popovski - Sava Ioana Teodora</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/529137945"
                          >
                            <span>Natalija Senic - Ksenia Laskutova</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/596195384"
                          >
                            <span>Silvia Njiric - Maja Radenkovic</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WTA - SINGLES Zhengzhou (China)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/574186184"
                          >
                            <span>Ca Osorio v Zvonareva</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/659830803"
                          >
                            <span>Di Shnaider v Zi Jiang</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/787855241"
                          >
                            <span>Jiang v C Zhao</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/861171186"
                          >
                            <span>L Bronzetti v K Volodko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/493790147"
                          >
                            <span>Miyu Kato v Babos</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/908191808"
                          >
                            <span>Perez v YeXin Ma</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/828800305"
                          >
                            <span>Si Wei v You</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/853662995"
                          >
                            <span>Sofia Shapatava v Uchijima</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/659855626"
                          >
                            <span>Tama Korpatsch v Shibahara</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UTR PRO TENNIS SERIES CALIFORNIA</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/697616245"
                          >
                            <span>Alessandro Ventre - Elisha Thornton</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/700921417"
                          >
                            <span>Joseph Corse - Kaetan Mehta</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/681380495"
                          >
                            <span>Rodrigo Santiago - Nikita Horunzhy</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WTA - DOUBLES BEIJING (CHINA) - SEMI-FINALS</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/477051371"
                          >
                            <span>
                              Bouzkova/Sorribes Tormo v Gamarra Martins/Stefani
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/831324231"
                          >
                            <span>Chan/Olmos v Linette/Stearns</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UTR PRO TENNIS SERIES BEOGRAD</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/629053472"
                          >
                            <span>Drazen Petrovic - Lazar Vojinovic</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/504465541"
                          >
                            <span>Enrique Bogo - Vladan Tadic</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/678911190"
                          >
                            <span>
                              Gabriel Matuszewski - Tadija Radovanovic
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/756713767"
                          >
                            <span>Hernando J E Isnardi - Pisaric A</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/626591560"
                          >
                            <span>Sasa Markovic - Oleg Prihodko</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITF WOMEN - DOUBLES W15 Sibenik (Croatia)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/525248373"
                          >
                            <span>
                              Victoria Borodulina / Mariana Drazic - Tea
                              Nikcevic / Lucie Urbanova
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CHALLENGER MEN - SINGLES TIBURON (USA)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/761954780"
                          >
                            <span>Schoolkate v Walton</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/845100003"
                          >
                            <span>Svajda v Galarneau</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/798043485"
                          >
                            <span>Tomic v Walton</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          CHALLENGER MEN - DOUBLES Campinas (Brazil) - FINAL
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/733572480"
                          >
                            <span>
                              Andreozzi Guido / Duran Guillermo - Diego Hidalgo
                              / Cristian Rodriguez
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          CHALLENGER MEN - DOUBLES Alicante (Spain) - FINAL
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/468104444"
                          >
                            <span>
                              Kaliyanda Poonacha Niki / Sharan Divij -
                              Nedunchezhiyan Jeevan / Smith John Patrick
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITF MEN- SINGLES M15 Sharm ElSheikh (Egypt)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/716700157"
                          >
                            <span>Gabriel Decamps - Mohamed Safwat</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/706485492"
                          >
                            <span>Stuart Parker - Henry Searle</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UTR PRO TENNIS SERIES FLORIDA</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/801766152"
                          >
                            <span>Ronan Jachuck - Tristan Bradley</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WTA - SINGLES Hong Kong (Hong Kong)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/891132673"
                          >
                            <span>Eka Yashina v Perrin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/498986135"
                          >
                            <span>Korneeva v Anshba</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/680699136"
                          >
                            <span>Thandi v Danilina</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>Testing</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/657331173"
                          >
                            <span>Test A v Test B</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CHALLENGER MEN - SINGLES LISBON (PORTUGAL)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/637884216"
                          >
                            <span>Agamenone v Cobolli</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/909934729"
                          >
                            <span>Ramos-Vinolas v Ben Hassan</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WTA - SINGLES BEIJING (CHINA) - SEMI-FINALS</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/484395725"
                          >
                            <span>C Gauff v I Swiatek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/534050055"
                          >
                            <span>E Rybakina v L Samsonova</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ITF WOMEN - DOUBLES W40 Lisbon (Portugal)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/603403038"
                          >
                            <span>
                              A. Rame / K. Zavatska - Tayisiya Morderger / Yana
                              Morderger
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          CHALLENGER MEN-DOUBLES Mouilleron-Le-Captif(France
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/2/639672714"
                          >
                            <span>
                              Maxime Cressy / Otto Virtanen - Tristan
                              Lamasine/Matteo Martineau
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Table Tennis</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH Liga Pro</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/703114498"
                          >
                            <span>Alois Kanak - Bohuslav Kaloc</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/706974675"
                          >
                            <span>Alois Kanak - Ivo Palmi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/878166243"
                          >
                            <span>Alois Kanak - Jiri Motak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/852234157"
                          >
                            <span>Alois Kanak - Josef Toth</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/739807667"
                          >
                            <span>Barta Tomas - Oskar Spacek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/600848271"
                          >
                            <span>Bohumil Duben - Ales Krejci</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/891996182"
                          >
                            <span>Bohuslav Kaloc - Tomas Jurdin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/596004755"
                          >
                            <span>David Tomasch - Milan Chalupnicek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/787141282"
                          >
                            <span>David Tomasch - Pavel Sprynar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/855219575"
                          >
                            <span>Frantisek Briza - Jakub Tazler</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/568026469"
                          >
                            <span>Ivo Palmi - Jiri Motak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/865132500"
                          >
                            <span>Jakub Tazler - Vladimir Cermak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/723826358"
                          >
                            <span>Jan Briska - Jiri Plachy</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/637293127"
                          >
                            <span>Jaromir Kanok - Milan Zika</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/877353539"
                          >
                            <span>Jaroslav Dorazka - Martin Kacerovsky</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/812182409"
                          >
                            <span>Jaroslav Strnad 1964 - Martin Tacinec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/743806079"
                          >
                            <span>Jiri Motak - Martin Stefek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/492380123"
                          >
                            <span>Jiri Plachy - Lukas Malek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/808247982"
                          >
                            <span>Jiri Plachy - Miroslav Adamec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/561891345"
                          >
                            <span>Jiri Svec - Pavel Sprynar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/538429253"
                          >
                            <span>Jiri Vojtech - Lukas Tonar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/620776234"
                          >
                            <span>Jiri Zuzanek - Jiri Vojtech</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/620127474"
                          >
                            <span>Josef Rossler - Oldrich Lzicar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/652773636"
                          >
                            <span>Josef Rossler - Ondrej Mista</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/906263673"
                          >
                            <span>Josef Toth - Bohuslav Kaloc</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/766901002"
                          >
                            <span>Josef Toth - Tomas Jurdin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/853420374"
                          >
                            <span>Kamil Gavelcik - Barta Tomas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/584692069"
                          >
                            <span>Kamil Gavelcik - Oskar Spacek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/700340707"
                          >
                            <span>Kyryl Darin - Jaromir Kanok</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/719574182"
                          >
                            <span>Lubomir Jonas - Jaroslav Dorazka</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/570188295"
                          >
                            <span>Lubomir Jonas - Martin Kacerovsky</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/903540541"
                          >
                            <span>lubor sulava - Jiri Svec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/576227431"
                          >
                            <span>lubor sulava - Michal Syroha</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/891016632"
                          >
                            <span>Lukas Malek - Jan Briska</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/646193085"
                          >
                            <span>Lukas Tonar - Jiri Zuzanek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/557274870"
                          >
                            <span>Lukas Tonar - Simon Kadavy</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/748258264"
                          >
                            <span>Martin Kacerovsky - Stepan Prazak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/725038802"
                          >
                            <span>Martin Stefek - Alois Kanak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/618202839"
                          >
                            <span>Martin Stefek - Ivo Palmi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/656324794"
                          >
                            <span>Martin Tacinec - Vaclav Hruska snr</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/739766514"
                          >
                            <span>Matej Perny - Jaroslav Strnad 1964</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/818618968"
                          >
                            <span>Michal Drastich - Radek Limbursky</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/739715205"
                          >
                            <span>Michal Syroha - Jiri Svec</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/836578491"
                          >
                            <span>Michal Syroha - Pavel Sprynar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/790938658"
                          >
                            <span>Milan Chalupnicek - Miloslav Lubas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/803435026"
                          >
                            <span>Milan Fisera - Milan Kolar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/464308697"
                          >
                            <span>Milan Fisera - Petr Vojtech</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/501825424"
                          >
                            <span>Milan Kolar - Petr Vojtech</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/815324206"
                          >
                            <span>Milan Regner - Milan Fisera</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/539534622"
                          >
                            <span>Milan Regner - Milan Kolar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/808139832"
                          >
                            <span>Milan Zika - Kyryl Darin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/871021449"
                          >
                            <span>Milan Zika - Zbynek Zientek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/586423213"
                          >
                            <span>Miloslav Kotil - Josef Rossler</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/767330500"
                          >
                            <span>Miloslav Kotil - Michal Drastich</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/605704460"
                          >
                            <span>Miloslav Kotil - Pavel Kafka</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/899270315"
                          >
                            <span>Miloslav Lubas - David Tomasch</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/755890676"
                          >
                            <span>Miloslav Lubas - Pavel Sprynar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/608259866"
                          >
                            <span>Miroslav Adamec - Jan Briska</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/627769319"
                          >
                            <span>Miroslav Adamec - Lukas Malek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/638931260"
                          >
                            <span>Oldrich Lzicar - Miloslav Kotil</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/718423362"
                          >
                            <span>Oldrich Lzicar - Ondrej Mista</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/521591826"
                          >
                            <span>Ondrej Mista - Miloslav Kotil</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/559600406"
                          >
                            <span>Oskar Spacek - Roman Polovka</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/627493558"
                          >
                            <span>Pavel Kafka - Michal Drastich</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/687131806"
                          >
                            <span>Pavel Sprynar - lubor sulava</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/849760202"
                          >
                            <span>Pavel Sprynar - Milan Chalupnicek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/839274933"
                          >
                            <span>Petr Vojtech - Milan Regner</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/803320715"
                          >
                            <span>Radek Limbursky - Miloslav Kotil</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/716821947"
                          >
                            <span>Radek Limbursky - Pavel Kafka</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/859667965"
                          >
                            <span>Radim Jaros - Vaclav Svoboda</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/899751695"
                          >
                            <span>Roman Polovka - Barta Tomas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/546373191"
                          >
                            <span>Roman Polovka - Kamil Gavelcik</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/592555315"
                          >
                            <span>Simon Kadavy - Jiri Vojtech</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/868553860"
                          >
                            <span>Simon Kadavy - Jiri Zuzanek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/775576239"
                          >
                            <span>Stepan Prazak - Jaroslav Dorazka</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/859554493"
                          >
                            <span>Stepan Prazak - Lubomir Jonas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/660751810"
                          >
                            <span>Tomas Jurdin - Alois Kanak</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/538725840"
                          >
                            <span>Vaclav Svoboda - Bohumil Duben</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/910845282"
                          >
                            <span>Vladimir Cermak - Jaroslav Prokupek</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/551072820"
                          >
                            <span>Zbynek Zientek - Jaromir Kanok</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/816244754"
                          >
                            <span>Zbynek Zientek - Kyryl Darin</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>MEN Setka Cup (World)</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/566895675"
                          >
                            <span>Andrii Lushchyk - Sergey Aristarkhov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/565192929"
                          >
                            <span>Dmitriy Belanchik - Ihor Syniavskyi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/812064453"
                          >
                            <span>Dmitry Zaporozhets - Volodymyr Melnykov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/498904204"
                          >
                            <span>Igor Torgachov - Viktor Ziakun</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/765297146"
                          >
                            <span>Mykhailo Hlaholev - Kyrylo Tkachenko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/781646086"
                          >
                            <span>Mykhailo Kravnytskyi - Ihor Syniavskyi</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/506763670"
                          >
                            <span>Oleg Kurilenko - Vladimir Sedin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/856096789"
                          >
                            <span>Oleg Volynets - Andrei Obishchenko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/639739864"
                          >
                            <span>Oleh Kuzyshyn - Victor Evtodiy</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/510922772"
                          >
                            <span>Oleksandr Lyman - Evhenii Hrytsenko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/586970929"
                          >
                            <span>Oleksandr Lyman - Serhii Priadko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/821815173"
                          >
                            <span>Oleksandr Tymofeev - Vitalii Mukhin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/514527935"
                          >
                            <span>Roman Mazur - Vladimir Ivasiv</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/637356496"
                          >
                            <span>Roman Pomin - Arsenyi Lobanov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/843397246"
                          >
                            <span>Roman Zaporozhets - Igor Torgachov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/890280160"
                          >
                            <span>Roman Zaporozhets - Serhii Priadko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/473173264"
                          >
                            <span>Roman Zholubak - Yevhen Masko</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/710006033"
                          >
                            <span>Rostyslav Fylypiv - Oles Kotsyumbas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/581581608"
                          >
                            <span>Ruslan Khripun - Oleh Kuzyshyn</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/659463136"
                          >
                            <span>Vitaly Boyko - Yaroslav Kravets</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/773511236"
                          >
                            <span>Vladimir Ivasiv - Oleg Savenkov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/8/695465623"
                          >
                            <span>Vladimir Plishilo - Serhii Rak</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Basketball</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>TURKEY Super Lig</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/605519402"
                          >
                            <span>Bahcesehir Koleji - Socar Petkim Spor</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/582652641"
                          >
                            <span>Bursaspor - Darussafaka Dogus</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/793047253"
                          >
                            <span>Buyukcekmece - Turk Telekom</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>LITHUANIA NKL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/713911044"
                          >
                            <span>BC Kursiai - Zalgiris II</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/634230483"
                          >
                            <span>Joniskio Delikatesas - Atletas Kaunas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/794257206"
                          >
                            <span>Vilkaviskio Perlas - KK Silute</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/751672923"
                          >
                            <span>Vilniaus Rytas 2 - Viljnyus Stekas</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/595651817"
                          >
                            <span>Vytis - Kretinga</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PHILIPPINES NCAA</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/788171704"
                          >
                            <span>Sscr Stags - St. Benilde Blazers</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>JAPANB.League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/891718069"
                          >
                            <span>Diamond Dolphins - Sun Rockers</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/861832726"
                          >
                            <span>Kyoto - Yokohama B Corsairs</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/661917009"
                          >
                            <span>Levanga Hokkaido - Akita</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/491475846"
                          >
                            <span>Osaka - Toyama Grouses</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/699425415"
                          >
                            <span>Saga Ballooners - Ryukyu Golden Kings</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/593311267"
                          >
                            <span>
                              Shinshu Brave Warriors Nagano - Ibaraki Robots
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/546905279"
                          >
                            <span>Utsunomiya Brex - Gunma Crane Thunders</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GERMANY BBL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/582842629"
                          >
                            <span>BG Gottingen - Crailsheim Merlins</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/692627137"
                          >
                            <span>Heidelberg - EWE Baskets Oldenburg</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/891936113"
                          >
                            <span>ratiopharm Ulm - Alba Berlin</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/665919504"
                          >
                            <span>
                              SC RASTA Vechta - Walter Tigers Tubingen
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>FRANCE LNB</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/496487545"
                          >
                            <span>Bourg-En-Bresse - Nanterre</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/774637203"
                          >
                            <span>Dijon - Gravelines Dunkerque</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/920921951"
                          >
                            <span>Le Mans - Strasbourg</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/831598829"
                          >
                            <span>Le Portel - Roanne</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/490878780"
                          >
                            <span>Saint Quentin - Elan Chalon</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>USA NBA - Pre-season</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/532344044"
                          >
                            <span>
                              Dallas Mavericks - Minnesota Timberwolves
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/582460476"
                          >
                            <span>Golden State Warriors - L.A. Lakers</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GREECE A1 Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/829317401"
                          >
                            <span>Chania W - Gas Evnikos W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>DENMARK Basketligaen</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/789963096"
                          >
                            <span>Vaerlose BBK - Bakken Bears Academy</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>POLAND 1. Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/760945363"
                          >
                            <span>Kotwica Kolobrzeg - Polpharma Starogard</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/810070722"
                          >
                            <span>WKK Wroclaw - GKS Tychy</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>EUROPE BNXT League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/556836044"
                          >
                            <span>
                              Heroes Den Bosch - Zorg en Zekerheid Leiden
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/745479488"
                          >
                            <span>
                              LWD Lausalec Aris Leeuwarden Basket - Rotterdam
                              Basketball College
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SPAIN ACB</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/804577405"
                          >
                            <span>
                              Quesos Cerrato Palencia - Joventut Badalona
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/632300830"
                          >
                            <span>Ricoh Manresa - CAI Zaragoza</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SWEDEN Superettan</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/832479264"
                          >
                            <span>Sloga Uppsala - IK Eos</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>TURKEY KBSL Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/852234685"
                          >
                            <span>Galatasaray W - Botas Women</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/843845205"
                          >
                            <span>Melikgazi Kayseri W - Antalya 07 W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>DENMARK Kvindebasketligaen Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/549829394"
                          >
                            <span>Amager W - Aabyhoj W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>AUSTRALIA NBL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/482492301"
                          >
                            <span>Brisbane Bullets - Cairns Taipans</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/553255247"
                          >
                            <span>
                              Illawarra Hawks - South East Melbourne Phoenix
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SPAIN LEB Oro</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/872086765"
                          >
                            <span>
                              Union Financiera Baloncesto Oviedo - San Pablo
                              Burgos
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>TURKEY TBL</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/589768419"
                          >
                            <span>Mersin BSB - Igdir</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PORTUGAL LPB</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/732434267"
                          >
                            <span>CD Povoa - AD Galomar</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>PHILIPPINES UAAP</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/15/821209644"
                          >
                            <span>NU Bulldogs - UP Fighting Maroons</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Volleyball</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>WORLD Olympic Games - Qualification</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/898372752"
                          >
                            <span>Brazil - Iran</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/746105025"
                          >
                            <span>China - Argentina</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/733787612"
                          >
                            <span>Italy - Cuba</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/838905410"
                          >
                            <span>Japan - Slovenia</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/859442874"
                          >
                            <span>Poland - Netherlands</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/847674103"
                          >
                            <span>USA - Serbia</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>SPAIN Superliga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/793780820"
                          >
                            <span>CV Kiele Socuellamos W - Cajasol W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/908681768"
                          >
                            <span>Haro Rioja W - Sant Cugat W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/829219840"
                          >
                            <span>
                              Tenerife La Laguna W - Avarca de Menorca W
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>GERMANY1. Bundesliga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/854931426"
                          >
                            <span>Dresdner SC W - SC Potsdam W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/628507086"
                          >
                            <span>
                              Ladies in Black Aachen W - Schweriner SC W
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/723917828"
                          >
                            <span>Neuwied W - Rote Raben Vilsbiburg W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/500985302"
                          >
                            <span>Suhl W - USC Munster W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>FINLAND Mestaruusliiga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/595050446"
                          >
                            <span>KyKy-Betset - Karelian Hurmos</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC 1. liga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/524226769"
                          >
                            <span>Nvc Cvs W - Hradec Kralove W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/870421151"
                          >
                            <span>Sokol Nusle W - Ceske Budejovice W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC 2 Liga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/632560154"
                          >
                            <span>Bilovec W - frydek-mistek B W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/825768923"
                          >
                            <span>
                              Tataran Stresovice B W - Sokol Ceska Trebova W
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/684980135"
                          >
                            <span>VC Kromeriz W - Sokol Slapanice W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>VIETNAM Championship U23</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/482425704"
                          >
                            <span>The Cong U23 - Ben Tre U23</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/474368085"
                          >
                            <span>Tra Vinh U23 - Bien Phong U23</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ASIA Asian Games Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/693857385"
                          >
                            <span>Japan W - China W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/514332055"
                          >
                            <span>Kazakhstan W - North Korea W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/626034247"
                          >
                            <span>South Korea W - Chinese Taipei W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/805811034"
                          >
                            <span>Vietnam W - Thailand W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>VIETNAM Championship U23 Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/719286917"
                          >
                            <span>Btl Thong Tin Youth W - Vinh Long W U23</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/656341560"
                          >
                            <span>Thai Nguyen W U23 - Ha Noi U23 W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>FINLAND Mestaruusliiga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/921322238"
                          >
                            <span>Arctic Rovaniemi W - Puijo W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/563520394"
                          >
                            <span>LP Kangasala W - LiigaPloki W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>UGANDA National League A</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/638211943"
                          >
                            <span>Sky - KAVC-A</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC Extraliga Women</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/695826892"
                          >
                            <span>Olymp Prague W - SK UP Olomouc W</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/18/646339964"
                          >
                            <span>Vk Brno W - VK Agel Prostejov W</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Snooker</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ENGLAND ENGLISH OPEN - QUARTER-FINALS</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/59/657168170"
                          >
                            <span>John Higgins - Judd Trump</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/59/786180400"
                          >
                            <span>Zhang Anda - Liu Hongyu</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Ice Hockey</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC Chance Liga</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/692494982"
                          >
                            <span>HC Slavia Praha - Orli Znojmo</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/797947746"
                          >
                            <span>HC ZUBR Prerov - Dynamo Pardubice B</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/820961678"
                          >
                            <span>Kolin - LHK Jestrabi Prostejov</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/891038267"
                          >
                            <span>
                              SK Horacka Slavia Trebic - Frydek-Mistek
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>CZECH REPUBLIC ELJ</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/595468610"
                          >
                            <span>
                              Ceske Budejovice U20 - Mlada Boleslav U20
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/830287117"
                          >
                            <span>Dukla Jihlava U20 - Vitkovice U20</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/899290566"
                          >
                            <span>Litvinov U20 - Plzen U20</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>KAZAKHSTAN Championship</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/885809151"
                          >
                            <span>
                              Kazzinc Torpedo Ust Kamenogorsk - Gornyak Rudny
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/508923472"
                          >
                            <span>Nomad - Beibarys Atyrau</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/610491842"
                          >
                            <span>Saryarka - HC Aktobe</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>ASIA Asia League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/901980781"
                          >
                            <span>Nikko Ice Bucks - Yokohama Grits</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/19/543155907"
                          >
                            <span>Tohoku Free Blades - Anyang Halla</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>E Games</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>COUNTER - STRIKE - CCT South America</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/705353153"
                          >
                            <span>Escolinha Do Gugu - Team Solid</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/596111035"
                          >
                            <span>MIBR Academy - UNO MILLE</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/594826539"
                          >
                            <span>Oddik - Meta Gaming</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>COUNTER - STRIKE - Esports Battle</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/858649630"
                          >
                            <span>Gameinside - Purple haze</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/611544424"
                          >
                            <span>Purple haze - Gameinside</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/604534499"
                          >
                            <span>Rembaza - sEight</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>COUNTER - STRIKE BLAST Premier</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/568931943"
                          >
                            <span>Party Astronauts - Team Liquid</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>COUNTER - STRIKE Aveiro Techdays Cup</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/610515835"
                          >
                            <span>Rhyno - Perroflautas</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>
                          COUNTER - STRIKE Blast Premier Fall (Europe)
                        </span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/643614611"
                          >
                            <span>Cloud9 - G2 Esports</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-toggle nav-link">
                        <i className="far fa-plus-square me-1"></i>
                        <span>COUNTER - STRIKE - European Pro League</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/750995718"
                          >
                            <span>FTW - Illuminar</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-toggle nav-link"
                            href="/game-details/11/876421101"
                          >
                            <span>Nexus - MOUZ NXT</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Futsal</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Handball</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Kabaddi</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Golf</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Rugby League</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Boxing</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Beach Volleyball</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Mixed Martial Arts</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>MotoGP</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Chess</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Badminton</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Cycling</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Motorbikes</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Athletics</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Basketball 3X3</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Sumo</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Virtual sports</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Motor Sports</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Baseball</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Rugby Union</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Darts</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>American Football</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Soccer</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Esports</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link">
                    <i className="far fa-plus-square me-1"></i>
                    <span>Boat Racing</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
