const DiamondHeader = ({data,myBets}) => {
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
              <li className="nav-item">
                <div className="nav-link active">Game</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Placed Bet ({myBets?.length})</div>
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