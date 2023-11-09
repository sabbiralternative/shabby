const MyBets = ({ myBets, slug }) => {
  return (
    <>
      <div className="sidebar-box my-bet-container">
        <div className="sidebar-title">
          <h4>My Bet</h4>
        </div>
        <div className="my-bets">
          <div className={`${myBets?.length > 0 ? "table-responsive" : ""}`}>
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
      {slug == "teen20" ? (
        <div className="sidebar-box my-bet-container">
          <div className="sidebar-title">
            <h4>Rules</h4>
          </div>
          <div className="">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      Pair Plus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pair</td>
                    <td>1 TO 1</td>
                  </tr>
                  <tr>
                    <td>Flush</td>
                    <td>1 TO 4</td>
                  </tr>
                  <tr>
                    <td>Straight</td>
                    <td>1 TO 6</td>
                  </tr>
                  <tr>
                    <td>Trio</td>
                    <td>1 TO 30</td>
                  </tr>
                  <tr>
                    <td>Straight Flush</td>
                    <td>1 TO 40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MyBets;
