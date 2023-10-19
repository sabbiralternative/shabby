const BetTable = ({ data }) => {
  const {
    amount,
    // betId,
    betType,
    eventName,
    // is_matched,
    marketName,
    nation,
    placeDate,
    sports,
    userRate,
  } = data;
  return (
    <>
      <tr role="row" className={`${betType === "Lay" ? 'lay':'back'}`}>
        <td role="cell" className="report-sport">
          {sports}
        </td>
        <td role="cell">{eventName}</td>
        <td role="cell">{marketName}</td>
        <td role="cell">
          <span role="cell">{nation}</span>
        </td>
        <td role="cell" className="report-amount text-end">
        {userRate}
        </td>
        <td role="cell" className="report-amount text-end">
     {amount}
        </td>
        <td role="cell" className="report-date">
        {placeDate}
        </td>
        <td role="cell" className="report-action">
          <div className="text-end">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                title="Toggle Row Selected"
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BetTable;
