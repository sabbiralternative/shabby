const DiamondHeader = ({data,myBets,setTabs,tabs}) => {
    return (
        <>
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
              <li
              onClick={()=> setTabs('game')}
              className="nav-item"
              style={{cursor:'pointer'}}
              >
                <div className={`nav-link ${tabs === 'game' ? 'active':''}`}>Game</div>
              </li>
              <li
              onClick={()=> setTabs('placedBet')}
              className="nav-item"
              style={{cursor:'pointer'}}
              >
                <div className={`nav-link ${tabs === 'placedBet' ? 'active':''}`}>Placed Bet ({myBets?.length})</div>
              </li>
            </ul>
     
              <div className="pe-2">
              <span className="casino-rid">
                Round ID: <span>{data[0]?.roundId}</span>
              </span>
            </div>
          
          </div> 
        </>
    );
};

export default DiamondHeader;