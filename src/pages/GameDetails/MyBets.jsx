const MyBets = ({ myBets }) => {
  return (
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
  );
};

export default MyBets;
