const MatchBets = () => {
    return (
        <div className="d-none">
        <div className="table-responsive">
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
    );
};

export default MatchBets;