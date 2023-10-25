import { useEffect, useState } from "react";
const SettleBetsModal = ({
  setShowModal,
  showModal,
  data,
  modalData,
  setFilteredData,
}) => {
  const [sportsRef, setSportsRef] = useState("");
  console.log(data);
  /* Filter sports */
  useEffect(() => {
    if (sportsRef !== "all" && sportsRef !== "") {
      const filterLayBack = modalData.filter(
        (game) => game.betType === sportsRef
      );
      setFilteredData(filterLayBack);
    } else if (sportsRef === "all") {
      setFilteredData(modalData);
    }
  }, [sportsRef, modalData, setFilteredData]);

  /* Total sum */
  let total = 0;
  for (const d of data) {
    total = total + d.win;
  }

  return (
    <>
      <div className={`fade modal-backdrop show`}></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade modal show"
        tabIndex="-1"
        style={{
          paddingRight: "17px",
          display: "block",
        }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title h4">Result</div>
              <button
                onClick={() => setShowModal(!showModal)}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mt-1">
                {data[0]?.sports} -&gt; {data[0]?.eventName} -&gt;{" "}
                {data[0]?.marketName}
              </div>
              <div className="mt-1">Winner: {data[0]?.winner}</div>
              <div className="row mt-4 justify-content-between">
                <div className="col-md-6">
                  <div className="form-check form-check-inline">
                    <input
                      onClick={(e) => setSportsRef(e.target.value)}
                      type="radio"
                      className="form-check-input"
                      id="all"
                      name="filter"
                      value="all"
                    />
                    All
                    <label className="form-check-label" htmlFor="all"></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={(e) => setSportsRef(e.target.value)}
                      type="radio"
                      className="form-check-input"
                      id="back"
                      name="filter"
                      value="Back"
                    />
                    Back
                    <label className="form-check-label" htmlFor="Back"></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={(e) => setSportsRef(e.target.value)}
                      type="radio"
                      className="form-check-input"
                      id="lay"
                      name="filter"
                      value="Lay"
                    />
                    Lay
                    <label className="form-check-label" htmlFor="lay"></label>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div>
                    Total Bets: <span className="me-2">{data.length}</span>
                    Total Amount:
                    <span className="me-2 text-danger">{total}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 table-responsive">
                <table
                  role="table"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr role="row">
                      <th colSpan="1" role="columnheader">
                        Nation
                      </th>
                      <th colSpan="1" role="columnheader" className="text-end">
                        Rate
                      </th>
                      <th colSpan="1" role="columnheader" className="text-end">
                        Bhav
                      </th>
                      <th colSpan="1" role="columnheader" className="text-end">
                        Amount
                      </th>
                      <th colSpan="1" role="columnheader" className="text-end">
                        Win
                      </th>
                      <th colSpan="1" role="columnheader">
                        Date
                      </th>
                      <th colSpan="1" role="columnheader">
                        Ip Address
                      </th>
                      <th colSpan="1" role="columnheader">
                        Browser Details
                      </th>
                      <th colSpan="1" role="columnheader">
                        <div className="text-end">
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              title="Toggle All Rows Selected"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody role="rowgroup">
                    {data.map((d, i) => {
                      const {
                        amount,
                        betType,
                        bhav,
                        eventName,
                        ipAddress,
                        placeDate,
                        userRate,
                        win,
                      } = d;
                      return (
                        <tr
                          key={i}
                          role="row"
                          className={`${betType === "Lay" ? "lay" : "back"}`}
                        >
                          <td role="cell">{eventName}</td>
                          <td role="cell" className="text-end">
                            {userRate}
                          </td>
                          <td role="cell" className="text-end">
                            {bhav}
                          </td>
                          <td role="cell" className="text-end">
                            {amount}
                          </td>
                          <td role="cell" className="text-end">
                            <span
                              role="cell"
                              className={`${
                                win > 0 ? "text-success" : "text-danger"
                              }`}
                            >
                              {win}
                            </span>
                          </td>
                          <td role="cell">
                            <span role="cell">{placeDate}</span>
                          </td>
                          <td role="cell">{ipAddress}</td>
                          <td role="cell">
                            <u>Detail</u>
                          </td>
                          <td role="cell">
                            <div className="text-end">
                              <div className="form-check form-check-inline">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  title="Toggle Row Selected"
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettleBetsModal;
